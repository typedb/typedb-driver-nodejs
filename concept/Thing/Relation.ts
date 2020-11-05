import { Thing, RemoteThing } from "./Thing";
import { RelationType } from "../Type/RelationType";
import { RoleType } from "../Type/RoleType";
import { QueryIterator } from "../Concept";

export interface Relation extends Thing {

    asRemote(transaction: Transaction): RemoteRelation;
    asRelation(): Relation;

}

export interface RemoteRelation extends Merge<RemoteThing, Relation> {
    getType(): RelationType;

    addPlayer(roleType: RoleType, player: Thing):    void;
    removePlayer(roleType: RoleType, player: Thing): void;

    getPlayers(roleTypes: RoleType[]):               QueryIterator;
    getPlayersByRoleType():                          [RoleType, Thing[]];

    asRelation(): RemoteRelation;
    asRemote(transaction: Transaction): RemoteRelation;
}
