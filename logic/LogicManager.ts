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

import {LogicManager} from "../api/logic/LogicManager";
import {Rule} from "../api/logic/Rule";
import {Stream} from "../common/util/Stream";
import {Core} from "../common/rpc/RequestBuilder";
import {GraknTransaction} from "../api/GraknTransaction";
import {Transaction} from "grakn-protocol/common/transaction_pb";

export class LogicManagerImpl implements LogicManager {
    private _transaction: GraknTransaction.Extended;

    constructor(transaction: GraknTransaction.Extended) {
        this._transaction = transaction;
    }

    public async getRule(label: string): Promise<Rule | undefined> {
        const request = Core.LogicManager.getRuleReq(label);
        let response = await this.execute(request);


    }

    getRules(): Stream<Rule> {
        return undefined;
    }

    putRule(label: string, when: string, then: string): Promise<Rule> {
        return Promise.resolve(undefined);
    }

    private execute(request: Transaction.Req) {
        return this._transaction.rpcExecute(request);
    }

}
