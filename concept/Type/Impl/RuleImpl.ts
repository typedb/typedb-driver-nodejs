import { RemoteRule, Rule } from "../Rule";
import { Rule as RuleProto } from "grakn-protocol/concept_pb";
import { Grakn } from "../../../Grakn";
import Transaction = Grakn.Transaction;

export class RuleImpl implements Rule {

    private readonly _label: string;
    private readonly _when: string;
    private readonly _then: string;

    protected constructor(label: string, when: string, then: string) {
        this._label = label;
        this._when = when;
        this._then = then;
    }

    static of(ruleProto: RuleProto): RuleImpl {
        return new RuleImpl(ruleProto.getLabel(), ruleProto.getWhen(), ruleProto.getThen());
    }

    getLabel(): string {
        return this._label;
    }

    getThen(): string {
        return this._then;
    }

    getWhen(): string {
        return this._when;
    }

    asRemote(transaction: Transaction): RemoteRule {
        return new RemoteRuleImpl(transaction, this.getLabel(), this.getWhen(), this.getThen());
    }

    toString(): string {
        return `${RuleImpl.name}[label:${this._label}]`;
    }
}

export class RemoteRuleImpl implements RemoteRule {
    private _label: string;
    private readonly _when: string;
    private readonly _then: string;
    private readonly _transaction: Transaction;

    constructor(transaction: Transaction, label: string, when: string, then: string) {
        this._transaction = transaction;
        this._label = label;
        this._when = when;
        this._then = then;
    }

    getLabel(): string {
        return this._label;
    }

    getThen(): string {
        return this._then;
    }

    getWhen(): string {
        return this._when;
    }

    setLabel(label: string): void {
        this._label = label;
        throw "Not yet implemented"; // TODO: rpc call
    }

    delete(): void {
        throw "Not yet implemented";
    }

    isDeleted(): boolean {
        throw "Not yet applicable"
    }

    asRemote(transaction: Transaction): RemoteRule {
        return new RemoteRuleImpl(transaction, this.getLabel(), this.getWhen(), this.getThen());
    }

    protected get transaction(): Transaction {
        return this._transaction;
    }
}
