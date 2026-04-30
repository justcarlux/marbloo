declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: string;
            WEBSITE_URL: string;
            DATABASE_URL: string;
            NEXT_PUBLIC_SUPABASE_URL: string;
            NEXT_PUBLIC_SUPABASE_ANON_KEY: string;
            SUPABASE_SERVICE_ROLE_KEY: string;
        }
    }
}

export {};
