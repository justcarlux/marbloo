"use client";

import { motion } from "framer-motion";
import { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LectureLayoutProps {
    children: React.ReactNode;
}

export default function LectureView({ children }: LectureLayoutProps) {
    const pathname = usePathname() as Route;
    return (
        <div className="min-h-screen bg-surface p-8 md:p-16">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, type: "spring", duration: 0.5 }}
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
                    className="mt-16 pt-8 border-t border-secondary/20 flex justify-center"
                >
                    <Link
                        href={
                            `/${pathname
                                .split("/")
                                .filter(Boolean)
                                .slice(0, -2)
                                .join("/")}` as Route
                        }
                        className="px-8 py-3 bg-primary text-surface rounded-2xl font-bold text-lg hover:scale-105 active:scale-95 transition-all"
                    >
                        Go Back
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
