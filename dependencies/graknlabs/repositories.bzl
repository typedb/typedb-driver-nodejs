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
        commit = "6378e7db950f8580cf80f94973b4cb21f408c0bb", # sync-marker: do not remove this comment, this is used for sync-dependencies by @graknlabs_dependencies
    )

#def graknlabs_protocol():
#    git_repository(
#        name = "graknlabs_protocol",
#        remote = "https://github.com/graknlabs/protocol",
#        commit = "3523ca7ac8a204dd86eecadbf91cd4f612566013", # sync-marker: do not remove this comment, this is used for sync-dependencies by @graknlabs_protocol
#    )

def graknlabs_protocol():
    native.local_repository(
        name = "graknlabs_protocol",
        path = "../protocol",
    )

def graknlabs_behaviour():
    git_repository(
        name = "graknlabs_behaviour",
        remote = "https://github.com/graknlabs/behaviour",
        commit = "7039a69aa776ca29511403d39111af36bc451282", # sync-marker: do not remove this comment, this is used for sync-dependencies by @graknlabs_behaviour
    )