export declare class Headers {
    private map;
    constructor(headers?: any);
    /**
     * Sets a new value for an existing header inside a `Headers` object, or adds the header if it does not already exist.
     */
    set(name: string, value: string): void;
    /**
     * Appends a new value onto an existing header inside a `Headers` object, or adds the header if it does not already exist.
     */
    append(name: string, value: string): void;
    /**
     * Deletes a header from the `Headers` object.
     */
    delete(name: string): this;
    /**
     * Returns a `ByteString` sequence of all the values of a header with a given name.
     */
    get(name: string): string | null;
    /**
     * Returns the map of all headers in a `Headers` object.
     */
    getAllHeaders(): Record<string, string>;
    /**
     * Returns a boolean stating whether a `Headers` object contains a certain header.
     */
    has(name: string): boolean;
    /**
     * Traverses the `Headers` object,
     * calling the given callback for each header.
     */
    forEach<ThisArg = this>(callback: (this: ThisArg, value: string, name: string, thisHeaders: this) => void, thisArg?: ThisArg): void;
    private normalizeName;
    private normalizeValue;
}
