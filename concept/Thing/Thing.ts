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

    getHas(onlyKey: boolean): ReadableStream;
    getHas(attributeType: BooleanAttributeType): ReadableStream;
    getHas(attributeType: LongAttributeType): ReadableStream;
    getHas(attributeType: DoubleAttributeType): ReadableStream;
    getHas(attributeType: StringAttributeType): ReadableStream;
    getHas(attributeType: DateTimeAttributeType): ReadableStream;
    getHas(attributeTypes: AttributeType[]): ReadableStream;
    getPlays(): ReadableStream;
    getRelations(roleTypes: RoleType[]): ReadableStream;

}