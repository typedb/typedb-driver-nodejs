abstract class ThingImpl implements Thing {
    readonly iid: string;

    constructor (iid: string) {
        if (!iid) {
            throw "IID Missing"
        }
        this.iid = iid;
    }

    asAttribute(): Attribute<AttributeValueType> {
        throw "Invalid cast to Attribute";
    }

    asEntity(): Entity {
        throw "Invalid cast to Entity";
    }

    asRelation(): Relation {
        throw "Invalid cast to Relation"
    }

    asThing(): Thing {
        return this;
    }

    asType(): Type {
        throw "Invalid cast to Type";
    }

    getIID(): string {
        return this.iid;
    }

    isRemote(): boolean {
        return false;
    }

    abstract asRemote(transaction: Transaction): RemoteThing;
}

class RemoteThingImpl implements RemoteThing {
    readonly iid: string;
    private transaction: Transaction;

    constructor (transaction: Transaction, iid: string) {
        if (!transaction)   throw "Transaction Missing"
        if (!iid)           throw "IID Missing"
        this.iid = iid;
        this.transaction = transaction;
    }

    getType() {
        return new ThingTypeImpl();
    }

    setHas(attribute: Attribute<AttributeValueType>): void {
        return undefined;
    }

    asAttribute(): Attribute<AttributeValueType> {
        throw "Invalid cast to Attribute";
    }

    asEntity(): Entity {
        throw "Invalid cast to Entity";
    }

    asRelation(): Relation {
        throw "Invalid cast to Relation"
    }

    asRemote(transaction: Transaction) {
        return this;
    }

    asThing(): Thing {
        return this;
    }

    asType(): Type {
        throw "Invalid cast to Type";
    }

    delete(): void {
    }

    getIID(): string {
        return this.iid;
    }

    isDeleted(): boolean {
        return false;
    }

    isRemote(): boolean {
        return true;
    }

    getHas(onlyKey: boolean): QueryIterator;
    getHas(attributeType: BooleanAttributeType): QueryIterator;
    getHas(attributeType: LongAttributeType): QueryIterator;
    getHas(attributeType: DoubleAttributeType): QueryIterator;
    getHas(attributeType: StringAttributeType): QueryIterator;
    getHas(attributeType: DateTimeAttributeType): QueryIterator;
    getHas(attributeTypes: AttributeType[]): QueryIterator;
    getHas(onlyKey: boolean | BooleanAttributeType | LongAttributeType | DoubleAttributeType | StringAttributeType | DateTimeAttributeType | AttributeType[]): ReadableStream {
        return undefined;
    }

    getPlays(): QueryIterator {
        return undefined;
    }

    getRelations(roleTypes: RoleType[]): QueryIterator {
        return undefined;
    }

    isInferred(): boolean {
        return false;
    }

    unsetHas(attribute: Attribute<any>): void {
    }

}