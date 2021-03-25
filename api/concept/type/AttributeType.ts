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


import {RemoteThingType, ThingType} from "./ThingType";
import {GraknTransaction} from "../../GraknTransaction";
import {Stream} from "../../../common/util/Stream";
import {Concept as ConceptProto, AttributeType as AttributeTypeProto} from "grakn-protocol/common/concept_pb";
import {
    Attribute,
    BooleanAttribute,
    DateTimeAttribute,
    DoubleAttribute,
    LongAttribute,
    StringAttribute
} from "../thing/Attribute";
import {Transaction} from "grakn-protocol/common/transaction_pb";

export interface AttributeType extends ThingType {

    getValueType(): AttributeType.ValueType;

    isKeyable(): boolean;

    isBoolean(): boolean;

    isLong(): boolean;

    isDouble(): boolean;

    isString(): boolean;

    isDateTime(): boolean;

    asBoolean(): BooleanAttributeType;

    asLong(): LongAttributeType;

    asDouble(): DoubleAttributeType;

    asString(): StringAttributeType;

    asDateTime(): DateTimeAttributeType;

    asRemote(transaction: GraknTransaction): RemoteAttributeType;

}

export interface RemoteAttributeType extends RemoteThingType, AttributeType {

    setSupertype(type: AttributeType): Promise<void>;

    getSubtypes(): Stream<AttributeType>;

    getInstances(): Stream<Attribute<AttributeType.ValueClass>>;

    getOwners(): Stream<ThingType>;

    getOwners(onlyKey: boolean): Stream<ThingType>;

    asBoolean(): RemoteBooleanAttributeType;

    asLong(): RemoteLongAttributeType;

    asDouble(): RemoteDoubleAttributeType;

    asString(): RemoteStringAttributeType;

    asDateTime(): RemoteDateTimeAttributeType;

    asRemote(transaction: GraknTransaction): RemoteAttributeType;

}

export interface BooleanAttributeType extends AttributeType {

    asRemote(transaction: GraknTransaction): RemoteBooleanAttributeType;

}

export interface RemoteBooleanAttributeType extends RemoteAttributeType, BooleanAttributeType {

    asRemote(transaction: GraknTransaction): RemoteBooleanAttributeType;

    setSupertype(type: BooleanAttributeType): Promise<void>;

    getSubtypes(): Stream<BooleanAttributeType>;

    getInstances(): Stream<BooleanAttribute>;

    put(value: boolean): Promise<BooleanAttribute>;

    get(value: boolean): Promise<BooleanAttribute>;

}

export interface LongAttributeType extends AttributeType {

    asRemote(transaction: GraknTransaction): RemoteLongAttributeType;

}

export interface RemoteLongAttributeType extends RemoteAttributeType, LongAttributeType {

    asRemote(transaction: GraknTransaction): RemoteLongAttributeType;

    setSupertype(type: LongAttributeType): Promise<void>;

    getSubtypes(): Stream<LongAttributeType>;

    getInstances(): Stream<LongAttribute>;

    put(value: number): Promise<LongAttribute>;

    get(value: number): Promise<LongAttribute>;

}

export interface DoubleAttributeType extends AttributeType {

    asRemote(transaction: GraknTransaction): RemoteDoubleAttributeType;

}

export interface RemoteDoubleAttributeType extends RemoteAttributeType, DoubleAttributeType {
    asRemote(transaction: GraknTransaction): RemoteDoubleAttributeType;

    setSupertype(type: DoubleAttributeType): Promise<void>;

    getSubtypes(): Stream<DoubleAttributeType>;

    getInstances(): Stream<DoubleAttribute>;

    put(value: number): Promise<DoubleAttribute>;

    get(value: number): Promise<DoubleAttribute>;
}

export interface StringAttributeType extends AttributeType {

    asRemote(transaction: GraknTransaction): RemoteStringAttributeType;

}

export interface RemoteStringAttributeType extends RemoteAttributeType, StringAttributeType {

    asRemote(transaction: GraknTransaction): RemoteStringAttributeType;

    setSupertype(type: StringAttributeType): Promise<void>;

    getSubtypes(): Stream<StringAttributeType>;

    getInstances(): Stream<StringAttribute>;

    put(value: string): Promise<StringAttribute>;

    get(value: string): Promise<StringAttribute>;

    getRegex(): Promise<string>;

    setRegex(regex: string): Promise<void>;

}

export interface DateTimeAttributeType extends AttributeType {

    asRemote(transaction: GraknTransaction): RemoteDateTimeAttributeType;

}

export interface RemoteDateTimeAttributeType extends RemoteAttributeType, DateTimeAttributeType {

    asRemote(transaction: GraknTransaction): RemoteDateTimeAttributeType;

    setSupertype(type: DateTimeAttributeType): Promise<void>;

    getSubtypes(): Stream<DateTimeAttributeType>;

    getInstances(): Stream<DateTimeAttribute>;

    put(value: Date): Promise<DateTimeAttribute>;

    get(value: Date): Promise<DateTimeAttribute>;

}

export namespace AttributeType {

    export interface ValueType {

        proto() : AttributeTypeProto.ValueType;

    }

    export namespace ValueType {

        class Impl implements ValueType {

            private readonly _attrTypeProto: AttributeTypeProto.ValueType;
            private _name: string;

            constructor(type: AttributeTypeProto.ValueType, name: string) {
                this._attrTypeProto = type;
                this._name = name;
            }

            proto(): AttributeTypeProto.ValueType {
                return this._attrTypeProto;
            }

            isKeyable(): boolean {
                return [AttributeTypeProto.ValueType.LONG, AttributeTypeProto.ValueType.STRING, AttributeTypeProto.ValueType.DATETIME].includes(this._attrTypeProto);
            }

            isWritable(): boolean {
                return this._attrTypeProto !== AttributeTypeProto.ValueType.OBJECT;
            }

            toString() {
                return "ValueType[" + this._name + "]";
            }
        }

        export const OBJECT = new Impl(AttributeTypeProto.ValueType.OBJECT, "OBJECT");
        export const BOOLEAN = new Impl(AttributeTypeProto.ValueType.BOOLEAN, "BOOLEAN");
        export const LONG = new Impl(AttributeTypeProto.ValueType.LONG, "LONG");
        export const DOUBLE = new Impl(AttributeTypeProto.ValueType.DOUBLE, "DOUBLE");
        export const STRING = new Impl(AttributeTypeProto.ValueType.STRING, "STRING");
        export const DATETIME = new Impl(AttributeTypeProto.ValueType.DATETIME, "DATETIME");


        export type ValueClass = number | string | boolean | Date;

    }

}
