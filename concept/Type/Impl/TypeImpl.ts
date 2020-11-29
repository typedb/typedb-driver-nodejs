import { Type, RemoteType } from "../Type";
import { QueryIterator } from "../../Concept";
import ConceptProto from "grakn-protocol/concept_pb";
import { RoleTypeImpl } from "./RoleTypeImpl";
import { ThingTypeImpl } from "./ThingTypeImpl";
import { Grakn } from "../../../Grakn";
import Transaction = Grakn.Transaction;

export abstract class TypeImpl implements Type {
    private readonly _label: string;
    private readonly _root: boolean;

    protected constructor(label: string, root: boolean) {
        if (!label) throw "Type Label missing.";

        this._label = label;
        this._root = root;
    }

    static of(typeProto: ConceptProto.Type): TypeImpl {
        switch (typeProto.getEncoding()) {
            case ConceptProto.Type.ENCODING.ROLE_TYPE:
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
