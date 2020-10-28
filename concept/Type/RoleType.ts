interface RoleType extends Type {
    getScope(): string;
}

interface RemoteRoleType extends RoleType, Remote<RoleType> {
    getSupertype():     RoleType;
    getSupertypes():    QueryIterator;
    getSubtypes():      QueryIterator;

    getRelation():      RelationType;
    getRelations():     QueryIterator;
    getPlayers():       QueryIterator;
}
