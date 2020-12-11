"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactions = exports.sessions = exports.client = exports.THREAD_POOL_SIZE = void 0;
const cucumber_1 = require("@cucumber/cucumber");
const GraknClient_1 = require("../../../dist/rpc/GraknClient");
cucumber_1.setDefaultTimeout(20 * 1000);
exports.THREAD_POOL_SIZE = 32;
exports.sessions = [];
exports.transactions = [];
cucumber_1.Given("connection has been opened", () => {
    if (exports.client)
        return;
    exports.client = new GraknClient_1.GraknClient();
});
cucumber_1.After(async () => {
    for (const transaction of exports.transactions) {
        try {
            await transaction.close();
        }
        catch {
            //We're okay with this.
        }
    }
    for (const session of exports.sessions) {
        try {
            await session.close();
        }
        catch {
            //We're also okay with this.
        }
    }
    const databases = await exports.client.databases().all();
    for (const name of databases) {
        await exports.client.databases().delete(name);
    }
    exports.transactions = [];
    exports.sessions = [];
});
