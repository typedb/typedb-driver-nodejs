interface Type extends Concept {
    // asThingType():      ThingType;
    // asEntityType():     EntityType;
    // asAttributeType():  AttributeType;
    // asRelationType():   RelationType;
    // asRoleType():       RoleType;
    //
    // getLabel(): string;
    // isRoot(): boolean;
}

interface RemoteType extends Merge<RemoteConcept, Type> {
    // setLabel(label: string): void;
    //
    // getSupertypes():    QueryIterator;
    // getSubtypes():      QueryIterator;
    //
    //
    // asType():           RemoteType
    // asThingType():      RemoteThingType;
    // asEntityType():     RemoteEntityType;
    // asAttributeType():  RemoteAttributeType;
    // asRelationType():   RemoteRelationType;
    // asRoleType():       RemoteRoleType;
}