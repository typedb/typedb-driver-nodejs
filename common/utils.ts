function hash(stringToHash: string): number {
    let hash: number = 0;
    for (let i = 0; i < stringToHash.length; i++) {
        let chr = stringToHash.charCodeAt(i);
        hash = hash * 31 + chr;
        hash |= 0;
    }
    return hash;
}