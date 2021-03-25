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

import {ConceptManager as ConceptProto} from "grakn-protocol/common/concept_pb";
import {ThingType} from "../../api/concept/type/ThingType";
import {TypeImpl} from "./TypeImpl";

export class ThingTypeImpl extends TypeImpl implements ThingType {

}

export namespace ThingTypeImpl {

    export function of(thingTypeProto: ConceptProto.GetThingType.Res) {
        // TODO
        return new ThingTypeImpl();
    }

}