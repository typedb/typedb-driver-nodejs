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

import { Given, After } from "@cucumber/cucumber";
import { GraknClient } from "../../../dist/rpc/GraknClient";
import { Grakn } from "../../../dist/Grakn";
import Session = Grakn.Session;
import Transaction = Grakn.Transaction;

export const THREAD_POOL_SIZE = 32;

export let client: GraknClient;
export let sessions: Session[] = [];
export let transactions: Transaction[] = [];

Given("connection has been opened", () => {
    if (client) return;
    client = new GraknClient();
});

After(async () => {
    for (const transaction of transactions) {
        try {
            await transaction.close()
        } catch {
            //We're okay with this.
        }
    }
    for (const session of sessions) {
        try {
            await session.close()
        } catch {
            //We're also okay with this.
        }
    }
    const databases = await client.databases().all();
    for (const name of databases) {
        await client.databases().delete(name);
    }
    transactions = [];
    sessions = [];
});
