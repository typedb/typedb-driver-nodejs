import { RelationType } from "./RelationType";
import { RemoteThingType, ThingType } from "./ThingType";
import { Grakn } from "../../Grakn";
import Transaction = Grakn.Transaction;
import { Merge } from "../../common/utils";
import { Stream } from "../../rpc/Stream";

export interface RoleType extends ThingType {
    getScope(): string;

    asRemote(transaction: Transaction): RemoteRoleType;
}

export interface RemoteRoleType extends Merge<RemoteThingType, RoleType> {
    asRemote(transaction: Transaction): RemoteRoleType;

    getSupertype(): RoleType;
    getSupertypes(): Stream<any>;
    getSubtypes(): Stream<any>;

    getRelation(): RelationType;
    getRelations(): Stream<any>;
    getPlayers(): Stream<any>;
}
