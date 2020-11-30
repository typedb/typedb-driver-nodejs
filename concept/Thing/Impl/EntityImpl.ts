import { ThingImpl, RemoteThingImpl } from "./ThingImpl";
import { Entity, RemoteEntity } from "../Entity";
import { EntityTypeImpl } from "../../Type/Impl/EntityTypeImpl";
import { Grakn } from "../../../Grakn";
import Transaction = Grakn.Transaction;
import ConceptProto from "graknlabs-grpc-protocol/protobuf/concept_pb";

export class EntityImpl extends ThingImpl implements Entity {
    protected constructor(iid: string) {
        super(iid);
    }

    static of(protoThing: ConceptProto.Thing): EntityImpl {
        // TODO: we should probably implement Bytes.bytesToHexString from @graknlabs_common
        return new EntityImpl(protoThing.getIid_asB64());
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
