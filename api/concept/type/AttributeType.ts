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
import {AttributeType as AttributeTypeProto} from "grakn-protocol/common/concept_pb";
import {
    Attribute,
    BooleanAttribute,
    DateTimeAttribute,
    DoubleAttribute,
    LongAttribute,
    StringAttribute
} from "../thing/Attribute";

export interface AttributeType extends ThingType {

    getValueType(): AttributeType.ValueType;

    isKeyable(): boolean;

    isBoolean(): boolean;

    isLong(): boolean;

    isDouble(): boolean;

    isString(): boolean;

    isDateTime(): boolean;

    asBoolean(): AttributeType.Boolean;

    asLong(): AttributeType.Long;

    asDouble(): AttributeType.Double;

    asString(): AttributeType.String;

    asDateTime(): AttributeType.DateTime;

    asRemote(transaction: GraknTransaction): AttributeType.Remote;

}

export namespace AttributeType {

    export interface Remote extends RemoteThingType, AttributeType {

        setSupertype(type: AttributeType): Promise<void>;

        getSubtypes(): Stream<AttributeType>;

        getInstances(): Stream<Attribute<AttributeType.ValueClass>>;

        getOwners(): Stream<ThingType>;

        getOwners(onlyKey: boolean): Stream<ThingType>;

        asBoolean(): AttributeType.RemoteBoolean;

        asLong(): AttributeType.RemoteLong;

        asDouble(): AttributeType.RemoteDouble;

        asString(): AttributeType.RemoteString;

        asDateTime(): AttributeType.RemoteDateTime;

        asRemote(transaction: GraknTransaction): AttributeType.Remote;

    }

    export interface Boolean extends AttributeType {

        asRemote(transaction: GraknTransaction): AttributeType.RemoteBoolean;

    }

    export interface RemoteBoolean extends AttributeType.Remote, Boolean {

        asRemote(transaction: GraknTransaction): RemoteBoolean;

        // TODO avoid this typing workaround
        asBoolean(): RemoteBoolean;
        asLong(): RemoteLong;
        asDouble(): RemoteDouble;
        asString(): RemoteString;
        asDateTime(): RemoteDateTime;

        setSupertype(type: Boolean): Promise<void>;

        getSubtypes(): Stream<Boolean>;

        getInstances(): Stream<BooleanAttribute>;

        put(value: boolean): Promise<BooleanAttribute>;

        get(value: boolean): Promise<BooleanAttribute>;

    }

    export interface Long extends AttributeType {

        asRemote(transaction: GraknTransaction): AttributeType.RemoteLong;

    }
    export interface RemoteLong extends AttributeType.Remote, Long {

        asRemote(transaction: GraknTransaction): RemoteLong;

        // TODO avoid this typing workaround
        asBoolean(): RemoteBoolean;
        asLong(): RemoteLong;
        asDouble(): RemoteDouble;
        asString(): RemoteString;
        asDateTime(): RemoteDateTime;

        setSupertype(type: Long): Promise<void>;

        getSubtypes(): Stream<Long>;

        getInstances(): Stream<LongAttribute>;

        put(value: number): Promise<LongAttribute>;

        get(value: number): Promise<LongAttribute>;

    }

    export interface Double extends AttributeType {

        asRemote(transaction: GraknTransaction): AttributeType.RemoteDouble;

    }

    export interface RemoteDouble extends AttributeType.Remote, Double {
        asRemote(transaction: GraknTransaction): RemoteDouble;

        // TODO avoid this typing workaround
        asBoolean(): RemoteBoolean;
        asLong(): RemoteLong;
        asDouble(): RemoteDouble;
        asString(): RemoteString;
        asDateTime(): RemoteDateTime;

        setSupertype(type: Double): Promise<void>;

        getSubtypes(): Stream<Double>;

        getInstances(): Stream<DoubleAttribute>;

        put(value: number): Promise<DoubleAttribute>;

        get(value: number): Promise<DoubleAttribute>;
    }

    export interface String extends AttributeType {

        asRemote(transaction: GraknTransaction): AttributeType.RemoteString;

    }

    export interface RemoteString extends AttributeType.Remote, String {

        asRemote(transaction: GraknTransaction): RemoteString;

        // TODO avoid this typing workaround
        asBoolean(): RemoteBoolean;
        asLong(): RemoteLong;
        asDouble(): RemoteDouble;
        asString(): RemoteString;
        asDateTime(): RemoteDateTime;

        setSupertype(type: String): Promise<void>;

        getSubtypes(): Stream<String>;

        getInstances(): Stream<StringAttribute>;

        put(value: string): Promise<StringAttribute>;

        get(value: string): Promise<StringAttribute>;

        getRegex(): Promise<string>;

        setRegex(regex: string): Promise<void>;

    }

    export interface DateTime extends AttributeType {

        asRemote(transaction: GraknTransaction): AttributeType.RemoteDateTime;

    }

    export interface RemoteDateTime extends AttributeType.Remote, DateTime {

        asRemote(transaction: GraknTransaction): RemoteDateTime;

        // TODO avoid this typing workaround
        asBoolean(): RemoteBoolean;
        asLong(): RemoteLong;
        asDouble(): RemoteDouble;
        asString(): RemoteString;
        asDateTime(): RemoteDateTime;

        setSupertype(type: DateTime): Promise<void>;

        getSubtypes(): Stream<DateTime>;

        getInstances(): Stream<DateTimeAttribute>;

        put(value: Date): Promise<DateTimeAttribute>;

        get(value: Date): Promise<DateTimeAttribute>;

    }

    export interface ValueType {

        isKeyable(): boolean;

        isWritable(): boolean;

        proto(): AttributeTypeProto.ValueType;

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

    }

    export type ValueClass = number | string | boolean | Date;
}
