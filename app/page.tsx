import { Prisma, Question } from "@/generated/prisma/client";
import QuestionSet from "./components/question/QuestionSet";
import prisma from "@/lib/prisma";

export default async function HomePage() {
    const questions = await prisma.$queryRaw<Question[]>(Prisma.sql`
        SELECT * FROM public."Question" ORDER BY RANDOM() LIMIT 10
    `);
    return <QuestionSet questions={questions} />;
}
