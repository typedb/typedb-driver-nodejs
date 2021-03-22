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


import {GraknSession} from "./GraknSession";
import {GraknOptions} from "./GraknOptions";
import {DatabaseManager} from "./database/DatabaseManager";
import {GraknCoreClient} from "grakn-protocol/core/core_service_grpc_pb";

export interface GraknClient {

    isOpen() : boolean;

    databases() : DatabaseManager;

    session(database : String, type : GraknSession.Type , options? : GraknOptions) : Promise<GraknSession>;

    isCluster() : boolean;

    asCluster() : GraknClient.Cluster; // TODO this might break

    close() : void;

    rpc() : GraknCoreClient;

}

export namespace GraknClient {

    export interface Cluster extends GraknClient {

        databases(): DatabaseManager.Cluster;

    }
}