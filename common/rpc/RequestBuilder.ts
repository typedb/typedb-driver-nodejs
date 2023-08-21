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
    AttributeGetOwnersReq,
    ConceptManagerPutAttributeTypeReq,
    ConceptManagerPutEntityTypeReq,
    ConceptManagerPutRelationTypeReq,
    ConceptManagerReq,
    RelationGetPlayersByRoleTypeReq,
    RelationGetRelatingReq,
    Thing,
    ThingDeleteReq,
    ThingGetHasReq,
    ThingGetPlayingReq,
    ThingGetRelationsReq,
    ThingReq,
    ThingSetHasReq,
    ThingUnsetHasReq,
    Type,
    ValueType
} from "typedb-protocol/proto/concept";
import {
    LogicManagerGetRuleReq,
    LogicManagerGetRulesReq,
    LogicManagerPutRuleReq,
    LogicManagerReq,
    RuleDeleteReq,
    RuleReq,
    RuleSetLabelReq
} from "typedb-protocol/proto/logic";
import {Options} from "typedb-protocol/proto/options";
import {
    QueryManagerDefineReq,
    QueryManagerDeleteReq,
    QueryManagerExplainReq,
    QueryManagerInsertReq,
    QueryManagerMatchAggregateReq,
    QueryManagerMatchGroupAggregateReq,
    QueryManagerMatchGroupReq,
    QueryManagerMatchReq,
    QueryManagerReq,
    QueryManagerUndefineReq,
    QueryManagerUpdateReq
} from "typedb-protocol/proto/query";
import {Version} from "typedb-protocol/proto/version";
import * as uuid from "uuid";
import {Label} from "../Label";
import {Bytes} from "../util/Bytes";
import {
    UserManagerAllReq,
    UserManagerContainsReq,
    UserManagerCreateReq,
    UserManagerDeleteReq,
    UserManagerGetReq,
    UserManagerPasswordSetReq,
    UserPasswordUpdateReq,
    UserTokenReq
} from "typedb-protocol/proto/user";
import {
    DatabaseDeleteReq,
    DatabaseManagerAllReq,
    DatabaseManagerContainsReq,
    DatabaseManagerCreateReq,
    DatabaseManagerGetReq,
    DatabaseRuleSchemaReq,
    DatabaseSchemaReq,
    DatabaseTypeSchemaReq
} from "typedb-protocol/proto/database";
import {
    TransactionClient,
    TransactionCommitReq,
    TransactionOpenReq,
    TransactionReq,
    TransactionRollbackReq,
    TransactionStreamReq,
    TransactionType
} from "typedb-protocol/proto/transaction";
import {ServerManagerAllReq} from "typedb-protocol/proto/server";
import {ConnectionOpenReq} from "typedb-protocol/proto/connection";
import {SessionCloseReq, SessionOpenReq, SessionPulseReq, SessionType} from "typedb-protocol/proto/session";

/* eslint no-inner-declarations: "off" */
export namespace RequestBuilder {
    export namespace DatabaseManager {
        export function getReq(name: string) {
            return new DatabaseManagerGetReq({ name: name });
        }

        export function createReq(name: string) {
            return new DatabaseManagerCreateReq({ name: name });
        }

        export function containsReq(name: string) {
            return new DatabaseManagerContainsReq({ name: name });
        }

        export function allReq() {
            return new DatabaseManagerAllReq();
        }
    }

    export namespace Database {
        export function schemaReq(name: string) {
            return new DatabaseSchemaReq({ name: name });
        }

        export function typeSchemaReq(name: string) {
            return new DatabaseTypeSchemaReq({ name: name });
        }

        export function ruleSchemaReq(name: string) {
            return new DatabaseRuleSchemaReq({ name: name });
        }

        export function deleteReq(name: string) {
            return new DatabaseDeleteReq({ name: name });
        }
    }

    export namespace ServerManager {
        export function allReq() {
            return new ServerManagerAllReq();
        }
    }

    /*
    export namespace UserManager {
        export function containsReq(name: string): UserManagerContainsReq {
            return new UserManagerContainsReq({ username: name });
        }

        export function createReq(name: string, password: string): UserManagerCreateReq {
            return new UserManagerCreateReq({ username: name, password: password });
        }

        export function deleteReq(name: string): UserManagerDeleteReq {
            return new UserManagerDeleteReq({ username: name });
        }

        export function allReq(): UserManagerAllReq {
            return new UserManagerAllReq();
        }

        export function passwordSetReq(name: string, password: string): UserManagerPasswordSetReq {
            return new UserManagerPasswordSetReq({ username: name, password: password });
        }

        export function getReq(name: string): UserManagerGetReq {
            return new UserManagerGetReq({ username: name });
        }
    }
     */

    export namespace User {
        export function passwordUpdateReq(name: string, passwordOld: string, passwordNew: string): UserPasswordUpdateReq {
            return new UserPasswordUpdateReq({ username: name, password_old: passwordOld, password_new: passwordNew });
        }

        export function tokenReq(username: string) {
            return new UserTokenReq({ username: username });
        }
    }

    export namespace Connection {
        export function openReq() {
            return new ConnectionOpenReq({ version: Version.VERSION })
        }
    }

    export namespace Session {

        export function openReq(database: string, type: SessionType, options: Options) {
            return new SessionOpenReq({ database: database, type: type, options: options });
        }

        export function closeReq(id: string) {
            return new SessionCloseReq({ session_id: Bytes.hexStringToBytes(id) });
        }

        export function pulseReq(id: string) {
            return new SessionPulseReq({ session_id: Bytes.hexStringToBytes(id) });
        }

    }

    export namespace Transaction {

        export function clientReq(reqs: TransactionReq[]) {
            return new TransactionClient({ reqs: reqs });
        }

        export function openReq(sessionId: string, type: TransactionType, options: Options, latencyMillis: number) {
            return new TransactionReq({
                open_req:
                    new TransactionOpenReq({
                        session_id: Bytes.hexStringToBytes(sessionId),
                        type: type,
                        options: options,
                        network_latency_millis: latencyMillis
                    })
            });
        }

        export function commitReq() {
            return new TransactionReq({commit_req: new TransactionCommitReq()});
        }

        export function rollbackReq() {
            return new TransactionReq({rollback_req: new TransactionRollbackReq()});
        }

        export function streamReq(requestId: string) {
            return new TransactionReq({
                req_id: uuid.parse(requestId) as Uint8Array,
                stream_req: new TransactionStreamReq()
            });
        }

    }

    /*
    export namespace LogicManager {

        export function logicManagerReq(logicReq: LogicManagerReq) {
            return new TransactionReq({ logic_manager_req: logicReq });
        }

        export function putRuleReq(label: string, when: string, then: string) {
            return logicManagerReq(new LogicManagerReq({
                put_rule_req: new LogicManagerPutRuleReq({
                    label: label,
                    when: when,
                    then: then
                })
            }));
        }

        export function getRuleReq(label: string) {
            return logicManagerReq(new LogicManagerReq({
                get_rule_req: new LogicManagerGetRuleReq({ label: label })
            }));
        }

        export function getRulesReq() {
            return logicManagerReq(new LogicManagerReq({get_rules_req: new LogicManagerGetRulesReq()}));
        }
    }

    export namespace Rule {

        export function ruleReq(request: RuleReq) {
            return new TransactionReq({ rule_req: request });
        }

        export function setLabelReq(currentLabel: string, newLabel: string) {
            return ruleReq(new RuleReq({
                label: currentLabel,
                rule_set_label_req: new RuleSetLabelReq({label: newLabel})
            }));
        }

        export function deleteReq(label: string) {
            return ruleReq(new RuleReq({label: label, rule_delete_req: new RuleDeleteReq()}));
        }
    }
    */

    export namespace QueryManager {
        function queryManagerReq(queryReq: QueryManagerReq, options: Options) {
            queryReq.options = options;
            return new TransactionReq({query_manager_req: queryReq});
        }

        export function defineReq(query: string, options: Options) {
            return queryManagerReq(new QueryManagerReq({
                define_req: new QueryManagerDefineReq({query: query})
            }), options);
        }

        export function undefineReq(query: string, options: Options) {
            return queryManagerReq(new QueryManagerReq({
                undefine_req: new QueryManagerUndefineReq({query: query})
            }), options);
        }

        export function matchReq(query: string, options: Options) {
            return queryManagerReq(new QueryManagerReq({
                match_req: new QueryManagerMatchReq({query: query})
            }), options);
        }

        export function matchAggregateReq(query: string, options: Options) {
            return queryManagerReq(new QueryManagerReq({
                match_aggregate_req: new QueryManagerMatchAggregateReq({query: query})
            }), options);
        }

        export function matchGroupReq(query: string, options: Options) {
            return queryManagerReq(new QueryManagerReq({
                match_group_req: new QueryManagerMatchGroupReq({query: query})
            }), options);
        }

        export function matchGroupAggregateReq(query: string, options: Options) {
            return queryManagerReq(new QueryManagerReq({
                match_group_aggregate_req: new QueryManagerMatchGroupAggregateReq({query: query})
            }), options);
        }

        export function insertReq(query: string, options: Options) {
            return queryManagerReq(new QueryManagerReq({
                insert_req: new QueryManagerInsertReq({query: query})
            }), options);
        }

        export function deleteReq(query: string, options: Options) {
            return queryManagerReq(new QueryManagerReq({
                delete_req: new QueryManagerDeleteReq({query: query})
            }), options);
        }

        export function updateReq(query: string, options: Options) {
            return queryManagerReq(new QueryManagerReq({
                update_req: new QueryManagerUpdateReq({query: query})
            }), options);
        }

        export function explainReq(id: number, options: Options) {
            return queryManagerReq(new QueryManagerReq({
                explain_req: new QueryManagerExplainReq({explainable_id: id})
            }), options);
        }
    }

    /*
    export namespace ConceptManager {
        function conceptManagerReq(req: ConceptManagerReq): TransactionReq {
            return new TransactionReq({ concept_manager_req: req });
        }

        export function putEntityTypeReq(label: string) {
            return conceptManagerReq(new ConceptManagerReq({
                put_entity_type_req: new ConceptManagerPutEntityTypeReq({label: label})
            }));
        }

        export function putRelationTypeReq(label: string) {
            return conceptManagerReq(new ConceptManagerReq({
                put_relation_type_req: new ConceptManagerPutRelationTypeReq({ label: label })
            }));
        }

        export function putAttributeTypeReq(label: string, valueType: ValueType) {
            return conceptManagerReq(new ConceptManagerReq({
                put_attribute_type_req: new ConceptManagerPutAttributeTypeReq({ label: label, valueType: valueType })
            }));
        }

        export function getThingTypeReq(label: string) {
            return conceptManagerReq(new ConceptManagerReq( {
                    get_entity_type_req: new ConceptManagerGetThingTypeReq({label: label})
                } ));
        }

        export function getThingReq(iid: string) {
            return conceptManagerReq(new ConceptManagerReq().setGetThingReq(
                new ConceptManagerGetThingReq({ iid: Bytes.hexStringToBytes(iid }))
            ));
        }
    }

    export namespace Concept {

        export function conceptValueBoolean(value: boolean): ConceptValue {
            return new ConceptValue({ boolean: value });
        }

        export function conceptValueLong(value: number): ConceptValue {
            return new ConceptValue({ long: value });
        }

        export function conceptValueDouble(value: number): ConceptValue {
            return new ConceptValue({ double: value });
        }

        export function conceptValueString(value: string): ConceptValue {
            return new ConceptValue({ string: value });
        }

        export function conceptValueDateTime(value: Date): ConceptValue {
            return new ConceptValue({ dateTime: value.getTime( }));
        }

    }

    export namespace Type {

        function typeReq(req: TypeReq): Transaction.Req {
            return new TransactionReq({ typeReq: req });
        }

        function newReqBuilder(label: Label) {
            const builder = new TypeReq({ label: label.name });
            if (label.scope) builder.setScope(label.scope);
            return builder;
        }

        export function setLabelReq(label: Label, newLabel: string) {
            return typeReq(newReqBuilder(label).setTypeSetLabelReq(
                new TypeSetLabelReq({ label: newLabel })
            ));
        }

        export function getSupertypesReq(label: Label) {
            return typeReq(newReqBuilder(label).setTypeGetSupertypesReq(
                new TypeGetSupertypesReq()
            ));
        }

        export function getSubtypesReq(label: Label) {
            return typeReq(newReqBuilder(label).setTypeGetSubtypesReq(
                new TypeGetSubtypesReq()
            ));
        }

        export function getSupertypeReq(label: Label) {
            return typeReq(newReqBuilder(label).setTypeGetSupertypeReq(
                new TypeGetSupertypeReq()
            ));
        }

        export function deleteReq(label: Label) {
            return typeReq(newReqBuilder(label).setTypeDeleteReq(
                new TypeDeleteReq()
            ));
        }

        export namespace RoleType {

            export function protoRoleType(label: Label, encoding: Type.Encoding) {
                return new Type({ scope: label.scope }).setLabel(label.name).setEncoding(encoding);
            }

            export function getRelationTypesReq(label: Label) {
                return typeReq(newReqBuilder(label).setRoleTypeGetRelationTypesReq(
                    new RoleTypeGetRelationTypesReq()
                ));
            }

            export function getPlayerTypesReq(label: Label) {
                return typeReq(newReqBuilder(label).setRoleTypeGetPlayerTypesReq(
                    new RoleTypeGetPlayerTypesReq()
                ));
            }

            export function getPlayerTypesExplicitReq(label: Label) {
                return typeReq(newReqBuilder(label).setRoleTypeGetPlayerTypesExplicitReq(
                    new RoleTypeGetPlayerTypesExplicitReq()
                ));
            }

            export function getRelationInstancesReq(label: Label) {
                return typeReq(newReqBuilder(label).setRoleTypeGetRelationInstancesReq(
                    new RoleTypeGetRelationInstancesReq()
                ));
            }

            export function getRelationInstancesExplicitReq(label: Label) {
                return typeReq(newReqBuilder(label).setRoleTypeGetRelationInstancesExplicitReq(
                    new RoleTypeGetRelationInstancesExplicitReq()
                ));
            }

            export function getPlayerInstancesReq(label: Label) {
                return typeReq(newReqBuilder(label).setRoleTypeGetPlayerInstancesReq(
                    new RoleTypeGetPlayerInstancesReq()
                ));
            }

            export function getPlayerInstancesExplicitReq(label: Label) {
                return typeReq(newReqBuilder(label).setRoleTypeGetPlayerInstancesExplicitReq(
                    new RoleTypeGetPlayerInstancesExplicitReq()
                ));
            }
        }

        export namespace ThingType {

            export function protoThingType(label: Label, encoding: Type.Encoding) {
                return new Type({ label: label.name }).setEncoding(encoding);
            }

            export function setAbstractReq(label: Label) {
                return typeReq(newReqBuilder(label).setThingTypeSetAbstractReq(
                    new ThingTypeSetAbstractReq()
                ));
            }

            export function unsetAbstractReq(label: Label) {
                return typeReq(newReqBuilder(label).setThingTypeUnsetAbstractReq(
                    new ThingTypeUnsetAbstractReq()
                ));
            }

            export function setSupertypeReq(label: Label, supertype: Type) {
                return typeReq(newReqBuilder(label).setTypeSetSupertypeReq(
                    new TypeSetSupertypeReq({ type: supertype })
                ));
            }

            export function getPlaysReq(label: Label) {
                return typeReq(newReqBuilder(label).setThingTypeGetPlaysReq(
                    new ThingTypeGetPlaysReq()
                ));
            }

            export function getPlaysExplicitReq(label: Label) {
                return typeReq(newReqBuilder(label).setThingTypeGetPlaysExplicitReq(
                    new ThingTypeGetPlaysExplicitReq()
                ));
            }

            export function getPlaysOverriddenReq(label: Label) {
                return typeReq(newReqBuilder(label).setThingTypeGetPlaysOverriddenReq(
                    new ThingTypeGetPlaysOverriddenReq()
                ));
            }

            export function setPlaysReq(label: Label, roleType: Type) {
                return typeReq(newReqBuilder(label).setThingTypeSetPlaysReq(
                    new ThingTypeSetPlaysReq({ roleType: roleType })
                ));
            }

            export function setPlaysOverriddenReq(label: Label, roleType: Type, overriddenRoleType: Type) {
                return typeReq(newReqBuilder(label).setThingTypeSetPlaysReq(
                    new ThingTypeSetPlaysReq({ roleType: roleType })
                        .setOverriddenType(overriddenRoleType)
                ));
            }

            export function unsetPlaysReq(label: Label, roleType: Type) {
                return typeReq(newReqBuilder(label).setThingTypeUnsetPlaysReq(
                    new ThingTypeUnsetPlaysReq({ roleType: roleType })
                ));
            }

            export function getOwnsReq(label: Label, annotations: Type.Annotation[]) {
                return typeReq(newReqBuilder(label).setThingTypeGetOwnsReq(
                    new ThingTypeGetOwnsReq({ annotations: annotations })
                ));
            }

            export function getOwnsByTypeReq(label: Label, valueType: ValueType, annotations: Type.Annotation[]) {
                return typeReq(newReqBuilder(label).setThingTypeGetOwnsReq(
                    new ThingTypeGetOwnsReq({ annotations: annotations })
                        .setValueType(valueType)
                ));
            }

            export function getOwnsExplicitReq(label: Label, annotations: Type.Annotation[]) {
                return typeReq(newReqBuilder(label).setThingTypeGetOwnsExplicitReq(
                    new ThingTypeGetOwnsExplicitReq({ annotations: annotations })
                ));
            }

            export function getOwnsExplicitByTypeReq(label: Label, valueType: ValueType, annotations: Type.Annotation[]) {
                return typeReq(newReqBuilder(label).setThingTypeGetOwnsExplicitReq(
                    new ThingTypeGetOwnsExplicitReq({ annotations: annotations })
                        .setValueType(valueType)
                ));
            }

            export function setOwnsReq(label: Label, attributeType: Type, annotations: Type.Annotation[]) {
                return typeReq(newReqBuilder(label).setThingTypeSetOwnsReq(
                    new ThingTypeSetOwnsReq()
                        .setAttributeType(attributeType)
                        .setAnnotations(annotations)
                ));
            }

            export function setOwnsOverriddenReq(label: Label, attributeType: Type, overriddenType: Type, annotations: Type.Annotation[]) {
                return typeReq(newReqBuilder(label).setThingTypeSetOwnsReq(
                    new ThingTypeSetOwnsReq()
                        .setAttributeType(attributeType)
                        .setOverriddenType(overriddenType)
                        .setAnnotations(annotations)
                ));
            }

            export function unsetOwnsReq(label: Label, attributeType: Type) {
                return typeReq(newReqBuilder(label).setThingTypeUnsetOwnsReq(
                    new ThingTypeUnsetOwnsReq({ attributeType: attributeType })
                ));
            }

            export function getInstancesReq(label: Label) {
                return typeReq(newReqBuilder(label).setThingTypeGetInstancesReq(
                    new ThingTypeGetInstancesReq()
                ));
            }

            export function getOwnsOverriddenReq(label: Label, attributeType: Type) {
                return typeReq(newReqBuilder(label).setThingTypeGetOwnsOverriddenReq(
                    new ThingTypeGetOwnsOverriddenReq({ attributeType: attributeType })
                ));
            }

            export function getSyntaxReq(label: Label) {
                return typeReq(newReqBuilder(label).setThingTypeGetSyntaxReq(new ThingTypeGetSyntaxReq()));
            }
        }

        export namespace EntityType {

            export function createReq(label: Label) {
                return typeReq(newReqBuilder(label).setEntityTypeCreateReq(
                    new EntityTypeCreateReq()
                ));
            }
        }

        export namespace RelationType {

            export function createReq(label: Label) {
                return typeReq(newReqBuilder(label).setRelationTypeCreateReq(
                    new RelationTypeCreateReq()
                ));
            }

            export function getRelatesReq(label: Label) {
                return typeReq(newReqBuilder(label).setRelationTypeGetRelatesReq(
                    new RelationTypeGetRelatesReq()
                ));
            }

            export function getRelatesExplicitReq(label: Label) {
                return typeReq(newReqBuilder(label).setRelationTypeGetRelatesExplicitReq(
                    new RelationTypeGetRelatesExplicitReq()
                ));
            }

            export function getRelatesByRoleReq(label: Label, roleLabel: string) {
                return typeReq(newReqBuilder(label).setRelationTypeGetRelatesForRoleLabelReq(
                    new RelationTypeGetRelatesForRoleLabelReq({ label: roleLabel })
                ));
            }

            export function getRelatesOverridden(label: Label, roleLabel: string) {
                return typeReq(newReqBuilder(label).setRelationTypeGetRelatesOverriddenReq(
                    new RelationTypeGetRelatesOverriddenReq({ label: roleLabel })
                ));
            }

            export function setRelatesReq(label: Label, roleLabel: string) {
                return typeReq(newReqBuilder(label).setRelationTypeSetRelatesReq(
                    new RelationTypeSetRelatesReq({ label: roleLabel })
                ));
            }

            export function setRelatesOverriddenReq(label: Label, roleLabel: string, overriddenLabel: string) {
                return typeReq(newReqBuilder(label).setRelationTypeSetRelatesReq(
                    new RelationTypeSetRelatesReq({ label: roleLabel })
                        .setOverriddenLabel(overriddenLabel)
                ));
            }

            export function unsetRelatesReq(label: Label, roleLabel: string) {
                return typeReq(newReqBuilder(label).setRelationTypeUnsetRelatesReq(
                    new RelationTypeUnsetRelatesReq({ label: roleLabel })
                ));
            }
        }

        export namespace AttributeType {

            export function getOwnersReq(label: Label, annotations: Type.Annotation[]) {
                return typeReq(newReqBuilder(label).setAttributeTypeGetOwnersReq(
                    new AttributeTypeGetOwnersReq({ annotations: annotations })
                ));
            }

            export function getOwnersExplicitReq(label: Label, annotations: Type.Annotation[]) {
                return typeReq(newReqBuilder(label).setAttributeTypeGetOwnersExplicitReq(
                    new AttributeTypeGetOwnersExplicitReq({ annotations: annotations })
                ));
            }

            export function putReq(label: Label, value: ConceptValue) {
                return typeReq(newReqBuilder(label).setAttributeTypePutReq(
                    new AttributeTypePutReq({ value: value })
                ));
            }

            export function getReq(label: Label, value: ConceptValue) {
                return typeReq(newReqBuilder(label).setAttributeTypeGetReq(
                    new AttributeTypeGetReq({ value: value })
                ));
            }

            export function getRegexReq(label: Label) {
                return typeReq(newReqBuilder(label).setAttributeTypeGetRegexReq(
                    new AttributeTypeGetRegexReq()
                ));
            }

            export function setRegexReq(label: Label, regex: string) {
                return typeReq(newReqBuilder(label).setAttributeTypeSetRegexReq(
                    new AttributeTypeSetRegexReq({ regex: regex })
                ));
            }
        }

        export namespace Annotation {

            export function annotationKey(): Type.Annotation {
                return new Type.Annotation({ key: new Type.Annotation.Key( }));
            }

            export function annotationUnique() {
                return new Type.Annotation({ unique: new Type.Annotation.Unique( }));
            }
        }

    }

    export namespace Thing {

        function thingReq(req: ThingReq) {
            return new TransactionReq({ thingReq: req });
        }

        export function protoThing(iid: string): Thing {
            return new Thing({ iid: Bytes.hexStringToBytes(iid }));
        }

        export function getHasReqByAnnotations(iid: string, annotations: Type.Annotation[]) {
            return thingReq(new ThingReq({ iid: Bytes.hexStringToBytes(iid })).setThingGetHasReq(
                new ThingGetHasReq({ annotations: annotations })
            ));
        }

        export function getHasByTypeReq(iid: string, attributeTypes: Type[]) {
            return thingReq(new ThingReq({ iid: Bytes.hexStringToBytes(iid })).setThingGetHasReq(
                new ThingGetHasReq({ attributeTypes: attributeTypes })
            ));
        }

        export function setHasReq(iid: string, attribute: Thing) {
            return thingReq(new ThingReq({ iid: Bytes.hexStringToBytes(iid })).setThingSetHasReq(
                new ThingSetHasReq({ attribute: attribute })
            ));
        }

        export function unsetHasReq(iid: string, attribute: Thing) {
            return thingReq(new ThingReq({ iid: Bytes.hexStringToBytes(iid })).setThingUnsetHasReq(
                new ThingUnsetHasReq({ attribute: attribute })
            ));
        }

        export function getPlayingReq(iid: string) {
            return thingReq(new ThingReq({ iid: Bytes.hexStringToBytes(iid })).setThingGetPlayingReq(
                new ThingGetPlayingReq()
            ));
        }

        export function getRelationsReq(iid: string, roleTypes: Type[]) {
            return thingReq(new ThingReq({ iid: Bytes.hexStringToBytes(iid })).setThingGetRelationsReq(
                new ThingGetRelationsReq({ role_types: roleTypes })
            ));
        }

        export function deleteReq(iid: string) {
            return thingReq(new ThingReq({ iid: Bytes.hexStringToBytes(iid })).setThingDeleteReq(
                new ThingDeleteReq()
            ));
        }

        export namespace Relation {

            export function addPlayerReq(iid: string, roleType: Type, player: Thing) {
                return thingReq(new ThingReq({ iid: Bytes.hexStringToBytes(iid })).setRelationAddPlayerReq(
                    new RelationAddPlayerReq({ roleType: roleType, player: player })
                ));
            }

            export function removePlayerReq(iid: string, roleType: Type, player: Thing) {
                return thingReq(new ThingReq({ iid: Bytes.hexStringToBytes(iid })).setRelationRemovePlayerReq(
                    new RelationRemovePlayerReq({ roleType: roleType, player: player })
                ));
            }

            export function getPlayersReq(iid: string, roleTypes: Type[]) {
                return thingReq(new ThingReq({ iid: Bytes.hexStringToBytes(iid) }).setRelationGetPlayersReq(
                    new RelationGetPlayersReq({ roleTypes: roleTypes })
                ));
            }

            export function getPlayersByRoleTypeReq(iid: string) {
                return thingReq(new ThingReq({ iid: Bytes.hexStringToBytes(iid })).setRelationGetPlayersByRoleTypeReq(
                    new RelationGetPlayersByRoleTypeReq()
                ));
            }

            export function getRelatingReq(iid: string) {
                return thingReq(new ThingReq({iid: Bytes.hexStringToBytes(iid})).setRelationGetRelatingReq(
                    new RelationGetRelatingReq()
                ));
            }
        }

        export namespace Attribute {

            export function getOwnersReq(iid: string) {
                return thingReq(new ThingReq({iid: Bytes.hexStringToBytes(iid})).setAttributeGetOwnersReq(
                    new AttributeGetOwnersReq()
                ));
            }

            export function getOwnersByTypeReq(iid: string, ownerType: Type) {
                return thingReq(new ThingReq({ iid: Bytes.hexStringToBytes(iid })).setAttributeGetOwnersReq(
                    new AttributeGetOwnersReq({ thingType: ownerType })
                ));
            }
        }
    }
     */
}
