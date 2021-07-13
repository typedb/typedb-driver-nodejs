#
# Copyright (C) 2021 Vaticle
#
# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
#

load("@vaticle_dependencies//tool/checkstyle:rules.bzl", "checkstyle_test")

exports_files([
    "cucumber_test.sh",
])

ts_project(
    name = "steps-core",
    srcs = glob([
        "connection:ConnectionStepsBase.ts",
        "connection:ConnectionStepsCore.ts",
        "concept/thing:ThingSteps.ts",
        "concept/thing/attribute:AttributeSteps.ts",
        "concept/thing/entity:EntitySteps.ts",
        "concept/thing/relation:RelationSteps.ts",
        "concept/type/attributetype:AttributeTypeSteps.ts",
        "concept/type/relationtype:RelationTypeSteps.ts",
        "concept/type/thingtype:ThingTypeSteps.ts",
        "config:Parameters.ts",
        "connection/database:DatabaseSteps.ts",
        "connection/session:SessionSteps.ts",
        "connection/transaction:TransactionSteps.ts",
        "typeql:TypeQLSteps.ts",
        "util:Util.ts",
        "tsconfig.json"
    ]),
    tsconfig = "tsconfig.json",
    declaration = True,
    deps = [
        "@npm//@grpc/grpc-js",
        "@npm//@types/node",
        "@npm//@types/uuid",
        "@npm//typedb-protocol",
        "@npm//typescript",
        "@npm//uuid",
    ],
)

genrule(
    name = "steps-core-targz",
    outs = ["behaviour-steps-core.tar.gz"],
    cmd = "tar -xf $(location //:assemble-npm); npx tsc --build test/tsconfig.json; tar -cf $(@D)/behaviour-steps-core.tar.gz dist-test;",
    tools = [
        ":steps-core",
        "//:assemble-npm",
        "//:package.json",
    ],
    visibility = ["//visibility:public"],
)

genrule(
    name = "steps-cluster-targz",
    outs = ["behaviour-steps-cluster.tar.gz"],
    cmd = "tar -xf $(location //:assemble-npm); npx tsc --build test/tsconfig.json; tar -cf $(@D)/behaviour-steps-cluster.tar.gz dist-test;",
    tools = [
        "//:behaviour-steps-cluster",
        "//:assemble-npm",
        "//:package.json",
    ],
    visibility = ["//visibility:public"],
)

checkstyle_test(
    name = "checkstyle",
    include = glob(["*"]),
    license_type = "apache",
)
