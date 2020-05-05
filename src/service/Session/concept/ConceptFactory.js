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

const RemoteConcept = require("./RemoteConcept");
const ConceptGrpcMessages = require("../../../../grpc/nodejs/protocol/session/Concept_pb");
const BaseType = require("./BaseTypeConstants").baseType;

/**
 * This factory creates Concepts as Javascipt objects from GrpcConcept provided
 * @param {Object} txService Object implementing all the functionalities of gRPC Transaction as defined in Session.proto
 */
function ConceptFactory(txService) {
  this.txService = txService;
}

ConceptFactory.prototype.createConcept = function createConcept(grpcConcept) {
  const conceptId = grpcConcept.getId();
  switch (grpcConcept.getBasetype()) {
    case ConceptGrpcMessages.Concept.BASE_TYPE.ENTITY:
      return new RemoteConcept.Thing(conceptId, BaseType.ENTITY, this.txService);
    case ConceptGrpcMessages.Concept.BASE_TYPE.RELATION:
      return new RemoteConcept.Relation(conceptId, BaseType.RELATION, this.txService);
    case ConceptGrpcMessages.Concept.BASE_TYPE.ATTRIBUTE:
      return new RemoteConcept.Attribute(conceptId, BaseType.ATTRIBUTE, this.txService);
    case ConceptGrpcMessages.Concept.BASE_TYPE.ENTITY_TYPE:
      return new RemoteConcept.EntityType(conceptId, BaseType.ENTITY_TYPE, this.txService);
    case ConceptGrpcMessages.Concept.BASE_TYPE.RELATION_TYPE:
      return new RemoteConcept.RelationType(conceptId, BaseType.RELATION_TYPE, this.txService);
    case ConceptGrpcMessages.Concept.BASE_TYPE.ATTRIBUTE_TYPE:
      return new RemoteConcept.AttributeType(conceptId, BaseType.ATTRIBUTE_TYPE, this.txService);
    case ConceptGrpcMessages.Concept.BASE_TYPE.ROLE:
      return new RemoteConcept.Role(conceptId, BaseType.ROLE, this.txService);
    case ConceptGrpcMessages.Concept.BASE_TYPE.RULE:
      return new RemoteConcept.Rule(conceptId, BaseType.RULE, this.txService);
    case ConceptGrpcMessages.Concept.BASE_TYPE.META_TYPE:
      return new RemoteConcept.SchemaConcept(conceptId, BaseType.META_TYPE, this.txService);
    default:
      throw "BaseType not recognised.";
  }
}

module.exports = ConceptFactory;
