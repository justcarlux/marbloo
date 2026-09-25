declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: string;
            WEBSITE_URL: string;
            DATABASE_URL: string;
            GOOGLE_CLIENT_ID?: string;
            GOOGLE_CLIENT_SECRET?: string;
            GITHUB_CLIENT_ID?: string;
            GITHUB_CLIENT_SECRET?: string;
            DISCORD_CLIENT_ID?: string;
            DISCORD_CLIENT_SECRET?: string;
        }
    }
}

export {};
