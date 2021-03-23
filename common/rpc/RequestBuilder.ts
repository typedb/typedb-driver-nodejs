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

import {CoreDatabaseManager, CoreDatabase} from "grakn-protocol/core/core_database_pb";
import {Session as SessionProto} from "grakn-protocol/common/session_pb";
import {Transaction as TransactionProto} from "grakn-protocol/common/transaction_pb";
import {Options} from "grakn-protocol/common/options_pb";

export namespace Core {

    export namespace DatabaseManager {

        export function createReq(name: string) {
            return new CoreDatabaseManager.Create.Req().setName(name);
        }

        export function containsReq(name: string) {
            return new CoreDatabaseManager.Contains.Req().setName(name);
        }

        export function allReq() {
            return new CoreDatabaseManager.All.Req();
        }

    }

    export namespace Database {

        export function deleteReq(name: string) {
            return new CoreDatabase.Delete.Req().setName(name);
        }
    }

    export namespace Session {

        export function openReq(database: string, type: SessionProto.Type, options: Options) {
            return new SessionProto.Open.Req().setDatabase(database).setType(type).setOptions(options);
        }

        export function closeReq(id: string) {
            return new SessionProto.Close.Req().setSessionId(id);
        }

        export function pulseReq(id: string) {
            return new SessionProto.Pulse.Req().setSessionId(id);
        }

    }

    export namespace Transaction {

        export function openReq(sessionId: string, type: TransactionProto.Type, options: Options, latencyMillis: number) {
            return new TransactionProto.Req().setOpenReq(
                new TransactionProto.Open.Req().setSessionId(sessionId).setType(type).setOptions(options).setNetworkLatencyMillis(latencyMillis)
            );
        }

        export function commitReq() {
            return new TransactionProto.Req().setCommitReq(new TransactionProto.Commit.Req());
        }

        export function rollbackReq() {
            return new TransactionProto.Req().setRollbackReq(new TransactionProto.Rollback.Req());
        }

    }
}
