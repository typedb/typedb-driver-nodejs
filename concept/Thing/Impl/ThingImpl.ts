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
import { Attribute, BooleanAttribute, DateTimeAttribute, DoubleAttribute, LongAttribute, StringAttribute } from "../Attribute";
import { Type } from "../../Type/Type";
import { AttributeType, BooleanAttributeType, DateTimeAttributeType, DoubleAttributeType, LongAttributeType, StringAttributeType } from "../../Type/AttributeType";
import { RoleType } from "../../Type/RoleType";
import ConceptProto from "graknlabs-grpc-protocol/protobuf/concept_pb";
import { ThingTypeImpl } from "../../Type/Impl/ThingTypeImpl";
import { Grakn } from "../../../Grakn";
import Transaction = Grakn.Transaction;
import { Stream } from "../../../rpc/Stream";
import { RoleTypeImpl } from "../../Type/Impl/RoleTypeImpl";
import { RelationImpl } from "./RelationImpl";
import { TypeImpl } from "../../Type/Impl/TypeImpl";
import TransactionProto from "graknlabs-grpc-protocol/protobuf/transaction_pb";
import { ConceptProtoReader } from "../../Proto/ConceptProtoReader";
import { ConceptProtoBuilder } from "../../Proto/ConceptProtoBuilder";
import { RPCTransaction } from "../../../rpc/RPCTransaction";

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
    private readonly _rpcTransaction: RPCTransaction;

    protected constructor(transaction: Transaction, iid: string) {
        if (!transaction) throw "Transaction Missing"
        if (!iid) throw "IID Missing"
        this._iid = iid;
        this._rpcTransaction = transaction as RPCTransaction;
    }

    getIID(): string {
        return this._iid;
    }

    async getType(): Promise<ThingTypeImpl> {
        const response = await this.execute(new ConceptProto.Thing.Req().setThingGetTypeReq(new ConceptProto.Thing.GetType.Req()));
        return ConceptProtoReader.type(response.getThingGetTypeRes().getThingType()) as ThingTypeImpl
    }

    async isInferred(): Promise<boolean> {
        return (await this.execute(new ConceptProto.Thing.Req().setThingIsInferredReq(new ConceptProto.Thing.IsInferred.Req()))).getThingIsInferredRes().getInferred();
    }

    isRemote(): boolean {
        return true;
    }

    getHas(onlyKey: boolean): Stream<Attribute<any>>;
    getHas(attributeType: BooleanAttributeType): Stream<BooleanAttribute>;
    getHas(attributeType: LongAttributeType): Stream<LongAttribute>;
    getHas(attributeType: DoubleAttributeType): Stream<DoubleAttribute>;
    getHas(attributeType: StringAttributeType): Stream<StringAttribute>;
    getHas(attributeType: DateTimeAttributeType): Stream<DateTimeAttribute>;
    getHas(attributeTypes: AttributeType[]): Stream<Attribute<any>>;
    getHas(arg: boolean | Type | AttributeType[]): Stream<Attribute<any>> | Stream<BooleanAttribute> | Stream<LongAttribute>
        | Stream<DoubleAttribute> | Stream<StringAttribute> | Stream<DateTimeAttribute> {
        throw "Not implemented yet";
    }

    getPlays(): Stream<RoleTypeImpl> {
        throw "Not implemented yet";
    }

    getRelations(roleTypes: RoleType[]): Stream<RelationImpl> {
        throw "Not implemented yet";
    }

    setHas(attribute: Attribute<AttributeType.ValueClass>): Promise<void> {
        throw "Not implemented yet";
    }

    unsetHas(attribute: Attribute<AttributeType.ValueClass>): Promise<void> {
        throw "Not implemented yet";
    }

    delete(): Promise<void> {
        throw "Not implemented yet";
    }

    isDeleted(): Promise<boolean> {
        throw "Not implemented yet";
    }

    protected get transaction(): Transaction {
        return this._rpcTransaction;
    }

    protected typeStream(method: ConceptProto.Thing.Req, typeGetter: (res: ConceptProto.Thing.Res) => ConceptProto.Type[]): Stream<TypeImpl> {
        const request = new TransactionProto.Transaction.Req().setThingReq(method.setIid(this._iid));
        return (this._rpcTransaction).stream(request, res => typeGetter(res.getThingRes()).map(ConceptProtoReader.type));
    }

    protected thingStream(method: ConceptProto.Thing.Req, thingGetter: (res: ConceptProto.Thing.Res) => ConceptProto.Thing[]): Stream<ThingImpl> {
        const request = new TransactionProto.Transaction.Req().setThingReq(method.setIid(this._iid));
        return this._rpcTransaction.stream(request, res => thingGetter(res.getThingRes()).map(ConceptProtoReader.thing));
    }

    protected execute(method: ConceptProto.Thing.Req): Promise<ConceptProto.Thing.Res> {
        const request = new TransactionProto.Transaction.Req().setThingReq(method.setIid(this._iid));
        return this._rpcTransaction.execute(request, res => res.getThingRes());
    }

    toString(): string {
        return `${RemoteThingImpl.name}[iid:${this._iid}]`;
    }

    abstract asRemote(transaction: Transaction): RemoteThing;
}
