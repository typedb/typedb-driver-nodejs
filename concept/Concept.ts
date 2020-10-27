class Transaction {

}

class QueryIterator {
}

interface Concept {
    asType(): Type;
    asThing(): Thing;
    asRemote(transaction: Transaction): Remote<Concept>;

    isRemote(): Boolean
}

interface Remote<T extends Concept> extends Concept {
    of(transaction: Transaction, concept: T): this;
    delete(): void;

    isDeleted(): boolean;
}