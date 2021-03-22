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


import {GraknSession} from "../api/GraknSession";
import {GraknOptions} from "../api/GraknOptions";
import {Database} from "../api/database/Database";
import {GraknTransaction} from "../api/GraknTransaction";
import {GraknClient} from "../api/GraknClient";
import {Core} from "../common/rpc/RequestBuilder";
import {GraknClientError} from "../common_old/errors/GraknClientError";
import {Session} from "grakn-protocol/common/session_pb";

export class CoreSession implements GraknSession {

    private readonly _database: string;
    private readonly _type: GraknSession.Type;
    private readonly _options: GraknOptions;
    private readonly _client: GraknClient;
    private _sessionId: string;
    private _isOpen: boolean;
    private _pulse: NodeJS.Timeout;
    private _networkLatencyMillis: number;
    private _transactions: Set<GraknTransaction.Extended>; //TODO


    constructor(database: string, type: GraknSession.Type, options: GraknOptions, client: GraknClient) {
        this._database = database;
        this._type = type;
        this._options = options;
        this._client = client;
        this._isOpen = false;
        this._transactions = new Set();
    }

    async open(): Promise<void> {
        const openReq = Core.Session.open(this._database, this._type.proto(), this._options.proto())
        const start = ; // TODO
        let end;
        const res = await new Promise<Session.Open.Res>((resolve, reject) => {
            end = ; //TODO
            this._client.rpc().session_open(openReq, (err, res) => {
                if (err) reject(new GraknClientError(err));
                else resolve(res);
            });
        });
        this._sessionId = res.getSessionId_asB64();
        this._networkLatencyMillis = (end - start) - res.getServerDurationMillis();
        this._isOpen = true;
        this._pulse = setTimeout(() => this.pulse(), 5000); // TODO update
    }

    close(): void {
    }

    database(): Database {
        return undefined;
    }

    isOpen(): boolean {
        return false;
    }

    options(): GraknOptions {
        return undefined;
    }

    transaction(type: GraknTransaction.Type, options?: GraknOptions): Promise<GraknTransaction> {
        return Promise.resolve(undefined);
    }

    type(): GraknSession.Type {
        return undefined;
    }

    id() {
        return 0;
    }

}
