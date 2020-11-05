import { ThingType, RemoteThingType } from "./ThingType";
import {Entity} from "../Thing/Entity";
import { QueryIterator } from "../Concept";

export interface EntityType extends ThingType {
    asRemote(transaction: Transaction): RemoteEntityType;
}

export interface RemoteEntityType extends Merge<RemoteThingType, EntityType> {
    create(): Entity;

    setSupertype(superEntityType: EntityType): void;
    getSupertype(): EntityType;

    getSupertypes() : QueryIterator;
    getSubtypes()   : QueryIterator;
    getInstances()  : QueryIterator;

    asRemote(transaction: Transaction): RemoteEntityType;
}
