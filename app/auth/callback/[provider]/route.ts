import {
    isOAuthProvider,
    OAUTH_CODE_VERIFIER_COOKIE_NAME,
    OAUTH_STATE_COOKIE_NAME,
} from "@/lib/auth/constants";
import { exchangeCodeForProfile } from "@/lib/auth/oauth";
import { createSession } from "@/lib/auth/session";
import { findOrCreateOAuthUser } from "@/lib/auth/users";
import crypto from "crypto";
import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

function safeEqual(a: string, b: string) {
    const bufferA = Buffer.from(a);
    const bufferB = Buffer.from(b);
    return (
        bufferA.length === bufferB.length &&
        crypto.timingSafeEqual(bufferA, bufferB)
    );
}

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ provider: string }> },
) {
    const { provider } = await params;
    const { searchParams } = request.nextUrl;
    const code = searchParams.get("code");
    const state = searchParams.get("state");

    const cookieStore = await cookies();
    const storedState = cookieStore.get(OAUTH_STATE_COOKIE_NAME)?.value;
    const codeVerifier = cookieStore.get(OAUTH_CODE_VERIFIER_COOKIE_NAME)?.value;
    cookieStore.delete(OAUTH_STATE_COOKIE_NAME);
    cookieStore.delete(OAUTH_CODE_VERIFIER_COOKIE_NAME);

    const loginUrl = new URL("/login", process.env.WEBSITE_URL);

    if (
        !isOAuthProvider(provider) ||
        !code ||
        !state ||
        !storedState ||
        !codeVerifier ||
        !safeEqual(state, storedState)
    ) {
        return NextResponse.redirect(loginUrl);
    }

    try {
        const profile = await exchangeCodeForProfile(
            provider,
            code,
            codeVerifier,
        );
        const userId = await findOrCreateOAuthUser(provider, profile);
        await createSession(userId);
    } catch (err) {
        console.error(err);
        return NextResponse.redirect(loginUrl);
    }

    return NextResponse.redirect(new URL("/learning", process.env.WEBSITE_URL));
}
