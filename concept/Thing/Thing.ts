import { Attribute } from "./Attribute";
import { Concept, RemoteConcept, QueryIterator } from "../Concept";
import { Type } from "../Type/Type";
import { ThingType } from "../Type/ThingType";
import { AttributeType } from "../Type/AttributeType";
import { RoleType } from "../Type/RoleType";
import { Grakn } from "../../Grakn";
import Transaction = Grakn.Transaction;
import { Merge } from "../../common/utils";

export interface Thing extends Concept {
    getIID(): string;

    asRemote(transaction: Transaction): RemoteThing;
}

export interface RemoteThing extends Merge<RemoteConcept, Thing> {
    getType(): ThingType;
    isInferred(): boolean;

    setHas(attribute: Attribute<any>): void;
    unsetHas(attribute: Attribute<any>): void;

    getHas(onlyKey: boolean): QueryIterator;
    getHas(attributeType: Type): QueryIterator;
    getHas(attributeType: Type): QueryIterator;
    getHas(attributeType: Type): QueryIterator;
    getHas(attributeType: Type): QueryIterator;
    getHas(attributeType: Type): QueryIterator;
    getHas(attributeTypes: AttributeType[]): QueryIterator;
    getPlays(): QueryIterator;
    getRelations(roleTypes: RoleType[]): QueryIterator;

    asRemote(transaction: Transaction): RemoteThing;
}
