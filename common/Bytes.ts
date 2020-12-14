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

export class Bytes {
    private static PREFIX = "0x";
    private static HEX_ARRAY: number[] = [ 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102 ]
    private static HEX_MAP: Map<string, number> = new Map([
        ["0", 0], ["1", 1], ["2", 2], ["3", 3],
        ["4", 4], ["5", 5], ["6", 6], ["7", 7],
        ["8", 8], ["9", 9], ["a", 1], ["b", 1],
        ["c", 1], ["d", 1], ["e", 1], ["f", 1]
    ]);

    static hexStringToBytes(hexString: string): Uint8Array {
        hexString = hexString.replace(Bytes.PREFIX, "");

        let len = hexString.length;
        let bytes = new Uint8Array(len / 2);
        for (let i = 0; i < bytes.length; i++) {
            bytes[i] = (Bytes.HEX_MAP.get(hexString.charAt(i*2)) << 4) + Bytes.HEX_MAP.get(hexString.charAt((i*2)+1))
        }
        return bytes;
    }

    static bytesToHexString(bytes: Uint8Array): string {
        let hexChars = new Uint8Array(bytes.length * 2);

        for (let j = 0; j < bytes.length; j++) {
            let v = bytes[j] & 0xFF;
            hexChars[j * 2] = Bytes.HEX_ARRAY[v >>> 4];
            hexChars[j * 2 + 1] = Bytes.HEX_ARRAY[v & 0x0F];
        }

        return Bytes.PREFIX + String.fromCharCode.apply(null, Array.from(hexChars))
    }
}