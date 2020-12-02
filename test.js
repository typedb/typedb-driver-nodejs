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

const { GraknClient } = require("./dist/rpc/GraknClient");
const { Grakn } = require("./dist/Grakn");
const { AttributeType } = require("./dist/concept/Type/AttributeType");
const { SessionType, TransactionType } = Grakn;

async function run() {
    const client = new GraknClient();
        // const names = await client.databases().all();
        // console.log(names);
    let session;
    try {
        session = await client.session("grakn", SessionType.SCHEMA);
        console.log("open schema session - SUCCESS");
    } catch (err) {
        console.error(`open schema session - ERROR: ${err.stack || err}`);
        client.close();
        return;
    }

    let tx;
    try {
        tx = await session.transaction(TransactionType.WRITE);
        console.log("open schema write tx - SUCCESS");
    } catch (err) {
        console.error(`open schema write tx - ERROR: ${err.stack || err}`);
        await session.close();
        client.close();
        return;
    }

    let stoneLion, lionFamily, lionCub, maneSize;
    try {
        stoneLion = await tx.concepts().putEntityType("lion");
        lionFamily = await tx.concepts().putRelationType("lion-family");
        await lionFamily.asRemote(tx).setRelates("lion-cub");
        lionCub = await lionFamily.asRemote(tx).getRelates().collect().then(roles => roles[0]);
        await stoneLion.asRemote(tx).setPlays(lionCub);
        maneSize = await tx.concepts().putAttributeType("mane-size", AttributeType.ValueType.LONG);
        await stoneLion.asRemote(tx).setOwns(maneSize);
        console.log("put types - SUCCESS");
    } catch (err) {
        console.error(`put types - ERROR: ${err.stack || err}`);
        await tx.close();
        await session.close();
        client.close();
        return;
    }

    try {
        await tx.commit();
        console.log("commit schema write tx - SUCCESS");
    } catch (err) {
        console.error(`commit schema write tx - ERROR: ${err.stack || err}`);
        await tx.close();
        await session.close();
        client.close();
        return;
    }

    try {
        await tx.close();
        console.log("close schema write tx - SUCCESS");
    } catch (err) {
        console.error(`close schema write tx - ERROR: ${err.stack || err}`);
        await session.close();
        client.close();
        return;
    }

    try {
        await session.close();
        console.log("close schema session - SUCCESS");
    } catch (err) {
        console.error(`close schema session - ERROR: ${err.stack || err}`);
        client.close();
        return;
    }

    try {
        session = await client.session("grakn", SessionType.DATA);
        console.log("open data session - SUCCESS");
    } catch (err) {
        console.error(`open data session - ERROR: ${err.stack || err}`);
        client.close();
        return;
    }

    try {
        tx = await session.transaction(TransactionType.WRITE);
        console.log("open data write tx - SUCCESS");
    } catch (err) {
        console.error(`open data write tx - ERROR: ${err.stack || err}`);
        await session.close();
        client.close();
        return;
    }

    try {
        for (let i = 0; i < 10; i++) stoneLion.asRemote(tx).create();
        console.log("create 10 stone lions - SUCCESS");
    } catch (err) {
        console.error(`create 10 stone lions - ERROR: ${err.stack || err}`);
        await tx.close();
        await session.close();
        client.close();
        return;
    }

    try {
        stoneLion = stoneLion.asRemote(tx);
        const stoneLionsStream = stoneLion.getInstances();
        const stoneLions = await stoneLionsStream.collect();
        console.log(`getInstances - SUCCESS - There are ${stoneLions.length} stone lions.`);
    } catch (err) {
        console.error(`getInstances - ERROR: ${err.stack || err}`);
        await tx.close();
        await session.close();
        client.close();
        return;
    }

    try {
        await tx.commit();
        console.log("commit data write tx - SUCCESS");
    } catch (err) {
        console.error(`commit data write tx - ERROR: ${err.stack || err}`);
        await tx.close();
        await session.close();
        client.close();
        return;
    }

    try {
        await tx.close();
        console.log("close data write tx - SUCCESS");
    } catch (err) {
        console.error(`close data write tx - ERROR: ${err.stack || err}`);
        await session.close();
        client.close();
        return;
    }

    try {
        await session.close();
        console.log("close data session - SUCCESS");
    } catch (err) {
        console.error(`close data session - ERROR: ${err.stack || err}`);
        client.close();
        return;
    }

    try {
        client.close();
        console.log("client.close - SUCCESS");
    } catch (err) {
        console.error(`client.close - ERROR: ${err.stack || err}`);
        return;
    }
}

run();
