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

import { RequestBuilder } from "../../../common/rpc/RequestBuilder";
import { Stream } from "../../../common/util/Stream";
import { TypeDBTransaction } from "../../connection/TypeDBTransaction";
import { Attribute } from "../thing/Attribute";
import { Entity } from "../thing/Entity";
import { Relation } from "../thing/Relation";
import { Thing } from "../thing/Thing";
import { AttributeType } from "./AttributeType";
import { EntityType } from "./EntityType";
import { RelationType } from "./RelationType";
import { ThingType } from "./ThingType";
import { Type } from "./Type";

export interface RoleType extends Type {

    asRemote(transaction: TypeDBTransaction): RoleType.Remote;
}

export namespace RoleType {

    export interface Remote extends RoleType, Type.Remote {

        asRemote(transaction: TypeDBTransaction): RoleType.Remote;

        asType(): Type.Remote;

        asThingType(): ThingType.Remote;

        asEntityType(): EntityType.Remote;

        asAttributeType(): AttributeType.Remote;

        asRelationType(): RelationType.Remote;

        asRoleType(): RoleType.Remote;

        asThing(): Thing.Remote;

        asEntity(): Entity.Remote;

        asAttribute(): Attribute.Remote;

        asRelation(): Relation.Remote;

        getSupertype(): Promise<RoleType>;

        getSupertypes(): Stream<RoleType>;

        getSubtypes(): Stream<RoleType>;

        getRelationType(): Promise<RelationType>;

        getRelationTypes(): Stream<RelationType>;

        getPlayerTypes(): Stream<ThingType>;

        getPlayerTypesExplicit(): Stream<ThingType>;

        getRelationInstances(): Stream<Relation>;

        getRelationInstancesExplicit(): Stream<Relation>;

        getPlayerInstances(): Stream<Thing>;

        getPlayerInstancesExplicit(): Stream<Thing>;
    }

    export function proto(roleType: RoleType) {
        return RequestBuilder.Type.RoleType.protoRoleType(roleType.label, Type.encoding(roleType));
    }
}
