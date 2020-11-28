import { ThingTypeImpl, RemoteThingTypeImpl } from "./ThingTypeImpl";
import { Entity } from "../../Thing/Entity";
import { RemoteEntityType } from "../EntityType";
import { EntityType } from "../EntityType";
import { QueryIterator } from "../../Concept";
import { Grakn } from "../../../Grakn";
import Transaction = Grakn.Transaction;

export class EntityTypeImpl extends ThingTypeImpl implements EntityType {
    asRemote(transaction: Transaction): RemoteEntityType {
        return new RemoteEntityTypeImpl(transaction, this._label, this.root)
    };

}

export class RemoteEntityTypeImpl extends RemoteThingTypeImpl implements RemoteEntityType {
    asRemote(transaction: Transaction): RemoteEntityType {
        return new RemoteEntityTypeImpl(transaction, this.label, this.root)
    };

    create(): Entity {
        throw "Not yet Implemented"
    }

    getSupertype(): EntityType {
        throw "Not yet implemented"
    }

    getInstances(): QueryIterator {
        return new QueryIterator();
    }

    setSupertype(superEntityType: EntityType): void {
    }

}