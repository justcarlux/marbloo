import QuestionSet from "@/app/components/question/QuestionSet";
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
        <QuestionSet
            category={questionSet.type}
            questions={questions}
            currentQuestionIndex={questionSet.currentQuestionIndex}
        />
    );
}
