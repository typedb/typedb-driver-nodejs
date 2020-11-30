import { ThingType, RemoteThingType } from "./ThingType";
import { Entity } from "../Thing/Entity";
import { Grakn } from "../../Grakn";
import Transaction = Grakn.Transaction;
import { Merge } from "../../common/utils";
import { Stream } from "../../rpc/Stream";

export interface EntityType extends ThingType {
    asRemote(transaction: Transaction): RemoteEntityType;
}

export interface RemoteEntityType extends Merge<RemoteThingType, EntityType> {
    create(): Promise<Entity>;

    setSupertype(superEntityType: EntityType): void;
    getSupertype(): EntityType;
    getSupertypes(): Stream<any>;
    getSubtypes(): Stream<any>;
    getInstances(): Stream<Entity>;

    asRemote(transaction: Transaction): RemoteEntityType;
}
