/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { RemoteRule, Rule } from "../Rule";
import { Rule as RuleProto } from "graknlabs-grpc-protocol/protobuf/concept_pb";
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
        return `${this.constructor.name}[label:${this._label}]`;
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
