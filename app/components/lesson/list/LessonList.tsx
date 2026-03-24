"use client";

import { motion } from "framer-motion";
import { Route } from "next";
import Link from "next/link";
import { IconType } from "react-icons";

interface LessonEntry {
    title: React.ReactNode;
    description: string;
    icon: IconType;
    href: Route;
}

interface LessonCategory {
    title: React.ReactNode;
    icon: IconType;
    entries: LessonEntry[];
}

interface LessonListProps {
    categories: LessonCategory[];
}

export default function LessonList({ categories }: LessonListProps) {
    return (
        <div className="min-h-screen p-8 mx-auto flex flex-col gap-16">
            {categories.map(({ title, icon: Icon, entries }, index) => {
                return (
                    <section key={index}>
                        <motion.div
                            className="flex flex-col sm:flex-row sm:items-center gap-x-4"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <div className="flex items-center gap-3 shrink-0 justify-center sm:justify-start">
                                <Icon className="text-4xl text-primary" />
                                <h2 className="text-4xl text-primary leading-tight font-medium">
                                    {title}
                                </h2>
                            </div>
                            <div className="flex-1 h-1 bg-primary rounded-full hidden sm:block" />
                        </motion.div>

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
                                    { title, description, icon: Icon, href },
                                    index,
                                ) => {
                                    return (
                                        <Link
                                            key={index}
                                            href={href}
                                            className="flex-1 min-w-60 sm:max-w-60"
                                        >
                                            <motion.div
                                                key={index}
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
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="relative overflow-hidden flex-1 min-w-60 sm:max-w-60 w-full sm:h-65 h-fit border-4 border-secondary rounded-2xl cursor-pointer transition-colors hover:border-primary bg-accent flex flex-col items-center justify-start text-center p-6"
                                            >
                                                <Icon className="w-12 h-12 text-primary group-hover:text-primary transition-colors mt-2 mb-4 shrink-0" />
                                                <h3 className="text-xl font-bold text-primary mb-2 leading-tight px-2">
                                                    {title}
                                                </h3>
                                                <p className="text-sm text-secondary line-clamp-3 px-2">
                                                    {description}
                                                </p>
                                            </motion.div>
                                        </Link>
                                    );
                                },
                            )}
                        </motion.div>
                    </section>
                );
            })}
        </div>
    );
}
