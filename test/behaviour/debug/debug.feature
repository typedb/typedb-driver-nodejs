#
# Copyright (C) 2021 Vaticle
#
# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
#

Feature: Debugging Feature

  Background:
    Given connection has been opened
    Given connection does not have any database
    Given connection create database: typedb
    Given connection open schema session for database: typedb
    Given session opens transaction of type: write
    # Write schema for the test scenarios
    Given put attribute type: is-alive, with value type: boolean
    Given put attribute type: age, with value type: long
    Given put attribute type: score, with value type: double
    Given put attribute type: birth-date, with value type: datetime
    Given put attribute type: name, with value type: string
    Given put attribute type: email, with value type: string
    Given attribute(email) as(string) set regex: \S+@\S+\.\S+
    Given put entity type: person
    Given entity(person) set owns attribute type: is-alive
    Given entity(person) set owns attribute type: age
    Given entity(person) set owns attribute type: score
    Given entity(person) set owns attribute type: name
    Given entity(person) set owns attribute type: email
    Given entity(person) set owns attribute type: birth-date
    Given transaction commits
    Given connection close all sessions
    Given connection open data session for database: typedb
    Given session opens transaction of type: write

  Scenario: Attribute with value type boolean can be retrieved from its type
    When $x = attribute(is-alive) as(boolean) put: true
    Then attribute(is-alive) get instances contain: $x
    When transaction commits
    When session opens transaction of type: read
    When $x = attribute(is-alive) as(boolean) get: true
    Then attribute(is-alive) get instances contain: $x