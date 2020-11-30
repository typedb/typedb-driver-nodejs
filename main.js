import { GraknClient } from "./dist/rpc/GraknClient";
import { Grakn } from "./dist/Grakn";
const { SessionType, TransactionType } = Grakn;

async function run() {
    const client = new GraknClient();
    // const names = await client.databases().all();
    // console.log(names);
    const session = await client.session("grakn", SessionType.SCHEMA);
    console.log(session.type());
    const tx = await session.transaction(TransactionType.WRITE);
    await tx.commit();
    await tx.close();
    await session.close();
    client.close();
}

run();
