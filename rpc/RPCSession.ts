interface Transaction {
    type(): TransactionType;
    isOpen(): boolean;

    concepts(): ConceptManager;
    query(): QueryManager;

    commit(): void;
    rollback(): void;
    close(): void;
}

class TransactionType {
    private typeId: number;
    private typeIsWrite: boolean;

    constructor(id: number) {
        this.typeId = id;
        this.typeIsWrite = id == 1;
    }

    public id(): number {
        return this.typeId
    }

    public isRead(): boolean {
        return !this.typeIsWrite;
    }

    public isWrite(): boolean {
        return this.typeIsWrite;
    }
}
