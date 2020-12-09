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

FILE=$1
if test -f grakn_core_distribution; then
  echo Existing distribution detected. Cleaning.
  rm -rf grakn_core_distribution
fi
echo Attempting to unarchive Grakn Core distribution from $FILE
if [[ $file == *.tar.gz ]]; then
  tar -xf $FILE -C ./grakn_core_distribution
else
  if [[ $file == *.zip ]]; then
    unzip -q $FILE -d ./grakn_core_distribution
  else
    echo Supplied artifact file was not in a recognised format. Only .tar.gz and .zip artifacts are acceptable.
    exit 1
  fi
fi
echo Successfully unarchived Grakn Core distribution.
echo Starting Grakn Core Server
mkdir ./grakn_core_distribution/grakn_core_test
./grakn_core_distribution/grakn server --data grakn_core_test &
sleep 10
echo Grakn Core Server started. Proceeding to tests.
node ./node_modules/.bin/cucumber-js ./external/graknlabs_behaviour/**/*.feature --require-module ts-node/register --require-module @babel/register --require './test/babel-typescript-register.js' --require './**/*.ts'
RESULT=$?
echo Tests concluded with exit value $RESULT
echo Stopping server.
kill $(jps | awk '/GraknServer/ {print $1}')
exit $RESULT
