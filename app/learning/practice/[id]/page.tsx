import QuestionSet from "@/app/components/question/QuestionSet";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

export const metadata = {
    title: "Practice Session | Marbloo",
};

export default async function GrammarPracticePage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const practiceQuestionSet = await prisma.practiceQuestionSet.findFirst({
        where: { id },
    });
    if (!practiceQuestionSet) {
        notFound();
    }
    const questions = await prisma.question.findMany({
        where: {
            id: {
                in: practiceQuestionSet.questions,
            },
        },
    });
    return <QuestionSet questions={questions} />;
}
