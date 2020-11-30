import { Grakn } from "../Grakn";
import GraknProto from "graknlabs-grpc-protocol/protobuf/grakn_grpc_pb";
import GraknGrpc = GraknProto.GraknClient;
import SessionProto from "graknlabs-grpc-protocol/protobuf/session_pb";
import { ProtoBuilder } from "../common/ProtoBuilder";
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

    async open(options: GraknOptions = new GraknOptions()): Promise<Grakn.Session> {
        const openReq = new SessionProto.Session.Open.Req()
            .setDatabase(this._database)
            .setType(sessionType(this._type))
            .setOptions(ProtoBuilder.options(options));
        this._isOpen = true;
        const res = await new Promise<SessionProto.Session.Open.Res>((resolve, reject) => {
            this._grpcClient.session_open(openReq, (err, res) => {
                if (err) reject(err);
                else resolve(res);
            });
        });
        this._sessionId = res.getSessionId_asB64();
        console.log(this._sessionId);
        return this;
    }

    transaction(type: Grakn.TransactionType, options: GraknOptions = new GraknOptions()): Promise<Grakn.Transaction> {
        const transaction = new RPCTransaction(this._grpcClient, type);
        return transaction.open(this._sessionId, options);
    }

    type(): Grakn.SessionType {
        return this._type;
    }

    isOpen(): boolean {
        return this._isOpen;
    }

    async close(): Promise<void> {
        if (this._isOpen) {
            this._isOpen = false;
            const req = new SessionProto.Session.Close.Req().setSessionId(this._sessionId);
            await new Promise((resolve, reject) => {
                this._grpcClient.session_close(req, (err) => {
                    if (err) reject(err);
                    else resolve();
                });
            });
        }
    }

    database(): string {
        return this._database;
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
