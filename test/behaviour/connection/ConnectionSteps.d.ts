import { GraknClient } from "../../../dist/rpc/GraknClient";
import { Grakn } from "../../../dist/Grakn";
import Session = Grakn.Session;
import Transaction = Grakn.Transaction;
export declare const THREAD_POOL_SIZE = 32;
export declare let client: GraknClient;
export declare const sessions: Session[];
export declare const transactions: Map<Session, Transaction[]>;
