export const SESSION_COOKIE_NAME = "marbloo_session";
export const SESSION_DURATION_MS = 1000 * 60 * 60 * 24 * 30; // 30 days
export const SESSION_RENEWAL_THRESHOLD_MS = 1000 * 60 * 60 * 24 * 15; // 15 days

export const OAUTH_STATE_COOKIE_NAME = "marbloo_oauth_state";
export const OAUTH_CODE_VERIFIER_COOKIE_NAME = "marbloo_oauth_code_verifier";
export const OAUTH_COOKIE_MAX_AGE_SECONDS = 60 * 10; // 10 minutes

export const OAUTH_PROVIDERS = ["google", "github", "discord"] as const;
export type OAuthProviderName = (typeof OAUTH_PROVIDERS)[number];

export function isOAuthProvider(value: string): value is OAuthProviderName {
    return (OAUTH_PROVIDERS as readonly string[]).includes(value);
}
