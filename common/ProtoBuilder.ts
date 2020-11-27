import {GraknOptions} from "../GraknOptions";
import {Options} from "protobuf/options_pb";
import {Transaction} from "protobuf/transaction_pb";

export function optionsBuilder (options: GraknOptions): Options {
    let optionsProto = new Options();
    if (options.infer() != null) optionsProto.setInfer(<boolean>options.infer());
    if (options.explain() != null) optionsProto.setExplain(<boolean>options.explain());
    if (options.batchSize() != null) optionsProto.setBatchSize(<number>options.batchSize());
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