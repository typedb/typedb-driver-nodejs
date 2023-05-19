/*
 * Copyright (C) 2022 Vaticle
 *
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

import {Then, When} from "@cucumber/cucumber";
import DataTable from "@cucumber/cucumber/lib/models/data_table";
import assert, {equal} from "assert";
import {AttributeType, ErrorMessage, ThingType, TypeDBClientError} from "../../../../../dist";
import {parseList} from "../../../config/Parameters";
import {tx} from "../../../connection/ConnectionStepsBase";
import ValueType = AttributeType.ValueType;
import Annotation = ThingType.Annotation;

When("put attribute type: {type_label}, with value type: {value_type}", async (typeLabel: string, valueType: ValueType) => {
    await tx().concepts.putAttributeType(typeLabel, valueType);
});

Then("attribute\\({type_label}) get value type: {value_type}", async (typeLabel: string, valueType: ValueType) => {
    assert.strictEqual((await tx().concepts.getAttributeType(typeLabel)).valueType, valueType);
});

Then("attribute\\({type_label}) get supertype value type: {value_type}", async (typeLabel: string, valueType: ValueType) => {
    const supertype = await (await tx().concepts.getAttributeType(typeLabel)).asRemote(tx()).getSupertype();
    assert.strictEqual(supertype.asAttributeType().valueType, valueType);
});

async function attributeTypeAsValueType(typeLabel: string, valueType: ValueType) {
    const attributeType = await tx().concepts.getAttributeType(typeLabel);
    switch (valueType) {
        case ValueType.OBJECT:
            return attributeType;
        case ValueType.BOOLEAN:
            return attributeType.asBoolean();
        case ValueType.LONG:
            return attributeType.asLong();
        case ValueType.DOUBLE:
            return attributeType.asDouble();
        case ValueType.STRING:
            return attributeType.asString();
        case ValueType.DATETIME:
            return attributeType.asDateTime();
        default:
            throw new TypeDBClientError(ErrorMessage.Concept.BAD_VALUE_TYPE.message(valueType));
    }
}

Then("attribute\\({type_label}) as\\({value_type}) get subtypes contain:", async (typeLabel: string, valueType: ValueType, subLabelsTable: DataTable) => {
    const subLabels = parseList(subLabelsTable);
    const attributeType = await attributeTypeAsValueType(typeLabel, valueType);
    const actuals = await attributeType.asRemote(tx()).getSubtypes().map(tt => tt.label.scopedName).collect();
    await subLabels.every(sl => assert(actuals.includes(sl)));
});

Then("attribute\\({type_label}) as\\({value_type}) get subtypes do not contain:", async (typeLabel: string, valueType: ValueType, subLabelsTable: DataTable) => {
    const subLabels = parseList(subLabelsTable);
    const attributeType = await attributeTypeAsValueType(typeLabel, valueType);
    const actuals = await attributeType.asRemote(tx()).getSubtypes().map(tt => tt.label.scopedName).collect();
    await subLabels.every(sl => assert(!actuals.includes(sl)));
});

Then("attribute\\({type_label}) as\\({value_type}) set regex: {}", async (typeLabel: string, valueType: ValueType, regex: string) => {
    assert(valueType == ValueType.STRING);
    const attributeType = await attributeTypeAsValueType(typeLabel, valueType);
    await attributeType.asString().asRemote(tx()).setRegex(regex);
});

Then("attribute\\({type_label}) as\\({value_type}) unset regex", async (typeLabel: string, valueType: ValueType) => {
    assert(valueType == ValueType.STRING);
    const attributeType = await attributeTypeAsValueType(typeLabel, valueType);
    await attributeType.asString().asRemote(tx()).setRegex(null);
});

Then("attribute\\({type_label}) as\\({value_type}) get regex: {}", async (typeLabel: string, valueType: ValueType, regex: string) => {
    assert(valueType == ValueType.STRING);
    const attributeType = await attributeTypeAsValueType(typeLabel, valueType);
    assert.strictEqual(await attributeType.asString().asRemote(tx()).getRegex(), regex);
});

Then("attribute\\({type_label}) as\\({value_type}) does not have any regex", async (typeLabel: string, valueType: ValueType) => {
    assert(valueType == ValueType.STRING);
    const attributeType = await attributeTypeAsValueType(typeLabel, valueType);
    assert(!(await attributeType.asString().asRemote(tx()).getRegex()));
});

async function getOwnersContain(typeLabel: string, annotations: Annotation[], ownerLabelsTable: DataTable): Promise<boolean> {
    const attributeType = await tx().concepts.getAttributeType(typeLabel);
    const actuals = await attributeType.asRemote(tx()).getOwners(annotations).map(tt => tt.label.scopedName).collect();
    const ownerLabels = parseList(ownerLabelsTable);
    for (const ownerLabel of ownerLabels) {
        if (!actuals.includes(ownerLabel)) {
            return false;
        }
    }
    return true;
}

Then(
    "attribute\\({type_label}) get owners, with annotations: {annotations}; contain:",
    async (typeLabel: string, annotations: Annotation[], ownerLabelsTable: DataTable) => {
        equal(true, await getOwnersContain(typeLabel, annotations, ownerLabelsTable));
    }
);

Then(
    "attribute\\({type_label}) get owners, with annotations: {annotations}; do not contain:",
    async (typeLabel: string, annotations: Annotation[], ownerLabelsTable: DataTable) => {
        equal(false, await getOwnersContain(typeLabel, annotations, ownerLabelsTable));
    }
);

async function getOwnersExplicitContain(typeLabel: string, annotations: Annotation[], ownerLabelsTable: DataTable): Promise<boolean> {
    const ownerLabels = parseList(ownerLabelsTable);
    const attributeType = await tx().concepts.getAttributeType(typeLabel);
    const actuals = await attributeType.asRemote(tx()).getOwnersExplicit(annotations).map(tt => tt.label.scopedName).collect();
    for (const ownerLabel of ownerLabels) {
        if (!actuals.includes(ownerLabel)) {
            return false;
        }
    }
    return true;
}

Then(
    "attribute\\({type_label}) get owners explicit, with annotations: {annotations}; contain:",
    async (typeLabel: string, annotations: Annotation[], ownerLabelsTable: DataTable) => {
        equal(true, await getOwnersExplicitContain(typeLabel, annotations, ownerLabelsTable));
    }
);

Then(
    "attribute\\({type_label}) get key owners explicit, with annotations: {annotations}; do not contain:",
    async (typeLabel: string, annotations: Annotation[], ownerLabelsTable: DataTable) => {
        equal(false, await getOwnersExplicitContain(typeLabel, annotations, ownerLabelsTable));
    }
);

Then("attribute\\({type_label}) get owners contain:", async (typeLabel: string, ownerLabelsTable: DataTable) => {
    const ownerLabels = parseList(ownerLabelsTable);
    const attributeType = await tx().concepts.getAttributeType(typeLabel);
    const actuals = await attributeType.asRemote(tx()).getOwners().map(tt => tt.label.scopedName).collect();
    await ownerLabels.every(ol => assert(actuals.includes(ol)));
});

Then("attribute\\({type_label}) get owners do not contain:", async (typeLabel: string, ownerLabelsTable: DataTable) => {
    const ownerLabels = parseList(ownerLabelsTable);
    const attributeType = await tx().concepts.getAttributeType(typeLabel);
    const actuals = await attributeType.asRemote(tx()).getOwners().map(tt => tt.label.scopedName).collect();
    await ownerLabels.every(ol => assert(!actuals.includes(ol)));
});
Then("attribute\\({type_label}) get owners explicit contain:", async (typeLabel: string, ownerLabelsTable: DataTable) => {
    const ownerLabels = parseList(ownerLabelsTable);
    const attributeType = await tx().concepts.getAttributeType(typeLabel);
    const actuals = await attributeType.asRemote(tx()).getOwnersExplicit().map(tt => tt.label.scopedName).collect();
    await ownerLabels.every(ol => assert(actuals.includes(ol)));
});

Then("attribute\\({type_label}) get owners explicit do not contain:", async (typeLabel: string, ownerLabelsTable: DataTable) => {
    const ownerLabels = parseList(ownerLabelsTable);
    const attributeType = await tx().concepts.getAttributeType(typeLabel);
    const actuals = await attributeType.asRemote(tx()).getOwnersExplicit().map(tt => tt.label.scopedName).collect();
    await ownerLabels.every(ol => assert(!actuals.includes(ol)));
});
