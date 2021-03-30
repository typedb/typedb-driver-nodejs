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

import {Explanation} from "../api/logic/Explanation";
import {Rule} from "../api/logic/Rule";
import {ConceptMap} from "../api/answer/ConceptMap";
import {Explanation as ExplanationProto} from "grakn-protocol/common/logic_pb";
import {RuleImpl} from "./RuleImpl";
import {ConceptMapImpl} from "../concept/answer/ConceptMapImpl";

export class ExplanationImpl implements Explanation {

    private _rule: Rule;
    private _whenAnswer: ConceptMap;
    private _thenAnswer: ConceptMap;
    private _variableMapping: Map<string, Set<string>>;

    constructor(rule: Rule, whenAnswer: ConceptMap, thenAnswer: ConceptMap, variableMapping: Map<string, Set<string>>) {
        this._rule = rule;
        this._whenAnswer = whenAnswer;
        this._thenAnswer = thenAnswer;
        this._variableMapping = variableMapping;
    }

    rule(): Rule {
        return this._rule;
    }

    thenAnswer(): ConceptMap {
        return this._thenAnswer;
    }

    whenAnswer(): ConceptMap {
        return this._whenAnswer;
    }

    variableMapping(): Map<string, Set<string>> {
        return this._variableMapping;
    }

}

export namespace ExplanationImpl {

    export function of(proto: ExplanationProto) {
        const varMapping = new Map<string, Set<string>>();
        proto.getVarMappingMap().forEach((vars: ExplanationProto.VarList, key: string) => varMapping.set(key, new Set(vars.getVarsList())));
        return new ExplanationImpl(
            RuleImpl.of(proto.getRule()),
            ConceptMapImpl.of(proto.getCondition()),
            ConceptMapImpl.of(proto.getConclusion()),
            varMapping
        );
    }
}
