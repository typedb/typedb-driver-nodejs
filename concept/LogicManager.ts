import LogicProto from "graknlabs-protocol/protobuf/logic_pb";
import {
    RPCTransaction,
    Rule,
    RuleImpl,
} from "../dependencies_internal"
import TransactionProto from "graknlabs-protocol/protobuf/transaction_pb";

export class LogicManager {
    private readonly _rpcTransaction: RPCTransaction;

    constructor (rpcTransaction: RPCTransaction) {
        this._rpcTransaction = rpcTransaction;
    }

    async putRule(label: string, when: string, then: string): Promise<Rule> {
        const req = new LogicProto.LogicManager.Req()
            .setPutRuleReq(new LogicProto.LogicManager.PutRule.Req()
                .setLabel(label)
                .setWhen(when)
                .setThen(then));
        const res = await this.execute(req);
        return RuleImpl.of(res.getPutRuleRes().getRule());
    }

    async getRule(label: string): Promise<Rule> {
        const req = new LogicProto.LogicManager.Req()
            .setGetRuleReq(new LogicProto.LogicManager.GetRule.Req().setLabel(label));
        const res = await this.execute(req);
        if (res.getGetRuleRes().getResCase() === LogicProto.LogicManager.GetRule.Res.ResCase.RULE) return RuleImpl.of(res.getGetRuleRes().getRule());
        return null;
    }

    private async execute(logicManagerReq: LogicProto.LogicManager.Req): Promise<LogicProto.LogicManager.Res> {
        const transactionReq = new TransactionProto.Transaction.Req()
            .setLogicManagerReq(logicManagerReq);
        return await this._rpcTransaction.execute(transactionReq, res => res.getLogicManagerRes());
    }
}