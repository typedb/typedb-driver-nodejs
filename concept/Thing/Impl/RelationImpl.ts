import { ThingImpl, RemoteThingImpl } from "./ThingImpl";
import { Relation, RemoteRelation } from "../Relation";
import { Thing } from "../Thing";
import {GraknTransaction} from "../../../Grakn";
import {RelationTypeImpl} from "../../Type/Impl/RelationTypeImpl";
import {RoleType} from "../../Type/RoleType";
import {QueryIterator} from "../../Concept";

export class RelationImpl extends ThingImpl implements Relation {
    constructor(iid: string) {
        super(iid)
    }

    asRemote(transaction: GraknTransaction): RemoteRelation {
        return new RemoteRelationImpl(transaction, this.getIID());
    }

    asRelation() {
        return this;
    }
}

export class RemoteRelationImpl extends RemoteThingImpl implements RemoteRelation {
    constructor(transaction: GraknTransaction, iid: string) {
        super(transaction, iid);
    }

    asRemote(transaction: GraknTransaction) {
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
