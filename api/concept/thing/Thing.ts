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

import {Concept, RemoteConcept} from "../Concept";
import {GraknTransaction} from "../../GraknTransaction";
import {RemoteThingType, ThingType} from "../type/ThingType";
import {
    Attribute,
    BooleanAttribute,
    DateTimeAttribute,
    DoubleAttribute,
    LongAttribute,
    StringAttribute
} from "./Attribute";
import {
    AttributeType,
    BooleanAttributeType,
    DateTimeAttributeType,
    DoubleAttributeType,
    LongAttributeType,
    StringAttributeType
} from "../type/AttributeType";
import {Stream} from "../../../common/util/Stream";
import {RoleType} from "../type/RoleType";
import {Relation} from "./Relation";

export interface Thing extends Concept {

    getIID(): string;

    getType(): ThingType;

    asRemote(transaction: GraknTransaction): RemoteThing;

}

export interface RemoteThing extends Thing, RemoteConcept {

    asRemote(transaction: GraknTransaction): RemoteThing;

    isInferred(): Promise<boolean>;

    setHas(attribute: Attribute<AttributeType.ValueClass>): Promise<void>;

    unsetHas(attribute: Attribute<AttributeType.ValueClass>): Promise<void>;

    getHas(onlyKey: boolean): Stream<Attribute<AttributeType.ValueClass>>;

    getHas(attributeType: BooleanAttributeType): Stream<BooleanAttribute>;

    getHas(attributeType: LongAttributeType): Stream<LongAttribute>;

    getHas(attributeType: DoubleAttributeType): Stream<DoubleAttribute>;

    getHas(attributeType: StringAttributeType): Stream<StringAttribute>;

    getHas(attributeType: DateTimeAttributeType): Stream<DateTimeAttribute>;

    getHas(): Stream<Attribute<AttributeType.ValueClass>>;

    getHas(attributeTypes: AttributeType[]): Stream<Attribute<AttributeType.ValueClass>>;

    getPlaying(): Stream<RoleType>;

    getRelations(): Stream<Relation>;

    getRelations(roleTypes: RoleType[]): Stream<Relation>;

}
