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
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { TbBulb, TbBulbOff, TbVolume } from "react-icons/tb";
import QuestionFormBottomPanel from "../QuestionFormBottomPanel";
import { useSfx } from "@/app/contexts/SfxContext";
import { shuffleArray } from "@/app/utils/shuffle-array";
import ExternalLink from "@/app/components/markdown/ExternalLink";

interface AnswerChoicedQuestionFormProps {
    questionData: QuestionData<AnswerChoicedQuestionData>;
}

export default function AnswerChoicedQuestionForm({
    questionData,
}: AnswerChoicedQuestionFormProps) {
    const { questionSet, setQuestionSet, handleCorrect, handleNextQuestion } =
        useQuestionSet();

    const { playSuccess, playFailure, playHint } = useSfx();

    const [attempts, setAttempts] = useState(0);
    const [lastSubmitted, setLastSubmitted] = useState(0);
    const [showHint, setShowHint] = useState(
        questionSet.currentQuestionHasUsedHint,
    );
    const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
    const [result, setResult] = useState<AnswerChoicedQuestionResult | null>(
        null,
    );
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const questionRef = useRef(
        createQuestionInstance(
            questionData,
        ) as unknown as AnswerChoicedQuestion,
    );

    const shuffledChoices = useMemo(() => {
        return shuffleArray(
            questionData.data.choices.map((choice, index) => ({
                text: choice,
                originalIndex: index,
            })),
        );
    }, [questionData.data.choices]);

    const playPromptAudio = useCallback(async () => {
        if (!questionData.data.isPromptAudio) return;

        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }

        const audio = new Audio(questionData.data.prompt);
        audioRef.current = audio;

        audio.onplay = () => setIsPlaying(true);
        audio.onended = () => setIsPlaying(false);
        audio.onpause = () => setIsPlaying(false);

        try {
            await audio.play();
        } catch (err) {
            console.error("Audio playback failed", err);
            setIsPlaying(false);
        }
    }, [questionData.data.prompt, questionData.data.isPromptAudio]);

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
            handleCorrect(selectedChoice.toString(), attempts + 1);
            playSuccess();
        } else {
            playFailure();
            setAttempts((attempts) => attempts + 1);
        }
    }, [
        selectedChoice,
        handleCorrect,
        handleNextQuestion,
        result,
        playSuccess,
        playFailure,
        lastSubmitted,
        attempts,
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
            if (audioRef.current) {
                audioRef.current.pause();
            }
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
                    {questionData.data.isPromptAudio ? (
                        <div className="flex items-center justify-center gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={playPromptAudio}
                                className={`p-4 rounded-2xl shadow-lg transition-all duration-300
                                    ${
                                        isPlaying
                                            ? "bg-accent text-primary ring-4 ring-accent/30"
                                            : "bg-primary text-surface hover:bg-primary/90"
                                    }`}
                            >
                                <TbVolume size={32} />
                            </motion.button>
                            <span className="text-lg font-semibold text-secondary">
                                {isPlaying ? "Listening..." : "Click to Listen"}
                            </span>
                        </div>
                    ) : (
                        <span>{questionData.data.prompt}</span>
                    )}
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
                {questionData.data.source && (
                    <div className="mt-4 flex justify-center text-sm font-normal">
                        <ExternalLink href={questionData.data.source.url}>
                            {questionData.data.isPromptAudio
                                ? "Audio Source:"
                                : "Source:"}{" "}
                            {questionData.data.source.name}
                        </ExternalLink>
                    </div>
                )}

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
                {shuffledChoices.map((choice) => (
                    <motion.div
                        key={choice.originalIndex}
                        onClick={() => {
                            if (!result?.success) {
                                setSelectedChoice(choice.originalIndex);
                                setResult(null);
                            }
                        }}
                        className={`p-3 text-lg sm:text-xl rounded-2xl border-3
                                    sm:border-4 cursor-pointer transition-all text-center font-medium
                                    ${
                                        result?.success
                                            ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                                            : result &&
                                                !result.success &&
                                                selectedChoice ===
                                                    choice.originalIndex
                                              ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                                              : selectedChoice ===
                                                  choice.originalIndex
                                                ? "border-primary bg-primary/10"
                                                : "border-gray-300 dark:border-gray-600 hover:border-primary/50"
                                    }
                                    ${result?.success ? "cursor-default" : "cursor-pointer"}`}
                    >
                        {choice.text}
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
