import { Thing, RemoteThing } from "./Thing";
import { AttributeType } from "../Type/AttributeType";
import ValueClass = AttributeType.ValueClass;
import { Grakn } from "../../Grakn";
import Transaction = Grakn.Transaction;
import { Merge } from "../../common/utils";

export interface Attribute<T extends ValueClass> extends Thing {
    getValue(): T;

    asRemote(transaction: Transaction): RemoteAttribute<T>;
}

export interface RemoteAttribute<T extends ValueClass> extends Merge<RemoteThing, Attribute<T>> {
    getType(): AttributeType;
    asRemote(transaction: Transaction): RemoteAttribute<T>;
}

export interface BooleanAttribute extends Attribute<boolean> {
    asRemote(transaction: Transaction): RemoteBooleanAttribute;
}

export interface RemoteBooleanAttribute extends Merge<RemoteAttribute<boolean>, BooleanAttribute> {
    asRemote(transaction: Transaction): RemoteBooleanAttribute;
}

export interface LongAttribute extends Attribute<number> {
    asRemote(transaction: Transaction): RemoteLongAttribute;
}

export interface RemoteLongAttribute extends Merge<RemoteAttribute<number>, LongAttribute> {
    asRemote(transaction: Transaction): RemoteLongAttribute;
}

export interface DoubleAttribute extends Attribute<number> {
    asRemote(transaction: Transaction): RemoteDoubleAttribute;
}

export interface RemoteDoubleAttribute extends Merge<RemoteAttribute<number>, LongAttribute> {
    asRemote(transaction: Transaction): RemoteDoubleAttribute;
}

export interface StringAttribute extends Attribute<string> {
    asRemote(transaction: Transaction): RemoteStringAttribute;
}

export interface RemoteStringAttribute extends Merge<RemoteAttribute<string>, StringAttribute> {
    asRemote(transaction: Transaction): RemoteStringAttribute;
}

export interface DateTimeAttribute extends Attribute<Date> {
    asRemote(transaction: Transaction): RemoteDateTimeAttribute;
}

export interface RemoteDateTimeAttribute extends Merge<RemoteAttribute<Date>, DateTimeAttribute> {
    asRemote(transaction: Transaction): RemoteDateTimeAttribute;
}
