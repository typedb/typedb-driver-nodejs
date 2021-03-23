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
import {Stream} from "../rpc/Stream";
import {GraknCoreClient} from "grakn-protocol/core/core_service_grpc_pb";
import {uuidv4} from "../common_old/utils";
import {ResponseCollector} from "./ResponseCollector";
import {ClientDuplexStream} from "@grpc/grpc-js";
import {ErrorMessage} from "../common_old/errors/ErrorMessage";
import {GraknClientError} from "../common_old/errors/GraknClientError";
import UNKNOWN_REQUEST_ID = ErrorMessage.Client.UNKNOWN_REQUEST_ID;


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

    async stream(req: Transaction.Req): Promise<Stream<Transaction.Res>> {

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

    registerObserver(transactionStream: ClientDuplexStream<Transaction.Client, Transaction.Server>): void {
        transactionStream.on("data", (res:Transaction.Res) => {
            const requestId = res.getReqId();
            const queue = this._responseCollector.get(requestId);
            if (!queue) throw new GraknClientError(UNKNOWN_REQUEST_ID.message(requestId));
            queue.put(res);
        });

        transactionStream.on("error", (err) => {
            this.close(err);
        });

        transactionStream.on("done", () => {
            this.close();
        });
    }
}