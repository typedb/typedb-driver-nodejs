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

import { ThingImpl, RemoteThingImpl } from "./ThingImpl";
import { Relation, RemoteRelation } from "../Relation";
import { Thing } from "../Thing";
import { RelationTypeImpl } from "../../Type/Impl/RelationTypeImpl";
import { RoleType } from "../../Type/RoleType";
import { QueryIterator } from "../../Concept";
import { Grakn } from "../../../Grakn";
import Transaction = Grakn.Transaction;
import ConceptProto from "graknlabs-grpc-protocol/protobuf/concept_pb";

export class RelationImpl extends ThingImpl implements Relation {
    protected constructor(iid: string) {
        super(iid)
    }

    static of(protoThing: ConceptProto.Thing): RelationImpl {
        return new RelationImpl(protoThing.getIid_asB64());
    }

    asRemote(transaction: Transaction): RemoteRelationImpl {
        return new RemoteRelationImpl(transaction, this.getIID());
    }
}

export class RemoteRelationImpl extends RemoteThingImpl implements RemoteRelation {
    constructor(transaction: Transaction, iid: string) {
        super(transaction, iid);
    }

    asRemote(transaction: Transaction): RemoteRelationImpl {
        return new RemoteRelationImpl(transaction, this.getIID());
    }

    getType(): RelationTypeImpl {
        throw "As yet unimplemented"
    }

    getPlayersByRoleType(): [RoleType, Thing[]] {
        throw "Not implemented"
    }

    getPlayers(roleTypes: RoleType[]): QueryIterator {
        return new QueryIterator();
    }

    addPlayer(roleType: RoleType, player: Thing) {
        throw "Not implemented";
    }

    removePlayer(roleType: RoleType, player: Thing) {
        throw "Not implemented";
    }
}
