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

import { EntityType as EntityTypeProto } from "typedb-protocol/proto/concept";
import { Entity } from "../../api/concept/thing/Entity";
import { EntityType } from "../../api/concept/type/EntityType";
import { TypeDBTransaction } from "../../api/connection/TypeDBTransaction";
import { Label } from "../../common/Label";
import { RequestBuilder } from "../../common/rpc/RequestBuilder";
import { Stream } from "../../common/util/Stream";
import { EntityImpl, ThingTypeImpl } from "../../dependencies_internal";

export class EntityTypeImpl extends ThingTypeImpl implements EntityType {

    constructor(name: string, root: boolean, abstract: boolean) {
        super(name, root, abstract);
    }

    protected get className(): string {
        return "EntityType";
    }

    isEntityType(): boolean {
        return true;
    }

    asEntityType(): EntityType {
        return this;
    }
}

export namespace EntityTypeImpl {
    export function ofEntityTypeProto(proto: EntityTypeProto): EntityType {
        if (!proto) return null;
        return new EntityTypeImpl(proto.label, proto.is_root, proto.is_abstract);
    }

    /*
    export class Remote extends ThingTypeImpl.Remote implements EntityType.Remote {

        constructor(transaction: TypeDBTransaction.Extended, label: Label, root: boolean, abstract: boolean) {
            super(transaction, label, root, abstract);
        }

        protected get className(): string {
            return "EntityType";
        }

        asRemote(transaction: TypeDBTransaction): EntityType.Remote {
            return new EntityTypeImpl.Remote(transaction as TypeDBTransaction.Extended, this.label, this.root, this.abstract);
        }

        isEntityType(): boolean {
            return true;
        }

        asEntityType(): EntityType.Remote {
            return this;
        }

        create(): Promise<Entity> {
            const request = RequestBuilder.Type.EntityType.createReq(this.label);
            return this.execute(request).then((res) => EntityImpl.of(res.getEntityTypeCreateRes().getEntity()));
        }

        setSupertype(superEntityType: EntityType): Promise<void> {
            return super.setSupertype(superEntityType);
        }

        getInstances(): Stream<Entity> {
            return super.getInstances() as Stream<Entity>;
        }

        getSubtypes(): Stream<EntityType> {
            return super.getSubtypes() as Stream<EntityType>;
        }
    }
     */
}
