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
import {TypeDBStub} from "../../common/rpc/TypeDBStub";
import {CoreStub} from "./CoreStub";
import {TypeDBDatabaseManagerImpl} from "../TypeDBDatabaseManagerImpl";
import {TypeDBClientError} from "../../common/errors/TypeDBClientError";
import {ErrorMessage} from "../../common/errors/ErrorMessage";
import CLIENT_NOT_OPEN = ErrorMessage.Client.CLIENT_NOT_OPEN;

export class CoreClient extends TypeDBClientImpl {
    private readonly _impl: ServerClient;

    constructor(address: string) {
        const impl = new ServerClient(address);
        super(new Map([[address, impl]]));
        this._impl = impl;
    }

    async open(): Promise<CoreClient> {
        const stub = new CoreStub(this._impl.address);
        await stub.open();
        this._impl.stub = stub;
        await super.open();
        return this;
    }

    async close(): Promise<void> {
        if (this.isOpen()) {
            await super.close();
            this._impl.close();
        }
    }
}
