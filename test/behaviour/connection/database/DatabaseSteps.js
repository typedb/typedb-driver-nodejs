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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const ConnectionSteps_1 = require("../ConnectionSteps");
const assert = __importStar(require("assert"));
cucumber_1.When("connection create database: {word}", async (name) => {
    await ConnectionSteps_1.client.databases().create(name);
});
cucumber_1.When("connection create database(s):", async (names) => {
    await names.forEach(async (name) => await ConnectionSteps_1.client.databases().create(name));
});
cucumber_1.When("connection create databases in parallel:", async (names) => {
    assert.ok(ConnectionSteps_1.THREAD_POOL_SIZE >= names.length);
    const creations = [];
    names.forEach(name => {
        creations.push(ConnectionSteps_1.client.databases().create(name));
    });
    await Promise.all(creations);
});
cucumber_1.When("connection delete database(s):", async (names) => {
    await names.forEach(async (name) => {
        await ConnectionSteps_1.client.databases().delete(name);
    });
});
cucumber_1.Then("connection delete database(s); throws exception", async (names) => {
    for (const name of names) {
        try {
            await ConnectionSteps_1.client.databases().delete(name);
            assert.fail();
        }
        catch (e) {
            // successfully failed
        }
    }
});
cucumber_1.When("connection delete databases in parallel:", async (names) => {
    assert.ok(ConnectionSteps_1.THREAD_POOL_SIZE >= names.length);
    const deletions = [];
    names.forEach(name => {
        deletions.push(ConnectionSteps_1.client.databases().delete(name));
    });
    await Promise.all(deletions);
});
cucumber_1.When("connection delete all databases", async () => {
    const databases = await ConnectionSteps_1.client.databases().all();
    await databases.forEach(async (name) => {
        await ConnectionSteps_1.client.databases().delete(name);
    });
});
cucumber_1.Then("connection has database(s):", async (names) => {
    const databases = await ConnectionSteps_1.client.databases().all();
    names.forEach(name => {
        assert.ok(databases.includes(name));
    });
});
cucumber_1.Then("connection does not have database(s):", async (names) => {
    const databases = await ConnectionSteps_1.client.databases().all();
    names.forEach(name => {
        assert.ok(!databases.includes(name));
    });
});
cucumber_1.Given("connection does not have any database", async () => {
    const databases = await ConnectionSteps_1.client.databases().all();
    assert.ok(databases.length === 0);
});
