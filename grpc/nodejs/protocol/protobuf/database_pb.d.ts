// package: grakn.protocol
// file: database.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Database extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Database.AsObject;
    static toObject(includeInstance: boolean, msg: Database): Database.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Database, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Database;
    static deserializeBinaryFromReader(message: Database, reader: jspb.BinaryReader): Database;
}

export namespace Database {
    export type AsObject = {
    }


    export class Contains extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Contains.AsObject;
        static toObject(includeInstance: boolean, msg: Contains): Contains.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Contains, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Contains;
        static deserializeBinaryFromReader(message: Contains, reader: jspb.BinaryReader): Contains;
    }

    export namespace Contains {
        export type AsObject = {
        }


        export class Req extends jspb.Message { 
            getName(): string;
            setName(value: string): Req;


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
                name: string,
            }
        }

        export class Res extends jspb.Message { 
            getContains(): boolean;
            setContains(value: boolean): Res;


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
                contains: boolean,
            }
        }

    }

    export class Create extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Create.AsObject;
        static toObject(includeInstance: boolean, msg: Create): Create.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Create, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Create;
        static deserializeBinaryFromReader(message: Create, reader: jspb.BinaryReader): Create;
    }

    export namespace Create {
        export type AsObject = {
        }


        export class Req extends jspb.Message { 
            getName(): string;
            setName(value: string): Req;


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
                name: string,
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

    export class All extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): All.AsObject;
        static toObject(includeInstance: boolean, msg: All): All.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: All, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): All;
        static deserializeBinaryFromReader(message: All, reader: jspb.BinaryReader): All;
    }

    export namespace All {
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
            clearNamesList(): void;
            getNamesList(): Array<string>;
            setNamesList(value: Array<string>): Res;
            addNames(value: string, index?: number): string;


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
                namesList: Array<string>,
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
            getName(): string;
            setName(value: string): Req;


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
                name: string,
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
