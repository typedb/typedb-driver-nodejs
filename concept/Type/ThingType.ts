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

import { AttributeType } from "./AttributeType";
import { RoleType } from "./RoleType";
import { RemoteType, Type } from "./Type";
import { Grakn } from "../../Grakn";
import Transaction = Grakn.Transaction;
import { Merge } from "../../common/utils";
import { Stream } from "../../rpc/Stream";
import { Thing } from "../Thing/Thing";

export interface ThingType extends Type {
    asRemote(transaction: Transaction): RemoteThingType;
}

export interface RemoteThingType extends Merge<RemoteType, ThingType> {
    getSupertype(): ThingType;
    getSupertypes(): Stream<any>;
    getSubtypes(): Stream<any>;
    getInstances(): Stream<Thing>;

    setLabel(label: string): void;

    setAbstract(): void;
    unsetAbstract(): void;

    setPlays(role: RoleType): void;
    setPlays(role: RoleType, overriddenType: RoleType): void;

    setOwns(attributeType: AttributeType): void;
    setOwns(attributeType: AttributeType, isKey: boolean): void;
    setOwns(attributeType: AttributeType, overriddenType: AttributeType): void;
    setOwns(attributeType: AttributeType, isKey: boolean, otherType: AttributeType): void;

    getPlays(): Stream<any>;
    getOwns(): Stream<any>;
    getOwns(valueType: AttributeType.ValueType): Stream<any>;
    getOwns(keysOnly: boolean): Stream<any>;
    getOwns(valueType: AttributeType.ValueType, keysOnly: boolean): Stream<any>;

    unsetPlays(role: RoleType): void;
    unsetOwns(attributeType: AttributeType): void;

    asRemote(transaction: Transaction): RemoteThingType;
}
