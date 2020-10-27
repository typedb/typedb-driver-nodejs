abstract class ThingImpl implements Thing {
    readonly iid: string;

    of(thingProto: ThingConceptProto): ThingImpl {
        switch (thingProto.getEncoding()) {
            case ENTITY:
                return EntityImpl.of(thingProto);
            case RELATION:
                return RelationImpl.of(thingProto);
            case ATTRIBUTE:
                return AttributeImpl.of(thingProto);
            case UNRECOGNIZED:
            default:
                throw "Bad Encoding"
        }
    }

    constructor (iid: string) {
        if (!iid) {
            throw "IID Missing"
        }
        this.iid = iid;
    }

    asAttribute(): Attribute<any> {
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

    isRemote(): Boolean {
        return false;
    }

    abstract asRemote(transaction: Transaction): Remote<Concept>
}

class RemoteThingImpl implements RemoteThing, Thing {
    readonly iid: string;
    private transaction: Transaction;

    constructor (transaction: Transaction, iid: string) {
        if (!transaction)   throw "Transaction Missing"
        if (!iid)           throw "IID Missing"
        this.iid = iid;
        this.transaction = transaction;
    }

    getType(): void {
        throw new Error("Method not implemented.");
    }
    setHas(attribute: Attribute<any>): void {
        throw new Error("Method not implemented.");
    }

    asAttribute(): Attribute<any> {
        return undefined;
    }

    asEntity(): Entity {
        return undefined;
    }

    asRelation(): Relation {
        return undefined;
    }

    asRemote(transaction: Transaction): Remote<Concept> {
        return undefined;
    }

    asThing(): Thing {
        return undefined;
    }

    asType(): Type {
        return undefined;
    }

    delete(): void {
    }

    getIID(): string {
        return this.iid;
    }

    isDeleted(): boolean {
        return false;
    }

    isRemote(): Boolean {
        return false;
    }

    of(transaction: Transaction, concept: Thing): this {
        return undefined;
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