import {Grakn} from "../Grakn"
import {GraknOptions} from "../GraknOptions";
import {ChannelCredentials, closeClient} from "@grpc/grpc-js";
import {RPCDatabaseManager} from "./RPCDatabaseManager";
import {GraknClient as GraknGrpc} from "grakn-protocol/grakn_grpc_pb";
import {RPCSession} from "./RPCSession";

export const DEFAULT_URI = "localhost:1729";

export class GraknClient implements Grakn.Client {
    private readonly _databases: Grakn.DatabaseManager;
    private readonly _graknGrpc: GraknGrpc;

    constructor(address = DEFAULT_URI) {
        this._graknGrpc = new GraknGrpc(address, ChannelCredentials.createInsecure());
        this._databases = new RPCDatabaseManager(this._graknGrpc);
    }

    async session(databaseName: string, type: Grakn.SessionType, options?: GraknOptions): Promise<Grakn.Session> {
        const session = new RPCSession(this._graknGrpc, databaseName, type);
        return session.open(options);
    }

    databases(): Grakn.DatabaseManager {
        return this._databases;
    }

    close(): void {
        // TODO: test that this does not throw
        closeClient(this._graknGrpc as any);
    }
}
