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

import { Type, RemoteType } from "../Type";
import { QueryIterator } from "../../Concept";
import ConceptProto from "graknlabs-grpc-protocol/protobuf/concept_pb";
import TransactionProto from "graknlabs-grpc-protocol/protobuf/transaction_pb";
import { ThingTypeImpl } from "./ThingTypeImpl";
import { Grakn } from "../../../Grakn";
import Transaction = Grakn.Transaction;
import { RPCTransaction } from "../../../rpc/RPCTransaction";
import { Stream } from "../../../rpc/Stream";
import { ThingImpl } from "../../Thing/Impl/ThingImpl";
import { ConceptProtoReader } from "../../Proto/ConceptProtoReader";

export abstract class TypeImpl implements Type {
    private readonly _label: string;
    private readonly _root: boolean;

    protected constructor(label: string, root: boolean) {
        if (!label) throw "Type Label missing.";

        this._label = label;
        this._root = root;
    }

    static of(typeProto: ConceptProto.Type): TypeImpl {
        switch (typeProto.getEncoding()) {
            case ConceptProto.Type.ENCODING.ROLE_TYPE:
                throw "no" // TODO: resolve circular reference
                // return RoleTypeImpl.of(typeProto);
            default:
                return ThingTypeImpl.of(typeProto);
        }
    }

    getLabel(): string {
        return this._label;
    }

    isRoot(): boolean {
        return this._root;
    }

    isRemote(): boolean {
        return false;
    }

    toString(): string {
        return `${TypeImpl.name}[label:${this._label}]`;
    }

    abstract asRemote(transaction: Transaction): RemoteType;
}

export abstract class RemoteTypeImpl implements RemoteType {
    private readonly _rpcTransaction: RPCTransaction;
    private _label: string;
    private readonly _isRoot: boolean;

    protected constructor(transaction: Transaction, label: string, isRoot: boolean) {
        if (!transaction) throw "Transaction Missing";
        if (!label) throw "IID Missing";
        this._rpcTransaction = transaction as RPCTransaction;
        this._label = label;
        this._isRoot = isRoot;
    }

    getLabel(): string {
        return this._label;
    }

    isRoot(): boolean {
        return this._isRoot;
    }

    isRemote(): boolean {
        return true;
    }

    setLabel(label: string): void {
        this._label = label;
        throw "Not implemented yet"; // TODO: issue RPC call
    }

    isAbstract(): boolean {
        throw "Not implemented yet";
    }

    delete(): void {
        throw "Not implemented yet";
    }

    isDeleted(): boolean {
        return false;
    }

    protected get transaction(): Transaction {
        return this._rpcTransaction;
    }

    toString(): string {
        return `${RemoteTypeImpl.name}[label:${this._label}]`;
    }

    protected thingStream(method: ConceptProto.Type.Req, thingGetter: (res: ConceptProto.Type.Res) => ConceptProto.Thing[]): Stream<ThingImpl> {
        const request = new TransactionProto.Transaction.Req()
            .setTypeReq(method.setLabel(this._label));
        return this._rpcTransaction.stream(request, res => thingGetter(res.getTypeRes()).map(ConceptProtoReader.thing));
    }

    protected execute(method: ConceptProto.Type.Req): Promise<ConceptProto.Type.Res> {
        const request = new TransactionProto.Transaction.Req()
            .setTypeReq(method.setLabel(this._label));
        return this._rpcTransaction.execute(request, res => res.getTypeRes());
    }

    abstract asRemote(transaction: Transaction): RemoteTypeImpl;
    abstract getSupertype(): TypeImpl;
    abstract getSubtypes(): QueryIterator;
    abstract getSupertypes(): QueryIterator;
}
