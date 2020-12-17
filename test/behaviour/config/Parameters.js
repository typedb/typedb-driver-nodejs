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
const AttributeType_1 = require("../../../dist/concept/type/AttributeType");
const Grakn_1 = require("../../../dist/Grakn");
var TransactionType = Grakn_1.Grakn.TransactionType;
cucumber_1.defineParameterType({
    name: "bool",
    regexp: /true|false/,
    transformer: s => s === "true",
});
cucumber_1.defineParameterType({
    name: "number",
    regexp: /[0-9]+/,
    transformer: s => parseInt(s),
});
cucumber_1.defineParameterType({
    name: "datetime",
    regexp: /\d\d\d\d-\d\d-\d\d \d\d:\d\d:\d\d/,
    transformer: s => Date.parse(s),
});
cucumber_1.defineParameterType({
    name: "root_label",
    regexp: /entity|attribute|relation/,
    transformer: s => s,
});
// defineParameterType({
//     name: "type_label",
//     regexp: /[a-zA-Z0-9-_]+/,
//     transformer: s => s,
// });
cucumber_1.defineParameterType({
    name: "scoped_label",
    regexp: /[a-zA-Z0-9-_]+:[a-zA-Z0-9-_]+/,
    transformer: s => s,
});
cucumber_1.defineParameterType({
    name: "value_type",
    regexp: /long|double|string|boolean|datetime/,
    transformer: s => {
        switch (s) {
            case "long":
                return AttributeType_1.AttributeType.ValueType.LONG;
            case "double":
                return AttributeType_1.AttributeType.ValueType.DOUBLE;
            case "string":
                return AttributeType_1.AttributeType.ValueType.STRING;
            case "boolean":
                return AttributeType_1.AttributeType.ValueType.BOOLEAN;
            case "datetime":
                return AttributeType_1.AttributeType.ValueType.DATETIME;
            default:
                throw "Unrecognised value type in step definition";
        }
    },
});
cucumber_1.defineParameterType({
    name: "var",
    regexp: /\$([a-zA-Z0-9]+)/,
    transformer: s => s
});
cucumber_1.defineParameterType({
    name: "transaction_type",
    regexp: /read|write/,
    transformer: s => s === "read" ? TransactionType.READ : TransactionType.WRITE
});
//TODO: scoped labelS (plural form), transaction typeS, possibly investigate if root label and scoped label are gonna mess with me
