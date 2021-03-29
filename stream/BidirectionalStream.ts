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

import {BatchDispatcher, RequestTransmitter} from "./RequestTransmitter";
import {Transaction} from "grakn-protocol/common/transaction_pb";
import {Stream} from "../common/util/Stream";
import {GraknCoreClient} from "grakn-protocol/core/core_service_grpc_pb";
import {uuidv4} from "../common/util/utils";
import {ResponseCollector} from "./ResponseCollector";
import {ClientDuplexStream} from "@grpc/grpc-js";
import {ErrorMessage} from "../common/errors/ErrorMessage";
import {GraknClientError} from "../common/errors/GraknClientError";
import {ResponsePartIterator} from "./ResponsePartIterator";
import UNKNOWN_REQUEST_ID = ErrorMessage.Client.UNKNOWN_REQUEST_ID;
import ResponseQueue = ResponseCollector.ResponseQueue;
import TRANSACTION_CLOSED = ErrorMessage.Client.TRANSACTION_CLOSED;
import MISSING_RESPONSE = ErrorMessage.Client.MISSING_RESPONSE;


export class BidirectionalStream {

    private readonly _requestTransmitter: RequestTransmitter;
    private readonly _dispatcher: BatchDispatcher;
    private readonly _responseCollector: ResponseCollector<unknown>;
    private _isOpen: boolean;

    constructor(rpcClient: GraknCoreClient, requestTransmitter: RequestTransmitter) {
        this._requestTransmitter = requestTransmitter;
        this._responseCollector = new ResponseCollector();
        let transactionStream = rpcClient.transaction();
        this.registerObserver(transactionStream);
        this._dispatcher = requestTransmitter.dispatcher(transactionStream);
        this._isOpen = true;
    }

    async single(request: Transaction.Req, batch: boolean): Promise<Transaction.Res> {
        const requestId = uuidv4();
        request.setReqId(requestId);
        let responseQueue = this._responseCollector.queue(requestId);
        if (batch) this._dispatcher.dispatch(request);
        else this._dispatcher.dispatchNow(request);
        return (await responseQueue.take() as Transaction.Res); // TODO can we do this without cast?
    }

    stream(request: Transaction.Req): Stream<Transaction.ResPart> {
        const requestId = uuidv4();
        request.setReqId(requestId);
        const responseQueue = this._responseCollector.queue(requestId) as ResponseQueue<Transaction.ResPart>;
        const responseIterator = new ResponsePartIterator(requestId, responseQueue, this._dispatcher);
        this._dispatcher.dispatch(request);
        return Stream.iterable(responseIterator);
    }

    isOpen(): boolean {
        return this._isOpen;
    }

    async close(error?: Error | string): Promise<void> {
        this._isOpen = false;
        this._responseCollector.close(error);
        // TODO close resPart
        this._dispatcher.close();

    }

    private collectRes(res: Transaction.Res): void {
        const requestId = res.getReqId();
        const queue = this._responseCollector.get(requestId);
        if (!queue) throw new GraknClientError(UNKNOWN_REQUEST_ID.message(requestId));
        queue.put(res);
    }

    private collectResPart(res: Transaction.ResPart): void {
        const requestId = res.getReqId();
        const queue = this._responseCollector.get(requestId);
        if (!queue) throw new GraknClientError(UNKNOWN_REQUEST_ID.message(requestId));
        queue.put(res);
    }

    registerObserver(transactionStream: ClientDuplexStream<Transaction.Client, Transaction.Server>): void {
        transactionStream.on("data", (res: Transaction.Server) => {
            if (!this.isOpen()) throw new GraknClientError(TRANSACTION_CLOSED);

            switch (res.getServerCase()) {
                case Transaction.Server.ServerCase.RES:
                    this.collectRes(res.getRes());
                    return;
                case Transaction.Server.ServerCase.RES_PART:
                    this.collectResPart(res.getResPart());
                    return;
                case Transaction.Server.ServerCase.SERVER_NOT_SET:
                default:
                    throw new GraknClientError(MISSING_RESPONSE.message(res));
            }

        });

        transactionStream.on("error", (err) => {
            this.close(err);
        });

        transactionStream.on("done", () => {
            this.close();
        });
    }
}