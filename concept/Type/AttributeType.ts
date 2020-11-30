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

import { RemoteThingType, ThingType } from "./ThingType";
import { Grakn } from "../../Grakn";
import Transaction = Grakn.Transaction;
// TODO
import { BooleanAttribute, DateTimeAttribute, DoubleAttribute, LongAttribute, StringAttribute } from "../Thing/Attribute";
import ValueType = AttributeType.ValueType;
import { Merge } from "../../common/utils";
import { Stream } from "../../rpc/Stream";
import ConceptProto from "graknlabs-grpc-protocol/protobuf/concept_pb";

export interface AttributeType extends ThingType {
    getValueType(): ValueType;
    isKeyable(): boolean;

    asRemote(transaction: Transaction): RemoteAttributeType;
}

export interface RemoteAttributeType extends Merge<RemoteThingType, AttributeType> {
    asRemote(transaction: Transaction): RemoteAttributeType;

    setSupertype(type: AttributeType): void;
    getSupertype(): AttributeType;
    getSupertypes(): Stream<any>;
    getSubtypes(): Stream<any>;
    getInstances(): Stream<any>;
    getOwners(): Stream<any>;
    getOwners(onlyKey: boolean): Stream<any>;
}

export interface BooleanAttributeType extends AttributeType {
    asRemote(transaction: Transaction): RemoteBooleanAttributeType;
}

export interface RemoteBooleanAttributeType extends Merge<RemoteAttributeType, BooleanAttributeType> {
    asRemote(transaction: Transaction): RemoteBooleanAttributeType;

    setSupertype(type: BooleanAttributeType): void;
    getSupertype(): BooleanAttributeType;
    getSupertypes(): Stream<any>;
    getSubtypes(): Stream<any>;
    getInstances(): Stream<any>;

    put(value: boolean): BooleanAttribute;
    get(value: boolean): BooleanAttribute;
}

export interface LongAttributeType extends AttributeType {
    asRemote(transaction: Transaction): RemoteLongAttributeType;
}

export interface RemoteLongAttributeType extends Merge<RemoteAttributeType, LongAttributeType> {
    asRemote(transaction: Transaction): RemoteLongAttributeType;

    setSupertype(type: LongAttributeType): void;
    getSupertype(): LongAttributeType;
    getSupertypes(): Stream<any>;
    getSubtypes(): Stream<any>;
    getInstances(): Stream<any>;

    put(value: number): LongAttribute;
    get(value: number): LongAttribute;
}

export interface DoubleAttributeType extends AttributeType {
    asRemote(transaction: Transaction): RemoteDoubleAttributeType;
}

export interface RemoteDoubleAttributeType extends Merge<RemoteAttributeType, DoubleAttributeType> {
    asRemote(transaction: Transaction): RemoteDoubleAttributeType;

    setSupertype(type: DoubleAttributeType): void;
    getSupertype(): DoubleAttributeType;
    getSupertypes(): Stream<any>;
    getSubtypes(): Stream<any>;
    getInstances(): Stream<any>;

    put(value: number): DoubleAttribute;
    get(value: number): DoubleAttribute;
}

export interface StringAttributeType extends AttributeType {
    asRemote(transaction: Transaction): RemoteStringAttributeType;
}

export interface RemoteStringAttributeType extends Merge<RemoteAttributeType, StringAttributeType> {
    asRemote(transaction: Transaction): RemoteStringAttributeType;

    setSupertype(type: StringAttributeType): void;
    getSupertype(): StringAttributeType;
    getSupertypes(): Stream<any>;
    getSubtypes(): Stream<any>;
    getInstances(): Stream<any>;

    put(value: string): StringAttribute;
    get(value: string): StringAttribute;
}

export interface DateTimeAttributeType extends AttributeType {
    asRemote(transaction: Transaction): RemoteDateTimeAttributeType;
}

export interface RemoteDateTimeAttributeType extends Merge<RemoteAttributeType, DateTimeAttributeType> {
    asRemote(transaction: Transaction): RemoteDateTimeAttributeType;

    setSupertype(type: DateTimeAttributeType): void;
    getSupertype(): DateTimeAttributeType;
    getSupertypes(): Stream<any>;
    getSubtypes(): Stream<any>;
    getInstances(): Stream<any>;

    put(value: Date): DateTimeAttribute;
    get(value: Date): DateTimeAttribute;
}

export namespace AttributeType {
    export enum ValueType {
        OBJECT,
        BOOLEAN,
        LONG,
        DOUBLE,
        STRING,
        DATETIME,
    }

    export namespace ValueType {
        export function of(valueType: ConceptProto.AttributeType.VALUE_TYPE): ValueType {
            switch (valueType) {
                case ConceptProto.AttributeType.VALUE_TYPE.STRING:
                    return ValueType.STRING;
                case ConceptProto.AttributeType.VALUE_TYPE.BOOLEAN:
                    return ValueType.BOOLEAN;
                case ConceptProto.AttributeType.VALUE_TYPE.LONG:
                    return ValueType.LONG;
                case ConceptProto.AttributeType.VALUE_TYPE.DOUBLE:
                    return ValueType.DOUBLE;
                case ConceptProto.AttributeType.VALUE_TYPE.DATETIME:
                    return ValueType.DATETIME;
                default:
                    throw "Bad value type";
            }
        }

        export function isKeyable(valueType: ValueType) {
            return [ValueType.LONG, ValueType.STRING, ValueType.DATETIME].includes(valueType);
        }

        export function isWritable(valueType: ValueType) {
            return valueType !== ValueType.OBJECT;
        }
    }

    export type ValueClass = number | string | boolean | Date;
}
