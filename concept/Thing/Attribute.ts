import { Thing, RemoteThing } from "./Thing";
import { AttributeType } from "../Type/AttributeType";
import {GraknTransaction} from "../../Grakn";

export interface Attribute<T extends AttributeValueType> extends Thing {
    getValue(): T;

    asBoolean(): BooleanAttribute;
    asLong(): LongAttribute;
    asDouble(): DoubleAttribute;
    asString(): StringAttribute;
    asDateTime(): DateTimeAttribute;
    asRemote(transaction: GraknTransaction): RemoteAttribute<T>;
}

export interface RemoteAttribute<T extends AttributeValueType> extends Merge<RemoteThing, Attribute<T>> {
    getType(): AttributeType;
    asRemote(transaction: GraknTransaction): RemoteAttribute<T>;
}

export interface BooleanAttribute extends Attribute<boolean> {

}

export interface RemoteBooleanAttribute extends Merge<RemoteAttribute<boolean>, BooleanAttribute> {

}

export interface LongAttribute extends Attribute<number> {

}

export interface RemoteLongAttribute extends Merge<RemoteAttribute<number>, LongAttribute> {

}

export interface DoubleAttribute extends Attribute<number> {

}

export interface RemoteDoubleAttribute extends Merge<RemoteAttribute<number>, LongAttribute> {

}

export interface StringAttribute extends Attribute<string> {

}

export interface RemoteStringAttribute extends Merge<RemoteAttribute<string>, StringAttribute> {

}

export interface DateTimeAttribute extends Attribute<Date> {

}

export interface RemoteDateTimeAttribute extends Merge<RemoteAttribute<Date>, DateTimeAttribute> {

}

export type AttributeValueType = boolean|number|Date|string;
