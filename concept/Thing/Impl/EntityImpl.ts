class EntityImpl extends ThingImpl implements Entity {
    constructor(iid: string) {
        super(iid);
    }

    asRemote(transaction: Transaction): Remote<Concept> {
        return new RemoteEntityImpl(transaction, this.getIID());
    }

    asEntity() {
        return this;
    }

    of(thingProto: ThingConceptProto) {
        return new EntityImpl(bytesToHexString(thingProto.getIid().toByteArray()));
    }
}

class RemoteEntityImpl extends RemoteThingImpl implements EntityImpl {
    constructor(transaction: Transaction, iid: string) {
        super(transaction, iid);
    }

    of(transaction: Transaction, thingProto: ThingConceptProto) {
        return new RemoteEntityImpl(transaction, bytesToHexString(thingProto.getIid().toByteArray());
    }

    public asRemote(transaction: Transaction) {
        return new RemoteEntityImpl(transaction, this.getIID());
    }

    getType(): EntityTypeImpl {
        return super.getType().asEntityType();
    }

    asEntity() {
        return this;
    }
}
