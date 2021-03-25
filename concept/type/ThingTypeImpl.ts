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

import {RemoteThingType, ThingType} from "../../api/concept/type/ThingType";
import {TypeImpl} from "./TypeImpl";
import {Type as TypeProto} from "grakn-protocol/common/concept_pb";
import {GraknTransaction} from "../../api/GraknTransaction";
import {Label} from "../../common/Label";
import {EntityTypeImpl} from "./EntityTypeImpl";
import {RelationTypeImpl} from "./RelationTypeImpl";
import {AttributeTypeImpl} from "./AttributeTypeImpl";
import {ErrorMessage} from "../../common_old/errors/ErrorMessage";
import BAD_ENCODING = ErrorMessage.Concept.BAD_ENCODING;
import {GraknClientError} from "../../common_old/errors/GraknClientError";
import {Stream} from "../../common/util/Stream";
import {Thing} from "../../api/concept/thing/Thing";
import {AttributeType} from "../../api/concept/type/AttributeType";
import {RoleType} from "../../api/concept/type/RoleType";

export class ThingTypeImpl extends TypeImpl implements ThingType {

    constructor(name: string, isRoot: boolean) {
        super(Label.of(name), isRoot);
    }

    asRemote(transaction: GraknTransaction): RemoteThingType {
        return undefined;
    }

}

export namespace ThingTypeImpl {

    export function of(thingTypeProto: TypeProto) {
        switch (thingTypeProto.getEncoding()) {
            case TypeProto.Encoding.ENTITY_TYPE:
                return EntityTypeImpl.of(thingTypeProto);
            case TypeProto.Encoding.RELATION_TYPE:
                return RelationTypeImpl.of(thingTypeProto);
            case TypeProto.Encoding.ATTRIBUTE_TYPE:
                return AttributeTypeImpl.of(thingTypeProto);
            case TypeProto.Encoding.THING_TYPE:
                return new ThingTypeImpl(thingTypeProto.getLabel(), thingTypeProto.getRoot());
            default:
                throw new GraknClientError(BAD_ENCODING.message(thingTypeProto.getEncoding()));
        }
    }

    export class RemoteImpl extends TypeImpl.RemoteImpl implements RemoteThingType {

        constructor(transaction: GraknTransaction.Extended, label: Label, isRoot: boolean) {
            super(transaction, label, isRoot);
        }

        getInstances(): Stream<Thing> {
            return undefined;
        }

        getOwns(): Stream<AttributeType>;
        getOwns(valueType: AttributeType.ValueType): Stream<AttributeType>;
        getOwns(keysOnly: boolean): Stream<AttributeType>;
        getOwns(valueType: AttributeType.ValueType, keysOnly: boolean): Stream<AttributeType>;
        getOwns(valueType?: AttributeType.ValueType | boolean, keysOnly?: boolean): Stream<AttributeType> {
            return undefined;
        }

        getPlays(): Stream<RoleType> {
            return undefined;
        }

        setAbstract(): Promise<void> {
            return Promise.resolve(undefined);
        }

        setOwns(attributeType: AttributeType): Promise<void>;
        setOwns(attributeType: AttributeType, isKey: boolean): Promise<void>;
        setOwns(attributeType: AttributeType, overriddenType: AttributeType): Promise<void>;
        setOwns(attributeType: AttributeType, overriddenType: AttributeType, isKey: boolean): Promise<void>;
        setOwns(attributeType: AttributeType, isKey?: boolean | AttributeType, isKey?: boolean): Promise<void> {
            return Promise.resolve(undefined);
        }

        setPlays(role: RoleType): Promise<void>;
        setPlays(role: RoleType, overriddenType: RoleType): Promise<void>;
        setPlays(role: RoleType, overriddenType?: RoleType): Promise<void> {
            return Promise.resolve(undefined);
        }

        unsetAbstract(): Promise<void> {
            return Promise.resolve(undefined);
        }

        unsetOwns(attributeType: AttributeType): Promise<void> {
            return Promise.resolve(undefined);
        }

        unsetPlays(role: RoleType): Promise<void> {
            return Promise.resolve(undefined);
        }

    }

}