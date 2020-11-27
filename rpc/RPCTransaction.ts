import {GraknTransaction, GraknTransactionType} from "../Grakn";
import {ConceptManager} from "../concept/ConceptManager";
import {Transaction} from "protobuf/transaction_pb";
import {addTracingDataToMetadata, optionsBuilder} from "../common/ProtoBuilder";
import {GraknOptions} from "../GraknOptions";
import { v4 as uuidv4 } from "uuid";

export class RPCTransaction implements GraknTransaction {
    private _type: GraknTransactionType;
    private _conceptManager: ConceptManager;
    private _queryManager: QueryManager;
    private _collectors: ResponseCollectors;
    private _requestObserver: StreamObserver;
    private _streamIsOpen: boolean;
    private _transactionWasOpened: boolean;
    private _transactionWasClosed: boolean;
    private _networkLatencyMillis: number;

    constructor(session: RPCSession, sessionId: string, type: GraknTransactionType, options: GraknOptions) {
        let tracing = traceOnThread(type == WRITE ? "tx.write" : "tx.read")
        try {
            this._type = type;
            this._conceptManager = new ConceptManager(this);
            this._queryManager = new QueryManager(this);
            this._collectors = new ResponseCollectors();

            this._transactionWasClosed = false;
            this._transactionWasOpened = false;
            this._streamIsOpen = false;
            //TODO: OPEN STREAM LISTENER
            this._streamIsOpen = true;

            let openRequest = new Transaction.Req()
                .setOpenReq(
                    new Transaction.Open.Req()
                        .setSessionId(sessionId)
                        .setType(type === GraknTransactionType.READ ? Transaction.Type.READ : Transaction.Type.WRITE)
                        .setOptions(optionsBuilder(options))
                )
            addTracingDataToMetadata(openRequest);
            let startTime = new Date().getTime();
            let res = this.execute(openRequest);
            let endTime = new Date().getTime();
            this._networkLatencyMillis = endTime - startTime - res.getProcessingTimeMillis();
        } finally {
            tracing.close()
        }
    }

    public type(): GraknTransactionType {
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

    public commit(): void {
        let commitReq = new Transaction.Req()
            .setCommitReq(
                new Transaction.Commit.Req()
            )
        addTracingDataToMetadata(commitReq);
        this.execute(commitReq)
    }

    public rollback(): void {
        let rollbackReq = new Transaction.Req()
            .setRollbackReq(
                new Transaction.Rollback.Req()
            )
        addTracingDataToMetadata(rollbackReq);
        this.execute(rollbackReq)
    }

    public close(): void {
        if (this._streamIsOpen) {
            this._streamIsOpen = false;
            this._requestObserver.onCompleted();
        }
        if (!this._transactionWasClosed) {
            this._transactionWasClosed = true;
            this._collectors.clearWithError(new Response.Error(TRANSACTION_CLOSED))
        }
    }

    public async execute(request: Transaction.Req, transformResponse: (res: Transaction.Res) => Query ): Query {
        let tracing = traceOnThread("execute");
        try {
            let responseCollector = new SingleResponseCollector();
            let requestId = uuidv4();
            request.setId(requestId.toString());
            this._collectors.put(requestId, responseCollector);
            return new Query(request, this._requestObserver, responseCollector, transformResponse);
        }
        finally {
            tracing.close();
        }
    }

    public stream(request: Transaction.Req, transformResponse: (res: Transaction.Res) => Stream ): Stream {
        let tracing = traceOnThread("stream");
        try {
            let responseCollector = new MultipleResponseCollector();
            let requestId = uuidv4();
            request.setId(requestId.toString());
            request.setLatencyMillis(this._networkLatencyMillis);
        }
        finally {
            tracing.close();
        }

    }
}
