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

import { Then, When } from "@cucumber/cucumber";
import { sessionsToTransactions, tx } from "../connection/ConnectionSteps";
import { assertThrows, assertThrowsWithMessage, splitString } from "../util/Util";
import { ConceptMap } from "../../../dist/concept/answer/ConceptMap";
import { Numeric } from "../../../dist/concept/answer/Numeric";
import { ConceptMapGroup } from "../../../dist/concept/answer/ConceptMapGroup";
import { NumericGroup } from "../../../dist/concept/answer/NumericGroup";
import assert = require("assert");
import { Concept } from "../../../dist/concept/Concept";
import { RoleType } from "../../../dist/concept/type/RoleType";
import { Type } from "../../../dist/concept/type/Type";
import { AttributeType } from "../../../dist/concept/type/AttributeType";
import ValueClass = AttributeType.ValueClass;
import { Attribute } from "../../../dist/concept/thing/Attribute";
import { parseBool } from "../config/Parameters";
import { Thing } from "../../../dist/concept/thing/Thing";
import DataTable from "@cucumber/cucumber/lib/models/data_table";

let answers: ConceptMap[] = [];
let numericAnswer: Numeric;
let answerGroups: ConceptMapGroup[] = []
let numericAnswerGroups: NumericGroup[] = []

function clearAnswers() {
    answers.length = 0;
    numericAnswer = null;
    answerGroups.length = 0;
    numericAnswerGroups.length = 0;
}

Then("the integrity is validated", async () => {
    // TODO
});

When("graql define", (query: string) => {
    tx().query().define(query);
});

Then("graql define; throws exception containing {string}", async (exceptionString: string, query: string) => {
    await assertThrowsWithMessage(async () => await tx().query().define(query), exceptionString);
});

Then("graql define; throws exception", async (query: string) => {
    await assertThrows(async () => await tx().query().define(query));
});

When("graql undefine", (query: string) => {
    tx().query().undefine(query);
});

Then("graql undefine; throws exception containing {string}", async (exceptionString: string, query: string) => {
    await assertThrowsWithMessage(async () => await tx().query().undefine(query), exceptionString);
});

Then("graql undefine; throws exception", async (query: string) => {
    await assertThrows(async () => await tx().query().undefine(query));
});

When("graql insert", (query: string) => {
    tx().query().insert(query);
});

Then("graql insert; throws exception containing {string}", async (exceptionString: string, query: string) => {
    await assertThrowsWithMessage(async () => await tx().query().insert(query).next(), exceptionString);
});

Then("graql insert; throws exception", async (query: string) => {
    await assertThrows(async () => await tx().query().insert(query).next());
});

When("graql delete", (query: string) => {
    tx().query().delete(query);
});

Then("graql delete; throws exception containing {string}", async (exceptionString: string, query: string) => {
    await assertThrowsWithMessage(async () => await tx().query().delete(query), exceptionString);
});

Then("graql delete; throws exception", async (query: string) => {
    await assertThrows(async () => await tx().query().delete(query));
});

When("get answers of graql insert", async (query: string) => {
    clearAnswers();
    answers = await tx().query().insert(query).collect();
});

When("get answers of graql match", async (query: string) => {
    clearAnswers();
    answers = await tx().query().match(query).collect();
});

Then("graql match; throws exception", async (query: string) => {
    await assertThrows(async () => await tx().query().match(query).next());
});

When("get answer of graql match aggregate", async (query: string) => {
    clearAnswers();
    numericAnswer = await tx().query().matchAggregate(query);
});

When("get answers of graql match group", async (query: string) => {
    clearAnswers();
    answerGroups = await tx().query().matchGroup(query).collect();
});

When("get answers of graql match group aggregate", async (query: string) => {
    clearAnswers();
    numericAnswerGroups = await tx().query().matchGroupAggregate(query).collect();
});

Then("answer size is: {number}", async (expectedAnswers: number) => {
    assert.strictEqual(answers.length, expectedAnswers, `Expected [${expectedAnswers}], but got [${answers.length}]`);
});

interface ConceptMatcher {
    matches(concept: Concept): Promise<boolean>;
}

class TypeLabelMatcher implements ConceptMatcher {
    private readonly _label: string;

    constructor(label: string) {
        this._label = label;
    }

    protected get label(): string {
        return this._label;
    }

    async matches(concept: Concept): Promise<boolean> {
        if (concept.isRoleType()) return this.label == (concept as RoleType).getScopedLabel();
        else if (concept.isType()) return this.label == (concept as Type).getLabel();
        else throw new TypeError("A Concept was matched by label, but it is not a Type.");
    }
}

abstract class AttributeMatcher implements ConceptMatcher {
    private readonly _typeLabel: string;
    private readonly _value: string;

    constructor(typeAndValue: string) {
        const s = typeAndValue.split(":");
        assert.strictEqual(s.length, 2, `[${typeAndValue}] is not a valid attribute identifier. It should have format "typeLabel:value".`);
        [this._typeLabel, this._value] = s;
    }

    protected get typeLabel(): string {
        return this._typeLabel;
    }

    protected get value(): string {
        return this._value;
    }

    check(attribute: Attribute<ValueClass>) {
        if (attribute.isBoolean()) return attribute.getValue() === parseBool(this.value);
        else if (attribute.isLong()) return attribute.getValue() === parseInt(this.value);
        else if (attribute.isDouble()) return attribute.getValue() === parseFloat(this.value);
        else if (attribute.isString()) return attribute.getValue() === this.value;
        else if (attribute.isDateTime()) return (attribute.getValue() as Date).getTime() === new Date(this.value).getTime();
        else throw new Error(`Unrecognised value type ${attribute.constructor.name}`);
    }

    abstract matches(concept: Concept): Promise<boolean>;
}

class AttributeValueMatcher extends AttributeMatcher {

    async matches(concept: Concept): Promise<boolean> {
        if (!concept.isAttribute()) return false;

        const attribute = concept as Attribute<ValueClass>;

        if (this.typeLabel !== (await attribute.asRemote(tx()).getType()).getLabel()) return false;

        return this.check(attribute);
    }
}

class ThingKeyMatcher extends AttributeMatcher {

    async matches(concept: Concept): Promise<boolean> {
        if (!concept.isThing()) return false;

        const keys = (concept as Thing).asRemote(tx()).getHas(true);

        for await (const key of keys) {
            if ((await key.asRemote(tx()).getType()).getLabel() === this.typeLabel) {
                return this.check(key);
            }
        }

        return false;
    }
}

function parseConceptIdentifier(value: string): ConceptMatcher {
    const [identifierType, identifierBody] = splitString(value, ":", 1);
    switch (identifierType) {
        case "label": return new TypeLabelMatcher(identifierBody);
        case "key": return new ThingKeyMatcher(identifierBody);
        case "value": return new AttributeValueMatcher(identifierBody);
        default: throw new Error(`Failed to parse concept identifier: ${value}`);
    }
}

async function answerConceptsMatch(answerIdentifier: { [key: string]: string }, answer: ConceptMap): Promise<boolean> {
    for (const [var0, conceptIdentifier] of Object.entries(answerIdentifier)) {
        const matcher = parseConceptIdentifier(conceptIdentifier);
        if (!(await matcher.matches(answer.get(var0)))) return false;
    }
    return true;
}

Then("uniquely identify answer concepts", async (answerIdentifiersTable: DataTable) => {
    const answerIdentifiers: { [key: string]: string }[] = answerIdentifiersTable.hashes();
    assert.strictEqual(answers.length, answerIdentifiers.length,
        `The number of answers [${answers.length}] should match the number of answer identifiers [${answerIdentifiers.length}`);

    const resultSet: [{ [key: string]: string }, ConceptMap[]][] = answerIdentifiers.map(ai => [ai, []]);
    for (const answer of answers) {
        for (const [answerIdentifier, matchedAnswers] of resultSet) {
            if (await answerConceptsMatch(answerIdentifier, answer)) {
                matchedAnswers.push(answer);
            }
        }
    }

    for (const [answerIdentifier, answers] of resultSet) {
        assert.strictEqual(answers.length, 1, `Each answer identifier should match precisely 1 answer, but [${answers.length}] matched the identifier [${JSON.stringify(answerIdentifier)}].`);
    }
});
