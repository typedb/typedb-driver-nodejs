abstract class AttributeImpl<T extends AttributeValueType> extends ThingImpl implements Attribute<T> {
    constructor(iid: string) {
        super(iid);
    }

    asAttribute(): Attribute<T> {
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

abstract class RemoteAttributeImpl<T extends AttributeValueType> extends RemoteThingImpl implements Attribute<T>, RemoteAttribute<T> {
    constructor(transaction: Transaction, iid: string) {
        super(transaction, iid);
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

    getOwners(): QueryIterator {
        return undefined
    }

    getOwners(ownerType: ThingType): QueryIterator {
        return undefined
    }

    getType(): AttributeTypeImpl {
        return super.getType().asAttributeType()
    }

    abstract getValue(): T;

}

class BooleanAttributeImpl extends AttributeImpl<boolean> implements BooleanAttribute {
    private value: boolean;

    constructor(iid: string, value: boolean) {
        super(iid);
        this.value = value;
    }

    asRemote(transaction: Transaction) {
        return new RemoteBooleanAttributeImpl(transaction, this.getIID(), this.value);
    }

    getValue(): boolean {
        return this.value;
    }

    asBoolean() {
        return this;
    }
}

class RemoteBooleanAttributeImpl extends RemoteAttributeImpl<boolean> implements Merge<RemoteBooleanAttribute, BooleanAttribute> {
    private value: boolean;

    constructor(transaction: Transaction, iid: string, value: boolean){
        super(transaction, iid);
        this.value = value;
    }

    getValue(): boolean {
        return this.value;
    }

    getType(): BooleanAttributeTypeImpl {
        return super.getType().asAttributeType()
    }

    asBoolean() {
        return this;
    }
}

class LongAttributeImpl extends AttributeImpl<number> implements LongAttribute {
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
}

class RemoteLongAttributeImpl extends RemoteAttributeImpl<number> implements Merge<RemoteLongAttribute, LongAttribute> {
    private value: number;

    constructor(transaction: Transaction, iid: string, value: number){
        super(transaction, iid);
        this.value = value;
    }

    getValue(): number {
        return this.value;
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
}

class RemoteStringAttributeImpl extends RemoteAttributeImpl<string> implements Merge<RemoteStringAttribute, StringAttribute> {
    private value: string;

    constructor(transaction: Transaction, iid: string, value: string){
        super(transaction, iid);
        this.value = value;
    }

    getValue(): string {
        return this.value;
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
}


class RemoteDoubleAttributeImpl extends RemoteAttributeImpl<number> implements Merge<RemoteDoubleAttribute, DoubleAttribute> {
    private value: number;

    constructor(transaction: Transaction, iid: string, value: number){
        super(transaction, iid);
        this.value = value;
    }

    getValue(): number {
        return this.value;
    }

    getType(): DoubleAttributeTypeImpl {
        return super.getType().asAttributeType()
    }

    asDouble() {
        return this;
    }
}


class DateTimeAttributeImpl extends AttributeImpl<Date> implements DateTimeAttribute {
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
}


class RemoteDateTimeAttributeImpl extends RemoteAttributeImpl<Date> implements Merge<RemoteDateTimeAttribute, DateTimeAttribute> {
    private value: Date;

    constructor(transaction: Transaction, iid: string, value: Date){
        super(transaction, iid);
        this.value = value;
    }

    getValue(): Date {
        return this.value;
    }

    getType(): DateTimeAttributeTypeImpl {
        return super.getType().asAttributeType()
    }

    asDateTime() {
        return this;
    }
}
