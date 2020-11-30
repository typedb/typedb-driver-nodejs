import { GraknClient } from "./dist/rpc/GraknClient";
import { Grakn } from "./dist/Grakn";
const { SessionType, TransactionType } = Grakn;

async function run() {
    let client;
    try {
        client = new GraknClient();
        console.log(`new GraknClient() - SUCCESS`);
    } catch (err) {
        console.error(`new GraknClient() - ERROR: ${err.stack || err}`);
        return;
    }
        // const names = await client.databases().all();
        // console.log(names);
    let session;
    try {
        session = await client.session("grakn", SessionType.SCHEMA);
        console.log("client.session - SUCCESS");
    } catch (err) {
        console.error(`client.session - ERROR: ${err.stack || err}`);
        return;
    }

    let tx;
    try {
        tx = await session.transaction(TransactionType.WRITE);
        console.log("session.transaction - SUCCESS");
    } catch (err) {
        console.error(`session.transaction - ERROR: ${err.stack || err}`);
        return;
    }

    try {
        await tx.commit();
        console.log("tx.commit - SUCCESS");
    } catch (err) {
        console.error(`tx.commit - ERROR: ${err.stack || err}`);
        return;
    }

    try {
        await tx.close();
        console.log("tx.close - SUCCESS");
    } catch (err) {
        console.error(`tx.close - ERROR: ${err.stack || err}`);
        return;
    }

    try {
        await session.close();
        console.log("session.close - SUCCESS");
    } catch (err) {
        console.error(`session.close - ERROR: ${err.stack || err}`);
        return;
    }

    try {
        client.close();
        console.log("client.close - SUCCESS");
    } catch (err) {
        console.error(`client.close - ERROR: ${err.stack || err}`);
        return;
    }
}

run();
