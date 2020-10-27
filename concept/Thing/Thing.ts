interface Thing extends Concept {
    asEntity(): Entity;
    asAttribute(): Attribute<any>;
    asRelation(): Relation;

    getIID(): string;
}

interface RemoteThing extends Remote<Thing>, Thing {
    getType(): ThingType;
    isInferred(): boolean;

    setHas(attribute: Attribute<any>): void;
    unsetHas(attribute: Attribute<any>): void;

    getHas(onlyKey: boolean): QueryIterator;
    getHas(attributeType: BooleanAttributeType): QueryIterator;
    getHas(attributeType: LongAttributeType): QueryIterator;
    getHas(attributeType: DoubleAttributeType): QueryIterator;
    getHas(attributeType: StringAttributeType): QueryIterator;
    getHas(attributeType: DateTimeAttributeType): QueryIterator;
    getHas(attributeTypes: AttributeType[]): QueryIterator;
    getPlays(): QueryIterator;
    getRelations(roleTypes: RoleType[]): QueryIterator;

}