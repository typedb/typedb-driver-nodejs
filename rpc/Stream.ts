import { ClientWritableStream } from "@grpc/grpc-js";
import TransactionProto from "graknlabs-grpc-protocol/protobuf/transaction_pb";
import { MultipleResponseCollector } from "./RPCTransaction";

export class Stream<T> implements Iterable<Promise<T>> {

    private readonly _requestId: string;
    private readonly _writableStream: ClientWritableStream<TransactionProto.Transaction.Req>;
    private readonly _responseCollector: MultipleResponseCollector;
    private readonly _transformResponse: (res: TransactionProto.Transaction.Res) => T[];

    private _receivedAnswers: T[];

    public constructor(requestId: string, writableStream: ClientWritableStream<TransactionProto.Transaction.Req>,
                       responseCollector: MultipleResponseCollector, transformResponse: (res: TransactionProto.Transaction.Res) => T[]) {
        this._requestId = requestId;
        this._transformResponse = transformResponse;
        this._writableStream = writableStream;
        this._responseCollector = responseCollector;
    }

    *[Symbol.iterator](): Iterator<Promise<T>> {
        while (true) yield this.next();
    }

    async next(): Promise<T> {
        if (this._receivedAnswers?.length) {
            return this._receivedAnswers.shift();
        }

        const res = await this._responseCollector.take();
        switch (res.getResCase()) {
            case TransactionProto.Transaction.Res.ResCase.CONTINUE:
                const continueReq = new TransactionProto.Transaction.Req()
                    .setId(this._requestId).setContinue(true);
                this._writableStream.write(continueReq);
                return this.next();
            case TransactionProto.Transaction.Res.ResCase.DONE:
                return undefined;
            case TransactionProto.Transaction.Res.ResCase.RES_NOT_SET:
                throw "Missing response";
            default:
                this._receivedAnswers = this._transformResponse(res);
                return this.next();
        }
    }

    async collect(): Promise<T[]> {
        const answers: T[] = [];
        for (const getAnswer of this) {
            const answer = await getAnswer;
            if (answer != null) answers.push(answer);
            else break;
        }
        return answers;
    }
}
