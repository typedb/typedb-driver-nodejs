import { Grakn } from "../internal";
import Transaction = Grakn.Transaction;

export interface Concept {
    asRemote(transaction: Transaction): RemoteConcept;
    isRemote(): boolean;
}

export interface RemoteConcept extends Concept {
    delete(): Promise<void>;
    isDeleted(): Promise<boolean>;
}
