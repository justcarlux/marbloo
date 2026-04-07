"use client";

import { useQuestionSet } from "@/app/contexts/QuestionSetContext";
import AnswerChoicedQuestion, {
    AnswerChoicedQuestionData,
    AnswerChoicedQuestionResult,
} from "@/app/model/question/impl/AnswerChoicedQuestion";
import { createQuestionInstance } from "@/app/model/question/question-factory";
import {
    getQuestionHintByType,
    getQuestionPromptByType,
    isQuestionHintAvailable,
} from "@/app/model/question/question-prompts";
import { QuestionData } from "@/app/model/question/QuestionInstance";
import { isButtonDebounceExpired } from "@/app/utils/button-debounce";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { TbBulb, TbBulbOff } from "react-icons/tb";
import useSound from "use-sound";
import QuestionFormBottomPanel from "../QuestionFormBottomPanel";

interface AnswerChoicedQuestionFormProps {
    questionData: QuestionData<AnswerChoicedQuestionData>;
}

export default function AnswerChoicedQuestionForm({
    questionData,
}: AnswerChoicedQuestionFormProps) {
    const { questionSet, setQuestionSet, handleCorrect, handleNextQuestion } =
        useQuestionSet();

    const [playSuccess] = useSound("/sfx/success.mp3");
    const [playFailure] = useSound("/sfx/failure.mp3");
    const [playHint] = useSound("/sfx/hint.mp3");

    const [lastSubmitted, setLastSubmitted] = useState(0);
    const [showHint, setShowHint] = useState(
        questionSet.currentQuestionHasUsedHint,
    );
    const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
    const [result, setResult] = useState<AnswerChoicedQuestionResult | null>(
        null,
    );
    const questionRef = useRef(
        createQuestionInstance(questionData) as AnswerChoicedQuestion,
    );

    const handleShowHint = useCallback(async () => {
        if (showHint || result?.success) return;

        playHint();
        setShowHint(true);
        setQuestionSet((questionSet) => ({
            ...questionSet,
            currentQuestionHasUsedHint: true,
        }));
    }, [showHint, playHint, setQuestionSet, result?.success]);

    const handleSubmit = useCallback(() => {
        if (result && result.success) {
            handleNextQuestion();
            return;
        }

        if (!isButtonDebounceExpired(lastSubmitted)) return;
        setLastSubmitted(Date.now());

        if (selectedChoice === null) return;

        setResult(null);

        const questionResult = questionRef.current.check(selectedChoice);
        setResult(questionResult);
        if (questionResult.success) {
            handleCorrect();
            playSuccess();
        } else {
            playFailure();
        }
    }, [
        selectedChoice,
        handleCorrect,
        handleNextQuestion,
        result,
        playSuccess,
        playFailure,
        lastSubmitted,
    ]);

    const handleClear = useCallback(() => {
        setSelectedChoice(null);
        setResult(null);
    }, []);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Enter" && selectedChoice !== null) {
                handleSubmit();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleSubmit, selectedChoice]);

    return (
        <>
            <motion.h2
                className="text-2xl sm:text-3xl text-primary mb-8 leading-tight"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                <div className="mb-4 text-base">
                    {getQuestionPromptByType(questionData.type)}
                </div>
                <div className="font-bold">
                    <span>{questionData.data.prompt}</span>
                    {isQuestionHintAvailable(questionData.type) && (
                        <div
                            className="inline-block ml-3"
                            onClick={handleShowHint}
                        >
                            {showHint || result?.success ? (
                                <TbBulb size={25} />
                            ) : (
                                <TbBulbOff
                                    size={25}
                                    className={`cursor-pointer transition-colors hover:text-gray-400`}
                                />
                            )}
                        </div>
                    )}
                </div>

                <AnimatePresence mode="wait">
                    {showHint && (
                        <motion.div
                            key="hint"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="text-base mt-5 p-4 bg-hint-bg text-hint-fg
                                        rounded-xl border-2 border-hint-fg font-medium"
                        >
                            <b>Hint: </b>
                            {getQuestionHintByType(questionData.type)!}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.h2>

            <motion.div
                className="mb-8 space-y-3"
                transition={{ duration: 0.3 }}
            >
                {questionData.data.choices.map((choice, index) => (
                    <motion.div
                        key={index}
                        onClick={() => {
                            if (!result?.success) {
                                setSelectedChoice(index);
                                setResult(null);
                            }
                        }}
                        className={`p-3 sm:p-4 text-lg sm:text-xl rounded-2xl border-3
                                    sm:border-4 cursor-pointer transition-all text-center font-medium
                                    ${
                                        result?.success
                                            ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                                            : result &&
                                                !result.success &&
                                                selectedChoice === index
                                              ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                                              : selectedChoice === index
                                                ? "border-primary bg-primary/10"
                                                : "border-gray-300 dark:border-gray-600 hover:border-primary/50"
                                    }
                                    ${result?.success ? "cursor-default" : "cursor-pointer"}`}
                    >
                        {choice}
                    </motion.div>
                ))}
            </motion.div>

            <AnimatePresence mode="wait">
                {result &&
                    (result.success ? (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="mt-5 p-4 bg-success-bg text-success-fg rounded-xl
                                        border-2 border-success-fg font-medium"
                        >
                            {result.message!}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="error"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="mt-5 p-4 bg-error-bg text-error-fg rounded-xl border-2
                                    border-error-fg font-medium"
                        >
                            {result.message}
                        </motion.div>
                    ))}
            </AnimatePresence>

            <QuestionFormBottomPanel
                isClearButtonDisabled={
                    selectedChoice === null || !!result?.success
                }
                isSuccessButtonDisabled={selectedChoice === null}
                isQuestionAnsweredCorrectly={!!result?.success}
                handleSubmit={handleSubmit}
                handleClear={handleClear}
            />
        </>
    );
}
