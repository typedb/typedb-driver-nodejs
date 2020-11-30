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

import { Thing, RemoteThing } from "../Thing";
import { Attribute } from "../Attribute";
import { Type } from "../../Type/Type";
import { QueryIterator } from "../../Concept";
import { AttributeType } from "../../Type/AttributeType";
import { RoleType } from "../../Type/RoleType";
import ConceptProto from "graknlabs-grpc-protocol/protobuf/concept_pb";
import { ThingTypeImpl } from "../../Type/Impl/ThingTypeImpl";
import { Grakn } from "../../../Grakn";
import Transaction = Grakn.Transaction;

export abstract class ThingImpl implements Thing {
    private readonly _iid: string;

    // TODO: all error messages should be extracted into ErrorMessage class or namespace
    protected constructor(iid: string) {
        if (!iid) {
            throw "IID Missing"
        }
        this._iid = iid;
    }

    getIID(): string {
        return this._iid;
    }

    isRemote(): boolean {
        return false;
    }

    toString(): string {
        return `${ThingImpl.name}[iid:${this._iid}]`;
    }

    abstract asRemote(transaction: Transaction): RemoteThing;
}

export abstract class RemoteThingImpl implements RemoteThing {
    private readonly _iid: string;
    private readonly _transaction: Transaction;

    protected constructor(transaction: Transaction, iid: string) {
        if (!transaction) throw "Transaction Missing"
        if (!iid) throw "IID Missing"
        this._iid = iid;
        this._transaction = transaction;
    }

    getType(): ThingTypeImpl {
        throw "Not implemented yet";
    }

    isInferred(): boolean {
        throw "Not implemented yet";
    }

    abstract asRemote(transaction: Transaction): RemoteThing;

    delete(): void {
        throw "Not implemented yet";
    }

    getIID(): string {
        return this._iid;
    }

    isDeleted(): boolean {
        return false;
    }

    isRemote(): boolean {
        return true;
    }

    getHas(onlyKey: boolean): QueryIterator;
    getHas(attributeType: Type): QueryIterator;
    getHas(attributeType: Type): QueryIterator;
    getHas(attributeType: Type): QueryIterator;
    getHas(attributeType: Type): QueryIterator;
    getHas(attributeType: Type): QueryIterator;
    getHas(attributeTypes: AttributeType[]): QueryIterator;
    getHas(onlyKey: boolean | Type | AttributeType[]): QueryIterator {
        return new QueryIterator();
    }

    getPlays(): QueryIterator {
        return new QueryIterator();
    }

    getRelations(roleTypes: RoleType[]): QueryIterator {
        return new QueryIterator();
    }

    setHas(attribute: Attribute<AttributeType.ValueClass>): void {
        throw "Not implemented yet";
    }

    unsetHas(attribute: Attribute<AttributeType.ValueClass>): void {
        throw "Not implemented yet";
    }

    protected get transaction(): Transaction {
        return this._transaction;
    }

    toString(): string {
        return `${RemoteThingImpl.name}[iid:${this._iid}]`;
    }
}
