/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

const DEFAULT_URI = "localhost:48555";
const GRAKN_PORT=48555;
const INTEGRATION_TESTS_TIMEOUT = 40000;
const TEST_KEYSPACE = 'testkeyspace';

const childProcess = require('child_process');
const fs = require('fs-extra');
const path = require('path');
const tcpPortUsed = require('tcp-port-used');
const tmp = require('tmp');
const unzipper = require('unzipper');

// Test Grakn with distribution code if TEST_ENV is dist
let GraknClient;
let graknClient;
if(process.env.TEST_ENV === 'dist'){
    GraknClient = require("../../dist/GraknClient");
    graknClient = new GraknClient(DEFAULT_URI);
}else {
    GraknClient = require("../../client-nodejs/src/GraknClient");
    graknClient = new GraknClient(DEFAULT_URI);
}

jest.setTimeout(INTEGRATION_TESTS_TIMEOUT);
//Every test file instantiate a new GraknEnvironment - so session will be new for every test file
let session;
let tempRootDir;
let graknRootDir;
let graknExecutablePath;

const unzipArchive = function(zipFile, extractPath) {
    return new Promise((resolve, reject) => {
        fs.createReadStream(zipFile)
            .pipe(unzipper.Extract({ path: extractPath }))
            .once('close', () => {
                resolve();
            });
    });
};

const loadGqlFile = function(filePath, keyspace) {
    return new Promise((resolve, reject) => {
        const graknConsole = childProcess.spawn(graknExecutablePath, ['console', '-f', filePath, '-k', keyspace], {
            cwd: graknRootDir
        });

        graknConsole.once('exit', function (code) {
            if (code === 0) {
                resolve(code);
            } else {
                reject(code);
            }
        });
    });
};



module.exports = {
    session: async () => {
        session = await graknClient.session(TEST_KEYSPACE);
        return session;
    },
    sessionForKeyspace: (keyspace) => graknClient.session(keyspace),
    tearDown: async () => {
        if(session) await session.close();
        graknClient.close();

        const graknServer = childProcess.spawn(graknExecutablePath, ['server', 'stop'], {
            cwd: graknRootDir,
            detached: true,
            stdio: 'ignore'
        });
        graknServer.unref();

        await tcpPortUsed.waitUntilFree(GRAKN_PORT, 1000, 30000);

        fs.removeSync(tempRootDir);

    },
    dataType: () => GraknClient.dataType,
    graknClient,

    startGraknServer: async () => {
        const tmpobj = tmp.dirSync();
        tempRootDir = tmpobj.name;
        tmpobj.removeCallback(); // disable automatic cleanup

        await unzipArchive('external/graknlabs_grakn_core/grakn-core-all-mac.zip', tempRootDir);

        graknRootDir = path.join(tempRootDir, 'grakn-core-all-mac');
        graknExecutablePath = path.join(graknRootDir, 'grakn');

        // fix permissions to not get EACCES
        fs.chmodSync(graknExecutablePath, 0o755);

        const graknServer = childProcess.spawn(graknExecutablePath, ['server', 'start'], {
            cwd: graknRootDir,
            detached: true,
            stdio: 'ignore'
        });

        graknServer.unref();

        await tcpPortUsed.waitUntilUsed(GRAKN_PORT, 1000, 30000);
        await loadGqlFile(path.resolve('.', 'tests/support/basic-genealogy.gql'), 'gene');
    },
    beforeAllTimeout: 100000 // empirically, this should be enough to unpack, bootup Grakn and load data
}
