"use client";

import {
    createQuestionSet,
    CreateQuestionSetErrorReason,
} from "@/app/actions/practice-question-sets";
import stall from "@/app/utils/stall";
import { QuestionType } from "@/generated/prisma/enums";
import { AnimatePresence, motion } from "framer-motion";
import { Route } from "next";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { IconType } from "react-icons";
import { OrbitProgress } from "react-loading-indicators";
import { toast } from "react-toastify";

interface LessonEntry {
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
              type: "practice-session";
              questionTypes: QuestionType[];
              limit: number;
          };
}

interface LessonCategory {
    title: React.ReactNode;
    icon: IconType;
    entries: LessonEntry[];
}

interface LessonListProps {
    categories: LessonCategory[];
}

const errorMessages: {
    [key in CreateQuestionSetErrorReason | "unknown"]: string;
} = {
    limit_too_short: "Question count is too short.",
    unknown:
        "An error has ocurred when trying to create your practice session.",
};

export default function LessonList({ categories }: LessonListProps) {
    const [lessonLoading, setLessonLoading] = useState<string | null>(null);
    const router = useRouter();
    const { theme } = useTheme();

    const handleCreateQuestion = useCallback(
        async (lessonId: string, types: QuestionType[], limit: number) => {
            setLessonLoading(lessonId);
            try {
                const questionSetResponse = await stall(
                    async () => await createQuestionSet(types, limit),
                    1_000,
                );
                if (questionSetResponse.success) {
                    router.push(
                        `/learning/practice/${questionSetResponse.id}` as Route,
                    );
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
        [router, theme],
    );

    return (
        <div className="min-h-screen p-8 mx-auto flex flex-col gap-16">
            {categories.map(({ title, icon: Icon, entries }, index) => {
                return (
                    <section key={index}>
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
                            {entries.map(
                                (
                                    {
                                        id,
                                        title,
                                        description,
                                        icon: Icon,
                                        action,
                                    },
                                    index,
                                ) => {
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
                                            className={`${!lessonLoading && "hover:scale-102 active:scale-98 hover:border-primary cursor-pointer"} relative overflow-hidden flex-1 min-w-60 sm:max-w-60 w-full sm:h-72 h-fit border-4 border-secondary rounded-2xl transition-all bg-accent flex flex-col items-center justify-start text-center px-12 py-6 sm:px-6`}
                                        >
                                            <AnimatePresence mode="wait">
                                                {lessonLoading === id && (
                                                    <motion.div
                                                        key={`spinner-${id}`}
                                                        initial={{
                                                            opacity: 0,
                                                        }}
                                                        animate={{
                                                            opacity: 1,
                                                        }}
                                                        className="absolute flex w-full justify-end bottom-0 right-0"
                                                    >
                                                        <div className="scale-50">
                                                            <OrbitProgress
                                                                variant="track-disc"
                                                                dense
                                                                size="small"
                                                                color="#32b5c7"
                                                            />
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>

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
                                                    key={index}
                                                    href={action.href}
                                                    className={`flex-1 min-w-60 sm:max-w-60 ${!!lessonLoading && "cursor-default"}`}
                                                >
                                                    {card}
                                                </Link>
                                            );

                                        case "practice-session":
                                            return (
                                                <div
                                                    key={index}
                                                    onClick={() =>
                                                        handleCreateQuestion(
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
                                            throw new Error(
                                                "Unknown action type",
                                            );
                                    }
                                },
                            )}
                        </motion.div>
                    </section>
                );
            })}
        </div>
    );
}
