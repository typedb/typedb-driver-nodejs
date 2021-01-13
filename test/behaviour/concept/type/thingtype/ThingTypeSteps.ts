import { tx } from "../../../connection/ConnectionSteps";

export function getThingType(rootLabel: string, typeLabel: string){
    switch(rootLabel) {
        case "entity":
            return tx().concepts().getEntityType(typeLabel);
        case "attribute":
            return tx().concepts().getAttributeType(typeLabel);
        case "relation":
            return tx().concepts().getRelationType(typeLabel);
        default:
            throw "Unsupported type"
    }
}