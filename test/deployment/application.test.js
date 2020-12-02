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

const GraknClient = require("grakn-client");
jest.setTimeout(15000);

let client;
let session;
let tx;

beforeEach(async () => {
    client = new GraknClient("localhost:48555");
    session = await client.session("testkeyspace");
    tx = await session.transaction().write();
})

afterEach(async () => {
    await session.close();
    client.close();
});




describe("Basic GraknClient Tests", () => {

    test("define", async () => {
        const defined = await tx.query("define person sub entity, has name; name sub attribute, value string;");
        await tx.commit();
    });

    test("match", async () => {
        const types = await tx.query("match $x sub thing; get;");
        await tx.close();
    });

    test("insert", async () => {
        const defined = await tx.query("define person sub entity, has name; name sub attribute, value string;");
        const inserted = await tx.query("insert $x isa person, has name \"john\";");
        await tx.commit();
    });
});