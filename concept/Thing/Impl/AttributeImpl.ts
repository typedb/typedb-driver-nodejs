abstract class AttributeImpl<T> extends ThingImpl implements Attribute<T> {
    constructor(iid: string) {
        super(iid);
    }

    of(thingProto: ThingConceptProto): ThingImpl {
        switch (thingProto.getValueType()) {
            case BOOLEAN:
                return BooleanAttributeImpl.of(thingProto);
            case LONG:
                return LongAttributeImpl.of(thingProto);
            case DOUBLE:
                return DoubleAttributeImpl.of(thingProto);
            case STRING:
                return StringAttributeImpl.of(thingProto);
            case DATETIME:
                return DateTimeAttributeImpl.of(thingProto);
            case UNRECOGNIZED:
            default:
                throw "Bad Value Type"
        }
    }

    asAttribute() {
        return this;
    }

    asBoolean(): BooleanAttribute {
        throw "Invalid cast to Boolean";
    }

    asDateTime(): DateTimeAttribute {
        throw "Invalid cast to DateTime";
    }

    asDouble(): DoubleAttribute {
        throw "Invalid cast to Double";
    }

    asLong(): LongAttribute {
        throw "Invalid cast to Long";
    }

    asString(): StringAttribute {
        throw "Invalid cast to String";
    }

    abstract getValue(): T
}

abstract class RemoteAttributeImpl<T> extends RemoteThingImpl implements RemoteAttribute<T> {
    constructor(transaction: Transaction, iid: string) {
        super(transaction, iid);
    }

    of(transaction: Transaction, thingProto: ThingConceptProto): RemoteAttributeImpl<any> {
        switch (thingProto.getValueType()) {
            case BOOLEAN:
                return RemoteBooleanAttributeImpl.of(thingProto);
            case LONG:
                return RemoteLongAttributeImpl.of(thingProto);
            case DOUBLE:
                return RemoteDoubleAttributeImpl.of(thingProto);
            case STRING:
                return RemoteStringAttributeImpl.of(thingProto);
            case DATETIME:
                return RemoteDateTimeAttributeImpl.of(thingProto);
            case UNRECOGNIZED:
            default:
                throw "Bad Value Type"
        }
    }

    asAttribute() {
        return this;
    }

    asBoolean(): BooleanAttribute {
        throw "Invalid cast to Boolean";
    }

    asDateTime(): DateTimeAttribute {
        throw "Invalid cast to DateTime";
    }

    asDouble(): DoubleAttribute {
        throw "Invalid cast to Double";
    }

    asLong(): LongAttribute {
        throw "Invalid cast to Long";
    }

    asString(): StringAttribute {
        throw "Invalid cast to String";
    }

    getOwners(): ReadableStream {
        return undefined
    }

    getOwners(ownerType: ThingType): ReadableStream {
        return undefined
    }

    getType(): AttributeTypeImpl {
        return super.getType().asAttributeType()
    }

    abstract getValue(): T;

}