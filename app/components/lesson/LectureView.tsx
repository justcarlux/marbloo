"use client";

import { useBottomToolbar } from "@/app/contexts/BottomToolbarContext";
import { motion } from "framer-motion";
import { Route } from "next";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

interface LectureLayoutProps {
    children: React.ReactNode;
}

export default function LectureView({ children }: LectureLayoutProps) {
    const { setBackPath, setAllowsScrollingToTop } = useBottomToolbar();
    const pathname = usePathname();
    useEffect(() => {
        setBackPath(
            `/${pathname
                .split("/")
                .filter(Boolean)
                .slice(0, -2)
                .join("/")}` as Route,
        );
        setAllowsScrollingToTop(true);
        window.scrollTo({ top: 0 });

        return () => {
            setBackPath(null);
            setAllowsScrollingToTop(false);
        };
    }, [pathname, setBackPath, setAllowsScrollingToTop]);

    return (
        <div className="min-h-screen px-6 sm:px-8 pt-1 pb-16">
            <motion.div
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, type: "spring", duration: 0.5 }}
            >
                <motion.div
                    className="prose prose-xl prose-slate dark:prose-invert max-w-none 
                                prose-headings:text-primary prose-p:text-primary/90 
                                prose-strong:text-primary prose-code:text-highlight
                                prose-blockquote:border-l-primary prose-blockquote:bg-accent/50
                                prose-blockquote:p-4 prose-blockquote:rounded-r-xl
                                prose-img:rounded-2xl prose-img:shadow-xl"
                >
                    {children}
                </motion.div>
            </motion.div>
        </div>
    );
}
