import { Type } from "../Type/Type";
import ConceptProto from "graknlabs-grpc-protocol/protobuf/concept_pb";
import { Thing } from "../Thing/Thing";
import { AttributeType } from "../Type/AttributeType";
import { RoleTypeImpl } from "../Type/Impl/RoleTypeImpl";
import { EntityImpl } from "../Thing/Impl/EntityImpl";
import { RelationImpl } from "../Thing/Impl/RelationImpl";
import { AttributeImpl } from "../Thing/Impl/AttributeImpl";
import { EntityTypeImpl } from "../Type/Impl/EntityTypeImpl";
import { RelationTypeImpl } from "../Type/Impl/RelationTypeImpl";
import { AttributeTypeImpl } from "../Type/Impl/AttributeTypeImpl";
import { ThingTypeImpl } from "../Type/Impl/ThingTypeImpl";

export namespace ConceptProtoBuilder {

    export function thing(thing: Thing): ConceptProto.Thing {
        return new ConceptProto.Thing()
            .setIid(thing.getIID())
            .setEncoding(thingEncoding(thing));
    }

    export function type(type: Type): ConceptProto.Type {
        const typeProto = new ConceptProto.Type()
            .setLabel(type.getLabel())
            .setEncoding(typeEncoding(type));

        if (type instanceof RoleTypeImpl) {
            typeProto.setScope(type.getScope());
        }

        return typeProto;
    }

    export function types(types: Type[]): ConceptProto.Type[] {
        return types.map(type);
    }

    // The 'attributeValue' functions are split up like this to avoid ambiguity between Long and Double
    export function booleanAttributeValue(value: boolean): ConceptProto.Attribute.Value {
        return new ConceptProto.Attribute.Value().setBoolean(value);
    }

    export function longAttributeValue(value: number): ConceptProto.Attribute.Value {
        return new ConceptProto.Attribute.Value().setLong(value);
    }

    export function doubleAttributeValue(value: number): ConceptProto.Attribute.Value {
        return new ConceptProto.Attribute.Value().setDouble(value);
    }

    export function stringAttributeValue(value: string): ConceptProto.Attribute.Value {
        return new ConceptProto.Attribute.Value().setString(value);
    }

    export function dateTimeAttributeValue(value: Date): ConceptProto.Attribute.Value {
        return new ConceptProto.Attribute.Value().setDateTime(value.getTime());
    }

    export function valueType(valueType: AttributeType.ValueType): ConceptProto.AttributeType.VALUE_TYPE {
        switch (valueType) {
            case AttributeType.ValueType.OBJECT:
                return ConceptProto.AttributeType.VALUE_TYPE.OBJECT;
            case AttributeType.ValueType.BOOLEAN:
                return ConceptProto.AttributeType.VALUE_TYPE.BOOLEAN;
            case AttributeType.ValueType.LONG:
                return ConceptProto.AttributeType.VALUE_TYPE.LONG;
            case AttributeType.ValueType.DOUBLE:
                return ConceptProto.AttributeType.VALUE_TYPE.DOUBLE;
            case AttributeType.ValueType.STRING:
                return ConceptProto.AttributeType.VALUE_TYPE.STRING;
            case AttributeType.ValueType.DATETIME:
                return ConceptProto.AttributeType.VALUE_TYPE.DATETIME;
            default:
                throw "Value type not recognised";
        }
    }

    export function thingEncoding(thing: Thing): ConceptProto.Thing.ENCODING {
        if (thing instanceof EntityImpl) {
            return ConceptProto.Thing.ENCODING.ENTITY;
        } else if (thing instanceof RelationImpl) {
            return ConceptProto.Thing.ENCODING.RELATION;
        } else if (thing instanceof AttributeImpl) {
            return ConceptProto.Thing.ENCODING.ATTRIBUTE;
        } else {
            throw "Unrecognised Thing class";
        }
    }

    export function typeEncoding(type: Type): ConceptProto.Type.ENCODING {
        if (type instanceof EntityTypeImpl) {
            return ConceptProto.Type.ENCODING.ENTITY_TYPE;
        } else if (type instanceof RelationTypeImpl) {
            return ConceptProto.Type.ENCODING.RELATION_TYPE;
        } else if (type instanceof AttributeTypeImpl) {
            return ConceptProto.Type.ENCODING.ATTRIBUTE_TYPE;
        } else if (type instanceof RoleTypeImpl) {
            return ConceptProto.Type.ENCODING.ROLE_TYPE;
        } else if (type instanceof ThingTypeImpl) {
            return ConceptProto.Type.ENCODING.THING_TYPE;
        } else {
            throw "Unrecognised Type class";
        }
    }
}
