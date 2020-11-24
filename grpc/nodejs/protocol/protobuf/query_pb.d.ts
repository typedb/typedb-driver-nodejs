// package: grakn.protocol
// file: query.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as answer_pb from "./answer_pb";
import * as options_pb from "./options_pb";

export class Query extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Query.AsObject;
    static toObject(includeInstance: boolean, msg: Query): Query.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Query, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Query;
    static deserializeBinaryFromReader(message: Query, reader: jspb.BinaryReader): Query;
}

export namespace Query {
    export type AsObject = {
    }


    export class Req extends jspb.Message { 

        hasOptions(): boolean;
        clearOptions(): void;
        getOptions(): options_pb.Options | undefined;
        setOptions(value?: options_pb.Options): Req;


        hasDeleteReq(): boolean;
        clearDeleteReq(): void;
        getDeleteReq(): Graql.Delete.Req | undefined;
        setDeleteReq(value?: Graql.Delete.Req): Req;


        hasDefineReq(): boolean;
        clearDefineReq(): void;
        getDefineReq(): Graql.Define.Req | undefined;
        setDefineReq(value?: Graql.Define.Req): Req;


        hasUndefineReq(): boolean;
        clearUndefineReq(): void;
        getUndefineReq(): Graql.Undefine.Req | undefined;
        setUndefineReq(value?: Graql.Undefine.Req): Req;


        hasMatchReq(): boolean;
        clearMatchReq(): void;
        getMatchReq(): Graql.Match.Req | undefined;
        setMatchReq(value?: Graql.Match.Req): Req;


        hasInsertReq(): boolean;
        clearInsertReq(): void;
        getInsertReq(): Graql.Insert.Req | undefined;
        setInsertReq(value?: Graql.Insert.Req): Req;


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
            options?: options_pb.Options.AsObject,
            deleteReq?: Graql.Delete.Req.AsObject,
            defineReq?: Graql.Define.Req.AsObject,
            undefineReq?: Graql.Undefine.Req.AsObject,
            matchReq?: Graql.Match.Req.AsObject,
            insertReq?: Graql.Insert.Req.AsObject,
        }

        export enum ReqCase {
            REQ_NOT_SET = 0,
        
    DELETE_REQ = 100,

    DEFINE_REQ = 101,

    UNDEFINE_REQ = 102,

    MATCH_REQ = 103,

    INSERT_REQ = 104,

        }

    }

    export class Res extends jspb.Message { 

        hasDeleteRes(): boolean;
        clearDeleteRes(): void;
        getDeleteRes(): Graql.Delete.Res | undefined;
        setDeleteRes(value?: Graql.Delete.Res): Res;


        hasDefineRes(): boolean;
        clearDefineRes(): void;
        getDefineRes(): Graql.Define.Res | undefined;
        setDefineRes(value?: Graql.Define.Res): Res;


        hasUndefineRes(): boolean;
        clearUndefineRes(): void;
        getUndefineRes(): Graql.Undefine.Res | undefined;
        setUndefineRes(value?: Graql.Undefine.Res): Res;


        hasMatchRes(): boolean;
        clearMatchRes(): void;
        getMatchRes(): Graql.Match.Res | undefined;
        setMatchRes(value?: Graql.Match.Res): Res;


        hasInsertRes(): boolean;
        clearInsertRes(): void;
        getInsertRes(): Graql.Insert.Res | undefined;
        setInsertRes(value?: Graql.Insert.Res): Res;


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
            deleteRes?: Graql.Delete.Res.AsObject,
            defineRes?: Graql.Define.Res.AsObject,
            undefineRes?: Graql.Undefine.Res.AsObject,
            matchRes?: Graql.Match.Res.AsObject,
            insertRes?: Graql.Insert.Res.AsObject,
        }

        export enum ResCase {
            RES_NOT_SET = 0,
        
    DELETE_RES = 100,

    DEFINE_RES = 101,

    UNDEFINE_RES = 102,

    MATCH_RES = 103,

    INSERT_RES = 104,

        }

    }

}

export class Graql extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Graql.AsObject;
    static toObject(includeInstance: boolean, msg: Graql): Graql.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Graql, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Graql;
    static deserializeBinaryFromReader(message: Graql, reader: jspb.BinaryReader): Graql;
}

export namespace Graql {
    export type AsObject = {
    }


    export class Match extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Match.AsObject;
        static toObject(includeInstance: boolean, msg: Match): Match.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Match, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Match;
        static deserializeBinaryFromReader(message: Match, reader: jspb.BinaryReader): Match;
    }

    export namespace Match {
        export type AsObject = {
        }


        export class Req extends jspb.Message { 
            getQuery(): string;
            setQuery(value: string): Req;


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
                query: string,
            }
        }

        export class Res extends jspb.Message { 

            hasAnswer(): boolean;
            clearAnswer(): void;
            getAnswer(): answer_pb.ConceptMap | undefined;
            setAnswer(value?: answer_pb.ConceptMap): Res;


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
                answer?: answer_pb.ConceptMap.AsObject,
            }
        }

    }

    export class Insert extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Insert.AsObject;
        static toObject(includeInstance: boolean, msg: Insert): Insert.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Insert, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Insert;
        static deserializeBinaryFromReader(message: Insert, reader: jspb.BinaryReader): Insert;
    }

    export namespace Insert {
        export type AsObject = {
        }


        export class Req extends jspb.Message { 
            getQuery(): string;
            setQuery(value: string): Req;


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
                query: string,
            }
        }

        export class Res extends jspb.Message { 

            hasAnswer(): boolean;
            clearAnswer(): void;
            getAnswer(): answer_pb.ConceptMap | undefined;
            setAnswer(value?: answer_pb.ConceptMap): Res;


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
                answer?: answer_pb.ConceptMap.AsObject,
            }
        }

    }

    export class Delete extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Delete.AsObject;
        static toObject(includeInstance: boolean, msg: Delete): Delete.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Delete, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Delete;
        static deserializeBinaryFromReader(message: Delete, reader: jspb.BinaryReader): Delete;
    }

    export namespace Delete {
        export type AsObject = {
        }


        export class Req extends jspb.Message { 
            getQuery(): string;
            setQuery(value: string): Req;


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
                query: string,
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

    export class Define extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Define.AsObject;
        static toObject(includeInstance: boolean, msg: Define): Define.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Define, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Define;
        static deserializeBinaryFromReader(message: Define, reader: jspb.BinaryReader): Define;
    }

    export namespace Define {
        export type AsObject = {
        }


        export class Req extends jspb.Message { 
            getQuery(): string;
            setQuery(value: string): Req;


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
                query: string,
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

    export class Undefine extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Undefine.AsObject;
        static toObject(includeInstance: boolean, msg: Undefine): Undefine.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Undefine, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Undefine;
        static deserializeBinaryFromReader(message: Undefine, reader: jspb.BinaryReader): Undefine;
    }

    export namespace Undefine {
        export type AsObject = {
        }


        export class Req extends jspb.Message { 
            getQuery(): string;
            setQuery(value: string): Req;


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
                query: string,
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

}
