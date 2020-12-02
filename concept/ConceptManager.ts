import { ThingType } from "../internal";
import { EntityType } from "../internal";
import { RelationType } from "../internal";
import { AttributeType } from "../internal";
import ConceptProto from "grakn-protocol/concept_pb";
import ProtoConceptManager = ConceptProto.ConceptManager;
import TransactionProto from "grakn-protocol/transaction_pb";
import { EntityTypeImpl } from "../internal";
import { Type } from "../internal";
import { TypeImpl } from "../internal";
import { Rule } from "../internal";
import { RuleImpl } from "../internal";
import { RPCTransaction } from "../internal";
import { Protobuilder } from "../internal";
import { RelationTypeImpl } from "../internal";
import { AttributeTypeImpl } from "../internal";
import { Thing } from "../internal";
import { ThingImpl } from "../internal";

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
        const req = new ConceptProto.ConceptManager.Req()
            .setPutEntityTypeReq(new ConceptProto.ConceptManager.PutEntityType.Req().setLabel(label));
        const res = await this.execute(req);
        return EntityTypeImpl.of(res.getPutEntityTypeRes().getEntityType());
    }

    async getEntityType(label: string): Promise<EntityType> {
        const type = await this.getType(label);
        if (type instanceof EntityTypeImpl) return type as EntityType;
        else return null;
    }

    async putRelationType(label: string): Promise<RelationType> {
        const req = new ConceptProto.ConceptManager.Req()
            .setPutRelationTypeReq(new ConceptProto.ConceptManager.PutRelationType.Req().setLabel(label));
        const res = await this.execute(req);
        return RelationTypeImpl.of(res.getPutRelationTypeRes().getRelationType());
    }

    async getRelationType(label: string): Promise<RelationType> {
        const type = await this.getType(label);
        if (type instanceof RelationTypeImpl) return type as RelationType;
        else return null;
    }

    async putAttributeType(label: string): Promise<AttributeType> {
        const req = new ConceptProto.ConceptManager.Req()
            .setPutAttributeTypeReq(new ConceptProto.ConceptManager.PutAttributeType.Req().setLabel(label));
        const res = await this.execute(req);
        return ConceptProtoReader.attributeType(res.getPutAttributeTypeRes().getAttributeType());
    }

    async getAttributeType(label: string): Promise<AttributeType> {
        const type = await this.getType(label);
        if (type instanceof AttributeTypeImpl) return type as AttributeType;
        else return null;
    }

    async putRule(label: string, when: string, then: string): Promise<Rule> {
        const req = new ConceptProto.ConceptManager.Req()
            .setPutRuleReq(new ConceptProto.ConceptManager.PutRule.Req()
                    .setLabel(label)
                    .setWhen(when)
                    .setThen(then));
        const res = await this.execute(req);
        return RuleImpl.of(res.getPutRuleRes().getRule());
    }

    async getThing(iid: string): Promise<Thing> {
        const req = new ConceptProto.ConceptManager.Req()
            .setGetThingReq(new ConceptProto.ConceptManager.GetThing.Req().setIid(iid));
        const res = await this.execute(req);
        if (res.getGetThingRes().getResCase() === ConceptProto.ConceptManager.GetThing.Res.ResCase.THING)
            return ConceptProtoReader.thing(res.getGetThingRes().getThing());
        else
            return null;
    }

    async getType(label: string): Promise<Type> {
        const req = new ConceptProto.ConceptManager.Req()
            .setGetTypeReq(new ConceptProto.ConceptManager.GetType.Req().setLabel(label));
        const res = await this.execute(req);
        if (res.getGetTypeRes().getResCase() === ConceptProto.ConceptManager.GetType.Res.ResCase.TYPE)
            return ConceptProtoReader.type(res.getGetTypeRes().getType());
        else
            return null;
    }

    async getRule(label: string): Promise<Rule> {
        const req = new ConceptProto.ConceptManager.Req()
            .setGetRuleReq(new ConceptProto.ConceptManager.GetRule.Req().setLabel(label));
        const res = await this.execute(req);
        if (res.getGetRuleRes().getResCase() === ConceptProto.ConceptManager.GetRule.Res.ResCase.RULE) return RuleImpl.of(res.getGetRuleRes().getRule());
        return null;
    }

    private async execute(conceptManagerReq: ConceptProto.ConceptManager.Req): Promise<ConceptProto.ConceptManager.Res> {
        const transactionReq = new TransactionProto.Transaction.Req()
            .setConceptManagerReq(conceptManagerReq);
        return await this._rpcTransaction.execute(transactionReq, res => res.getConceptManagerRes());
    }
}
