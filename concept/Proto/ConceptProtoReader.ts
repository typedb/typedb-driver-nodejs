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
