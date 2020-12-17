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

import { When, Then } from "@cucumber/cucumber";
import { client, sessions } from "../ConnectionSteps";
import DataTable from "@cucumber/cucumber/lib/models/data_table";
import { Grakn } from "../../../../dist/Grakn";
import SessionType = Grakn.SessionType;
import assert = require("assert");
import Session = Grakn.Session;

When("connection open (data )session(s) for database(s):", async (names: DataTable) => {
    for (const name of names.raw()) {sessions.push(await client.session(name[0], SessionType.DATA))}
});

When("connection open schema session(s) for database(s):", async (names: DataTable) => {
    for (const name of names.raw()) {sessions.push(await client.session(name[0], SessionType.SCHEMA))}
});

When("connection open (data )sessions in parallel for databases:", async (names: DataTable) => {
    const openings: Promise<Session>[] = []
    for (const name of names.raw()) {openings.push(client.session(name[0], SessionType.DATA))}
    sessions.concat(await Promise.all(openings));
});

When("connection open schema sessions in parallel for databases:", async (names: DataTable) => {
    const openings: Promise<Session>[] = []
    for (const name of names.raw()) {openings.push(client.session(name[0], SessionType.SCHEMA))}
    sessions.concat(await Promise.all(openings));
});

When("session(s) have/has database:", (names: DataTable) => {
    for (const session of sessions) {
        assert.ok(session.database() === names.raw()[0][0]);
    }
});

When("sessions( in parallel) have databases:", (names: DataTable) => {
    for (let i = 0; i < sessions.length; i++) {
        assert.ok(sessions[i].database() === names.raw()[i][0]);
    }
});

Then("session(s)( in parallel) is/are null: {bool}", function (isNull: boolean) {
    return (sessions.length === 0) === isNull;

});

Then('session(s)( in parallel) is/are open: {bool}', function (isOpen: boolean) {
    for (const session of sessions) {
        assert.ok(session.isOpen() === isOpen);
    }
});
