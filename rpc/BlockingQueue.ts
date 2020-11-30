export class BlockingQueue<T> {

    private readonly _promises: Promise<T>[];
    private readonly _resolvers: ((t: T) => void)[];

    constructor() {
        this._promises = [];
        this._resolvers = [];
    }

    private addPromise(): void {
        this._promises.push(new Promise(resolve => {
            this._resolvers.push(resolve);
        }));
    }

    add(t: T): void {
        if (!this._resolvers.length) this.addPromise();
        const resolve = this._resolvers.shift();
        resolve(t);
    }

    take(): Promise<T> {
        if (!this._promises.length) this.addPromise();
        return this._promises.shift();
    }
}
