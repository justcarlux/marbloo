"use client";

import { useQuestionSet } from "@/app/contexts/QuestionSetContext";
import CompleteMissingPhraseQuestion, {
    CompleteMissingPhraseQuestionData,
    CompleteMissingPhraseQuestionResult,
} from "@/app/model/question/impl/CompleteMissingPhraseQuestion";
import { createQuestionInstance } from "@/app/model/question/question-factory";
import {
    getQuestionHintByType,
    getQuestionPromptByType,
} from "@/app/model/question/question-prompts";
import { QuestionData } from "@/app/model/question/QuestionInstance";
import { isButtonDebounceExpired } from "@/app/utils/button-debounce";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { TbBulb, TbBulbOff } from "react-icons/tb";
import useSound from "use-sound";
import QuestionFormBottomPanel from "../QuestionFormBottomPanel";

interface CompleteMissingPhraseQuestionFormProps {
    questionData: QuestionData<CompleteMissingPhraseQuestionData>;
}

export default function CompleteMissingPhraseQuestionForm({
    questionData,
}: CompleteMissingPhraseQuestionFormProps) {
    const { questionSet, setQuestionSet, handleCorrect, handleNextQuestion } =
        useQuestionSet();

    const [playSuccess] = useSound("/sfx/success.mp3");
    const [playFailure] = useSound("/sfx/failure.mp3");
    const [playHint] = useSound("/sfx/hint.mp3");

    const [lastSubmitted, setLastSubmitted] = useState(0);
    const [showHint, setShowHint] = useState(
        questionSet.currentQuestionHasUsedHint,
    );
    const [answer, setAnswer] = useState("");
    const [result, setResult] =
        useState<CompleteMissingPhraseQuestionResult | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const questionRef = useRef(
        createQuestionInstance(
            questionData,
        ) as CompleteMissingPhraseQuestion<never>,
    );

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

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

        if (!answer.trim()) return;

        setResult(null);

        const [, questionResult] = questionRef.current.check(answer);
        setResult(questionResult);
        if (questionResult.success) {
            handleCorrect();
            playSuccess();
        } else {
            playFailure();
        }
    }, [
        answer,
        handleCorrect,
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

    return (
        <>
            <motion.h2
                className="text-3xl sm:text-4xl text-primary mb-8 leading-tight"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                <div className="mb-4 text-base">
                    {getQuestionPromptByType(questionData.type)}
                </div>
                <div className="font-bold">
                    <span>{questionData.data.leftSide}</span>
                    <span className="bg-highlight rounded-2xl p-2 mx-2 inline-block">
                        {questionData.data.middle}
                    </span>
                    <span>{questionData.data.rightSide}</span>
                    <div className="inline-block ml-3" onClick={handleShowHint}>
                        {showHint || result?.success ? (
                            <TbBulb size={25} />
                        ) : (
                            <TbBulbOff
                                size={25}
                                className={`cursor-pointer transition-colors hover:text-gray-400`}
                            />
                        )}
                    </div>
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
                            {getQuestionHintByType(questionData.type)}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.h2>

            <motion.div className="mb-8" transition={{ duration: 0.3 }}>
                <input
                    ref={inputRef}
                    type="text"
                    value={answer}
                    onChange={(e) => {
                        setAnswer(e.target.value);
                        if (!e.target.value) {
                            setResult(null);
                        }
                    }}
                    placeholder="Type your answer..."
                    disabled={result?.success}
                    className={`text-primary w-full p-3 sm:p-4 text-xl sm:text-2xl border-3
                                sm:border-4 rounded-2xl outline-none text-center font-medium transition-all
                                ${result ? (!result.success ? "border-red-500" : "border-green-500 ") : ""}`}
                    autoComplete="off"
                    name="answer"
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
                isClearButtonDisabled={!answer || !!result?.success}
                isSuccessButtonDisabled={!answer.trim()}
                isQuestionAnsweredCorrectly={!!result?.success}
                handleSubmit={handleSubmit}
                handleClear={handleClear}
            />
        </>
    );
}
