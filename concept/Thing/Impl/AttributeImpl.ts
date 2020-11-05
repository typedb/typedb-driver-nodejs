import { AttributeValueType, Attribute, RemoteAttribute, BooleanAttribute, DateTimeAttribute, DoubleAttribute, LongAttribute, StringAttribute, RemoteBooleanAttribute, RemoteLongAttribute, RemoteStringAttribute, RemoteDoubleAttribute, RemoteDateTimeAttribute } from "../Attribute";
import { ThingImpl, RemoteThingImpl } from "./ThingImpl";

export abstract class AttributeImpl<T extends AttributeValueType> extends ThingImpl implements Attribute<T> {
    protected constructor(iid: string) {
        super(iid);
    }

    asAttribute(): Attribute<T> {
        return this;
    }

    abstract asRemote(transaction: Transaction): RemoteAttribute<T>;

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

export abstract class RemoteAttributeImpl<T extends AttributeValueType> extends RemoteThingImpl implements RemoteAttribute<T> {
    protected constructor(transaction: Transaction, iid: string) {
        super(transaction, iid);
    }

    asAttribute(): RemoteAttributeImpl<T> {
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

    getOwners(ownerType: ThingType): QueryIterator {
        return new QueryIterator()
    }

    abstract getType(): AttributeTypeImpl;
    abstract asRemote(transaction: Transaction): RemoteAttribute<T>;

    abstract getValue(): T;

}

export class BooleanAttributeImpl extends AttributeImpl<boolean> implements BooleanAttribute {
    private readonly value: boolean;

    constructor(iid: string, value: boolean) {
        super(iid);
        this.value = value;
    }

    asRemote(transaction: Transaction): RemoteBooleanAttribute {
        return new RemoteBooleanAttributeImpl(transaction, this.getIID(), this.value);
    }

    getValue(): boolean {
        return this.value;
    }

    asBoolean() {
        return this;
    }
}

export class RemoteBooleanAttributeImpl extends RemoteAttributeImpl<boolean> implements Merge<RemoteBooleanAttribute, BooleanAttribute> {
    private readonly value: boolean;

    constructor(transaction: Transaction, iid: string, value: boolean){
        super(transaction, iid);
        this.value = value;
    }

    getValue(): boolean {
        return this.value;
    }

    getType(): BooleanAttributeTypeImpl {
        throw "Of not present"
    }

    asBoolean() {
        return this;
    }

    asRemote(transaction: Transaction): RemoteBooleanAttribute {
        return new RemoteBooleanAttributeImpl(transaction, this.iid, this.value);
    }
}

export class LongAttributeImpl extends AttributeImpl<number> implements LongAttribute {
    private readonly value: number;

    constructor(iid: string, value: number) {
        super(iid);
        this.value = value;
    }

    asRemote(transaction: Transaction): RemoteLongAttribute {
        return new RemoteLongAttributeImpl(transaction, this.getIID(), this.value);
    }

    getValue(): number {
        return this.value;
    }

    asLong() {
        return this;
    }
}

export class RemoteLongAttributeImpl extends RemoteAttributeImpl<number> implements Merge<RemoteLongAttribute, LongAttribute> {
    private readonly value: number;

    constructor(transaction: Transaction, iid: string, value: number){
        super(transaction, iid);
        this.value = value;
    }

    getValue(): number {
        return this.value;
    }

    getType(): LongAttributeTypeImpl {
        throw "Of not present"
    }

    asLong() {
        return this;
    }

    asRemote(transaction: Transaction): RemoteLongAttribute {
        return this;
    }
}

export class StringAttributeImpl extends AttributeImpl<string> implements Attribute<string> {
    private readonly value: string;

    constructor(iid: string, value: string) {
        super(iid);
        this.value = value;
    }

    asRemote(transaction: Transaction): RemoteStringAttribute {
        return new RemoteStringAttributeImpl(transaction, this.getIID(), this.value);
    }

    getValue(): string {
        return this.value;
    }

    asString() {
        return this;
    }
}

export class RemoteStringAttributeImpl extends RemoteAttributeImpl<string> implements Merge<RemoteStringAttribute, StringAttribute> {
    private readonly value: string;

    constructor(transaction: Transaction, iid: string, value: string){
        super(transaction, iid);
        this.value = value;
    }

    getValue(): string {
        return this.value;
    }

    getType(): StringAttributeTypeImpl {
        throw "Of not present"
    }

    asString() {
        return this;
    }

    asRemote(transaction: Transaction): RemoteStringAttribute {
        return this;
    }
}

export class DoubleAttributeImpl extends AttributeImpl<number> implements Attribute<number> {
    private readonly value: number;

    constructor(iid: string, value: number) {
        super(iid);
        this.value = value;
    }

    asRemote(transaction: Transaction): RemoteDoubleAttribute {
        return new RemoteDoubleAttributeImpl(transaction, this.getIID(), this.value);
    }

    getValue(): number {
        return this.value;
    }

    asDouble() {
        return this;
    }
}


export class RemoteDoubleAttributeImpl extends RemoteAttributeImpl<number> implements Merge<RemoteDoubleAttribute, DoubleAttribute> {
    private readonly value: number;

    constructor(transaction: Transaction, iid: string, value: number){
        super(transaction, iid);
        this.value = value;
    }

    getValue(): number {
        return this.value;
    }

    getType(): DoubleAttributeTypeImpl {
        throw "Of not present"
    }

    asDouble() {
        return this;
    }

    asRemote(transaction: Transaction): RemoteDoubleAttribute {
        return this;
    }
}


export class DateTimeAttributeImpl extends AttributeImpl<Date> implements DateTimeAttribute {
    private readonly value: Date;

    constructor(iid: string, value: Date) {
        super(iid);
        this.value = value;
    }

    asRemote(transaction: Transaction): RemoteDateTimeAttribute {
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
    private readonly value: Date;

    constructor(transaction: Transaction, iid: string, value: Date){
        super(transaction, iid);
        this.value = value;
    }

    getValue(): Date {
        return this.value;
    }

    getType(): DateTimeAttributeTypeImpl {
        throw "Of not present"
    }

    asRemote(transaction: Transaction): RemoteDateTimeAttribute {
        return this;
    }

    asDateTime() {
        return this;
    }
}
