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

import { TypeImpl, RemoteTypeImpl } from "./TypeImpl";
import { ThingType, RemoteThingType } from "../ThingType";
import { AttributeType } from "../AttributeType";
import { RoleType } from "../RoleType";
import { Grakn } from "../../../Grakn";
import Transaction = Grakn.Transaction;
import ConceptProto from "graknlabs-grpc-protocol/protobuf/concept_pb";
import TypeProto = ConceptProto.Type;
import assert from "assert";
import { Stream } from "../../../rpc/Stream";
import { Thing } from "../../Thing/Thing";

export class ThingTypeImpl extends TypeImpl implements ThingType {
    protected constructor(label: string, isRoot: boolean) {
        super(label, isRoot);
    }

    asRemote(transaction: Transaction): RemoteThingType {
        return new RemoteThingTypeImpl(transaction, this.getLabel(), this.isRoot())
    }

    static of(typeProto: TypeProto): ThingTypeImpl {
        switch (typeProto.getEncoding()) {
            case TypeProto.ENCODING.ENTITY_TYPE:
                throw "no" // TODO: resolve circular ref
                // return EntityTypeImpl.of(typeProto);
            case TypeProto.ENCODING.RELATION_TYPE:
                throw "no" // TODO: resolve circular ref
                // return RelationTypeImpl.of(typeProto);
            case TypeProto.ENCODING.ATTRIBUTE_TYPE:
                throw "no" // TODO: resolve circular ref
                // return AttributeTypeImpl.of(typeProto);
            case TypeProto.ENCODING.THING_TYPE:
                assert(typeProto.getRoot());
                return new ThingTypeImpl(typeProto.getLabel(), typeProto.getRoot());
            default:
                throw "Bad encoding";
        }
    }
}

export class RemoteThingTypeImpl extends RemoteTypeImpl implements RemoteThingType {
    constructor(transaction: Transaction, label: string, isRoot: boolean) {
        super(transaction, label, isRoot);
    }

    getSupertype(): ThingTypeImpl {
        throw "Behaviour not yet implemented";
    }

    getSupertypes(): Stream<any> {
        throw "Not implemented yet";
    }

    getSubtypes(): Stream<any> {
        throw "Not implemented yet";
    }

    getInstances(): Stream<Thing> {
        const request = new ConceptProto.Type.Req()
            .setThingTypeGetInstancesReq(new ConceptProto.ThingType.GetInstances.Req());
        return this.thingStream(request, res => res.getThingTypeGetInstancesRes().getThingList());
    }

    setAbstract(): void {
        throw "Not implemented yet";
    }

    unsetAbstract(): void {
        throw "Not implemented yet";
    }

    getPlays(): Stream<any> {
        throw "Not implemented yet";
    }

    getOwns(): Stream<any>;
    getOwns(keysOnly: boolean): Stream<any>;
    getOwns(keysOnly?: boolean): Stream<any> {
        throw "Not implemented yet";
    }

    setOwns(attributeType: AttributeType): void;
    setOwns(attributeType: AttributeType, isKey: boolean): void;
    setOwns(attributeType: AttributeType, overriddenType: AttributeType): void;
    setOwns(attributeType: AttributeType, isKey: boolean, otherType: AttributeType): void;
    setOwns(attributeType: AttributeType, isKey?: boolean | AttributeType, otherType?: AttributeType): void {
    }

    setPlays(role: RoleType): void;
    setPlays(role: RoleType, overriddenType: RoleType): void;
    setPlays(role: RoleType, overriddenType?: RoleType): void {
        throw "Not implemented yet";
    }

    unsetOwns(attributeType: AttributeType): void {
        throw "Not implemented yet";
    }

    unsetPlays(role: RoleType): void {
        throw "Not implemented yet";
    }

    asRemote(transaction: Transaction): RemoteThingTypeImpl {
        return new RemoteThingTypeImpl(transaction, this.getLabel(), this.isRoot())
    }
}
