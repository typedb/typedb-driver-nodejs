import assert = require("assert");

export async function assertThrows(testfunc: () => void){
    try {
        await testfunc();
        assert.fail();
    } catch {
        // Failed successfully
    }
}

export async function assertThrowsWithMessage(testfunc: () => any, message: string){
    try {
        await testfunc();
        assert.fail();
    } catch (error) {
        assert(error.toString().includes(message));
    }
}