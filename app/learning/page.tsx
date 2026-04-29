"use client";

import GrammarLessonList from "@/app/components/lesson/list/GrammarLessonList";
import LearningTabController from "@/app/components/lesson/LearningTabController";
import { motion } from "framer-motion";
import { Route } from "next";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const tabs = [
    { id: "grammar", label: "Grammar Lessons" },
    { id: "phonetics", label: "Phonetics Lessons" },
];

export default function LearningPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const [activeTab, setActiveTab] = useState(
        searchParams.get("tab") || "grammar",
    );

    useEffect(() => {
        const tab = searchParams.get("tab");
        if (tab && (tab === "grammar" || tab === "phonetics")) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setActiveTab(tab);
        }
    }, [searchParams]);

    const handleTabChange = (id: string) => {
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
            <LearningTabController
                tabs={tabs}
                activeTab={activeTab}
                onTabChange={handleTabChange}
            />

            <div className="relative">
                {activeTab === "grammar" ? (
                    <GrammarLessonList />
                ) : (
                    <GrammarLessonList />
                )}
            </div>
        </motion.div>
    );
}
