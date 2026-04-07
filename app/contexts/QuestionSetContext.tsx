"use client";

import { QuestionSet } from "@/generated/prisma/client";
import React, {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
} from "react";

interface QuestionSetContextType {
    questionSet: QuestionSet;
    setQuestionSet: Dispatch<SetStateAction<QuestionSet>>;
    handleCorrect: (answer: string, attempts: number) => void;
    handleNextQuestion: () => void;
}

const QuestionSetContext = createContext<QuestionSetContextType | null>(null);

export function QuestionSetContextProvider({
    questionSet,
    setQuestionSet,
    handleCorrect,
    handleNextQuestion,
    children,
}: {
    children: React.ReactNode;
} & QuestionSetContextType) {
    return (
        <QuestionSetContext.Provider
            value={{
                questionSet,
                setQuestionSet,
                handleCorrect,
                handleNextQuestion,
            }}
        >
            {children}
        </QuestionSetContext.Provider>
    );
}

export const useQuestionSet = () => {
    const context = useContext(QuestionSetContext);
    if (!context) {
        throw new Error(
            "useQuestionSet must be used within a QuestionSetContext",
        );
    }
    return context;
};
