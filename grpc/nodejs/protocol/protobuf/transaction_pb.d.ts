// package: grakn.protocol
// file: transaction.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as concept_pb from "./concept_pb";
import * as options_pb from "./options_pb";
import * as query_pb from "./query_pb";

export class Transaction extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Transaction.AsObject;
    static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Transaction;
    static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction;
}

export namespace Transaction {
    export type AsObject = {
    }


    export class Req extends jspb.Message { 
        getId(): string;
        setId(value: string): Req;


        getMetadataMap(): jspb.Map<string, string>;
        clearMetadataMap(): void;

        getLatencyMillis(): number;
        setLatencyMillis(value: number): Req;


        hasContinue(): boolean;
        clearContinue(): void;
        getContinue(): boolean;
        setContinue(value: boolean): Req;


        hasOpenReq(): boolean;
        clearOpenReq(): void;
        getOpenReq(): Transaction.Open.Req | undefined;
        setOpenReq(value?: Transaction.Open.Req): Req;


        hasCommitReq(): boolean;
        clearCommitReq(): void;
        getCommitReq(): Transaction.Commit.Req | undefined;
        setCommitReq(value?: Transaction.Commit.Req): Req;


        hasRollbackReq(): boolean;
        clearRollbackReq(): void;
        getRollbackReq(): Transaction.Rollback.Req | undefined;
        setRollbackReq(value?: Transaction.Rollback.Req): Req;


        hasQueryReq(): boolean;
        clearQueryReq(): void;
        getQueryReq(): query_pb.Query.Req | undefined;
        setQueryReq(value?: query_pb.Query.Req): Req;


        hasConceptManagerReq(): boolean;
        clearConceptManagerReq(): void;
        getConceptManagerReq(): concept_pb.ConceptManager.Req | undefined;
        setConceptManagerReq(value?: concept_pb.ConceptManager.Req): Req;


        hasThingReq(): boolean;
        clearThingReq(): void;
        getThingReq(): concept_pb.Thing.Req | undefined;
        setThingReq(value?: concept_pb.Thing.Req): Req;


        hasTypeReq(): boolean;
        clearTypeReq(): void;
        getTypeReq(): concept_pb.Type.Req | undefined;
        setTypeReq(value?: concept_pb.Type.Req): Req;


        hasRuleReq(): boolean;
        clearRuleReq(): void;
        getRuleReq(): concept_pb.Rule.Req | undefined;
        setRuleReq(value?: concept_pb.Rule.Req): Req;


        getReqCase(): Req.ReqCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Req.AsObject;
        static toObject(includeInstance: boolean, msg: Req): Req.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Req, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Req;
        static deserializeBinaryFromReader(message: Req, reader: jspb.BinaryReader): Req;
    }

    export namespace Req {
        export type AsObject = {
            id: string,

            metadataMap: Array<[string, string]>,
            latencyMillis: number,
            pb_continue: boolean,
            openReq?: Transaction.Open.Req.AsObject,
            commitReq?: Transaction.Commit.Req.AsObject,
            rollbackReq?: Transaction.Rollback.Req.AsObject,
            queryReq?: query_pb.Query.Req.AsObject,
            conceptManagerReq?: concept_pb.ConceptManager.Req.AsObject,
            thingReq?: concept_pb.Thing.Req.AsObject,
            typeReq?: concept_pb.Type.Req.AsObject,
            ruleReq?: concept_pb.Rule.Req.AsObject,
        }

        export enum ReqCase {
            REQ_NOT_SET = 0,
        
    CONTINUE = 4,

    OPEN_REQ = 5,

    COMMIT_REQ = 6,

    ROLLBACK_REQ = 7,

    QUERY_REQ = 8,

    CONCEPT_MANAGER_REQ = 9,

    THING_REQ = 10,

    TYPE_REQ = 11,

    RULE_REQ = 12,

        }

    }

    export class Res extends jspb.Message { 
        getId(): string;
        setId(value: string): Res;


        hasDone(): boolean;
        clearDone(): void;
        getDone(): boolean;
        setDone(value: boolean): Res;


        hasContinue(): boolean;
        clearContinue(): void;
        getContinue(): boolean;
        setContinue(value: boolean): Res;


        hasOpenRes(): boolean;
        clearOpenRes(): void;
        getOpenRes(): Transaction.Open.Res | undefined;
        setOpenRes(value?: Transaction.Open.Res): Res;


        hasCommitRes(): boolean;
        clearCommitRes(): void;
        getCommitRes(): Transaction.Commit.Res | undefined;
        setCommitRes(value?: Transaction.Commit.Res): Res;


        hasRollbackRes(): boolean;
        clearRollbackRes(): void;
        getRollbackRes(): Transaction.Rollback.Res | undefined;
        setRollbackRes(value?: Transaction.Rollback.Res): Res;


        hasQueryRes(): boolean;
        clearQueryRes(): void;
        getQueryRes(): query_pb.Query.Res | undefined;
        setQueryRes(value?: query_pb.Query.Res): Res;


        hasConceptManagerRes(): boolean;
        clearConceptManagerRes(): void;
        getConceptManagerRes(): concept_pb.ConceptManager.Res | undefined;
        setConceptManagerRes(value?: concept_pb.ConceptManager.Res): Res;


        hasThingRes(): boolean;
        clearThingRes(): void;
        getThingRes(): concept_pb.Thing.Res | undefined;
        setThingRes(value?: concept_pb.Thing.Res): Res;


        hasTypeRes(): boolean;
        clearTypeRes(): void;
        getTypeRes(): concept_pb.Type.Res | undefined;
        setTypeRes(value?: concept_pb.Type.Res): Res;


        hasRuleRes(): boolean;
        clearRuleRes(): void;
        getRuleRes(): concept_pb.Rule.Res | undefined;
        setRuleRes(value?: concept_pb.Rule.Res): Res;


        getResCase(): Res.ResCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Res.AsObject;
        static toObject(includeInstance: boolean, msg: Res): Res.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Res, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Res;
        static deserializeBinaryFromReader(message: Res, reader: jspb.BinaryReader): Res;
    }

    export namespace Res {
        export type AsObject = {
            id: string,
            done: boolean,
            pb_continue: boolean,
            openRes?: Transaction.Open.Res.AsObject,
            commitRes?: Transaction.Commit.Res.AsObject,
            rollbackRes?: Transaction.Rollback.Res.AsObject,
            queryRes?: query_pb.Query.Res.AsObject,
            conceptManagerRes?: concept_pb.ConceptManager.Res.AsObject,
            thingRes?: concept_pb.Thing.Res.AsObject,
            typeRes?: concept_pb.Type.Res.AsObject,
            ruleRes?: concept_pb.Rule.Res.AsObject,
        }

        export enum ResCase {
            RES_NOT_SET = 0,
        
    DONE = 2,

    CONTINUE = 4,

    OPEN_RES = 5,

    COMMIT_RES = 6,

    ROLLBACK_RES = 7,

    QUERY_RES = 8,

    CONCEPT_MANAGER_RES = 9,

    THING_RES = 10,

    TYPE_RES = 11,

    RULE_RES = 12,

        }

    }

    export class Open extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Open.AsObject;
        static toObject(includeInstance: boolean, msg: Open): Open.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Open, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Open;
        static deserializeBinaryFromReader(message: Open, reader: jspb.BinaryReader): Open;
    }

    export namespace Open {
        export type AsObject = {
        }


        export class Req extends jspb.Message { 
            getSessionId(): Uint8Array | string;
            getSessionId_asU8(): Uint8Array;
            getSessionId_asB64(): string;
            setSessionId(value: Uint8Array | string): Req;

            getType(): Transaction.Type;
            setType(value: Transaction.Type): Req;


            hasOptions(): boolean;
            clearOptions(): void;
            getOptions(): options_pb.Options | undefined;
            setOptions(value?: options_pb.Options): Req;


            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Req.AsObject;
            static toObject(includeInstance: boolean, msg: Req): Req.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Req, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Req;
            static deserializeBinaryFromReader(message: Req, reader: jspb.BinaryReader): Req;
        }

        export namespace Req {
            export type AsObject = {
                sessionId: Uint8Array | string,
                type: Transaction.Type,
                options?: options_pb.Options.AsObject,
            }
        }

        export class Res extends jspb.Message { 
            getProcessingTimeMillis(): number;
            setProcessingTimeMillis(value: number): Res;


            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Res.AsObject;
            static toObject(includeInstance: boolean, msg: Res): Res.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Res, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Res;
            static deserializeBinaryFromReader(message: Res, reader: jspb.BinaryReader): Res;
        }

        export namespace Res {
            export type AsObject = {
                processingTimeMillis: number,
            }
        }

    }

    export class Commit extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Commit.AsObject;
        static toObject(includeInstance: boolean, msg: Commit): Commit.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Commit, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Commit;
        static deserializeBinaryFromReader(message: Commit, reader: jspb.BinaryReader): Commit;
    }

    export namespace Commit {
        export type AsObject = {
        }


        export class Req extends jspb.Message { 

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Req.AsObject;
            static toObject(includeInstance: boolean, msg: Req): Req.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Req, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Req;
            static deserializeBinaryFromReader(message: Req, reader: jspb.BinaryReader): Req;
        }

        export namespace Req {
            export type AsObject = {
            }
        }

        export class Res extends jspb.Message { 

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Res.AsObject;
            static toObject(includeInstance: boolean, msg: Res): Res.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Res, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Res;
            static deserializeBinaryFromReader(message: Res, reader: jspb.BinaryReader): Res;
        }

        export namespace Res {
            export type AsObject = {
            }
        }

    }

    export class Rollback extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Rollback.AsObject;
        static toObject(includeInstance: boolean, msg: Rollback): Rollback.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Rollback, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Rollback;
        static deserializeBinaryFromReader(message: Rollback, reader: jspb.BinaryReader): Rollback;
    }

    export namespace Rollback {
        export type AsObject = {
        }


        export class Req extends jspb.Message { 

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Req.AsObject;
            static toObject(includeInstance: boolean, msg: Req): Req.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Req, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Req;
            static deserializeBinaryFromReader(message: Req, reader: jspb.BinaryReader): Req;
        }

        export namespace Req {
            export type AsObject = {
            }
        }

        export class Res extends jspb.Message { 

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Res.AsObject;
            static toObject(includeInstance: boolean, msg: Res): Res.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Res, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Res;
            static deserializeBinaryFromReader(message: Res, reader: jspb.BinaryReader): Res;
        }

        export namespace Res {
            export type AsObject = {
            }
        }

    }


    export enum Type {
    READ = 0,
    WRITE = 1,
    }

}
