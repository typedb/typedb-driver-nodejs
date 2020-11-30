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
        commit = "50e82a1d17b67c18b2593b4195e9dc3684c1749c", # sync-marker: do not remove this comment, this is used for sync-dependencies by @graknlabs_dependencies
    )

#TODO: MOVE NATIVE_GRAKN_ARTIFACT INTO DEPENDENCIES, THEN REMOVE THIS DEPENDENCY
def graknlabs_common():
    git_repository(
        name = "graknlabs_common",
        remote = "https://github.com/graknlabs/common",
        commit = "fcd45c6a30018e0107d5bbf4c5cd4fba2f10b245" # sync-marker: do not remove this comment, this is used for sync-dependencies by @graknlabs_common
    )

def graknlabs_behaviour():
    git_repository(
        name = "graknlabs_behaviour",
        remote = "https://github.com/graknlabs/behaviour",
        commit = "7039a69aa776ca29511403d39111af36bc451282", # sync-marker: do not remove this comment, this is used for sync-dependencies by @graknlabs_behaviour
    )