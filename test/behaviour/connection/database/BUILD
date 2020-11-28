load("//test:rules.bzl", "node_cucumber_test")

node_cucumber_test(
    name = "test",
    features = ["@graknlabs_behaviour//connection:database.feature"],
    node_modules = "//:node_modules",
    package_json = "//:package.json",
    core_artifact = "@graknlabs_grakn_core_artifact_mac//file",
    deps = ["//:client-nodejs"],
)