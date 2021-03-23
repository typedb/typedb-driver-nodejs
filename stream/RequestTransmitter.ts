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


import {Transaction} from "grakn-protocol/common/transaction_pb";
import {ClientDuplexStream} from "@grpc/grpc-js";

export class BatchDispatcher {

    private readonly _transmitter: RequestTransmitter;
    private readonly _bufferedRequests: Transaction.Req[];
    private readonly _transactionStream: ClientDuplexStream<Transaction.Client, Transaction.Server>;

    constructor(transmitter: RequestTransmitter, transactionStream: ClientDuplexStream<Transaction.Client, Transaction.Server>) {
        this._transmitter = transmitter;
        this._transactionStream = transactionStream;
        this._bufferedRequests = new Array<Transaction.Req>();
    }

    public dispatch(req : Transaction.Req): void {

    }

    public dispatchNow(req: Transaction.Req): void {

    }

    close(): void {
        this._transmitter._dispatchers.delete(this);
        this._transactionStream.end();
    }

}

export class RequestTransmitter {

    private _isOpen: boolean;
    readonly _dispatchers: Set<BatchDispatcher>;

    constructor() {
        this._dispatchers = new Set<BatchDispatcher>();
        this._isOpen = true;
    }

    public close() : void {
        if (this._isOpen) {
            this._isOpen = false;
            this._dispatchers.forEach(dispatcher => dispatcher.close());
        }
    }

    public dispatcher(transactionStream: ClientDuplexStream<Transaction.Client, Transaction.Server>) : BatchDispatcher {
        let dispatcher = new BatchDispatcher(this, transactionStream);
        this._dispatchers.add(dispatcher);
        return dispatcher;
    }

}