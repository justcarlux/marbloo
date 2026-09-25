import crypto from "crypto";
import "server-only";
import { z } from "zod";
import { OAuthProviderName } from "./constants";

export interface OAuthProfile {
    providerAccountId: string;
    email: string | null;
    emailVerified: boolean;
    displayName: string | null;
    avatarUrl: string | null;
}

interface OAuthProviderConfig {
    authorizationEndpoint: string;
    tokenEndpoint: string;
    scopes: string[];
    clientId: () => string | undefined;
    clientSecret: () => string | undefined;
    fetchProfile: (accessToken: string) => Promise<OAuthProfile>;
}

export class OAuthError extends Error {}

async function fetchJson<T>(
    url: string,
    schema: z.ZodType<T>,
    init?: RequestInit,
): Promise<T> {
    const response = await fetch(url, {
        ...init,
        headers: {
            Accept: "application/json",
            "User-Agent": "marbloo",
            ...init?.headers,
        },
        cache: "no-store",
    });

    if (!response.ok) {
        throw new OAuthError(
            `Request to ${url} failed with status ${response.status}`,
        );
    }

    return schema.parse(await response.json());
}

const googleUserSchema = z.object({
    sub: z.string(),
    email: z.string().optional(),
    email_verified: z.boolean().optional(),
    name: z.string().optional(),
    picture: z.string().optional(),
});

const githubUserSchema = z.object({
    id: z.number(),
    login: z.string(),
    avatar_url: z.string().nullable().optional(),
});

const githubEmailsSchema = z.array(
    z.object({
        email: z.string(),
        primary: z.boolean(),
        verified: z.boolean(),
    }),
);

const discordUserSchema = z.object({
    id: z.string(),
    username: z.string(),
    global_name: z.string().nullable().optional(),
    avatar: z.string().nullable().optional(),
    email: z.string().nullable().optional(),
    verified: z.boolean().optional(),
});

const providers: Record<OAuthProviderName, OAuthProviderConfig> = {
    google: {
        authorizationEndpoint: "https://accounts.google.com/o/oauth2/v2/auth",
        tokenEndpoint: "https://oauth2.googleapis.com/token",
        scopes: ["openid", "email", "profile"],
        clientId: () => process.env.GOOGLE_CLIENT_ID,
        clientSecret: () => process.env.GOOGLE_CLIENT_SECRET,
        async fetchProfile(accessToken) {
            const user = await fetchJson(
                "https://openidconnect.googleapis.com/v1/userinfo",
                googleUserSchema,
                { headers: { Authorization: `Bearer ${accessToken}` } },
            );
            return {
                providerAccountId: user.sub,
                email: user.email ?? null,
                emailVerified: user.email_verified === true,
                displayName: user.name ?? null,
                avatarUrl: user.picture ?? null,
            };
        },
    },
    github: {
        authorizationEndpoint: "https://github.com/login/oauth/authorize",
        tokenEndpoint: "https://github.com/login/oauth/access_token",
        scopes: ["read:user", "user:email"],
        clientId: () => process.env.GITHUB_CLIENT_ID,
        clientSecret: () => process.env.GITHUB_CLIENT_SECRET,
        async fetchProfile(accessToken) {
            const headers = { Authorization: `Bearer ${accessToken}` };
            const [user, emails] = await Promise.all([
                fetchJson("https://api.github.com/user", githubUserSchema, {
                    headers,
                }),
                fetchJson(
                    "https://api.github.com/user/emails",
                    githubEmailsSchema,
                    { headers },
                ),
            ]);
            const email =
                emails.find((e) => e.primary && e.verified) ??
                emails.find((e) => e.verified);
            return {
                providerAccountId: String(user.id),
                email: email?.email ?? null,
                emailVerified: email !== undefined,
                displayName: user.login,
                avatarUrl: user.avatar_url ?? null,
            };
        },
    },
    discord: {
        authorizationEndpoint: "https://discord.com/oauth2/authorize",
        tokenEndpoint: "https://discord.com/api/oauth2/token",
        scopes: ["identify", "email"],
        clientId: () => process.env.DISCORD_CLIENT_ID,
        clientSecret: () => process.env.DISCORD_CLIENT_SECRET,
        async fetchProfile(accessToken) {
            const user = await fetchJson(
                "https://discord.com/api/users/@me",
                discordUserSchema,
                { headers: { Authorization: `Bearer ${accessToken}` } },
            );
            return {
                providerAccountId: user.id,
                email: user.email ?? null,
                emailVerified: user.verified === true,
                displayName: user.global_name ?? user.username,
                avatarUrl: user.avatar
                    ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`
                    : null,
            };
        },
    },
};

function getCredentials(provider: OAuthProviderName) {
    const config = providers[provider];
    const clientId = config.clientId();
    const clientSecret = config.clientSecret();

    if (!clientId || !clientSecret) {
        throw new OAuthError(
            `Missing OAuth credentials for provider "${provider}"`,
        );
    }

    return { clientId, clientSecret };
}

function getRedirectUri(provider: OAuthProviderName) {
    return `${process.env.WEBSITE_URL}/auth/callback/${provider}`;
}

export function generateState() {
    return crypto.randomBytes(32).toString("base64url");
}

export function generateCodeVerifier() {
    return crypto.randomBytes(32).toString("base64url");
}

function createCodeChallenge(codeVerifier: string) {
    return crypto.createHash("sha256").update(codeVerifier).digest("base64url");
}

export function createAuthorizationUrl(
    provider: OAuthProviderName,
    state: string,
    codeVerifier: string,
): URL {
    const config = providers[provider];
    const { clientId } = getCredentials(provider);

    const url = new URL(config.authorizationEndpoint);
    url.searchParams.set("response_type", "code");
    url.searchParams.set("client_id", clientId);
    url.searchParams.set("redirect_uri", getRedirectUri(provider));
    url.searchParams.set("scope", config.scopes.join(" "));
    url.searchParams.set("state", state);
    url.searchParams.set("code_challenge", createCodeChallenge(codeVerifier));
    url.searchParams.set("code_challenge_method", "S256");
    return url;
}

const tokenResponseSchema = z.object({
    access_token: z.string().optional(),
    error: z.string().optional(),
    error_description: z.string().optional(),
});

export async function exchangeCodeForProfile(
    provider: OAuthProviderName,
    code: string,
    codeVerifier: string,
): Promise<OAuthProfile> {
    const config = providers[provider];
    const { clientId, clientSecret } = getCredentials(provider);

    const response = await fetch(config.tokenEndpoint, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            grant_type: "authorization_code",
            code,
            redirect_uri: getRedirectUri(provider),
            client_id: clientId,
            client_secret: clientSecret,
            code_verifier: codeVerifier,
        }),
        cache: "no-store",
    });

    const data = tokenResponseSchema.parse(
        await response.json().catch(() => ({})),
    );

    if (!response.ok || !data.access_token) {
        throw new OAuthError(
            `Token exchange with "${provider}" failed: ${
                data.error_description ?? data.error ?? response.status
            }`,
        );
    }

    return config.fetchProfile(data.access_token);
}
