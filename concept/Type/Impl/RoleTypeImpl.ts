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
import { RoleType, RemoteRoleType } from "../RoleType";
import { Type as TypeProto } from "graknlabs-grpc-protocol/protobuf/concept_pb";
import { Grakn } from "../../../Grakn";
import Transaction = Grakn.Transaction;
import { RelationTypeImpl } from "./RelationTypeImpl";
import { Stream } from "../../../rpc/Stream";

export class RoleTypeImpl extends ThingTypeImpl implements RoleType {
    private readonly _scope: string;

    protected constructor(label: string, scope: string, isRoot: boolean) {
        super(label, isRoot);
        this._scope = scope;
    }

    static of(typeProto: TypeProto): RoleTypeImpl {
        return new RoleTypeImpl(typeProto.getLabel(), typeProto.getScope(), typeProto.getRoot());
    }

    getScope(): string {
        return this._scope;
    }

    asRemote(transaction: Transaction): RemoteRoleType {
        return new RemoteRoleTypeImpl(transaction, this.getLabel(), this.getScope(), this.isRoot());
    }

    toString(): string {
        return `${RoleTypeImpl.name}[label: ${this._scope ? `${this._scope}:${this.getLabel()}` : this.getLabel()}]`;
    }
}

export class RemoteRoleTypeImpl extends RemoteThingTypeImpl implements RemoteRoleType {
    private readonly _scope: string;

    constructor(transaction: Transaction, label: string, scope: string, isRoot: boolean) {
        super(transaction, label, isRoot);
        this._scope = scope;
    }

    getSupertype(): RoleTypeImpl {
        throw "Not yet implemented"
    }

    getSupertypes(): Stream<any> {
        throw "Not yet implemented";
    }

    getSubtypes(): Stream<any> {
        throw "Not yet implemented";
    }

    getScope(): string {
        return this._scope;
    }

    asRemote(transaction: Transaction): RemoteRoleTypeImpl {
        return new RemoteRoleTypeImpl(transaction, this.getLabel(), this._scope, this.isRoot())
    }

    getRelation(): RelationTypeImpl {
        throw "Not yet implemented";
    }

    getRelations(): Stream<any> {
        throw "Not yet implemented";
    }

    getPlayers(): Stream<any> {
        throw "Not yet implemented";
    }

    toString(): string {
        return `${RemoteRoleTypeImpl.name}[label: ${this._scope ? `${this._scope}:${this.getLabel()}` : this.getLabel()}]`;
    }
}
