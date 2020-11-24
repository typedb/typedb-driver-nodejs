// package: grakn.protocol
// file: concept.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ConceptManager extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConceptManager.AsObject;
    static toObject(includeInstance: boolean, msg: ConceptManager): ConceptManager.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConceptManager, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConceptManager;
    static deserializeBinaryFromReader(message: ConceptManager, reader: jspb.BinaryReader): ConceptManager;
}

export namespace ConceptManager {
    export type AsObject = {
    }


    export class Req extends jspb.Message { 

        hasGetTypeReq(): boolean;
        clearGetTypeReq(): void;
        getGetTypeReq(): ConceptManager.GetType.Req | undefined;
        setGetTypeReq(value?: ConceptManager.GetType.Req): Req;


        hasGetThingReq(): boolean;
        clearGetThingReq(): void;
        getGetThingReq(): ConceptManager.GetThing.Req | undefined;
        setGetThingReq(value?: ConceptManager.GetThing.Req): Req;


        hasGetRuleReq(): boolean;
        clearGetRuleReq(): void;
        getGetRuleReq(): ConceptManager.GetRule.Req | undefined;
        setGetRuleReq(value?: ConceptManager.GetRule.Req): Req;


        hasPutEntityTypeReq(): boolean;
        clearPutEntityTypeReq(): void;
        getPutEntityTypeReq(): ConceptManager.PutEntityType.Req | undefined;
        setPutEntityTypeReq(value?: ConceptManager.PutEntityType.Req): Req;


        hasPutAttributeTypeReq(): boolean;
        clearPutAttributeTypeReq(): void;
        getPutAttributeTypeReq(): ConceptManager.PutAttributeType.Req | undefined;
        setPutAttributeTypeReq(value?: ConceptManager.PutAttributeType.Req): Req;


        hasPutRelationTypeReq(): boolean;
        clearPutRelationTypeReq(): void;
        getPutRelationTypeReq(): ConceptManager.PutRelationType.Req | undefined;
        setPutRelationTypeReq(value?: ConceptManager.PutRelationType.Req): Req;


        hasPutRuleReq(): boolean;
        clearPutRuleReq(): void;
        getPutRuleReq(): ConceptManager.PutRule.Req | undefined;
        setPutRuleReq(value?: ConceptManager.PutRule.Req): Req;


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
            getTypeReq?: ConceptManager.GetType.Req.AsObject,
            getThingReq?: ConceptManager.GetThing.Req.AsObject,
            getRuleReq?: ConceptManager.GetRule.Req.AsObject,
            putEntityTypeReq?: ConceptManager.PutEntityType.Req.AsObject,
            putAttributeTypeReq?: ConceptManager.PutAttributeType.Req.AsObject,
            putRelationTypeReq?: ConceptManager.PutRelationType.Req.AsObject,
            putRuleReq?: ConceptManager.PutRule.Req.AsObject,
        }

        export enum ReqCase {
            REQ_NOT_SET = 0,
        
    GET_TYPE_REQ = 1,

    GET_THING_REQ = 2,

    GET_RULE_REQ = 3,

    PUT_ENTITY_TYPE_REQ = 4,

    PUT_ATTRIBUTE_TYPE_REQ = 5,

    PUT_RELATION_TYPE_REQ = 6,

    PUT_RULE_REQ = 7,

        }

    }

    export class Res extends jspb.Message { 

        hasGetTypeRes(): boolean;
        clearGetTypeRes(): void;
        getGetTypeRes(): ConceptManager.GetType.Res | undefined;
        setGetTypeRes(value?: ConceptManager.GetType.Res): Res;


        hasGetThingRes(): boolean;
        clearGetThingRes(): void;
        getGetThingRes(): ConceptManager.GetThing.Res | undefined;
        setGetThingRes(value?: ConceptManager.GetThing.Res): Res;


        hasGetRuleRes(): boolean;
        clearGetRuleRes(): void;
        getGetRuleRes(): ConceptManager.GetRule.Res | undefined;
        setGetRuleRes(value?: ConceptManager.GetRule.Res): Res;


        hasPutEntityTypeRes(): boolean;
        clearPutEntityTypeRes(): void;
        getPutEntityTypeRes(): ConceptManager.PutEntityType.Res | undefined;
        setPutEntityTypeRes(value?: ConceptManager.PutEntityType.Res): Res;


        hasPutAttributeTypeRes(): boolean;
        clearPutAttributeTypeRes(): void;
        getPutAttributeTypeRes(): ConceptManager.PutAttributeType.Res | undefined;
        setPutAttributeTypeRes(value?: ConceptManager.PutAttributeType.Res): Res;


        hasPutRelationTypeRes(): boolean;
        clearPutRelationTypeRes(): void;
        getPutRelationTypeRes(): ConceptManager.PutRelationType.Res | undefined;
        setPutRelationTypeRes(value?: ConceptManager.PutRelationType.Res): Res;


        hasPutRuleRes(): boolean;
        clearPutRuleRes(): void;
        getPutRuleRes(): ConceptManager.PutRule.Res | undefined;
        setPutRuleRes(value?: ConceptManager.PutRule.Res): Res;


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
            getTypeRes?: ConceptManager.GetType.Res.AsObject,
            getThingRes?: ConceptManager.GetThing.Res.AsObject,
            getRuleRes?: ConceptManager.GetRule.Res.AsObject,
            putEntityTypeRes?: ConceptManager.PutEntityType.Res.AsObject,
            putAttributeTypeRes?: ConceptManager.PutAttributeType.Res.AsObject,
            putRelationTypeRes?: ConceptManager.PutRelationType.Res.AsObject,
            putRuleRes?: ConceptManager.PutRule.Res.AsObject,
        }

        export enum ResCase {
            RES_NOT_SET = 0,
        
    GET_TYPE_RES = 1,

    GET_THING_RES = 2,

    GET_RULE_RES = 3,

    PUT_ENTITY_TYPE_RES = 4,

    PUT_ATTRIBUTE_TYPE_RES = 5,

    PUT_RELATION_TYPE_RES = 6,

    PUT_RULE_RES = 7,

        }

    }

    export class GetType extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): GetType.AsObject;
        static toObject(includeInstance: boolean, msg: GetType): GetType.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: GetType, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): GetType;
        static deserializeBinaryFromReader(message: GetType, reader: jspb.BinaryReader): GetType;
    }

    export namespace GetType {
        export type AsObject = {
        }


        export class Req extends jspb.Message { 
            getLabel(): string;
            setLabel(value: string): Req;


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
                label: string,
            }
        }

        export class Res extends jspb.Message { 

            hasType(): boolean;
            clearType(): void;
            getType(): Type | undefined;
            setType(value?: Type): Res;


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
                type?: Type.AsObject,
            }

            export enum ResCase {
                RES_NOT_SET = 0,
            
    TYPE = 1,

            }

        }

    }

    export class GetThing extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): GetThing.AsObject;
        static toObject(includeInstance: boolean, msg: GetThing): GetThing.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: GetThing, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): GetThing;
        static deserializeBinaryFromReader(message: GetThing, reader: jspb.BinaryReader): GetThing;
    }

    export namespace GetThing {
        export type AsObject = {
        }


        export class Req extends jspb.Message { 
            getIid(): Uint8Array | string;
            getIid_asU8(): Uint8Array;
            getIid_asB64(): string;
            setIid(value: Uint8Array | string): Req;


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
                iid: Uint8Array | string,
            }
        }

        export class Res extends jspb.Message { 

            hasThing(): boolean;
            clearThing(): void;
            getThing(): Thing | undefined;
            setThing(value?: Thing): Res;


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
                thing?: Thing.AsObject,
            }

            export enum ResCase {
                RES_NOT_SET = 0,
            
    THING = 1,

            }

        }

    }

    export class GetRule extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): GetRule.AsObject;
        static toObject(includeInstance: boolean, msg: GetRule): GetRule.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: GetRule, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): GetRule;
        static deserializeBinaryFromReader(message: GetRule, reader: jspb.BinaryReader): GetRule;
    }

    export namespace GetRule {
        export type AsObject = {
        }


        export class Req extends jspb.Message { 
            getLabel(): string;
            setLabel(value: string): Req;


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
                label: string,
            }
        }

        export class Res extends jspb.Message { 

            hasRule(): boolean;
            clearRule(): void;
            getRule(): Rule | undefined;
            setRule(value?: Rule): Res;


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
                rule?: Rule.AsObject,
            }

            export enum ResCase {
                RES_NOT_SET = 0,
            
    RULE = 1,

            }

        }

    }

    export class PutEntityType extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): PutEntityType.AsObject;
        static toObject(includeInstance: boolean, msg: PutEntityType): PutEntityType.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: PutEntityType, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): PutEntityType;
        static deserializeBinaryFromReader(message: PutEntityType, reader: jspb.BinaryReader): PutEntityType;
    }

    export namespace PutEntityType {
        export type AsObject = {
        }


        export class Req extends jspb.Message { 
            getLabel(): string;
            setLabel(value: string): Req;


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
                label: string,
            }
        }

        export class Res extends jspb.Message { 

            hasEntityType(): boolean;
            clearEntityType(): void;
            getEntityType(): Type | undefined;
            setEntityType(value?: Type): Res;


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
                entityType?: Type.AsObject,
            }
        }

    }

    export class PutAttributeType extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): PutAttributeType.AsObject;
        static toObject(includeInstance: boolean, msg: PutAttributeType): PutAttributeType.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: PutAttributeType, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): PutAttributeType;
        static deserializeBinaryFromReader(message: PutAttributeType, reader: jspb.BinaryReader): PutAttributeType;
    }

    export namespace PutAttributeType {
        export type AsObject = {
        }


        export class Req extends jspb.Message { 
            getLabel(): string;
            setLabel(value: string): Req;

            getValueType(): AttributeType.VALUE_TYPE;
            setValueType(value: AttributeType.VALUE_TYPE): Req;


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
                label: string,
                valueType: AttributeType.VALUE_TYPE,
            }
        }

        export class Res extends jspb.Message { 

            hasAttributeType(): boolean;
            clearAttributeType(): void;
            getAttributeType(): Type | undefined;
            setAttributeType(value?: Type): Res;


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
                attributeType?: Type.AsObject,
            }
        }

    }

    export class PutRelationType extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): PutRelationType.AsObject;
        static toObject(includeInstance: boolean, msg: PutRelationType): PutRelationType.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: PutRelationType, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): PutRelationType;
        static deserializeBinaryFromReader(message: PutRelationType, reader: jspb.BinaryReader): PutRelationType;
    }

    export namespace PutRelationType {
        export type AsObject = {
        }


        export class Req extends jspb.Message { 
            getLabel(): string;
            setLabel(value: string): Req;


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
                label: string,
            }
        }

        export class Res extends jspb.Message { 

            hasRelationType(): boolean;
            clearRelationType(): void;
            getRelationType(): Type | undefined;
            setRelationType(value?: Type): Res;


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
                relationType?: Type.AsObject,
            }
        }

    }

    export class PutRule extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): PutRule.AsObject;
        static toObject(includeInstance: boolean, msg: PutRule): PutRule.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: PutRule, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): PutRule;
        static deserializeBinaryFromReader(message: PutRule, reader: jspb.BinaryReader): PutRule;
    }

    export namespace PutRule {
        export type AsObject = {
        }


        export class Req extends jspb.Message { 
            getLabel(): string;
            setLabel(value: string): Req;

            getWhen(): string;
            setWhen(value: string): Req;

            getThen(): string;
            setThen(value: string): Req;


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
                label: string,
                when: string,
                then: string,
            }
        }

        export class Res extends jspb.Message { 

            hasRule(): boolean;
            clearRule(): void;
            getRule(): Rule | undefined;
            setRule(value?: Rule): Res;


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
                rule?: Rule.AsObject,
            }
        }

    }

}

export class Concept extends jspb.Message { 

    hasThing(): boolean;
    clearThing(): void;
    getThing(): Thing | undefined;
    setThing(value?: Thing): Concept;


    hasType(): boolean;
    clearType(): void;
    getType(): Type | undefined;
    setType(value?: Type): Concept;


    getConceptCase(): Concept.ConceptCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Concept.AsObject;
    static toObject(includeInstance: boolean, msg: Concept): Concept.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Concept, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Concept;
    static deserializeBinaryFromReader(message: Concept, reader: jspb.BinaryReader): Concept;
}

export namespace Concept {
    export type AsObject = {
        thing?: Thing.AsObject,
        type?: Type.AsObject,
    }

    export enum ConceptCase {
        CONCEPT_NOT_SET = 0,
    
    THING = 1,

    TYPE = 2,

    }

}

export class Thing extends jspb.Message { 
    getIid(): Uint8Array | string;
    getIid_asU8(): Uint8Array;
    getIid_asB64(): string;
    setIid(value: Uint8Array | string): Thing;

    getEncoding(): Thing.ENCODING;
    setEncoding(value: Thing.ENCODING): Thing;

    getValueType(): AttributeType.VALUE_TYPE;
    setValueType(value: AttributeType.VALUE_TYPE): Thing;


    hasValue(): boolean;
    clearValue(): void;
    getValue(): Attribute.Value | undefined;
    setValue(value?: Attribute.Value): Thing;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Thing.AsObject;
    static toObject(includeInstance: boolean, msg: Thing): Thing.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Thing, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Thing;
    static deserializeBinaryFromReader(message: Thing, reader: jspb.BinaryReader): Thing;
}

export namespace Thing {
    export type AsObject = {
        iid: Uint8Array | string,
        encoding: Thing.ENCODING,
        valueType: AttributeType.VALUE_TYPE,
        value?: Attribute.Value.AsObject,
    }


    export class Req extends jspb.Message { 
        getIid(): Uint8Array | string;
        getIid_asU8(): Uint8Array;
        getIid_asB64(): string;
        setIid(value: Uint8Array | string): Req;


        hasThingDeleteReq(): boolean;
        clearThingDeleteReq(): void;
        getThingDeleteReq(): Thing.Delete.Req | undefined;
        setThingDeleteReq(value?: Thing.Delete.Req): Req;


        hasThingGetTypeReq(): boolean;
        clearThingGetTypeReq(): void;
        getThingGetTypeReq(): Thing.GetType.Req | undefined;
        setThingGetTypeReq(value?: Thing.GetType.Req): Req;


        hasThingIsInferredReq(): boolean;
        clearThingIsInferredReq(): void;
        getThingIsInferredReq(): Thing.IsInferred.Req | undefined;
        setThingIsInferredReq(value?: Thing.IsInferred.Req): Req;


        hasThingSetHasReq(): boolean;
        clearThingSetHasReq(): void;
        getThingSetHasReq(): Thing.SetHas.Req | undefined;
        setThingSetHasReq(value?: Thing.SetHas.Req): Req;


        hasThingUnsetHasReq(): boolean;
        clearThingUnsetHasReq(): void;
        getThingUnsetHasReq(): Thing.UnsetHas.Req | undefined;
        setThingUnsetHasReq(value?: Thing.UnsetHas.Req): Req;


        hasThingGetHasReq(): boolean;
        clearThingGetHasReq(): void;
        getThingGetHasReq(): Thing.GetHas.Req | undefined;
        setThingGetHasReq(value?: Thing.GetHas.Req): Req;


        hasThingGetRelationsReq(): boolean;
        clearThingGetRelationsReq(): void;
        getThingGetRelationsReq(): Thing.GetRelations.Req | undefined;
        setThingGetRelationsReq(value?: Thing.GetRelations.Req): Req;


        hasThingGetPlaysReq(): boolean;
        clearThingGetPlaysReq(): void;
        getThingGetPlaysReq(): Thing.GetPlays.Req | undefined;
        setThingGetPlaysReq(value?: Thing.GetPlays.Req): Req;


        hasRelationAddPlayerReq(): boolean;
        clearRelationAddPlayerReq(): void;
        getRelationAddPlayerReq(): Relation.AddPlayer.Req | undefined;
        setRelationAddPlayerReq(value?: Relation.AddPlayer.Req): Req;


        hasRelationRemovePlayerReq(): boolean;
        clearRelationRemovePlayerReq(): void;
        getRelationRemovePlayerReq(): Relation.RemovePlayer.Req | undefined;
        setRelationRemovePlayerReq(value?: Relation.RemovePlayer.Req): Req;


        hasRelationGetPlayersReq(): boolean;
        clearRelationGetPlayersReq(): void;
        getRelationGetPlayersReq(): Relation.GetPlayers.Req | undefined;
        setRelationGetPlayersReq(value?: Relation.GetPlayers.Req): Req;


        hasRelationGetPlayersByRoleTypeReq(): boolean;
        clearRelationGetPlayersByRoleTypeReq(): void;
        getRelationGetPlayersByRoleTypeReq(): Relation.GetPlayersByRoleType.Req | undefined;
        setRelationGetPlayersByRoleTypeReq(value?: Relation.GetPlayersByRoleType.Req): Req;


        hasAttributeGetOwnersReq(): boolean;
        clearAttributeGetOwnersReq(): void;
        getAttributeGetOwnersReq(): Attribute.GetOwners.Req | undefined;
        setAttributeGetOwnersReq(value?: Attribute.GetOwners.Req): Req;


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
            iid: Uint8Array | string,
            thingDeleteReq?: Thing.Delete.Req.AsObject,
            thingGetTypeReq?: Thing.GetType.Req.AsObject,
            thingIsInferredReq?: Thing.IsInferred.Req.AsObject,
            thingSetHasReq?: Thing.SetHas.Req.AsObject,
            thingUnsetHasReq?: Thing.UnsetHas.Req.AsObject,
            thingGetHasReq?: Thing.GetHas.Req.AsObject,
            thingGetRelationsReq?: Thing.GetRelations.Req.AsObject,
            thingGetPlaysReq?: Thing.GetPlays.Req.AsObject,
            relationAddPlayerReq?: Relation.AddPlayer.Req.AsObject,
            relationRemovePlayerReq?: Relation.RemovePlayer.Req.AsObject,
            relationGetPlayersReq?: Relation.GetPlayers.Req.AsObject,
            relationGetPlayersByRoleTypeReq?: Relation.GetPlayersByRoleType.Req.AsObject,
            attributeGetOwnersReq?: Attribute.GetOwners.Req.AsObject,
        }

        export enum ReqCase {
            REQ_NOT_SET = 0,
        
    THING_DELETE_REQ = 100,

    THING_GET_TYPE_REQ = 101,

    THING_IS_INFERRED_REQ = 102,

    THING_SET_HAS_REQ = 103,

    THING_UNSET_HAS_REQ = 104,

    THING_GET_HAS_REQ = 105,

    THING_GET_RELATIONS_REQ = 106,

    THING_GET_PLAYS_REQ = 107,

    RELATION_ADD_PLAYER_REQ = 200,

    RELATION_REMOVE_PLAYER_REQ = 201,

    RELATION_GET_PLAYERS_REQ = 202,

    RELATION_GET_PLAYERS_BY_ROLE_TYPE_REQ = 203,

    ATTRIBUTE_GET_OWNERS_REQ = 300,

        }

    }

    export class Res extends jspb.Message { 

        hasThingDeleteRes(): boolean;
        clearThingDeleteRes(): void;
        getThingDeleteRes(): Thing.Delete.Res | undefined;
        setThingDeleteRes(value?: Thing.Delete.Res): Res;


        hasThingGetTypeRes(): boolean;
        clearThingGetTypeRes(): void;
        getThingGetTypeRes(): Thing.GetType.Res | undefined;
        setThingGetTypeRes(value?: Thing.GetType.Res): Res;


        hasThingIsInferredRes(): boolean;
        clearThingIsInferredRes(): void;
        getThingIsInferredRes(): Thing.IsInferred.Res | undefined;
        setThingIsInferredRes(value?: Thing.IsInferred.Res): Res;


        hasThingSetHasRes(): boolean;
        clearThingSetHasRes(): void;
        getThingSetHasRes(): Thing.SetHas.Res | undefined;
        setThingSetHasRes(value?: Thing.SetHas.Res): Res;


        hasThingUnsetHasRes(): boolean;
        clearThingUnsetHasRes(): void;
        getThingUnsetHasRes(): Thing.UnsetHas.Res | undefined;
        setThingUnsetHasRes(value?: Thing.UnsetHas.Res): Res;


        hasThingGetHasRes(): boolean;
        clearThingGetHasRes(): void;
        getThingGetHasRes(): Thing.GetHas.Res | undefined;
        setThingGetHasRes(value?: Thing.GetHas.Res): Res;


        hasThingGetRelationsRes(): boolean;
        clearThingGetRelationsRes(): void;
        getThingGetRelationsRes(): Thing.GetRelations.Res | undefined;
        setThingGetRelationsRes(value?: Thing.GetRelations.Res): Res;


        hasThingGetPlaysRes(): boolean;
        clearThingGetPlaysRes(): void;
        getThingGetPlaysRes(): Thing.GetPlays.Res | undefined;
        setThingGetPlaysRes(value?: Thing.GetPlays.Res): Res;


        hasRelationAddPlayerRes(): boolean;
        clearRelationAddPlayerRes(): void;
        getRelationAddPlayerRes(): Relation.AddPlayer.Res | undefined;
        setRelationAddPlayerRes(value?: Relation.AddPlayer.Res): Res;


        hasRelationRemovePlayerRes(): boolean;
        clearRelationRemovePlayerRes(): void;
        getRelationRemovePlayerRes(): Relation.RemovePlayer.Res | undefined;
        setRelationRemovePlayerRes(value?: Relation.RemovePlayer.Res): Res;


        hasRelationGetPlayersRes(): boolean;
        clearRelationGetPlayersRes(): void;
        getRelationGetPlayersRes(): Relation.GetPlayers.Res | undefined;
        setRelationGetPlayersRes(value?: Relation.GetPlayers.Res): Res;


        hasRelationGetPlayersByRoleTypeRes(): boolean;
        clearRelationGetPlayersByRoleTypeRes(): void;
        getRelationGetPlayersByRoleTypeRes(): Relation.GetPlayersByRoleType.Res | undefined;
        setRelationGetPlayersByRoleTypeRes(value?: Relation.GetPlayersByRoleType.Res): Res;


        hasAttributeGetOwnersRes(): boolean;
        clearAttributeGetOwnersRes(): void;
        getAttributeGetOwnersRes(): Attribute.GetOwners.Res | undefined;
        setAttributeGetOwnersRes(value?: Attribute.GetOwners.Res): Res;


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
            thingDeleteRes?: Thing.Delete.Res.AsObject,
            thingGetTypeRes?: Thing.GetType.Res.AsObject,
            thingIsInferredRes?: Thing.IsInferred.Res.AsObject,
            thingSetHasRes?: Thing.SetHas.Res.AsObject,
            thingUnsetHasRes?: Thing.UnsetHas.Res.AsObject,
            thingGetHasRes?: Thing.GetHas.Res.AsObject,
            thingGetRelationsRes?: Thing.GetRelations.Res.AsObject,
            thingGetPlaysRes?: Thing.GetPlays.Res.AsObject,
            relationAddPlayerRes?: Relation.AddPlayer.Res.AsObject,
            relationRemovePlayerRes?: Relation.RemovePlayer.Res.AsObject,
            relationGetPlayersRes?: Relation.GetPlayers.Res.AsObject,
            relationGetPlayersByRoleTypeRes?: Relation.GetPlayersByRoleType.Res.AsObject,
            attributeGetOwnersRes?: Attribute.GetOwners.Res.AsObject,
        }

        export enum ResCase {
            RES_NOT_SET = 0,
        
    THING_DELETE_RES = 100,

    THING_GET_TYPE_RES = 101,

    THING_IS_INFERRED_RES = 102,

    THING_SET_HAS_RES = 103,

    THING_UNSET_HAS_RES = 104,

    THING_GET_HAS_RES = 105,

    THING_GET_RELATIONS_RES = 106,

    THING_GET_PLAYS_RES = 107,

    RELATION_ADD_PLAYER_RES = 200,

    RELATION_REMOVE_PLAYER_RES = 201,

    RELATION_GET_PLAYERS_RES = 202,

    RELATION_GET_PLAYERS_BY_ROLE_TYPE_RES = 203,

    ATTRIBUTE_GET_OWNERS_RES = 300,

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

    export class IsInferred extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): IsInferred.AsObject;
        static toObject(includeInstance: boolean, msg: IsInferred): IsInferred.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: IsInferred, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): IsInferred;
        static deserializeBinaryFromReader(message: IsInferred, reader: jspb.BinaryReader): IsInferred;
    }

    export namespace IsInferred {
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
            getInferred(): boolean;
            setInferred(value: boolean): Res;


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
                inferred: boolean,
            }
        }

    }

    export class GetType extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): GetType.AsObject;
        static toObject(includeInstance: boolean, msg: GetType): GetType.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: GetType, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): GetType;
        static deserializeBinaryFromReader(message: GetType, reader: jspb.BinaryReader): GetType;
    }

    export namespace GetType {
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

            hasThingType(): boolean;
            clearThingType(): void;
            getThingType(): Type | undefined;
            setThingType(value?: Type): Res;


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
                thingType?: Type.AsObject,
            }
        }

    }

    export class SetHas extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SetHas.AsObject;
        static toObject(includeInstance: boolean, msg: SetHas): SetHas.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SetHas, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SetHas;
        static deserializeBinaryFromReader(message: SetHas, reader: jspb.BinaryReader): SetHas;
    }

    export namespace SetHas {
        export type AsObject = {
        }


        export class Req extends jspb.Message { 

            hasAttribute(): boolean;
            clearAttribute(): void;
            getAttribute(): Thing | undefined;
            setAttribute(value?: Thing): Req;


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
                attribute?: Thing.AsObject,
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

    export class UnsetHas extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): UnsetHas.AsObject;
        static toObject(includeInstance: boolean, msg: UnsetHas): UnsetHas.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: UnsetHas, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): UnsetHas;
        static deserializeBinaryFromReader(message: UnsetHas, reader: jspb.BinaryReader): UnsetHas;
    }

    export namespace UnsetHas {
        export type AsObject = {
        }


        export class Req extends jspb.Message { 

            hasAttribute(): boolean;
            clearAttribute(): void;
            getAttribute(): Thing | undefined;
            setAttribute(value?: Thing): Req;


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
                attribute?: Thing.AsObject,
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

    export class GetHas extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): GetHas.AsObject;
        static toObject(includeInstance: boolean, msg: GetHas): GetHas.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: GetHas, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): GetHas;
        static deserializeBinaryFromReader(message: GetHas, reader: jspb.BinaryReader): GetHas;
    }

    export namespace GetHas {
        export type AsObject = {
        }


        export class Req extends jspb.Message { 
            clearAttributeTypesList(): void;
            getAttributeTypesList(): Array<Type>;
            setAttributeTypesList(value: Array<Type>): Req;
            addAttributeTypes(value?: Type, index?: number): Type;

            getKeysOnly(): boolean;
            setKeysOnly(value: boolean): Req;


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
                attributeTypesList: Array<Type.AsObject>,
                keysOnly: boolean,
            }
        }

        export class Res extends jspb.Message { 

            hasAttribute(): boolean;
            clearAttribute(): void;
            getAttribute(): Thing | undefined;
            setAttribute(value?: Thing): Res;


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
                attribute?: Thing.AsObject,
            }
        }

    }

    export class GetPlays extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): GetPlays.AsObject;
        static toObject(includeInstance: boolean, msg: GetPlays): GetPlays.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: GetPlays, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): GetPlays;
        static deserializeBinaryFromReader(message: GetPlays, reader: jspb.BinaryReader): GetPlays;
    }

    export namespace GetPlays {
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

            hasRoleType(): boolean;
            clearRoleType(): void;
            getRoleType(): Type | undefined;
            setRoleType(value?: Type): Res;


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
                roleType?: Type.AsObject,
            }
        }

    }

    export class GetRelations extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): GetRelations.AsObject;
        static toObject(includeInstance: boolean, msg: GetRelations): GetRelations.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: GetRelations, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): GetRelations;
        static deserializeBinaryFromReader(message: GetRelations, reader: jspb.BinaryReader): GetRelations;
    }

    export namespace GetRelations {
        export type AsObject = {
        }


        export class Req extends jspb.Message { 
            clearRoleTypesList(): void;
            getRoleTypesList(): Array<Type>;
            setRoleTypesList(value: Array<Type>): Req;
            addRoleTypes(value?: Type, index?: number): Type;


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
                roleTypesList: Array<Type.AsObject>,
            }
        }

        export class Res extends jspb.Message { 

            hasRelation(): boolean;
            clearRelation(): void;
            getRelation(): Thing | undefined;
            setRelation(value?: Thing): Res;


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
                relation?: Thing.AsObject,
            }
        }

    }


    export enum ENCODING {
    ENTITY = 0,
    RELATION = 1,
    ATTRIBUTE = 2,
    }

}

export class Relation extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Relation.AsObject;
    static toObject(includeInstance: boolean, msg: Relation): Relation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Relation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Relation;
    static deserializeBinaryFromReader(message: Relation, reader: jspb.BinaryReader): Relation;
}

export namespace Relation {
    export type AsObject = {
    }


    export class GetPlayers extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): GetPlayers.AsObject;
        static toObject(includeInstance: boolean, msg: GetPlayers): GetPlayers.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: GetPlayers, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): GetPlayers;
        static deserializeBinaryFromReader(message: GetPlayers, reader: jspb.BinaryReader): GetPlayers;
    }

    export namespace GetPlayers {
        export type AsObject = {
        }


        export class Req extends jspb.Message { 
            clearRoleTypesList(): void;
            getRoleTypesList(): Array<Type>;
            setRoleTypesList(value: Array<Type>): Req;
            addRoleTypes(value?: Type, index?: number): Type;


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
                roleTypesList: Array<Type.AsObject>,
            }
        }

        export class Res extends jspb.Message { 

            hasThing(): boolean;
            clearThing(): void;
            getThing(): Thing | undefined;
            setThing(value?: Thing): Res;


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
                thing?: Thing.AsObject,
            }
        }

    }

    export class GetPlayersByRoleType extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): GetPlayersByRoleType.AsObject;
        static toObject(includeInstance: boolean, msg: GetPlayersByRoleType): GetPlayersByRoleType.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: GetPlayersByRoleType, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): GetPlayersByRoleType;
        static deserializeBinaryFromReader(message: GetPlayersByRoleType, reader: jspb.BinaryReader): GetPlayersByRoleType;
    }

    export namespace GetPlayersByRoleType {
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

            hasRoleType(): boolean;
            clearRoleType(): void;
            getRoleType(): Type | undefined;
            setRoleType(value?: Type): Res;


            hasPlayer(): boolean;
            clearPlayer(): void;
            getPlayer(): Thing | undefined;
            setPlayer(value?: Thing): Res;


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
                roleType?: Type.AsObject,
                player?: Thing.AsObject,
            }
        }

    }

    export class AddPlayer extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): AddPlayer.AsObject;
        static toObject(includeInstance: boolean, msg: AddPlayer): AddPlayer.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: AddPlayer, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): AddPlayer;
        static deserializeBinaryFromReader(message: AddPlayer, reader: jspb.BinaryReader): AddPlayer;
    }

    export namespace AddPlayer {
        export type AsObject = {
        }


        export class Req extends jspb.Message { 

            hasRoleType(): boolean;
            clearRoleType(): void;
            getRoleType(): Type | undefined;
            setRoleType(value?: Type): Req;


            hasPlayer(): boolean;
            clearPlayer(): void;
            getPlayer(): Thing | undefined;
            setPlayer(value?: Thing): Req;


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
                roleType?: Type.AsObject,
                player?: Thing.AsObject,
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

    export class RemovePlayer extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): RemovePlayer.AsObject;
        static toObject(includeInstance: boolean, msg: RemovePlayer): RemovePlayer.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: RemovePlayer, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): RemovePlayer;
        static deserializeBinaryFromReader(message: RemovePlayer, reader: jspb.BinaryReader): RemovePlayer;
    }

    export namespace RemovePlayer {
        export type AsObject = {
        }


        export class Req extends jspb.Message { 

            hasRoleType(): boolean;
            clearRoleType(): void;
            getRoleType(): Type | undefined;
            setRoleType(value?: Type): Req;


            hasPlayer(): boolean;
            clearPlayer(): void;
            getPlayer(): Thing | undefined;
            setPlayer(value?: Thing): Req;


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
                roleType?: Type.AsObject,
                player?: Thing.AsObject,
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

export class Attribute extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Attribute.AsObject;
    static toObject(includeInstance: boolean, msg: Attribute): Attribute.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Attribute, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Attribute;
    static deserializeBinaryFromReader(message: Attribute, reader: jspb.BinaryReader): Attribute;
}

export namespace Attribute {
    export type AsObject = {
    }


    export class GetOwners extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): GetOwners.AsObject;
        static toObject(includeInstance: boolean, msg: GetOwners): GetOwners.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: GetOwners, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): GetOwners;
        static deserializeBinaryFromReader(message: GetOwners, reader: jspb.BinaryReader): GetOwners;
    }

    export namespace GetOwners {
        export type AsObject = {
        }


        export class Req extends jspb.Message { 

            hasThingType(): boolean;
            clearThingType(): void;
            getThingType(): Type | undefined;
            setThingType(value?: Type): Req;


            getFilterCase(): Req.FilterCase;

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
                thingType?: Type.AsObject,
            }

            export enum FilterCase {
                FILTER_NOT_SET = 0,
            
    THING_TYPE = 1,

            }

        }

        export class Res extends jspb.Message { 

            hasThing(): boolean;
            clearThing(): void;
            getThing(): Thing | undefined;
            setThing(value?: Thing): Res;


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
                thing?: Thing.AsObject,
            }
        }

    }

    export class Value extends jspb.Message { 

        hasString(): boolean;
        clearString(): void;
        getString(): string;
        setString(value: string): Value;


        hasBoolean(): boolean;
        clearBoolean(): void;
        getBoolean(): boolean;
        setBoolean(value: boolean): Value;


        hasLong(): boolean;
        clearLong(): void;
        getLong(): number;
        setLong(value: number): Value;


        hasDouble(): boolean;
        clearDouble(): void;
        getDouble(): number;
        setDouble(value: number): Value;


        hasDateTime(): boolean;
        clearDateTime(): void;
        getDateTime(): number;
        setDateTime(value: number): Value;


        getValueCase(): Value.ValueCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Value.AsObject;
        static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Value;
        static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
    }

    export namespace Value {
        export type AsObject = {
            string: string,
            pb_boolean: boolean,
            pb_long: number,
            pb_double: number,
            dateTime: number,
        }

        export enum ValueCase {
            VALUE_NOT_SET = 0,
        
    STRING = 1,

    BOOLEAN = 2,

    LONG = 3,

    DOUBLE = 4,

    DATE_TIME = 5,

        }

    }

}

export class Type extends jspb.Message { 
    getLabel(): string;
    setLabel(value: string): Type;

    getScope(): string;
    setScope(value: string): Type;

    getEncoding(): Type.ENCODING;
    setEncoding(value: Type.ENCODING): Type;

    getValueType(): AttributeType.VALUE_TYPE;
    setValueType(value: AttributeType.VALUE_TYPE): Type;

    getRoot(): boolean;
    setRoot(value: boolean): Type;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Type.AsObject;
    static toObject(includeInstance: boolean, msg: Type): Type.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Type, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Type;
    static deserializeBinaryFromReader(message: Type, reader: jspb.BinaryReader): Type;
}

export namespace Type {
    export type AsObject = {
        label: string,
        scope: string,
        encoding: Type.ENCODING,
        valueType: AttributeType.VALUE_TYPE,
        root: boolean,
    }


    export class Req extends jspb.Message { 
        getLabel(): string;
        setLabel(value: string): Req;

        getScope(): string;
        setScope(value: string): Req;


        hasTypeDeleteReq(): boolean;
        clearTypeDeleteReq(): void;
        getTypeDeleteReq(): Type.Delete.Req | undefined;
        setTypeDeleteReq(value?: Type.Delete.Req): Req;


        hasTypeSetLabelReq(): boolean;
        clearTypeSetLabelReq(): void;
        getTypeSetLabelReq(): Type.SetLabel.Req | undefined;
        setTypeSetLabelReq(value?: Type.SetLabel.Req): Req;


        hasTypeIsAbstractReq(): boolean;
        clearTypeIsAbstractReq(): void;
        getTypeIsAbstractReq(): Type.IsAbstract.Req | undefined;
        setTypeIsAbstractReq(value?: Type.IsAbstract.Req): Req;


        hasTypeGetSupertypeReq(): boolean;
        clearTypeGetSupertypeReq(): void;
        getTypeGetSupertypeReq(): Type.GetSupertype.Req | undefined;
        setTypeGetSupertypeReq(value?: Type.GetSupertype.Req): Req;


        hasTypeSetSupertypeReq(): boolean;
        clearTypeSetSupertypeReq(): void;
        getTypeSetSupertypeReq(): Type.SetSupertype.Req | undefined;
        setTypeSetSupertypeReq(value?: Type.SetSupertype.Req): Req;


        hasTypeGetSupertypesReq(): boolean;
        clearTypeGetSupertypesReq(): void;
        getTypeGetSupertypesReq(): Type.GetSupertypes.Req | undefined;
        setTypeGetSupertypesReq(value?: Type.GetSupertypes.Req): Req;


        hasTypeGetSubtypesReq(): boolean;
        clearTypeGetSubtypesReq(): void;
        getTypeGetSubtypesReq(): Type.GetSubtypes.Req | undefined;
        setTypeGetSubtypesReq(value?: Type.GetSubtypes.Req): Req;


        hasRoleTypeGetRelationTypeReq(): boolean;
        clearRoleTypeGetRelationTypeReq(): void;
        getRoleTypeGetRelationTypeReq(): RoleType.GetRelationType.Req | undefined;
        setRoleTypeGetRelationTypeReq(value?: RoleType.GetRelationType.Req): Req;


        hasRoleTypeGetRelationTypesReq(): boolean;
        clearRoleTypeGetRelationTypesReq(): void;
        getRoleTypeGetRelationTypesReq(): RoleType.GetRelationTypes.Req | undefined;
        setRoleTypeGetRelationTypesReq(value?: RoleType.GetRelationTypes.Req): Req;


        hasRoleTypeGetPlayersReq(): boolean;
        clearRoleTypeGetPlayersReq(): void;
        getRoleTypeGetPlayersReq(): RoleType.GetPlayers.Req | undefined;
        setRoleTypeGetPlayersReq(value?: RoleType.GetPlayers.Req): Req;


        hasThingTypeSetAbstractReq(): boolean;
        clearThingTypeSetAbstractReq(): void;
        getThingTypeSetAbstractReq(): ThingType.SetAbstract.Req | undefined;
        setThingTypeSetAbstractReq(value?: ThingType.SetAbstract.Req): Req;


        hasThingTypeUnsetAbstractReq(): boolean;
        clearThingTypeUnsetAbstractReq(): void;
        getThingTypeUnsetAbstractReq(): ThingType.UnsetAbstract.Req | undefined;
        setThingTypeUnsetAbstractReq(value?: ThingType.UnsetAbstract.Req): Req;


        hasThingTypeSetOwnsReq(): boolean;
        clearThingTypeSetOwnsReq(): void;
        getThingTypeSetOwnsReq(): ThingType.SetOwns.Req | undefined;
        setThingTypeSetOwnsReq(value?: ThingType.SetOwns.Req): Req;


        hasThingTypeUnsetOwnsReq(): boolean;
        clearThingTypeUnsetOwnsReq(): void;
        getThingTypeUnsetOwnsReq(): ThingType.UnsetOwns.Req | undefined;
        setThingTypeUnsetOwnsReq(value?: ThingType.UnsetOwns.Req): Req;


        hasThingTypeSetPlaysReq(): boolean;
        clearThingTypeSetPlaysReq(): void;
        getThingTypeSetPlaysReq(): ThingType.SetPlays.Req | undefined;
        setThingTypeSetPlaysReq(value?: ThingType.SetPlays.Req): Req;


        hasThingTypeUnsetPlaysReq(): boolean;
        clearThingTypeUnsetPlaysReq(): void;
        getThingTypeUnsetPlaysReq(): ThingType.UnsetPlays.Req | undefined;
        setThingTypeUnsetPlaysReq(value?: ThingType.UnsetPlays.Req): Req;


        hasThingTypeGetInstancesReq(): boolean;
        clearThingTypeGetInstancesReq(): void;
        getThingTypeGetInstancesReq(): ThingType.GetInstances.Req | undefined;
        setThingTypeGetInstancesReq(value?: ThingType.GetInstances.Req): Req;


        hasThingTypeGetOwnsReq(): boolean;
        clearThingTypeGetOwnsReq(): void;
        getThingTypeGetOwnsReq(): ThingType.GetOwns.Req | undefined;
        setThingTypeGetOwnsReq(value?: ThingType.GetOwns.Req): Req;


        hasThingTypeGetPlaysReq(): boolean;
        clearThingTypeGetPlaysReq(): void;
        getThingTypeGetPlaysReq(): ThingType.GetPlays.Req | undefined;
        setThingTypeGetPlaysReq(value?: ThingType.GetPlays.Req): Req;


        hasEntityTypeCreateReq(): boolean;
        clearEntityTypeCreateReq(): void;
        getEntityTypeCreateReq(): EntityType.Create.Req | undefined;
        setEntityTypeCreateReq(value?: EntityType.Create.Req): Req;


        hasRelationTypeCreateReq(): boolean;
        clearRelationTypeCreateReq(): void;
        getRelationTypeCreateReq(): RelationType.Create.Req | undefined;
        setRelationTypeCreateReq(value?: RelationType.Create.Req): Req;


        hasRelationTypeGetRelatesForRoleLabelReq(): boolean;
        clearRelationTypeGetRelatesForRoleLabelReq(): void;
        getRelationTypeGetRelatesForRoleLabelReq(): RelationType.GetRelatesForRoleLabel.Req | undefined;
        setRelationTypeGetRelatesForRoleLabelReq(value?: RelationType.GetRelatesForRoleLabel.Req): Req;


        hasRelationTypeSetRelatesReq(): boolean;
        clearRelationTypeSetRelatesReq(): void;
        getRelationTypeSetRelatesReq(): RelationType.SetRelates.Req | undefined;
        setRelationTypeSetRelatesReq(value?: RelationType.SetRelates.Req): Req;


        hasRelationTypeUnsetRelatesReq(): boolean;
        clearRelationTypeUnsetRelatesReq(): void;
        getRelationTypeUnsetRelatesReq(): RelationType.UnsetRelates.Req | undefined;
        setRelationTypeUnsetRelatesReq(value?: RelationType.UnsetRelates.Req): Req;


        hasRelationTypeGetRelatesReq(): boolean;
        clearRelationTypeGetRelatesReq(): void;
        getRelationTypeGetRelatesReq(): RelationType.GetRelates.Req | undefined;
        setRelationTypeGetRelatesReq(value?: RelationType.GetRelates.Req): Req;


        hasAttributeTypePutReq(): boolean;
        clearAttributeTypePutReq(): void;
        getAttributeTypePutReq(): AttributeType.Put.Req | undefined;
        setAttributeTypePutReq(value?: AttributeType.Put.Req): Req;


        hasAttributeTypeGetReq(): boolean;
        clearAttributeTypeGetReq(): void;
        getAttributeTypeGetReq(): AttributeType.Get.Req | undefined;
        setAttributeTypeGetReq(value?: AttributeType.Get.Req): Req;


        hasAttributeTypeGetRegexReq(): boolean;
        clearAttributeTypeGetRegexReq(): void;
        getAttributeTypeGetRegexReq(): AttributeType.GetRegex.Req | undefined;
        setAttributeTypeGetRegexReq(value?: AttributeType.GetRegex.Req): Req;


        hasAttributeTypeSetRegexReq(): boolean;
        clearAttributeTypeSetRegexReq(): void;
        getAttributeTypeSetRegexReq(): AttributeType.SetRegex.Req | undefined;
        setAttributeTypeSetRegexReq(value?: AttributeType.SetRegex.Req): Req;


        hasAttributeTypeGetOwnersReq(): boolean;
        clearAttributeTypeGetOwnersReq(): void;
        getAttributeTypeGetOwnersReq(): AttributeType.GetOwners.Req | undefined;
        setAttributeTypeGetOwnersReq(value?: AttributeType.GetOwners.Req): Req;


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
            label: string,
            scope: string,
            typeDeleteReq?: Type.Delete.Req.AsObject,
            typeSetLabelReq?: Type.SetLabel.Req.AsObject,
            typeIsAbstractReq?: Type.IsAbstract.Req.AsObject,
            typeGetSupertypeReq?: Type.GetSupertype.Req.AsObject,
            typeSetSupertypeReq?: Type.SetSupertype.Req.AsObject,
            typeGetSupertypesReq?: Type.GetSupertypes.Req.AsObject,
            typeGetSubtypesReq?: Type.GetSubtypes.Req.AsObject,
            roleTypeGetRelationTypeReq?: RoleType.GetRelationType.Req.AsObject,
            roleTypeGetRelationTypesReq?: RoleType.GetRelationTypes.Req.AsObject,
            roleTypeGetPlayersReq?: RoleType.GetPlayers.Req.AsObject,
            thingTypeSetAbstractReq?: ThingType.SetAbstract.Req.AsObject,
            thingTypeUnsetAbstractReq?: ThingType.UnsetAbstract.Req.AsObject,
            thingTypeSetOwnsReq?: ThingType.SetOwns.Req.AsObject,
            thingTypeUnsetOwnsReq?: ThingType.UnsetOwns.Req.AsObject,
            thingTypeSetPlaysReq?: ThingType.SetPlays.Req.AsObject,
            thingTypeUnsetPlaysReq?: ThingType.UnsetPlays.Req.AsObject,
            thingTypeGetInstancesReq?: ThingType.GetInstances.Req.AsObject,
            thingTypeGetOwnsReq?: ThingType.GetOwns.Req.AsObject,
            thingTypeGetPlaysReq?: ThingType.GetPlays.Req.AsObject,
            entityTypeCreateReq?: EntityType.Create.Req.AsObject,
            relationTypeCreateReq?: RelationType.Create.Req.AsObject,
            relationTypeGetRelatesForRoleLabelReq?: RelationType.GetRelatesForRoleLabel.Req.AsObject,
            relationTypeSetRelatesReq?: RelationType.SetRelates.Req.AsObject,
            relationTypeUnsetRelatesReq?: RelationType.UnsetRelates.Req.AsObject,
            relationTypeGetRelatesReq?: RelationType.GetRelates.Req.AsObject,
            attributeTypePutReq?: AttributeType.Put.Req.AsObject,
            attributeTypeGetReq?: AttributeType.Get.Req.AsObject,
            attributeTypeGetRegexReq?: AttributeType.GetRegex.Req.AsObject,
            attributeTypeSetRegexReq?: AttributeType.SetRegex.Req.AsObject,
            attributeTypeGetOwnersReq?: AttributeType.GetOwners.Req.AsObject,
        }

        export enum ReqCase {
            REQ_NOT_SET = 0,
        
    TYPE_DELETE_REQ = 100,

    TYPE_SET_LABEL_REQ = 101,

    TYPE_IS_ABSTRACT_REQ = 102,

    TYPE_GET_SUPERTYPE_REQ = 103,

    TYPE_SET_SUPERTYPE_REQ = 104,

    TYPE_GET_SUPERTYPES_REQ = 105,

    TYPE_GET_SUBTYPES_REQ = 106,

    ROLE_TYPE_GET_RELATION_TYPE_REQ = 200,

    ROLE_TYPE_GET_RELATION_TYPES_REQ = 201,

    ROLE_TYPE_GET_PLAYERS_REQ = 202,

    THING_TYPE_SET_ABSTRACT_REQ = 300,

    THING_TYPE_UNSET_ABSTRACT_REQ = 301,

    THING_TYPE_SET_OWNS_REQ = 302,

    THING_TYPE_UNSET_OWNS_REQ = 303,

    THING_TYPE_SET_PLAYS_REQ = 304,

    THING_TYPE_UNSET_PLAYS_REQ = 305,

    THING_TYPE_GET_INSTANCES_REQ = 306,

    THING_TYPE_GET_OWNS_REQ = 307,

    THING_TYPE_GET_PLAYS_REQ = 308,

    ENTITY_TYPE_CREATE_REQ = 400,

    RELATION_TYPE_CREATE_REQ = 500,

    RELATION_TYPE_GET_RELATES_FOR_ROLE_LABEL_REQ = 501,

    RELATION_TYPE_SET_RELATES_REQ = 502,

    RELATION_TYPE_UNSET_RELATES_REQ = 503,

    RELATION_TYPE_GET_RELATES_REQ = 504,

    ATTRIBUTE_TYPE_PUT_REQ = 600,

    ATTRIBUTE_TYPE_GET_REQ = 601,

    ATTRIBUTE_TYPE_GET_REGEX_REQ = 602,

    ATTRIBUTE_TYPE_SET_REGEX_REQ = 603,

    ATTRIBUTE_TYPE_GET_OWNERS_REQ = 604,

        }

    }

    export class Res extends jspb.Message { 

        hasTypeDeleteRes(): boolean;
        clearTypeDeleteRes(): void;
        getTypeDeleteRes(): Type.Delete.Res | undefined;
        setTypeDeleteRes(value?: Type.Delete.Res): Res;


        hasTypeSetLabelRes(): boolean;
        clearTypeSetLabelRes(): void;
        getTypeSetLabelRes(): Type.SetLabel.Res | undefined;
        setTypeSetLabelRes(value?: Type.SetLabel.Res): Res;


        hasTypeIsAbstractRes(): boolean;
        clearTypeIsAbstractRes(): void;
        getTypeIsAbstractRes(): Type.IsAbstract.Res | undefined;
        setTypeIsAbstractRes(value?: Type.IsAbstract.Res): Res;


        hasTypeGetSupertypeRes(): boolean;
        clearTypeGetSupertypeRes(): void;
        getTypeGetSupertypeRes(): Type.GetSupertype.Res | undefined;
        setTypeGetSupertypeRes(value?: Type.GetSupertype.Res): Res;


        hasTypeSetSupertypeRes(): boolean;
        clearTypeSetSupertypeRes(): void;
        getTypeSetSupertypeRes(): Type.SetSupertype.Res | undefined;
        setTypeSetSupertypeRes(value?: Type.SetSupertype.Res): Res;


        hasTypeGetSupertypesRes(): boolean;
        clearTypeGetSupertypesRes(): void;
        getTypeGetSupertypesRes(): Type.GetSupertypes.Res | undefined;
        setTypeGetSupertypesRes(value?: Type.GetSupertypes.Res): Res;


        hasTypeGetSubtypesRes(): boolean;
        clearTypeGetSubtypesRes(): void;
        getTypeGetSubtypesRes(): Type.GetSubtypes.Res | undefined;
        setTypeGetSubtypesRes(value?: Type.GetSubtypes.Res): Res;


        hasRoleTypeGetRelationTypeRes(): boolean;
        clearRoleTypeGetRelationTypeRes(): void;
        getRoleTypeGetRelationTypeRes(): RoleType.GetRelationType.Res | undefined;
        setRoleTypeGetRelationTypeRes(value?: RoleType.GetRelationType.Res): Res;


        hasRoleTypeGetRelationTypesRes(): boolean;
        clearRoleTypeGetRelationTypesRes(): void;
        getRoleTypeGetRelationTypesRes(): RoleType.GetRelationTypes.Res | undefined;
        setRoleTypeGetRelationTypesRes(value?: RoleType.GetRelationTypes.Res): Res;


        hasRoleTypeGetPlayersRes(): boolean;
        clearRoleTypeGetPlayersRes(): void;
        getRoleTypeGetPlayersRes(): RoleType.GetPlayers.Res | undefined;
        setRoleTypeGetPlayersRes(value?: RoleType.GetPlayers.Res): Res;


        hasThingTypeSetAbstractRes(): boolean;
        clearThingTypeSetAbstractRes(): void;
        getThingTypeSetAbstractRes(): ThingType.SetAbstract.Res | undefined;
        setThingTypeSetAbstractRes(value?: ThingType.SetAbstract.Res): Res;


        hasThingTypeUnsetAbstractRes(): boolean;
        clearThingTypeUnsetAbstractRes(): void;
        getThingTypeUnsetAbstractRes(): ThingType.UnsetAbstract.Res | undefined;
        setThingTypeUnsetAbstractRes(value?: ThingType.UnsetAbstract.Res): Res;


        hasThingTypeSetOwnsRes(): boolean;
        clearThingTypeSetOwnsRes(): void;
        getThingTypeSetOwnsRes(): ThingType.SetOwns.Res | undefined;
        setThingTypeSetOwnsRes(value?: ThingType.SetOwns.Res): Res;


        hasThingTypeUnsetOwnsRes(): boolean;
        clearThingTypeUnsetOwnsRes(): void;
        getThingTypeUnsetOwnsRes(): ThingType.UnsetOwns.Res | undefined;
        setThingTypeUnsetOwnsRes(value?: ThingType.UnsetOwns.Res): Res;


        hasThingTypeSetPlaysRes(): boolean;
        clearThingTypeSetPlaysRes(): void;
        getThingTypeSetPlaysRes(): ThingType.SetPlays.Res | undefined;
        setThingTypeSetPlaysRes(value?: ThingType.SetPlays.Res): Res;


        hasThingTypeUnsetPlaysRes(): boolean;
        clearThingTypeUnsetPlaysRes(): void;
        getThingTypeUnsetPlaysRes(): ThingType.UnsetPlays.Res | undefined;
        setThingTypeUnsetPlaysRes(value?: ThingType.UnsetPlays.Res): Res;


        hasThingTypeGetInstancesRes(): boolean;
        clearThingTypeGetInstancesRes(): void;
        getThingTypeGetInstancesRes(): ThingType.GetInstances.Res | undefined;
        setThingTypeGetInstancesRes(value?: ThingType.GetInstances.Res): Res;


        hasThingTypeGetOwnsRes(): boolean;
        clearThingTypeGetOwnsRes(): void;
        getThingTypeGetOwnsRes(): ThingType.GetOwns.Res | undefined;
        setThingTypeGetOwnsRes(value?: ThingType.GetOwns.Res): Res;


        hasThingTypeGetPlaysRes(): boolean;
        clearThingTypeGetPlaysRes(): void;
        getThingTypeGetPlaysRes(): ThingType.GetPlays.Res | undefined;
        setThingTypeGetPlaysRes(value?: ThingType.GetPlays.Res): Res;


        hasEntityTypeCreateRes(): boolean;
        clearEntityTypeCreateRes(): void;
        getEntityTypeCreateRes(): EntityType.Create.Res | undefined;
        setEntityTypeCreateRes(value?: EntityType.Create.Res): Res;


        hasRelationTypeCreateRes(): boolean;
        clearRelationTypeCreateRes(): void;
        getRelationTypeCreateRes(): RelationType.Create.Res | undefined;
        setRelationTypeCreateRes(value?: RelationType.Create.Res): Res;


        hasRelationTypeGetRelatesForRoleLabelRes(): boolean;
        clearRelationTypeGetRelatesForRoleLabelRes(): void;
        getRelationTypeGetRelatesForRoleLabelRes(): RelationType.GetRelatesForRoleLabel.Res | undefined;
        setRelationTypeGetRelatesForRoleLabelRes(value?: RelationType.GetRelatesForRoleLabel.Res): Res;


        hasRelationTypeSetRelatesRes(): boolean;
        clearRelationTypeSetRelatesRes(): void;
        getRelationTypeSetRelatesRes(): RelationType.SetRelates.Res | undefined;
        setRelationTypeSetRelatesRes(value?: RelationType.SetRelates.Res): Res;


        hasRelationTypeUnsetRelatesRes(): boolean;
        clearRelationTypeUnsetRelatesRes(): void;
        getRelationTypeUnsetRelatesRes(): RelationType.UnsetRelates.Res | undefined;
        setRelationTypeUnsetRelatesRes(value?: RelationType.UnsetRelates.Res): Res;


        hasRelationTypeGetRelatesRes(): boolean;
        clearRelationTypeGetRelatesRes(): void;
        getRelationTypeGetRelatesRes(): RelationType.GetRelates.Res | undefined;
        setRelationTypeGetRelatesRes(value?: RelationType.GetRelates.Res): Res;


        hasAttributeTypePutRes(): boolean;
        clearAttributeTypePutRes(): void;
        getAttributeTypePutRes(): AttributeType.Put.Res | undefined;
        setAttributeTypePutRes(value?: AttributeType.Put.Res): Res;


        hasAttributeTypeGetRes(): boolean;
        clearAttributeTypeGetRes(): void;
        getAttributeTypeGetRes(): AttributeType.Get.Res | undefined;
        setAttributeTypeGetRes(value?: AttributeType.Get.Res): Res;


        hasAttributeTypeGetRegexRes(): boolean;
        clearAttributeTypeGetRegexRes(): void;
        getAttributeTypeGetRegexRes(): AttributeType.GetRegex.Res | undefined;
        setAttributeTypeGetRegexRes(value?: AttributeType.GetRegex.Res): Res;


        hasAttributeTypeSetRegexRes(): boolean;
        clearAttributeTypeSetRegexRes(): void;
        getAttributeTypeSetRegexRes(): AttributeType.SetRegex.Res | undefined;
        setAttributeTypeSetRegexRes(value?: AttributeType.SetRegex.Res): Res;


        hasAttributeTypeGetOwnersRes(): boolean;
        clearAttributeTypeGetOwnersRes(): void;
        getAttributeTypeGetOwnersRes(): AttributeType.GetOwners.Res | undefined;
        setAttributeTypeGetOwnersRes(value?: AttributeType.GetOwners.Res): Res;


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
            typeDeleteRes?: Type.Delete.Res.AsObject,
            typeSetLabelRes?: Type.SetLabel.Res.AsObject,
            typeIsAbstractRes?: Type.IsAbstract.Res.AsObject,
            typeGetSupertypeRes?: Type.GetSupertype.Res.AsObject,
            typeSetSupertypeRes?: Type.SetSupertype.Res.AsObject,
            typeGetSupertypesRes?: Type.GetSupertypes.Res.AsObject,
            typeGetSubtypesRes?: Type.GetSubtypes.Res.AsObject,
            roleTypeGetRelationTypeRes?: RoleType.GetRelationType.Res.AsObject,
            roleTypeGetRelationTypesRes?: RoleType.GetRelationTypes.Res.AsObject,
            roleTypeGetPlayersRes?: RoleType.GetPlayers.Res.AsObject,
            thingTypeSetAbstractRes?: ThingType.SetAbstract.Res.AsObject,
            thingTypeUnsetAbstractRes?: ThingType.UnsetAbstract.Res.AsObject,
            thingTypeSetOwnsRes?: ThingType.SetOwns.Res.AsObject,
            thingTypeUnsetOwnsRes?: ThingType.UnsetOwns.Res.AsObject,
            thingTypeSetPlaysRes?: ThingType.SetPlays.Res.AsObject,
            thingTypeUnsetPlaysRes?: ThingType.UnsetPlays.Res.AsObject,
            thingTypeGetInstancesRes?: ThingType.GetInstances.Res.AsObject,
            thingTypeGetOwnsRes?: ThingType.GetOwns.Res.AsObject,
            thingTypeGetPlaysRes?: ThingType.GetPlays.Res.AsObject,
            entityTypeCreateRes?: EntityType.Create.Res.AsObject,
            relationTypeCreateRes?: RelationType.Create.Res.AsObject,
            relationTypeGetRelatesForRoleLabelRes?: RelationType.GetRelatesForRoleLabel.Res.AsObject,
            relationTypeSetRelatesRes?: RelationType.SetRelates.Res.AsObject,
            relationTypeUnsetRelatesRes?: RelationType.UnsetRelates.Res.AsObject,
            relationTypeGetRelatesRes?: RelationType.GetRelates.Res.AsObject,
            attributeTypePutRes?: AttributeType.Put.Res.AsObject,
            attributeTypeGetRes?: AttributeType.Get.Res.AsObject,
            attributeTypeGetRegexRes?: AttributeType.GetRegex.Res.AsObject,
            attributeTypeSetRegexRes?: AttributeType.SetRegex.Res.AsObject,
            attributeTypeGetOwnersRes?: AttributeType.GetOwners.Res.AsObject,
        }

        export enum ResCase {
            RES_NOT_SET = 0,
        
    TYPE_DELETE_RES = 100,

    TYPE_SET_LABEL_RES = 101,

    TYPE_IS_ABSTRACT_RES = 102,

    TYPE_GET_SUPERTYPE_RES = 103,

    TYPE_SET_SUPERTYPE_RES = 104,

    TYPE_GET_SUPERTYPES_RES = 105,

    TYPE_GET_SUBTYPES_RES = 106,

    ROLE_TYPE_GET_RELATION_TYPE_RES = 200,

    ROLE_TYPE_GET_RELATION_TYPES_RES = 201,

    ROLE_TYPE_GET_PLAYERS_RES = 202,

    THING_TYPE_SET_ABSTRACT_RES = 300,

    THING_TYPE_UNSET_ABSTRACT_RES = 301,

    THING_TYPE_SET_OWNS_RES = 302,

    THING_TYPE_UNSET_OWNS_RES = 303,

    THING_TYPE_SET_PLAYS_RES = 304,

    THING_TYPE_UNSET_PLAYS_RES = 305,

    THING_TYPE_GET_INSTANCES_RES = 306,

    THING_TYPE_GET_OWNS_RES = 307,

    THING_TYPE_GET_PLAYS_RES = 308,

    ENTITY_TYPE_CREATE_RES = 400,

    RELATION_TYPE_CREATE_RES = 500,

    RELATION_TYPE_GET_RELATES_FOR_ROLE_LABEL_RES = 501,

    RELATION_TYPE_SET_RELATES_RES = 502,

    RELATION_TYPE_UNSET_RELATES_RES = 503,

    RELATION_TYPE_GET_RELATES_RES = 504,

    ATTRIBUTE_TYPE_PUT_RES = 600,

    ATTRIBUTE_TYPE_GET_RES = 601,

    ATTRIBUTE_TYPE_GET_REGEX_RES = 602,

    ATTRIBUTE_TYPE_SET_REGEX_RES = 603,

    ATTRIBUTE_TYPE_GET_OWNERS_RES = 604,

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

    export class SetLabel extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SetLabel.AsObject;
        static toObject(includeInstance: boolean, msg: SetLabel): SetLabel.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SetLabel, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SetLabel;
        static deserializeBinaryFromReader(message: SetLabel, reader: jspb.BinaryReader): SetLabel;
    }

    export namespace SetLabel {
        export type AsObject = {
        }


        export class Req extends jspb.Message { 
            getLabel(): string;
            setLabel(value: string): Req;


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
                label: string,
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

    export class IsAbstract extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): IsAbstract.AsObject;
        static toObject(includeInstance: boolean, msg: IsAbstract): IsAbstract.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: IsAbstract, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): IsAbstract;
        static deserializeBinaryFromReader(message: IsAbstract, reader: jspb.BinaryReader): IsAbstract;
    }

    export namespace IsAbstract {
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
            getAbstract(): boolean;
            setAbstract(value: boolean): Res;


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
                pb_abstract: boolean,
            }
        }

    }

    export class GetSupertype extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): GetSupertype.AsObject;
        static toObject(includeInstance: boolean, msg: GetSupertype): GetSupertype.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: GetSupertype, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): GetSupertype;
        static deserializeBinaryFromReader(message: GetSupertype, reader: jspb.BinaryReader): GetSupertype;
    }

    export namespace GetSupertype {
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

            hasType(): boolean;
            clearType(): void;
            getType(): Type | undefined;
            setType(value?: Type): Res;


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
                type?: Type.AsObject,
            }

            export enum ResCase {
                RES_NOT_SET = 0,
            
    TYPE = 1,

            }

        }

    }

    export class SetSupertype extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SetSupertype.AsObject;
        static toObject(includeInstance: boolean, msg: SetSupertype): SetSupertype.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SetSupertype, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SetSupertype;
        static deserializeBinaryFromReader(message: SetSupertype, reader: jspb.BinaryReader): SetSupertype;
    }

    export namespace SetSupertype {
        export type AsObject = {
        }


        export class Req extends jspb.Message { 

            hasType(): boolean;
            clearType(): void;
            getType(): Type | undefined;
            setType(value?: Type): Req;


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
                type?: Type.AsObject,
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

    export class GetSupertypes extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): GetSupertypes.AsObject;
        static toObject(includeInstance: boolean, msg: GetSupertypes): GetSupertypes.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: GetSupertypes, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): GetSupertypes;
        static deserializeBinaryFromReader(message: GetSupertypes, reader: jspb.BinaryReader): GetSupertypes;
    }

    export namespace GetSupertypes {
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

            hasType(): boolean;
            clearType(): void;
            getType(): Type | undefined;
            setType(value?: Type): Res;


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
                type?: Type.AsObject,
            }
        }

    }

    export class GetSubtypes extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): GetSubtypes.AsObject;
        static toObject(includeInstance: boolean, msg: GetSubtypes): GetSubtypes.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: GetSubtypes, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): GetSubtypes;
        static deserializeBinaryFromReader(message: GetSubtypes, reader: jspb.BinaryReader): GetSubtypes;
    }

    export namespace GetSubtypes {
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

            hasType(): boolean;
            clearType(): void;
            getType(): Type | undefined;
            setType(value?: Type): Res;


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
                type?: Type.AsObject,
            }
        }

    }


    export enum ENCODING {
    THING_TYPE = 0,
    ENTITY_TYPE = 1,
    RELATION_TYPE = 2,
    ATTRIBUTE_TYPE = 3,
    ROLE_TYPE = 4,
    }

}

export class RoleType extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RoleType.AsObject;
    static toObject(includeInstance: boolean, msg: RoleType): RoleType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RoleType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RoleType;
    static deserializeBinaryFromReader(message: RoleType, reader: jspb.BinaryReader): RoleType;
}

export namespace RoleType {
    export type AsObject = {
    }


    export class GetRelationType extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): GetRelationType.AsObject;
        static toObject(includeInstance: boolean, msg: GetRelationType): GetRelationType.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: GetRelationType, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): GetRelationType;
        static deserializeBinaryFromReader(message: GetRelationType, reader: jspb.BinaryReader): GetRelationType;
    }

    export namespace GetRelationType {
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

            hasRelationtype(): boolean;
            clearRelationtype(): void;
            getRelationtype(): Type | undefined;
            setRelationtype(value?: Type): Res;


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
                relationtype?: Type.AsObject,
            }
        }

    }

    export class GetRelationTypes extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): GetRelationTypes.AsObject;
        static toObject(includeInstance: boolean, msg: GetRelationTypes): GetRelationTypes.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: GetRelationTypes, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): GetRelationTypes;
        static deserializeBinaryFromReader(message: GetRelationTypes, reader: jspb.BinaryReader): GetRelationTypes;
    }

    export namespace GetRelationTypes {
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

            hasRelationtype(): boolean;
            clearRelationtype(): void;
            getRelationtype(): Type | undefined;
            setRelationtype(value?: Type): Res;


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
                relationtype?: Type.AsObject,
            }
        }

    }

    export class GetPlayers extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): GetPlayers.AsObject;
        static toObject(includeInstance: boolean, msg: GetPlayers): GetPlayers.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: GetPlayers, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): GetPlayers;
        static deserializeBinaryFromReader(message: GetPlayers, reader: jspb.BinaryReader): GetPlayers;
    }

    export namespace GetPlayers {
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

            hasThingtype(): boolean;
            clearThingtype(): void;
            getThingtype(): Type | undefined;
            setThingtype(value?: Type): Res;


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
                thingtype?: Type.AsObject,
            }
        }

    }

}

export class ThingType extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ThingType.AsObject;
    static toObject(includeInstance: boolean, msg: ThingType): ThingType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ThingType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ThingType;
    static deserializeBinaryFromReader(message: ThingType, reader: jspb.BinaryReader): ThingType;
}

export namespace ThingType {
    export type AsObject = {
    }


    export class SetAbstract extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SetAbstract.AsObject;
        static toObject(includeInstance: boolean, msg: SetAbstract): SetAbstract.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SetAbstract, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SetAbstract;
        static deserializeBinaryFromReader(message: SetAbstract, reader: jspb.BinaryReader): SetAbstract;
    }

    export namespace SetAbstract {
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

    export class UnsetAbstract extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): UnsetAbstract.AsObject;
        static toObject(includeInstance: boolean, msg: UnsetAbstract): UnsetAbstract.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: UnsetAbstract, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): UnsetAbstract;
        static deserializeBinaryFromReader(message: UnsetAbstract, reader: jspb.BinaryReader): UnsetAbstract;
    }

    export namespace UnsetAbstract {
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

    export class GetInstances extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): GetInstances.AsObject;
        static toObject(includeInstance: boolean, msg: GetInstances): GetInstances.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: GetInstances, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): GetInstances;
        static deserializeBinaryFromReader(message: GetInstances, reader: jspb.BinaryReader): GetInstances;
    }

    export namespace GetInstances {
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

            hasThing(): boolean;
            clearThing(): void;
            getThing(): Thing | undefined;
            setThing(value?: Thing): Res;


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
                thing?: Thing.AsObject,
            }
        }

    }

    export class GetOwns extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): GetOwns.AsObject;
        static toObject(includeInstance: boolean, msg: GetOwns): GetOwns.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: GetOwns, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): GetOwns;
        static deserializeBinaryFromReader(message: GetOwns, reader: jspb.BinaryReader): GetOwns;
    }

    export namespace GetOwns {
        export type AsObject = {
        }


        export class Req extends jspb.Message { 

            hasValueType(): boolean;
            clearValueType(): void;
            getValueType(): AttributeType.VALUE_TYPE;
            setValueType(value: AttributeType.VALUE_TYPE): Req;

            getKeysOnly(): boolean;
            setKeysOnly(value: boolean): Req;


            getFilterCase(): Req.FilterCase;

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
                valueType: AttributeType.VALUE_TYPE,
                keysOnly: boolean,
            }

            export enum FilterCase {
                FILTER_NOT_SET = 0,
            
    VALUE_TYPE = 1,

            }

        }

        export class Res extends jspb.Message { 

            hasAttributeType(): boolean;
            clearAttributeType(): void;
            getAttributeType(): Type | undefined;
            setAttributeType(value?: Type): Res;


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
                attributeType?: Type.AsObject,
            }
        }

    }

    export class GetPlays extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): GetPlays.AsObject;
        static toObject(includeInstance: boolean, msg: GetPlays): GetPlays.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: GetPlays, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): GetPlays;
        static deserializeBinaryFromReader(message: GetPlays, reader: jspb.BinaryReader): GetPlays;
    }

    export namespace GetPlays {
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

            hasRole(): boolean;
            clearRole(): void;
            getRole(): Type | undefined;
            setRole(value?: Type): Res;


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
                role?: Type.AsObject,
            }
        }

    }

    export class SetOwns extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SetOwns.AsObject;
        static toObject(includeInstance: boolean, msg: SetOwns): SetOwns.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SetOwns, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SetOwns;
        static deserializeBinaryFromReader(message: SetOwns, reader: jspb.BinaryReader): SetOwns;
    }

    export namespace SetOwns {
        export type AsObject = {
        }


        export class Req extends jspb.Message { 

            hasAttributeType(): boolean;
            clearAttributeType(): void;
            getAttributeType(): Type | undefined;
            setAttributeType(value?: Type): Req;


            hasOverriddenType(): boolean;
            clearOverriddenType(): void;
            getOverriddenType(): Type | undefined;
            setOverriddenType(value?: Type): Req;

            getIsKey(): boolean;
            setIsKey(value: boolean): Req;


            getOverriddenCase(): Req.OverriddenCase;

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
                attributeType?: Type.AsObject,
                overriddenType?: Type.AsObject,
                isKey: boolean,
            }

            export enum OverriddenCase {
                OVERRIDDEN_NOT_SET = 0,
            
    OVERRIDDEN_TYPE = 2,

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

    export class SetPlays extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SetPlays.AsObject;
        static toObject(includeInstance: boolean, msg: SetPlays): SetPlays.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SetPlays, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SetPlays;
        static deserializeBinaryFromReader(message: SetPlays, reader: jspb.BinaryReader): SetPlays;
    }

    export namespace SetPlays {
        export type AsObject = {
        }


        export class Req extends jspb.Message { 

            hasRole(): boolean;
            clearRole(): void;
            getRole(): Type | undefined;
            setRole(value?: Type): Req;


            hasOverriddenRole(): boolean;
            clearOverriddenRole(): void;
            getOverriddenRole(): Type | undefined;
            setOverriddenRole(value?: Type): Req;


            getOverriddenCase(): Req.OverriddenCase;

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
                role?: Type.AsObject,
                overriddenRole?: Type.AsObject,
            }

            export enum OverriddenCase {
                OVERRIDDEN_NOT_SET = 0,
            
    OVERRIDDEN_ROLE = 2,

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

    export class UnsetOwns extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): UnsetOwns.AsObject;
        static toObject(includeInstance: boolean, msg: UnsetOwns): UnsetOwns.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: UnsetOwns, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): UnsetOwns;
        static deserializeBinaryFromReader(message: UnsetOwns, reader: jspb.BinaryReader): UnsetOwns;
    }

    export namespace UnsetOwns {
        export type AsObject = {
        }


        export class Req extends jspb.Message { 

            hasAttributetype(): boolean;
            clearAttributetype(): void;
            getAttributetype(): Type | undefined;
            setAttributetype(value?: Type): Req;


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
                attributetype?: Type.AsObject,
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

    export class UnsetPlays extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): UnsetPlays.AsObject;
        static toObject(includeInstance: boolean, msg: UnsetPlays): UnsetPlays.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: UnsetPlays, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): UnsetPlays;
        static deserializeBinaryFromReader(message: UnsetPlays, reader: jspb.BinaryReader): UnsetPlays;
    }

    export namespace UnsetPlays {
        export type AsObject = {
        }


        export class Req extends jspb.Message { 

            hasRole(): boolean;
            clearRole(): void;
            getRole(): Type | undefined;
            setRole(value?: Type): Req;


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
                role?: Type.AsObject,
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

export class EntityType extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EntityType.AsObject;
    static toObject(includeInstance: boolean, msg: EntityType): EntityType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EntityType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EntityType;
    static deserializeBinaryFromReader(message: EntityType, reader: jspb.BinaryReader): EntityType;
}

export namespace EntityType {
    export type AsObject = {
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

            hasEntity(): boolean;
            clearEntity(): void;
            getEntity(): Thing | undefined;
            setEntity(value?: Thing): Res;


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
                entity?: Thing.AsObject,
            }
        }

    }

}

export class RelationType extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RelationType.AsObject;
    static toObject(includeInstance: boolean, msg: RelationType): RelationType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RelationType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RelationType;
    static deserializeBinaryFromReader(message: RelationType, reader: jspb.BinaryReader): RelationType;
}

export namespace RelationType {
    export type AsObject = {
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

            hasRelation(): boolean;
            clearRelation(): void;
            getRelation(): Thing | undefined;
            setRelation(value?: Thing): Res;


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
                relation?: Thing.AsObject,
            }
        }

    }

    export class GetRelates extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): GetRelates.AsObject;
        static toObject(includeInstance: boolean, msg: GetRelates): GetRelates.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: GetRelates, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): GetRelates;
        static deserializeBinaryFromReader(message: GetRelates, reader: jspb.BinaryReader): GetRelates;
    }

    export namespace GetRelates {
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

            hasRole(): boolean;
            clearRole(): void;
            getRole(): Type | undefined;
            setRole(value?: Type): Res;


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
                role?: Type.AsObject,
            }
        }

    }

    export class GetRelatesForRoleLabel extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): GetRelatesForRoleLabel.AsObject;
        static toObject(includeInstance: boolean, msg: GetRelatesForRoleLabel): GetRelatesForRoleLabel.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: GetRelatesForRoleLabel, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): GetRelatesForRoleLabel;
        static deserializeBinaryFromReader(message: GetRelatesForRoleLabel, reader: jspb.BinaryReader): GetRelatesForRoleLabel;
    }

    export namespace GetRelatesForRoleLabel {
        export type AsObject = {
        }


        export class Req extends jspb.Message { 
            getLabel(): string;
            setLabel(value: string): Req;


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
                label: string,
            }
        }

        export class Res extends jspb.Message { 

            hasRoleType(): boolean;
            clearRoleType(): void;
            getRoleType(): Type | undefined;
            setRoleType(value?: Type): Res;


            getRoleCase(): Res.RoleCase;

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
                roleType?: Type.AsObject,
            }

            export enum RoleCase {
                ROLE_NOT_SET = 0,
            
    ROLE_TYPE = 1,

            }

        }

    }

    export class SetRelates extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SetRelates.AsObject;
        static toObject(includeInstance: boolean, msg: SetRelates): SetRelates.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SetRelates, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SetRelates;
        static deserializeBinaryFromReader(message: SetRelates, reader: jspb.BinaryReader): SetRelates;
    }

    export namespace SetRelates {
        export type AsObject = {
        }


        export class Req extends jspb.Message { 
            getLabel(): string;
            setLabel(value: string): Req;


            hasOverriddenLabel(): boolean;
            clearOverriddenLabel(): void;
            getOverriddenLabel(): string;
            setOverriddenLabel(value: string): Req;


            getOverriddenCase(): Req.OverriddenCase;

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
                label: string,
                overriddenLabel: string,
            }

            export enum OverriddenCase {
                OVERRIDDEN_NOT_SET = 0,
            
    OVERRIDDEN_LABEL = 2,

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

    export class UnsetRelates extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): UnsetRelates.AsObject;
        static toObject(includeInstance: boolean, msg: UnsetRelates): UnsetRelates.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: UnsetRelates, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): UnsetRelates;
        static deserializeBinaryFromReader(message: UnsetRelates, reader: jspb.BinaryReader): UnsetRelates;
    }

    export namespace UnsetRelates {
        export type AsObject = {
        }


        export class Req extends jspb.Message { 
            getLabel(): string;
            setLabel(value: string): Req;


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
                label: string,
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

export class AttributeType extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AttributeType.AsObject;
    static toObject(includeInstance: boolean, msg: AttributeType): AttributeType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AttributeType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AttributeType;
    static deserializeBinaryFromReader(message: AttributeType, reader: jspb.BinaryReader): AttributeType;
}

export namespace AttributeType {
    export type AsObject = {
    }


    export class Put extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Put.AsObject;
        static toObject(includeInstance: boolean, msg: Put): Put.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Put, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Put;
        static deserializeBinaryFromReader(message: Put, reader: jspb.BinaryReader): Put;
    }

    export namespace Put {
        export type AsObject = {
        }


        export class Req extends jspb.Message { 

            hasValue(): boolean;
            clearValue(): void;
            getValue(): Attribute.Value | undefined;
            setValue(value?: Attribute.Value): Req;


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
                value?: Attribute.Value.AsObject,
            }
        }

        export class Res extends jspb.Message { 

            hasAttribute(): boolean;
            clearAttribute(): void;
            getAttribute(): Thing | undefined;
            setAttribute(value?: Thing): Res;


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
                attribute?: Thing.AsObject,
            }
        }

    }

    export class Get extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Get.AsObject;
        static toObject(includeInstance: boolean, msg: Get): Get.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Get, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Get;
        static deserializeBinaryFromReader(message: Get, reader: jspb.BinaryReader): Get;
    }

    export namespace Get {
        export type AsObject = {
        }


        export class Req extends jspb.Message { 

            hasValue(): boolean;
            clearValue(): void;
            getValue(): Attribute.Value | undefined;
            setValue(value?: Attribute.Value): Req;


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
                value?: Attribute.Value.AsObject,
            }
        }

        export class Res extends jspb.Message { 

            hasAttribute(): boolean;
            clearAttribute(): void;
            getAttribute(): Thing | undefined;
            setAttribute(value?: Thing): Res;


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
                attribute?: Thing.AsObject,
            }

            export enum ResCase {
                RES_NOT_SET = 0,
            
    ATTRIBUTE = 1,

            }

        }

    }

    export class GetOwners extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): GetOwners.AsObject;
        static toObject(includeInstance: boolean, msg: GetOwners): GetOwners.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: GetOwners, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): GetOwners;
        static deserializeBinaryFromReader(message: GetOwners, reader: jspb.BinaryReader): GetOwners;
    }

    export namespace GetOwners {
        export type AsObject = {
        }


        export class Req extends jspb.Message { 
            getOnlykey(): boolean;
            setOnlykey(value: boolean): Req;


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
                onlykey: boolean,
            }
        }

        export class Res extends jspb.Message { 

            hasOwner(): boolean;
            clearOwner(): void;
            getOwner(): Type | undefined;
            setOwner(value?: Type): Res;


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
                owner?: Type.AsObject,
            }
        }

    }

    export class GetRegex extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): GetRegex.AsObject;
        static toObject(includeInstance: boolean, msg: GetRegex): GetRegex.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: GetRegex, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): GetRegex;
        static deserializeBinaryFromReader(message: GetRegex, reader: jspb.BinaryReader): GetRegex;
    }

    export namespace GetRegex {
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
            getRegex(): string;
            setRegex(value: string): Res;


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
                regex: string,
            }
        }

    }

    export class SetRegex extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SetRegex.AsObject;
        static toObject(includeInstance: boolean, msg: SetRegex): SetRegex.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SetRegex, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SetRegex;
        static deserializeBinaryFromReader(message: SetRegex, reader: jspb.BinaryReader): SetRegex;
    }

    export namespace SetRegex {
        export type AsObject = {
        }


        export class Req extends jspb.Message { 
            getRegex(): string;
            setRegex(value: string): Req;


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
                regex: string,
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

    export class GetSubtypes extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): GetSubtypes.AsObject;
        static toObject(includeInstance: boolean, msg: GetSubtypes): GetSubtypes.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: GetSubtypes, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): GetSubtypes;
        static deserializeBinaryFromReader(message: GetSubtypes, reader: jspb.BinaryReader): GetSubtypes;
    }

    export namespace GetSubtypes {
        export type AsObject = {
        }


        export class Req extends jspb.Message { 

            hasValueType(): boolean;
            clearValueType(): void;
            getValueType(): AttributeType.VALUE_TYPE;
            setValueType(value: AttributeType.VALUE_TYPE): Req;


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
                valueType: AttributeType.VALUE_TYPE,
            }

            export enum ReqCase {
                REQ_NOT_SET = 0,
            
    VALUE_TYPE = 1,

            }

        }

        export class Res extends jspb.Message { 

            hasType(): boolean;
            clearType(): void;
            getType(): Type | undefined;
            setType(value?: Type): Res;


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
                type?: Type.AsObject,
            }
        }

    }

    export class GetInstances extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): GetInstances.AsObject;
        static toObject(includeInstance: boolean, msg: GetInstances): GetInstances.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: GetInstances, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): GetInstances;
        static deserializeBinaryFromReader(message: GetInstances, reader: jspb.BinaryReader): GetInstances;
    }

    export namespace GetInstances {
        export type AsObject = {
        }


        export class Req extends jspb.Message { 

            hasValueType(): boolean;
            clearValueType(): void;
            getValueType(): AttributeType.VALUE_TYPE;
            setValueType(value: AttributeType.VALUE_TYPE): Req;


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
                valueType: AttributeType.VALUE_TYPE,
            }

            export enum ReqCase {
                REQ_NOT_SET = 0,
            
    VALUE_TYPE = 1,

            }

        }

        export class Res extends jspb.Message { 

            hasThing(): boolean;
            clearThing(): void;
            getThing(): Thing | undefined;
            setThing(value?: Thing): Res;


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
                thing?: Thing.AsObject,
            }
        }

    }


    export enum VALUE_TYPE {
    OBJECT = 0,
    BOOLEAN = 1,
    LONG = 2,
    DOUBLE = 3,
    STRING = 4,
    DATETIME = 5,
    }

}

export class Rule extends jspb.Message { 
    getLabel(): string;
    setLabel(value: string): Rule;

    getWhen(): string;
    setWhen(value: string): Rule;

    getThen(): string;
    setThen(value: string): Rule;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Rule.AsObject;
    static toObject(includeInstance: boolean, msg: Rule): Rule.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Rule, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Rule;
    static deserializeBinaryFromReader(message: Rule, reader: jspb.BinaryReader): Rule;
}

export namespace Rule {
    export type AsObject = {
        label: string,
        when: string,
        then: string,
    }


    export class Req extends jspb.Message { 
        getLabel(): string;
        setLabel(value: string): Req;


        hasRuleDeleteReq(): boolean;
        clearRuleDeleteReq(): void;
        getRuleDeleteReq(): Rule.Delete.Req | undefined;
        setRuleDeleteReq(value?: Rule.Delete.Req): Req;


        hasRuleSetLabelReq(): boolean;
        clearRuleSetLabelReq(): void;
        getRuleSetLabelReq(): Rule.SetLabel.Req | undefined;
        setRuleSetLabelReq(value?: Rule.SetLabel.Req): Req;


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
            label: string,
            ruleDeleteReq?: Rule.Delete.Req.AsObject,
            ruleSetLabelReq?: Rule.SetLabel.Req.AsObject,
        }

        export enum ReqCase {
            REQ_NOT_SET = 0,
        
    RULE_DELETE_REQ = 100,

    RULE_SET_LABEL_REQ = 101,

        }

    }

    export class Res extends jspb.Message { 

        hasRuleDeleteRes(): boolean;
        clearRuleDeleteRes(): void;
        getRuleDeleteRes(): Rule.Delete.Res | undefined;
        setRuleDeleteRes(value?: Rule.Delete.Res): Res;


        hasRuleSetLabelRes(): boolean;
        clearRuleSetLabelRes(): void;
        getRuleSetLabelRes(): Rule.SetLabel.Res | undefined;
        setRuleSetLabelRes(value?: Rule.SetLabel.Res): Res;


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
            ruleDeleteRes?: Rule.Delete.Res.AsObject,
            ruleSetLabelRes?: Rule.SetLabel.Res.AsObject,
        }

        export enum ResCase {
            RES_NOT_SET = 0,
        
    RULE_DELETE_RES = 100,

    RULE_SET_LABEL_RES = 101,

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

    export class SetLabel extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SetLabel.AsObject;
        static toObject(includeInstance: boolean, msg: SetLabel): SetLabel.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SetLabel, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SetLabel;
        static deserializeBinaryFromReader(message: SetLabel, reader: jspb.BinaryReader): SetLabel;
    }

    export namespace SetLabel {
        export type AsObject = {
        }


        export class Req extends jspb.Message { 
            getLabel(): string;
            setLabel(value: string): Req;


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
                label: string,
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
