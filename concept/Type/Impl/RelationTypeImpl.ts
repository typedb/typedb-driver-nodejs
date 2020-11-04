class RelationTypeImpl extends ThingTypeImpl implements RelationType {
    asRemote(transaction: Transaction): RemoteRelationType {
        return new RemoteRelationTypeImpl(transaction, this.getLabel(), this.isRoot())
    };

    getScope(): string {
        return "";
    }

}

class RemoteRelationTypeImpl extends RemoteThingTypeImpl implements RemoteRelationType {
    asRemote(transaction: Transaction): RemoteRelationType {
        return new RemoteRelationTypeImpl(transaction, this.getLabel(), this.isRoot())
    };

    create(): Relation {
        throw "As yet unimplemented"
    }

    getInstances(): QueryIterator {
        return new QueryIterator();
    }

    getRelates(roleLabel: string): RoleType;
    getRelates(): QueryIterator;
    getRelates(roleLabel?: string): RoleType | QueryIterator {
        throw "Not yet implemented";
    }

    setRelates(roleLabel: string): void;
    setRelates(roleLabel: string, overriddenLabel: string): void;
    setRelates(roleLabel: string, overriddenLabel?: string): void {
    }

    setSupertype(superRelationType: RelationType): void {
    }

    unsetRelates(roleLabel: string): void {
    }

}