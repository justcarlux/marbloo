"use client";

import GrammarLessonList from "@/app/components/lesson/list/GrammarLessonList";
import { motion } from "framer-motion";
import { useState } from "react";

const tabs = [
    { id: "grammar", label: "Grammar Lessons" },
    { id: "phonetics", label: "Phonetics Lessons" },
];

export default function LearningPage() {
    const [activeTab, setActiveTab] = useState("grammar");

    return (
        <div className="flex flex-col gap-8">
            <div className="flex justify-center mt-8 px-4 sm:px-0">
                <div className="flex w-full max-w-md sm:w-auto p-1 bg-secondary/10 dark:bg-secondary/5 rounded-2xl border border-secondary/20 backdrop-blur-md">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`relative flex-1 sm:flex-none px-4 sm:px-8 py-2.5 text-xs sm:text-sm font-semibold transition-colors rounded-xl
                                ${
                                    activeTab === tab.id
                                        ? "text-primary"
                                        : "text-secondary hover:text-primary/70"
                                }`}
                        >
                            {activeTab === tab.id && (
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
                            <span className="relative z-10">{tab.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="relative">
                {activeTab === "grammar" ? (
                    <GrammarLessonList />
                ) : (
                    <GrammarLessonList />
                )}
            </div>
        </div>
    );
}
