import { ThingImpl, RemoteThingImpl } from "./ThingImpl";
import { Entity, RemoteEntity } from "../Entity";
import {GraknTransaction} from "../../../Grakn";
import {EntityTypeImpl} from "../../Type/Impl/EntityTypeImpl";

export class EntityImpl extends ThingImpl implements Entity {
    constructor(iid: string) {
        super(iid);
    }

    asRemote(transaction: GraknTransaction): RemoteEntity {
        return new RemoteEntityImpl(transaction, this.getIID());
    }

    asEntity() {
        return this;
    }
}

export class RemoteEntityImpl extends RemoteThingImpl implements RemoteEntity {
    constructor(transaction: GraknTransaction, iid: string) {
        super(transaction, iid);
    }

    public asRemote(transaction: GraknTransaction): RemoteEntity {
        return this;
    }

    getType(): EntityTypeImpl {
        throw "Not yet implemented"
    }

    asEntity(): RemoteEntity {
        return this;
    }
}
