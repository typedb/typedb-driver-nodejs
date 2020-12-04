import AnswerProto from "graknlabs-grpc-protocol/protobuf/answer_pb";
import { GraknClientError } from "../../dependencies_internal";


abstract class AnswerProtoReader {
    // static iid(res: ??????) {
    //
    // }

    static number(res: AnswerProto.Number): number {
        try {
            return parseFloat(res.getValue());
        } catch (err) {
            throw new GraknClientError(err);
        }
    }
}
