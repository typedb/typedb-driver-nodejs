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

import {CoreDatabase, CoreDatabaseManager} from "grakn-protocol/core/core_database_pb";
import {Session as SessionProto} from "grakn-protocol/common/session_pb";
import {Transaction as TransactionProto} from "grakn-protocol/common/transaction_pb";
import {LogicManager as LogicProto, Rule as RuleProto} from "grakn-protocol/common/logic_pb";
import {QueryManager as QueryProto} from "grakn-protocol/common/query_pb";
import {ConceptManager as ConceptProto, AttributeType as AttributeTypeProto} from "grakn-protocol/common/concept_pb";
import {Options} from "grakn-protocol/common/options_pb";

export namespace Core {

    export namespace DatabaseManager {

        export function createReq(name: string) {
            return new CoreDatabaseManager.Create.Req().setName(name);
        }

        export function containsReq(name: string) {
            return new CoreDatabaseManager.Contains.Req().setName(name);
        }

        export function allReq() {
            return new CoreDatabaseManager.All.Req();
        }

    }

    export namespace Database {

        export function deleteReq(name: string) {
            return new CoreDatabase.Delete.Req().setName(name);
        }
    }

    export namespace Session {

        export function openReq(database: string, type: SessionProto.Type, options: Options) {
            return new SessionProto.Open.Req().setDatabase(database).setType(type).setOptions(options);
        }

        export function closeReq(id: string) {
            return new SessionProto.Close.Req().setSessionId(id);
        }

        export function pulseReq(id: string) {
            return new SessionProto.Pulse.Req().setSessionId(id);
        }

    }

    export namespace Transaction {

        export function clientReq(reqs: TransactionProto.Req[]) {
            return new TransactionProto.Client().setReqsList(reqs);
        }

        export function openReq(sessionId: string, type: TransactionProto.Type, options: Options, latencyMillis: number) {
            return new TransactionProto.Req().setOpenReq(
                new TransactionProto.Open.Req().setSessionId(sessionId).setType(type).setOptions(options).setNetworkLatencyMillis(latencyMillis)
            );
        }

        export function commitReq() {
            return new TransactionProto.Req().setCommitReq(new TransactionProto.Commit.Req());
        }

        export function rollbackReq() {
            return new TransactionProto.Req().setRollbackReq(new TransactionProto.Rollback.Req());
        }

        export function streamReq(requestId: string) {
            return new TransactionProto.Req().setReqId(requestId).setStreamReq(new TransactionProto.Stream.Req());
        }

    }

    export namespace LogicManager {

        export function logicManagerReq(logicReq: LogicProto.Req) {
            // TODO grabl tracing
            return new TransactionProto.Req().setLogicManagerReq(logicReq);
        }

        export function putRuleReq(label: string, when: string, then: string) {
            return logicManagerReq(new LogicProto.Req().setPutRuleReq(
                new LogicProto.PutRule.Req().setLabel(label).setWhen(when).setThen(then)
            ));
        }

        export function getRuleReq(label: string) {
            return logicManagerReq(new LogicProto.Req().setGetRuleReq(
                new LogicProto.GetRule.Req().setLabel(label)
            ));
        }

        export function getRulesReq() {
            return logicManagerReq(new LogicProto.Req().setGetRulesReq(new LogicProto.GetRules()));
        }
    }

    export namespace Rule {

        export function ruleReq(request: RuleProto.Req) {
            return new TransactionProto.Req().setRuleReq(request);
        }

        export function setLabelReq(currentLabel: string, newLabel: string) {
            return ruleReq(new RuleProto.Req().setLabel(currentLabel).setRuleSetLabelReq(
                new RuleProto.SetLabel.Req().setLabel(newLabel)
            ));
        }

        export function deleteReq(label: string) {
            return ruleReq(new RuleProto.Req().setLabel(label).setRuleDeleteReq(
                new RuleProto.Delete.Req()
            ));
        }
    }

    export namespace QueryManager {

        function queryManagerReq(queryReq: QueryProto.Req, options: Options) {
            return new TransactionProto.Req().setQueryManagerReq(queryReq.setOptions(options));
        }

        export function defineReq(query: string, options: Options) {
            return queryManagerReq(new QueryProto.Req().setDefineReq(
                new QueryProto.Define.Req().setQuery(query.toString())
            ), options);
        }

        export function undefineReq(query: string, options: Options) {
            return queryManagerReq(new QueryProto.Req().setUndefineReq(
                new QueryProto.Undefine.Req().setQuery(query.toString())
            ), options);
        }

        export function matchReq(query: string, options: Options) {
            return queryManagerReq(new QueryProto.Req().setMatchReq(
                new QueryProto.Match.Req().setQuery(query.toString())
            ), options);
        }

        export function matchAggregateReq(
            query: string, options: Options) {
            return queryManagerReq(new QueryProto.Req().setMatchAggregateReq(
                new QueryProto.MatchAggregate.Req().setQuery(query.toString())
            ), options);
        }

        export function matchGroupReq(query: string, options: Options) {
            return queryManagerReq(new QueryProto.Req().setMatchGroupReq(
                new QueryProto.MatchGroup.Req().setQuery(query.toString())
            ), options);
        }

        export function matchGroupAggregateReq(query: string, options: Options) {
            return queryManagerReq(new QueryProto.Req().setMatchGroupAggregateReq(
                new QueryProto.MatchGroupAggregate.Req().setQuery(query.toString())
            ), options);
        }

        export function insertReq(query: string, options: Options) {
            return queryManagerReq(new QueryProto.Req().setInsertReq(
                new QueryProto.Insert.Req().setQuery(query.toString())
            ), options);
        }

        export function deleteReq(query: string, options: Options) {
            return queryManagerReq(new QueryProto.Req().setDeleteReq(
                new QueryProto.Delete.Req().setQuery(query.toString())
            ), options);
        }

        export function updateReq(query: string, options: Options) {
            return queryManagerReq(new QueryProto.Req().setUpdateReq(
                new QueryProto.Update.Req().setQuery(query)
            ), options);
        }

        // export function explainReq(id: number, options : Options ) {
        //     return queryManagerReq(new QueryProto.Req().setExplainReq(
        //         new QueryProto.Explain.Req().setExplainableId(id)
        //     ), options);
        // }
    }


    export namespace ConceptManager {

        function conceptManagerReq(req: ConceptProto.Req): TransactionProto.Req {
            // TODO grabl metadata
            return new TransactionProto.Req().setConceptManagerReq(req);
        }

        export function putEntityTypeReq(label: string) {
            return conceptManagerReq(new ConceptProto.Req().setPutEntityTypeReq(
                new ConceptProto.PutEntityType.Req().setLabel(label))
            );
        }

        export function putRelationTypeReq(label: string) {
            return conceptManagerReq(new ConceptProto.Req().setPutRelationTypeReq(
                new ConceptProto.PutRelationType.Req().setLabel(label))
            );
        }

        export function putAttributeTypeReq(label: string, valueType: AttributeTypeProto.ValueType) {
            return conceptManagerReq(new ConceptProto.Req().setPutAttributeTypeReq(
                new ConceptProto.PutAttributeType.Req().setLabel(label).setValueType(valueType)
            ));
        }

        export function getThingTypeReq(label: string) {
            return conceptManagerReq(new ConceptProto.Req().setGetThingTypeReq(
                new ConceptProto.GetThingType.Req().setLabel(label)
            ));
        }

        export function getThingReq(iid: string) {
            return conceptManagerReq(new ConceptProto.Req().setGetThingReq(
                new ConceptProto.GetThing.Req().setIid(iid)
            ));
        }
    }
}
