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

import { When } from "@cucumber/cucumber";
import Thing from "../../../../dist/concept/thing/Thing";
import assert = require("assert");
import { tx } from "../../connection/ConnectionSteps";
import { getThingType } from "../type/thingtype/ThingTypeSteps";
import { assertEqual, assertThrows } from "../../util/Util";
import { Attribute } from "../../../../dist/concept/thing/Attribute";
import { AttributeType } from "../../../../dist/concept/type/AttributeType";
import ValueClass = AttributeType.ValueClass;

export const things: Map<string, Thing> = new Map<string, Thing>();
export const getThing = (name: string) => things.get(name);
export const putThing = (name: string, thing: Thing) => things.set(name, thing);
export const removeThing = (name: string) => things.delete(name);
export const clearThings = () => things.clear();

When("entity/attribute/relation {var} is null: {bool}", async (thingName: string, isNull: boolean) => {
    if (things.has(thingName)) assert.ok((things.get(thingName) === null) === isNull)
    else assert.ok(isNull);
});

When("entity/attribute/relation {var} is deleted: {bool}", async (thingName: string, isDeleted: boolean) => {
    assert.ok(isDeleted === await getThing(thingName).asRemote(tx()).isDeleted());
});

When("{root_label} {var} has type: {type_label}", async (rootLabel: string, thingName: string, label: string) => {
    const desiredType = await getThingType(rootLabel, label);
    assertEqual(await getThing(thingName).asRemote(tx()).getType(), desiredType);
});

When("delete entity:/attribute:/relation: {var}", async (thingName: string) => {
    await getThing(thingName).asRemote(tx()).delete();
});

When("entity/attribute/relation {var} set has: {var}", async (thingName: string, attributeName: string) => {
    await getThing(thingName).asRemote(tx()).setHas(getThing(attributeName) as Attribute<ValueClass>);
});

When("entity/attribute/relation {var} set has: {var}; throws exception", async (thingName: string, attributeName: string) => {
    await assertThrows(async () => getThing(thingName).asRemote(tx()).setHas(getThing(attributeName) as Attribute<ValueClass>));
});

When("entity/attribute/relation {var} unset has: {var}", async (thingName: string, attributeName: string) => {
    await getThing(thingName).asRemote(tx()).unsetHas(getThing(attributeName) as Attribute<ValueClass>);
});

When("entity/attribute/relation {var} get keys contain: {var}", async (thingName: string, attributeName: string) => {
    for (const keyAttribute in getThing(thingName).asRemote(tx()).getHas(true)) {
        if ((keyAttribute as Thing).equals(getThing(attributeName))) return;
    }
    assert.fail()
});

When("entity/attribute/relation {var} get keys do not contain: {var}", async (thingName: string, attributeName: string) => {
    for (const keyAttribute in getThing(thingName).asRemote(tx()).getHas(true)) {
        if ((keyAttribute as Thing).equals(getThing(attributeName))) assert.fail();
    }
});

When("entity/attribute/relation {var} get attributes contain: {var}", async (thingName: string, attributeName: string) => {
    for (const attribute in getThing(thingName).asRemote(tx()).getHas()) {
        if ((attribute as Thing).equals(getThing(attributeName))) return;
    }
    assert.fail()
});

When("entity/attribute/relation {var} get attributes do not contain: {var}", async (thingName: string, attributeName: string) => {
    for (const attribute in getThing(thingName).asRemote(tx()).getHas()) {
        if ((attribute as Thing).equals(getThing(attributeName))) assert.fail();
    }
});

When("entity/attribute/relation {var} get attributes\\( ?{type_label} ?) contain: {var}", async (thingName: string, typeLabel: string, attributeName: string) => {
    const type = await tx().concepts().getAttributeType(typeLabel)
    for (const attribute in getThing(thingName).asRemote(tx()).getHas(type)) {
        if ((attribute as Thing).equals(getThing(attributeName))) return;
    }
    assert.fail()
});

When("entity/attribute/relation {var} get attributes\\( ?{type_label} ?) do not contain: {var}", async (thingName: string, typeLabel: string, attributeName: string) => {
    const type = await tx().concepts().getAttributeType(typeLabel)
    for (const attribute in getThing(thingName).asRemote(tx()).getHas(type)) {
        if ((attribute as Thing).equals(getThing(attributeName))) assert.fail();
    }
});
