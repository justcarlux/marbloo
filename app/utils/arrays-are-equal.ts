export function arraysAreEqual<T>(arr1: T[], arr2: T[]): boolean {
    if (arr1.length !== arr2.length) {
        return false;
    }

    return JSON.stringify(arr1) === JSON.stringify(arr2);
}
