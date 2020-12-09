#
# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
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
