class EntityTypeImpl extends ThingTypeImpl implements EntityType {
    asRemote(transaction: Transaction): RemoteEntityType {
        return new RemoteEntityTypeImpl(transaction, this.label, this.root)
    };

}

class RemoteEntityTypeImpl extends RemoteThingTypeImpl implements RemoteEntityType {
    asRemote(transaction: Transaction): RemoteEntityType {
        return new RemoteEntityTypeImpl(transaction, this.label, this.root)
    };

    create(): Entity {
        throw "Not yet Implemented"
    }

    getSupertype(): EntityType {
        throw "Not yet implemented"
    }

    getInstances(): QueryIterator {
        return new QueryIterator();
    }

    setSupertype(superEntityType: EntityType): void {
    }

}