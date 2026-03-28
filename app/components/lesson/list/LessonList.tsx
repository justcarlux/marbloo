"use client";

import {
    createQuestionSet,
    CreateQuestionSetErrorReason,
} from "@/app/actions/question-sets";
import { useBottomToolbar } from "@/app/contexts/BottomToolbarContext";
import wait from "@/app/utils/wait";
import { QuestionSetCategory, QuestionType } from "@/generated/prisma/enums";
import { motion } from "framer-motion";
import { Route } from "next";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { IconType } from "react-icons";
import { toast } from "react-toastify";
import LoadingOverlay from "../../ui/LoadingOverlay";

interface LessonEntryData {
    title: React.ReactNode;
    description: string;
    icon: IconType;
    action:
        | {
              type: "href";
              href: Route;
          }
        | {
              type: "create-question-set";
              questionTypes: QuestionType[];
              amount?: number;
          };
}

interface LessonCategoryData {
    title: React.ReactNode;
    description?: React.ReactNode;
    icon: IconType;
    entries: LessonEntryData[];
}

interface LessonListProps {
    category: QuestionSetCategory;
    categories: LessonCategoryData[];
}

const errorMessages: {
    [key in CreateQuestionSetErrorReason | "unknown"]: string;
} = {
    not_authenticated: "You are not logged in.",
    validation_error: "Validation failed. Please try again.",
    unknown:
        "An error has ocurred when trying to create your practice session. Try again later.",
};

interface LessonEntryProps extends LessonEntryData {
    loading: boolean;
    handleCreateQuestionSet: (types: QuestionType[], amount: number) => void;
}

function LessonEntry({
    title,
    description,
    icon: Icon,
    action,
    loading,
    handleCreateQuestionSet,
}: LessonEntryProps) {
    const card = (
        <motion.div
            variants={{
                hidden: {
                    opacity: 0,
                    scale: 0.9,
                },
                show: {
                    opacity: 1,
                    scale: 1,
                },
            }}
            whileHover={{
                scale: loading ? 1.0 : 1.02,
            }}
            whileTap={{
                scale: loading ? 1.0 : 0.98,
            }}
            className={`${!loading && "hover:border-primary cursor-pointer"} relative overflow-hidden
                        flex-1 min-w-60 sm:max-w-60 w-full not-sm:h-fit h-full border border-secondary
                        rounded-2xl transition-colors bg-accent flex flex-col items-center justify-start
                        text-center px-3 py-4 sm:p-6`}
        >
            <Icon
                className="w-12 h-12 text-primary group-hover:text-primary transition-colors
                            mb-4 shrink-0"
            />
            <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 leading-tight px-2">
                {title}
            </h3>
            <p className="text-sm text-secondary px-2">{description}</p>
        </motion.div>
    );

    switch (action.type) {
        case "href":
            return (
                <Link
                    href={action.href}
                    className={`flex-1 min-w-60 sm:max-w-60 ${loading && "cursor-default"}`}
                >
                    {card}
                </Link>
            );

        case "create-question-set":
            return (
                <div
                    onClick={() =>
                        handleCreateQuestionSet(
                            action.questionTypes,
                            action.amount ?? 20,
                        )
                    }
                >
                    {card}
                </div>
            );

        default:
            throw new Error("Unknown action type");
    }
}

interface LessonCategoryProps extends LessonCategoryData {
    loading: boolean;
    handleCreateQuestionSet: (types: QuestionType[], amount: number) => void;
}

function LessonCategory({
    title,
    description,
    icon: Icon,
    entries,
    loading,
    handleCreateQuestionSet,
}: LessonCategoryProps) {
    const { setAllowsScrollingToTop } = useBottomToolbar();
    useEffect(() => {
        setAllowsScrollingToTop(true);
        return () => {
            setAllowsScrollingToTop(false);
        };
    }, [setAllowsScrollingToTop]);

    return (
        <section>
            <motion.h2
                className="text-3xl sm:text-4xl text-primary leading-tight font-medium
                            sm:text-left text-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
            >
                {description ? (
                    <>
                        <div className="inline-block sm:hidden">
                            <b className="block">
                                <Icon className="text-4xl text-primary inline-block relative -top-1 mr-3" />
                                {title}
                            </b>
                            <div className="text-2xl">{description}</div>
                        </div>
                        <div className="hidden sm:inline-block">
                            <Icon className="text-4xl text-primary inline-block relative -top-1 mr-3" />
                            <b>{title}</b>{" "}
                            <span className="text-3xl">{description}</span>
                        </div>
                    </>
                ) : (
                    <b className="block">
                        <Icon className="text-4xl text-primary inline-block relative -top-1 mr-3" />
                        {title}
                    </b>
                )}
            </motion.h2>

            <motion.div
                className="flex flex-wrap gap-6 sm:gap-8 justify-center sm:flex-row flex-col mt-7"
                variants={{
                    hidden: { opacity: 0 },
                    show: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.1,
                            delayChildren: 0.1,
                        },
                    },
                }}
                initial="hidden"
                animate="show"
            >
                {entries.map((data, index) => {
                    return (
                        <LessonEntry
                            key={index}
                            {...data}
                            loading={loading}
                            handleCreateQuestionSet={handleCreateQuestionSet}
                        />
                    );
                })}
            </motion.div>
        </section>
    );
}

export default function LessonList({ category, categories }: LessonListProps) {
    const { setAllowsScrollingToTop } = useBottomToolbar();
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const { theme } = useTheme();

    useEffect(() => {
        if (isLoading) {
            setAllowsScrollingToTop(false);
        } else {
            setAllowsScrollingToTop(true);
        }
    }, [isLoading, setAllowsScrollingToTop]);

    const handleCreateQuestionSet = useCallback(
        async (types: QuestionType[], amount: number) => {
            setIsLoading(true);
            try {
                await wait(1_500);
                const questionSetResponse = await createQuestionSet({
                    types,
                    category,
                    amount,
                });
                if (questionSetResponse.success) {
                    router.push("/learning/practice");
                } else {
                    console.error(questionSetResponse.error);
                    toast(errorMessages[questionSetResponse.reason], {
                        position: "bottom-right",
                        theme: theme ?? "light",
                        type: "error",
                    });
                    setIsLoading(false);
                }
            } catch (err: unknown) {
                console.error(err);
                toast(errorMessages.unknown, {
                    position: "bottom-right",
                    theme: theme ?? "light",
                    type: "error",
                });
                setIsLoading(false);
            }
        },
        [router, theme, category],
    );

    return (
        <>
            <LoadingOverlay show={isLoading} />
            <div className="min-h-screen p-8 mx-auto flex flex-col gap-16">
                {categories.map((data, index) => {
                    return (
                        <LessonCategory
                            key={index}
                            {...data}
                            loading={isLoading}
                            handleCreateQuestionSet={handleCreateQuestionSet}
                        />
                    );
                })}
            </div>
        </>
    );
}
