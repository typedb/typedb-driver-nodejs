import { Thing, RemoteThing } from "../Thing";
import { AttributeValueType, Attribute } from "../Attribute";
import { Entity } from "../Entity";
import { Relation } from "../Relation";
import { Type, RemoteType } from "../../Type/Type";
import { QueryIterator } from "../../Concept";
import { AttributeType } from "../../Type/AttributeType";
import { RoleType } from "../../Type/RoleType";
import {GraknTransaction} from "../../../Grakn";
import {Thing as ProtoThing} from "protobuf/concept_pb";
import {EntityImpl} from "./EntityImpl";
import {RelationImpl} from "./RelationImpl";
import {AttributeImpl} from "./AttributeImpl";
import {TypeImpl} from "../../Type/Impl/TypeImpl";
import {ThingTypeImpl} from "../../Type/Impl/ThingTypeImpl";

export abstract class ThingImpl implements Thing {
    private readonly _iid: string;

    // TODO: all error messages should be extracted into ErrorMessage class or namespace
    protected constructor(iid: string) {
        if (!iid) {
            throw "IID Missing"
        }
        this._iid = iid;
    }

    static of(thingProto: ProtoThing): ThingImpl {
        switch (thingProto.getEncoding()) {
            case ProtoThing.ENCODING.ENTITY:
                return EntityImpl.of(thingProto);
            case ProtoThing.ENCODING.RELATION:
                return RelationImpl.of(thingProto);
            case ProtoThing.ENCODING.ATTRIBUTE:
                return AttributeImpl.of(thingProto);
            default:
                throw "Bad encoding"
        }
    }

    getIID(): string {
        return this._iid;
    }

    isRemote(): boolean {
        return false;
    }

    asThing(): ThingImpl {
        return this;
    }

    asType(): TypeImpl {
        throw "Invalid cast to Type";
    }

    asEntity(): EntityImpl {
        throw "Invalid cast to Entity";
    }

    asAttribute(): AttributeImpl<AttributeValueType> {
        throw "Invalid cast to Attribute";
    }

    asRelation(): RelationImpl {
        throw "Invalid cast to Relation"
    }

    toString(): string {
        return `${ThingImpl.name}[iid:${this._iid}]`;
    }

    abstract asRemote(transaction: GraknTransaction): RemoteThing;
}

export abstract class RemoteThingImpl implements RemoteThing {
    private readonly _iid: string;
    protected readonly transaction: GraknTransaction;

    protected constructor(transaction: GraknTransaction, iid: string) {
        if (!transaction) throw "Transaction Missing"
        if (!iid) throw "IID Missing"
        this._iid = iid;
        this.transaction = transaction;
    }

    getType(): ThingTypeImpl {
        throw "Not implemented yet";
    }

    isInferred(): boolean {
        throw "Not implemented yet";
    }

    asAttribute(): Attribute<AttributeValueType> {
        throw "Invalid cast to Attribute";
    }

    asEntity(): Entity {
        throw "Invalid cast to Entity";
    }

    asRelation(): Relation {
        throw "Invalid cast to Relation"
    }

    abstract asRemote(transaction: GraknTransaction): RemoteThing;

    asThing(): RemoteThing {
        return this;
    }

    asType(): RemoteType {
        throw "Invalid cast to Type";
    }

    delete(): void {
    }

    getIID(): string {
        return this._iid;
    }

    isDeleted(): boolean {
        return false;
    }

    isRemote(): boolean {
        return true;
    }

    getHas(onlyKey: boolean): QueryIterator;
    getHas(attributeType: Type): QueryIterator;
    getHas(attributeType: Type): QueryIterator;
    getHas(attributeType: Type): QueryIterator;
    getHas(attributeType: Type): QueryIterator;
    getHas(attributeType: Type): QueryIterator;
    getHas(attributeTypes: AttributeType[]): QueryIterator;
    getHas(onlyKey: boolean | Type | AttributeType[]): QueryIterator {
        return new QueryIterator();
    }

    getPlays(): QueryIterator {
        return new QueryIterator();
    }

    getRelations(roleTypes: RoleType[]): QueryIterator {
        return new QueryIterator();
    }

    setHas(attribute: Attribute<AttributeValueType>): void {
    }

    unsetHas(attribute: Attribute<any>): void {
    }

}
