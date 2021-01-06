import {Numeric} from "./Numeric";
import {Concept} from "../Concept";
import AnswerProto from "grakn-protocol/protobuf/answer_pb";
import {ThingImpl} from "../thing/impl/ThingImpl";
import {TypeImpl} from "../type/impl/TypeImpl";

export class NumericGroup {
    private readonly _owner: Concept;
    private readonly _numeric: Numeric;

    constructor(owner: Concept, numeric: Numeric) {
        this._owner = owner;
        this._numeric = numeric;
    }

    public static of (res: AnswerProto.NumericGroup): NumericGroup {
        let concept: Concept;
        if (res.getOwner().hasThing()) concept = ThingImpl.of(res.getOwner().getThing());
        else concept = TypeImpl.of(res.getOwner().getType());
        return new NumericGroup(concept, Numeric.of(res.getNumber()))
    }

    owner(): Concept {
        return this._owner;
    }

    numeric(): Numeric {
        return this._numeric;
    }
}