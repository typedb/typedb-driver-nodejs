import { ThingType, RemoteThingType } from "../../internal";
import { Entity } from "../../internal";
import { QueryIterator } from "../../internal";
import { Grakn } from "../../internal";
import Transaction = Grakn.Transaction;
import { Merge } from "../../internal";

export interface EntityType extends ThingType {
    asRemote(transaction: Transaction): RemoteEntityType;
}

export interface RemoteEntityType extends Merge<RemoteThingType, EntityType> {
    create(): Entity;

    setSupertype(superEntityType: EntityType): void;
    getSupertype(): EntityType;
    getSupertypes(): QueryIterator;
    getSubtypes(): QueryIterator;
    getInstances(): QueryIterator;

    asRemote(transaction: Transaction): RemoteEntityType;
}
