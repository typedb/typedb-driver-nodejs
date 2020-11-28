import { Thing, RemoteThing } from "../Thing";
import { Attribute } from "../Attribute";
import { Entity } from "../Entity";
import { Relation } from "../Relation";
import { Type, RemoteType } from "../../Type/Type";
import { QueryIterator } from "../../Concept";
import { AttributeType } from "../../Type/AttributeType";
import { RoleType } from "../../Type/RoleType";
import { Thing as ProtoThing } from "protobuf/concept_pb";
import { EntityImpl } from "./EntityImpl";
import { RelationImpl } from "./RelationImpl";
import { AttributeImpl } from "./AttributeImpl";
import { TypeImpl } from "../../Type/Impl/TypeImpl";
import { ThingTypeImpl } from "../../Type/Impl/ThingTypeImpl";
import { Grakn } from "../../../Grakn";
import Transaction = Grakn.Transaction;

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

    asAttribute(): AttributeImpl<AttributeType.ValueClass> {
        throw "Invalid cast to Attribute";
    }

    asRelation(): RelationImpl {
        throw "Invalid cast to Relation"
    }

    toString(): string {
        return `${ThingImpl.name}[iid:${this._iid}]`;
    }

    abstract asRemote(transaction: Transaction): RemoteThing;
}

export abstract class RemoteThingImpl implements RemoteThing {
    private readonly _iid: string;
    private readonly _transaction: Transaction;

    protected constructor(transaction: Transaction, iid: string) {
        if (!transaction) throw "Transaction Missing"
        if (!iid) throw "IID Missing"
        this._iid = iid;
        this._transaction = transaction;
    }

    getType(): ThingTypeImpl {
        throw "Not implemented yet";
    }

    isInferred(): boolean {
        throw "Not implemented yet";
    }

    asAttribute(): Attribute<AttributeType.ValueClass> {
        throw "Invalid cast to Attribute";
    }

    asEntity(): Entity {
        throw "Invalid cast to Entity";
    }

    asRelation(): Relation {
        throw "Invalid cast to Relation"
    }

    abstract asRemote(transaction: Transaction): RemoteThing;

    asThing(): RemoteThingImpl {
        return this;
    }

    asType(): RemoteType {
        throw "Invalid cast to Type";
    }

    delete(): void {
        throw "Not implemented yet";
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

    setHas(attribute: Attribute<AttributeType.ValueClass>): void {
        throw "Not implemented yet";
    }

    unsetHas(attribute: Attribute<AttributeType.ValueClass>): void {
        throw "Not implemented yet";
    }

    protected get transaction(): Transaction {
        return this._transaction;
    }

    toString(): string {
        return `${RemoteThingImpl.name}[iid:${this._iid}]`;
    }
}
