import { Concept, RemoteConcept } from "../Concept";
import { Grakn } from "../../Grakn";

export abstract class ConceptImpl implements Concept {
    abstract asRemote(transaction: Grakn.Transaction): RemoteConcept

    isRemote(): boolean {
        return false;
    }

    isType(): boolean {
        return false;
    }

    isThingType(): boolean {
        return false;
    }

    isEntityType(): boolean {
        return false;
    }

    isAttributeType(): boolean {
        return false;
    }

    isRelationType(): boolean {
        return false;
    }

    isThing(): boolean {
        return false;
    }

    isEntity(): boolean {
        return false;
    }

    isAttribute(): boolean {
        return false;
    }

    isRelation(): boolean {
        return false;
    }

}

export abstract class RemoteConceptImpl implements RemoteConcept {
    abstract asRemote(transaction: Grakn.Transaction): RemoteConcept
    abstract delete(): Promise<void>
    abstract isDeleted(): Promise<boolean>

    isRemote(): boolean {
        return true;
    }

    isType(): boolean {
        return false;
    }

    isThingType(): boolean {
        return false;
    }

    isEntityType(): boolean {
        return false;
    }

    isAttributeType(): boolean {
        return false;
    }

    isRelationType(): boolean {
        return false;
    }

    isThing(): boolean {
        return false;
    }

    isEntity(): boolean {
        return false;
    }

    isAttribute(): boolean {
        return false;
    }

    isRelation(): boolean {
        return false;
    }
}