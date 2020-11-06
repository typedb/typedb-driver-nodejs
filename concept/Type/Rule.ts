export interface Rule {

    getLabel(): string;

    getWhen(): Pattern;

    getThen(): Pattern;

    hashCode(): number;

    asRemote(transaction: Transaction): RemoteRule;

    equals(rule: Rule): boolean;
}

export interface RemoteRule extends Rule {
    setLabel(label: string): void;

    delete(): void;

    isDeleted(): boolean;
}