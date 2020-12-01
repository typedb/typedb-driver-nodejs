/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import ConceptProto from "graknlabs-grpc-protocol/protobuf/concept_pb";
import { ThingImpl } from "../Thing/Impl/ThingImpl";
import { EntityImpl } from "../Thing/Impl/EntityImpl";
import { RelationImpl } from "../Thing/Impl/RelationImpl";
import { AttributeImpl, BooleanAttributeImpl, DateTimeAttributeImpl, DoubleAttributeImpl, LongAttributeImpl,
    StringAttributeImpl } from "../Thing/Impl/AttributeImpl";
import { TypeImpl } from "../Type/Impl/TypeImpl";
import { ThingTypeImpl } from "../Type/Impl/ThingTypeImpl";
import { RoleTypeImpl } from "../Type/Impl/RoleTypeImpl";
import assert from "assert";
import { EntityTypeImpl } from "../Type/Impl/EntityTypeImpl";
import { RelationTypeImpl } from "../Type/Impl/RelationTypeImpl";
import {
    AttributeTypeImpl,
    BooleanAttributeTypeImpl, DateTimeAttributeTypeImpl,
    DoubleAttributeTypeImpl,
    LongAttributeTypeImpl, StringAttributeTypeImpl
} from "../Type/Impl/AttributeTypeImpl";

export namespace ConceptProtoReader {
    // This method cannot live in ThingImpl itself, because doing so creates a circular class reference
    // [ThingImpl -> EntityImpl -> ThingImpl] which causes a JavaScript runtime error
    export function thing(thingProto: ConceptProto.Thing): ThingImpl {
        switch (thingProto.getEncoding()) {
            case ConceptProto.Thing.ENCODING.ENTITY:
                return EntityImpl.of(thingProto);
            case ConceptProto.Thing.ENCODING.RELATION:
                return RelationImpl.of(thingProto);
            case ConceptProto.Thing.ENCODING.ATTRIBUTE:
                return attribute(thingProto);
            default:
                throw "Bad encoding";
        }
    }

    export function attribute(thingProto: ConceptProto.Thing): AttributeImpl<any> {
        switch (thingProto.getValueType()) {
            case ConceptProto.AttributeType.VALUE_TYPE.BOOLEAN:
                return BooleanAttributeImpl.of(thingProto);
            case ConceptProto.AttributeType.VALUE_TYPE.LONG:
                return LongAttributeImpl.of(thingProto);
            case ConceptProto.AttributeType.VALUE_TYPE.DOUBLE:
                return DoubleAttributeImpl.of(thingProto);
            case ConceptProto.AttributeType.VALUE_TYPE.STRING:
                return StringAttributeImpl.of(thingProto);
            case ConceptProto.AttributeType.VALUE_TYPE.DATETIME:
                return DateTimeAttributeImpl.of(thingProto);
            default:
                throw "Bad value type";
        }
    }

    export function type(typeProto: ConceptProto.Type): TypeImpl {
        switch (typeProto.getEncoding()) {
            case ConceptProto.Type.ENCODING.ROLE_TYPE:
                return RoleTypeImpl.of(typeProto);
            default:
                return thingType(typeProto);
        }
    }

    export function thingType(typeProto: ConceptProto.Type): ThingTypeImpl {
        switch (typeProto.getEncoding()) {
            case ConceptProto.Type.ENCODING.ENTITY_TYPE:
                return EntityTypeImpl.of(typeProto);
            case ConceptProto.Type.ENCODING.RELATION_TYPE:
                return RelationTypeImpl.of(typeProto);
            case ConceptProto.Type.ENCODING.ATTRIBUTE_TYPE:
                return attributeType(typeProto);
            case ConceptProto.Type.ENCODING.THING_TYPE:
                assert(typeProto.getRoot());
                return new ThingTypeImpl(typeProto.getLabel(), typeProto.getRoot());
            default:
                throw "Bad encoding";
        }
    }

    export function attributeType(typeProto: ConceptProto.Type): AttributeTypeImpl {
        switch (typeProto.getValueType()) {
            case ConceptProto.AttributeType.VALUE_TYPE.BOOLEAN:
                return new BooleanAttributeTypeImpl(typeProto.getLabel(), typeProto.getRoot());
            case ConceptProto.AttributeType.VALUE_TYPE.LONG:
                return new LongAttributeTypeImpl(typeProto.getLabel(), typeProto.getRoot());
            case ConceptProto.AttributeType.VALUE_TYPE.DOUBLE:
                return new DoubleAttributeTypeImpl(typeProto.getLabel(), typeProto.getRoot());
            case ConceptProto.AttributeType.VALUE_TYPE.STRING:
                return new StringAttributeTypeImpl(typeProto.getLabel(), typeProto.getRoot());
            case ConceptProto.AttributeType.VALUE_TYPE.DATETIME:
                return new DateTimeAttributeTypeImpl(typeProto.getLabel(), typeProto.getRoot());
            case ConceptProto.AttributeType.VALUE_TYPE.OBJECT:
                assert(typeProto.getRoot());
                return new AttributeTypeImpl(typeProto.getLabel(), typeProto.getRoot());
            default:
                throw "Bad value type";
        }
    }
}
