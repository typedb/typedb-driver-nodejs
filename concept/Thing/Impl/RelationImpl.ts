import { ThingImpl, RemoteThingImpl } from "./ThingImpl";
import { Relation, RemoteRelation } from "../Relation";
import { Thing } from "../Thing";
import { RelationTypeImpl } from "../../Type/Impl/RelationTypeImpl";
import { RoleType } from "../../Type/RoleType";
import { QueryIterator } from "../../Concept";
import { Grakn } from "../../../Grakn";
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
