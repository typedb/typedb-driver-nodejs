import { ThingType, RemoteThingType } from "../../internal";
import { Relation } from "../../internal";
import { RoleType } from "../../internal";
import { QueryIterator } from "../../internal";
import { Grakn } from "../../internal";
import Transaction = Grakn.Transaction;
import { Merge } from "../../internal";

export interface RelationType extends ThingType {
    asRemote(transaction: Transaction): RemoteRelationType;
}

export interface RemoteRelationType extends Merge<RemoteThingType, RelationType> {
    create(): Relation;

    setSupertype(superRelationType: RelationType): void;
    getRelates(roleLabel: string): RoleType;
    getRelates(): QueryIterator;
    setRelates(roleLabel: string): void;
    setRelates(roleLabel: string, overriddenLabel: string): void;
    unsetRelates(roleLabel: string): void;

    getSupertypes(): QueryIterator;
    getSubtypes(): QueryIterator;
    getInstances(): QueryIterator;

    asRemote(transaction: Transaction): RemoteRelationType;
}
