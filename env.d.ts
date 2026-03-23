declare global {
    namespace NodeJS {
        interface ProcessEnv {
            DATABASE_URL: string;
            DATABASE_USER: string;
            DATABASE_PASSWORD: string;
            DATABASE_NAME: string;
            DATABASE_HOST: string;
            DATABASE_PORT: number;
        }
    }
}

export {};
