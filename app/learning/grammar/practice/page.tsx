import QuestionSet from "@/app/components/question/QuestionSet";
import { Prisma, Question } from "@/generated/prisma/client";
import prisma from "@/lib/prisma";

export const metadata = {
    title: "Practice Session | Marbloo",
};

export default async function GrammarPracticePage() {
    const questions = await prisma.$queryRaw<Question[]>(Prisma.sql`
        SELECT * FROM public."Question" ORDER BY RANDOM() LIMIT 10
    `);
    return <QuestionSet questions={questions} />;
}
