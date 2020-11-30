import { GraknOptions } from "./GraknOptions";
import { ConceptManager } from "./concept/ConceptManager";
import { QueryManager } from "./query/QueryManager";

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
        transaction(type: TransactionType, options?: GraknOptions): Promise<Transaction>;

        type(): SessionType;

        isOpen(): boolean;

        close(): Promise<void>;

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

        commit(): Promise<void>;

        rollback(): Promise<void>;

        close(): Promise<void>;
    }

    export enum TransactionType {
        READ,
        WRITE,
    }
}