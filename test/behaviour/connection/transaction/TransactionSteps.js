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
const cucumber_1 = require("@cucumber/cucumber");
const ConnectionSteps_1 = require("../ConnectionSteps");
const Grakn_1 = require("../../../../dist/Grakn");
var TransactionType = Grakn_1.Grakn.TransactionType;
const assert = require("assert");
const Util_1 = require("../../util/Util");
cucumber_1.Then('(for each )session(,) open(s) transaction(s) of type: {transaction_type}', async function (transactionType) {
    for (const session of ConnectionSteps_1.sessions) {
        if (!ConnectionSteps_1.transactions.has(session))
            ConnectionSteps_1.transactions.set(session, []);
        ConnectionSteps_1.transactions.get(session).push(await session.transaction(transactionType));
    }
});
cucumber_1.Then('(for each )session(,) open(s) transaction(s) of type:', async function (transactionTypeTable) {
    const typeArray = dataTableToTransactionTypes(transactionTypeTable);
    for (const session of ConnectionSteps_1.sessions) {
        if (!ConnectionSteps_1.transactions.has(session))
            ConnectionSteps_1.transactions.set(session, []);
        for (const transactionType of typeArray) {
            ConnectionSteps_1.transactions.get(session).push(await session.transaction(transactionType));
        }
    }
});
cucumber_1.Then('(for each )session(,) open transaction(s) of type; throws exception: {transaction_type}', async function (transactionType) {
    for (const session of ConnectionSteps_1.sessions) {
        await Util_1.assertThrows(async () => await session.transaction(transactionType));
    }
});
cucumber_1.Then('(for each )session(,) open transaction(s) of type; throws exception', async function (transactionTypeTable) {
    const typeArray = dataTableToTransactionTypes(transactionTypeTable);
    for (const session of ConnectionSteps_1.sessions) {
        if (!ConnectionSteps_1.transactions.has(session))
            ConnectionSteps_1.transactions.set(session, []);
        for (const transactionType of typeArray) {
            await Util_1.assertThrows(async () => await session.transaction(transactionType));
        }
    }
});
cucumber_1.Then('(for each )session(,) transaction(s)( in parallel) is/are null: {bool}', function (isNull) {
    for (const session of ConnectionSteps_1.sessions)
        assert.ok(ConnectionSteps_1.transactions.has(session) !== isNull);
});
cucumber_1.Then('(for each )session(,) transaction(s)( in parallel) is/are open: {bool}', function (isOpen) {
    for (const session of ConnectionSteps_1.sessions) {
        assert.ok(ConnectionSteps_1.transactions.has(session));
        for (const transaction of ConnectionSteps_1.transactions.get(session)) {
            assert.ok(transaction.isOpen() === isOpen);
        }
    }
});
cucumber_1.Then('transaction commits', async function () {
    await ConnectionSteps_1.transactions.get(ConnectionSteps_1.sessions[0])[0].commit();
});
cucumber_1.Then('transaction commits; throws exception', async function () {
    await Util_1.assertThrows(async () => await ConnectionSteps_1.transactions.get(ConnectionSteps_1.sessions[0])[0].commit());
});
cucumber_1.Then('transaction commits; throws exception containing {string}', async function (error) {
    await Util_1.assertThrowsWithMessage(async () => await ConnectionSteps_1.transactions.get(ConnectionSteps_1.sessions[0])[0].commit(), error);
});
cucumber_1.Then('(for each )session(,) transaction(s) commit(s)', async function () {
    for (const session of ConnectionSteps_1.sessions) {
        for (const transaction of ConnectionSteps_1.transactions.get(session)) {
            await transaction.commit();
        }
    }
});
cucumber_1.Then('(for each )session(,) transaction(s) commit(s); throws exception', async function () {
    for (const session of ConnectionSteps_1.sessions) {
        for (const transaction of ConnectionSteps_1.transactions.get(session)) {
            await Util_1.assertThrows(async () => await transaction.commit());
        }
    }
});
cucumber_1.Then('(for each )session(,) transaction(s) close(s)', async function () {
    for (const session of ConnectionSteps_1.sessions) {
        for (const transaction of ConnectionSteps_1.transactions.get(session)) {
            await transaction.close();
        }
    }
});
cucumber_1.Then('(for each )session(,) transaction(s)( in parallel) has/have type: {transaction_type}', function (type) {
    for (const session of ConnectionSteps_1.sessions) {
        for (const transaction of ConnectionSteps_1.transactions.get(session)) {
            assert(transaction.type() === type);
        }
    }
});
cucumber_1.Then('(for each )session(,) transaction(s)( in parallel) has/have type(s):', function (transactionTypeTable) {
    const typeArray = dataTableToTransactionTypes(transactionTypeTable);
    for (const session of ConnectionSteps_1.sessions) {
        const transactionArray = ConnectionSteps_1.transactions.get(session);
        for (let i = 0; i < transactionArray.length; i++) {
            assert(transactionArray[i].type() === typeArray[i]);
        }
    }
});
cucumber_1.Then('(for each )session(,) open transaction(s) in parallel of type:', async function (transactionTypeTable) {
    const typeArray = dataTableToTransactionTypes(transactionTypeTable);
    const openings = [];
    const sessionList = [];
    for (const type of typeArray) {
        for (const session of ConnectionSteps_1.sessions) {
            openings.push(session.transaction(type));
            sessionList.push(session);
        }
    }
    const newTransactions = await Promise.all(openings);
    for (let i = 0; i < newTransactions.length; i++) {
        if (!ConnectionSteps_1.transactions.has(sessionList[i]))
            ConnectionSteps_1.transactions.set(sessionList[i], []);
        ConnectionSteps_1.transactions.get(sessionList[i]).push(newTransactions[i]);
    }
});
function dataTableToTransactionTypes(transactionTypeTable) {
    const typeArray = [];
    for (const transactionTypeRow of transactionTypeTable.raw()) {
        switch (transactionTypeRow[0]) {
            case "write":
                typeArray.push(TransactionType.WRITE);
                break;
            case "read":
                typeArray.push(TransactionType.READ);
                break;
            default:
                throw "Behaviour asked for unrecognised Transaction Type. This is a problem with the feature file, not the client or server.";
        }
    }
    return typeArray;
}
