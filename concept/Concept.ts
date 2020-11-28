import { RemoteThing, Thing } from "./Thing/Thing";
import { RemoteType, Type } from "./Type/Type";
import { Grakn } from "../Grakn";
import Transaction = Grakn.Transaction;

// TODO: remove
export class QueryIterator {
}

export interface Concept {
    asType(): Type;
    asThing(): Thing;
    asRemote(transaction: Transaction): RemoteConcept;

    isRemote(): boolean;
}

export interface RemoteConcept extends Concept {
    delete(): void;
    isDeleted(): boolean;

    asType(): RemoteType;
    asThing(): RemoteThing;
    asRemote(transaction: Transaction): RemoteConcept;
}
