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
import { transactions } from "../../../connection/ConnectionSteps";
import assert = require("assert");

Then('for each transaction, define query; throws exception containing {string}', async function (exceptionString: string, queryString: string) {
    try {
        for (const transaction of transactions) {
            await transaction.query().define(queryString);
            assert.fail();
        }
    } catch (error){
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        console.log(error.toString());
        assert(error.toString().includes(exceptionString))
    }
});