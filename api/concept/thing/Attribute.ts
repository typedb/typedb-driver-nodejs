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

import {
    AttributeType,
    BooleanAttributeType,
    DateTimeAttributeType,
    DoubleAttributeType,
    LongAttributeType,
    StringAttributeType
} from "../type/AttributeType";
import {RemoteThing, Thing} from "./Thing";
import {GraknTransaction} from "../../GraknTransaction";
import {Stream} from "../../../common/util/Stream";
import {ThingType} from "../type/ThingType";

export interface Attribute<T extends AttributeType.ValueClass> extends Thing {

    asRemote(transaction: GraknTransaction): RemoteAttribute<T>;

    getType(): AttributeType;

    getValue(): T;

    isBoolean(): boolean;

    isLong(): boolean;

    isDouble(): boolean;

    isString(): boolean;

    isDateTime(): boolean;

}

export interface RemoteAttribute<T extends AttributeType.ValueClass> extends Attribute<T>, RemoteThing {

    asRemote(transaction: GraknTransaction): RemoteAttribute<T>;

    getType(): AttributeType;

    getOwners(): Stream<Thing>;

    getOwners(ownerType: ThingType): Stream<Thing>;

}

export interface BooleanAttribute extends Attribute<boolean> {

    asRemote(transaction: GraknTransaction): RemoteBooleanAttribute;

    getType(): BooleanAttributeType;

}

export interface RemoteBooleanAttribute extends RemoteAttribute<boolean>, BooleanAttribute {

    asRemote(transaction: GraknTransaction): RemoteBooleanAttribute;

    getType(): BooleanAttributeType;

}

export interface LongAttribute extends Attribute<number> {

    asRemote(transaction: GraknTransaction): RemoteLongAttribute;

    getType(): LongAttributeType;

}

export interface RemoteLongAttribute extends RemoteAttribute<number>, LongAttribute {

    asRemote(transaction: GraknTransaction): RemoteLongAttribute;

    getType(): LongAttributeType;

}

export interface DoubleAttribute extends Attribute<number> {

    asRemote(transaction: GraknTransaction): RemoteDoubleAttribute;

    getType(): DoubleAttributeType;

}

export interface RemoteDoubleAttribute extends RemoteAttribute<number>, LongAttribute {

    asRemote(transaction: GraknTransaction): RemoteDoubleAttribute;

    getType(): DoubleAttributeType;

}

export interface StringAttribute extends Attribute<string> {

    asRemote(transaction: GraknTransaction): RemoteStringAttribute;

    getType(): StringAttributeType;

}

export interface RemoteStringAttribute extends RemoteAttribute<string>, StringAttribute {

    asRemote(transaction: GraknTransaction): RemoteStringAttribute;

    getType(): StringAttributeType;

}

export interface DateTimeAttribute extends Attribute<Date> {

    asRemote(transaction: GraknTransaction): RemoteDateTimeAttribute;

    getType(): DateTimeAttributeType;

}

export interface RemoteDateTimeAttribute extends RemoteAttribute<Date>, DateTimeAttribute {

    asRemote(transaction: GraknTransaction): RemoteDateTimeAttribute;

    getType(): DateTimeAttributeType;

}
