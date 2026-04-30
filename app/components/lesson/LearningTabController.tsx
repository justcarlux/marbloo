"use client";

import GrammarLessonList from "@/app/components/lesson/list/GrammarLessonList";
import PhoneticsLessonList from "@/app/components/lesson/list/PhoneticsLessonList";
import typedObjectEntries from "@/app/utils/typed-object-entries";
import { QuestionSetCategory } from "@/generated/prisma/enums";
import { motion } from "framer-motion";
import { Route } from "next";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { tabs } from "@/app/learning/shared-constants";

interface LearningTabControllerProps {
    initialTab: QuestionSetCategory;
}

export default function LearningTabController({
    initialTab,
}: LearningTabControllerProps) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const [activeTab, setActiveTab] = useState<QuestionSetCategory>(initialTab);

    useEffect(() => {
        const tab = searchParams.get("tab");
        if (tab && (tab === "grammar" || tab === "phonetics")) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setActiveTab(tab as QuestionSetCategory);
        }
    }, [searchParams]);

    const handleTabChange = (id: QuestionSetCategory) => {
        setActiveTab(id);
        const params = new URLSearchParams(searchParams.toString());
        params.set("tab", id);
        router.replace(`${pathname}?${params.toString()}` as Route, {
            scroll: false,
        });
    };

    return (
        <motion.div
            className="flex flex-col w-full overflow-x-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <div className="flex justify-center mt-8 px-4 sm:px-0">
                <div className="flex flex-col sm:flex-row w-full max-w-md sm:w-auto p-1 bg-secondary/10 dark:bg-secondary/5 rounded-2xl border border-secondary/20 backdrop-blur-md">
                    {typedObjectEntries(tabs).map(([tabId, { label }]) => (
                        <button
                            key={tabId as QuestionSetCategory}
                            onClick={() =>
                                handleTabChange(tabId as QuestionSetCategory)
                            }
                            className={`relative px-4 sm:px-8 py-3 sm:py-2.5 text-xs sm:text-sm font-semibold transition-colors rounded-xl
                                ${
                                    activeTab === tabId
                                        ? "text-primary"
                                        : "text-secondary hover:text-primary/70 cursor-pointer"
                                }`}
                        >
                            {activeTab === tabId && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-accent border border-secondary/20 shadow-sm rounded-xl"
                                    transition={{
                                        type: "spring",
                                        bounce: 0,
                                        duration: 0.4,
                                    }}
                                />
                            )}
                            <span className="relative z-10">{label}</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="relative">
                {activeTab === "grammar" ? (
                    <GrammarLessonList />
                ) : (
                    <PhoneticsLessonList />
                )}
            </div>
        </motion.div>
    );
}
