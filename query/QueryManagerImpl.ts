/*
 * Copyright (C) 2021 Vaticle
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

import {QueryManager as QueryProto} from "typedb-protocol/common/query_pb";
import {Transaction as TransactionProto} from "typedb-protocol/common/transaction_pb";
import {ConceptMap} from "../api/answer/ConceptMap";
import {ConceptMapGroup} from "../api/answer/ConceptMapGroup";
import {Numeric} from "../api/answer/Numeric";
import {NumericGroup} from "../api/answer/NumericGroup";
import {TypeDBOptions} from "../api/connection/TypeDBOptions";
import {TypeDBTransaction} from "../api/connection/TypeDBTransaction";
import {Explanation} from "../api/logic/Explanation";
import {QueryManager} from "../api/query/QueryManager";
import {RequestBuilder} from "../common/rpc/RequestBuilder";
import {Stream} from "../common/util/Stream";
import {ConceptMapGroupImpl} from "../concept/answer/ConceptMapGroupImpl";
import {ConceptMapImpl} from "../concept/answer/ConceptMapImpl";
import {NumericGroupImpl} from "../concept/answer/NumericGroupImpl";
import {NumericImpl} from "../concept/answer/NumericImpl";
import {ExplanationImpl} from "../logic/ExplanationImpl";


export class QueryManagerImpl implements QueryManager {

    private _transaction: TypeDBTransaction.Extended;

    constructor(transaction: TypeDBTransaction.Extended) {
        this._transaction = transaction;
    }

    match(query: string, options?: TypeDBOptions): Stream<ConceptMap> {
        if (!options) options = TypeDBOptions.core();
        const request = RequestBuilder.QueryManager.matchReq(query, options.proto());
        return this.stream(request).flatMap((queryResPart) =>
            Stream.array(queryResPart.getMatchResPart().getAnswersList())
                .map((conceptMapProto) => ConceptMapImpl.of(conceptMapProto))
        );
    }

    matchAggregate(query: string, options?: TypeDBOptions): Promise<Numeric> {
        if (!options) options = TypeDBOptions.core();
        const request = RequestBuilder.QueryManager.matchAggregateReq(query, options.proto());
        return this.query(request).then((res) => NumericImpl.of(res.getMatchAggregateRes().getAnswer()));
    }

    matchGroup(query: string, options?: TypeDBOptions): Stream<ConceptMapGroup> {
        if (!options) options = TypeDBOptions.core();
        const request = RequestBuilder.QueryManager.matchGroupReq(query, options.proto());
        return this.stream(request).flatMap((queryResPart) =>
            Stream.array(queryResPart.getMatchGroupResPart().getAnswersList())
                .map((conceptMapGroupProto) => ConceptMapGroupImpl.of(conceptMapGroupProto))
        );
    }

    matchGroupAggregate(query: string, options?: TypeDBOptions): Stream<NumericGroup> {
        if (!options) options = TypeDBOptions.core();
        const request = RequestBuilder.QueryManager.matchGroupAggregateReq(query, options.proto());
        return this.stream(request).flatMap((queryResPart) =>
            Stream.array(queryResPart.getMatchGroupAggregateResPart().getAnswersList())
                .map((numericGroupArray) => NumericGroupImpl.of(numericGroupArray))
        );
    }

    insert(query: string, options?: TypeDBOptions): Stream<ConceptMap> {
        if (!options) options = TypeDBOptions.core();
        const request = RequestBuilder.QueryManager.insertReq(query, options.proto());
        return this.stream(request).flatMap((queryResPart) =>
            Stream.array(queryResPart.getInsertResPart().getAnswersList())
                .map((conceptMapProto) => ConceptMapImpl.of(conceptMapProto))
        );
    }

    delete(query: string, options?: TypeDBOptions): Promise<void> {
        if (!options) options = TypeDBOptions.core();
        const request = RequestBuilder.QueryManager.deleteReq(query, options.proto());
        return this.query(request).then(() => null);
    }

    update(query: string, options?: TypeDBOptions): Stream<ConceptMap> {
        if (!options) options = TypeDBOptions.core();
        const request = RequestBuilder.QueryManager.updateReq(query, options.proto());
        return this.stream(request).flatMap((queryResPart) =>
            Stream.array(queryResPart.getUpdateResPart().getAnswersList())
                .map((conceptMapProto) => ConceptMapImpl.of(conceptMapProto))
        );
    }

    define(query: string, options?: TypeDBOptions): Promise<void> {
        if (!options) options = TypeDBOptions.core();
        const request = RequestBuilder.QueryManager.defineReq(query, options.proto());
        return this.query(request).then(() => null);
    }

    undefine(query: string, options?: TypeDBOptions): Promise<void> {
        if (!options) options = TypeDBOptions.core();
        const request = RequestBuilder.QueryManager.undefineReq(query, options.proto());
        return this.query(request).then(() => null);
    }

    explain(explainable: ConceptMap.Explainable, options?: TypeDBOptions): Stream<Explanation> {
        if (!options) options = TypeDBOptions.core();
        const request = RequestBuilder.QueryManager.explainReq(explainable.id, options.proto());
        return this.stream(request)
            .flatMap((resPart) => Stream.array(resPart.getExplainResPart().getExplanationsList()))
            .map((explanationProto) => ExplanationImpl.of(explanationProto));
    }

    private query(req: TransactionProto.Req): Promise<QueryProto.Res> {
        return this._transaction.rpcExecute(req).then((res) => res.getQueryManagerRes());
    }

    private stream(req: TransactionProto.Req): Stream<QueryProto.ResPart> {
        return this._transaction.rpcStream(req).map((res) => {
            return res.getQueryManagerResPart()
        });
    }
}