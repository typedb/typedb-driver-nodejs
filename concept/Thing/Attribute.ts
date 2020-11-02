interface Attribute<T extends AttributeValueType> extends Thing {
    getValue(): T;

    asBoolean():    BooleanAttribute;
    asLong():       LongAttribute;
    asDouble():     DoubleAttribute;
    asString():     StringAttribute;
    asDateTime():   DateTimeAttribute;
}



interface RemoteAttribute<T extends AttributeValueType> extends Merge<Remote<Attribute<T>>, Attribute<T>> {
    getType(): AttributeType;
}

interface BooleanAttribute extends Attribute<boolean> {

}

interface RemoteBooleanAttribute extends Merge<BooleanAttribute, Remote<BooleanAttribute>> {

}

interface LongAttribute extends Attribute<number> {

}

interface RemoteLongAttribute extends Merge<LongAttribute, Remote<LongAttribute>> {

}

interface DoubleAttribute extends Attribute<number> {

}

interface RemoteDoubleAttribute extends Merge<DoubleAttribute, Remote<DoubleAttribute>> {

}

interface StringAttribute extends Attribute<string> {

}

interface RemoteStringAttribute extends Merge<StringAttribute, Remote<StringAttribute>> {

}

interface DateTimeAttribute extends Attribute<Date> {

}

interface RemoteDateTimeAttribute extends Merge<DateTimeAttribute, Remote<DateTimeAttribute>> {

}

type AttributeValueType = boolean|number|Date|string;
