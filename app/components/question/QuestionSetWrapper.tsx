"use client";

import {
    createQuestionStatistic,
    deleteQuestionSet,
    getQuestionSetStatistics,
    updateQuestionSet,
} from "@/app/actions/question-sets";
import { useBottomToolbar } from "@/app/contexts/BottomToolbarContext";
import { QuestionSetContextProvider } from "@/app/contexts/QuestionSetContext";
import { isQuestionHintAvailable } from "@/app/model/question/question-prompts";
import { QuestionData } from "@/app/model/question/QuestionInstance";
import type {
    Question,
    QuestionSet,
    QuestionSetCategory,
    QuestionSetStatistic,
} from "@/generated/prisma/client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import prettyMs from "pretty-ms";
import { useEffect, useMemo, useState } from "react";
import {
    FiAward,
    FiCheckCircle,
    FiClock,
    FiHelpCircle,
    FiTarget,
    FiZap,
} from "react-icons/fi";
import { OrbitProgress } from "react-loading-indicators";
import { createComponentForQuestionData } from "./question-component-factory";

const categoryNames: { [key in QuestionSetCategory]: string } = {
    grammar: "Grammar",
    phonetics: "Phonetics",
};

interface QuestionSetResultsProps {
    title: string;
    category: QuestionSetCategory;
    statistics: QuestionSetStatistic[];
    totalQuestions: number;
    shouldShowHintStat: boolean;
    isLoading: boolean;
    onClose: () => void;
}

function QuestionSetResults({
    title,
    category,
    statistics,
    totalQuestions,
    shouldShowHintStat,
    isLoading,
    onClose,
}: QuestionSetResultsProps) {
    const totalTimeMs = statistics.reduce((acc, s) => acc + s.time, 0);
    const avgTimeMs = totalQuestions > 0 ? totalTimeMs / totalQuestions : 0;
    const hintsUsed = statistics.filter((s) => s.hasUsedHint).length;
    const totalAttempts = statistics.reduce((acc, s) => acc + s.attempts, 0);
    const accuracy =
        totalAttempts > 0
            ? Math.round((totalQuestions / totalAttempts) * 100)
            : 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring" }}
            className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-800 max-w-md mx-auto"
        >
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring" }}
            >
                <FiCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-bold text-primary mb-6 text-center"
            >
                Session Complete!
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-8 p-4 bg-linear-to-br from-secondary/5 to-primary/5 dark:from-secondary/10 dark:to-primary/10 rounded-2xl border border-secondary/10 flex flex-col items-center relative overflow-hidden group shadow-sm"
            >
                <div className="absolute -right-6 -top-6 w-16 h-16 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500" />
                <div className="absolute -left-6 -bottom-6 w-16 h-16 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500" />

                <span className="text-xs text-secondary uppercase mb-2 relative z-10">
                    {categoryNames[category]}
                </span>
                <p className="text-xl font-bold text-primary text-center leading-tight relative z-10 drop-shadow-sm">
                    {title}
                </p>
            </motion.div>

            <div className="relative min-h-50 mb-8">
                {isLoading && (
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4">
                        <OrbitProgress dense size="medium" color="#32b5c7" />
                        <p className="text-secondary animate-pulse font-medium text-sm">
                            Calculating results...
                        </p>
                    </div>
                )}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                        opacity: isLoading ? 0 : 1,
                        y: isLoading ? 20 : 0,
                    }}
                    className={`flex flex-wrap justify-center gap-4 ${isLoading ? "pointer-events-none" : ""}`}
                >
                    <div className="w-[calc(50%-0.5rem)]">
                        <QuestionSetResultsStatCard
                            icon={<FiAward className="text-green-500" />}
                            label="Accuracy"
                            value={`${accuracy}%`}
                        />
                    </div>
                    <div className="w-[calc(50%-0.5rem)]">
                        <QuestionSetResultsStatCard
                            icon={<FiTarget className="text-blue-500" />}
                            label="Attempts"
                            value={totalAttempts}
                        />
                    </div>
                    <div className="w-[calc(50%-0.5rem)]">
                        <QuestionSetResultsStatCard
                            icon={<FiClock className="text-purple-500" />}
                            label="Total Time"
                            value={prettyMs(totalTimeMs, {
                                secondsDecimalDigits: 0,
                            })}
                        />
                    </div>
                    <div className="w-[calc(50%-0.5rem)]">
                        <QuestionSetResultsStatCard
                            icon={<FiZap className="text-yellow-500" />}
                            label="Average Time"
                            value={prettyMs(avgTimeMs, {
                                secondsDecimalDigits: 0,
                            })}
                        />
                    </div>
                    {shouldShowHintStat && (
                        <div className="w-[calc(50%-0.5rem)]">
                            <QuestionSetResultsStatCard
                                icon={
                                    <FiHelpCircle className="text-orange-500" />
                                }
                                label="Hints Used"
                                value={hintsUsed.toString()}
                            />
                        </div>
                    )}
                </motion.div>
            </div>

            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={onClose}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="cursor-pointer w-full bg-primary text-surface font-bold py-4 rounded-2xl shadow-lg transition-colors hover:bg-primary/90 flex items-center justify-center gap-2"
            >
                Go Back
            </motion.button>
        </motion.div>
    );
}

interface QuestionSetResultsStatCardProps {
    icon: React.ReactNode;
    label: string;
    value: string | number;
}

function QuestionSetResultsStatCard({
    icon,
    label,
    value,
}: QuestionSetResultsStatCardProps) {
    return (
        <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-700 text-center">
            <div className="w-5 h-5 mx-auto mb-2">{icon}</div>
            <div className="text-[10px] sm:text-xs text-secondary uppercase font-bold tracking-wider mb-1">
                {label}
            </div>
            <div className="text-lg sm:text-xl font-bold text-primary">
                {value}
            </div>
        </div>
    );
}

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
    const [statistics, setStatistics] = useState<QuestionSetStatistic[]>([]);
    const [isLoadingStats, setIsLoadingStats] = useState(false);

    const isFinished = currentQuestionIndex === questions.length;

    useEffect(() => {
        if (isFinished) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsLoadingStats(true);
            getQuestionSetStatistics().then((stats) => {
                setStatistics(stats);
                setIsLoadingStats(false);
                deleteQuestionSet();
            });
        }
    }, [isFinished]);

    const handleCorrect = async (answer: string, attempts: number) => {
        (async () => {
            const success = await createQuestionStatistic({
                questionId: questions[currentQuestionIndex].id,
                hasUsedHint: questionSet.currentQuestionHasUsedHint,
                time:
                    Date.now() -
                    questionSet.currentQuestionStartedAt!.getTime(),
                answer,
                attempts,
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

    const currentQuestion = questions[currentQuestionIndex];

    const atLeastOneQuestionHasHints = useMemo(() => {
        return questions.some((q) => isQuestionHintAvailable(q.type));
    }, [questions]);

    const shouldUseUnfixedLayout =
        currentQuestion?.type === "grammarTrivia" ||
        currentQuestion?.type === "phoneticsTrivia" ||
        currentQuestion?.type === "identifyIPASymbolBySoundEasy" ||
        currentQuestion?.type === "identifyIPASymbolBySoundMedium" ||
        currentQuestion?.type === "identifyIPASymbolBySoundHard" ||
        currentQuestion?.type === "identifyIPASymbolBySoundHarder" ||
        isFinished;

    return (
        <div className="min-h-screen overflow-hidden">
            <motion.div
                className={
                    shouldUseUnfixedLayout
                        ? "flex flex-col items-center px-6 pt-6"
                        : "fixed w-[calc(100%-40px)] left-1/2 -translate-x-1/2 top-7 flex flex-col items-center"
                }
                initial={{ scale: 0.9, opacity: 0, y: -20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
            >
                <div className="w-full h-2 rounded-full bg-progress-bg mb-2">
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
                    {Math.min(
                        currentProgressQuestionIndex + 1,
                        questions.length,
                    )}
                    /{questions.length}
                </div>
            </motion.div>
            <div
                className={`flex flex-col items-center justify-center font-sans ${
                    shouldUseUnfixedLayout ? "bg-linear-to-br" : "min-h-screen"
                }`}
            >
                <motion.div
                    className="max-w-4xl rounded-3xl p-5 w-full text-center relative"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", duration: 0.5 }}
                >
                    {isFinished ? (
                        <QuestionSetResults
                            title={questionSet.title}
                            category={questionSet.type}
                            statistics={statistics}
                            totalQuestions={questions.length}
                            shouldShowHintStat={atLeastOneQuestionHasHints}
                            isLoading={isLoadingStats}
                            onClose={() => {
                                router.back();
                            }}
                        />
                    ) : (
                        /* A key is set to this component in order to force a re-render on question change */
                        <QuestionSetContextProvider
                            key={currentQuestionIndex}
                            questionSet={questionSet}
                            setQuestionSet={setQuestionSet}
                            handleCorrect={handleCorrect}
                            handleNextQuestion={handleNextQuestion}
                        >
                            {createComponentForQuestionData(currentQuestion)}
                        </QuestionSetContextProvider>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
