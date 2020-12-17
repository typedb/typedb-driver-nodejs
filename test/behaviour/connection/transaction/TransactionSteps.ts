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

import { Then } from "@cucumber/cucumber";
import { sessions, transactions } from "../ConnectionSteps";
import DataTable from "@cucumber/cucumber/lib/models/data_table";
import { Grakn } from "../../../../dist/Grakn";
import TransactionType = Grakn.TransactionType;
import assert = require("assert");

Then('for each session, open transaction of type; throws exception', async function (transactionTypeTable: DataTable) {
    let transactionType: TransactionType;
    switch (transactionTypeTable.raw()[0][0])  {
        case "write":
            transactionType = TransactionType.WRITE;
            break;
        case "read":
            transactionType = TransactionType.READ;
            break;
        default:
            throw "Behaviour asked for unrecognised Transaction Type. This is a problem with the feature file, not the client or server."
    }
    try {
        for (const session of sessions) {
            if (!transactions.has(session)) transactions.set(session, [])
            transactions.get(session).push(await session.transaction(transactionType));
            assert.fail();
        }
    } catch {
        //Failed successfully
    }
});

Then('for each session, open transaction(s) of type:', async function (transactionTypeTable: DataTable) {
    for (const session of sessions) {
        if (!transactions.has(session)) transactions.set(session, [])
        for (const transactionTypeRow of transactionTypeTable.raw()) {
            let transactionType: TransactionType;
            switch (transactionTypeRow[0])  {
                case "write":
                    transactionType = TransactionType.WRITE;
                    break;
                case "read":
                    transactionType = TransactionType.READ;
                    break;
                default:
                    throw "Behaviour asked for unrecognised Transaction Type. This is a problem with the feature file, not the client or server."
            }
            transactions.get(session).push(await session.transaction(transactionType));
        }
    }
});

Then('for each session, transactions are null: {bool}', async function (isNull: boolean) {
    for (const session of sessions) assert.ok(transactions.has(session) !== isNull)
});

Then('for each session, transactions are open: {bool}', async function (isOpen: boolean) {
    for (const session of sessions) {
        assert.ok(transactions.has(session));
        for (const transaction of transactions.get(session)) {
            assert.ok(transaction.isOpen() === isOpen);
        }
    }

});
