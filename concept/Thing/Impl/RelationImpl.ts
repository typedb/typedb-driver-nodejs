class RelationImpl extends ThingImpl implements Relation {
    constructor(iid: string) {
        super(iid)
    }

    asRemote(transaction: Transaction): Remote<Concept> {
        return RemoteRelationImpl(transaction, this.getIID());
    }

    of(thingProto: ThingConceptProto): RelationImpl {
        return new RelationImpl(bytesToHexString(protoThing.getIid().toByteArray()));
    }

    asRelation() {
        return this;
    }
}

class RemoteRelationImpl extends RemoteThingImpl implements RelationImpl {
    constructor(transaction: Transaction, iid: string) {
        super(transaction, iid);
    }

    of(transaction: Transaction, thingProto: ThingConceptProto) {
        return new RemoteRelationImpl(transaction, bytesToHexString(thingProto.getIid().toByteArray());
    }

    public asRemote(transaction: Transaction) {
        return new RemoteRelationImpl(transaction, this.getIID());
    }

    getType(): RelationshipTypeImpl {
        return super.getType().asRelationshipType();
    }

    asRelation() {
        return this;
    }

    getPlayersByRoleType() {
        return undefined
    }

    getPlayers(roleTypes: RoleType[]) {
        return undefined
    }
    addPlayer(roleType: RoleType, player: Thing) {

    }

    removePlayer(roleType: RoleType, player: Thing) {

    }
}
