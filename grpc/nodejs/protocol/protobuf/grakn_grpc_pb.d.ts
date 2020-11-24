// package: grakn.protocol
// file: grakn.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as grakn_pb from "./grakn_pb";
import * as database_pb from "./database_pb";
import * as session_pb from "./session_pb";
import * as transaction_pb from "./transaction_pb";

interface IGraknService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    database_contains: IGraknService_Idatabase_contains;
    database_create: IGraknService_Idatabase_create;
    database_all: IGraknService_Idatabase_all;
    database_delete: IGraknService_Idatabase_delete;
    session_open: IGraknService_Isession_open;
    session_close: IGraknService_Isession_close;
    transaction: IGraknService_Itransaction;
}

interface IGraknService_Idatabase_contains extends grpc.MethodDefinition<database_pb.Database.Contains.Req, database_pb.Database.Contains.Res> {
    path: "/grakn.protocol.Grakn/database_contains";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<database_pb.Database.Contains.Req>;
    requestDeserialize: grpc.deserialize<database_pb.Database.Contains.Req>;
    responseSerialize: grpc.serialize<database_pb.Database.Contains.Res>;
    responseDeserialize: grpc.deserialize<database_pb.Database.Contains.Res>;
}
interface IGraknService_Idatabase_create extends grpc.MethodDefinition<database_pb.Database.Create.Req, database_pb.Database.Create.Res> {
    path: "/grakn.protocol.Grakn/database_create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<database_pb.Database.Create.Req>;
    requestDeserialize: grpc.deserialize<database_pb.Database.Create.Req>;
    responseSerialize: grpc.serialize<database_pb.Database.Create.Res>;
    responseDeserialize: grpc.deserialize<database_pb.Database.Create.Res>;
}
interface IGraknService_Idatabase_all extends grpc.MethodDefinition<database_pb.Database.All.Req, database_pb.Database.All.Res> {
    path: "/grakn.protocol.Grakn/database_all";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<database_pb.Database.All.Req>;
    requestDeserialize: grpc.deserialize<database_pb.Database.All.Req>;
    responseSerialize: grpc.serialize<database_pb.Database.All.Res>;
    responseDeserialize: grpc.deserialize<database_pb.Database.All.Res>;
}
interface IGraknService_Idatabase_delete extends grpc.MethodDefinition<database_pb.Database.Delete.Req, database_pb.Database.Delete.Res> {
    path: "/grakn.protocol.Grakn/database_delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<database_pb.Database.Delete.Req>;
    requestDeserialize: grpc.deserialize<database_pb.Database.Delete.Req>;
    responseSerialize: grpc.serialize<database_pb.Database.Delete.Res>;
    responseDeserialize: grpc.deserialize<database_pb.Database.Delete.Res>;
}
interface IGraknService_Isession_open extends grpc.MethodDefinition<session_pb.Session.Open.Req, session_pb.Session.Open.Res> {
    path: "/grakn.protocol.Grakn/session_open";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<session_pb.Session.Open.Req>;
    requestDeserialize: grpc.deserialize<session_pb.Session.Open.Req>;
    responseSerialize: grpc.serialize<session_pb.Session.Open.Res>;
    responseDeserialize: grpc.deserialize<session_pb.Session.Open.Res>;
}
interface IGraknService_Isession_close extends grpc.MethodDefinition<session_pb.Session.Close.Req, session_pb.Session.Close.Res> {
    path: "/grakn.protocol.Grakn/session_close";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<session_pb.Session.Close.Req>;
    requestDeserialize: grpc.deserialize<session_pb.Session.Close.Req>;
    responseSerialize: grpc.serialize<session_pb.Session.Close.Res>;
    responseDeserialize: grpc.deserialize<session_pb.Session.Close.Res>;
}
interface IGraknService_Itransaction extends grpc.MethodDefinition<transaction_pb.Transaction.Req, transaction_pb.Transaction.Res> {
    path: "/grakn.protocol.Grakn/transaction";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<transaction_pb.Transaction.Req>;
    requestDeserialize: grpc.deserialize<transaction_pb.Transaction.Req>;
    responseSerialize: grpc.serialize<transaction_pb.Transaction.Res>;
    responseDeserialize: grpc.deserialize<transaction_pb.Transaction.Res>;
}

export const GraknService: IGraknService;

export interface IGraknServer {
    database_contains: grpc.handleUnaryCall<database_pb.Database.Contains.Req, database_pb.Database.Contains.Res>;
    database_create: grpc.handleUnaryCall<database_pb.Database.Create.Req, database_pb.Database.Create.Res>;
    database_all: grpc.handleUnaryCall<database_pb.Database.All.Req, database_pb.Database.All.Res>;
    database_delete: grpc.handleUnaryCall<database_pb.Database.Delete.Req, database_pb.Database.Delete.Res>;
    session_open: grpc.handleUnaryCall<session_pb.Session.Open.Req, session_pb.Session.Open.Res>;
    session_close: grpc.handleUnaryCall<session_pb.Session.Close.Req, session_pb.Session.Close.Res>;
    transaction: grpc.handleBidiStreamingCall<transaction_pb.Transaction.Req, transaction_pb.Transaction.Res>;
}

export interface IGraknClient {
    database_contains(request: database_pb.Database.Contains.Req, callback: (error: grpc.ServiceError | null, response: database_pb.Database.Contains.Res) => void): grpc.ClientUnaryCall;
    database_contains(request: database_pb.Database.Contains.Req, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: database_pb.Database.Contains.Res) => void): grpc.ClientUnaryCall;
    database_contains(request: database_pb.Database.Contains.Req, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: database_pb.Database.Contains.Res) => void): grpc.ClientUnaryCall;
    database_create(request: database_pb.Database.Create.Req, callback: (error: grpc.ServiceError | null, response: database_pb.Database.Create.Res) => void): grpc.ClientUnaryCall;
    database_create(request: database_pb.Database.Create.Req, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: database_pb.Database.Create.Res) => void): grpc.ClientUnaryCall;
    database_create(request: database_pb.Database.Create.Req, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: database_pb.Database.Create.Res) => void): grpc.ClientUnaryCall;
    database_all(request: database_pb.Database.All.Req, callback: (error: grpc.ServiceError | null, response: database_pb.Database.All.Res) => void): grpc.ClientUnaryCall;
    database_all(request: database_pb.Database.All.Req, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: database_pb.Database.All.Res) => void): grpc.ClientUnaryCall;
    database_all(request: database_pb.Database.All.Req, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: database_pb.Database.All.Res) => void): grpc.ClientUnaryCall;
    database_delete(request: database_pb.Database.Delete.Req, callback: (error: grpc.ServiceError | null, response: database_pb.Database.Delete.Res) => void): grpc.ClientUnaryCall;
    database_delete(request: database_pb.Database.Delete.Req, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: database_pb.Database.Delete.Res) => void): grpc.ClientUnaryCall;
    database_delete(request: database_pb.Database.Delete.Req, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: database_pb.Database.Delete.Res) => void): grpc.ClientUnaryCall;
    session_open(request: session_pb.Session.Open.Req, callback: (error: grpc.ServiceError | null, response: session_pb.Session.Open.Res) => void): grpc.ClientUnaryCall;
    session_open(request: session_pb.Session.Open.Req, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: session_pb.Session.Open.Res) => void): grpc.ClientUnaryCall;
    session_open(request: session_pb.Session.Open.Req, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: session_pb.Session.Open.Res) => void): grpc.ClientUnaryCall;
    session_close(request: session_pb.Session.Close.Req, callback: (error: grpc.ServiceError | null, response: session_pb.Session.Close.Res) => void): grpc.ClientUnaryCall;
    session_close(request: session_pb.Session.Close.Req, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: session_pb.Session.Close.Res) => void): grpc.ClientUnaryCall;
    session_close(request: session_pb.Session.Close.Req, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: session_pb.Session.Close.Res) => void): grpc.ClientUnaryCall;
    transaction(): grpc.ClientDuplexStream<transaction_pb.Transaction.Req, transaction_pb.Transaction.Res>;
    transaction(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<transaction_pb.Transaction.Req, transaction_pb.Transaction.Res>;
    transaction(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<transaction_pb.Transaction.Req, transaction_pb.Transaction.Res>;
}

export class GraknClient extends grpc.Client implements IGraknClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public database_contains(request: database_pb.Database.Contains.Req, callback: (error: grpc.ServiceError | null, response: database_pb.Database.Contains.Res) => void): grpc.ClientUnaryCall;
    public database_contains(request: database_pb.Database.Contains.Req, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: database_pb.Database.Contains.Res) => void): grpc.ClientUnaryCall;
    public database_contains(request: database_pb.Database.Contains.Req, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: database_pb.Database.Contains.Res) => void): grpc.ClientUnaryCall;
    public database_create(request: database_pb.Database.Create.Req, callback: (error: grpc.ServiceError | null, response: database_pb.Database.Create.Res) => void): grpc.ClientUnaryCall;
    public database_create(request: database_pb.Database.Create.Req, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: database_pb.Database.Create.Res) => void): grpc.ClientUnaryCall;
    public database_create(request: database_pb.Database.Create.Req, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: database_pb.Database.Create.Res) => void): grpc.ClientUnaryCall;
    public database_all(request: database_pb.Database.All.Req, callback: (error: grpc.ServiceError | null, response: database_pb.Database.All.Res) => void): grpc.ClientUnaryCall;
    public database_all(request: database_pb.Database.All.Req, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: database_pb.Database.All.Res) => void): grpc.ClientUnaryCall;
    public database_all(request: database_pb.Database.All.Req, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: database_pb.Database.All.Res) => void): grpc.ClientUnaryCall;
    public database_delete(request: database_pb.Database.Delete.Req, callback: (error: grpc.ServiceError | null, response: database_pb.Database.Delete.Res) => void): grpc.ClientUnaryCall;
    public database_delete(request: database_pb.Database.Delete.Req, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: database_pb.Database.Delete.Res) => void): grpc.ClientUnaryCall;
    public database_delete(request: database_pb.Database.Delete.Req, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: database_pb.Database.Delete.Res) => void): grpc.ClientUnaryCall;
    public session_open(request: session_pb.Session.Open.Req, callback: (error: grpc.ServiceError | null, response: session_pb.Session.Open.Res) => void): grpc.ClientUnaryCall;
    public session_open(request: session_pb.Session.Open.Req, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: session_pb.Session.Open.Res) => void): grpc.ClientUnaryCall;
    public session_open(request: session_pb.Session.Open.Req, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: session_pb.Session.Open.Res) => void): grpc.ClientUnaryCall;
    public session_close(request: session_pb.Session.Close.Req, callback: (error: grpc.ServiceError | null, response: session_pb.Session.Close.Res) => void): grpc.ClientUnaryCall;
    public session_close(request: session_pb.Session.Close.Req, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: session_pb.Session.Close.Res) => void): grpc.ClientUnaryCall;
    public session_close(request: session_pb.Session.Close.Req, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: session_pb.Session.Close.Res) => void): grpc.ClientUnaryCall;
    public transaction(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<transaction_pb.Transaction.Req, transaction_pb.Transaction.Res>;
    public transaction(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<transaction_pb.Transaction.Req, transaction_pb.Transaction.Res>;
}
