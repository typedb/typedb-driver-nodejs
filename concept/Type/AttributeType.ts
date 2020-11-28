import { RemoteThingType, ThingType } from "./ThingType";
import { Grakn } from "../../Grakn";
import Transaction = Grakn.Transaction;
// TODO
import { AttributeType as AttributeTypeProto } from "bazel-bin/external/graknlabs_protocol/grpc/nodejs/protobuf/concept_pb";
import ProtoValueType = AttributeTypeProto.VALUE_TYPE;
import { QueryIterator } from "../Concept";
import { BooleanAttribute, DateTimeAttribute, DoubleAttribute,
    LongAttribute, StringAttribute } from "../Thing/Attribute";
import ValueType = AttributeType.ValueType;
import { Merge } from "../../common/utils";

export interface AttributeType extends ThingType {
    getValueType(): ValueType;
    isKeyable(): boolean;

    asRemote(transaction: Transaction): RemoteAttributeType;
}

export interface RemoteAttributeType extends Merge<RemoteThingType, AttributeType> {
    asRemote(transaction: Transaction): RemoteAttributeType;

    setSupertype(type: AttributeType): void;
    getSupertype(): AttributeType;
    getSupertypes(): QueryIterator;
    getSubtypes(): QueryIterator;
    getInstances(): QueryIterator;
    getOwners(): QueryIterator;
    getOwners(onlyKey: boolean): QueryIterator;
}

export interface BooleanAttributeType extends AttributeType {
    asRemote(transaction: Transaction): RemoteBooleanAttributeType;
}

export interface RemoteBooleanAttributeType extends Merge<RemoteAttributeType, BooleanAttributeType> {
    asRemote(transaction: Transaction): RemoteBooleanAttributeType;

    setSupertype(type: BooleanAttributeType): void;
    getSupertype(): BooleanAttributeType;
    getSupertypes(): QueryIterator;
    getSubtypes(): QueryIterator;
    getInstances(): QueryIterator;

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
    getSupertypes(): QueryIterator;
    getSubtypes(): QueryIterator;
    getInstances(): QueryIterator;

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
    getSupertypes(): QueryIterator;
    getSubtypes(): QueryIterator;
    getInstances(): QueryIterator;

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
    getSupertypes(): QueryIterator;
    getSubtypes(): QueryIterator;
    getInstances(): QueryIterator;

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
    getSupertypes(): QueryIterator;
    getSubtypes(): QueryIterator;
    getInstances(): QueryIterator;

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
        export function of(valueType: ProtoValueType): ValueType {
            switch (valueType) {
                case ProtoValueType.STRING:
                    return ValueType.STRING;
                case ProtoValueType.BOOLEAN:
                    return ValueType.BOOLEAN;
                case ProtoValueType.LONG:
                    return ValueType.LONG;
                case ProtoValueType.DOUBLE:
                    return ValueType.DOUBLE;
                case ProtoValueType.DATETIME:
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
