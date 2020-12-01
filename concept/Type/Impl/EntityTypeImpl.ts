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

import { ThingTypeImpl, RemoteThingTypeImpl } from "./ThingTypeImpl";
import { RemoteEntityType } from "../EntityType";
import { EntityType } from "../EntityType";
import { Grakn } from "../../../Grakn";
import Transaction = Grakn.Transaction;
import ConceptProto from "graknlabs-grpc-protocol/protobuf/concept_pb";
import { EntityImpl } from "../../Thing/Impl/EntityImpl";
import { Stream } from "../../../rpc/Stream";

export class EntityTypeImpl extends ThingTypeImpl implements EntityType {
    protected constructor(label: string, isRoot: boolean) {
        super(label, isRoot);
    }

    static of(typeProto: ConceptProto.Type): EntityTypeImpl {
        return new EntityTypeImpl(typeProto.getLabel(), typeProto.getRoot());
    }

    asRemote(transaction: Transaction): RemoteEntityType {
        return new RemoteEntityTypeImpl(transaction, this.getLabel(), this.isRoot());
    }
}

export class RemoteEntityTypeImpl extends RemoteThingTypeImpl implements RemoteEntityType {
    constructor(transaction: Transaction, label: string, isRoot: boolean) {
        super(transaction, label, isRoot);
    }

    setSupertype(superEntityType: EntityType): Promise<void> {
        throw "Not yet Implemented"
    }

    getSupertype(): Promise<EntityTypeImpl> {
        throw "Not yet implemented"
    }

    getInstances(): Stream<EntityImpl> {
        return super.getInstances() as Stream<EntityImpl>;
    }

    asRemote(transaction: Transaction): RemoteEntityTypeImpl {
        return new RemoteEntityTypeImpl(transaction, this.getLabel(), this.isRoot());
    }

    getSupertypes(): Stream<EntityTypeImpl> {
        throw "Not yet implemented";
    }

    getSubtypes(): Stream<EntityTypeImpl> {
        throw "Not yet implemented";
    }

    create(): Promise<EntityImpl> {
        const method = new ConceptProto.Type.Req().setEntityTypeCreateReq(new ConceptProto.EntityType.Create.Req());
        return this.execute(method).then(res => EntityImpl.of(res.getEntityTypeCreateRes().getEntity()));
    }
}
