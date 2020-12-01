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

import { ThingTypeImpl, RemoteThingTypeImpl } from "./ThingTypeImpl";
import { Relation } from "../../Thing/Relation";
import { RelationType, RemoteRelationType } from "../RelationType";
import { RoleType } from "../RoleType";
import { Grakn } from "../../../Grakn";
import Transaction = Grakn.Transaction;
import { Type as TypeProto } from "graknlabs-grpc-protocol/protobuf/concept_pb";
import { Stream } from "../../../rpc/Stream";
import { RelationImpl } from "../../Thing/Impl/RelationImpl";
import { RoleTypeImpl } from "./RoleTypeImpl";

export class RelationTypeImpl extends ThingTypeImpl implements RelationType {
    protected constructor(label: string, isRoot: boolean) {
        super(label, isRoot);
    }

    static of(typeProto: TypeProto): RelationTypeImpl {
        return new RelationTypeImpl(typeProto.getLabel(), typeProto.getRoot());
    }

    asRemote(transaction: Transaction): RemoteRelationTypeImpl {
        return new RemoteRelationTypeImpl(transaction, this.getLabel(), this.isRoot())
    }
}

export class RemoteRelationTypeImpl extends RemoteThingTypeImpl implements RemoteRelationType {
    constructor(transaction: Transaction, label: string, isRoot: boolean) {
        super(transaction, label, isRoot);
    }

    getInstances(): Stream<RelationImpl> {
        throw "Not yet implemented";
    }

    asRemote(transaction: Transaction): RemoteRelationTypeImpl {
        return new RemoteRelationTypeImpl(transaction, this.getLabel(), this.isRoot())
    }

    getSupertype(): Promise<RelationTypeImpl> {
        throw "Not yet implemented";
    }

    getSupertypes(): Stream<RelationTypeImpl> {
        throw "Not yet implemented";
    }

    getSubtypes(): Stream<RelationTypeImpl> {
        throw "Not yet implemented";
    }

    setSupertype(superRelationType: RelationType): Promise<void> {
        throw "Not yet implemented";
    }

    create(): Promise<RelationImpl> {
        throw "As yet unimplemented"
    }

    getRelates(roleLabel: string): Promise<RoleTypeImpl>;
    getRelates(): Stream<RoleTypeImpl>;
    getRelates(roleLabel?: string): Promise<RoleTypeImpl> | Stream<RoleTypeImpl> {
        throw "Not yet implemented";
    }

    setRelates(roleLabel: string): Promise<void>;
    setRelates(roleLabel: string, overriddenLabel: string): Promise<void>;
    setRelates(roleLabel: string, overriddenLabel?: string): Promise<void> {
        throw "Not yet implemented";
    }

    unsetRelates(roleLabel: string): Promise<void> {
        throw "Not yet implemented";
    }
}
