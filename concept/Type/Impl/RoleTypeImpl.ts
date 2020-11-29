import { ThingTypeImpl, RemoteThingTypeImpl } from "./ThingTypeImpl";
import { RoleType, RemoteRoleType } from "../RoleType";
import { QueryIterator } from "../../Concept";
import { Type as TypeProto } from "grakn-protocol/concept_pb";
import { Grakn } from "../../../Grakn";
import Transaction = Grakn.Transaction;
import { RelationTypeImpl } from "./RelationTypeImpl";

export class RoleTypeImpl extends ThingTypeImpl implements RoleType {
    private readonly _scope: string;

    protected constructor(label: string, scope: string, isRoot: boolean) {
        super(label, isRoot);
        this._scope = scope;
    }

    static of(typeProto: TypeProto): RoleTypeImpl {
        return new RoleTypeImpl(typeProto.getLabel(), typeProto.getScope(), typeProto.getRoot());
    }

    getScope(): string {
        return this._scope;
    }

    asRemote(transaction: Transaction): RemoteRoleType {
        return new RemoteRoleTypeImpl(transaction, this.getLabel(), this.getScope(), this.isRoot());
    }

    toString(): string {
        return `${RoleTypeImpl.name}[label: ${this._scope ? `${this._scope}:${this.getLabel()}` : this.getLabel()}]`;
    }
}

export class RemoteRoleTypeImpl extends RemoteThingTypeImpl implements RemoteRoleType {
    private readonly _scope: string;

    constructor(transaction: Transaction, label: string, scope: string, isRoot: boolean) {
        super(transaction, label, isRoot);
        this._scope = scope;
    }

    getSupertype(): RoleTypeImpl {
        throw "Not yet implemented"
    }

    getSupertypes(): QueryIterator {
        return new QueryIterator();
    }

    getSubtypes(): QueryIterator {
        return new QueryIterator();
    }

    getScope(): string {
        return this._scope;
    }

    asRemote(transaction: Transaction): RemoteRoleTypeImpl {
        return new RemoteRoleTypeImpl(transaction, this.getLabel(), this._scope, this.isRoot())
    }

    getRelation(): RelationTypeImpl {
        throw "Not yet implemented";
    }

    getRelations(): QueryIterator {
        return new QueryIterator();
    }

    getPlayers(): QueryIterator {
        return new QueryIterator();
    }

    toString(): string {
        return `${RemoteRoleTypeImpl.name}[label: ${this._scope ? `${this._scope}:${this.getLabel()}` : this.getLabel()}]`;
    }
}
