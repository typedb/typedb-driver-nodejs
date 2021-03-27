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

import {Entity} from "../../api/concept/thing/Entity";
import {EntityType} from "../../api/concept/type/EntityType";
import {ThingImpl} from "./ThingImpl";
import {Thing as ThingProto} from "grakn-protocol/common/concept_pb";
import {Bytes} from "../../dependencies_internal";
import {EntityTypeImpl} from "../type/EntityTypeImpl";

export class EntityImpl extends ThingImpl implements Entity{
    private _type: EntityType;

    constructor(iid: string, type: EntityType) {
        super(iid);
        this._type = type;
    }

}

export namespace EntityImpl {

    export function of(thingProto: ThingProto): Entity {
        let iid = Bytes.bytesToHexString(thingProto.getIid_asU8());
        return new EntityImpl(iid, EntityTypeImpl.of(thingProto.getType()));
    }

}