import { Thing, RemoteThing } from "../../internal";
import { RelationType } from "../../internal";
import { RoleType } from "../../internal";
import { QueryIterator } from "../../internal";
import { Grakn } from "../../internal";
import Transaction = Grakn.Transaction;
import { Merge } from "../../internal";

export interface Relation extends Thing {
    asRemote(transaction: Transaction): RemoteRelation;
}

export interface RemoteRelation extends Merge<RemoteThing, Relation> {
    getType(): RelationType;

    addPlayer(roleType: RoleType, player: Thing): void;
    removePlayer(roleType: RoleType, player: Thing): void;

    getPlayers(roleTypes: RoleType[]): QueryIterator;
    getPlayersByRoleType(): [RoleType, Thing[]];

    asRemote(transaction: Transaction): RemoteRelation;
}
