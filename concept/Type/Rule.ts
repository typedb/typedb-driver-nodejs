import { Grakn } from "../../internal";
import Transaction = Grakn.Transaction;

export interface Rule {
    getLabel(): string;
    getWhen(): string;
    getThen(): string;

    asRemote(transaction: Transaction): RemoteRule;
}

export interface RemoteRule extends Rule {
    setLabel(label: string): void;

    delete(): void;
    isDeleted(): boolean;

    asRemote(transaction: Transaction): RemoteRule;
}
