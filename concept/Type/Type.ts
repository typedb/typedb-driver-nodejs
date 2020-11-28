import { Concept, RemoteConcept, QueryIterator } from "../Concept";
import { ThingType, RemoteThingType } from "./ThingType";
import { EntityType, RemoteEntityType } from "./EntityType";
import { AttributeType, RemoteAttributeType } from "./AttributeType";
import { RelationType, RemoteRelationType } from "./RelationType";
import { RoleType, RemoteRoleType } from "./RoleType";
import { Grakn } from "../../Grakn";
import Transaction = Grakn.Transaction;
import { Merge } from "../../common/utils";

export interface Type extends Concept {
    getLabel(): string;
    isRoot(): boolean;

    asRemote(transaction: Transaction): RemoteType;
}

export interface RemoteType extends Merge<RemoteConcept, Type> {
    setLabel(label: string): void;
    isAbstract(): boolean;

    getSupertype(): Type;
    getSupertypes(): QueryIterator;
    getSubtypes(): QueryIterator;

    asRemote(transaction: Transaction): RemoteType;
}
