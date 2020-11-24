import {RemoteConcept} from "../concept/Concept";

export function CreateGraknError(error: string, additionalInfo = "") {
    return new Error(additionalInfo ? error + "/nAdditional information: " + additionalInfo : error)
}

export function ConnectionClosedError (additionalInformation = "") : Error {
    return CreateGraknError("The connection to the database is closed.", additionalInformation);
}

export function ExplanationNotPresentError (additionalInformation = "") : Error {
    return CreateGraknError("No explanation found.", additionalInformation);
}

export function UnknownBaseTypeError (concept: RemoteConcept, additionalInformation = "") : Error {
    return CreateGraknError("No known base type for concept " + concept.toString(), additionalInformation);
}

export function ResultNotPresentError (additionalInformation = "") : Error {
    return CreateGraknError("Result not present.", additionalInformation);
}