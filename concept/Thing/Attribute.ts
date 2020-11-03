interface Attribute<T extends AttributeValueType> extends Thing {
    getValue(): T;

    asBoolean():    BooleanAttribute;
    asLong():       LongAttribute;
    asDouble():     DoubleAttribute;
    asString():     StringAttribute;
    asDateTime():   DateTimeAttribute;
}



interface RemoteAttribute<T extends AttributeValueType> extends Merge<RemoteThing, Attribute<T>> {
    getType(): AttributeType;
}

interface BooleanAttribute extends Attribute<boolean> {

}

interface RemoteBooleanAttribute extends Merge<RemoteAttribute<boolean>, BooleanAttribute> {

}

interface LongAttribute extends Attribute<number> {

}

interface RemoteLongAttribute extends Merge<RemoteAttribute<number>, LongAttribute> {

}

interface DoubleAttribute extends Attribute<number> {

}

interface RemoteDoubleAttribute extends Merge<RemoteAttribute<number>, LongAttribute> {

}

interface StringAttribute extends Attribute<string> {

}

interface RemoteStringAttribute extends Merge<RemoteAttribute<string>, StringAttribute> {

}

interface DateTimeAttribute extends Attribute<Date> {

}

interface RemoteDateTimeAttribute extends Merge<RemoteAttribute<Date>, DateTimeAttribute> {

}

type AttributeValueType = boolean|number|Date|string;
