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
cucumber_1.Then('for each session, open transaction of type; throws exception', async function (transactionTypeTable) {
    let transactionType;
    switch (transactionTypeTable.raw()[0][0]) {
        case "write":
            transactionType = TransactionType.WRITE;
            break;
        case "read":
            transactionType = TransactionType.READ;
            break;
        default:
            throw "Behaviour asked for unrecognised Transaction Type. This is a problem with the feature file, not the client or server.";
    }
    try {
        for (const session of ConnectionSteps_1.sessions) {
            if (!ConnectionSteps_1.transactions.has(session))
                ConnectionSteps_1.transactions.set(session, []);
            ConnectionSteps_1.transactions.get(session).push(await session.transaction(transactionType));
            assert.fail();
        }
    }
    catch {
        //Failed successfully
    }
});
cucumber_1.Then('for each session, open transaction of type:', async function (transactionTypeTable) {
    let transactionType;
    switch (transactionTypeTable.raw()[0][0]) {
        case "write":
            transactionType = TransactionType.WRITE;
            break;
        case "read":
            transactionType = TransactionType.READ;
            break;
        default:
            throw "Behaviour asked for unrecognised Transaction Type. This is a problem with the feature file, not the client or server.";
    }
    for (const session of ConnectionSteps_1.sessions) {
        if (!ConnectionSteps_1.transactions.has(session))
            ConnectionSteps_1.transactions.set(session, []);
        ConnectionSteps_1.transactions.get(session).push(await session.transaction(transactionType));
    }
});
