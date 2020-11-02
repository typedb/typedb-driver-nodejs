class RelationImpl extends ThingImpl implements Relation {
    constructor(iid: string) {
        super(iid)
    }

    asRemote(transaction: Transaction): RemoteRelation {
        return new RemoteRelationImpl(transaction, this.getIID());
    }

    asRelation() {
        return this;
    }
}

class RemoteRelationImpl extends RemoteThingImpl implements RemoteRelation {
    constructor(transaction: Transaction, iid: string) {
        super(transaction, iid);
    }

    asRemote(transaction: Transaction): RemoteRelation {
        return new RemoteRelationImpl(transaction, this.getIID());
    }

    getType(): RelationTypeImpl {
        return super.getType().asRelationshipType();
    }

    asRelation() {
        return this;
    }

    getPlayersByRoleType(): [RoleType, Thing[]] {
        return undefined
    }

    getPlayers(roleTypes: RoleType[]): QueryIterator {
        return undefined
    }
    addPlayer(roleType: RoleType, player: Thing) {

    }

    removePlayer(roleType: RoleType, player: Thing) {

    }
}
