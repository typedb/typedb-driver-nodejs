interface RelationType extends ThingType {

}

interface RemoteRelationType extends Merge<Remote<RelationType>, RelationType> {
    create(): Relation;

    setSupertype(superRelationType: RelationType): void;
    getRelates(roleLabel: string): RoleType;
    getRelates(): QueryIterator;

    setRelates(roleLabel: string): void;
    setRelates(roleLabel: string, overriddenLabel: string): void;
    unsetRelates(roleLabel: string): void;

    getSupertypes():    QueryIterator;
    getSubtypes():    QueryIterator;
    getInstances():    QueryIterator;
}
