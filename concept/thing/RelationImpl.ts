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

import {ThingImpl} from "./ThingImpl";
import {Relation, RemoteRelation} from "../../api/concept/thing/Relation";
import {Thing as ThingProto, Type as TypeProto} from "grakn-protocol/common/concept_pb";
import {RelationType} from "../../api/concept/type/RelationType";
import {GraknTransaction} from "../../api/GraknTransaction";
import {Bytes} from "../../dependencies_internal";
import {EntityTypeImpl} from "../type/EntityTypeImpl";
import {EntityImpl} from "./EntityImpl";
import {RelationTypeImpl} from "../type/RelationTypeImpl";

export class RelationImpl extends ThingImpl implements Relation {

    private _type: RelationType;

    constructor(iid: string, type: RelationType) {
        super(iid);
        this._type = type;
    }

    asRemote(transaction: GraknTransaction): RemoteRelation {
        return new RelationImpl.RemoteImpl((transaction as GraknTransaction.Extended), this.getIID(), this.getType());
    }

    getType(): RelationType {
        return this._type;
    }

}

export namespace RelationImpl {

    export function of(thingProto: ThingProto) {
        let iid = Bytes.bytesToHexString(thingProto.getIid_asU8());
        return new RelationImpl(iid, RelationTypeImpl.of(thingProto.getType()));
    }

    export class RemoteImpl extends ThingImpl.RemoteImpl implements RemoteRelation {

        private _type: RelationType;

        constructor(transaction: GraknTransaction.Extended, iid: string, type: RelationType) {
            super(transaction, iid);
            this._type = type;
        }

        getType(): RelationType {
            return this._type;
        }

        addPlayer(roleType: RoleType, player: Thing): Promise<void> {
            return Promise.resolve(undefined);
        }

        asRemote(transaction: GraknTransaction): RemoteThing;
        asRemote(transaction: GraknTransaction): RemoteConcept;
        asRemote(transaction: GraknTransaction): RemoteRelation;
        asRemote(transaction: GraknTransaction): RemoteThing | RemoteConcept | RemoteRelation {
            return undefined;
        }

        getPlayers(): Stream<Thing>;
        getPlayers(roleTypes: RoleType[]): Stream<Thing>;
        getPlayers(roleTypes?: RoleType[]): Stream<Thing> {
            return undefined;
        }

        getPlayersByRoleType(): Promise<Map<RoleType, Thing[]>> {
            return Promise.resolve(undefined);
        }

        removePlayer(roleType: RoleType, player: Thing): Promise<void> {
            return Promise.resolve(undefined);
        }


    }

}