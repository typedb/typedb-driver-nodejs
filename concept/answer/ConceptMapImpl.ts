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

import {ConceptMap as ConceptMapProto} from "grakn-protocol/common/answer_pb";
import {ConceptMap} from "../../api/answer/ConceptMap";
import {Concept} from "../../api/concept/Concept";
import {ThingImpl, TypeImpl} from "../../dependencies_internal";

export class ConceptMapImpl implements ConceptMap {
    private _concepts: Map<string, Concept>;

    constructor(concepts: Map<string, Concept>) {
        this._concepts = concepts;
    }

    concepts(): IterableIterator<Concept> {
        return this._concepts.values();
    }

    get(variable: string): Concept {
        return this._concepts.get(variable);
    }

    map(): Map<string, Concept> {
        return this._concepts;
    }

}

export namespace ConceptMapImpl {

    export function of(proto: ConceptMapProto) {
        const variableMap = new Map<string, Concept>();
        proto.getMapMap().forEach((protoConcept , resLabel ) => {
            let concept;
            if (protoConcept.hasThing()) concept = ThingImpl.of(protoConcept.getThing());
            else concept = TypeImpl.of(protoConcept.getType());
            variableMap.set(resLabel, concept);
        })
        return new ConceptMapImpl(variableMap);
    }

}