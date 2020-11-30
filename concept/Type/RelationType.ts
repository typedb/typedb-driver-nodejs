import { ThingType, RemoteThingType } from "./ThingType";
import { Relation } from "../Thing/Relation";
import { RoleType } from "./RoleType";
import { Grakn } from "../../Grakn";
import Transaction = Grakn.Transaction;
import { Merge } from "../../common/utils";
import { Stream } from "../../rpc/Stream";

export interface RelationType extends ThingType {
    asRemote(transaction: Transaction): RemoteRelationType;
}

export interface RemoteRelationType extends Merge<RemoteThingType, RelationType> {
    create(): Relation;

    setSupertype(superRelationType: RelationType): void;
    getRelates(roleLabel: string): RoleType;
    getRelates(): Stream<any>;
    setRelates(roleLabel: string): void;
    setRelates(roleLabel: string, overriddenLabel: string): void;
    unsetRelates(roleLabel: string): void;

    getSupertypes(): Stream<any>;
    getSubtypes(): Stream<any>;
    getInstances(): Stream<any>;

    asRemote(transaction: Transaction): RemoteRelationType;
}
