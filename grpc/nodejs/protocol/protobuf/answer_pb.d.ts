// package: grakn.protocol
// file: answer.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as concept_pb from "./concept_pb";

export class Answer extends jspb.Message { 

    hasAnswerGroup(): boolean;
    clearAnswerGroup(): void;
    getAnswerGroup(): AnswerGroup | undefined;
    setAnswerGroup(value?: AnswerGroup): Answer;


    hasConceptMap(): boolean;
    clearConceptMap(): void;
    getConceptMap(): ConceptMap | undefined;
    setConceptMap(value?: ConceptMap): Answer;


    hasNumber(): boolean;
    clearNumber(): void;
    getNumber(): Number | undefined;
    setNumber(value?: Number): Answer;


    getAnswerCase(): Answer.AnswerCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Answer.AsObject;
    static toObject(includeInstance: boolean, msg: Answer): Answer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Answer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Answer;
    static deserializeBinaryFromReader(message: Answer, reader: jspb.BinaryReader): Answer;
}

export namespace Answer {
    export type AsObject = {
        answerGroup?: AnswerGroup.AsObject,
        conceptMap?: ConceptMap.AsObject,
        number?: Number.AsObject,
    }

    export enum AnswerCase {
        ANSWER_NOT_SET = 0,
    
    ANSWER_GROUP = 1,

    CONCEPT_MAP = 2,

    NUMBER = 3,

    }

}

export class AnswerGroup extends jspb.Message { 

    hasOwner(): boolean;
    clearOwner(): void;
    getOwner(): concept_pb.Concept | undefined;
    setOwner(value?: concept_pb.Concept): AnswerGroup;

    clearAnswersList(): void;
    getAnswersList(): Array<Answer>;
    setAnswersList(value: Array<Answer>): AnswerGroup;
    addAnswers(value?: Answer, index?: number): Answer;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AnswerGroup.AsObject;
    static toObject(includeInstance: boolean, msg: AnswerGroup): AnswerGroup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AnswerGroup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AnswerGroup;
    static deserializeBinaryFromReader(message: AnswerGroup, reader: jspb.BinaryReader): AnswerGroup;
}

export namespace AnswerGroup {
    export type AsObject = {
        owner?: concept_pb.Concept.AsObject,
        answersList: Array<Answer.AsObject>,
    }
}

export class ConceptMap extends jspb.Message { 

    getMapMap(): jspb.Map<string, concept_pb.Concept>;
    clearMapMap(): void;

    getPattern(): string;
    setPattern(value: string): ConceptMap;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConceptMap.AsObject;
    static toObject(includeInstance: boolean, msg: ConceptMap): ConceptMap.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConceptMap, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConceptMap;
    static deserializeBinaryFromReader(message: ConceptMap, reader: jspb.BinaryReader): ConceptMap;
}

export namespace ConceptMap {
    export type AsObject = {

        mapMap: Array<[string, concept_pb.Concept.AsObject]>,
        pattern: string,
    }
}

export class Number extends jspb.Message { 
    getValue(): string;
    setValue(value: string): Number;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Number.AsObject;
    static toObject(includeInstance: boolean, msg: Number): Number.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Number, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Number;
    static deserializeBinaryFromReader(message: Number, reader: jspb.BinaryReader): Number;
}

export namespace Number {
    export type AsObject = {
        value: string,
    }
}
