import { RemoteThingTypeImpl, ThingTypeImpl } from "./ThingTypeImpl";
import { AttributeType, BooleanAttributeType, DateTimeAttributeType, DoubleAttributeType, LongAttributeType,
    RemoteAttributeType, RemoteBooleanAttributeType, RemoteDateTimeAttributeType, RemoteDoubleAttributeType,
    RemoteLongAttributeType, RemoteStringAttributeType, StringAttributeType } from "../AttributeType";
import { Grakn } from "../../../Grakn";
import { AttributeType as AttributeTypeProto, Type as TypeProto } from "bazel-bin/external/graknlabs_protocol/grpc/nodejs/protobuf/concept_pb";
import { QueryIterator } from "../../Concept";
import Transaction = Grakn.Transaction;
import ValueType = AttributeType.ValueType;
import isKeyable = AttributeType.ValueType.isKeyable;
import { AttributeImpl, BooleanAttributeImpl, DateTimeAttributeImpl, DoubleAttributeImpl,
    LongAttributeImpl, StringAttributeImpl } from "../../Thing/Impl/AttributeImpl";
import ValueClass = AttributeType.ValueClass;

export class AttributeTypeImpl extends ThingTypeImpl implements AttributeType {

    private static ROOT_LABEL = "attribute";

    protected constructor(label: string, isRoot: boolean) {
        super(label, isRoot);
    }

    static of(type: TypeProto) {
        switch (type.getValueType()) {
            case AttributeTypeProto.VALUE_TYPE.BOOLEAN:
                return new BooleanAttributeTypeImpl(type.getLabel(), type.getRoot());
            case AttributeTypeProto.VALUE_TYPE.LONG:
                return new LongAttributeTypeImpl(type.getLabel(), type.getRoot());
            case AttributeTypeProto.VALUE_TYPE.DOUBLE:
                return new DoubleAttributeTypeImpl(type.getLabel(), type.getRoot());
            case AttributeTypeProto.VALUE_TYPE.STRING:
                return new StringAttributeTypeImpl(type.getLabel(), type.getRoot());
            case AttributeTypeProto.VALUE_TYPE.DATETIME:
                return new DateTimeAttributeTypeImpl(type.getLabel(), type.getRoot());
            case AttributeTypeProto.VALUE_TYPE.OBJECT:
                assert(type.getRoot());
                return new AttributeTypeImpl(type.getLabel(), type.getRoot());
            default:
                throw "Bad value type";
        }
    }

    getValueType(): ValueType {
        return ValueType.OBJECT;
    }

    isKeyable(): boolean {
        return isKeyable(this.getValueType());
    }

    asRemote(transaction: Transaction): RemoteAttributeTypeImpl {
        return new RemoteAttributeTypeImpl(transaction, this.getLabel(), this.isRoot())
    }

    asAttributeType(): AttributeTypeImpl {
        return this;
    }

    asBoolean(): BooleanAttributeTypeImpl {
        throw "Invalid cast";
    }

    asLong(): LongAttributeTypeImpl {
        throw "Invalid cast";
    }

    asDouble(): DoubleAttributeTypeImpl {
        throw "Invalid cast";
    }

    asString(): StringAttributeTypeImpl {
        throw "Invalid cast";
    }

    asDateTime(): DateTimeAttributeTypeImpl {
        throw "Invalid cast";
    }
}

export class RemoteAttributeTypeImpl extends RemoteThingTypeImpl implements RemoteAttributeType {

    constructor(transaction: Transaction, label: string, isRoot: boolean) {
        super(transaction, label, isRoot);
    }

    getValueType(): ValueType {
        return ValueType.OBJECT;
    }

    isKeyable(): boolean {
        return isKeyable(this.getValueType());
    }

    asRemote(transaction: Transaction): RemoteAttributeTypeImpl {
        return new RemoteAttributeTypeImpl(transaction, this.getLabel(), this.isRoot())
    }

    setSupertype(type: AttributeType): void {
        throw "Not implemented yet";
    }

    getSupertype(): AttributeTypeImpl {
        throw "Not implemented yet";
    }

    getSupertypes(): QueryIterator {
        throw "Not implemented yet";
    }

    getSubtypes(): QueryIterator {
        throw "Not implemented yet";
    }

    getInstances(): QueryIterator {
        throw "Not implemented yet";
    }

    getOwners(onlyKey?: boolean): QueryIterator {
        throw "Not implemented yet";
    }

    protected putInternal<T extends ValueClass>(value: T): AttributeImpl<T> {
        throw "Not implemented yet";
    }

    protected getInternal<T extends ValueClass>(value: T): AttributeImpl<T> {
        throw "Not implemented yet";
    }

    asAttributeType(): RemoteAttributeTypeImpl {
        return this;
    }

    asBoolean(): RemoteBooleanAttributeTypeImpl {
        throw "Invalid cast";
    }

    asLong(): RemoteLongAttributeTypeImpl {
        throw "Invalid cast";
    }

    asDouble(): RemoteDoubleAttributeTypeImpl {
        throw "Invalid cast";
    }

    asString(): RemoteStringAttributeTypeImpl {
        throw "Invalid cast";
    }

    asDateTime(): RemoteDateTimeAttributeTypeImpl {
        throw "Invalid cast";
    }
}

export class BooleanAttributeTypeImpl extends AttributeTypeImpl implements BooleanAttributeType {

    constructor(label: string, isRoot: boolean) {
        super(label, isRoot);
    }

    getValueType(): ValueType {
        return ValueType.BOOLEAN;
    }

    asRemote(transaction: Transaction): RemoteBooleanAttributeTypeImpl {
        return new RemoteBooleanAttributeTypeImpl(transaction, this.getLabel(), this.isRoot())
    }

    asBoolean(): BooleanAttributeTypeImpl {
        return this;
    }
}

export class RemoteBooleanAttributeTypeImpl extends RemoteAttributeTypeImpl implements RemoteBooleanAttributeType {

    constructor(transaction: Transaction, label: string, isRoot: boolean) {
        super(transaction, label, isRoot);
    }

    getValueType(): ValueType {
        return ValueType.BOOLEAN;
    }

    asRemote(transaction: Transaction): RemoteBooleanAttributeTypeImpl {
        return new RemoteBooleanAttributeTypeImpl(transaction, this.getLabel(), this.isRoot());
    }

    getSupertype(): BooleanAttributeTypeImpl {
        throw "Not implemented yet";
    }

    getSupertypes(): QueryIterator {
        throw "Not implemented yet";
    }

    getSubtypes(): QueryIterator {
        throw "Not implemented yet";
    }

    getInstances(): QueryIterator {
        throw "Not implemented yet";
    }

    setSupertype(type: BooleanAttributeType): void {
        super.setSupertype(type);
    }

    put(value: boolean): BooleanAttributeImpl {
        return this.putInternal(value).asBoolean();
    }

    get(value: boolean): BooleanAttributeImpl {
        return this.getInternal(value)?.asBoolean();
    }
}

export class LongAttributeTypeImpl extends AttributeTypeImpl implements LongAttributeType {

    constructor(label: string, isRoot: boolean) {
        super(label, isRoot);
    }

    getValueType(): ValueType {
        return ValueType.LONG;
    }

    asRemote(transaction: Transaction): RemoteLongAttributeTypeImpl {
        return new RemoteLongAttributeTypeImpl(transaction, this.getLabel(), this.isRoot())
    }

    asLong(): LongAttributeTypeImpl {
        return this;
    }
}

export class RemoteLongAttributeTypeImpl extends RemoteAttributeTypeImpl implements RemoteLongAttributeType {

    constructor(transaction: Transaction, label: string, isRoot: boolean) {
        super(transaction, label, isRoot);
    }

    getValueType(): ValueType {
        return ValueType.LONG;
    }

    asRemote(transaction: Transaction): RemoteLongAttributeTypeImpl {
        return new RemoteLongAttributeTypeImpl(transaction, this.getLabel(), this.isRoot());
    }

    getSupertype(): LongAttributeTypeImpl {
        throw "Not implemented yet";
    }

    getSupertypes(): QueryIterator {
        throw "Not implemented yet";
    }

    getSubtypes(): QueryIterator {
        throw "Not implemented yet";
    }

    getInstances(): QueryIterator {
        throw "Not implemented yet";
    }

    setSupertype(type: LongAttributeType): void {
        super.setSupertype(type);
    }

    put(value: number): LongAttributeImpl {
        return this.putInternal(value).asLong();
    }

    get(value: number): LongAttributeImpl {
        return this.getInternal(value)?.asLong();
    }
}

export class DoubleAttributeTypeImpl extends AttributeTypeImpl implements DoubleAttributeType {

    constructor(label: string, isRoot: boolean) {
        super(label, isRoot);
    }

    getValueType(): ValueType {
        return ValueType.DOUBLE;
    }

    asRemote(transaction: Transaction): RemoteDoubleAttributeTypeImpl {
        return new RemoteDoubleAttributeTypeImpl(transaction, this.getLabel(), this.isRoot())
    }

    asDouble(): DoubleAttributeTypeImpl {
        return this;
    }
}

export class RemoteDoubleAttributeTypeImpl extends RemoteAttributeTypeImpl implements RemoteDoubleAttributeType {

    constructor(transaction: Transaction, label: string, isRoot: boolean) {
        super(transaction, label, isRoot);
    }

    getValueType(): ValueType {
        return ValueType.DOUBLE;
    }

    asRemote(transaction: Transaction): RemoteDoubleAttributeTypeImpl {
        return new RemoteDoubleAttributeTypeImpl(transaction, this.getLabel(), this.isRoot());
    }

    getSupertype(): DoubleAttributeTypeImpl {
        throw "Not implemented yet";
    }

    getSupertypes(): QueryIterator {
        throw "Not implemented yet";
    }

    getSubtypes(): QueryIterator {
        throw "Not implemented yet";
    }

    getInstances(): QueryIterator {
        throw "Not implemented yet";
    }

    setSupertype(type: DoubleAttributeType): void {
        super.setSupertype(type);
    }

    put(value: number): DoubleAttributeImpl {
        return this.putInternal(value).asDouble();
    }

    get(value: number): DoubleAttributeImpl {
        return this.getInternal(value)?.asDouble();
    }
}

export class StringAttributeTypeImpl extends AttributeTypeImpl implements StringAttributeType {

    constructor(label: string, isRoot: boolean) {
        super(label, isRoot);
    }

    getValueType(): ValueType {
        return ValueType.STRING;
    }

    asRemote(transaction: Transaction): RemoteStringAttributeTypeImpl {
        return new RemoteStringAttributeTypeImpl(transaction, this.getLabel(), this.isRoot())
    }

    asString(): StringAttributeTypeImpl {
        return this;
    }
}

export class RemoteStringAttributeTypeImpl extends RemoteAttributeTypeImpl implements RemoteStringAttributeType {

    constructor(transaction: Transaction, label: string, isRoot: boolean) {
        super(transaction, label, isRoot);
    }

    getValueType(): ValueType {
        return ValueType.STRING;
    }

    asRemote(transaction: Transaction): RemoteStringAttributeTypeImpl {
        return new RemoteStringAttributeTypeImpl(transaction, this.getLabel(), this.isRoot());
    }

    getSupertype(): StringAttributeTypeImpl {
        throw "Not implemented yet";
    }

    getSupertypes(): QueryIterator {
        throw "Not implemented yet";
    }

    getSubtypes(): QueryIterator {
        throw "Not implemented yet";
    }

    getInstances(): QueryIterator {
        throw "Not implemented yet";
    }

    setSupertype(type: StringAttributeType): void {
        super.setSupertype(type);
    }

    put(value: string): StringAttributeImpl {
        return this.putInternal(value).asString();
    }

    get(value: string): StringAttributeImpl {
        return this.getInternal(value)?.asString();
    }
}

export class DateTimeAttributeTypeImpl extends AttributeTypeImpl implements DateTimeAttributeType {

    constructor(label: string, isRoot: boolean) {
        super(label, isRoot);
    }

    getValueType(): ValueType {
        return ValueType.DATETIME;
    }

    asRemote(transaction: Transaction): RemoteDateTimeAttributeTypeImpl {
        return new RemoteDateTimeAttributeTypeImpl(transaction, this.getLabel(), this.isRoot())
    }

    asDateTime(): DateTimeAttributeTypeImpl {
        return this;
    }
}

export class RemoteDateTimeAttributeTypeImpl extends RemoteAttributeTypeImpl implements RemoteDateTimeAttributeType {

    constructor(transaction: Transaction, label: string, isRoot: boolean) {
        super(transaction, label, isRoot);
    }

    getValueType(): ValueType {
        return ValueType.DATETIME;
    }

    asRemote(transaction: Transaction): RemoteDateTimeAttributeTypeImpl {
        return new RemoteDateTimeAttributeTypeImpl(transaction, this.getLabel(), this.isRoot());
    }

    getSupertype(): DateTimeAttributeTypeImpl {
        throw "Not implemented yet";
    }

    getSupertypes(): QueryIterator {
        throw "Not implemented yet";
    }

    getSubtypes(): QueryIterator {
        throw "Not implemented yet";
    }

    getInstances(): QueryIterator {
        throw "Not implemented yet";
    }

    setSupertype(type: DateTimeAttributeType): void {
        super.setSupertype(type);
    }

    put(value: Date): DateTimeAttributeImpl {
        return this.putInternal(value).asDateTime();
    }

    get(value: Date): DateTimeAttributeImpl {
        return this.getInternal(value)?.asDateTime();
    }
}
