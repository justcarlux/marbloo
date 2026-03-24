"use client";

import { motion } from "framer-motion";
import { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

interface LectureLayoutProps {
    children: React.ReactNode;
}

export default function LectureView({ children }: LectureLayoutProps) {
    const pathname = usePathname() as Route;
    const parentRoute = `/${pathname
        .split("/")
        .filter(Boolean)
        .slice(0, -2)
        .join("/")}` as Route;

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    return (
        <div className="min-h-screen px-8 pt-1 pb-8">
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

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-6 pt-8 flex flex-col items-center justify-center"
                >
                    <div className="w-full h-0.5 bg-primary rounded-full mb-6" />
                    <Link
                        href={parentRoute}
                        className="w-fit px-8 py-3 bg-secondary text-white rounded-2xl font-bold text-lg hover:scale-102 active:scale-98 transition-all"
                    >
                        Go Back
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
}
