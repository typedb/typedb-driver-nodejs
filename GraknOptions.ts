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

import {CreateGraknError} from "./common/Exceptions";

export class GraknOptions {
    private _infer:      boolean | null;
    private _explain:    boolean | null;
    private _batchSize:  number  | null;

    constructor() {
        this._infer = null;
        this._explain = null;
        this._batchSize = null;
    }

    public infer(): boolean | null {
        return this._infer;
    }

    public set_infer(infer: boolean): GraknOptions {
        this._infer = infer;
        return this;
    }

    public explain(): boolean | null {
        return this._explain;
    }

    public set_explain(explain: boolean): GraknOptions {
        this._explain = explain;
        return this;
    }

    public batchSize(): number | null {
        return this._batchSize;
    }

    public set_batchSize(batchSize: number): GraknOptions {
        if (batchSize < 1) {
            throw "Attempted to set nonpositive batch size."
        }
        this._batchSize = batchSize;
        return this;
    }
}