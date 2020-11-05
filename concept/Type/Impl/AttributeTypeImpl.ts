import { ThingTypeImpl, RemoteThingTypeImpl } from "./ThingTypeImpl";
import { RemoteAttributeType, AttributeType, BooleanAttributeType, RemoteBooleanAttributeType, StringAttributeType, RemoteStringAttributeType, DoubleAttributeType, RemoteDoubleAttributeType, LongAttributeType, RemoteLongAttributeType, DateTimeAttributeType, RemoteDateTimeAttributeType } from "../AttributeType";

export class AttributeTypeImpl extends ThingTypeImpl implements AttributeType {
    asRemote(transaction: Transaction): RemoteAttributeType {
        return new RemoteAttributeTypeImpl(transaction, this.getLabel(), this.isRoot())
    };

    getValueType(): string {
        throw "Invalid Attribute Get attempted"
    }

}

export class RemoteAttributeTypeImpl extends RemoteThingTypeImpl implements RemoteAttributeType {

    getValueType(): string {
        throw "Invalid Attribute Get attempted"
    }

    asRemote(transaction: Transaction): RemoteAttributeType {
        return new RemoteAttributeTypeImpl(transaction, this.getLabel(), this.isRoot())
    }
}
export class BooleanAttributeTypeImpl extends RemoteAttributeTypeImpl implements BooleanAttributeType {
    getValueType(): string {
        return "BOOLEAN";
    }

    asRemote(transaction: Transaction): RemoteBooleanAttributeTypeImpl {
        return new RemoteBooleanAttributeTypeImpl(transaction, this.getLabel(), this.isRoot())
    };

}

export class RemoteBooleanAttributeTypeImpl extends RemoteAttributeTypeImpl implements RemoteBooleanAttributeType {
    getValueType(): string {
        return "BOOLEAN";
    }

    asRemote(transaction: Transaction): RemoteBooleanAttributeTypeImpl {
        return new RemoteBooleanAttributeTypeImpl(transaction, this.getLabel(), this.isRoot())
    }
}

export class StringAttributeTypeImpl extends RemoteAttributeTypeImpl implements StringAttributeType {
    getValueType(): string {
        return "STRING";
    }

    asRemote(transaction: Transaction): RemoteStringAttributeTypeImpl {
        return new RemoteStringAttributeTypeImpl(transaction, this.getLabel(), this.isRoot())
    };

}

export class RemoteStringAttributeTypeImpl extends RemoteAttributeTypeImpl implements RemoteStringAttributeType {
    getValueType(): string {
        return "STRING";
    }

    asRemote(transaction: Transaction): RemoteStringAttributeTypeImpl {
        return new RemoteStringAttributeTypeImpl(transaction, this.getLabel(), this.isRoot())
    }
}

export class DoubleAttributeTypeImpl extends RemoteAttributeTypeImpl implements DoubleAttributeType {
    getValueType(): string {
        return "DOUBLE";
    }

    asRemote(transaction: Transaction): RemoteDoubleAttributeTypeImpl {
        return new RemoteDoubleAttributeTypeImpl(transaction, this.getLabel(), this.isRoot())
    };

}

export class RemoteDoubleAttributeTypeImpl extends RemoteAttributeTypeImpl implements RemoteDoubleAttributeType {
    getValueType(): string {
        return "DOUBLE";
    }

    asRemote(transaction: Transaction): RemoteDoubleAttributeTypeImpl {
        return new RemoteDoubleAttributeTypeImpl(transaction, this.getLabel(), this.isRoot())
    }
}


export class LongAttributeTypeImpl extends RemoteAttributeTypeImpl implements LongAttributeType {
    getValueType(): string {
        return "LONG";
    }

    asRemote(transaction: Transaction): RemoteLongAttributeTypeImpl {
        return new RemoteLongAttributeTypeImpl(transaction, this.getLabel(), this.isRoot())
    };

}

export class RemoteLongAttributeTypeImpl extends RemoteAttributeTypeImpl implements RemoteLongAttributeType {
    getValueType(): string {
        return "LONG";
    }

    asRemote(transaction: Transaction): RemoteLongAttributeTypeImpl {
        return new RemoteLongAttributeTypeImpl(transaction, this.getLabel(), this.isRoot())
    }
}

export class DateTimeAttributeTypeImpl extends RemoteAttributeTypeImpl implements DateTimeAttributeType {
    getValueType(): string {
        return "DATETIME";
    }

    asRemote(transaction: Transaction): RemoteDateTimeAttributeTypeImpl {
        return new RemoteDateTimeAttributeTypeImpl(transaction, this.getLabel(), this.isRoot())
    };

}

export class RemoteDateTimeAttributeTypeImpl extends RemoteAttributeTypeImpl implements RemoteDateTimeAttributeType {
    getValueType(): string {
        return "DATETIME";
    }

    asRemote(transaction: Transaction): RemoteDateTimeAttributeTypeImpl {
        return new RemoteDateTimeAttributeTypeImpl(transaction, this.getLabel(), this.isRoot())
    }
}

