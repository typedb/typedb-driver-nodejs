import {RemoteRule, Rule} from "../Rule";
import {Type} from "../Type";

export class RuleImpl implements Rule {
    private label: string;
    private when: Conjunction<any>;
    private then: ThingVariable<any>;
    private hash: number;

    constructor(label: string, when: Conjunction<any>, then: ThingVariable<any>) {
        this.label = label;
        this.when = when;
        this.then = then;
        this.hash = hash(label);
    }

    asRemote(transaction: Transaction): RemoteRule {
        return new RemoteRuleImpl(transaction, this.getLabel(), this.getWhen(), this.getThen());
    }

    getLabel(): string {
        return this.label;
    }

    getThen(): Pattern {
        return this.then;
    }

    getWhen(): Pattern {
        return this.when;
    }

    equals(rule: Rule): boolean {
        if (typeof rule != typeof this) {
            return false;
        }
        if (rule.hashCode() != this.hashCode()) {
            return false;

        }
        return rule.getLabel() === this.getLabel();
    }

    hashCode(): number {
        return this.hash;
    }

}

export class RemoteRuleImpl implements RemoteRule {
    private label: string;
    private readonly when: Conjunction<any>;
    private readonly then: ThingVariable<any>;
    private readonly hash: number;
    private readonly transaction: Transaction;

    constructor(transaction: Transaction, label: string, when: Conjunction<any>, then: ThingVariable<any>) {
        this.transaction = transaction;
        this.label = label;
        this.when = when;
        this.then = then;
        this.hash = hash(label);
    }

    asRemote(transaction: Transaction): RemoteRule {
        return new RemoteRuleImpl(transaction, this.getLabel(), this.getWhen(), this.getThen());
    }

    delete(): void {
    }

    isDeleted(): boolean {
        throw "Not yet applicable"
    }

    getLabel(): string {
        return this.label;
    }

    getThen(): Pattern {
        return this.then;
    }

    getWhen(): Pattern {
        return this.when;
    }

    setLabel(label: string): void {
        this.label = label;
    }

    tx(): Transaction {
        return this.transaction;
    }

    hashCode(): number {
        return this.hash
    }

    equals(rule: Rule): boolean {
        if (typeof rule != typeof this) {
            return false;
        }
        if (rule.hashCode() != this.hashCode()) {
            return false;

        }
        return rule.getLabel() === this.getLabel();
    }

}