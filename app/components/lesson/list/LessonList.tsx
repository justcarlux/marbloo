"use client";

import {
    createQuestionSet,
    CreateQuestionSetErrorReason,
} from "@/app/actions/question-sets";
import stall from "@/app/utils/stall";
import { QuestionSetCategory, QuestionType } from "@/generated/prisma/enums";
import { motion } from "framer-motion";
import { Route } from "next";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { IconType } from "react-icons";
import { toast } from "react-toastify";
import LoadingOverlay from "../../ui/LoadingOverlay";
import { useBottomToolbar } from "@/app/contexts/BottomToolbarContext";

interface LessonEntryData {
    id: string;
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
              limit: number;
          };
}

export type CardHeight = 66 | 70;

// Map classes to avoid Tailwind compiler not detecting them
const cardHeights: { [key in CardHeight]: string } = {
    66: "sm:h-66",
    70: "sm:h-70",
};

interface LessonCategoryData {
    title: React.ReactNode;
    icon: IconType;
    cardHeight: CardHeight;
    entries: LessonEntryData[];
}

interface LessonListProps {
    category: QuestionSetCategory;
    categories: LessonCategoryData[];
}

const errorMessages: {
    [key in CreateQuestionSetErrorReason | "unknown"]: string;
} = {
    limit_too_short: "Question count is too short.",
    unknown:
        "An error has ocurred when trying to create your practice session. Try again later.",
};

interface LessonEntryProps extends LessonEntryData {
    cardHeight: CardHeight;
    lessonLoading: string | null;
    handleCreateQuestionSet: (
        lessonId: string,
        types: QuestionType[],
        limit: number,
    ) => void;
}

function LessonEntry({
    id,
    title,
    description,
    icon: Icon,
    action,
    cardHeight,
    lessonLoading,
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
                scale: lessonLoading ? 1.0 : 1.02,
            }}
            whileTap={{
                scale: lessonLoading ? 1.0 : 0.98,
            }}
            className={`${!lessonLoading && "hover:border-primary cursor-pointer"} relative overflow-hidden flex-1 min-w-60 sm:max-w-60 w-full not-sm:h-fit ${cardHeights[cardHeight]} border-4 border-secondary rounded-2xl transition-colors bg-accent flex flex-col items-center justify-start text-center px-12 py-6 sm:px-6`}
        >
            <Icon className="w-12 h-12 text-primary group-hover:text-primary transition-colors mt-2 mb-4 shrink-0" />
            <h3 className="text-xl font-bold text-primary mb-2 leading-tight px-2">
                {title}
            </h3>
            <p className="text-sm text-secondary line-clamp-3 px-2">
                {description}
            </p>
        </motion.div>
    );

    switch (action.type) {
        case "href":
            return (
                <Link
                    href={action.href}
                    className={`flex-1 min-w-60 sm:max-w-60 ${!!lessonLoading && "cursor-default"}`}
                >
                    {card}
                </Link>
            );

        case "create-question-set":
            return (
                <div
                    onClick={() =>
                        handleCreateQuestionSet(
                            id,
                            action.questionTypes,
                            action.limit,
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
    lessonLoading: string | null;
    handleCreateQuestionSet: (
        lessonId: string,
        types: QuestionType[],
        limit: number,
    ) => void;
}

function LessonCategory({
    title,
    icon: Icon,
    cardHeight,
    entries,
    lessonLoading,
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
                className="text-4xl text-primary leading-tight font-medium sm:text-left text-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
            >
                <Icon className="text-4xl text-primary inline-block relative -top-1 mr-3" />
                {title}
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
                            cardHeight={cardHeight}
                            lessonLoading={lessonLoading}
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
    const [lessonLoading, setLessonLoading] = useState<string | null>(null);
    const router = useRouter();
    const { theme } = useTheme();

    useEffect(() => {
        if (lessonLoading) {
            setAllowsScrollingToTop(false);
        } else {
            setAllowsScrollingToTop(true);
        }
    }, [lessonLoading, setAllowsScrollingToTop]);

    const handleCreateQuestionSet = useCallback(
        async (lessonId: string, types: QuestionType[], limit: number) => {
            setLessonLoading(lessonId);
            try {
                const questionSetResponse = await stall(
                    () => createQuestionSet(types, category, limit),
                    1_000,
                );
                if (questionSetResponse.success) {
                    router.push(`/learning/practice` as Route);
                } else {
                    toast(errorMessages[questionSetResponse.reason], {
                        position: "bottom-right",
                        theme: theme ?? "light",
                        type: "error",
                    });
                    setLessonLoading(null);
                }
            } catch (err: unknown) {
                console.error(err);
                toast(errorMessages.unknown, {
                    position: "bottom-right",
                    theme: theme ?? "light",
                    type: "error",
                });
                setLessonLoading(null);
            }
        },
        [router, theme, category],
    );

    return (
        <>
            <LoadingOverlay show={!!lessonLoading} />
            <div className="min-h-screen p-8 mx-auto flex flex-col gap-16">
                {categories.map((data, index) => {
                    return (
                        <LessonCategory
                            key={index}
                            {...data}
                            lessonLoading={lessonLoading}
                            handleCreateQuestionSet={handleCreateQuestionSet}
                        />
                    );
                })}
            </div>
        </>
    );
}
