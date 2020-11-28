import { Given, When, Then } from "@cucumber/cucumber";
import { GraknClient } from "../../../rpc/GraknClient";

export const THREAD_POOL_SIZE = 32;

export let client: GraknClient;

Given("connection has been opened", () => {
    if (client) return;
    client = new GraknClient();
});
