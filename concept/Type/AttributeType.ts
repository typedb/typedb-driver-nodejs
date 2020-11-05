import { RemoteThingType, ThingType } from "./ThingType";

export interface AttributeType extends ThingType {
    asRemote(transaction: Transaction): RemoteAttributeType;
    getValueType(): string;
}

export interface RemoteAttributeType extends Merge<RemoteThingType, AttributeType> {
    asRemote(transaction: Transaction): RemoteAttributeType;
}

export interface BooleanAttributeType extends AttributeType {
    asRemote(transaction: Transaction): RemoteBooleanAttributeType;

}

export interface RemoteBooleanAttributeType extends Merge<RemoteAttributeType, BooleanAttributeType> {
    asRemote(transaction: Transaction): RemoteBooleanAttributeType;

}

export interface StringAttributeType extends AttributeType {
    asRemote(transaction: Transaction): RemoteStringAttributeType;

}

export interface RemoteStringAttributeType extends Merge<RemoteAttributeType, StringAttributeType> {
    asRemote(transaction: Transaction): RemoteStringAttributeType;

}

export interface DoubleAttributeType extends AttributeType {
    asRemote(transaction: Transaction): RemoteDoubleAttributeType;

}

export interface RemoteDoubleAttributeType extends Merge<RemoteAttributeType, DoubleAttributeType> {
    asRemote(transaction: Transaction): RemoteDoubleAttributeType;

}

export interface LongAttributeType extends AttributeType {
    asRemote(transaction: Transaction): RemoteLongAttributeType;

}

export interface RemoteLongAttributeType extends Merge<RemoteAttributeType, LongAttributeType> {
    asRemote(transaction: Transaction): RemoteLongAttributeType;

}

export interface DateTimeAttributeType extends AttributeType {
    asRemote(transaction: Transaction): RemoteDateTimeAttributeType;

}

export interface RemoteDateTimeAttributeType extends Merge<RemoteAttributeType, DateTimeAttributeType> {
    asRemote(transaction: Transaction): RemoteDateTimeAttributeType;

}