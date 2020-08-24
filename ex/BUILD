load("@build_bazel_rules_nodejs//:index.bzl", "pkg_npm")
load("@graknlabs_bazel_distribution//npm:rules.bzl", "assemble_npm", "deploy_npm")


exports_files([
    "package.json",
])

# ---- small reproducible example ----

pkg_npm(
    name = "reproducible-example",
    srcs = glob(["*.js", "package.json"]),
    deps = [],
    visibility = ["//visibility:public"],
#    vendor_external = [
#        "graknlabs"
#    ]
)

assemble_npm(
    name = "assemble-ex",
    target = ":reproducible-example",
    visibility = ["//visibility:public"],
)

# --- end reproducible example ---
