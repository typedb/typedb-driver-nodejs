interface Thing extends Concept {
    getIID(): string;

    asEntity(): Entity;
    asAttribute(): Attribute<AttributeValueType>;
    asRelation(): Relation;

    asRemote(transaction: Transaction): RemoteThing;
}

interface RemoteThing extends Merge<RemoteConcept, Thing> {
    getType(): ThingType;
    isInferred(): boolean;

    setHas(attribute: Attribute<any>): void;
    unsetHas(attribute: Attribute<any>): void;

    getHas(onlyKey: boolean):                       QueryIterator;
    getHas(attributeType: BooleanAttributeType):    QueryIterator;
    getHas(attributeType: LongAttributeType):       QueryIterator;
    getHas(attributeType: DoubleAttributeType):     QueryIterator;
    getHas(attributeType: StringAttributeType):     QueryIterator;
    getHas(attributeType: DateTimeAttributeType):   QueryIterator;
    getHas(attributeTypes: AttributeType[]):        QueryIterator;
    getPlays():                                     QueryIterator;
    getRelations(roleTypes: RoleType[]):            QueryIterator;

    asRemote(transaction: Transaction): Remote<Thing>;

}