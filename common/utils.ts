export type Merge<L, R> = L & Pick<R, Exclude<keyof R, keyof L>>;
