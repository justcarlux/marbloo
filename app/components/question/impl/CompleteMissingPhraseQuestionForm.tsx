"use client";

import { CompleteCorrectVerbFormQuestionData } from "@/app/model/question/impl/CompleteCorrectVerbFormQuestion";
import { CompleteCorrectVerbFormWithAuxiliarsQuestionData } from "@/app/model/question/impl/CompleteCorrectVerbFormWithAuxiliarsQuestion";
import CompleteMissingPhraseQuestion, {
    CompleteMissingPhraseQuestionResult,
} from "@/app/model/question/impl/CompleteMissingPhraseQuestion";
import { QuestionData } from "@/app/model/question/Question";
import { createQuestionInstance } from "@/app/model/question/question-factory";
import { getQuestionPromptByTitle } from "@/app/model/question/question-prompts";
import { isButtonDebounceExpired } from "@/app/utils/button-debounce";
import { AnimatePresence, motion } from "framer-motion";
import Markdown from "markdown-to-jsx";
import { useCallback, useEffect, useRef, useState } from "react";
import useSound from "use-sound";

interface CompleteMissingPhraseQuestionFormProps {
    questionData: QuestionData<
        | CompleteCorrectVerbFormQuestionData
        | CompleteCorrectVerbFormWithAuxiliarsQuestionData
    >;
    handleNextQuestion: () => void;
}

export default function CompleteMissingPhraseQuestionForm({
    questionData,
    handleNextQuestion,
}: CompleteMissingPhraseQuestionFormProps) {
    const [playSuccess] = useSound("/sfx/success.mp3");
    const [playFailure] = useSound("/sfx/failure.mp3");

    const [lastSubmitted, setLastSubmitted] = useState(0);
    const [answer, setAnswer] = useState("");
    const [result, setResult] =
        useState<CompleteMissingPhraseQuestionResult | null>(null);
    const [isError, setIsError] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const questionRef = useRef(
        createQuestionInstance(
            questionData,
        ) as CompleteMissingPhraseQuestion<never>,
    );

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const handleSubmit = useCallback(() => {
        if (result && result.success) {
            handleNextQuestion();
            return;
        }

        if (!isButtonDebounceExpired(lastSubmitted)) return;
        setLastSubmitted(Date.now());

        if (!answer.trim()) return;

        setResult(null);
        setIsError(false);

        const [, questionResult] = questionRef.current.check(answer);
        setResult(questionResult);
        setIsError(!questionResult.success);
        if (questionResult.success) {
            playSuccess();
        } else {
            playFailure();
        }
    }, [
        answer,
        handleNextQuestion,
        result,
        playSuccess,
        playFailure,
        lastSubmitted,
    ]);

    const handleClear = useCallback(() => {
        setAnswer("");
        setResult(null);
        inputRef.current?.focus();
    }, []);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Enter") {
                handleSubmit();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleSubmit]);

    const isClearButtonDisabled = !answer || result?.success;

    return (
        <div>
            <motion.h2
                className="text-4xl text-gray-700 mb-8 leading-tight"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <div className="mb-4 text-base">
                    {getQuestionPromptByTitle(questionData.type)}
                </div>
                <div className="font-bold">
                    <span>{questionData.data.leftSide}</span>
                    <span className="bg-blue-100 rounded-2xl p-2 mx-2 inline-block">
                        {questionData.data.middle}
                    </span>
                    <span>{questionData.data.rightSide}</span>
                </div>
            </motion.h2>

            <motion.div
                className="mb-8"
                animate={{ scale: result?.success ? 1.05 : 1 }}
                transition={{ duration: 0.3 }}
            >
                <input
                    ref={inputRef}
                    type="text"
                    value={answer}
                    onChange={(e) => {
                        setAnswer(e.target.value);
                        if (!e.target.value) {
                            setResult(null);
                            setIsError(false);
                        }
                    }}
                    placeholder="Type your answer..."
                    disabled={result?.success}
                    className={`w-full p-4 text-2xl border-4 rounded-2xl outline-none text-center font-medium transition-all
              ${isError ? "border-red-500 animate-shake" : "border-gray-200 focus:border-green-500 focus:shadow-lg focus:shadow-green-200"}`}
                />
            </motion.div>

            <AnimatePresence mode="wait">
                {result &&
                    (result.success ? (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="mt-5 p-4 bg-green-100 text-green-600 rounded-xl border-2 border-green-500 font-medium"
                        >
                            <Markdown>{result.message!}</Markdown>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="error"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="mt-5 p-4 bg-red-100 text-red-500 rounded-xl border-2 border-red-500 font-medium"
                        >
                            {result.message}
                        </motion.div>
                    ))}
            </AnimatePresence>

            <div className="grid grid-cols-2 gap-4 mt-8">
                <motion.button
                    whileHover={
                        !isClearButtonDisabled ? { scale: 1.02 } : undefined
                    }
                    whileTap={
                        !isClearButtonDisabled ? { scale: 0.98 } : undefined
                    }
                    onClick={handleClear}
                    disabled={isClearButtonDisabled}
                    className={`py-4 px-6 text-lg font-bold rounded-2xl transition-all disabled:opacity-60 bg-white text-gray-700 border-2 border-gray-200 ${!isClearButtonDisabled && "hover:shadow-lg hover:-translate-y-0.5"}`}
                >
                    Clear
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSubmit}
                    disabled={!answer.trim()}
                    className={`py-4 px-6 text-lg font-bold rounded-2xl uppercase tracking-wide transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-md
                        ${
                            result?.success
                                ? "bg-blue-500 text-white hover:shadow-lg hover:-translate-y-0.5"
                                : "bg-green-500 text-white hover:shadow-lg hover:-translate-y-0.5 shadow-green-200"
                        }`}
                >
                    {result?.success ? "Next" : "Check"}
                </motion.button>
            </div>
        </div>
    );
}
