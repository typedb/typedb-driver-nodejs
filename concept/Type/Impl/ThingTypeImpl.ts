class ThingTypeImpl extends TypeImpl implements ThingType {
    asRemote(transaction: Transaction): RemoteThingType {
        return new RemoteThingTypeImpl(transaction, this.getLabel(), this.isRoot())
    };

}

class RemoteThingTypeImpl extends RemoteTypeImpl implements RemoteThingType {
    constructor(transaction: Transaction, label: string, isRoot: boolean) {
        super(transaction, label, isRoot);
    }

    asRemote(transaction: Transaction): RemoteThingType {
        return new RemoteThingTypeImpl(transaction, this.getLabel(), this.isRoot())
    };

    getOwns(): QueryIterator;
    getOwns(keysOnly: boolean): QueryIterator;
    getOwns(keysOnly?: boolean): QueryIterator {
        return new QueryIterator();
    }

    getPlays(): QueryIterator {
        return new QueryIterator();
    }

    getSupertype(): ThingType {
        throw "Behaviour not yet implemented";
    }

    setAbstract(): void {
    }

    setOwns(attributeType: AttributeType): void;
    setOwns(attributeType: AttributeType, isKey: boolean): void;
    setOwns(attributeType: AttributeType, overriddenType: AttributeType): void;
    setOwns(attributeType: AttributeType, isKey: boolean, otherType: AttributeType): void;
    setOwns(attributeType: AttributeType, isKey?: boolean | AttributeType, otherType?: AttributeType): void {
    }

    setPlays(role: RoleType): void;
    setPlays(role: RoleType, overriddenType: RoleType): void;
    setPlays(role: RoleType, overriddenType?: RoleType): void {
    }

    unsetAbstract(): void {
    }

    unsetOwns(attributeType: AttributeType): void {
    }

    unsetPlays(role: RoleType): void {
    }

}