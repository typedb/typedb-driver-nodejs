import {GraknOptions} from "../_internal";
import options_pb from "graknlabs-grpc-protocol/protobuf/options_pb";
const { Options } = options_pb;

export namespace ProtoBuilder {
    export function options(options?: GraknOptions) {
        let optionsProto = new Options();
        if (options) {
            if (options.infer() != null) optionsProto.setInfer(options.infer() as boolean);
            if (options.explain() != null) optionsProto.setExplain(options.explain() as boolean);
            if (options.batchSize() != null) optionsProto.setBatchSize(options.batchSize() as number);
        }
        return optionsProto;
    }
}
