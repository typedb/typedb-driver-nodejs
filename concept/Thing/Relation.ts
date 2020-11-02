interface Relation extends Thing {

    asRemote(transaction: Transaction): RemoteRelation;

}

interface RemoteRelation extends Merge<RemoteThing, Relation> {
    getType(): RelationType;

    addPlayer(roleType: RoleType, player: Thing):    void;
    removePlayer(roleType: RoleType, player: Thing): void;

    getPlayers(roleTypes: RoleType[]):               QueryIterator;
    getPlayersByRoleType():                          [RoleType, Thing[]];

    asRemote(transaction: Transaction): RemoteRelation;
}
