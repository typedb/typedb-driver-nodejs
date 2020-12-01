load("@graknlabs_common//test/server:rules.bzl", "native_grakn_artifact")
load("@graknlabs_bazel_distribution//artifact:rules.bzl", "artifact_extractor")

exports_files([
    "cucumber_test.sh",
    "rules.bzl",
    "GraknCoreRunner.js"
])

native_grakn_artifact(
    name = "native-grakn-artifact",
    mac_artifact = "@graknlabs_grakn_core_artifact_mac//file",
    linux_artifact = "@graknlabs_grakn_core_artifact_linux//file",
    visibility = ["//test:__subpackages__"],
)

artifact_extractor(
    name = "grakn-extractor",
    artifact = ":native-grakn-artifact",
)
