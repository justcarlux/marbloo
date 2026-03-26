"use client";

import { updateQuestionSet } from "@/app/actions/question-sets";
import { useBottomToolbar } from "@/app/contexts/BottomToolbarContext";
import { QuestionData } from "@/app/model/question/QuestionInstance";
import type { Question, QuestionSet } from "@/generated/prisma/client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createComponentForQuestionData } from "./question-component-factory";

export interface QuestionWrapperProps {
    questionSet: QuestionSet;
    questions: (QuestionData<unknown> | Question)[];
}

export default function QuestionSetWrapper({
    questionSet: initialQuestionSet,
    questions,
}: QuestionWrapperProps) {
    const [questionSet, setQuestionSet] = useState({ ...initialQuestionSet });
    const { setBackPath, setShouldClearQuestionSetOnExit } = useBottomToolbar();

    useEffect(() => {
        if (!initialQuestionSet.currentQuestionStartedAt) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setQuestionSet((q) => ({
                ...q,
                currentQuestionStartedAt: new Date(),
            }));
        }
    }, [initialQuestionSet.currentQuestionStartedAt]);

    useEffect(() => {
        updateQuestionSet({
            currentQuestionIndex: questionSet.currentQuestionIndex,
            currentQuestionHasUsedHint: questionSet.currentQuestionHasUsedHint,
            currentQuestionStartedAt: questionSet.currentQuestionStartedAt,
        });
    }, [questionSet]);

    useEffect(() => {
        setBackPath(`/learning/${questionSet.type}`);
        setShouldClearQuestionSetOnExit(true);

        return () => {
            setBackPath(null);
            setShouldClearQuestionSetOnExit(false);
        };
    }, [questionSet, setBackPath, setShouldClearQuestionSetOnExit]);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(
        initialQuestionSet.currentQuestionIndex,
    );
    const [currentProgressQuestionIndex, setCurrentProgressQuestionIndex] =
        useState(initialQuestionSet.currentQuestionIndex);

    const handleCorrect = async () => {
        const newQuestionIndex = currentQuestionIndex + 1;
        setCurrentProgressQuestionIndex(newQuestionIndex);
        setQuestionSet({
            ...questionSet,
            currentQuestionIndex: newQuestionIndex,
            currentQuestionHasUsedHint: false,
            currentQuestionStartedAt: null,
        });
    };

    const handleNextQuestion = () => {
        setCurrentQuestionIndex((currentValue) => currentValue + 1);
        setQuestionSet({
            ...questionSet,
            currentQuestionStartedAt: new Date(),
        });
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
                    <div key={currentQuestionIndex}>
                        {createComponentForQuestionData(
                            questions[currentQuestionIndex],
                            questionSet,
                            handleCorrect,
                            handleNextQuestion,
                        )}
                    </div>
                </motion.div>
            </div>
        </>
    );
}
