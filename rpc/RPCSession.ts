import { Grakn } from "../Grakn";
import GraknProto from "grakn-protocol/grakn_grpc_pb";
import GraknGrpc = GraknProto.GraknClient;
import SessionProto from "grakn-protocol/session_pb";
import { Protobuilder } from "../common/ProtoBuilder";
import { GraknOptions } from "../GraknOptions";
import { RPCTransaction } from "./RPCTransaction";

export class RPCSession implements Grakn.Session {
    private readonly _grpcClient: GraknGrpc;
    private readonly _database: string;
    private readonly _type: Grakn.SessionType;
    private _sessionId: string;
    private _isOpen: boolean;

    constructor(grpcClient: GraknGrpc, database: string, type: Grakn.SessionType) {
        this._database = database;
        this._type = type;
        this._grpcClient = grpcClient;
    }

    async open(options: GraknOptions): Promise<Grakn.Session> {
        const openReq = new SessionProto.Session.Open.Req()
            .setDatabase(this._database)
            .setType(sessionType(this._type))
            .setOptions(Protobuilder.options(options));
        this._isOpen = true;
        const openPromise = new Promise((resolve, reject) => {
            this._grpcClient.session_open(openReq, (err) => {
                if (err) reject(err);
                else resolve();
            });
        });
        this._sessionId = ((await openPromise) as SessionProto.Session.Open.Res).getSessionId_asB64();
        return this;
    }

    async close(): Promise<void> {
        if (this._isOpen) {
            this._isOpen = false;
            const closeReq = new SessionProto.Session.Close.Req()
                .setSessionId(this._sessionId);
            const closePromise = new Promise((resolve, reject) => {
                this._grpcClient.session_close(closeReq, (err) => {
                    if (err) reject(err);
                    else resolve();
                });
            });
            await closePromise;
        }
    }

    database(): string {
        return this._database;
    }

    isOpen(): boolean {
        return this._isOpen;
    }

    transaction(type: Grakn.TransactionType, options?: GraknOptions): Promise<Grakn.Transaction> {
        const transaction = new RPCTransaction(this._grpcClient, type)
        return transaction.open(this._sessionId, options);
    }

    type(): Grakn.SessionType {
        return this._type;
    }
}

function sessionType(type: Grakn.SessionType): SessionProto.Session.Type {
    switch (type) {
        case Grakn.SessionType.DATA:
            return SessionProto.Session.Type.DATA;
        case Grakn.SessionType.SCHEMA:
            return SessionProto.Session.Type.SCHEMA;
        default:
            throw "Unrecognized Type";
    }
}