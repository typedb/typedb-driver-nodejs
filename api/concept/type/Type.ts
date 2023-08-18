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


import { Type as TypeProto } from "typedb-protocol/common/concept_pb";
import { ErrorMessage } from "../../../common/errors/ErrorMessage";
import { TypeDBClientError } from "../../../common/errors/TypeDBClientError";
import { Label } from "../../../common/Label";
import { Stream } from "../../../common/util/Stream";
import { TypeDBTransaction } from "../../connection/TypeDBTransaction";
import { Concept } from "../Concept";
import BAD_ENCODING = ErrorMessage.Concept.BAD_ENCODING;

export interface Type extends Concept {
    readonly label: Label;

    readonly root: boolean;

    readonly abstract: boolean;

    setLabel(transaction: TypeDBTransaction, label: string): Promise<void>;

    getSupertype(transaction: TypeDBTransaction): Promise<Type>;

    getSupertypes(transaction: TypeDBTransaction): Stream<Type>;

    getSubtypes(transaction: TypeDBTransaction): Stream<Type>;
}

export namespace Type {
    export function encoding(type: Type): TypeProto.Encoding {
        if (type.isEntityType()) {
            return TypeProto.Encoding.ENTITY_TYPE;
        } else if (type.isRelationType()) {
            return TypeProto.Encoding.RELATION_TYPE;
        } else if (type.isAttributeType()) {
            return TypeProto.Encoding.ATTRIBUTE_TYPE;
        } else if (type.isRoleType()) {
            return TypeProto.Encoding.ROLE_TYPE;
        } else if (type.isThingType()) {
            return TypeProto.Encoding.THING_TYPE;
        } else {
            throw new TypeDBClientError(BAD_ENCODING);
        }
    }
}
