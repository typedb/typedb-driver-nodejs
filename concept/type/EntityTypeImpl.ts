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


import {GraknTransaction} from "../../api/GraknTransaction";
import {EntityType, RemoteEntityType} from "../../api/concept/type/EntityType";
import {Entity} from "../../api/concept/thing/Entity";
import {ThingTypeImpl, EntityImpl} from "../../dependencies_internal";
// import {EntityImpl} from "../thing/EntityImpl";
// import {ThingTypeImpl} from "./ThingTypeImpl";
import {Label} from "../../common/Label";
import {Stream} from "../../common/util/Stream";
import {Core} from "../../common/rpc/RequestBuilder";
import {Type as TypeProto} from "grakn-protocol/common/concept_pb";

export class EntityTypeImpl extends ThingTypeImpl implements EntityType {

    constructor(name: string, isRoot: boolean) {
        super(name, isRoot);
    }

    asRemote(transaction: GraknTransaction): RemoteEntityType {
        return new EntityTypeImpl.RemoteImpl((transaction as GraknTransaction.Extended), this.getLabel(), this.isRoot());
    }

}

export namespace EntityTypeImpl {

    export function of(entityTypeProto: TypeProto) {
        return new EntityTypeImpl(entityTypeProto.getLabel(), entityTypeProto.getRoot());
    }

    export class RemoteImpl extends ThingTypeImpl.RemoteImpl implements RemoteEntityType {

        constructor(transaction: GraknTransaction.Extended, label: Label, isRoot: boolean) {
            super(transaction, label, isRoot);
        }

        asRemote(transaction: GraknTransaction): RemoteEntityType {
            return this;
        }

        create(): Promise<Entity> {
            const request = Core.Type.EntityType.createReq(this.getLabel());
            return this.execute(request).then((res) => EntityImpl.of(res.getEntityTypeCreateRes().getEntity()));
        }

        async setSupertype(superEntityType: EntityType): Promise<void> {
            super.setSupertype(superEntityType);
        }

        getInstances(): Stream<Entity> {
            return super.getInstances() as Stream<Entity>;
        }

        getSubtypes(): Stream<EntityType> {
            return super.getSubtypes() as Stream<EntityType>;
        }

    }

}