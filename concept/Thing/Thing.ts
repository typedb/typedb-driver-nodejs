import { Entity } from "./Entity";
import { Attribute, AttributeValueType } from "./Attribute";
import { Relation } from "./Relation";
import { Concept, RemoteConcept, QueryIterator } from "../Concept";
import { Type } from "../Type/Type";
import { ThingType } from "../Type/ThingType";
import { AttributeType } from "../Type/AttributeType";
import { RoleType } from "../Type/RoleType";
import {GraknTransaction} from "../../Grakn";

export interface Thing extends Concept {
    getIID(): string;

    asEntity(): Entity;
    asAttribute(): Attribute<AttributeValueType>;
    asRelation(): Relation;

    asRemote(transaction: GraknTransaction): RemoteThing;

    asThing(): Thing;
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

    asRemote(transaction: GraknTransaction): RemoteThing;

    asThing(): RemoteThing;
}