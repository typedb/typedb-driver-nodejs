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

    public getRootThingType(): ThingType {
        return this.getType("thing") as ThingType;
    }

    public getRootEntityType(): EntityType {
        return this.getType("entity") as EntityType;
    }

    public getRootRelationType(): RelationType {
        return this.getType("relation") as RelationType;
    }

    public getRootAttributeType(): AttributeType {
        return this.getType("attribute") as AttributeType;
    }

    public putEntityType(label: string): EntityType {
        const req = new ProtoConceptManager.Req()
            .setPutEntityTypeReq(
                new ProtoConceptManager.PutEntityType.Req()
                    .setLabel(label)
            )
        const res = this.execute(req);
        return EntityTypeImpl.of(res.getPutEntityTypeRes().getEntityType())
    }

    public getEntityType(label: string): EntityType | null {
        const concept = this.getType(label)
        if (concept instanceof EntityTypeImpl) return concept as EntityType;
        return null;
    }

    public putRelationType(label: string): RelationType {
        const req = new ProtoConceptManager.Req()
            .setPutRelationTypeReq(
                new ProtoConceptManager.PutRelationType.Req()
                    .setLabel(label)
            )
        const res = this.execute(req);
        return RelationTypeImpl.of(res.getPutRelationTypeRes().getRelationType())
    }

    public getRelationType(label: string): RelationType | null {
        const concept = this.getType(label)
        if (concept instanceof RelationTypeImpl) return concept as RelationType;
        return null;
    }

    public putAttributeType(label: string): AttributeType {
        const req = new ProtoConceptManager.Req()
            .setPutAttributeTypeReq(
                new ProtoConceptManager.PutAttributeType.Req()
                    .setLabel(label)
            )
        const res = this.execute(req);
        return AttributeTypeImpl.of(res.getPutAttributeTypeRes().getAttributeType())
    }

    public getAttributeType(label: string): AttributeType | null {
        const concept = this.getType(label)
        if (concept instanceof AttributeTypeImpl) return concept as AttributeType;
        return null;
    }

    public putRule(label: string, when: string, then: string): Rule {
        const req = new ProtoConceptManager.Req()
            .setPutRuleReq(
                new ProtoConceptManager.PutRule.Req()
                    .setLabel(label)
                    .setWhen(when)
                    .setThen(then)
            )
        const res = this.execute(req);
        return RuleImpl.of(res.getPutRuleRes().getRule())
    }

    public getThing(iid: string): Thing | null {
        const req = new ProtoConceptManager.Req()
            .setGetThingReq(
                new ProtoConceptManager.GetThing.Req()
                    .setIid(iid)
            )
        const res = this.execute(req);
        if (res.getGetThingRes().getResCase() === ProtoConceptManager.GetThing.Res.ResCase.THING)
            return ThingImpl.of(res.getGetThingRes().getThing());
        else
            return null;
    }

    public getType(label: string): Type | null {
        const req = new ProtoConceptManager.Req()
            .setGetTypeReq(
                new ProtoConceptManager.GetType.Req()
                    .setLabel(label)
            )
        const res = this.execute(req);
        if (res.getGetTypeRes().getResCase() === ProtoConceptManager.GetType.Res.ResCase.TYPE)
            return TypeImpl.of(res.getGetTypeRes().getType());
        else
            return null;
    }

    public getRule(label: string): Rule | null {
        const req = new ProtoConceptManager.Req()
            .setGetRuleReq(
                new ProtoConceptManager.GetRule.Req()
                    .setLabel(label)
            )
        const res = this.execute(req);
        if (res.getGetRuleRes().getResCase() === ProtoConceptManager.GetRule.Res.ResCase.RULE) return RuleImpl.of(res.getGetRuleRes().getRule());
        return null;
    }

    private execute(conceptManagerReq: ProtoConceptManager.Req): ProtoConceptManager.Res {
        const transactionReq = new TransactionProto.Transaction.Req()
            .setConceptManagerReq(conceptManagerReq)
        //return this._rpcTransaction.execute(transactionReq).getConceptManagerRes()
        throw "not implemented conceptmanager.execute"
    }
}
