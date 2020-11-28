import { ThingImpl, RemoteThingImpl } from "./ThingImpl";
import { Entity, RemoteEntity } from "../Entity";
import { EntityTypeImpl } from "../../Type/Impl/EntityTypeImpl";
import { Grakn } from "../../../Grakn";
import Transaction = Grakn.Transaction;

export class EntityImpl extends ThingImpl implements Entity {
    protected constructor(iid: string) {
        super(iid);
    }

    asRemote(transaction: Transaction): RemoteEntityImpl {
        return new RemoteEntityImpl(transaction, this.getIID());
    }
}

export class RemoteEntityImpl extends RemoteThingImpl implements RemoteEntity {
    constructor(transaction: Transaction, iid: string) {
        super(transaction, iid);
    }

    public asRemote(transaction: Transaction): RemoteEntityImpl {
        return this;
    }

    getType(): EntityTypeImpl {
        throw "Not yet implemented"
    }
}
