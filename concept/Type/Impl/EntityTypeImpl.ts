import { ThingTypeImpl, RemoteThingTypeImpl } from "./ThingTypeImpl";
import { RemoteEntityType } from "../EntityType";
import { EntityType } from "../EntityType";
import { Grakn } from "../../../Grakn";
import Transaction = Grakn.Transaction;
import ConceptProto from "graknlabs-grpc-protocol/protobuf/concept_pb";
import { EntityImpl } from "../../Thing/Impl/EntityImpl";
import { Stream } from "../../../rpc/Stream";

export class EntityTypeImpl extends ThingTypeImpl implements EntityType {
    protected constructor(label: string, isRoot: boolean) {
        super(label, isRoot);
    }

    static of(typeProto: ConceptProto.Type): EntityTypeImpl {
        return new EntityTypeImpl(typeProto.getLabel(), typeProto.getRoot());
    }

    asRemote(transaction: Transaction): RemoteEntityType {
        return new RemoteEntityTypeImpl(transaction, this.getLabel(), this.isRoot());
    }
}

export class RemoteEntityTypeImpl extends RemoteThingTypeImpl implements RemoteEntityType {
    constructor(transaction: Transaction, label: string, isRoot: boolean) {
        super(transaction, label, isRoot);
    }

    setSupertype(superEntityType: EntityType): void {
        throw "Not yet Implemented"
    }

    getSupertype(): EntityTypeImpl {
        throw "Not yet implemented"
    }

    getInstances(): Stream<EntityImpl> {
        return super.getInstances() as Stream<EntityImpl>;
    }

    asRemote(transaction: Transaction): RemoteEntityTypeImpl {
        return new RemoteEntityTypeImpl(transaction, this.getLabel(), this.isRoot());
    }

    getSupertypes(): Stream<any> {
        throw "Not yet implemented";
    }

    getSubtypes(): Stream<any> {
        throw "Not yet implemented";
    }

    create(): Promise<EntityImpl> {
        const method = new ConceptProto.Type.Req()
            .setEntityTypeCreateReq(new ConceptProto.EntityType.Create.Req());
        return this.execute(method).then(res => EntityImpl.of(res.getEntityTypeCreateRes().getEntity()));
    }
}
