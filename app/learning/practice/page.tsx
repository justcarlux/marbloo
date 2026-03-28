import QuestionSetWrapper from "@/app/components/question/QuestionSetWrapper";
import prisma from "@/lib/prisma";
import { createSupabaseServerClient } from "@/lib/supabase/server-client";
import { notFound } from "next/navigation";

export const metadata = {
    title: "Practice | Marbloo",
};

export default async function GrammarPracticePage() {
    const supabase = await createSupabaseServerClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
        notFound();
    }
    const questionSet = await prisma.questionSet.findFirst({
        where: { userId: user.id },
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
