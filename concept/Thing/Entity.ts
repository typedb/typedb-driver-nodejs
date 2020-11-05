import { Thing, RemoteThing } from "./Thing";
import { EntityType } from "../Type/EntityType";

export interface Entity extends Thing {
    asRemote(transaction: Transaction): RemoteEntity;
}

export interface RemoteEntity extends Merge<RemoteThing, Entity> {
    getType(): EntityType;
    asRemote(transaction: Transaction): RemoteEntity;
}