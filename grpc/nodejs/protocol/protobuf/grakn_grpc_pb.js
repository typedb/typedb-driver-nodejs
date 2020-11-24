// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
//
// Copyright (C) 2020 Grakn Labs
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.
//
//
'use strict';
var grpc = require('grpc');
var database_pb = require('./database_pb.js');
var session_pb = require('./session_pb.js');
var transaction_pb = require('./transaction_pb.js');

function serialize_grakn_protocol_Database_All_Req(arg) {
  if (!(arg instanceof database_pb.Database.All.Req)) {
    throw new Error('Expected argument of type grakn.protocol.Database.All.Req');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grakn_protocol_Database_All_Req(buffer_arg) {
  return database_pb.Database.All.Req.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grakn_protocol_Database_All_Res(arg) {
  if (!(arg instanceof database_pb.Database.All.Res)) {
    throw new Error('Expected argument of type grakn.protocol.Database.All.Res');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grakn_protocol_Database_All_Res(buffer_arg) {
  return database_pb.Database.All.Res.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grakn_protocol_Database_Contains_Req(arg) {
  if (!(arg instanceof database_pb.Database.Contains.Req)) {
    throw new Error('Expected argument of type grakn.protocol.Database.Contains.Req');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grakn_protocol_Database_Contains_Req(buffer_arg) {
  return database_pb.Database.Contains.Req.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grakn_protocol_Database_Contains_Res(arg) {
  if (!(arg instanceof database_pb.Database.Contains.Res)) {
    throw new Error('Expected argument of type grakn.protocol.Database.Contains.Res');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grakn_protocol_Database_Contains_Res(buffer_arg) {
  return database_pb.Database.Contains.Res.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grakn_protocol_Database_Create_Req(arg) {
  if (!(arg instanceof database_pb.Database.Create.Req)) {
    throw new Error('Expected argument of type grakn.protocol.Database.Create.Req');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grakn_protocol_Database_Create_Req(buffer_arg) {
  return database_pb.Database.Create.Req.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grakn_protocol_Database_Create_Res(arg) {
  if (!(arg instanceof database_pb.Database.Create.Res)) {
    throw new Error('Expected argument of type grakn.protocol.Database.Create.Res');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grakn_protocol_Database_Create_Res(buffer_arg) {
  return database_pb.Database.Create.Res.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grakn_protocol_Database_Delete_Req(arg) {
  if (!(arg instanceof database_pb.Database.Delete.Req)) {
    throw new Error('Expected argument of type grakn.protocol.Database.Delete.Req');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grakn_protocol_Database_Delete_Req(buffer_arg) {
  return database_pb.Database.Delete.Req.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grakn_protocol_Database_Delete_Res(arg) {
  if (!(arg instanceof database_pb.Database.Delete.Res)) {
    throw new Error('Expected argument of type grakn.protocol.Database.Delete.Res');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grakn_protocol_Database_Delete_Res(buffer_arg) {
  return database_pb.Database.Delete.Res.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grakn_protocol_Session_Close_Req(arg) {
  if (!(arg instanceof session_pb.Session.Close.Req)) {
    throw new Error('Expected argument of type grakn.protocol.Session.Close.Req');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grakn_protocol_Session_Close_Req(buffer_arg) {
  return session_pb.Session.Close.Req.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grakn_protocol_Session_Close_Res(arg) {
  if (!(arg instanceof session_pb.Session.Close.Res)) {
    throw new Error('Expected argument of type grakn.protocol.Session.Close.Res');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grakn_protocol_Session_Close_Res(buffer_arg) {
  return session_pb.Session.Close.Res.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grakn_protocol_Session_Open_Req(arg) {
  if (!(arg instanceof session_pb.Session.Open.Req)) {
    throw new Error('Expected argument of type grakn.protocol.Session.Open.Req');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grakn_protocol_Session_Open_Req(buffer_arg) {
  return session_pb.Session.Open.Req.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grakn_protocol_Session_Open_Res(arg) {
  if (!(arg instanceof session_pb.Session.Open.Res)) {
    throw new Error('Expected argument of type grakn.protocol.Session.Open.Res');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grakn_protocol_Session_Open_Res(buffer_arg) {
  return session_pb.Session.Open.Res.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grakn_protocol_Transaction_Req(arg) {
  if (!(arg instanceof transaction_pb.Transaction.Req)) {
    throw new Error('Expected argument of type grakn.protocol.Transaction.Req');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grakn_protocol_Transaction_Req(buffer_arg) {
  return transaction_pb.Transaction.Req.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grakn_protocol_Transaction_Res(arg) {
  if (!(arg instanceof transaction_pb.Transaction.Res)) {
    throw new Error('Expected argument of type grakn.protocol.Transaction.Res');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grakn_protocol_Transaction_Res(buffer_arg) {
  return transaction_pb.Transaction.Res.deserializeBinary(new Uint8Array(buffer_arg));
}


var GraknService = exports.GraknService = {
  database_contains: {
    path: '/grakn.protocol.Grakn/database_contains',
    requestStream: false,
    responseStream: false,
    requestType: database_pb.Database.Contains.Req,
    responseType: database_pb.Database.Contains.Res,
    requestSerialize: serialize_grakn_protocol_Database_Contains_Req,
    requestDeserialize: deserialize_grakn_protocol_Database_Contains_Req,
    responseSerialize: serialize_grakn_protocol_Database_Contains_Res,
    responseDeserialize: deserialize_grakn_protocol_Database_Contains_Res,
  },
  database_create: {
    path: '/grakn.protocol.Grakn/database_create',
    requestStream: false,
    responseStream: false,
    requestType: database_pb.Database.Create.Req,
    responseType: database_pb.Database.Create.Res,
    requestSerialize: serialize_grakn_protocol_Database_Create_Req,
    requestDeserialize: deserialize_grakn_protocol_Database_Create_Req,
    responseSerialize: serialize_grakn_protocol_Database_Create_Res,
    responseDeserialize: deserialize_grakn_protocol_Database_Create_Res,
  },
  database_all: {
    path: '/grakn.protocol.Grakn/database_all',
    requestStream: false,
    responseStream: false,
    requestType: database_pb.Database.All.Req,
    responseType: database_pb.Database.All.Res,
    requestSerialize: serialize_grakn_protocol_Database_All_Req,
    requestDeserialize: deserialize_grakn_protocol_Database_All_Req,
    responseSerialize: serialize_grakn_protocol_Database_All_Res,
    responseDeserialize: deserialize_grakn_protocol_Database_All_Res,
  },
  database_delete: {
    path: '/grakn.protocol.Grakn/database_delete',
    requestStream: false,
    responseStream: false,
    requestType: database_pb.Database.Delete.Req,
    responseType: database_pb.Database.Delete.Res,
    requestSerialize: serialize_grakn_protocol_Database_Delete_Req,
    requestDeserialize: deserialize_grakn_protocol_Database_Delete_Req,
    responseSerialize: serialize_grakn_protocol_Database_Delete_Res,
    responseDeserialize: deserialize_grakn_protocol_Database_Delete_Res,
  },
  session_open: {
    path: '/grakn.protocol.Grakn/session_open',
    requestStream: false,
    responseStream: false,
    requestType: session_pb.Session.Open.Req,
    responseType: session_pb.Session.Open.Res,
    requestSerialize: serialize_grakn_protocol_Session_Open_Req,
    requestDeserialize: deserialize_grakn_protocol_Session_Open_Req,
    responseSerialize: serialize_grakn_protocol_Session_Open_Res,
    responseDeserialize: deserialize_grakn_protocol_Session_Open_Res,
  },
  session_close: {
    path: '/grakn.protocol.Grakn/session_close',
    requestStream: false,
    responseStream: false,
    requestType: session_pb.Session.Close.Req,
    responseType: session_pb.Session.Close.Res,
    requestSerialize: serialize_grakn_protocol_Session_Close_Req,
    requestDeserialize: deserialize_grakn_protocol_Session_Close_Req,
    responseSerialize: serialize_grakn_protocol_Session_Close_Res,
    responseDeserialize: deserialize_grakn_protocol_Session_Close_Res,
  },
  // Opens a bi-directional stream representing a stateful transaction, streaming
// requests and responses back-and-forth. The first request message must
// be {Transaction.Open.Req}. Closing the stream closes the transaction.
transaction: {
    path: '/grakn.protocol.Grakn/transaction',
    requestStream: true,
    responseStream: true,
    requestType: transaction_pb.Transaction.Req,
    responseType: transaction_pb.Transaction.Res,
    requestSerialize: serialize_grakn_protocol_Transaction_Req,
    requestDeserialize: deserialize_grakn_protocol_Transaction_Req,
    responseSerialize: serialize_grakn_protocol_Transaction_Res,
    responseDeserialize: deserialize_grakn_protocol_Transaction_Res,
  },
};

exports.GraknClient = grpc.makeGenericClientConstructor(GraknService);
