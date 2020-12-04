import AnswerProto, { Answer } from "graknlabs-grpc-protocol/protobuf/answer_pb";
import { AnswerGroup, ConceptMap, ErrorMessage, Grakn, GraknClientError, } from "../../dependencies_internal";
import Transaction = Grakn.Transaction;

export interface Answer {
    asAnswerGroup(): AnswerGroup<any>;
    asConceptMap(): ConceptMap;
}

export namespace Answer {
    export function of(transaction: Transaction, res: AnswerProto.Answer): Answer {
        switch (res.getAnswerCase()) {
            case AnswerCase.ANSWER_GROUP: return AnswerGroup.of(transaction, res.getAnswerGroup());
            case AnswerCase.CONCEPT_MAP: return ConceptMap.of(transaction, res.getConceptMap());
            case AnswerCase.ANSWER_NOT_SET: throw new GraknClientError(ErrorMessage.Query.MISSING_ANSWER.message(AnswerProto.Answer.AnswerCase))
            case AnswerCase.NUMBER: //FALL THROUGH
            default: throw new GraknClientError(ErrorMessage.Query.BAD_ANSWER_TYPE.message(res.getAnswerCase()))
        }
    }
}

