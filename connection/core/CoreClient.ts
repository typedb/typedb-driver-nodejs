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

import {ServerClient, TypeDBClientImpl} from "../TypeDBClientImpl";
import {CoreStub} from "./CoreStub";
import {RequestBuilder} from "../../common/rpc/RequestBuilder";

export class CoreClient extends TypeDBClientImpl {
    private readonly _initAddress: string;

    constructor(address: string) {
        super();
        this._initAddress = address;
    }

    async open(): Promise<CoreClient> {
        const stub = new CoreStub(this._initAddress);
        await stub.open();
        const addr = (await stub.serversAll(RequestBuilder.ServerManager.allReq())).servers[0].address;
        this.serverClients.set(addr, new ServerClient(addr));
        this.serverClients.get(addr).stub = stub;
        await super.open();
        return this;
    }

    async close(): Promise<void> {
        if (this.isOpen()) {
            await super.close();
        }
    }
}
