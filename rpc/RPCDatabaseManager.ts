import { GraknClient as GraknGrpc } from "grakn-protocol/grakn_grpc_pb"
import { Grakn } from "../Grakn";
import database_pb from "grakn-protocol/database_pb";
const { Database } = database_pb;

export class RPCDatabaseManager implements Grakn.DatabaseManager {
    private _grpcClient: GraknGrpc;

    constructor(client: GraknGrpc) {
        this._grpcClient = client;
    }

    contains(name: string): Promise<boolean> {
        if (!name) throw "Database name cannot be null or empty.";
        const req = new Database.Contains.Req().setName(name);
        return new Promise((resolve, reject) => {
            this._grpcClient.database_contains(req, (err, res) => {
                if (err) reject(err);
                else resolve(res.getContains());
            });
        });
    }

    create(name: string): Promise<void> {
        if (!name) throw "Database name cannot be null or empty.";
        const req = new Database.Create.Req().setName(name);
        return new Promise((resolve, reject) => {
            this._grpcClient.database_create(req, (err) => {
                if (err) reject(err);
                else resolve();
            });
        });
    }

    delete(name: string): Promise<void> {
        if (!name) throw "Database name cannot be null or empty.";
        const req = new Database.Delete.Req().setName(name);
        return new Promise((resolve, reject) => {
            this._grpcClient.database_delete(req, (err) => {
                if (err) reject(err);
                else resolve();
            });
        });
    }

    all(): Promise<string[]> {
        const allRequest = new Database.All.Req();
        return new Promise((resolve, reject) => {
            this._grpcClient.database_all(allRequest, (err, res) => {
                if (err) reject(err);
                else resolve(res.getNamesList());
            });
        });
    }
}
