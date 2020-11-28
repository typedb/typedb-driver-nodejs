load("@graknlabs_common//test/server:rules.bzl", "native_grakn_artifact")

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
