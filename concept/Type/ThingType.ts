import { QueryIterator } from "../Concept";
import { AttributeType } from "./AttributeType";
import { RoleType } from "./RoleType";
import { RemoteType, Type } from "./Type";

export interface ThingType extends Type {
    asRemote(transaction: Transaction): RemoteThingType;
}

export interface RemoteThingType extends Merge<RemoteType, ThingType> {
    asRemote(transaction: Transaction): RemoteThingType;
    getSupertype(): ThingType;

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
    //getOwns(valueType: ValueType):                      QueryIterator;
    getOwns(keysOnly: boolean):                         QueryIterator;
    //getOwns(valueType: ValueType, keysOnly: boolean):   QueryIterator;

    unsetPlays(role: RoleType): void;
    unsetOwns(attributeType: AttributeType): void;

}