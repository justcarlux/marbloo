"use client";

import { QuestionData } from "@/app/model/question/QuestionInstance";
import { motion } from "framer-motion";
import { useState } from "react";
import { createComponentForQuestionData } from "./question-component-factory";
import { Question } from "@/generated/prisma/client";

export interface QuestionWrapperProps {
    questions: (QuestionData<unknown> | Question)[];
}

export type HandleCorrectFunction = ({
    usedHint,
}: {
    usedHint: boolean;
}) => void;

export type HandleNextFunction = () => void;

export default function QuestionSet({ questions }: QuestionWrapperProps) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentProgressQuestionIndex, setCurrentProgressQuestionIndex] =
        useState(0);
    const [questionStats, setQuestionStats] = useState<{
        [key: string]: { finishedAt: Date; usedHint: boolean };
    }>({});

    const handleCorrect = ({ usedHint }: { usedHint: boolean }) => {
        setCurrentProgressQuestionIndex((currentValue) => currentValue + 1);
        const currentQuestion = questions[currentQuestionIndex];
        setQuestionStats((currentValue) => ({
            ...currentValue,
            [currentQuestion.id]: {
                finishedAt: new Date(),
                usedHint,
            },
        }));
    };

    const handleNextQuestion = () => {
        setCurrentQuestionIndex((currentValue) => currentValue + 1);
    };

    return (
        <>
            <motion.div
                className="fixed w-[calc(100%-40px)] left-1/2 -translate-x-1/2 top-7 flex flex-col items-center"
                initial={{ scale: 0.9, opacity: 0, y: -20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
            >
                <div className="w-full h-2 rounded-full overflow-hidden bg-gray-300 mb-2">
                    <motion.div
                        className="h-full bg-green-500"
                        initial={{ width: 0 }}
                        animate={{
                            width: `${(currentProgressQuestionIndex / questions.length) * 100}%`,
                        }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
                <div className="font-bold text-xl">
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
                            handleCorrect,
                            handleNextQuestion,
                        )}
                    </div>
                </motion.div>
            </div>
        </>
    );
}
