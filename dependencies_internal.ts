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

/*
 * This file determines the order in which class modules are loaded at runtime.
 * Superclasses must always be loaded before their subclasses, otherwise an error will occur
 * whenever either class is instantiated at runtime.
 * NOTE: this does not apply to interfaces, which are erased at runtime.
 */


// /* concept.answer */
// export * from "./concept/answer/ConceptMap";
// export * from "./concept/answer/Numeric";
// export * from "./concept/answer/ConceptMapGroup";
// export * from "./concept/answer/NumericGroup";
//
// /* logic.impl */
// export * from "./logic/impl/RuleImpl";
//
// /* logic */
// export * from "./logic/Rule";
// export * from "./logic/LogicManager";

/* concept.impl */
export * from "./concept/ConceptImpl";

/* concept.thing */
export * from "./concept/thing/ThingImpl";
export * from "./concept/thing/EntityImpl";
export * from "./concept/thing/RelationImpl";
export * from "./concept/thing/AttributeImpl";

/* concept.type */
// export * from "./concept/type/TypeImpl";
// export * from "./concept/type/ThingTypeImpl";
export * from "./concept/type/AttributeTypeImpl";
export * from "./concept/type/EntityTypeImpl";
export * from "./concept/type/RelationTypeImpl";
export * from "./concept/type/RoleTypeImpl";
//
// /* concept.type.impl */
// export * from "./concept/type/impl/TypeImpl";
// export * from "./concept/type/impl/ThingTypeImpl";
// export * from "./concept/type/impl/AttributeTypeImpl";
// export * from "./concept/type/impl/EntityTypeImpl";
// export * from "./concept/type/impl/RelationTypeImpl";
// export * from "./concept/type/impl/RoleTypeImpl";
//
// /* concept */
// export * from "./concept/Concept";
// export * from "./concept/ConceptManager";
//
// /* query */
// export * from "./query/QueryManager";
//
// /* ROOT */
// export * from "./GraknClient";
// export * from "./GraknOptions";
//
// /* rpc */
// export * from "./rpc/ClientRPC";
// export * from "./rpc/DatabaseManagerRPC";
// export * from "./rpc/DatabaseRPC";
// export * from "./rpc/SessionRPC";
// export * from "./rpc/TransactionRPC";
// export * from "./common/util/Stream";
//
// /* rpc.cluster */
// export * from "./rpc/cluster/FailsafeTask";
// export * from "./rpc/cluster/ServerAddress";
// export * from "./rpc/cluster/ClientClusterRPC";
// export * from "./rpc/cluster/DatabaseManagerClusterRPC";
// export * from "./rpc/cluster/DatabaseClusterRPC";
// export * from "./rpc/cluster/SessionClusterRPC";
//
// /* common.proto */
// export * from "./common_old/proto/OptionsProtoBuilder";
//
// /* concept.proto */
// export * from "./concept/proto/ConceptProtoBuilder";
