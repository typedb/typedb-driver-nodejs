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

import {RemoteRoleType, RoleType} from "../../api/concept/type/RoleType";
import {RemoteTypeImpl, TypeImpl} from "./TypeImpl";
import {Type as TypeProto} from "grakn-protocol/common/concept_pb";
import {Label} from "../../common/Label";
import {GraknTransaction} from "../../api/GraknTransaction";
import {Stream} from "../../common/util/Stream";
import {ThingType} from "../../api/concept/type/ThingType";
import {RelationType} from "../../api/concept/type/RelationType";

export class RoleTypeImpl extends TypeImpl implements RoleType {

    constructor(scope: string, label: string, isRoot: boolean) {
        super(Label.scoped(scope, label), isRoot);
    }

    asRemote(transaction: GraknTransaction): RemoteRoleType {
        return new RoleTypeImpl.RemoteRoleTypeImpl((transaction as GraknTransaction.Extended), this.getLabel(), this.isRoot());
    }

}

export namespace RoleTypeImpl {

    export function of(typeProto: TypeProto) {
        return new RoleTypeImpl(typeProto.getScope(), typeProto.getLabel(), typeProto.getRoot());
    }

    export class RemoteRoleTypeImpl extends RemoteTypeImpl implements RemoteRoleType {

        constructor(transaction: GraknTransaction.Extended, label: Label, isRoot: boolean) {
            super(transaction, label, isRoot);
        }

        asRemote(transaction: GraknTransaction): RemoteRoleType {
            return this;
        }

        getSupertype(): Promise<RoleType> {
            return null;
        }

        getSupertypes(): Stream<RoleType> {
            return null;
        }

        getSubtypes(): Stream<RoleType> {
            return null;
        }

        getRelationType(): Promise<RelationType> {
            return null;
        }

        getRelationTypes(): Stream<RelationType> {
            return null;
        }

        getPlayers(): Stream<ThingType> {
            return null;
        }
    }

}