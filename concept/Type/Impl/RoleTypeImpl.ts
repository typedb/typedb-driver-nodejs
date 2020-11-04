class RoleTypeImpl extends ThingTypeImpl implements RoleType {
    asRemote(transaction: Transaction): RemoteRoleType {
        return new RemoteRoleTypeImpl(transaction, this.getLabel(), this.isRoot())
    };

    getScope(): string {
        return "";
    }

}

class RemoteRoleTypeImpl extends RemoteThingTypeImpl implements RemoteRoleType {
    asRemote(transaction: Transaction): RemoteRoleType {
        return new RemoteRoleTypeImpl(transaction, this.getLabel(), this.isRoot())
    };

    getScope(): string {
        return "";
    }

    getSupertype():     RoleType {
        throw "Not yet implemented"
    };
    getSupertypes():    QueryIterator {
        return new QueryIterator();
    };
    getSubtypes():      QueryIterator{
        return new QueryIterator();
    };

    getRelation():      RelationType{
        throw "Not yet implemented";
    };
    getRelations():     QueryIterator{
        return new QueryIterator();
    };
    getPlayers():       QueryIterator{
        return new QueryIterator();
    };

}