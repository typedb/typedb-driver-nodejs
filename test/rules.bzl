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

def node_cucumber_test(name, features, node_modules, package_json, core_artifact, deps):
    native.sh_test (
        name = name,
        data = [
            "//test:GraknCoreRunner.js",
            node_modules,
            package_json,
            core_artifact,
        ] + features + deps,
        srcs = [
            "//test:cucumber_test.sh",
        ],
        args = [
            "$(location @graknlabs_grakn_core_artifact//file)"
        ],
    )