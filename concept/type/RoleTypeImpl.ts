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
import {RemoteRoleType, RoleType} from "../../api/concept/type/RoleType";
import {ThingType} from "../../api/concept/type/ThingType";
import {RelationType} from "../../api/concept/type/RelationType";
// import {RelationTypeImpl, ThingTypeImpl, TypeImpl} from "../../dependencies_internal";
import {TypeImpl} from "./TypeImpl";
import {RelationTypeImpl} from "./RelationTypeImpl";
import {Stream} from "../../common/util/Stream";
import {Label} from "../../common/Label";
import {Core} from "../../common/rpc/RequestBuilder";
import {Type as TypeProto} from "grakn-protocol/common/concept_pb";
import {ThingTypeImpl} from "./ThingTypeImpl";

export class RoleTypeImpl extends TypeImpl implements RoleType {

    constructor(scope: string, label: string, isRoot: boolean) {
        super(Label.scoped(scope, label), isRoot);
    }

    asRemote(transaction: GraknTransaction): RemoteRoleType {
        return new RoleTypeImpl.RemoteImpl((transaction as GraknTransaction.Extended), this.getLabel(), this.isRoot());
    }

}

export namespace RoleTypeImpl {

    export function of(typeProto: TypeProto) {
        return new RoleTypeImpl(typeProto.getScope(), typeProto.getLabel(), typeProto.getRoot());
    }

    export class RemoteImpl extends TypeImpl.RemoteImpl implements RemoteRoleType {

        constructor(transaction: GraknTransaction.Extended, label: Label, isRoot: boolean) {
            super(transaction, label, isRoot);
        }

        getSubtypes(): Stream<RoleType> {
            const request = Core.Type.getSubtypesReq(this.getLabel());
            return this.stream(request)
                .flatMap((resPart) => Stream.array(resPart.getTypeGetSubtypesResPart().getTypesList()))
                .map((typeProto) => of(typeProto));
        }

        getSupertype(): Promise<RoleType> {
            const request = Core.Type.getSupertypeReq(this.getLabel());
            return this.execute(request).then((res) => of(res.getTypeGetSupertypeRes().getType()));
        }

        getSupertypes(): Stream<RoleType> {
            const request = Core.Type.getSupertypesReq(this.getLabel());
            return this.stream(request)
                .flatMap((resPart) => Stream.array(resPart.getTypeGetSupertypesResPart().getTypesList()))
                .map((typeProto) => of(typeProto));
        }

        asRemote(transaction: GraknTransaction): RemoteRoleType {
            return this;
        }

        getRelationType(): Promise<RelationType> {
            return this._transaction.concepts().getRelationType(this.getLabel().scope());
        }

        getRelationTypes(): Stream<RelationType> {
            const request = Core.Type.RoleType.getRelationTypesReq(this.getLabel());
            return this.stream(request)
                .flatMap((resPart) => Stream.array(resPart.getRoleTypeGetRelationTypesResPart().getRelationTypesList()))
                .map((res) => RelationTypeImpl.of(res));
        }

        getPlayers(): Stream<ThingType> {
            const request = Core.Type.RoleType.getPlayersReq(this.getLabel());
            return this.stream(request)
                .flatMap((resPart) => Stream.array(resPart.getRoleTypeGetPlayersResPart().getThingTypesList()))
                .map((thing) => ThingTypeImpl.of(thing));
        }

        async isDeleted(): Promise<boolean> {
            return !this.getRelationType() ||
                (!(await this.getRelationType()).asRemote(this._transaction).getRelates(this.getLabel().name()))
        }
    }

}