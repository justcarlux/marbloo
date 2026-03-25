export function distributeTotal(total: number, divisions: number) {
    const result = [];
    const baseValue = Math.floor(total / divisions);
    const remainder = total % divisions;

    for (let i = 0; i < divisions; i++) {
        result.push(baseValue + (i < remainder ? 1 : 0));
    }

    return result;
}
