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

import { When, Then, Given } from "@cucumber/cucumber";
import { client, THREAD_POOL_SIZE } from "../ConnectionSteps";
import * as assert from "assert";

When("connection create database(s):", async (names: string[]) => {
    await names.forEach(async (name: string) => await client.databases().create(name));
});

When("connection create databases in parallel:", async (names: string[]) => {
    assert.ok(THREAD_POOL_SIZE >= names.length);
    const creations: Promise<void>[] = [];
    names.forEach(name => {
        creations.push(client.databases().create(name));
    });
    await Promise.all(creations);
});

When("connection delete database(s):", async (names: string[]) => {
    await names.forEach(async (name) => {
        await client.databases().delete(name);
    })
});

Then("connection delete database(s); throws exception", async (names: string[]) => {
    for (const name of names) {
        try {
            await client.databases().delete(name);
            assert.fail();
        } catch (e) {
            // successfully failed
        }
    }
});

When("connection delete databases in parallel:", async (names: string[]) => {
    assert.ok(THREAD_POOL_SIZE >= names.length);
    const deletions: Promise<void>[] = [];
    names.forEach(name => {
        deletions.push(client.databases().delete(name));
    });
    await Promise.all(deletions);
});

When("connection delete all databases", async () => {
    const databases = await client.databases().all();
    await databases.forEach(async (name) => {
        await client.databases().delete(name);
    })
});

Then("connection has database(s):", async (names: string[]) => {
    const databases = await client.databases().all();
    names.forEach(name => {
        assert.ok(databases.includes(name));
    });
});

Then("connection does not have database(s):", async (names: string[]) => {
    const databases = await client.databases().all();
    names.forEach(name => {
        assert.ok(!databases.includes(name));
    });
});

Given("connection does not have any database", async () => {
    const databases = await client.databases().all();
    assert.ok(databases.length === 0)
});
