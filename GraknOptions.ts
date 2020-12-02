import {CreateGraknError} from "./_internal";

export class GraknOptions {
    private _infer: boolean;
    private _explain: boolean;
    private _batchSize: number;

    constructor() {
        this._infer = null;
        this._explain = null;
        this._batchSize = null;
    }

    infer(): boolean {
        return this._infer;
    }

    setInfer(infer: boolean): GraknOptions {
        this._infer = infer;
        return this;
    }

    explain(): boolean {
        return this._explain;
    }

    setExplain(explain: boolean): GraknOptions {
        this._explain = explain;
        return this;
    }

    batchSize(): number {
        return this._batchSize;
    }

    setBatchSize(batchSize: number): GraknOptions {
        if (batchSize < 1) {
            throw "Attempted to set nonpositive batch size."
        }
        this._batchSize = batchSize;
        return this;
    }
}
