import {CreateGraknError} from "./common/Exceptions";

export class GraknOptions {
    private _infer:      boolean | null;
    private _explain:    boolean | null;
    private _batchSize:  number  | null;

    constructor() {
        this._infer = null;
        this._explain = null;
        this._batchSize = null;
    }

    public infer(): boolean | null {
        return this._infer;
    }

    public set_infer(infer: boolean): GraknOptions {
        this._infer = infer;
        return this;
    }

    public explain(): boolean | null {
        return this._explain;
    }

    public set_explain(explain: boolean): GraknOptions {
        this._explain = explain;
        return this;
    }

    public batchSize(): number | null {
        return this._batchSize;
    }

    public set_batchSize(batchSize: number): GraknOptions {
        if (batchSize < 1) {
            throw "Attempted to set nonpositive batch size."
        }
        this._batchSize = batchSize;
        return this;
    }
}