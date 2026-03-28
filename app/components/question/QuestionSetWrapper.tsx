"use client";

import {
    createQuestionStatistic,
    deleteQuestionSet,
    updateQuestionSet,
} from "@/app/actions/question-sets";
import { useBottomToolbar } from "@/app/contexts/BottomToolbarContext";
import { QuestionData } from "@/app/model/question/QuestionInstance";
import type { Question, QuestionSet } from "@/generated/prisma/client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createComponentForQuestionData } from "./question-component-factory";
import { useRouter } from "next/navigation";
import { QuestionSetContextProvider } from "@/app/contexts/QuestionSetContext";

export interface QuestionWrapperProps {
    questionSet: QuestionSet;
    questions: (QuestionData<unknown> | Question)[];
}

export default function QuestionSetWrapper({
    questionSet: initialQuestionSet,
    questions,
}: QuestionWrapperProps) {
    const router = useRouter();

    const [questionSet, setQuestionSet] = useState<QuestionSet>({
        ...initialQuestionSet,
        currentQuestionStartedAt:
            initialQuestionSet.currentQuestionStartedAt ?? new Date(),
    });
    const { setShouldBackButtonAppear, setShouldClearQuestionSetOnExit } =
        useBottomToolbar();

    useEffect(() => {
        updateQuestionSet({
            currentQuestionIndex: questionSet.currentQuestionIndex,
            currentQuestionHasUsedHint: questionSet.currentQuestionHasUsedHint,
            currentQuestionStartedAt: questionSet.currentQuestionStartedAt,
        });
    }, [questionSet]);

    useEffect(() => {
        setShouldBackButtonAppear(true);
        setShouldClearQuestionSetOnExit(true);

        return () => {
            setShouldBackButtonAppear(false);
            setShouldClearQuestionSetOnExit(false);
        };
    }, [
        questionSet,
        setShouldBackButtonAppear,
        setShouldClearQuestionSetOnExit,
    ]);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(
        initialQuestionSet.currentQuestionIndex,
    );
    const [currentProgressQuestionIndex, setCurrentProgressQuestionIndex] =
        useState(initialQuestionSet.currentQuestionIndex);

    const handleCorrect = async () => {
        console.log(
            `took: ${((Date.now() - questionSet.currentQuestionStartedAt!.getTime()) / 1000).toFixed(2)}s | used hint: ${questionSet.currentQuestionHasUsedHint ? "yes" : "no"}`,
        );

        (async () => {
            const success = await createQuestionStatistic({
                questionId: questions[currentQuestionIndex].id,
                hasUsedHint: questionSet.currentQuestionHasUsedHint,
                time:
                    Date.now() -
                    questionSet.currentQuestionStartedAt!.getTime(),
            });
            if (!success) {
                // if result is false, we can assume the user is trying to cheat
                // this is pretty much the basic anti-cheat im willing to do right now
                await deleteQuestionSet();
                router.back();
            }
        })();
        const newQuestionIndex = currentQuestionIndex + 1;
        setCurrentProgressQuestionIndex(newQuestionIndex);
        setQuestionSet((questionSet) => ({
            ...questionSet,
            currentQuestionIndex: newQuestionIndex,
            currentQuestionHasUsedHint: false,
            currentQuestionStartedAt: null,
        }));
    };

    const handleNextQuestion = () => {
        setCurrentQuestionIndex((currentValue) => currentValue + 1);
        setQuestionSet((questionSet) => ({
            ...questionSet,
            currentQuestionStartedAt: new Date(),
        }));
    };

    return (
        <>
            <motion.div
                className="fixed w-[calc(100%-40px)] left-1/2 -translate-x-1/2 top-7 flex flex-col items-center"
                initial={{ scale: 0.9, opacity: 0, y: -20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
            >
                <div className="w-full h-2 rounded-full overflow-hidden bg-progress-bg mb-2">
                    <motion.div
                        className="h-full bg-green-500"
                        initial={{ width: 0 }}
                        animate={{
                            width: `${(currentProgressQuestionIndex / questions.length) * 100}%`,
                        }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
                <div className="font-bold text-lg sm:text-xl">
                    {currentQuestionIndex + 1}/{questions.length}
                </div>
            </motion.div>
            <div className="min-h-screen bg-linear-to-br flex flex-col items-center justify-center font-sans overflow-hidden">
                <motion.div
                    className="max-w-4xl rounded-3xl p-5 w-full text-center relative"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", duration: 0.5 }}
                >
                    {/* A key is set to this component in order to force a re-render on question change */}
                    <QuestionSetContextProvider
                        key={currentQuestionIndex}
                        questionSet={questionSet}
                        setQuestionSet={setQuestionSet}
                        handleCorrect={handleCorrect}
                        handleNextQuestion={handleNextQuestion}
                    >
                        {createComponentForQuestionData(
                            questions[currentQuestionIndex],
                        )}
                    </QuestionSetContextProvider>
                </motion.div>
            </div>
        </>
    );
}
