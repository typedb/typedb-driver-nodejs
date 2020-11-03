interface ThingType extends Type {
}

interface RemoteThingType extends Merge<RemoteType, ThingType> {
    getSupertype(): ThingType;

    setLabel(label: string): void;

    setAbstract(): void;
    unsetAbstract(): void;

    setPlays(role: RoleType): void;
    setPlays(role: RoleType, overriddenType: RoleType): void;

    setOwns(attributeType: AttributeType): void;
    setOwns(attributeType: AttributeType, isKey: boolean): void;
    setOwns(attributeType: AttributeType, overriddenType: AttributeType): void;
    setOwns(attributeType: AttributeType, otherType: AttributeType, isKey: boolean): void;

    getPlays(): QueryIterator;
    getOwns(): QueryIterator;
    //getOwns(valueType: ValueType):                      QueryIterator;
    getOwns(keysOnly: boolean):                         QueryIterator;
    //getOwns(valueType: ValueType, keysOnly: boolean):   QueryIterator;

    unsetPlays(role: RoleType): void;
    unsetOwns(attributeType: AttributeType): void;

}