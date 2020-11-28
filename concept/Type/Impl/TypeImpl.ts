import { Type, RemoteType } from "../Type";
import { RemoteRelationType } from "../RelationType";
import { RemoteEntityType } from "../EntityType";
import { RemoteRoleType } from "../RoleType";
import { RemoteThingType } from "../ThingType";
import { QueryIterator } from "../../Concept";
// TODO
import { Type as TypeProto } from "bazel-bin/external/graknlabs_protocol/grpc/nodejs/protobuf/concept_pb";
import { RoleTypeImpl } from "./RoleTypeImpl";
import { ThingTypeImpl } from "./ThingTypeImpl";
import { Grakn } from "../../../Grakn";
import Transaction = Grakn.Transaction;
import { RemoteThingImpl, ThingImpl } from "../../Thing/Impl/ThingImpl";
import { EntityTypeImpl } from "./EntityTypeImpl";
import { AttributeTypeImpl, RemoteAttributeTypeImpl } from "./AttributeTypeImpl";
import { RelationTypeImpl } from "./RelationTypeImpl";

export abstract class TypeImpl implements Type {
    private readonly _label: string;
    private readonly _root: boolean;

    protected constructor(label: string, root: boolean) {
        if (!label) throw "Type Label missing.";

        this._label = label;
        this._root = root;
    }

    static of(typeProto: TypeProto): TypeImpl {
        switch (typeProto.getEncoding()) {
            case TypeProto.ENCODING.ROLE_TYPE:
                return RoleTypeImpl.of(typeProto);
            default:
                return ThingTypeImpl.of(typeProto);
        }
    }

    getLabel(): string {
        return this._label;
    }

    isRoot(): boolean {
        return this._root;
    }

    isRemote(): boolean {
        return false;
    }

    asType(): TypeImpl {
        return this;
    }

    asThing(): ThingImpl {
        throw "Invalid cast to Thing.";
    }

    asThingType(): ThingTypeImpl {
        throw "Invalid cast to Thing Type.";
    }

    asEntityType(): EntityTypeImpl {
        throw "Invalid cast to Entity Type.";
    }

    asAttributeType(): AttributeTypeImpl {
        throw "Invalid cast to Attribute Type.";
    }

    asRelationType(): RelationTypeImpl {
        throw "Invalid cast to Relation Type.";
    }

    asRoleType(): RoleTypeImpl {
        throw "Invalid cast to Role Type.";
    }

    toString(): string {
        return `${TypeImpl.name}[label:${this._label}]`;
    }

    abstract asRemote(transaction: Transaction): RemoteType;
}

export abstract class RemoteTypeImpl implements RemoteType {
    // TODO: protected readonly _rpcTransaction: RPCTransaction
    private readonly _rpcTransaction: Transaction;
    private _label: string;
    private readonly _isRoot: boolean;

    protected constructor(transaction: Transaction, label: string, isRoot: boolean) {
        if (!transaction) throw "Transaction Missing";
        if (!label) throw "IID Missing";
        this._rpcTransaction = transaction;
        this._label = label;
        this._isRoot = isRoot;
    }

    getLabel(): string {
        return this._label;
    }

    isRoot(): boolean {
        return this._isRoot;
    }

    isRemote(): boolean {
        return true;
    }

    setLabel(label: string): void {
        this._label = label;
        throw "Not implemented yet"; // TODO: issue RPC call
    }

    isAbstract(): boolean {
        throw "Not implemented yet";
    }

    asType(): RemoteTypeImpl {
        return this;
    }

    asThing(): RemoteThingImpl {
        throw "Invalid cast to Thing"
    }

    asThingType(): RemoteThingType {
        throw "Invalid cast to Thing Type";
    }

    asEntityType(): RemoteEntityType {
        throw "Invalid cast to Entity Type";
    }

    asRelationType(): RemoteRelationType {
        throw "Invalid cast to Relation Type";
    }

    asAttributeType(): RemoteAttributeTypeImpl {
        throw "Invalid cast to Attribute Type";
    }

    asRoleType(): RemoteRoleType {
        throw "Invalid cast to Role Type";
    }

    delete(): void {
        throw "Not implemented yet";
    }

    isDeleted(): boolean {
        return false;
    }

    protected get transaction(): Transaction {
        return this._rpcTransaction;
    }

    toString(): string {
        return `${RemoteTypeImpl.name}[label:${this._label}]`;
    }

    abstract asRemote(transaction: Transaction): RemoteTypeImpl;
    abstract getSupertype(): TypeImpl;
    abstract getSubtypes(): QueryIterator;
    abstract getSupertypes(): QueryIterator;
}
