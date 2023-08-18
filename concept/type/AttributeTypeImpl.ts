/*
 * Copyright (C) 2022 Vaticle
 *
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


import {
    ConceptValue as ConceptValueProto,
    Type as TypeProto,
    ValueType as ValueTypeProto
} from "typedb-protocol/common/concept_pb";
import {Attribute} from "../../api/concept/thing/Attribute";
import {AttributeType} from "../../api/concept/type/AttributeType";
import {ThingType} from "../../api/concept/type/ThingType";
import {TypeDBTransaction} from "../../api/connection/TypeDBTransaction";
import {ErrorMessage} from "../../common/errors/ErrorMessage";
import {TypeDBClientError} from "../../common/errors/TypeDBClientError";
import {Label} from "../../common/Label";
import {RequestBuilder} from "../../common/rpc/RequestBuilder";
import {Stream} from "../../common/util/Stream";
import {AttributeImpl, ThingTypeImpl} from "../../dependencies_internal";
import {Concept} from "../../api/concept/Concept";
import Annotation = ThingType.Annotation;
import BAD_VALUE_TYPE = ErrorMessage.Concept.BAD_VALUE_TYPE;
import INVALID_CONCEPT_CASTING = ErrorMessage.Concept.INVALID_CONCEPT_CASTING;

export class AttributeTypeImpl extends ThingTypeImpl implements AttributeType {
    constructor(name: string, root: boolean, abstract: boolean) {
        super(name, root, abstract);
    }

    protected get className(): string {
        return "AttributeType";
    }

    get valueType(): Concept.ValueType {
        return Concept.ValueType.OBJECT;
    }

    isAttributeType(): boolean {
        return true;
    }

    asAttributeType(): AttributeType {
        return this;
    }
}

export namespace AttributeTypeImpl {
    export function of(attributeTypeProto: TypeProto): AttributeType {
        if (!attributeTypeProto) return null;
        return new AttributeTypeImpl(attributeTypeProto.getLabel(), attributeTypeProto.getIsRoot(), attributeTypeProto.getIsAbstract());
    }
}
