interface AttributeType extends ThingType {
    asRemote(transaction: Transaction): RemoteAttributeType;
    getValueType(): string;
}

interface RemoteAttributeType extends Merge<RemoteThingType, AttributeType> {
    asRemote(transaction: Transaction): RemoteAttributeType;
}

interface BooleanAttributeType extends AttributeType {
    asRemote(transaction: Transaction): RemoteBooleanAttributeType;

}

interface RemoteBooleanAttributeType extends Merge<RemoteAttributeType, BooleanAttributeType> {
    asRemote(transaction: Transaction): RemoteBooleanAttributeType;

}

interface StringAttributeType extends AttributeType {
    asRemote(transaction: Transaction): RemoteStringAttributeType;

}

interface RemoteStringAttributeType extends Merge<RemoteAttributeType, StringAttributeType> {
    asRemote(transaction: Transaction): RemoteStringAttributeType;

}

interface DoubleAttributeType extends AttributeType {
    asRemote(transaction: Transaction): RemoteDoubleAttributeType;

}

interface RemoteDoubleAttributeType extends Merge<RemoteAttributeType, DoubleAttributeType> {
    asRemote(transaction: Transaction): RemoteDoubleAttributeType;

}

interface LongAttributeType extends AttributeType {
    asRemote(transaction: Transaction): RemoteLongAttributeType;

}

interface RemoteLongAttributeType extends Merge<RemoteAttributeType, LongAttributeType> {
    asRemote(transaction: Transaction): RemoteLongAttributeType;

}

interface DateTimeAttributeType extends AttributeType {
    asRemote(transaction: Transaction): RemoteDateTimeAttributeType;

}

interface RemoteDateTimeAttributeType extends Merge<RemoteAttributeType, DateTimeAttributeType> {
    asRemote(transaction: Transaction): RemoteDateTimeAttributeType;

}