"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertThrowsWithMessage = exports.assertThrows = void 0;
const assert = require("assert");
async function assertThrows(testfunc) {
    try {
        await testfunc();
        assert.fail();
    }
    catch {
        // Failed successfully
    }
}
exports.assertThrows = assertThrows;
async function assertThrowsWithMessage(testfunc, message) {
    try {
        await testfunc();
        assert.fail();
    }
    catch (error) {
        assert(error.toString().includes(message));
    }
}
exports.assertThrowsWithMessage = assertThrowsWithMessage;
