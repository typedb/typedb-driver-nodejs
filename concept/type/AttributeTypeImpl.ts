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


import {ThingTypeImpl} from "./ThingTypeImpl";
import {AttributeType} from "../../api/concept/type/AttributeType";
import {AttributeType as AttributeTypeProto, Type as TypeProto} from "grakn-protocol/common/concept_pb";
import {Stream} from "../../common/util/Stream";
import {Attribute} from "../../api/concept/thing/Attribute";
import {ThingType} from "../../api/concept/type/ThingType";
import {GraknTransaction} from "../../api/GraknTransaction";
import {Core} from "../../common/rpc/RequestBuilder";
import {ErrorMessage} from "../../common_old/errors/ErrorMessage";
import {Label} from "../../common/Label";
import {GraknClientError} from "../../common_old/errors/GraknClientError";
import INVALID_CONCEPT_CASTING = ErrorMessage.Concept.INVALID_CONCEPT_CASTING;
import BAD_VALUE_TYPE = ErrorMessage.Concept.BAD_VALUE_TYPE;

export class AttributeTypeImpl extends ThingTypeImpl implements AttributeType {

    constructor(name: string, isRoot: boolean) {
        super(name, isRoot);
    }

    asRemote(transaction: GraknTransaction): AttributeType.Remote {
        return new AttributeTypeImpl.Remote(transaction as GraknTransaction.Extended, this.getLabel(), this.isRoot());
    }

    getValueType(): AttributeType.ValueType {
        return AttributeType.ValueType.OBJECT;
    }

    isKeyable(): boolean {
        return this.getValueType().isKeyable();
    }

    asBoolean(): AttributeType.Boolean {
        if (this.isRoot()) {
            return new AttributeTypeImpl.Boolean(this.getLabel().name(), this.isRoot());
        }
        throw new GraknClientError(INVALID_CONCEPT_CASTING.message("AttributeType", "AttributeType.Boolean"));
    }

    asLong(): AttributeType.Long {
        if (this.isRoot()) {
            return new AttributeTypeImpl.Long(this.getLabel().name(), this.isRoot());
        }
        throw new GraknClientError(INVALID_CONCEPT_CASTING.message("AttributeType", "AttributeType.Long"));
    }

    asDouble(): AttributeType.Double {
        if (this.isRoot()) {
            return new AttributeTypeImpl.Double(this.getLabel().name(), this.isRoot());
        }
        throw new GraknClientError(INVALID_CONCEPT_CASTING.message("AttributeType", "AttributeType.Double"));
    }

    asString(): AttributeType.String {
        if (this.isRoot()) {
            return new AttributeTypeImpl.String(this.getLabel().name(), this.isRoot());
        }
        throw new GraknClientError(INVALID_CONCEPT_CASTING.message("AttributeType", "AttributeType.String"));
    }

    asDateTime(): AttributeType.DateTime {
        if (this.isRoot()) {
            return new AttributeTypeImpl.DateTime(this.getLabel().name(), this.isRoot());
        }
        throw new GraknClientError(INVALID_CONCEPT_CASTING.message("AttributeType", "AttributeType.DateTime"));
    }

    isBoolean(): boolean {
        return false;
    }

    isDateTime(): boolean {
        return false;
    }

    isDouble(): boolean {
        return false;
    }

    isLong(): boolean {
        return false;
    }

    isString(): boolean {
        return false;
    }

}

export namespace AttributeTypeImpl {

    export function of(attributeTypeProto: TypeProto) {
        switch (attributeTypeProto.getValueType()) {
            case AttributeTypeProto.ValueType.BOOLEAN:
                return new AttributeTypeImpl.Boolean(attributeTypeProto.getLabel(), attributeTypeProto.getRoot());
            case AttributeTypeProto.ValueType.LONG:
                return new AttributeTypeImpl.Long(attributeTypeProto.getLabel(), attributeTypeProto.getRoot());
            case AttributeTypeProto.ValueType.DOUBLE:
                return new AttributeTypeImpl.Double(attributeTypeProto.getLabel(), attributeTypeProto.getRoot());
            case AttributeTypeProto.ValueType.STRING:
                return new AttributeTypeImpl.String(attributeTypeProto.getLabel(), attributeTypeProto.getRoot());
            case AttributeTypeProto.ValueType.DATETIME:
                return new AttributeTypeImpl.DateTime(attributeTypeProto.getLabel(), attributeTypeProto.getRoot());
            case AttributeTypeProto.ValueType.OBJECT:
                return new AttributeTypeImpl(attributeTypeProto.getLabel(), attributeTypeProto.getRoot());
            default:
                throw new GraknClientError(BAD_VALUE_TYPE.message(attributeTypeProto.getValueType()));
        }
    }

    export class Remote extends ThingTypeImpl.RemoteImpl implements AttributeType.Remote {

        constructor(transaction: GraknTransaction.Extended, label: Label, isRoot: boolean) {
            super(transaction, label, isRoot);
        }

        asRemote(transaction: GraknTransaction): AttributeType.Remote {
            return this;
        }

        isKeyable(): boolean {
            return this.getValueType().isKeyable();
        }

        getValueType(): AttributeType.ValueType {
            return AttributeType.ValueType.OBJECT;
        }

        async setSupertype(type: AttributeType): Promise<void> {
            super.setSupertype(type);
        }

        getSubtypes(): Stream<AttributeType> {
            return super.getSupertype() as Stream<AttributeType>;
        }

        getInstances(): Stream<Attribute<AttributeType.ValueClass>> {
            // TODO
            return null;
        }

        getOwners(onlyKey?: boolean): Stream<ThingType> {
            // TODO check this is the right way to check onlyKey is unset
            if (onlyKey == undefined) {
                onlyKey = false;
            }
            const request = Core.Type.AttributeType.getOwnersReq(this.getLabel(), onlyKey);
            return this.stream(request)
                .flatMap((resPart) => Stream.array(resPart.getAttributeTypeGetOwnersResPart().getOwnersList()))
                .map((thingTypeProto) => ThingTypeImpl.of(thingTypeProto));
        }

        isBoolean(): boolean {
            return false;
        }

        isDateTime(): boolean {
            return false;
        }

        isDouble(): boolean {
            return false;
        }

        isLong(): boolean {
            return false;
        }

        isString(): boolean {
            return false;
        }

        asBoolean(): AttributeType.RemoteBoolean {
            if (this.isRoot()) {
                return new AttributeTypeImpl.RemoteBoolean(this._transaction, this.getLabel(), this.isRoot());
            }
            throw new GraknClientError(INVALID_CONCEPT_CASTING.message("AttributeType.Remote", "AttributeType.RemoteBoolean"));
        }

        asLong(): AttributeType.RemoteLong {
            if (this.isRoot()) {
                return new AttributeTypeImpl.RemoteLong(this._transaction, this.getLabel(), this.isRoot());
            }
            throw new GraknClientError(INVALID_CONCEPT_CASTING.message("AttributeType.Remote", "AttributeType.RemoteLong"));
        }

        asDouble(): AttributeType.RemoteDouble {
            if (this.isRoot()) {
                return new AttributeTypeImpl.RemoteDouble(this._transaction, this.getLabel(), this.isRoot());
            }
            throw new GraknClientError(INVALID_CONCEPT_CASTING.message("AttributeType.Remote", "AttributeType.RemoteDouble"));
        }

        asString(): AttributeType.RemoteString {
            if (this.isRoot()) {
                return new AttributeTypeImpl.RemoteString(this._transaction, this.getLabel(), this.isRoot());
            }
            throw new GraknClientError(INVALID_CONCEPT_CASTING.message("AttributeType.Remote", "AttributeType.RemoteString"));

        }

        asDateTime(): AttributeType.RemoteDateTime {
            if (this.isRoot()) {
                return new AttributeTypeImpl.RemoteDateTime(this._transaction, this.getLabel(), this.isRoot());
            }
            throw new GraknClientError(INVALID_CONCEPT_CASTING.message("AttributeType.Remote", "AttributeType.RemoteDateTime"));

        }
    }

    export class Boolean extends AttributeTypeImpl implements AttributeType.Boolean {

        constructor(label: string, isRoot: boolean) {
            super(label, isRoot);
        }

        asRemote(transaction: GraknTransaction): AttributeType.RemoteBoolean {
            return new AttributeTypeImpl.RemoteBoolean(transaction as GraknTransaction.Extended, this.getLabel(), this.isRoot());
        }

        getValueType(): AttributeType.ValueType {
            return AttributeType.ValueType.BOOLEAN;
        }

        isBoolean(): boolean {
            return true;
        }

        asBoolean(): AttributeType.Boolean {
            return this;
        }

    }

    export class RemoteBoolean extends AttributeTypeImpl.Remote implements AttributeType.RemoteBoolean {

        constructor(transaction: GraknTransaction.Extended, label: Label, isRoot: boolean) {
            super(transaction, label, isRoot);
        }

        asRemote(transaction: GraknTransaction): AttributeType.RemoteBoolean {
            return this;
        }

        get(value: boolean): Promise<Attribute.Boolean> {
            return Promise.resolve(undefined);
        }

        getValueType(): AttributeType.ValueType {
            return AttributeType.ValueType.BOOLEAN;
        }

        put(value: boolean): Promise<Attribute.Boolean> {
            return Promise.resolve(undefined);
        }

        isBoolean(): boolean {
            return true;
        }

        asBoolean(): AttributeType.RemoteBoolean {
            return this;
        }

    }

    export class Long extends AttributeTypeImpl implements AttributeType.Long {

        constructor(label: string, isRoot: boolean) {
            super(label, isRoot);
        }

        asRemote(transaction: GraknTransaction): AttributeType.RemoteLong {
            return new AttributeTypeImpl.RemoteLong(transaction as GraknTransaction.Extended, this.getLabel(), this.isRoot());
        }

        getValueType(): AttributeType.ValueType {
            return AttributeType.ValueType.LONG;
        }

        isLong(): boolean {
            return true;
        }
    }

    export class RemoteLong extends AttributeTypeImpl.Remote implements AttributeType.RemoteLong {

        constructor(transaction: GraknTransaction.Extended, label: Label, isRoot: boolean) {
            super(transaction, label, isRoot);
        }

        asRemote(transaction: GraknTransaction): AttributeType.RemoteLong {
            return this;
        }

        get(value: number): Promise<Attribute.Long> {
            return Promise.resolve(undefined);
        }

        getValueType(): AttributeType.ValueType {
            return AttributeType.ValueType.LONG;
        }

        put(value: number): Promise<Attribute.Long> {
            return Promise.resolve(undefined);
        }

        isLong(): boolean {
            return true;
        }

        asLong(): AttributeType.RemoteLong {
            return this;
        }

    }

    export class Double extends AttributeTypeImpl implements AttributeType.Double {

        constructor(label: string, isRoot: boolean) {
            super(label, isRoot);
        }

        asRemote(transaction: GraknTransaction): AttributeType.RemoteDouble {
            // TODO
            return null;
        }

        getValueType(): AttributeType.ValueType {
            return AttributeType.ValueType.DOUBLE;
        }

        isDouble(): boolean {
            return true;
        }
    }

    export class RemoteDouble extends AttributeTypeImpl.Remote implements AttributeType.RemoteDouble {

        constructor(transaction: GraknTransaction.Extended, label: Label, isRoot: boolean) {
            super(transaction, label, isRoot);
        }

        asRemote(transaction: GraknTransaction): AttributeType.RemoteDouble {
            return this;
        }

        get(value: number): Promise<Attribute.Double> {
            return Promise.resolve(undefined);
        }

        getValueType(): AttributeType.ValueType {
            return AttributeType.ValueType.LONG;
        }

        put(value: number): Promise<Attribute.Double> {
            return Promise.resolve(undefined);
        }

        isDouble(): boolean {
            return true;
        }

        asDouble(): AttributeType.RemoteDouble {
            return this;
        }

    }

    export class String extends AttributeTypeImpl implements AttributeType.String {

        constructor(label: string, isRoot: boolean) {
            super(label, isRoot);
        }

        asRemote(transaction: GraknTransaction): AttributeType.RemoteString {
            return new AttributeTypeImpl.RemoteString(transaction as GraknTransaction.Extended, this.getLabel(), this.isRoot())
        }

        getValueType(): AttributeType.ValueType {
            return AttributeType.ValueType.STRING;
        }

        isString(): boolean {
            return true;
        }
    }

    export class RemoteString extends AttributeTypeImpl.Remote implements AttributeType.RemoteString {

        constructor(transaction: GraknTransaction.Extended, label: Label, isRoot: boolean) {
            super(transaction, label, isRoot);
        }

        asRemote(transaction: GraknTransaction): AttributeType.RemoteString {
            return this;
        }

        get(value: string): Promise<Attribute.String> {
            return Promise.resolve(undefined);
        }

        getValueType(): AttributeType.ValueType {
            return AttributeType.ValueType.STRING;
        }

        put(value: string): Promise<Attribute.String> {
            return Promise.resolve(undefined);
        }

        isString(): boolean {
            return true;
        }

        asString(): AttributeType.RemoteString {
            return this;
        }

    }

    export class DateTime extends AttributeTypeImpl implements AttributeType.DateTime {

        constructor(label: string, isRoot: boolean) {
            super(label, isRoot);
        }

        asRemote(transaction: GraknTransaction): AttributeType.RemoteDateTime {
            return new AttributeTypeImpl.RemoteDateTime(transaction as GraknTransaction.Extended, this.getLabel(), this.isRoot());
        }

        getValueType(): AttributeType.ValueType {
            return AttributeType.ValueType.DATETIME;
        }

        isDateTime(): boolean {
            return true;
        }
    }

    export class RemoteDateTime extends AttributeTypeImpl.Remote implements AttributeType.RemoteDateTime {

        constructor(transaction: GraknTransaction.Extended, label: Label, isRoot: boolean) {
            super(transaction, label, isRoot);
        }

        asRemote(transaction: GraknTransaction): AttributeType.Remote {
            return this;
        }

        get(value: Date): Promise<Attribute.DateTime> {
            return Promise.resolve(undefined);
        }

        getValueType(): AttributeType.ValueType {
            return AttributeType.ValueType.DATETIME;
        }

        put(value: Date): Promise<Attribute.DateTime> {
            return Promise.resolve(undefined);
        }

        isDateTime(): boolean {
            return true;
        }

        asDateTime(): AttributeType.RemoteDateTime {
            return this;
        }

    }
}



