import {ThingType} from "./Type/ThingType";
import {EntityType} from "./Type/EntityType";
import {RelationType} from "./Type/RelationType";
import {AttributeType} from "./Type/AttributeType";
import {ConceptManager as ProtoConceptManager} from "protobuf/concept_pb";
import {Transaction} from "protobuf/transaction_pb";
import {EntityTypeImpl} from "./Type/Impl/EntityTypeImpl";
import {Type} from "./Type/Type";
import {TypeImpl} from "./Type/Impl/TypeImpl";
import {Rule} from "./Type/Rule";
import {RuleImpl} from "./Type/Impl/RuleImpl";
import {RPCTransaction} from "../rpc/RPCTransaction";
import {addTracingDataToMetadata, putAllMetadata} from "../common/ProtoBuilder";

export class ConceptManager {
    private _rpcTransaction: RPCTransaction;
    constructor (rpcTransaction: RPCTransaction) {this._rpcTransaction = rpcTransaction}

    public getRootThingType(): ThingType {return this.getType(GraqlToken.Type.THING.toString()).asThingType();}
    public getRootEntityType(): EntityType {return this.getType(GraqlToken.Type.ENTITY.toString()).asEntityType();}
    public getRootRelationType(): RelationType {return this.getType(GraqlToken.Type.RELATION.toString()).asRelationType();}
    public getRootAttributeType(): AttributeType {return this.getType(GraqlToken.Type.ATTRIBUTE.toString()).asAttributeType();}

    public putEntityType(label: string): EntityType {
        let req = new ProtoConceptManager.Req()
            .setPutEntityTypeReq(
                new ProtoConceptManager.PutEntityType.Req()
                    .setLabel(label)
            )
        let res = this.execute(req);
        return EntityTypeImpl.of(res.getPutEntityTypeRes.getEntityType())
    }

    public getEntityType(label: string): EntityType | null {
        let concept = this.getType(label)
        if (concept instanceof EntityType) return concept.asEntityType();
        return null;
    }

    public putRelationType(label: string): RelationType {
        let req = new ProtoConceptManager.Req()
            .setPutRelationTypeReq(
                new ProtoConceptManager.PutRelationType.Req()
                    .setLabel(label)
            )
        let res = this.execute(req);
        return RelationTypeImpl.of(res.getPutRelationTypeRes.getRelationType())
    }

    public getRelationType(label: string): RelationType | null {
        let concept = this.getType(label)
        if (concept instanceof RelationType) return concept.asRelationType();
        return null;
    }

    public putAttributeType(label: string): AttributeType {
        let req = new ProtoConceptManager.Req()
            .setPutAttributeTypeReq(
                new ProtoConceptManager.PutAttributeType.Req()
                    .setLabel(label)
            )
        let res = this.execute(req);
        return AttributeTypeImpl.of(res.getPutAttributeTypeRes.getAttributeType())
    }

    public getAttributeType(label: string): AttributeType | null {
        let concept = this.getType(label)
        if (concept instanceof AttributeType) return concept.asAttributeType();
        return null;
    }

    public putRule(label: string, when: Pattern, then: Pattern): Rule {
        let req = new ProtoConceptManager.Req()
            .setPutRuleReq(
                ProtoConceptManager.PutRuleReq.Req()
                    .setLabel(label)
                    .setWhen(when)
                    .setThen(then)
            )
        let res = this.execute(req);
        return RuleImpl.of(res.getPutRuleRes.getRule())
    }

    public getThing(label: string): Thing | null {
        let req = new ProtoConceptManager.Req()
            .setGetThingReq(
                new ProtoConceptManager.GetThing.Req()
                    .setLabel(label)
            )
        let res = this.execute(req);
        if (res.getGetThingRes().getResCase() === ProtoConceptManager.GetThing.Res.ResCase.THING) return ThingImpl.of(res.getGetThingRes().getThing());
        return null;
    }

    public getType(label: string): Type | null {
        let req = new ProtoConceptManager.Req()
            .setGetTypeReq(
                new ProtoConceptManager.GetType.Req()
                    .setLabel(label)
            )
        let res = this.execute(req);
        if (res.getGetTypeRes().getResCase() === ProtoConceptManager.GetType.Res.ResCase.TYPE) return TypeImpl.of(res.getGetTypeRes().getType());
        return null;
    }

    public getRule(label: string): Rule | null {
        let req = new ProtoConceptManager.Req()
            .setGetRuleReq(
                new ProtoConceptManager.GetRule.Req()
                    .setLabel(label)
            )
        let res = this.execute(req);
        if (res.getGetRuleRes().getResCase() === ProtoConceptManager.GetRule.Res.ResCase.RULE) return RuleImpl.of(res.getGetRuleRes().getRule());
        return null;
    }

    private execute(conceptManagerReq: ProtoConceptManager.Req): ProtoConceptManager.Res {
        let transactionReq = new Transaction.Req()
            .setConceptManagerReq(conceptManagerReq)
        addTracingDataToMetadata(transactionReq);
        return RPCTransaction.execute(transactionReq).getConceptManagerRes()
    }
}