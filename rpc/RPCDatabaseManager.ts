import { GraknClient as GraknGrpc } from "protobuf/grakn_grpc_pb"
import { Grakn } from "../Grakn";
import { Database } from "protobuf/database_pb";

export class RPCDatabaseManager implements Grakn.DatabaseManager {
    private _grpcClient: GraknGrpc;

    constructor(client: GraknGrpc) {
        this._grpcClient = client;
    }

    contains(name: string): Promise<boolean> {
        const containsRequest = new Database.Contains.Req().setName(name);
        return new Promise((resolve, reject) => {
            this._grpcClient.database_contains(containsRequest, (err) => {
                if (err) reject(err);
                else resolve();
            });
        });
    }

    create(name: string): Promise<void> {
        const createRequest = new Database.Create.Req().setName(name);
        return new Promise((resolve, reject) => {
            this._grpcClient.database_create(createRequest, (err) => {
                if (err) reject(err);
                else resolve();
            });
        });
    }

    delete(name: string): Promise<void> {
        const deleteRequest = new Database.Delete.Req().setName(name);
        return new Promise((resolve, reject) => {
            this._grpcClient.database_delete(deleteRequest, (err) => {
                if (err) reject(err);
                else resolve();
            });
        });
    }

    all(): Promise<string[]> {
        const allRequest = new Database.All.Req();
        return new Promise((resolve, reject) => {
            this._grpcClient.database_all(allRequest, (err) => {
                if (err) reject(err);
                else resolve();
            });
        });
    }
}