import { Thing, RemoteThing } from "./Thing";
import { EntityType } from "../Type/EntityType";
import { Grakn } from "../../Grakn";
import Transaction = Grakn.Transaction;
import { Merge } from "../../common/utils";

export interface Entity extends Thing {
    asRemote(transaction: Transaction): RemoteEntity;
}

export interface RemoteEntity extends Merge<RemoteThing, Entity> {
    getType(): EntityType;
    asRemote(transaction: Transaction): RemoteEntity;
}
