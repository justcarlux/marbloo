# Marbloo

Marbloo is a free, interactive **English learning platform** designed to make learning grammar and phonetics fun and effective.

## About

This project is part of my **Occupational Internship Report**, submitted as a partial requirement to obtain the degree of **Higher Technician in Languages with a major in English** at the [IUTSO (Instituto Universitario de Tecnología Superior de Oriente)](https://www.iutso.com/). It is dedicated to the students of [U.E. Simón Bolívar Libertador](https://uesbl.com).

## Features

- **Lectures**: short reading lessons on grammar (the verb _to be_ and the simple, continuous, perfect and perfect continuous tenses) and phonetics (phonetics and phonology, the IPA and its most common symbols).
- **Practice sets**: randomized question sets to put theory into practice. You can complete verb forms, turn statements into questions, answer trivia and identify IPA symbols by their sound.
- **Progress tracking**: time, attempts and hint usage are recorded for every question in a set.
- **Accounts**: sign up with email and password, or log in with Google, GitHub or Discord.

## Tech stack

- [Next.js](https://nextjs.org) (App Router) + React + TypeScript
- [Tailwind CSS](https://tailwindcss.com) and [Motion](https://motion.dev) for styling and animations
- [MDX](https://mdxjs.com) for the lecture content
- [Prisma](https://www.prisma.io) + PostgreSQL for the database

## Getting started

1. Install the dependencies:

    ```bash
    npm install
    ```

2. Create a `.env` file in the project root:

    ```env
    PORT=3000
    WEBSITE_URL=http://localhost:3000
    DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/marbloo

    GOOGLE_CLIENT_ID=
    GOOGLE_CLIENT_SECRET=
    GITHUB_CLIENT_ID=
    GITHUB_CLIENT_SECRET=
    DISCORD_CLIENT_ID=
    DISCORD_CLIENT_SECRET=
    ```

    Each OAuth app's callback URL must be `{WEBSITE_URL}/auth/callback/{google|github|discord}`.

3. Generate the Prisma client, set up the database and load the questions:

    ```bash
    npx prisma generate
    npx prisma migrate deploy
    npx dotenv -c -- tsx prisma/seed.ts
    ```

4. Start the development server:

    ```bash
    npm run dev
    ```

## Credits

Made with ❤️ by [Carlos Barranca](https://github.com/justcarlux). Logo by [alecsodev](https://www.instagram.com/alecsodev).
