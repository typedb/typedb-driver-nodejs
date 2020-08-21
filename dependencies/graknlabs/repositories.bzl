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

load("@bazel_tools//tools/build_defs/repo:git.bzl", "git_repository")

def graknlabs_dependencies():
    git_repository(
        name = "graknlabs_dependencies",
        remote = "https://github.com/graknlabs/dependencies",
        commit = "650b270fe125a2eccd70575003feafb136897d51", # sync-marker: do not remove this comment, this is used for sync-dependencies by @graknlabs_dependencies
    )

def graknlabs_bazel_distribution():
#    native.local_repository(
#        name = "graknlabs_bazel_distribution",
#        path = "../bazel-distribution",
#    )
    git_repository(
           name = "graknlabs_bazel_distribution",
           remote = "https://github.com/flyingsilverfin/bazel-distribution",
           commit = "e5253b0fe556b128c931127b0ae926e42fef0461", # sync-marker: do not remove this comment, this is used for sync-dependencies by @graknlabs_dependencies
    )

def graknlabs_protocol():
    git_repository(
        name = "graknlabs_protocol",
        remote = "https://github.com/graknlabs/protocol",
        commit = "3523ca7ac8a204dd86eecadbf91cd4f612566013", # sync-marker: do not remove this comment, this is used for sync-dependencies by @graknlabs_protocol
    )
