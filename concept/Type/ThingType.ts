import { QueryIterator } from "../../internal";
import { AttributeType } from "../../internal";
import { RoleType } from "../../internal";
import { RemoteType, Type } from "../../internal";
import { Grakn } from "../../internal";
import Transaction = Grakn.Transaction;
import { Merge } from "../../internal";

export interface ThingType extends Type {
    asRemote(transaction: Transaction): RemoteThingType;
}

export interface RemoteThingType extends Merge<RemoteType, ThingType> {
    getSupertype(): ThingType;
    getSupertypes(): QueryIterator;
    getSubtypes(): QueryIterator;
    getInstances(): QueryIterator;

    setLabel(label: string): void;

    setAbstract(): void;
    unsetAbstract(): void;

    setPlays(role: RoleType): void;
    setPlays(role: RoleType, overriddenType: RoleType): void;

    setOwns(attributeType: AttributeType): void;
    setOwns(attributeType: AttributeType, isKey: boolean): void;
    setOwns(attributeType: AttributeType, overriddenType: AttributeType): void;
    setOwns(attributeType: AttributeType, isKey: boolean, otherType: AttributeType): void;

    getPlays(): QueryIterator;
    getOwns(): QueryIterator;
    getOwns(valueType: AttributeType.ValueType): QueryIterator;
    getOwns(keysOnly: boolean): QueryIterator;
    getOwns(valueType: AttributeType.ValueType, keysOnly: boolean): QueryIterator;

    unsetPlays(role: RoleType): void;
    unsetOwns(attributeType: AttributeType): void;

    asRemote(transaction: Transaction): RemoteThingType;
}
