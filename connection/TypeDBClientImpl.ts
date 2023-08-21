/*
 * Copyright (C) 2022 Vaticle
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

import {TypeDBClient} from "../api/connection/TypeDBClient";
import {TypeDBOptions} from "../api/connection/TypeDBOptions";
import {SessionType} from "../api/connection/TypeDBSession";
import {ErrorMessage} from "../common/errors/ErrorMessage";
// import {TypeDBClientError} from "../common/errors/TypeDBClientError";
import {TypeDBStub} from "../common/rpc/TypeDBStub";
import {RequestTransmitter} from "../stream/RequestTransmitter";
import {TypeDBDatabaseManagerImpl} from "./TypeDBDatabaseManagerImpl";
import {Database} from "../api/connection/database/Database";
import {TypeDBClientError} from "../common/errors/TypeDBClientError";
import {TypeDBSessionImpl} from "./TypeDBSessionImpl";
import SESSION_ID_EXISTS = ErrorMessage.Client.SESSION_ID_EXISTS;
// import ILLEGAL_CAST = ErrorMessage.Internal.ILLEGAL_CAST;
import CLIENT_NOT_OPEN = ErrorMessage.Client.CLIENT_NOT_OPEN;

export abstract class TypeDBClientImpl implements TypeDBClient {
    private _isOpen: boolean;

    private readonly _serverClients: Map<string, ServerClient>;

    private readonly _databases: TypeDBDatabaseManagerImpl;
    _database_cache: { [db: string]: Database };

    private readonly _sessions: { [id: string]: TypeDBSessionImpl };

    protected constructor() {
        this._isOpen = false

        this._serverClients = new Map([]);

        this._databases = new TypeDBDatabaseManagerImpl(this);
        this._database_cache = {};

        this._sessions = {};
    }

    protected async open(): Promise<TypeDBClient> {
        this._isOpen = true;
        return this;
    }

    isOpen(): boolean {
        return this._isOpen;
    }

    async session(databaseName: string, type: SessionType, options?: TypeDBOptions): Promise<TypeDBSessionImpl> {
        if (!this.isOpen()) throw new TypeDBClientError(CLIENT_NOT_OPEN);
        if (!options) options = new TypeDBOptions();
        const session = new TypeDBSessionImpl(databaseName, type, options, this);
        await session.open();
        if (this._sessions[session.id]) throw new TypeDBClientError(SESSION_ID_EXISTS.message(session.id));
        this._sessions[session.id] = session;
        return session;
    }

    get databases(): TypeDBDatabaseManagerImpl {
        if (!this.isOpen()) throw new TypeDBClientError(CLIENT_NOT_OPEN);
        return this._databases;
    }

    get serverClients(): Map<string, ServerClient> {
        return this._serverClients;
    }

    async close(): Promise<void> {
        if (this.isOpen()) {
            this._isOpen = false;
            for (const serverClient of Object.values(this._serverClients)) {
                await serverClient.close();
            }
        }
    }

    closeSession(session: TypeDBSessionImpl): void {
        delete this._sessions[session.id];
    }
}

export class ServerClient {
    private readonly _address: string;
    stub: TypeDBStub;
    private _requestTransmitter: RequestTransmitter;

    constructor(address: string) {
        this._address = address;
        this._requestTransmitter = new RequestTransmitter();
    }

    get address(): string {
        return this._address;
    }

    get transmitter(): RequestTransmitter {
        return this._requestTransmitter;
    }

    close(): void {
        this.stub.close();
    }
}
