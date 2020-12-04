import {
    Answer,
    ConceptMap,
    ErrorMessage,
    GraknClientError,
} from "../../dependencies_internal"

export class AnswerGroup<T> implements Answer {
    asAnswerGroup(): AnswerGroup<any> {
        return undefined;
    }

    asConceptMap(): ConceptMap {
        throw new GraknClientError(ErrorMessage.Concept.INVALID_CONCEPT_CASTING.message("AnswerGroup", "ConceptMap"))
    }

}