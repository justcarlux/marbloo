import QuestionSetWrapper from "@/app/components/question/QuestionSetWrapper";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

export const metadata = {
    title: "Practice Session | Marbloo",
};

export default async function GrammarPracticePage() {
    const questionSet = await prisma.questionSet.findFirst({
        where: { userId: "1" },
    });
    if (!questionSet) {
        notFound();
    }
    const questions = await prisma.question.findQuestionsOrdered(
        questionSet.questions,
    );
    return (
        <QuestionSetWrapper questionSet={questionSet} questions={questions} />
    );
}
