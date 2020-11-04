interface Type extends Concept {
    asThingType():      ThingType;
    asEntityType():     EntityType;
    asAttributeType():  AttributeType;
    asRelationType():   RelationType;
    asRoleType():       RoleType;

    getLabel(): string;
    isRoot(): boolean;

    equals(type: Type): boolean;
    hashCode():         number;

    asRemote(transaction: Transaction):         RemoteType;
}

interface RemoteType extends Merge<RemoteConcept, Type> {
    setLabel(label: string): void;

    getSupertypes():    QueryIterator;
    getSubtypes():      QueryIterator;


    asThingType():      RemoteThingType;
    asEntityType():     RemoteEntityType;
    //asAttributeType():  RemoteAttributeType;
    asRelationType():   RemoteRelationType;
    asRoleType():       RemoteRoleType;

    asRemote(transaction: Transaction):         RemoteType;
}
