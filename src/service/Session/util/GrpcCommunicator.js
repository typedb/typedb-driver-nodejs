/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

const util = require('util');

function SingleResponse(resolve, reject) {
  this._reject = reject
  this._resolve = resolve
}

SingleResponse.prototype._onResponse = function (resp) {
  this._resolve(resp)
  return false
}

SingleResponse.prototype._onError = function (err) {
  this._reject(err)
}

function MultiResponse(endEvaluator) {
  this._responseQueue = []
  this._readerQueue = []
  this._endEvaluator = endEvaluator
}

MultiResponse.prototype.next = function () {
  const responseQueue = this._responseQueue

  if (responseQueue.length > 0) {
    return Promise.resolve(responseQueue.shift())
  }

  const err = this._error
  if (err) {
    return Promise.reject(err)
  }

  if (this._finished) {
    return Promise.resolve(null) // Iterator-style empty result for finished stream
  }

  return new Promise((resolve, reject) => {
    this._readerQueue.push({resolve, reject})
  })
}

MultiResponse.prototype._onResponse = function (response) {
  const readerQueue = this._readerQueue
  if (readerQueue.length > 0) {
    readerQueue.shift().resolve(response)
  } else {
    this._responseQueue.push(response)
  }

  if (this._endEvaluator(response)) {
    this._finished = true
    return false
  }

  return true
}

MultiResponse.prototype._onError = function (err) {
  const readerQueue = this._readerQueue

  if (readerQueue === null) {
    return // Have already received an error
  }

  for (let reader of readerQueue) {
    reader.reject(err)
  }

  this._readerQueue = null // We can never have more readers added after an error

  this._finished = true
  this._error = err
}

/**
 * Wrapper for Duplex Stream that exposes method to send new requests and returns
 * responses as results of Promises.
 * @param {*} stream 
 */
function GrpcCommunicator(stream) {
  this.stream = stream;
  this.pending = [];

  this.stream.on('data', resp => {
    // console.log('resp: ' + util.inspect(resp.toObject()))
    if (!this.pending[0]._onResponse(resp)) {
      this.pending.shift() // Only remove if resolver returns falsy
    }
  });

  this.stream.on('error', err => {
    this.end();
    if (this.pending.length) {
      for (let p of this.pending) {
        p._onError(err);
      }
    } else {
      throw err;
    }
  });

  this.stream.on('status', (e) => {
    if (this.pending.length) {
      this.pending.shift()._onError(e);
    }
  })
}

GrpcCommunicator.prototype.send = function (request) {
  // console.log('sing: ' + util.inspect(request.toObject()))
  if(!this.stream.writable) throw 'Transaction is already closed.';
  return new Promise((resolve, reject) => {
    this.pending.push(new SingleResponse(resolve, reject));
    this.stream.write(request);
  })
};

GrpcCommunicator.prototype.iterateUntil = function (request, endEvaluator) {
  // console.log('iter: ' + util.inspect(request.toObject()))
  if(!this.stream.writable) throw 'Transaction is already closed.';
  return new Promise((resolve) => {
    const responseIterator = new MultiResponse(endEvaluator);
    this.pending.push(responseIterator);
    this.stream.write(request);
    resolve(responseIterator);
  });
};

GrpcCommunicator.prototype.end = function end() {
  if(this.stream.writable) { // transaction is still open
    this.stream.end();
    return new Promise((resolve) => {
      this.stream.on('end', resolve);
    });
  }
};

module.exports = GrpcCommunicator;