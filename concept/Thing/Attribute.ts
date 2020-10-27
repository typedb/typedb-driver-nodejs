interface Attribute<T> extends Thing {
    getValue(): T;

    asBoolean():    BooleanAttribute;
    asLong():       LongAttribute;
    asDouble():     DoubleAttribute;
    asString():     StringAttribute;
    asDateTime():   DateTimeAttribute;
}



interface RemoteAttribute<T> extends Remote<Attribute<T>>, Attribute<T> {
    getType(): AttributeType;
}

interface BooleanAttribute extends Attribute<boolean> {

}

interface RemoteBooleanAttribute extends BooleanAttribute, Remote<BooleanAttribute> {

}

interface LongAttribute extends Attribute<number> {

}

interface RemoteLongAttribute extends LongAttribute, Remote<LongAttribute> {

}

interface DoubleAttribute extends Attribute<number> {

}

interface RemoteDoubleAttribute extends DoubleAttribute, Remote<DoubleAttribute> {

}

interface StringAttribute extends Attribute<string> {

}

interface RemoteStringAttribute extends StringAttribute, Remote<StringAttribute> {

}

interface DateTimeAttribute extends Attribute<Date> {

}

interface RemoteDateTimeAttribute extends DateTimeAttribute, Remote<DateTimeAttribute> {

}