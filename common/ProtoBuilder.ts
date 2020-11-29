import {GraknOptions} from "../internal";
import options_pb from "grakn-protocol/options_pb";
const { Options } = options_pb;

export namespace Protobuilder {
    export function options(options: GraknOptions) {
        let optionsProto = new Options();
        if (options.infer() != null) optionsProto.setInfer(options.infer() as boolean);
        if (options.explain() != null) optionsProto.setExplain(options.explain() as boolean);
        if (options.batchSize() != null) optionsProto.setBatchSize(options.batchSize() as number);
        return optionsProto;
    }
}