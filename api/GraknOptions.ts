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

import {Options} from "grakn-protocol/common/options_pb";

namespace Opts {
    export class Core {
        infer? : boolean;
        traceInference? : boolean;
        explain? : boolean;
        parallel? : boolean;
        batchSize? : number;
        prefetch? : boolean;
        sessionIdleTimeoutMillis? : number;
        schemaLockAcquireTimeoutMillis? : number;
    }

    export class Cluster extends Core {
        readAnyReplica?: boolean;
    }

    export function proto(options: GraknOptions) : Options {
        const optionsProto = new Options();
        if (options) {
            const opts = options.opts();
            if (opts.infer != null) optionsProto.setInfer(opts.infer);
            if (opts.traceInference != null) optionsProto.setTraceInference(opts.traceInference);
            if (opts.explain != null) optionsProto.setExplain(opts.explain);
            if (opts.parallel != null) optionsProto.setParallel(opts.parallel);
            if (opts.batchSize != null) optionsProto.setBatchSize(opts.batchSize);
            if (opts.prefetch != null) optionsProto.setPrefetch(opts.prefetch);
            if (opts.sessionIdleTimeoutMillis != null) optionsProto.setSessionIdleTimeoutMillis(opts.sessionIdleTimeoutMillis);
            if (opts.schemaLockAcquireTimeoutMillis != null) optionsProto.setSchemaLockAcquireTimeoutMillis(opts.schemaLockAcquireTimeoutMillis);
            if (options.isCluster()) {
                if ((opts as Opts.Cluster).readAnyReplica != null) optionsProto.setReadAnyReplica((opts as Opts.Cluster).readAnyReplica);
            }
        }
        return optionsProto;
    }
}

export class GraknOptions {

    private _opts : Opts.Core;

    constructor(obj: {[K in keyof Opts.Core]: Opts.Core[K]} = {}) {
        this._opts = obj;
    }

    public isCluster() : boolean {
        return false;
    }

    public opts() : Opts.Core {
        return this._opts;
    }

    proto() : Options {
        return Opts.proto(this);
    }
}

export class GraknClusterOptions extends GraknOptions {

    constructor(obj: {[K in keyof Opts.Cluster]: Opts.Cluster[K]} = {}) {
        super(obj);
    }

    public isCluster() : boolean {
        return true;
    }
}

export namespace GraknOptions {

    export function core(options: {[K in keyof Opts.Core]: Opts.Core[K]} = {}) {
        return new GraknOptions(options);
    }

    export function cluster(options: {[K in keyof Opts.Cluster]: Opts.Cluster[K]} = {}) {
        return new GraknClusterOptions(options);
    }
}
