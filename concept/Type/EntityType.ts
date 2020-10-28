interface EntityType extends ThingType {

}

interface RemoteEntityType extends EntityType, Remote<EntityType> {
    create(): Entity;

    setSupertype(superEntityType: EntityType): void;
    getSupertype(): EntityType;

    getSupertypes() : QueryIterator;
    getSubtypes()   : QueryIterator;
    getInstances()  : QueryIterator;
}
