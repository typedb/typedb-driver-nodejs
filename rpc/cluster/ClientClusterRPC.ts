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

import {
    ClientRPC, GraknClientCluster, SessionType, GraknOptions, GraknClusterOptions, GraknClientError, ErrorMessage,
    ServerAddress, DatabaseManagerClusterRPC, DatabaseClusterRPC, SessionClusterRPC, FailsafeTask, DatabaseReplicaRPC
} from "../../dependencies_internal";
import { ChannelCredentials } from "@grpc/grpc-js";
import { GraknClusterClient as GraknClusterGrpc } from "grakn-protocol/protobuf/cluster/grakn_cluster_grpc_pb";
import ClusterProto from "grakn-protocol/protobuf/cluster/cluster_pb";
import CLUSTER_UNABLE_TO_CONNECT = ErrorMessage.Client.CLUSTER_UNABLE_TO_CONNECT;

export class ClientClusterRPC implements GraknClientCluster {
    private _coreClients: Map<ServerAddress, ClientRPC>;
    private _graknClusterRPCs: Map<ServerAddress, GraknClusterGrpc>;
    private _databaseManagers: DatabaseManagerClusterRPC;
    private _clusterDatabases: {[db: string]: DatabaseClusterRPC};
    private _isOpen: boolean;

    async open(addresses: string[]): Promise<this> {
        const serverAddresses = await this.fetchClusterServers(addresses);
        this._coreClients = new Map(serverAddresses.map(addr => [addr, new ClientRPC(addr.external())]));
        this._graknClusterRPCs = new Map(serverAddresses.map(addr => [addr, new GraknClusterGrpc(addr.external(), ChannelCredentials.createInsecure())]));
        this._databaseManagers = new DatabaseManagerClusterRPC(this, new Map(Array.from(this._coreClients).map(([addr, client]) => [addr, client.databases()])));
        this._clusterDatabases = {};
        this._isOpen = true;
        return this;
    }

    session(database: string, type: SessionType, options: GraknClusterOptions = GraknOptions.cluster()): Promise<SessionClusterRPC> {
        if (options.readAnyReplica) {
            return this.sessionAnyReplica(database, type, options);
        } else {
            return this.sessionPrimaryReplica(database, type, options);
        }
    }

    private sessionPrimaryReplica(database: string, type: SessionType, options: GraknClusterOptions): Promise<SessionClusterRPC> {
        return new OpenSessionFailsafeTask(database, type, options, this).runPrimaryReplica();
    }

    private sessionAnyReplica(database: string, type: SessionType, options: GraknClusterOptions): Promise<SessionClusterRPC> {
        return new OpenSessionFailsafeTask(database, type, options, this).runAnyReplica();
    }

    databases(): DatabaseManagerClusterRPC {
        return this._databaseManagers;
    }

    isOpen(): boolean {
        return this._isOpen;
    }

    close(): void {
        this._coreClients.forEach(client => client.close());
        this._isOpen = false;
    }

    isCluster(): boolean {
        return true;
    }

    clusterDatabases(): {[db: string]: DatabaseClusterRPC} {
        return this._clusterDatabases;
    }

    clusterMembers(): ServerAddress[] {
        return Array.from(this._coreClients.keys());
    }

    coreClient(address: ServerAddress): ClientRPC {
        return this._coreClients.get(address);
    }

    graknClusterRPC(address: ServerAddress): GraknClusterGrpc {
        return this._graknClusterRPCs.get(address);
    }

    private async fetchClusterServers(addresses: string[]): Promise<ServerAddress[]> {
        for (const address of addresses) {
            const client = new ClientRPC(address);
            try {
                console.info(`Fetching list of cluster servers from ${address}...`);
                const grpcClusterClient = new GraknClusterGrpc(address, ChannelCredentials.createInsecure());
                const res = await new Promise<ClusterProto.Cluster.Servers.Res>((resolve, reject) => {
                    grpcClusterClient.cluster_servers(new ClusterProto.Cluster.Servers.Req(), (err, res) => {
                        if (err) reject(new GraknClientError(err));
                        else resolve(res);
                    });
                });
                const members = res.getServersList().map(x => ServerAddress.parse(x));
                console.info(`The cluster servers are ${members}`);
                return members;
            } catch (e) {
                console.error(`Fetching cluster servers from ${address} failed.`, e);
            } finally {
                client.close();
            }
        }
        throw new GraknClientError(CLUSTER_UNABLE_TO_CONNECT.message(addresses.join(",")));
    }
}

class OpenSessionFailsafeTask extends FailsafeTask<SessionClusterRPC> {
    private readonly _type: SessionType;
    private readonly _options: GraknClusterOptions;

    constructor(database: string, type: SessionType, options: GraknClusterOptions, client: ClientClusterRPC) {
        super(client, database);
        this._type = type;
        this._options = options;
    }

    run(replica: DatabaseReplicaRPC): Promise<SessionClusterRPC> {
        const session = new SessionClusterRPC(this.client, replica.address());
        return session.open(replica.address(), this.database, this._type, this._options);
    }
}
