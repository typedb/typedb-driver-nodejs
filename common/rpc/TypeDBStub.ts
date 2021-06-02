/*
 * Copyright (C) 2021 Vaticle
 *
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


import {TypeDBClientError} from "../errors/TypeDBClientError";
import {CoreDatabaseManager} from "typedb-protocol/core/core_database_pb";
import {TypeDBClient} from "typedb-protocol/core/core_service_grpc_pb";

export abstract class TypeDBStub {

    private _stub: TypeDBClient;

    constructor(stub: TypeDBClient) {
        this._stub = stub;
    }

    databasesCreate(req: CoreDatabaseManager.Create.Req): Promise<void> {
        return new Promise((resolve, reject) => {
            this._stub.databases_create(req, (err) => {
                if (err) reject(new TypeDBClientError(err));
                else resolve();
            })
        });
    }



//     public  databasesContains(req: CoreDatabaseManager.Contains): Promise<CoreDatabaseManager.Contains.Res> {
//     return this.resilientCall(() -> this._stub.databasesContains(request));
// }
//
// public CoreDatabaseManager.Create.Res databasesCreate(CoreDatabaseManager.Create.Req request) {
//     return this.resilientCall(() -> this._stub.databasesCreate(request));
// }
//
// public CoreDatabaseManager.All.Res databasesAll(CoreDatabaseManager.All.Req request) {
//     return this.resilientCall(() -> this._stub.databasesAll(request));
// }
//
// public CoreDatabase.Schema.Res databaseSchema(CoreDatabase.Schema.Req request) {
//     return this.resilientCall(() -> this._stub.databaseSchema(request));
// }
//
// public CoreDatabase.Delete.Res databaseDelete(CoreDatabase.Delete.Req request) {
//     return this.resilientCall(() -> this._stub.databaseDelete(request));
// }
//
// public Session.Open.Res sessionOpen(Session.Open.Req request) {
//     return this.resilientCall(() -> this._stub.sessionOpen(request));
// }
//
// public Session.Close.Res sessionClose(Session.Close.Req request) {
//     return this.resilientCall(() -> this._stub.sessionClose(request));
// }
//
// public Session.Pulse.Res sessionPulse(Session.Pulse.Req request) {
//     return this.resilientCall(() -> this._stub.sessionPulse(request));
// }
//
// public StreamObserver<TransactionProto.Transaction.Client> transaction(StreamObserver<TransactionProto.Transaction.Server> responseObserver) {
//     return this.resilientCall(() -> asyncStub.transaction(responseObserver));
// }

private resilientCall<T>(fn: () => Promise<T>): Promise<T> {
        try {
            // TODO actually implement forced gRPC to reconnected rapidly, which provides resilience
            return fn();
        } catch (e) {
            throw new TypeDBClientError(e);
        }
    }
}
