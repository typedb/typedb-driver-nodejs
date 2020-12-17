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
var SessionType = Grakn_1.Grakn.SessionType;
const assert = require("assert");
cucumber_1.When("connection open (data )session(s) for database(s):", async (names) => {
    for (const name of names.raw()) {
        ConnectionSteps_1.sessions.push(await ConnectionSteps_1.client.session(name[0], SessionType.DATA));
    }
});
cucumber_1.When("connection open schema session(s) for database(s):", async (names) => {
    for (const name of names.raw()) {
        ConnectionSteps_1.sessions.push(await ConnectionSteps_1.client.session(name[0], SessionType.SCHEMA));
    }
});
cucumber_1.When("connection open (data )sessions in parallel for databases:", async (names) => {
    const openings = [];
    for (const name of names.raw()) {
        openings.push(ConnectionSteps_1.client.session(name[0], SessionType.DATA));
    }
    ConnectionSteps_1.sessions.concat(await Promise.all(openings));
});
cucumber_1.When("connection open schema sessions in parallel for databases:", async (names) => {
    const openings = [];
    for (const name of names.raw()) {
        openings.push(ConnectionSteps_1.client.session(name[0], SessionType.SCHEMA));
    }
    ConnectionSteps_1.sessions.concat(await Promise.all(openings));
});
cucumber_1.When("session(s) have/has database:", (names) => {
    for (const session of ConnectionSteps_1.sessions) {
        assert.ok(session.database() === names.raw()[0][0]);
    }
});
cucumber_1.When("sessions( in parallel) have databases:", (names) => {
    for (let i = 0; i < ConnectionSteps_1.sessions.length; i++) {
        assert.ok(ConnectionSteps_1.sessions[i].database() === names.raw()[i][0]);
    }
});
cucumber_1.Then("session(s)( in parallel) is/are null: {bool}", function (isNull) {
    return (ConnectionSteps_1.sessions.length === 0) === isNull;
});
cucumber_1.Then('session(s)( in parallel) is/are open: {bool}', function (isOpen) {
    for (const session of ConnectionSteps_1.sessions) {
        assert.ok(session.isOpen() === isOpen);
    }
});
