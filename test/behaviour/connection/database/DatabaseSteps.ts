import { When, Then } from "@cucumber/cucumber";
import { client, THREAD_POOL_SIZE } from "../ConnectionSteps";
import * as assert from "assert";

When("connection create database: {word}", async (name: string) => {
    await client.databases().create(name);
});

When("connection create database(s):", async (names: string[]) => {
    await names.forEach(async (name: string) => await client.databases().create(name));
});

When("connection create databases in parallel:", async (names: string[]) => {
    assert.ok(THREAD_POOL_SIZE >= names.length);
    const creations: Promise<void>[] = [];
    names.forEach(name => {
        creations.push(client.databases().create(name));
    });
    await Promise.all(creations);
});

When("connection delete database(s):", async (names: string[]) => {
    await names.forEach(async (name) => {
        await client.databases().delete(name);
    })
});

Then("connection delete database(s); throws exception", async (names: string[]) => {
    for (const name of names) {
        try {
            await client.databases().delete(name);
            assert.fail();
        } catch (e) {
            // successfully failed
        }
    }
});

When("connection delete databases in parallel:", async (names: string[]) => {
    assert.ok(THREAD_POOL_SIZE >= names.length);
    const deletions: Promise<void>[] = [];
    names.forEach(name => {
        deletions.push(client.databases().delete(name));
    });
    await Promise.all(deletions);
});

Then("connection has database(s):", async (names: string[]) => {
    const databases = await client.databases().all();
    names.forEach(name => {
        assert.ok(databases.includes(name));
    });
});

Then("connection does not have database(s):", async (names: string[]) => {
    const databases = await client.databases().all();
    names.forEach(name => {
        assert.ok(!databases.includes(name));
    });
});
