import ConceptProto from "graknlabs-grpc-protocol/protobuf/concept_pb";
import { ThingImpl } from "../Thing/Impl/ThingImpl";
import { EntityImpl } from "../Thing/Impl/EntityImpl";
import { RelationImpl } from "../Thing/Impl/RelationImpl";
import { AttributeImpl } from "../Thing/Impl/AttributeImpl";

export namespace ConceptProtoReader {
    export function thing(thingProto: ConceptProto.Thing): ThingImpl {
        switch (thingProto.getEncoding()) {
            case ConceptProto.Thing.ENCODING.ENTITY:
                return EntityImpl.of(thingProto);
            case ConceptProto.Thing.ENCODING.RELATION:
                return RelationImpl.of(thingProto);
            case ConceptProto.Thing.ENCODING.ATTRIBUTE:
                return AttributeImpl.of(thingProto);
            default:
                throw "Bad encoding"
        }
    }
}
