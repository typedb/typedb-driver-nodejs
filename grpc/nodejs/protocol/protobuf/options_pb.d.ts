// package: grakn.protocol
// file: options.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Options extends jspb.Message { 

    hasInfer(): boolean;
    clearInfer(): void;
    getInfer(): boolean;
    setInfer(value: boolean): Options;


    hasExplain(): boolean;
    clearExplain(): void;
    getExplain(): boolean;
    setExplain(value: boolean): Options;


    hasBatchSize(): boolean;
    clearBatchSize(): void;
    getBatchSize(): number;
    setBatchSize(value: number): Options;


    getInferOptCase(): Options.InferOptCase;
    getExplainOptCase(): Options.ExplainOptCase;
    getBatchSizeOptCase(): Options.BatchSizeOptCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Options.AsObject;
    static toObject(includeInstance: boolean, msg: Options): Options.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Options, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Options;
    static deserializeBinaryFromReader(message: Options, reader: jspb.BinaryReader): Options;
}

export namespace Options {
    export type AsObject = {
        infer: boolean,
        explain: boolean,
        batchSize: number,
    }

    export enum InferOptCase {
        INFER_OPT_NOT_SET = 0,
    
    INFER = 1,

    }

    export enum ExplainOptCase {
        EXPLAIN_OPT_NOT_SET = 0,
    
    EXPLAIN = 2,

    }

    export enum BatchSizeOptCase {
        BATCH_SIZE_OPT_NOT_SET = 0,
    
    BATCH_SIZE = 3,

    }

}
