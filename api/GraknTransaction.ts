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


import {Transaction} from "grakn-protocol/common/transaction_pb";
import {GraknOptions} from "./GraknOptions";
import {Stream} from "../common/util/Stream";
import {ConceptManager} from "./concept/ConceptManager";
import {LogicManager} from "./logic/LogicManager";
import {QueryManager} from "./query/QueryManager";

export interface GraknTransaction {

    isOpen() : boolean;

    type() : GraknTransaction.Type;

    options() : GraknOptions;

    concepts() : ConceptManager;

    logic() : LogicManager;

    query() : QueryManager;

    commit() : void ;

    rollback() : void ;

    close() : void ;

}


export namespace GraknTransaction {

    export interface Extended extends GraknTransaction {

        rpcExecute(request: Transaction.Req) : Promise<Transaction.Res>;

        rpcStream(request: Transaction.Req) : Stream<Transaction.ResPart> ;

    }

    export interface Type {
        proto() : Transaction.Type;
        isRead() : boolean;
        isWrite() : boolean;
    }

    export namespace Type {

        class Impl implements Type {

            private _type: Transaction.Type;

            constructor(type: Transaction.Type) {
                this._type = type;
            }

            proto(): Transaction.Type {
                return this._type;
            }

            isRead(): boolean {
                return this == READ; // TODO switch if it causes cycles
                // return this._type== Transaction.Type.READ;
            }

            isWrite(): boolean {
                return this == WRITE; // TODO switch if it causes cycles
                // return this._type == Transaction.Type.WRITE;
            }

        }

        export const READ = new Impl(Transaction.Type.READ);
        export const WRITE = new Impl(Transaction.Type.WRITE);
    }
}

