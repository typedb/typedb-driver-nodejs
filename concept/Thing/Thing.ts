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

import { Attribute } from "./Attribute";
import { Concept, RemoteConcept, QueryIterator } from "../Concept";
import { Type } from "../Type/Type";
import { ThingType } from "../Type/ThingType";
import { AttributeType } from "../Type/AttributeType";
import { RoleType } from "../Type/RoleType";
import { Grakn } from "../../Grakn";
import Transaction = Grakn.Transaction;
import { Merge } from "../../common/utils";

export interface Thing extends Concept {
    getIID(): string;

    asRemote(transaction: Transaction): RemoteThing;
}

export interface RemoteThing extends Merge<RemoteConcept, Thing> {
    getType(): ThingType;
    isInferred(): boolean;

    setHas(attribute: Attribute<any>): void;
    unsetHas(attribute: Attribute<any>): void;

    getHas(onlyKey: boolean): QueryIterator;
    getHas(attributeType: Type): QueryIterator;
    getHas(attributeType: Type): QueryIterator;
    getHas(attributeType: Type): QueryIterator;
    getHas(attributeType: Type): QueryIterator;
    getHas(attributeType: Type): QueryIterator;
    getHas(attributeTypes: AttributeType[]): QueryIterator;
    getPlays(): QueryIterator;
    getRelations(roleTypes: RoleType[]): QueryIterator;

    asRemote(transaction: Transaction): RemoteThing;
}
