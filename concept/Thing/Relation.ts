interface Relation extends Thing {

    asRemote(transaction: Transaction): RemoteRelation;
    asRelation(): Relation;

}

interface RemoteRelation extends Merge<RemoteThing, Relation> {
    getType(): RelationType;

    addPlayer(roleType: RoleType, player: Thing):    void;
    removePlayer(roleType: RoleType, player: Thing): void;

    getPlayers(roleTypes: RoleType[]):               QueryIterator;
    getPlayersByRoleType():                          [RoleType, Thing[]];

    asRelation(): RemoteRelation;
    asRemote(transaction: Transaction): RemoteRelation;
}
