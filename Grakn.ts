import {GraknOptions} from "./GraknOptions";
import {ConceptManager} from "./concept/ConceptManager";

export interface GraknClient {
    session(databaseName: string, type: GraknSessionType, options?: GraknOptions): GraknSession;
    databases(): GraknDatabaseManager;
    isOpen(): boolean;
    close(): void;
}

export interface GraknDatabaseManager {
    contains(name: string): boolean;
    create(name: string):   void;
    delete(name: string):   void;

    all():                  string[];
}

export interface GraknSession {
    transaction(type: GraknTransactionType, options?: GraknOptions): GraknTransaction;
    type():     GraknSessionType;
    isOpen():   boolean;
    close():    void;
    database(): string;
}

export enum GraknSessionType {
    DATA,
    SCHEMA,
}

export interface GraknTransaction {
    type():         GraknTransactionType;
    isOpen():       boolean;
    concepts():     ConceptManager;
    query():        QueryManager;
    commit():       void;
    rollback():     void;
    close():        void;
}

export enum GraknTransactionType {
    READ,
    WRITE,
}