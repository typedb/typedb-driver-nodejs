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


import {ClientDuplexStream, ServiceError} from "@grpc/grpc-js";
import { Session } from "typedb-protocol/common/session_pb";
import { CoreDatabase as CoreDatabaseProto, CoreDatabaseManager as CoreDatabaseMgrProto } from "typedb-protocol/core/core_database_pb";
import { TypeDBClient } from "typedb-protocol/core/core_service_grpc_pb";
import { TypeDBDatabaseImpl } from "../../connection/TypeDBDatabaseImpl";
import * as common_transaction_pb from "typedb-protocol/common/transaction_pb";

/*
TODO implement ResilientCall
 */
export abstract class TypeDBStub {

    abstract databasesCreate(req: CoreDatabaseMgrProto.Create.Req): Promise<void>;

    abstract databasesContains(req: CoreDatabaseMgrProto.Contains.Req): Promise<boolean>;

    abstract databasesAll(req: CoreDatabaseMgrProto.All.Req): Promise<TypeDBDatabaseImpl[]>;

    abstract databaseDelete(req: CoreDatabaseProto.Delete.Req): Promise<void>;

    abstract databaseSchema(req: CoreDatabaseProto.Schema.Req): Promise<string>;

    abstract sessionOpen(openReq: Session.Open.Req): Promise<Session.Open.Res>;

    abstract sessionClose(req: Session.Close.Req): Promise<void>;

    abstract sessionPulse(pulse: Session.Pulse.Req): Promise<boolean>;

    abstract transaction(): Promise<ClientDuplexStream<common_transaction_pb.Transaction.Client, common_transaction_pb.Transaction.Server>>;
}
