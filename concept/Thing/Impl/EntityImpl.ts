class EntityImpl extends ThingImpl implements Entity {
    constructor(iid: string) {
        super(iid);
    }

    asRemote(transaction: Transaction): RemoteEntity {
        return new RemoteEntityImpl(transaction, this.getIID());
    }

    asEntity() {
        return this;
    }
}

class RemoteEntityImpl extends RemoteThingImpl implements RemoteEntity {
    constructor(transaction: Transaction, iid: string) {
        super(transaction, iid);
    }

    public asRemote(transaction: Transaction): RemoteEntity {
        return this;
    }

    getType(): EntityType {
        throw "Not yet implemented"
    }

    asEntity(): RemoteEntity {
        return this;
    }
}
