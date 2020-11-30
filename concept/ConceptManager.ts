import { ThingType } from "./Type/ThingType";
import { EntityType } from "./Type/EntityType";
import { RelationType } from "./Type/RelationType";
import { AttributeType } from "./Type/AttributeType";
import ConceptProto from "graknlabs-grpc-protocol/protobuf/concept_pb";
import ProtoConceptManager = ConceptProto.ConceptManager;
import TransactionProto from "graknlabs-grpc-protocol/protobuf/transaction_pb";
import { EntityTypeImpl } from "./Type/Impl/EntityTypeImpl";
import { Type } from "./Type/Type";
import { TypeImpl } from "./Type/Impl/TypeImpl";
import { Rule } from "./Type/Rule";
import { RuleImpl } from "./Type/Impl/RuleImpl";
import { RPCTransaction } from "../rpc/RPCTransaction";
import { RelationTypeImpl } from "./Type/Impl/RelationTypeImpl";
import { AttributeTypeImpl } from "./Type/Impl/AttributeTypeImpl";
import { Thing } from "./Thing/Thing";
import { ThingImpl } from "./Thing/Impl/ThingImpl";

export class ConceptManager {
    private readonly _rpcTransaction: RPCTransaction;

    constructor (rpcTransaction: RPCTransaction) {
        this._rpcTransaction = rpcTransaction;
    }

    async getRootThingType(): Promise<ThingType> {
        return await this.getType("thing") as ThingType;
    }

    async getRootEntityType(): Promise<EntityType> {
        return await this.getType("entity") as EntityType;
    }

    async getRootRelationType(): Promise<RelationType> {
        return await this.getType("relation") as RelationType;
    }

    async getRootAttributeType(): Promise<AttributeType> {
        return await this.getType("attribute") as AttributeType;
    }

    async putEntityType(label: string): Promise<EntityType> {
        const req = new ProtoConceptManager.Req()
            .setPutEntityTypeReq(new ProtoConceptManager.PutEntityType.Req().setLabel(label));
        const res = await this.execute(req);
        return EntityTypeImpl.of(res.getPutEntityTypeRes().getEntityType());
    }

    getEntityType(label: string): EntityType | null {
        const concept = this.getType(label);
        if (concept instanceof EntityTypeImpl) return concept as EntityType;
        return null;
    }

    async putRelationType(label: string): Promise<RelationType> {
        const req = new ProtoConceptManager.Req()
            .setPutRelationTypeReq(new ProtoConceptManager.PutRelationType.Req().setLabel(label));
        const res = await this.execute(req);
        return RelationTypeImpl.of(res.getPutRelationTypeRes().getRelationType());
    }

    getRelationType(label: string): RelationType | null {
        const concept = this.getType(label);
        if (concept instanceof RelationTypeImpl) return concept as RelationType;
        return null;
    }

    async putAttributeType(label: string): Promise<AttributeType> {
        const req = new ProtoConceptManager.Req()
            .setPutAttributeTypeReq(new ProtoConceptManager.PutAttributeType.Req().setLabel(label));
        const res = await this.execute(req);
        return AttributeTypeImpl.of(res.getPutAttributeTypeRes().getAttributeType());
    }

    getAttributeType(label: string): AttributeType | null {
        const concept = this.getType(label);
        if (concept instanceof AttributeTypeImpl) return concept as AttributeType;
        return null;
    }

    async putRule(label: string, when: string, then: string): Promise<Rule> {
        const req = new ProtoConceptManager.Req()
            .setPutRuleReq(new ProtoConceptManager.PutRule.Req()
                    .setLabel(label)
                    .setWhen(when)
                    .setThen(then));
        const res = await this.execute(req);
        return RuleImpl.of(res.getPutRuleRes().getRule());
    }

    async getThing(iid: string): Promise<Thing | null> {
        const req = new ProtoConceptManager.Req()
            .setGetThingReq(new ProtoConceptManager.GetThing.Req().setIid(iid));
        const res = await this.execute(req);
        if (res.getGetThingRes().getResCase() === ProtoConceptManager.GetThing.Res.ResCase.THING)
            return ThingImpl.of(res.getGetThingRes().getThing());
        else
            return null;
    }

    async getType(label: string): Promise<Type | null> {
        const req = new ProtoConceptManager.Req()
            .setGetTypeReq(new ProtoConceptManager.GetType.Req().setLabel(label));
        const res = await this.execute(req);
        if (res.getGetTypeRes().getResCase() === ProtoConceptManager.GetType.Res.ResCase.TYPE)
            return TypeImpl.of(res.getGetTypeRes().getType());
        else
            return null;
    }

    async getRule(label: string): Promise<Rule | null> {
        const req = new ProtoConceptManager.Req()
            .setGetRuleReq(new ProtoConceptManager.GetRule.Req().setLabel(label));
        const res = await this.execute(req);
        if (res.getGetRuleRes().getResCase() === ProtoConceptManager.GetRule.Res.ResCase.RULE) return RuleImpl.of(res.getGetRuleRes().getRule());
        return null;
    }

    private async execute(conceptManagerReq: ProtoConceptManager.Req): Promise<ProtoConceptManager.Res> {
        const transactionReq = new TransactionProto.Transaction.Req()
            .setConceptManagerReq(conceptManagerReq);
        const res = await this._rpcTransaction.execute(transactionReq);
        return res.getConceptManagerRes();
    }
}
