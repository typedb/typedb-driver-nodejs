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

import { RemoteThingTypeImpl, ThingTypeImpl } from "./ThingTypeImpl";
import { AttributeType, BooleanAttributeType, DateTimeAttributeType, DoubleAttributeType, LongAttributeType,
    RemoteAttributeType, RemoteBooleanAttributeType, RemoteDateTimeAttributeType, RemoteDoubleAttributeType,
    RemoteLongAttributeType, RemoteStringAttributeType, StringAttributeType } from "../AttributeType";
import { Grakn } from "../../../Grakn";
import ConceptProto from "graknlabs-grpc-protocol/protobuf/concept_pb";
import Transaction = Grakn.Transaction;
import ValueType = AttributeType.ValueType;
import isKeyable = AttributeType.ValueType.isKeyable;
import { AttributeImpl, BooleanAttributeImpl, DateTimeAttributeImpl, DoubleAttributeImpl,
    LongAttributeImpl, StringAttributeImpl } from "../../Thing/Impl/AttributeImpl";
import ValueClass = AttributeType.ValueClass;
import assert from "assert";
import { Stream } from "../../../rpc/Stream";

export class AttributeTypeImpl extends ThingTypeImpl implements AttributeType {

    private static ROOT_LABEL = "attribute";

    protected constructor(label: string, isRoot: boolean) {
        super(label, isRoot);
    }

    static of(type: ConceptProto.Type) {
        switch (type.getValueType()) {
            case ConceptProto.AttributeType.VALUE_TYPE.BOOLEAN:
                return new BooleanAttributeTypeImpl(type.getLabel(), type.getRoot());
            case ConceptProto.AttributeType.VALUE_TYPE.LONG:
                return new LongAttributeTypeImpl(type.getLabel(), type.getRoot());
            case ConceptProto.AttributeType.VALUE_TYPE.DOUBLE:
                return new DoubleAttributeTypeImpl(type.getLabel(), type.getRoot());
            case ConceptProto.AttributeType.VALUE_TYPE.STRING:
                return new StringAttributeTypeImpl(type.getLabel(), type.getRoot());
            case ConceptProto.AttributeType.VALUE_TYPE.DATETIME:
                return new DateTimeAttributeTypeImpl(type.getLabel(), type.getRoot());
            case ConceptProto.AttributeType.VALUE_TYPE.OBJECT:
                assert(type.getRoot());
                return new AttributeTypeImpl(type.getLabel(), type.getRoot());
            default:
                throw "Bad value type";
        }
    }

    getValueType(): ValueType {
        return ValueType.OBJECT;
    }

    isKeyable(): boolean {
        return isKeyable(this.getValueType());
    }

    asRemote(transaction: Transaction): RemoteAttributeTypeImpl {
        return new RemoteAttributeTypeImpl(transaction, this.getLabel(), this.isRoot())
    }
}

export class RemoteAttributeTypeImpl extends RemoteThingTypeImpl implements RemoteAttributeType {

    constructor(transaction: Transaction, label: string, isRoot: boolean) {
        super(transaction, label, isRoot);
    }

    getValueType(): ValueType {
        return ValueType.OBJECT;
    }

    isKeyable(): boolean {
        return isKeyable(this.getValueType());
    }

    asRemote(transaction: Transaction): RemoteAttributeTypeImpl {
        return new RemoteAttributeTypeImpl(transaction, this.getLabel(), this.isRoot())
    }

    setSupertype(type: AttributeType): void {
        throw "Not implemented yet";
    }

    getSupertype(): AttributeTypeImpl {
        throw "Not implemented yet";
    }

    getSupertypes(): Stream<any> {
        throw "Not implemented yet";
    }

    getSubtypes(): Stream<any> {
        throw "Not implemented yet";
    }

    getInstances(): Stream<any> {
        throw "Not implemented yet";
    }

    getOwners(onlyKey?: boolean): Stream<any> {
        throw "Not implemented yet";
    }

    protected putInternal<T extends ValueClass>(value: T): AttributeImpl<T> {
        throw "Not implemented yet";
    }

    protected getInternal<T extends ValueClass>(value: T): AttributeImpl<T> {
        throw "Not implemented yet";
    }
}

export class BooleanAttributeTypeImpl extends AttributeTypeImpl implements BooleanAttributeType {

    constructor(label: string, isRoot: boolean) {
        super(label, isRoot);
    }

    getValueType(): ValueType {
        return ValueType.BOOLEAN;
    }

    asRemote(transaction: Transaction): RemoteBooleanAttributeTypeImpl {
        return new RemoteBooleanAttributeTypeImpl(transaction, this.getLabel(), this.isRoot())
    }
}

export class RemoteBooleanAttributeTypeImpl extends RemoteAttributeTypeImpl implements RemoteBooleanAttributeType {

    constructor(transaction: Transaction, label: string, isRoot: boolean) {
        super(transaction, label, isRoot);
    }

    getValueType(): ValueType {
        return ValueType.BOOLEAN;
    }

    asRemote(transaction: Transaction): RemoteBooleanAttributeTypeImpl {
        return new RemoteBooleanAttributeTypeImpl(transaction, this.getLabel(), this.isRoot());
    }

    getSupertype(): BooleanAttributeTypeImpl {
        throw "Not implemented yet";
    }

    getSupertypes(): Stream<any> {
        throw "Not implemented yet";
    }

    getSubtypes(): Stream<any> {
        throw "Not implemented yet";
    }

    getInstances(): Stream<any> {
        throw "Not implemented yet";
    }

    setSupertype(type: BooleanAttributeType): void {
        super.setSupertype(type);
    }

    put(value: boolean): BooleanAttributeImpl {
        return this.putInternal(value) as BooleanAttributeImpl;
    }

    get(value: boolean): BooleanAttributeImpl {
        return this.getInternal(value) as BooleanAttributeImpl;
    }
}

export class LongAttributeTypeImpl extends AttributeTypeImpl implements LongAttributeType {

    constructor(label: string, isRoot: boolean) {
        super(label, isRoot);
    }

    getValueType(): ValueType {
        return ValueType.LONG;
    }

    asRemote(transaction: Transaction): RemoteLongAttributeTypeImpl {
        return new RemoteLongAttributeTypeImpl(transaction, this.getLabel(), this.isRoot())
    }
}

export class RemoteLongAttributeTypeImpl extends RemoteAttributeTypeImpl implements RemoteLongAttributeType {

    constructor(transaction: Transaction, label: string, isRoot: boolean) {
        super(transaction, label, isRoot);
    }

    getValueType(): ValueType {
        return ValueType.LONG;
    }

    asRemote(transaction: Transaction): RemoteLongAttributeTypeImpl {
        return new RemoteLongAttributeTypeImpl(transaction, this.getLabel(), this.isRoot());
    }

    getSupertype(): LongAttributeTypeImpl {
        throw "Not implemented yet";
    }

    getSupertypes(): Stream<any> {
        throw "Not implemented yet";
    }

    getSubtypes(): Stream<any> {
        throw "Not implemented yet";
    }

    getInstances(): Stream<any> {
        throw "Not implemented yet";
    }

    setSupertype(type: LongAttributeType): void {
        super.setSupertype(type);
    }

    put(value: number): LongAttributeImpl {
        return this.putInternal(value) as LongAttributeImpl;
    }

    get(value: number): LongAttributeImpl {
        return this.getInternal(value) as LongAttributeImpl;
    }
}

export class DoubleAttributeTypeImpl extends AttributeTypeImpl implements DoubleAttributeType {

    constructor(label: string, isRoot: boolean) {
        super(label, isRoot);
    }

    getValueType(): ValueType {
        return ValueType.DOUBLE;
    }

    asRemote(transaction: Transaction): RemoteDoubleAttributeTypeImpl {
        return new RemoteDoubleAttributeTypeImpl(transaction, this.getLabel(), this.isRoot())
    }
}

export class RemoteDoubleAttributeTypeImpl extends RemoteAttributeTypeImpl implements RemoteDoubleAttributeType {

    constructor(transaction: Transaction, label: string, isRoot: boolean) {
        super(transaction, label, isRoot);
    }

    getValueType(): ValueType {
        return ValueType.DOUBLE;
    }

    asRemote(transaction: Transaction): RemoteDoubleAttributeTypeImpl {
        return new RemoteDoubleAttributeTypeImpl(transaction, this.getLabel(), this.isRoot());
    }

    getSupertype(): DoubleAttributeTypeImpl {
        throw "Not implemented yet";
    }

    getSupertypes(): Stream<any> {
        throw "Not implemented yet";
    }

    getSubtypes(): Stream<any> {
        throw "Not implemented yet";
    }

    getInstances(): Stream<any> {
        throw "Not implemented yet";
    }

    setSupertype(type: DoubleAttributeType): void {
        super.setSupertype(type);
    }

    put(value: number): DoubleAttributeImpl {
        return this.putInternal(value) as DoubleAttributeImpl;
    }

    get(value: number): DoubleAttributeImpl {
        return this.getInternal(value) as DoubleAttributeImpl;
    }
}

export class StringAttributeTypeImpl extends AttributeTypeImpl implements StringAttributeType {

    constructor(label: string, isRoot: boolean) {
        super(label, isRoot);
    }

    getValueType(): ValueType {
        return ValueType.STRING;
    }

    asRemote(transaction: Transaction): RemoteStringAttributeTypeImpl {
        return new RemoteStringAttributeTypeImpl(transaction, this.getLabel(), this.isRoot())
    }
}

export class RemoteStringAttributeTypeImpl extends RemoteAttributeTypeImpl implements RemoteStringAttributeType {

    constructor(transaction: Transaction, label: string, isRoot: boolean) {
        super(transaction, label, isRoot);
    }

    getValueType(): ValueType {
        return ValueType.STRING;
    }

    asRemote(transaction: Transaction): RemoteStringAttributeTypeImpl {
        return new RemoteStringAttributeTypeImpl(transaction, this.getLabel(), this.isRoot());
    }

    getSupertype(): StringAttributeTypeImpl {
        throw "Not implemented yet";
    }

    getSupertypes(): Stream<any> {
        throw "Not implemented yet";
    }

    getSubtypes(): Stream<any> {
        throw "Not implemented yet";
    }

    getInstances(): Stream<any> {
        throw "Not implemented yet";
    }

    setSupertype(type: StringAttributeType): void {
        super.setSupertype(type);
    }

    put(value: string): StringAttributeImpl {
        return this.putInternal(value) as StringAttributeImpl;
    }

    get(value: string): StringAttributeImpl {
        return this.getInternal(value) as StringAttributeImpl;
    }
}

export class DateTimeAttributeTypeImpl extends AttributeTypeImpl implements DateTimeAttributeType {

    constructor(label: string, isRoot: boolean) {
        super(label, isRoot);
    }

    getValueType(): ValueType {
        return ValueType.DATETIME;
    }

    asRemote(transaction: Transaction): RemoteDateTimeAttributeTypeImpl {
        return new RemoteDateTimeAttributeTypeImpl(transaction, this.getLabel(), this.isRoot())
    }
}

export class RemoteDateTimeAttributeTypeImpl extends RemoteAttributeTypeImpl implements RemoteDateTimeAttributeType {

    constructor(transaction: Transaction, label: string, isRoot: boolean) {
        super(transaction, label, isRoot);
    }

    getValueType(): ValueType {
        return ValueType.DATETIME;
    }

    asRemote(transaction: Transaction): RemoteDateTimeAttributeTypeImpl {
        return new RemoteDateTimeAttributeTypeImpl(transaction, this.getLabel(), this.isRoot());
    }

    getSupertype(): DateTimeAttributeTypeImpl {
        throw "Not implemented yet";
    }

    getSupertypes(): Stream<any> {
        throw "Not implemented yet";
    }

    getSubtypes(): Stream<any> {
        throw "Not implemented yet";
    }

    getInstances(): Stream<any> {
        throw "Not implemented yet";
    }

    setSupertype(type: DateTimeAttributeType): void {
        super.setSupertype(type);
    }

    put(value: Date): DateTimeAttributeImpl {
        return this.putInternal(value) as DateTimeAttributeImpl;
    }

    get(value: Date): DateTimeAttributeImpl {
        return this.getInternal(value) as DateTimeAttributeImpl;
    }
}
