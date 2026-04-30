type Entries<T> = { [K in keyof T]: [K, T[K]] }[keyof T][];

function typedObjectEntries<T extends object>(obj: T): Entries<T> {
    return Object.entries(obj) as Entries<T>;
}

export default typedObjectEntries;
