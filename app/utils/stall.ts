import wait from "./wait";

export default async function stall<T>(
    fn: () => T | Promise<T>,
    minMs: number,
): Promise<T> {
    const startTime = Date.now();
    const result = await fn();
    const elapsed = Date.now() - startTime;

    const remaining = minMs - elapsed;
    if (remaining > 0) {
        await wait(remaining);
    }

    return result;
}
