#
# Copyright (C) 2020 Grakn Labs
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as
# published by the Free Software Foundation, either version 3 of the
# License, or (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
#
# You should have received a copy of the GNU Affero General Public License
# along with this program.  If not, see <https://www.gnu.org/licenses/>.
#

exports_files([
    "node_modules",
    "package.json",
    "package-lock.json",
    "RELEASE_TEMPLATE.md",
    "VERSION",
])

load("@build_bazel_rules_nodejs//:index.bzl", "pkg_npm", "nodejs_binary")
load("@graknlabs_bazel_distribution//npm:rules.bzl", "assemble_npm", "deploy_npm")
load("@graknlabs_bazel_distribution//github:rules.bzl", "deploy_github")
load("@graknlabs_bazel_distribution//artifact:rules.bzl", "artifact_extractor")

load("@graknlabs_dependencies//tool/release:rules.bzl", "release_validate_deps")
load("@graknlabs_dependencies//distribution:deployment.bzl", "deployment")
load("//:deployment.bzl", github_deployment = "deployment")

load("@npm//@bazel/typescript:index.bzl", "ts_library")

ts_library(
    name = "_client_nodejs",
    srcs = glob([
        "Grakn.ts",
        "GraknOptions.ts",
        "common/**/*.ts",
        "concept/**/*.ts",
        "query/**/*.ts",
        "rpc/**/*.ts",
    ]),
    tsconfig = "tsconfig.json",
    deps = [
        "@npm//@grpc/grpc-js",
        "@npm//graknlabs-grpc-protocol",
        "@npm//@types/node",
    ],
)

pkg_npm(
    name = "client-nodejs",
    srcs = glob([
       "package.json",
       "README.md",
       ".npmignore",
    ]),
    deps = [
        "@npm//graknlabs-grpc-protocol",
        "@npm//@grpc/grpc-js",
        "@npm//google-protobuf",
        ":_client_nodejs",
    ],
    visibility = ["//visibility:public"],
    vendor_external = [],
)

assemble_npm(
    name = "assemble-npm",
    target = ":client-nodejs",
)

deploy_npm(
    name = "deploy-npm",
    target = ":assemble-npm",
    snapshot = deployment["npm.snapshot"],
    release = deployment["npm.release"],
)

deploy_github(
    name = "deploy-github",
    release_description = "//:RELEASE_TEMPLATE.md",
    title = "Grakn Client Node.js",
    title_append_version = True,
    organisation = deployment["npm.snapshot"],
    repository = deployment["npm.release"],
)

NODEJS_TEST_DEPENDENCIES = [
    ":client-nodejs",
    "@npm//fs-extra",
    "@npm//google-protobuf",
    "@npm//grpc",
    "@npm//tmp",
    "@npm//properties-reader",
]

genrule(
    name = "grakn-artifact-path",
    srcs = ["@graknlabs_grakn_core_artifact_mac//file"],
    outs = ["grakn-artifact-path.txt"],
    cmd = "echo $(location @graknlabs_grakn_core_artifact_mac//file) > \"$@\"",
)

artifact_extractor(
    name = "grakn-extractor",
    artifact = "@graknlabs_grakn_core_artifact_mac//file",
)

#release_validate_deps(
#    name = "release-validate-deps",
#    refs = "@graknlabs_client_nodejs_workspace_refs//:refs.json",
#    tagged_deps = [
#        "@graknlabs_protocol",
#    ],
#    tags = ["manual"]  # in order for bazel test //... to not fail
#)

# CI targets that are not declared in any BUILD file, but are called externally
filegroup(
    name = "ci",
    data = [
        "@graknlabs_dependencies//tool/bazelrun:rbe",
        "@graknlabs_dependencies//distribution/artifact:create-netrc",
        "@graknlabs_dependencies//tool/sync:dependencies",
        "@graknlabs_dependencies//tool/release:approval",
        "@graknlabs_dependencies//tool/release:create-notes",
    ],
)
