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

import {GraknTransaction} from "../api/GraknTransaction";
import {CoreSession} from "./CoreSession";
import {GraknOptions} from "../api/GraknOptions";
import {BidirectionalStream} from "../stream/BidirectionalStream";
import {Transaction} from "grakn-protocol/common/transaction_pb";
import {Core} from "../common/rpc/RequestBuilder";
import {GraknClientError} from "../common_old/errors/GraknClientError";
import {ErrorMessage} from "../common_old/errors/ErrorMessage";
import TRANSACTION_CLOSED = ErrorMessage.Client.TRANSACTION_CLOSED;

export class CoreTransaction implements GraknTransaction.Extended {
    private readonly _session: CoreSession;
    private readonly _sessionId: string;
    private readonly _type: GraknTransaction.Type;
    private readonly _options: GraknOptions;
    private _bidirectionalStream: BidirectionalStream;

    constructor(session: CoreSession, _sessionId: string, type: GraknTransaction.Type, options?: GraknOptions) {
        this._session = session;
        this._sessionId = _sessionId;
        this._type = type;
        this._options = options;
        let rpcClient = this._session.rpc();
        this._bidirectionalStream = new BidirectionalStream(rpcClient, this._session.requestTransmitter());
    }

    async rpcExecute(request: Transaction.Req, batch?: boolean): Promise<Transaction.Res> {
        if (!this.isOpen()) throw new GraknClientError(TRANSACTION_CLOSED);
        let useBatch = batch ? batch : true;
        return this._bidirectionalStream.single(request, useBatch);
    }


    rpcStream(request: Transaction.Req): any {
        // TODO with typing
    }

    async open(): Promise<void> {
        let openReq = Core.Transaction.openReq(this._sessionId, this._type.proto(), this._options.proto(), this._session.networkLatency());
        await this.rpcExecute(openReq, false);
    }


    async close(): Promise<void> {
        await this._bidirectionalStream.close();
    }

    async commit(): Promise<void> {
        const commitReq = Core.Transaction.commitReq();
        try {
            await this.rpcExecute(commitReq);
        } finally {
            await this.close();
        }
    }

    async rollback(): Promise<void> {
        const rollbackReq = Core.Transaction.rollbackReq();
        await this.rpcExecute(rollbackReq);
    }

    concepts(): ConceptManager {
        return undefined;
    }

    logic(): LogicManager {
        return undefined;
    }

    query(): QueryManager {
        return undefined;
    }

    options(): GraknOptions {
        return this._options;
    }

    type(): GraknTransaction.Type {
        return this._type;
    }

    isOpen(): boolean {
        return this._bidirectionalStream.isOpen();
    }

}