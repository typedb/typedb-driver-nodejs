import { ThingImpl, RemoteThingImpl } from "./ThingImpl";
import { Relation, RemoteRelation } from "../Relation";
import { Thing } from "../Thing";

export class RelationImpl extends ThingImpl implements Relation {
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

export class RemoteRelationImpl extends RemoteThingImpl implements RemoteRelation {
    constructor(transaction: Transaction, iid: string) {
        super(transaction, iid);
    }

    asRemote(transaction: Transaction) {
        return new RemoteRelationImpl(transaction, this.getIID());
    }

    getType(): RelationTypeImpl {
        throw "As yet unimplemented"
    }

    asRelation() {
        return this;
    }

    getPlayersByRoleType(): [RoleType, Thing[]] {
        throw "Not implemented"
    }

    getPlayers(roleTypes: RoleType[]): QueryIterator {
        return new QueryIterator();
    }
    addPlayer(roleType: RoleType, player: Thing) {

    }

    removePlayer(roleType: RoleType, player: Thing) {

    }
}
