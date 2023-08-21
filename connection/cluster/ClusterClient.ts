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

import { Database } from "../../api/connection/database/Database";
import { TypeDBClient } from "../../api/connection/TypeDBClient";
import { TypeDBCredential } from "../../api/connection/TypeDBCredential";
import { TypeDBOptions } from "../../api/connection/TypeDBOptions";
// import { SessionType } from "../../api/connection/TypeDBSession";
import { ErrorMessage } from "../../common/errors/ErrorMessage";
import { TypeDBClientError } from "../../common/errors/TypeDBClientError";
import { RequestBuilder } from "../../common/rpc/RequestBuilder";
// import { ClusterUser } from "./ClusterUser";
// import { ClusterUserManager } from "./ClusterUserManager";
import {ServerClient, TypeDBClientImpl} from "../TypeDBClientImpl";
import CLUSTER_UNABLE_TO_CONNECT = ErrorMessage.Client.CLUSTER_UNABLE_TO_CONNECT;
// import CLIENT_NOT_OPEN = ErrorMessage.Client.CLIENT_NOT_OPEN;
import {ClusterServerStub} from "./ClusterServerStub";

export class ClusterClient extends TypeDBClientImpl implements TypeDBClient.Cluster {
    private readonly _initAddresses: string[];
    private readonly _credential: TypeDBCredential;
    // private _userManager: ClusterUserManager;

    constructor(addresses: string[], credential: TypeDBCredential) {
        super();
        this._initAddresses = addresses;
        this._credential = credential;
    }

    async open(): Promise<this> {
        const serverAddresses = await this.fetchClusterServers();
        const openReqs: Promise<void>[] = []
        for (const addr of serverAddresses) {
            const serverStub = new ClusterServerStub(addr, this._credential);
            openReqs.push(serverStub.open());
            this.serverClients.set(addr, new ServerClient(addr));
            this.serverClients.get(addr).stub = serverStub;
        }
        await Promise.all(openReqs);
        // this._userManager = new ClusterUserManager(this);
        await super.open();
        return this;
    }

    private async fetchClusterServers(): Promise<string[]> {
        for (const address of this._initAddresses) {
            try {
                console.info(`Fetching list of cluster servers from ${address}...`);
                const stub = new ClusterServerStub(address, this._credential);
                await stub.open();
                const res = await stub.serversAll(RequestBuilder.ServerManager.allReq());
                const members = res.servers.map(x => x.address);
                console.info(`The cluster servers are ${members}`);
                return members;
            } catch (e) {
                console.error(`Fetching cluster servers from ${address} failed.`, e);
            }
        }
        throw new TypeDBClientError(CLUSTER_UNABLE_TO_CONNECT.message(this._initAddresses.join(",")));
    }

    /*
    async user(): Promise<ClusterUser> {
        return await this.users.get(this._credential.username)
    }

    get users(): ClusterUserManager {
        return this._userManager;
    }

    session(database: string, type: SessionType, options: TypeDBClusterOptions = TypeDBOptions.cluster()): Promise<ClusterSession> {
        if (!this.isOpen()) throw new TypeDBClientError(CLIENT_NOT_OPEN);
        if (options.readAnyReplica) {
            return this.sessionAnyReplica(database, type, options);
        } else {
            return this.sessionPrimaryReplica(database, type, options);
        }
    }

    private sessionPrimaryReplica(database: string, type: SessionType, options: TypeDBClusterOptions): Promise<ClusterSession> {
        return new OpenSessionFailsafeTask(database, type, options, this).runPrimaryReplica();
    }

    private sessionAnyReplica(database: string, type: SessionType, options: TypeDBClusterOptions): Promise<ClusterSession> {
        return new OpenSessionFailsafeTask(database, type, options, this).runAnyReplica();
    }

    clusterServerClients() {
        return this._serverClients;
    }

    clusterServerClient(address: string): ClusterServerClient {
        return this._serverClients[address];
    }

    clusterServerAddresses(): string[] {
        return Object.keys(this._serverClients);
    }

    stub(address: string): ClusterServerStub {
        return this._serverClients[address].stub();
    }

     */
}
