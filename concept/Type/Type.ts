import { Concept, RemoteConcept, QueryIterator } from "../Concept";
import { ThingType, RemoteThingType } from "./ThingType";
import { EntityType, RemoteEntityType } from "./EntityType";
import { AttributeType, RemoteAttributeType } from "./AttributeType";
import { RelationType, RemoteRelationType } from "./RelationType";
import { RoleType, RemoteRoleType } from "./RoleType";
import ValueType = WebAssembly.ValueType;

export interface Type extends Concept {
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

export interface RemoteType extends Merge<RemoteConcept, Type> {
    setLabel(label: string): void;

    getSupertypes():    QueryIterator;
    getSubtypes():      QueryIterator;


    asThingType():      RemoteThingType;
    asEntityType():     RemoteEntityType;
    asAttributeType():  RemoteAttributeType;
    asRelationType():   RemoteRelationType;
    asRoleType():       RemoteRoleType;

    getValueType():     string;

    asRemote(transaction: Transaction):         RemoteType;
}
