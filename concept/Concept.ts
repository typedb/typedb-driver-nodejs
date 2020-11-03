class Transaction {

}

class QueryIterator {
}

interface Concept {
    asType(): Type;
    asThing(): Thing;
    asRemote(transaction: Transaction): RemoteConcept;

    isRemote(): boolean;
}

interface RemoteConcept extends Concept {
    delete(): void;
    isDeleted(): boolean;

    asType(): RemoteType;
    asThing(): RemoteThing;
    asRemote(transaction: Transaction): RemoteConcept;

    isRemote(): boolean;
}