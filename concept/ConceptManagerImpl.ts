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

import {GraknTransaction} from "../api/GraknTransaction";
import {ConceptManager} from "../api/concept/ConceptManager";
import {Thing} from "../api/concept/thing/Thing";
import {ThingType} from "../api/concept/type/ThingType";
import {EntityType} from "../api/concept/type/EntityType";
import {RelationType} from "../api/concept/type/RelationType";
import {AttributeType} from "../api/concept/type/AttributeType";
import {
    AttributeTypeImpl,
    EntityTypeImpl,
    RelationTypeImpl,
    ThingImpl,
    ThingTypeImpl,
} from "../dependencies_internal";
import {Core} from "../common/rpc/RequestBuilder";
import {ConceptManager as ConceptProto} from "grakn-protocol/common/concept_pb";
import {Transaction as TransactionProto} from "grakn-protocol/common/transaction_pb";

export class ConceptManagerImpl implements ConceptManager {

    private _transaction: GraknTransaction.Extended;

    constructor(client: GraknTransaction.Extended) {
        this._transaction = client;
    }

    async getRootThingType(): Promise<ThingType> {
        return this.getThingType("thing");
    }

    async getRootEntityType(): Promise<EntityType> {
        return this.getEntityType("entity");
    }

    async getRootRelationType(): Promise<RelationType> {
        return this.getRelationType("relation");
    }

    async getRootAttributeType(): Promise<AttributeType> {
        return this.getAttributeType("attribute");
    }

    async getThingType(label: string): Promise<ThingType> {
        const request = Core.ConceptManager.getThingTypeReq(label);
        let response = await this.execute(request);
        if (response.getGetThingTypeRes().getResCase() == ConceptProto.GetThingType.Res.ResCase.THING_TYPE) {
            return ThingTypeImpl.of(response.getGetThingTypeRes().getThingType());
        } else {
            return null;
        }
    }

    async getEntityType(label: string): Promise<EntityType> {
        const type = await this.getThingType(label);
        if (type && type.isEntityType()) return type as EntityType;
        else return null;
    }

    async getRelationType(label: string): Promise<RelationType> {
        const type = await this.getThingType(label);
        if (type && type.isRelationType()) return type as RelationType;
        else return null;
    }

    async getAttributeType(label: string): Promise<AttributeType | null> {
        const type = await this.getThingType(label);
        if (type && type.isAttributeType()) return type as AttributeType;
        else return null;
    }

    async getThing(iid: string): Promise<Thing> {
        const request = Core.ConceptManager.getThingReq(iid);
        let response = await this.execute(request);
        if (response.getGetThingRes().getResCase() === ConceptProto.GetThing.Res.ResCase.THING) {
            return ThingImpl.of(response.getGetThingRes().getThing());
        } else {
            return null;
        }
    }

    async putEntityType(label: string): Promise<EntityType> {
        const request = Core.ConceptManager.putEntityTypeReq(label);
        const response = await this.execute(request);
        return EntityTypeImpl.of(response.getPutEntityTypeRes().getEntityType());
    }

    async putRelationType(label: string): Promise<RelationType> {
        const request = Core.ConceptManager.putRelationTypeReq(label);
        const response = await this.execute(request);
        return RelationTypeImpl.of(response.getPutRelationTypeRes().getRelationType());
    }

    async putAttributeType(label: string, valueType: AttributeType.ValueType): Promise<AttributeType | null> {
        const request = Core.ConceptManager.putAttributeTypeReq(label, valueType.proto());
        const response = await this.execute(request);
        return AttributeTypeImpl.of(response.getPutAttributeTypeRes().getAttributeType());
    }

    private execute(request: TransactionProto.Req): Promise<ConceptProto.Res> {
        return this._transaction.rpcExecute(request).then((res) => res.getConceptManagerRes());
    }

}