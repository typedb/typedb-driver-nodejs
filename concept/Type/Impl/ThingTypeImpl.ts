import { TypeImpl, RemoteTypeImpl } from "./TypeImpl";
import { ThingType, RemoteThingType } from "../ThingType";
import { QueryIterator } from "../../Concept";
import { AttributeType } from "../AttributeType";
import { RoleType } from "../RoleType";
import { Grakn } from "../../../Grakn";
import Transaction = Grakn.Transaction;
import ConceptProto from "grakn-protocol/concept_pb";
import TypeProto = ConceptProto.Type;
import { EntityTypeImpl } from "./EntityTypeImpl";
import { RelationTypeImpl } from "./RelationTypeImpl";
import { AttributeTypeImpl } from "./AttributeTypeImpl";
import assert from "assert";

export class ThingTypeImpl extends TypeImpl implements ThingType {
    protected constructor(label: string, isRoot: boolean) {
        super(label, isRoot);
    }

    asRemote(transaction: Transaction): RemoteThingType {
        return new RemoteThingTypeImpl(transaction, this.getLabel(), this.isRoot())
    }

    static of(typeProto: TypeProto): ThingTypeImpl {
        switch (typeProto.getEncoding()) {
            case TypeProto.ENCODING.ENTITY_TYPE:
                return EntityTypeImpl.of(typeProto);
            case TypeProto.ENCODING.RELATION_TYPE:
                return RelationTypeImpl.of(typeProto);
            case TypeProto.ENCODING.ATTRIBUTE_TYPE:
                return AttributeTypeImpl.of(typeProto);
            case TypeProto.ENCODING.THING_TYPE:
                assert(typeProto.getRoot());
                return new ThingTypeImpl(typeProto.getLabel(), typeProto.getRoot());
            default:
                throw "Bad encoding";
        }
    }
}

export class RemoteThingTypeImpl extends RemoteTypeImpl implements RemoteThingType {
    constructor(transaction: Transaction, label: string, isRoot: boolean) {
        super(transaction, label, isRoot);
    }

    getSupertype(): ThingTypeImpl {
        throw "Behaviour not yet implemented";
    }

    getSupertypes(): QueryIterator {
        throw "Not implemented yet";
    }

    getSubtypes(): QueryIterator {
        throw "Not implemented yet";
    }

    getInstances(): QueryIterator {
        throw "Not implemented yet";
    }

    setAbstract(): void {
        throw "Not implemented yet";
    }

    unsetAbstract(): void {
        throw "Not implemented yet";
    }

    getPlays(): QueryIterator {
        return new QueryIterator();
    }

    getOwns(): QueryIterator;
    getOwns(keysOnly: boolean): QueryIterator;
    getOwns(keysOnly?: boolean): QueryIterator {
        return new QueryIterator();
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
        throw "Not implemented yet";
    }

    unsetOwns(attributeType: AttributeType): void {
        throw "Not implemented yet";
    }

    unsetPlays(role: RoleType): void {
        throw "Not implemented yet";
    }

    asRemote(transaction: Transaction): RemoteThingTypeImpl {
        return new RemoteThingTypeImpl(transaction, this.getLabel(), this.isRoot())
    }
}
