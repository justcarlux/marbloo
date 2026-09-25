import crypto from "crypto";
import "server-only";
import { promisify } from "util";

const scrypt = promisify<
    crypto.BinaryLike,
    crypto.BinaryLike,
    number,
    crypto.ScryptOptions,
    Buffer
>(crypto.scrypt);

const KEY_LENGTH = 64;
const SALT_LENGTH = 16;
const COST = 2 ** 15;
const BLOCK_SIZE = 8;
const PARALLELIZATION = 1;

function scryptOptions(N: number, r: number, p: number): crypto.ScryptOptions {
    return { N, r, p, maxmem: 256 * N * r };
}

export async function hashPassword(password: string): Promise<string> {
    const salt = crypto.randomBytes(SALT_LENGTH);
    const hash = await scrypt(
        password.normalize("NFKC"),
        salt,
        KEY_LENGTH,
        scryptOptions(COST, BLOCK_SIZE, PARALLELIZATION),
    );
    return [
        "scrypt",
        COST,
        BLOCK_SIZE,
        PARALLELIZATION,
        salt.toString("base64"),
        hash.toString("base64"),
    ].join("$");
}

export async function verifyPassword(
    password: string,
    storedHash: string,
): Promise<boolean> {
    const [algorithm, N, r, p, salt, hash] = storedHash.split("$");
    if (algorithm !== "scrypt" || !salt || !hash) return false;

    const expected = Buffer.from(hash, "base64");
    const actual = await scrypt(
        password.normalize("NFKC"),
        Buffer.from(salt, "base64"),
        expected.length,
        scryptOptions(Number(N), Number(r), Number(p)),
    );

    return crypto.timingSafeEqual(actual, expected);
}
