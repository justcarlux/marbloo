import prisma from "@/lib/prisma";
import crypto from "crypto";
import { cookies } from "next/headers";
import { cache } from "react";
import "server-only";
import {
    SESSION_COOKIE_NAME,
    SESSION_DURATION_MS,
    SESSION_RENEWAL_THRESHOLD_MS,
} from "./constants";

export interface CurrentUser {
    id: string;
    email: string | null;
    displayName: string;
    avatarUrl: string | null;
}

function hashToken(token: string) {
    return crypto.createHash("sha256").update(token).digest("hex");
}

export function sessionCookieOptions(expires: Date) {
    return {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax" as const,
        path: "/",
        expires,
    };
}

export async function createSession(userId: string) {
    const token = crypto.randomBytes(32).toString("base64url");
    const expiresAt = new Date(Date.now() + SESSION_DURATION_MS);

    await prisma.session.create({
        data: { id: hashToken(token), userId, expiresAt },
    });

    const cookieStore = await cookies();
    cookieStore.set(
        SESSION_COOKIE_NAME,
        token,
        sessionCookieOptions(expiresAt),
    );
}

export async function invalidateCurrentSession() {
    const cookieStore = await cookies();
    const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;

    if (token) {
        await prisma.session.deleteMany({ where: { id: hashToken(token) } });
    }

    cookieStore.delete(SESSION_COOKIE_NAME);
}

export async function invalidateAllUserSessions(userId: string) {
    await prisma.session.deleteMany({ where: { userId } });
}

export const getCurrentUser = cache(async (): Promise<CurrentUser | null> => {
    const cookieStore = await cookies();
    const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
    if (!token) return null;

    const sessionId = hashToken(token);
    const session = await prisma.session.findUnique({
        where: { id: sessionId },
        include: { user: true },
    });

    if (!session) return null;

    const now = Date.now();
    if (session.expiresAt.getTime() <= now) {
        await prisma.session.deleteMany({ where: { id: sessionId } });
        return null;
    }

    if (session.expiresAt.getTime() - now < SESSION_RENEWAL_THRESHOLD_MS) {
        await prisma.session.update({
            where: { id: sessionId },
            data: { expiresAt: new Date(now + SESSION_DURATION_MS) },
        });
    }

    const { user } = session;
    return {
        id: user.id,
        email: user.email,
        displayName: user.displayName || user.email?.split("@")[0] || "User",
        avatarUrl: user.avatarUrl,
    };
});
