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
// import {TypeDBOptions} from "../api/connection/TypeDBOptions";
// import {SessionType} from "../api/connection/TypeDBSession";
import {ErrorMessage} from "../common/errors/ErrorMessage";
// import {TypeDBClientError} from "../common/errors/TypeDBClientError";
import {TypeDBStub} from "../common/rpc/TypeDBStub";
// import {RequestTransmitter} from "../stream/RequestTransmitter";
import {TypeDBDatabaseManagerImpl} from "./TypeDBDatabaseManagerImpl";
import {TypeDBClientError} from "../common/errors/TypeDBClientError";
// import {TypeDBSessionImpl} from "./TypeDBSessionImpl";
// import SESSION_ID_EXISTS = ErrorMessage.Client.SESSION_ID_EXISTS;
// import ILLEGAL_CAST = ErrorMessage.Internal.ILLEGAL_CAST;
import CLIENT_NOT_OPEN = ErrorMessage.Client.CLIENT_NOT_OPEN;

export class TypeDBClientImpl implements TypeDBClient {
    // private readonly _sessions: { [id: string]: TypeDBSessionImpl };
    // private _requestTransmitter: RequestTransmitter;
    private readonly _databases: TypeDBDatabaseManagerImpl;
    private readonly _serverClients: Map<string, ServerClient>;
    private _isOpen: boolean;

    protected constructor(serverClients: Map<string, ServerClient>) {
        this._serverClients = serverClients;
        this._databases = new TypeDBDatabaseManagerImpl(this);
        this._isOpen = false
        // this._sessions = {};
    }

    protected async open(): Promise<TypeDBClient> {
        // this._requestTransmitter = new RequestTransmitter();
        this._isOpen = true;
        return this;
    }

    isOpen(): boolean {
        return this._isOpen;
    }

    /*
    async session(database: string, type: SessionType, options?: TypeDBOptions): Promise<TypeDBSessionImpl> {
        if (!this.isOpen()) throw new TypeDBClientError(CLIENT_NOT_OPEN);
        if (!options) options = TypeDBOptions.core();
        const session = new TypeDBSessionImpl(database, type, options, this);
        await session.open();
        if (this._sessions[session.id]) throw new TypeDBClientError(SESSION_ID_EXISTS.message(session.id));
        this._sessions[session.id] = session;
        return session;
    }
    */

    get databases(): TypeDBDatabaseManagerImpl {
        if (!this.isOpen()) throw new TypeDBClientError(CLIENT_NOT_OPEN);
        return this._databases;
    }

    get serverClients(): Map<string, ServerClient> {
        if (!this.isOpen()) throw new TypeDBClientError(CLIENT_NOT_OPEN);
        return this._serverClients;
    }

    // transmitter(): RequestTransmitter {
    //     return this._requestTransmitter;
    // }

    async close(): Promise<void> {
        this._isOpen = false;
        // for (const session of Object.values(Object.values(this._sessions))) {
        //     await session.close();
        // }
        // this._requestTransmitter.close();
    }

    // closeSession(session: TypeDBSessionImpl): void {
    //     delete this._sessions[session.id];
    // }
}

export class ServerClient {
    private readonly _address: string;
    stub: TypeDBStub;

    constructor(address: string) {
        this._address = address;
    }

    get address(): string {
        return this._address;
    }

    close(): void {
        this.stub.close();
    }
}
