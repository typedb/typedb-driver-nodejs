import {RemoteThing, Thing} from "./Thing/Thing";
import { RemoteType, Type } from "./Type/Type";
import {GraknTransaction} from "../Grakn";

// TODO: remove
export class QueryIterator {
}

export interface Concept {
    asType(): Type;
    asThing(): Thing;
    asRemote(transaction: GraknTransaction): RemoteConcept;

    isRemote(): boolean;
}

export interface RemoteConcept extends Concept {
    delete(): void;
    isDeleted(): boolean;

    asType(): RemoteType;
    asThing(): RemoteThing;
    asRemote(transaction: GraknTransaction): RemoteConcept;
}
