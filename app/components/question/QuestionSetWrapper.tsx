"use client";

import {
    createQuestionStatistic,
    deleteQuestionSet,
    getQuestionSetStatistics,
    updateQuestionSet,
} from "@/app/actions/question-sets";
import { useBottomToolbar } from "@/app/contexts/BottomToolbarContext";
import { QuestionSetContextProvider } from "@/app/contexts/QuestionSetContext";
import { QuestionData } from "@/app/model/question/QuestionInstance";
import type {
    Question,
    QuestionSet,
    QuestionSetStatistic,
} from "@/generated/prisma/client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createComponentForQuestionData } from "./question-component-factory";
import {
    FiCheckCircle,
    FiClock,
    FiHelpCircle,
    FiTarget,
    FiZap,
} from "react-icons/fi";
import { OrbitProgress } from "react-loading-indicators";
import prettyMs from "pretty-ms";

interface QuestionSetResultsProps {
    statistics: QuestionSetStatistic[];
    totalQuestions: number;
    isLoading: boolean;
    onClose: () => void;
}

function QuestionSetResults({
    statistics,
    totalQuestions,
    isLoading,
    onClose,
}: QuestionSetResultsProps) {
    const totalTimeMs = statistics.reduce((acc, s) => acc + s.time, 0);
    const avgTimeMs = totalQuestions > 0 ? totalTimeMs / totalQuestions : 0;
    const hintsUsed = statistics.filter((s) => s.hasUsedHint).length;
    const totalAttempts = statistics.reduce((acc, s) => acc + s.attempts, 0);

    return (
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-800 max-w-md mx-auto">
            <FiCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-primary mb-6">
                Session Complete!
            </h2>

            {isLoading ? (
                <div className="py-12 flex flex-col items-center gap-4">
                    <OrbitProgress dense size="medium" color="#32b5c7" />
                    <p className="text-secondary animate-pulse font-medium">
                        Calculating results...
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-2 gap-4 mb-8">
                    <QuestionSetResultsStatCard
                        icon={<FiTarget className="text-blue-500" />}
                        label="Attempts"
                        value={totalAttempts}
                    />
                    <QuestionSetResultsStatCard
                        icon={<FiClock className="text-purple-500" />}
                        label="Total Time"
                        value={prettyMs(totalTimeMs)}
                    />
                    <QuestionSetResultsStatCard
                        icon={<FiZap className="text-yellow-500" />}
                        label="Average Time"
                        value={prettyMs(avgTimeMs)}
                    />
                    <QuestionSetResultsStatCard
                        icon={<FiHelpCircle className="text-orange-500" />}
                        label="Hints Used"
                        value={hintsUsed.toString()}
                    />
                </div>
            )}

            <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="cursor-pointer w-full bg-primary text-surface font-bold py-4 rounded-2xl shadow-lg transition-colors hover:bg-primary/90 flex items-center justify-center gap-2"
            >
                Go Back
            </motion.button>
        </div>
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
    const type = currentQuestion?.type;
    const shouldUseUnfixedLayout = type === "grammarTrivia";

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
                            statistics={statistics}
                            totalQuestions={questions.length}
                            isLoading={isLoadingStats}
                            onClose={() => {
                                deleteQuestionSet();
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
