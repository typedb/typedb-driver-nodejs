import {GraknOptions} from "./GraknOptions";
import {ConceptManager} from "./concept/ConceptManager";

export namespace Grakn {
    export interface Client {
        session(databaseName: string, type: SessionType, options?: GraknOptions): Promise<Session>;

        databases(): DatabaseManager;

        close(): void;
    }

    export interface DatabaseManager {
        contains(name: string): Promise<boolean>;

        create(name: string): Promise<void>;

        delete(name: string): Promise<void>;

        all(): Promise<string[]>;
    }

    export interface Session {
        open(options?: GraknOptions): Promise<Session>;

        transaction(type: TransactionType, options?: GraknOptions): Transaction;

        type(): SessionType;

        isOpen(): boolean;

        close(): void;

        database(): string;
    }

    export enum SessionType {
        DATA,
        SCHEMA,
    }

    export interface Transaction {
        type(): TransactionType;

        isOpen(): boolean;

        concepts(): ConceptManager;

        query(): QueryManager;

        commit(): void;

        rollback(): void;

        close(): void;
    }

    export enum TransactionType {
        READ,
        WRITE,
    }
}