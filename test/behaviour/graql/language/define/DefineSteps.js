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
const ConnectionSteps_1 = require("../../../connection/ConnectionSteps");
const assert = require("assert");
cucumber_1.Then('for each transaction, define query; throws exception containing {string}', async function (exceptionString, queryString) {
    try {
        for (const transactionList of ConnectionSteps_1.transactions.values()) {
            for (const transaction of transactionList) {
                await transaction.query().define(queryString);
                assert.fail();
            }
        }
    }
    catch (error) {
        assert(error.toString().includes(exceptionString));
    }
});
