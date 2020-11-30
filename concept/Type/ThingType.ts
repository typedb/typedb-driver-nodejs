import { AttributeType } from "./AttributeType";
import { RoleType } from "./RoleType";
import { RemoteType, Type } from "./Type";
import { Grakn } from "../../Grakn";
import Transaction = Grakn.Transaction;
import { Merge } from "../../common/utils";
import { Stream } from "../../rpc/Stream";
import { Thing } from "../Thing/Thing";

export interface ThingType extends Type {
    asRemote(transaction: Transaction): RemoteThingType;
}

export interface RemoteThingType extends Merge<RemoteType, ThingType> {
    getSupertype(): ThingType;
    getSupertypes(): Stream<any>;
    getSubtypes(): Stream<any>;
    getInstances(): Stream<Thing>;

    setLabel(label: string): void;

    setAbstract(): void;
    unsetAbstract(): void;

    setPlays(role: RoleType): void;
    setPlays(role: RoleType, overriddenType: RoleType): void;

    setOwns(attributeType: AttributeType): void;
    setOwns(attributeType: AttributeType, isKey: boolean): void;
    setOwns(attributeType: AttributeType, overriddenType: AttributeType): void;
    setOwns(attributeType: AttributeType, isKey: boolean, otherType: AttributeType): void;

    getPlays(): Stream<any>;
    getOwns(): Stream<any>;
    getOwns(valueType: AttributeType.ValueType): Stream<any>;
    getOwns(keysOnly: boolean): Stream<any>;
    getOwns(valueType: AttributeType.ValueType, keysOnly: boolean): Stream<any>;

    unsetPlays(role: RoleType): void;
    unsetOwns(attributeType: AttributeType): void;

    asRemote(transaction: Transaction): RemoteThingType;
}
