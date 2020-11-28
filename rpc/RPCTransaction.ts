import { Grakn } from "../Grakn";
import { ConceptManager } from "../concept/ConceptManager";
import { Transaction } from "protobuf/transaction_pb";
import { Protobuilder } from "../common/ProtoBuilder";
import { GraknClient as GraknGrpc } from "protobuf/grakn_grpc_pb"
import { GraknOptions } from "../GraknOptions";
import { v4 as uuidv4 } from "uuid";
import { QueryManager } from "../query/QueryManager";
import { ClientDuplexStream } from "@grpc/grpc-js";

export class RPCTransaction implements Grakn.Transaction {
    private _type: Grakn.TransactionType;
    private _conceptManager: ConceptManager;
    private _queryManager: QueryManager;
    private _collectors: ResponseCollectors;
    private _stream: ClientDuplexStream<Transaction.Req, Transaction.Res>
    private _streamIsOpen: boolean;
    private _grpcClient: GraknGrpc;
    private _transactionWasOpened: boolean;
    private _transactionWasClosed: boolean;
    private _networkLatencyMillis: number;

    constructor(grpcClient: GraknGrpc, type: Grakn.TransactionType) {
        this._type = type;
        this._conceptManager = new ConceptManager(this);
        this._queryManager = new QueryManager(this);
        this._transactionWasClosed = false;
        this._transactionWasOpened = false;
        this._streamIsOpen = false;
        this._grpcClient = grpcClient;
    }

    public async open(sessionId: string, options?: GraknOptions): Promise<RPCTransaction> {
        this._stream = this._grpcClient.transaction();

        this._streamIsOpen = true;
        let openRequest = new Transaction.Req()
            .setOpenReq(
                new Transaction.Open.Req()
                    .setSessionId(sessionId)
                    .setType(this._type === Grakn.TransactionType.READ ? Transaction.Type.READ : Transaction.Type.WRITE)
                    .setOptions(Protobuilder.options(options))
            )
        let startTime = new Date().getTime();
        let res = await this.execute(openRequest);
        let endTime = new Date().getTime();
        this._networkLatencyMillis = endTime - startTime - res.getOpenRes().getProcessingTimeMillis();
        this._transactionWasOpened = true;
        return this;
    }

    public type(): Grakn.TransactionType {
        return this._type;
    }

    public isOpen(): boolean {
        return this._transactionWasOpened && !this._transactionWasClosed;
    }

    public concepts(): ConceptManager {
        return this._conceptManager;
    }

    public query(): QueryManager {
        return this._queryManager;
    }

    public async commit(): Promise<void> {
        let commitReq = new Transaction.Req()
            .setCommitReq(
                new Transaction.Commit.Req()
            )
        await this.execute(commitReq)
    }

    public async rollback(): Promise<void> {
        let rollbackReq = new Transaction.Req()
            .setRollbackReq(
                new Transaction.Rollback.Req()
            )
        await this.execute(rollbackReq)
    }

    public async close(): Promise<void> {
        if (this._streamIsOpen) {
            this._streamIsOpen = false;
            //Close the stream?
        }
        if (!this._transactionWasClosed) {
            this._transactionWasClosed = true;
            this._collectors.clearWithError(new ErrorResponse("Transaction closed."))
        }
    }

    public async execute(request: Transaction.Req, transformResponse = (res: Transaction.Res) => res ): Promise<Transaction.Res> {
        let responseCollector = new SingleResponseCollector();
        let requestId = uuidv4();
        request.setId(requestId.toString());
        this._collectors.put(requestId, responseCollector);
        throw "not implented"
    }

    public stream(request: Transaction.Req, transformResponse = (res: Transaction.Res) => res ): Promise<Transaction.Res> {
        let responseCollector = new MultipleResponseCollector();
        let requestId = uuidv4();
        request.setId(requestId.toString());
        request.setLatencyMillis(this._networkLatencyMillis);
        this._collectors.put(requestId, responseCollector);
        throw "not implemented"
    }

    private setResponseObservers(stream: ClientDuplexStream<Transaction.Req, Transaction.Res>) {
        //TODO: LOOK INTO WHY OTHER EVENT TYPES (drain, metadata, etc) EXIST HERE
        stream.on("data", (res: Transaction.Res) => {
            const requestId = res.getId();
            const collector = this._collectors.get(requestId);
            if (!collector) throw "Unknown request ID " + requestId;
            collector.add(new OkResponse(res));
            if (collector.isDone()) this._collectors.remove(requestId);
        });
        //TODO: END
        //TODO: ERROR
    }
}

class ResponseCollectors {
    private _map: Map<string, ResponseCollector>;
    private _transaction: RPCTransaction;
    constructor(transaction: RPCTransaction) {
        this._map = new Map<string, ResponseCollector>()
        this._transaction = transaction;
    }

    get(uuid: string) {
        return this._map.get(uuid);
    }

    put(uuid: string, collector: ResponseCollector) {
        if (!this._transaction.isOpen()) throw "Transaction not open."
        this._map.set(uuid, collector);
    }

    remove(uuid: string) {
        this._map.delete(uuid);
    }

    clearWithError(error: ErrorResponse) {
        this._map.forEach((collector) => collector.add(error));
        this._map.clear();
    }
}

abstract class ResponseCollector {
    private _isDone: boolean;
    private _responseBuffer: Response[];

    constructor() {
        this._isDone = false;
        this._responseBuffer = [];
    }

    isDone(): boolean {
        return this._isDone;
    }

    add(response: Response): void {
        this._responseBuffer.push(response);
        if (!(response instanceof OkResponse) || this.isLastResponse(response.read())) this._isDone = true;
    }

    take(): Transaction.Res {
        return this._responseBuffer.shift().read();
    }

    abstract isLastResponse(response: Transaction.Res): boolean;


}

class SingleResponseCollector extends ResponseCollector {
    isLastResponse(response: Transaction.Res): boolean {
        return true
    }
}

class MultipleResponseCollector extends ResponseCollector {
    isLastResponse(response: Transaction.Res): boolean {
        return response.getDone();
    }
}

abstract class Response {
    abstract read(): Transaction.Res;
}

class OkResponse extends Response {
    private readonly _res: Transaction.Res;

    constructor(res: Transaction.Res) {
        super()
        this._res = res;
    }

    read(): Transaction.Res {
        return this._res;
    }

    toString(): string {
        return "OkResponse {" + this._res.toString() + "}";
    }

}

class ErrorResponse extends Response {
    private readonly _error: Error | string;

    constructor(error: Error | string) {
        super();
        this._error = error;
    }

    read(): Transaction.Res {
        throw this._error;
    }

    toString(): string {
        return "ErrorResponse {" + this._error.toString() + "}";
    }

}