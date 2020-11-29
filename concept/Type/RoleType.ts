import { QueryIterator } from "../../internal";
import { RelationType } from "../../internal";
import { RemoteThingType, ThingType } from "../../internal";
import { Grakn } from "../../internal";
import Transaction = Grakn.Transaction;
import { Merge } from "../../internal";

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
