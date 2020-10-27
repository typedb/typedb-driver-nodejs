interface Relation extends Thing {

}

interface RemoteRelation extends Remote<Relation>, Relation {
    getType(): RelationType;

    addPlayer(roleType: RoleType, player: Thing):    void;
    removePlayer(roleType: RoleType, player: Thing): void;

    getPlayers(roleTypes: RoleType[]):               QueryIterator;
    getPlayersByRoleType():                          [RoleType, Thing[]];
}
