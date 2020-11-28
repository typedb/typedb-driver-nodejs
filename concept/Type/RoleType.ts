import { QueryIterator } from "../Concept";
import { RelationType } from "./RelationType";
import { RemoteThingType, ThingType } from "./ThingType";
import { Grakn } from "../../Grakn";
import Transaction = Grakn.Transaction;
import { Merge } from "../../common/utils";

export interface RoleType extends ThingType {
    getScope(): string;

    asRemote(transaction: Transaction): RemoteRoleType;
}

export interface RemoteRoleType extends Merge<RemoteThingType, RoleType> {
    asRemote(transaction: Transaction): RemoteRoleType;

    getSupertype():     RoleType;
    getSupertypes():    QueryIterator;
    getSubtypes():      QueryIterator;

    getRelation():      RelationType;
    getRelations():     QueryIterator;
    getPlayers():       QueryIterator;
}
