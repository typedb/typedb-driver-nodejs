"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraknOptions = void 0;
var GraknOptions = /** @class */ (function () {
    function GraknOptions() {
        this._infer = null;
        this._explain = null;
        this._batchSize = null;
    }
    GraknOptions.prototype.infer = function () {
        return this._infer;
    };
    GraknOptions.prototype.set_infer = function (infer) {
        this._infer = infer;
        return this;
    };
    GraknOptions.prototype.explain = function () {
        return this._explain;
    };
    GraknOptions.prototype.set_explain = function (explain) {
        this._explain = explain;
        return this;
    };
    GraknOptions.prototype.batchSize = function () {
        return this._batchSize;
    };
    GraknOptions.prototype.set_batchSize = function (batchSize) {
        if (batchSize < 1) {
            throw "Attempted to set nonpositive batch size.";
        }
        this._batchSize = batchSize;
        return this;
    };
    return GraknOptions;
}());
exports.GraknOptions = GraknOptions;
