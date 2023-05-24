/*
 * Copyright (C) 2022 Vaticle
 *
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


import { TypeDBTransaction } from "../connection/TypeDBTransaction";
import { Attribute } from "./thing/Attribute";
import { Entity } from "./thing/Entity";
import { Relation } from "./thing/Relation";
import { Thing } from "./thing/Thing";
import { AttributeType } from "./type/AttributeType";
import { EntityType } from "./type/EntityType";
import { RelationType } from "./type/RelationType";
import { RoleType } from "./type/RoleType";
import { ThingType } from "./type/ThingType";
import { Type } from "./type/Type";
import {AttributeType as ConceptProto} from "typedb-protocol/common/concept_pb";
import {Value} from "./value/Value";

export interface Concept {

    asRemote(transaction: TypeDBTransaction): Concept.Remote;

    isRemote(): boolean;

    isType(): boolean;

    isRoleType(): boolean;

    isThingType(): boolean;

    isEntityType(): boolean;

    isAttributeType(): boolean;

    isRelationType(): boolean;

    isThing(): boolean;

    isEntity(): boolean;

    isAttribute(): boolean;

    isRelation(): boolean;

    isValue(): boolean;

    asType(): Type;

    asThingType(): ThingType;

    asEntityType(): EntityType;

    asAttributeType(): AttributeType;

    asRelationType(): RelationType;

    asRoleType(): RoleType;

    asThing(): Thing;

    asEntity(): Entity;

    asAttribute(): Attribute;

    asRelation(): Relation;

    asValue(): Value;

    equals(concept: Concept): boolean;

    toJSONRecord(): Record<string, boolean | string | number>;
}

export namespace Concept {

    export interface Remote extends Concept {

        delete(): Promise<void>;

        isDeleted(): Promise<boolean>;

        asType(): Type.Remote;

        asThingType(): ThingType.Remote;

        asEntityType(): EntityType.Remote;

        asAttributeType(): AttributeType.Remote;

        asRelationType(): RelationType.Remote;

        asRoleType(): RoleType.Remote;

        asThing(): Thing.Remote;

        asEntity(): Entity.Remote;

        asAttribute(): Attribute.Remote;

        asRelation(): Relation.Remote;
    }


    export interface ValueType {

        proto(): ConceptProto.ValueType;

        name(): string;
    }

    export namespace ValueType {

        class Impl implements ValueType {

            private readonly _proto: ConceptProto.ValueType;
            private readonly _name: string;

            constructor(type: ConceptProto.ValueType, name: string) {
                this._proto = type;
                this._name = name;
            }

            proto(): ConceptProto.ValueType {
                return this._proto;
            }

            name(): string {
                return this._name.toLowerCase();
            }

            toString() {
                return "ValueType[" + this._name + "]";
            }
        }

        export const OBJECT = new Impl(ConceptProto.ValueType.OBJECT, "OBJECT");
        export const BOOLEAN = new Impl(ConceptProto.ValueType.BOOLEAN, "BOOLEAN");
        export const LONG = new Impl(ConceptProto.ValueType.LONG, "LONG");
        export const DOUBLE = new Impl(ConceptProto.ValueType.DOUBLE, "DOUBLE");
        export const STRING = new Impl(ConceptProto.ValueType.STRING, "STRING");
        export const DATETIME = new Impl(ConceptProto.ValueType.DATETIME, "DATETIME");
    }
}
