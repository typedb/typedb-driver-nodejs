interface EntityType extends ThingType {
    asRemote(transaction: Transaction): RemoteEntityType;
}

interface RemoteEntityType extends Merge<RemoteThingType, EntityType> {
    create(): Entity;

    setSupertype(superEntityType: EntityType): void;
    getSupertype(): EntityType;

    getSupertypes() : QueryIterator;
    getSubtypes()   : QueryIterator;
    getInstances()  : QueryIterator;

    asRemote(transaction: Transaction): RemoteEntityType;
}
