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


import {RemoteThing, Thing} from "../../api/concept/thing/Thing";
import {ConceptImpl} from "../ConceptImpl";
import {GraknTransaction} from "../../api/GraknTransaction";
import {Concept} from "../../api/concept/Concept";
import {ThingType} from "../../api/concept/type/ThingType";
import {GraknClientError} from "../../common_old/errors/GraknClientError";
import {EntityImpl} from "./EntityImpl";
import {ErrorMessage} from "../../common_old/errors/ErrorMessage";
import {RelationImpl} from "./RelationImpl";
import {AttributeImpl} from "./AttributeImpl";
import {Stream} from "../../common/util/Stream";
import {Attribute} from "../../api/concept/thing/Attribute";
import {AttributeType} from "../../api/concept/type/AttributeType";
import {Thing as ThingProto, Type as TypeProto} from "grakn-protocol/common/concept_pb";
import {Transaction as TransactionProto} from "grakn-protocol/common/transaction_pb";
import {Core} from "../../common/rpc/RequestBuilder";
import {RoleType} from "../../api/concept/type/RoleType";
import {RoleTypeImpl} from "../type/RoleTypeImpl";
import {Relation} from "../../api/concept/thing/Relation";
import BAD_ENCODING = ErrorMessage.Concept.BAD_ENCODING;

export abstract class ThingImpl extends ConceptImpl implements Thing {
    private _iid: string;

    constructor(iid: string) {
        super();
        if (!iid) throw new GraknClientError(ErrorMessage.Concept.MISSING_IID.message());
        this._iid = iid;
    }

    abstract asRemote(transaction: GraknTransaction): RemoteThing;

    equals(concept: Concept): boolean {
        if (concept.isType()) return false;
        else return (concept as Thing).getIID() === this._iid;
    }

    getIID(): string {
        return this._iid;
    }

    abstract getType(): ThingType;

}

export namespace ThingImpl {

    export function of(thingProto: ThingProto) {
        switch (thingProto.getType().getEncoding()) {
            case TypeProto.Encoding.ENTITY_TYPE:
                return EntityImpl.of(thingProto);
            case TypeProto.Encoding.RELATION_TYPE:
                return RelationImpl.of(thingProto);
            case TypeProto.Encoding.ATTRIBUTE_TYPE:
                return AttributeImpl.of(thingProto);
            default:
                throw new GraknClientError(BAD_ENCODING.message(thingProto.getType().getEncoding()));
        }
    }

    export abstract class RemoteImpl extends ThingImpl implements RemoteThing {

        private _transaction: GraknTransaction.Extended;

        constructor(transaction: GraknTransaction.Extended, iid: string) {
            super(iid);
            this._transaction = transaction;
        }

        abstract asRemote(transaction: GraknTransaction): RemoteThing;

        abstract getType(): ThingType;

        async delete(): Promise<void> {
            const request = Core.Thing.deleteReq(this.getIID());
            await this.execute(request);
        }

        getHas(onlyKey: boolean): Stream<Attribute<AttributeType.ValueClass>>;
        getHas(attributeType: AttributeType.Boolean): Stream<AttributeType.Boolean>;
        getHas(attributeType: AttributeType.Long): Stream<AttributeType.Long>;
        getHas(attributeType: AttributeType.Double): Stream<AttributeType.Double>;
        getHas(attributeType: AttributeType.String): Stream<AttributeType.String>;
        getHas(attributeType: AttributeType.DateTime): Stream<AttributeType.DateTime>;
        getHas(): Stream<Attribute<AttributeType.ValueClass>>;
        getHas(attributeTypes: AttributeType[]): Stream<Attribute<AttributeType.ValueClass>>;

        getHas(onlyKey?: boolean | AttributeType.Boolean | AttributeType.Long | AttributeType.Double | AttributeType.String | AttributeType.DateTime | AttributeType[]): Stream<Attribute<AttributeType.ValueClass>> | Stream<BooleanAttribute> | Stream<LongAttribute> | Stream<DoubleAttribute> | Stream<StringAttribute> | Stream<DateTimeAttribute> {
            return undefined;
        }

        getPlaying(): Stream<RoleType> {
            const request = Core.Thing.getPlayingReq(this.getIID());
            return this.stream(request)
                .flatMap((resPart) => Stream.array(resPart.getThingGetPlayingResPart().getRoleTypesList()))
                .map((res) => RoleTypeImpl.of(res));
        }

        getRelations(roleTypes?: RoleType[]): Stream<Relation> {
            if (!roleTypes) roleTypes = [];
            const request = Core.Thing.getRelationsReq(this.getIID(), roleTypes.map((roleType) => roleType.proto()));
            return this.stream(request)
                .flatMap((resPart) => Stream.array(resPart.getThingGetRelationsResPart().getRelationsList()))
                .map((res) => RelationImpl.of(res));
        }

        async isDeleted(): Promise<boolean> {
            return !(await this._transaction.concepts().getThing(this.getIID()));
        }

        async isInferred(): Promise<boolean> {
            const request = Core.Thing.isInferredReq(this.getIID());
            return (await this.execute(request)).getThingIsInferredRes().getInferred();
        }

        async setHas(attribute: Attribute<AttributeType.ValueClass>): Promise<void> {
            const request = Core.Thing.setHasReq(this.getIID(), attribute.proto());
            await this.execute(request);
        }

        async unsetHas(attribute: Attribute<AttributeType.ValueClass>): Promise<void> {
            const request = Core.Thing.unsetHasReq(this.getIID(), attribute.proto());
            await this.execute(request);
        }

        protected async execute(request: TransactionProto.Req): Promise<ThingProto.Res> {
            return (await this._transaction.rpcExecute(request)).getThingRes();
        }

        protected stream(request: TransactionProto.Req): Stream<ThingProto.ResPart> {
            return this._transaction.rpcStream(request).map((res) => res.getThingResPart());
        }

    }

}