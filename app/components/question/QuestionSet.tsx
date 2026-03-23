"use client";

import { QuestionData } from "@/app/model/question/QuestionInstance";
import { motion } from "framer-motion";
import { useState } from "react";
import { createComponentForQuestionData } from "./question-component-factory";
import { Question } from "@/prisma/generated/prisma/client";

export interface QuestionWrapperProps {
    questions: (QuestionData<unknown> | Question)[];
}

export default function QuestionSet({ questions }: QuestionWrapperProps) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const handleNextQuestion = () => {
        setCurrentQuestionIndex((currentValue) => currentValue + 1);
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-blue-900 to-blue-700 flex flex-col items-center justify-center p-5 font-sans">
            <motion.div
                className="bg-white rounded-3xl p-10 max-w-2xl w-full shadow-2xl text-center relative overflow-hidden"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", duration: 0.5 }}
            >
                <div className="w-full h-2 bg-gray-200 rounded-full mb-8 overflow-hidden">
                    <motion.div
                        className="h-full bg-green-500"
                        initial={{ width: 0 }}
                        animate={{
                            width: `${(currentQuestionIndex / questions.length) * 100}%`,
                        }}
                        transition={{ duration: 0.5 }}
                    />
                </div>

                <div key={currentQuestionIndex}>
                    {createComponentForQuestionData(
                        questions[currentQuestionIndex],
                        handleNextQuestion,
                    )}
                </div>
            </motion.div>
        </div>
    );
}
