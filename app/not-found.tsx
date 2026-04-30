"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiAlertCircle } from "react-icons/fi";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-surface">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring" }}
                className="max-w-md w-full bg-white dark:bg-gray-900 rounded-3xl p-10 shadow-2xl border border-gray-200 dark:border-gray-800 text-center relative overflow-hidden"
            >
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-red-500/5 rounded-full blur-3xl" />

                <div className="relative z-10">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="bg-red-50 dark:bg-red-900/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8"
                    >
                        <FiAlertCircle className="w-12 h-12 text-red-500" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-6xl font-black text-primary mb-2 tracking-tighter"
                    >
                        404
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-2xl font-bold text-primary mb-4"
                    >
                        Not too much to see here...
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-secondary mb-10 leading-relaxed text-lg"
                    >
                        We couldn&apos;t find the page you were looking for.
                        Let&apos;s get you back to your lessons.
                    </motion.p>

                    <Link href="/learning">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-primary text-surface font-bold py-4 px-8 rounded-2xl shadow-xl transition-colors hover:bg-primary/90 flex items-center justify-center gap-3 cursor-pointer group"
                        >
                            Back to Learning
                        </motion.div>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
