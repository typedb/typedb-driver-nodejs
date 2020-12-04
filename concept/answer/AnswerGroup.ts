import {
    Answer,
    Concept,
    ConceptMap,
    ErrorMessage,
    GraknClientError,
    Grakn, ConceptProtoReader,
} from "../../dependencies_internal"
import Transaction = Grakn.Transaction;
import AnswerProto from "graknlabs-grpc-protocol/protobuf/answer_pb";



export class AnswerGroup<T> implements Answer {
    private readonly _owner: Concept;
    private readonly _answers: T[];

    constructor(owner: Concept, answers: T[]) {
        this._owner = owner;
        this._answers = answers;
    }

    public static of (transaction: Transaction, res: AnswerProto.AnswerGroup): AnswerGroup<Answer> {
        let concept: Concept;
        if (res.getOwner().hasThing()) concept = ConceptProtoReader.thing(res.getOwner().getThing());
        else concept = ConceptProtoReader.type(res.getOwner().getType());
        return new AnswerGroup<Answer>(concept, res.getAnswersList() as Answer[])
    }

    owner(): Concept {
        return this._owner;
    }

    answers(): T[] {
        return this._answers;
    }
}