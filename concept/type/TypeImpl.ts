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

import {RemoteType, Type} from "../../api/concept/type/Type";
import {GraknTransaction} from "../../api/GraknTransaction";
import {Concept} from "../../api/concept/Concept";
import {Stream} from "../../common/util/Stream";
import {ConceptImpl} from "../ConceptImpl";
import {GraknClientError} from "../../common_old/errors/GraknClientError";
import {ErrorMessage} from "../../common_old/errors/ErrorMessage";
import {Type as TypeProto} from "grakn-protocol/common/concept_pb";
import {ThingTypeImpl} from "./ThingTypeImpl";
import {Label} from "../../common/Label";
import {RoleTypeImpl} from "./RoleTypeImpl";
import MISSING_LABEL = ErrorMessage.Concept.MISSING_LABEL;

export abstract class TypeImpl extends ConceptImpl implements Type {

    private readonly _label: Label;
    private readonly _isRoot: boolean;

    protected constructor(label: Label, isRoot: boolean) {
        super();
        if (!label) throw new GraknClientError(MISSING_LABEL.message());
        this._label = label;
        this._isRoot = isRoot;
    }

    abstract asRemote(transaction: GraknTransaction): RemoteType;

    isRoot(): boolean {
        return this._isRoot;
    }

    getLabel(): Label {
        return this._label;
    }

    equals(concept: Concept): boolean {
        if (!concept.isType()) return false;
        return (concept as Type).getLabel().equals(this.getLabel());
    }

    toString(): string {
        return `${this.constructor.name}[label:${this._label}]`;
    }

}



export namespace TypeImpl {

    export function of(typeProto: TypeProto) {
        switch (typeProto.getEncoding()) {
            case TypeProto.Encoding.ROLE_TYPE:
                return RoleTypeImpl.of(typeProto);
            default:
                return ThingTypeImpl.of(typeProto);
        }
    }

    export abstract class RemoteImpl extends ConceptImpl.Remote implements RemoteType {

        private _transaction: GraknTransaction.Extended;
        private _label: Label;
        private _isRoot: boolean;

        constructor(transaction: GraknTransaction.Extended, label: Label, isRoot: boolean) {
            super();
            this._transaction = transaction;
            this._label = label;
            this._isRoot = isRoot;
        }

        getLabel(): Label  {
            return this._label;
        }

        isRoot(): boolean {
            return this._isRoot;
        }

        asRemote(transaction: GraknTransaction): RemoteType {
            return this;
        }

        equals(concept: Concept): boolean {
            if (!concept.isType()) return false;
            return (concept as Type).getLabel().equals(this.getLabel());
        }

        delete(): Promise<void> {
            return Promise.resolve(undefined);
        }

        getSubtypes(): Stream<Type> {
            return undefined;
        }

        getSupertype(): Promise<Type> {
            return Promise.resolve(undefined);
        }

        getSupertypes(): Stream<Type> {
            return undefined;
        }

        setLabel(label: string): Promise<void> {
            return Promise.resolve(undefined);
        }

        isDeleted(): Promise<boolean> {
            return Promise.resolve(false);
        }

        isAbstract(): Promise<boolean> {
            return Promise.resolve(false);
        }

    }
}