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

import {Thing as ThingProto, ValueType as ValueTypeProto} from "typedb-protocol/common/concept_pb";
import {Attribute} from "../../api/concept/thing/Attribute";
import {Thing} from "../../api/concept/thing/Thing";
import {AttributeType} from "../../api/concept/type/AttributeType";
import {ThingType} from "../../api/concept/type/ThingType";
import {TypeDBTransaction} from "../../api/connection/TypeDBTransaction";
import {ErrorMessage} from "../../common/errors/ErrorMessage";
import {TypeDBClientError} from "../../common/errors/TypeDBClientError";
import {RequestBuilder} from "../../common/rpc/RequestBuilder";
import {Bytes} from "../../common/util/Bytes";
import {Stream} from "../../common/util/Stream";
import {AttributeTypeImpl, ThingImpl} from "../../dependencies_internal";
import BAD_VALUE_TYPE = ErrorMessage.Concept.BAD_VALUE_TYPE;
import INVALID_CONCEPT_CASTING = ErrorMessage.Concept.INVALID_CONCEPT_CASTING;

export class AttributeImpl extends ThingImpl implements Attribute {
    private readonly _type: AttributeType;

    private readonly _value: boolean | string | number | Date;

    protected constructor(iid: string, inferred: boolean, type: AttributeType) {
        super(iid, inferred);
        this._type = type;
    }

    isAttribute(): boolean {
        return true;
    }

    asAttribute(): Attribute {
        return this;
    }

    get type(): AttributeType {
        return this._type;
    }

    get value(): boolean | string | number | Date {
        return this._value;
    }

    getOwners(transaction: TypeDBTransaction, ownerType?: ThingType): Stream<Thing> {
        let request;
        if (!ownerType) {
            request = RequestBuilder.Thing.Attribute.getOwnersReq(this.iid);
        } else {
            request = RequestBuilder.Thing.Attribute.getOwnersByTypeReq(this.iid, ThingType.proto(ownerType));
        }
        return this.stream(transaction, request)
            .flatMap((resPart) => Stream.array(resPart.getAttributeGetOwnersResPart().getThingsList()))
            .map((thingProto) => ThingImpl.of(thingProto));
    }

    toJSONRecord(): Record<string, boolean | string | number> {
        let value;
        if (this.value instanceof Date) value = this.value.toISOString().slice(0, -1);
        else value = this.value;
        return {
            type: this.type.label.name,
            value_type: this.type.valueType.name(),
            value: value
        };
    }
}
