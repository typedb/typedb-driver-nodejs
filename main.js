import { GraknClient } from "./dist/rpc/GraknClient";

async function run() {
    const client = new GraknClient();
    const names = await client.databases().all();
    console.log(names);
}

run();
