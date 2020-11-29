import { Grakn } from "../internal";
import Transaction = Grakn.Transaction;

// TODO: remove
export class QueryIterator {
}

export interface Concept {
    asRemote(transaction: Transaction): RemoteConcept;

    isRemote(): boolean;
}

export interface RemoteConcept extends Concept {
    delete(): void;
    isDeleted(): boolean;

    asRemote(transaction: Transaction): RemoteConcept;
}
