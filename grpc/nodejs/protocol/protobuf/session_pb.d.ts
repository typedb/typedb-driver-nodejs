// package: grakn.protocol
// file: session.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as options_pb from "./options_pb";

export class Session extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Session.AsObject;
    static toObject(includeInstance: boolean, msg: Session): Session.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Session, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Session;
    static deserializeBinaryFromReader(message: Session, reader: jspb.BinaryReader): Session;
}

export namespace Session {
    export type AsObject = {
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
            getDatabase(): string;
            setDatabase(value: string): Req;

            getType(): Session.Type;
            setType(value: Session.Type): Req;


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
                database: string,
                type: Session.Type,
                options?: options_pb.Options.AsObject,
            }
        }

        export class Res extends jspb.Message { 
            getSessionId(): Uint8Array | string;
            getSessionId_asU8(): Uint8Array;
            getSessionId_asB64(): string;
            setSessionId(value: Uint8Array | string): Res;


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
                sessionId: Uint8Array | string,
            }
        }

    }

    export class Close extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Close.AsObject;
        static toObject(includeInstance: boolean, msg: Close): Close.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Close, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Close;
        static deserializeBinaryFromReader(message: Close, reader: jspb.BinaryReader): Close;
    }

    export namespace Close {
        export type AsObject = {
        }


        export class Req extends jspb.Message { 
            getSessionId(): Uint8Array | string;
            getSessionId_asU8(): Uint8Array;
            getSessionId_asB64(): string;
            setSessionId(value: Uint8Array | string): Req;


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
    DATA = 0,
    SCHEMA = 1,
    }

}
