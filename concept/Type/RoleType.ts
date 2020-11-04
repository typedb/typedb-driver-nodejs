interface RoleType extends ThingType {
    getScope(): string;

    asRemote(transaction: Transaction): RemoteRoleType;
}

interface RemoteRoleType extends Merge<RemoteThingType, RoleType> {
    asRemote(transaction: Transaction): RemoteRoleType;

    getSupertype():     RoleType;
    getSupertypes():    QueryIterator;
    getSubtypes():      QueryIterator;

    getRelation():      RelationType;
    getRelations():     QueryIterator;
    getPlayers():       QueryIterator;
}
