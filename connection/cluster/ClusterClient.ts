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

import { TypeDBClient } from "../../api/connection/TypeDBClient";
import { TypeDBCredential } from "../../api/connection/TypeDBCredential";
import { ErrorMessage } from "../../common/errors/ErrorMessage";
import { TypeDBClientError } from "../../common/errors/TypeDBClientError";
import { RequestBuilder } from "../../common/rpc/RequestBuilder";
import {ServerClient, TypeDBClientImpl} from "../TypeDBClientImpl";
import CLUSTER_UNABLE_TO_CONNECT = ErrorMessage.Client.CLUSTER_UNABLE_TO_CONNECT;
import {ClusterServerStub} from "./ClusterServerStub";
import {UserManagerImpl} from "./UserManagerImpl";
import {UserImpl} from "./UserImpl";

export class ClusterClient extends TypeDBClientImpl implements TypeDBClient.Cluster {
    private readonly _initAddresses: string[];
    private readonly _credential: TypeDBCredential;
    private _userManager: UserManagerImpl;

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
        this._userManager = new UserManagerImpl(this);
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

    async user(): Promise<UserImpl> {
        return await this.users.get(this._credential.username)
    }

    get users(): UserManagerImpl {
        return this._userManager;
    }
}
