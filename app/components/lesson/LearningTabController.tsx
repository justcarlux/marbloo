"use client";

import { motion } from "framer-motion";

interface Tab {
    id: string;
    label: string;
}

interface LearningTabControllerProps {
    tabs: Tab[];
    activeTab: string;
    onTabChange: (id: string) => void;
}

export default function LearningTabController({
    tabs,
    activeTab,
    onTabChange,
}: LearningTabControllerProps) {
    return (
        <div className="flex justify-center mt-8 px-4 sm:px-0">
            <div className="flex flex-col sm:flex-row w-full max-w-md sm:w-auto p-1 bg-secondary/10 dark:bg-secondary/5 rounded-2xl border border-secondary/20 backdrop-blur-md">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => onTabChange(tab.id)}
                        className={`relative px-4 sm:px-8 py-3 sm:py-2.5 text-xs sm:text-sm font-semibold transition-colors rounded-xl
                            ${
                                activeTab === tab.id
                                    ? "text-primary"
                                    : "text-secondary hover:text-primary/70 cursor-pointer"
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
    );
}
