"use server";

import {
    isOAuthProvider,
    OAUTH_CODE_VERIFIER_COOKIE_NAME,
    OAUTH_COOKIE_MAX_AGE_SECONDS,
    OAUTH_STATE_COOKIE_NAME,
    OAuthProviderName,
} from "@/lib/auth/constants";
import {
    createAuthorizationUrl,
    generateCodeVerifier,
    generateState,
} from "@/lib/auth/oauth";
import { hashPassword, verifyPassword } from "@/lib/auth/password";
import {
    createSession,
    getCurrentUser,
    invalidateCurrentSession,
} from "@/lib/auth/session";
import { normalizeEmail } from "@/lib/auth/users";
import prisma from "@/lib/prisma";
import crypto from "crypto";
import { Route } from "next";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

const authSchema = z.object({
    email: z.email("Invalid email format"),
    password: z
        .string()
        .min(6, "Password must be at least 6 characters long")
        .max(256, "Password must be at most 256 characters long"),
    displayName: z
        .string()
        .min(2, "Display name must be at least 2 characters long")
        .max(30, "Display name must be at most 30 characters long")
        .optional(),
});

const updateProfileSchema = z.object({
    displayName: z.string().max(30).optional(),
});

let dummyPasswordHash: Promise<string> | null = null;

export type AuthResponseErrorReason = "validation_error" | "auth_error";

export type AuthResponse =
    | { success: true }
    | {
          success: false;
          reason: AuthResponseErrorReason;
          error: string;
      };

export async function signIn(
    input: z.input<typeof authSchema>,
): Promise<AuthResponse> {
    const result = authSchema.safeParse(input);

    if (!result.success) {
        return {
            success: false,
            reason: "validation_error",
            error: result.error.message,
        };
    }

    const { email, password } = result.data;

    const user = await prisma.user.findUnique({
        where: { email: normalizeEmail(email) },
        select: { id: true, passwordHash: true },
    });

    if (!user?.passwordHash) {
        dummyPasswordHash ??= hashPassword(crypto.randomUUID());
        await verifyPassword(password, await dummyPasswordHash);
    }

    if (
        !user?.passwordHash ||
        !(await verifyPassword(password, user.passwordHash))
    ) {
        return {
            success: false,
            reason: "auth_error",
            error: "Invalid login credentials",
        };
    }

    await createSession(user.id);
    return { success: true };
}

export async function signUp(
    input: z.input<typeof authSchema>,
): Promise<AuthResponse> {
    const result = authSchema.safeParse(input);

    if (!result.success) {
        return {
            success: false,
            reason: "validation_error",
            error: result.error.message,
        };
    }

    const { email, password, displayName } = result.data;
    const normalizedEmail = normalizeEmail(email);

    const existing = await prisma.user.findUnique({
        where: { email: normalizedEmail },
        select: { id: true },
    });

    if (existing) {
        return {
            success: false,
            reason: "auth_error",
            error: "User already registered",
        };
    }

    const user = await prisma.user.create({
        data: {
            email: normalizedEmail,
            passwordHash: await hashPassword(password),
            displayName,
        },
    });

    await createSession(user.id);
    return { success: true };
}

export async function signInWithOAuth(provider: OAuthProviderName) {
    if (!isOAuthProvider(provider)) {
        throw new Error("Unsupported OAuth provider");
    }

    const state = generateState();
    const codeVerifier = generateCodeVerifier();
    const url = createAuthorizationUrl(provider, state, codeVerifier);

    const cookieStore = await cookies();
    const cookieOptions = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax" as const,
        path: "/",
        maxAge: OAUTH_COOKIE_MAX_AGE_SECONDS,
    };
    cookieStore.set(OAUTH_STATE_COOKIE_NAME, state, cookieOptions);
    cookieStore.set(
        OAUTH_CODE_VERIFIER_COOKIE_NAME,
        codeVerifier,
        cookieOptions,
    );

    redirect(url.toString() as Route);
}

export async function updateProfile(
    input: z.input<typeof updateProfileSchema>,
) {
    const user = await getCurrentUser();

    if (!user) {
        return { success: false, error: "User not authenticated" };
    }

    const result = updateProfileSchema.safeParse(input);

    if (!result.success) {
        return {
            success: false,
            error: result.error.message,
        };
    }

    const { displayName } = result.data;

    await prisma.user.update({
        where: { id: user.id },
        data: { displayName },
    });

    revalidatePath("/", "layout");
    return { success: true };
}

export async function signOut() {
    await invalidateCurrentSession();
    return redirect("/login");
}
