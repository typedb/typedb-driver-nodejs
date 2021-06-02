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

import {CoreDatabase} from "./CoreDatabase";
import {DatabaseManager} from "../../api/connection/database/DatabaseManager";
import {Database} from "../../api/connection/database/Database";
import {TypeDBClientError} from "../../common/errors/TypeDBClientError";
import {ErrorMessage} from "../../common/errors/ErrorMessage";
import {RequestBuilder} from "../../common/rpc/RequestBuilder";
import {TypeDBClient} from "typedb-protocol/core/core_service_grpc_pb";
import {TypeDBStub} from "../../common/rpc/TypeDBStub";

export class CoreDatabaseManager implements DatabaseManager {

    private readonly _rpcClient: TypeDBClient;
    private readonly _stub: TypeDBStub;

    constructor(client: TypeDBClient) {
        this._rpcClient = client;
        this._stub;
    }

    public async get(name: string): Promise<Database> {
        if (await this.contains(name)) return new CoreDatabase(name, this._rpcClient);
        else throw new TypeDBClientError(ErrorMessage.Client.DB_DOES_NOT_EXIST);
    }

    public create(name: string): Promise<void> {
        if (!name) throw new TypeDBClientError(ErrorMessage.Client.MISSING_DB_NAME);
        const req = RequestBuilder.Core.DatabaseManager.createReq(name);
        return this._stub.databasesCreate(req);
    }

    public contains(name: string): Promise<boolean> {
        if (!name) throw new TypeDBClientError(ErrorMessage.Client.MISSING_DB_NAME);
        const req = RequestBuilder.Core.DatabaseManager.containsReq(name);
        return new Promise((resolve, reject) => {
            this._rpcClient.databases_contains(req, (err, res) => {
                if (err) reject(new TypeDBClientError(err));
                else resolve(res.getContains());
            });
        });
    }

    public all(): Promise<Database[]> {
        const req = RequestBuilder.Core.DatabaseManager.allReq();
        return new Promise((resolve, reject) => {
            this._rpcClient.databases_all(req, (err, res) => {
                if (err) reject(new TypeDBClientError(err));
                else resolve(res.getNamesList().map(name => new CoreDatabase(name, this._rpcClient)));
            })
        })
    }

    rpcClient() {
        return this._rpcClient;
    }

}