import {GraknOptions} from "../GraknOptions";
import {Options} from "protobuf/options_pb";
import {Transaction} from "protobuf/transaction_pb";

export namespace Protobuilder {
    export function options(options: GraknOptions): Options {
        let optionsProto = new Options();
        if (options.infer() != null) optionsProto.setInfer(options.infer() as boolean);
        if (options.explain() != null) optionsProto.setExplain(options.explain() as boolean);
        if (options.batchSize() != null) optionsProto.setBatchSize(options.batchSize() as number);
        return optionsProto;
    }

    export function addTracingDataToMetadata(transactionReq: Transaction.Req): void {
        let metadataMap = transactionReq.getMetadataMap();
        if (isTracingEnabled()) {
            let threadTrace = currentThreadTrace();
            if (threadTrace !== null && threadTrace.getId() !== null && threadTrace.getRootId() !== null) {
                metadataMap.set("traceParentId", threadTrace.getId().toString());
                metadataMap.set("traceRootId", threadTrace.getRootId().toString());
            }
        }
    }
}