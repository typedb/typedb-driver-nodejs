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
                return RemoteBooleanAttributeImpl.of(transaction, thingProto);
            case LONG:
                return RemoteLongAttributeImpl.of(transaction, thingProto);
            case DOUBLE:
                return RemoteDoubleAttributeImpl.of(transaction, thingProto);
            case STRING:
                return RemoteStringAttributeImpl.of(transaction, thingProto);
            case DATETIME:
                return RemoteDateTimeAttributeImpl.of(transaction, thingProto);
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

class BooleanAttributeImpl extends AttributeImpl<boolean> implements Attribute<Boolean> {
    private value: boolean;

    constructor(iid: string, value: boolean) {
        super(iid);
        this.value = value;
    }

    asRemote(transaction: Transaction): Remote<Concept> {
        return new RemoteBooleanAttributeImpl(transaction, this.getIID(), this.value);
    }

    getValue(): boolean {
        return this.value;
    }

    asBoolean() {
        return this;
    }

    of(thingProto: ThingConceptProto) {
        return new BooleanAttributeImpl(bytesToHexString(thingProto.getIid().toByteArray()), thingProto.getValue().getBoolean());
    }
}

class RemoteBooleanAttributeImpl extends RemoteAttributeImpl<boolean> implements RemoteBooleanAttribute {
    private value: boolean;

    constructor(transaction: Transaction, iid: string, value: boolean){
        super(transaction, iid);
        this.value = value;
    }

    getValue(): boolean {
        return this.value;
    }

    of(transaction: Transaction, thingProto: ThingConceptProto) {
        return new RemoteBooleanAttributeImpl(transaction, bytesToHexString(thingProto.getIid().toByteArray()), thingProto.getValue().getBoolean());
    }

    getType(): BooleanAttributeTypeImpl {
        return super.getType().asAttributeType()
    }

    asBoolean() {
        return this;
    }
}

class LongAttributeImpl extends AttributeImpl<number> implements Attribute<number> {
    private value: number;

    constructor(iid: string, value: number) {
        super(iid);
        this.value = value;
    }

    asRemote(transaction: Transaction): Remote<Concept> {
        return new RemoteLongAttributeImpl(transaction, this.getIID(), this.value);
    }

    getValue(): number {
        return this.value;
    }

    asLong() {
        return this;
    }

    of(thingProto: ThingConceptProto) {
        return new LongAttributeImpl(bytesToHexString(thingProto.getIid().toByteArray()), thingProto.getValue().getLong());
    }
}

class RemoteLongAttributeImpl extends RemoteAttributeImpl<number> implements RemoteLongAttribute {
    private value: number;

    constructor(transaction: Transaction, iid: string, value: number){
        super(transaction, iid);
        this.value = value;
    }

    getValue(): number {
        return this.value;
    }

    of(transaction: Transaction, thingProto: ThingConceptProto) {
        return new RemoteLongAttributeImpl(transaction, bytesToHexString(thingProto.getIid().toByteArray()), thingProto.getValue().getLong());
    }

    getType(): LongAttributeTypeImpl {
        return super.getType().asAttributeType()
    }

    asLong() {
        return this;
    }
}

class StringAttributeImpl extends AttributeImpl<string> implements Attribute<string> {
    private value: string;

    constructor(iid: string, value: string) {
        super(iid);
        this.value = value;
    }

    asRemote(transaction: Transaction): Remote<Concept> {
        return new RemoteStringAttributeImpl(transaction, this.getIID(), this.value);
    }

    getValue(): string {
        return this.value;
    }

    asString() {
        return this;
    }

    of(thingProto: ThingConceptProto) {
        return new StringAttributeImpl(bytesToHexString(thingProto.getIid().toByteArray()), thingProto.getValue().getString());
    }
}

class RemoteStringAttributeImpl extends RemoteAttributeImpl<string> implements RemoteStringAttribute {
    private value: string;

    constructor(transaction: Transaction, iid: string, value: string){
        super(transaction, iid);
        this.value = value;
    }

    getValue(): string {
        return this.value;
    }

    of(transaction: Transaction, thingProto: ThingConceptProto) {
        return new RemoteStringAttributeImpl(transaction, bytesToHexString(thingProto.getIid().toByteArray()), thingProto.getValue().getString());
    }

    getType(): StringAttributeTypeImpl {
        return super.getType().asAttributeType()
    }

    asString() {
        return this;
    }
}

class DoubleAttributeImpl extends AttributeImpl<number> implements Attribute<number> {
    private value: number;

    constructor(iid: string, value: number) {
        super(iid);
        this.value = value;
    }

    asRemote(transaction: Transaction): Remote<Concept> {
        return new RemoteStringAttributeImpl(transaction, this.getIID(), this.value);
    }

    getValue(): number {
        return this.value;
    }

    asDouble() {
        return this;
    }

    of(thingProto: ThingConceptProto) {
        return new DoubleAttributeImpl(bytesToHexString(thingProto.getIid().toByteArray()), thingProto.getValue().getDouble());
    }
}


class RemoteDoubleAttributeImpl extends RemoteAttributeImpl<number> implements RemoteDoubleAttribute {
    private value: number;

    constructor(transaction: Transaction, iid: string, value: string){
        super(transaction, iid);
        this.value = value;
    }

    getValue(): number {
        return this.value;
    }

    of(transaction: Transaction, thingProto: ThingConceptProto) {
        return new RemoteDoubleAttributeImpl(transaction, bytesToHexString(thingProto.getIid().toByteArray()), thingProto.getValue().getDouble());
    }

    getType(): DoubleAttributeTypeImpl {
        return super.getType().asAttributeType()
    }

    asDouble() {
        return this;
    }
}


class DateTimeAttributeImpl extends AttributeImpl<Date> implements Attribute<Date> {
    private value: Date;

    constructor(iid: string, value: Date) {
        super(iid);
        this.value = value;
    }

    asRemote(transaction: Transaction): Remote<Concept> {
        return new RemoteDateTimeAttributeImpl(transaction, this.getIID(), this.value);
    }

    getValue(): Date {
        return this.value;
    }

    asDateTime() {
        return this;
    }

    of(thingProto: ThingConceptProto) {
        return new DateTimeAttributeImpl(bytesToHexString(thingProto.getIid().toByteArray()), thingProto.getValue().getDateTime());
    }
}


class RemoteDateTimeAttributeImpl extends RemoteAttributeImpl<Date> implements RemoteDateTimeAttribute {
    private value: Date;

    constructor(transaction: Transaction, iid: string, value: Date){
        super(transaction, iid);
        this.value = value;
    }

    getValue(): Date {
        return this.value;
    }

    of(transaction: Transaction, thingProto: ThingConceptProto) {
        return new RemoteDateTimeAttributeImpl(transaction, bytesToHexString(thingProto.getIid().toByteArray()), thingProto.getValue().getDateTime());
    }

    getType(): DateTimeAttributeTypeImpl {
        return super.getType().asAttributeType()
    }

    asDateTime() {
        return this;
    }
}
