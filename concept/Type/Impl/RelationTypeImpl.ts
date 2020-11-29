import { ThingTypeImpl, RemoteThingTypeImpl } from "./ThingTypeImpl";
import { Relation } from "../../Thing/Relation";
import { RelationType, RemoteRelationType } from "../RelationType";
import { QueryIterator } from "../../Concept";
import { RoleType } from "../RoleType";
import { Grakn } from "../../../Grakn";
import Transaction = Grakn.Transaction;
import { Type as TypeProto } from "grakn-protocol/concept_pb";

export class RelationTypeImpl extends ThingTypeImpl implements RelationType {
    protected constructor(label: string, isRoot: boolean) {
        super(label, isRoot);
    }

    static of(typeProto: TypeProto): RelationTypeImpl {
        return new RelationTypeImpl(typeProto.getLabel(), typeProto.getRoot());
    }

    asRemote(transaction: Transaction): RemoteRelationTypeImpl {
        return new RemoteRelationTypeImpl(transaction, this.getLabel(), this.isRoot())
    }
}

export class RemoteRelationTypeImpl extends RemoteThingTypeImpl implements RemoteRelationType {
    constructor(transaction: Transaction, label: string, isRoot: boolean) {
        super(transaction, label, isRoot);
    }

    getInstances(): QueryIterator {
        return new QueryIterator();
    }

    asRemote(transaction: Transaction): RemoteRelationTypeImpl {
        return new RemoteRelationTypeImpl(transaction, this.getLabel(), this.isRoot())
    }

    getSupertype(): RelationTypeImpl {
        throw "Not yet implemented";
    }

    getSupertypes(): QueryIterator {
        throw "Not yet implemented";
    }

    getSubtypes(): QueryIterator {
        throw "Not yet implemented";
    }

    setSupertype(superRelationType: RelationType): void {
        throw "Not yet implemented";
    }

    create(): Relation {
        throw "As yet unimplemented"
    }

    getRelates(roleLabel: string): RoleType;
    getRelates(): QueryIterator;
    getRelates(roleLabel?: string): RoleType | QueryIterator {
        throw "Not yet implemented";
    }

    setRelates(roleLabel: string): void;
    setRelates(roleLabel: string, overriddenLabel: string): void;
    setRelates(roleLabel: string, overriddenLabel?: string): void {
        throw "Not yet implemented";
    }

    unsetRelates(roleLabel: string): void {
        throw "Not yet implemented";
    }
}
