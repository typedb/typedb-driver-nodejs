import {RemoteThing, Thing} from "../../Thing/Thing";
import { Type, RemoteType } from "../Type";
import { AttributeType, RemoteAttributeType } from "../AttributeType";
import { RelationType, RemoteRelationType } from "../RelationType";
import { EntityType, RemoteEntityType } from "../EntityType";
import { RoleType, RemoteRoleType } from "../RoleType";
import { ThingType, RemoteThingType } from "../ThingType";
import { QueryIterator } from "../../Concept";
import ValueType = WebAssembly.ValueType;

export abstract class TypeImpl implements Type {
    label:  string;
    root: boolean;
    hash: number;

    constructor(label: string, root: boolean) {
        if (!label) throw("Type Label missing.");

        this.label = label;
        this.root = root;
        this.hash = hash(this.label);
    }

    equals(type: Type): boolean {
        if (typeof type != typeof this) {
            return false;
        }
        if (type.hashCode() != this.hashCode()) {
            return false;

        }
        return true;
    }


    hashCode(): number {
        return this.hash;
    }

    asAttributeType(): AttributeType {
        throw "Invalid cast to Attribute Type.";
    }

    asEntityType(): EntityType {
        throw "Invalid cast to Entity Type.";
    }

    asRelationType(): RelationType {
        throw "Invalid cast to Relation Type.";
    }

    abstract asRemote(transaction: Transaction): RemoteType

    asRoleType(): RoleType {
        throw "Invalid cast to Role Type.";
    }

    asThing(): Thing {
        throw "Invalid cast to Thing.";
    }

    asThingType(): ThingType {
        throw "Invalid cast to Thing Type.";
    }

    asType(): Type {
        return this;
    }

    getLabel(): string {
        return this.label;
    }

    isRemote(): boolean {
        return false;
    }

    isRoot(): boolean {
        return this.root;
    }
}

export abstract class RemoteTypeImpl implements RemoteType {
    readonly transaction: Transaction;
    label:  string;
    readonly root: boolean;
    hash: number;

    protected constructor (transaction: Transaction, label: string, isRoot: boolean) {
        if (!transaction)   throw "Transaction Missing"
        if (!label)         throw "IID Missing"
        this.label = label;
        this.transaction = transaction;
        this.root = isRoot;
        this.hash = hash(this.label);
    }

    asAttributeType(): RemoteAttributeType {
        throw "Invalid cast to Attribute Type";
    }

    getValueType(): string {
        throw "Invalid get";
    };

    delete(): void {
    }

    equals(type: Type): boolean {
        return false;
    }

    getLabel(): string {
        return "";
    }

    hashCode(): number {
        return 0;
    }

    isDeleted(): boolean {
        return false;
    }

    isRemote(): boolean { return true; };

    isRoot(): boolean {
        return this.root;
    }

    asEntityType(): RemoteEntityType {
        throw "Invalid cast to Entity Type";
    }

    asRelationType(): RemoteRelationType {
        throw "Invalid cast to Relation Type";
    }

    abstract asRemote(transaction: Transaction): RemoteType

    asRoleType(): RemoteRoleType {
        throw "Invalid cast to Role Type";
    }

    asThingType(): RemoteThingType {
        throw "Invalid cast to Thing Type";
    }

    getSubtypes(): QueryIterator {
        return new QueryIterator();
    }

    getSupertypes(): QueryIterator {
        return new QueryIterator();
    }

    setLabel(label: string): void {
        this.label = label;
    }

    asThing(): RemoteThing {
        throw "Invalid cast to Thing"
    };
    asType(): RemoteType {
        return this;
    };


}