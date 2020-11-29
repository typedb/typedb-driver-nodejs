import { ThingImpl, RemoteThingImpl } from "../../../internal";
import { Relation, RemoteRelation } from "../../../internal";
import { Thing } from "../../../internal";
import { RelationTypeImpl } from "../../../internal";
import { RoleType } from "../../../internal";
import { QueryIterator } from "../../../internal";
import { Grakn } from "../../../internal";
import Transaction = Grakn.Transaction;

export class RelationImpl extends ThingImpl implements Relation {
    protected constructor(iid: string) {
        super(iid)
    }

    asRemote(transaction: Transaction): RemoteRelationImpl {
        return new RemoteRelationImpl(transaction, this.getIID());
    }
}

export class RemoteRelationImpl extends RemoteThingImpl implements RemoteRelation {
    constructor(transaction: Transaction, iid: string) {
        super(transaction, iid);
    }

    asRemote(transaction: Transaction): RemoteRelationImpl {
        return new RemoteRelationImpl(transaction, this.getIID());
    }

    getType(): RelationTypeImpl {
        throw "As yet unimplemented"
    }

    getPlayersByRoleType(): [RoleType, Thing[]] {
        throw "Not implemented"
    }

    getPlayers(roleTypes: RoleType[]): QueryIterator {
        return new QueryIterator();
    }

    addPlayer(roleType: RoleType, player: Thing) {
        throw "Not implemented";
    }

    removePlayer(roleType: RoleType, player: Thing) {
        throw "Not implemented";
    }
}
