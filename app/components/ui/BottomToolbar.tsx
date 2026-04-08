"use client";

import { deleteQuestionSet } from "@/app/actions/question-sets";
import { useBottomToolbar } from "@/app/contexts/BottomToolbarContext";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { FiArrowUp, FiMoon, FiSun } from "react-icons/fi";
import { IoMdExit } from "react-icons/io";
import { Slide, ToastContainer } from "react-toastify";

export default function BottomToolbar() {
    const {
        shouldBackButtonAppear,
        allowsScrollingToTop,
        shouldClearQuestionSetOnExit,
    } = useBottomToolbar();

    const { theme, setTheme } = useTheme();
    const router = useRouter();

    return (
        <>
            <ToastContainer
                position="bottom-center"
                theme={theme ?? "light"}
                transition={Slide}
            />
            <div className="fixed z-20 bottom-3 right-3 flex gap-2">
                <AnimatePresence mode="sync">
                    {shouldBackButtonAppear && (
                        <motion.button
                            key="back"
                            initial={{ translateY: 20, opacity: 0 }}
                            animate={{ translateY: 0, opacity: 1 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="h-fit cursor-pointer rounded-lg not-dark:bg-gray-300
                                dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700
                                transition-colors focus:outline-none"
                            onClick={async () => {
                                if (shouldClearQuestionSetOnExit) {
                                    deleteQuestionSet();
                                }
                                router.back();
                            }}
                        >
                            <div className="block p-2">
                                <IoMdExit className="w-5 h-5 dark:text-yellow-500 not-dark:text-gray-700 rotate-180" />
                            </div>
                        </motion.button>
                    )}
                    {allowsScrollingToTop && (
                        <motion.button
                            key="scrollUp"
                            initial={{ translateY: 20, opacity: 0 }}
                            animate={{ translateY: 0, opacity: 1 }}
                            exit={{ opacity: 0, y: 20 }}
                            onClick={() =>
                                window.scrollTo({ top: 0, behavior: "smooth" })
                            }
                            className="cursor-pointer p-2 rounded-lg not-dark:bg-gray-300
                        dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors
                        focus:outline-none"
                        >
                            <FiArrowUp className="w-5 h-5 dark:text-yellow-500 not-dark:text-gray-700" />
                        </motion.button>
                    )}
                </AnimatePresence>

                <button
                    onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                    }
                    className="cursor-pointer p-2 rounded-lg not-dark:bg-gray-300
                            dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors
                            focus:outline-none"
                >
                    <FiSun className="w-5 h-5 text-yellow-500 not-dark:hidden dark:block" />
                    <FiMoon className="w-5 h-5 text-gray-700 not-dark:block dark:hidden" />
                </button>
            </div>
        </>
    );
}
