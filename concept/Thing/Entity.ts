import { Thing, RemoteThing } from "./Thing";
import { EntityType } from "../Type/EntityType";
import {GraknTransaction} from "../../Grakn";

export interface Entity extends Thing {
    asRemote(transaction: GraknTransaction): RemoteEntity;
}

export interface RemoteEntity extends Merge<RemoteThing, Entity> {
    getType(): EntityType;
    asRemote(transaction: GraknTransaction): RemoteEntity;
}
