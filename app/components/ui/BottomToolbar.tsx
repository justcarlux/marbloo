"use client";

import { deleteQuestionSet } from "@/app/actions/question-sets";
import logo from "@/app/assets/imagotype.svg";
import { useBottomToolbar } from "@/app/contexts/BottomToolbarContext";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
import { FaGithub } from "react-icons/fa";
import {
    FiArrowUp,
    FiExternalLink,
    FiInfo,
    FiMoon,
    FiSun,
    FiX,
} from "react-icons/fi";
import { IoMdExit } from "react-icons/io";
import { Slide, ToastContainer } from "react-toastify";

interface InfoModalProps {
    isOpen: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

function InfoModal({ isOpen, setOpen }: InfoModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpen(false)}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative bg-white dark:bg-gray-900 rounded-3xl p-8 max-w-md w-full
                                     shadow-2xl border border-gray-200 dark:border-gray-800 text-center"
                    >
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100
                                         dark:hover:bg-gray-800 transition-colors"
                        >
                            <FiX className="w-6 h-6 text-gray-500" />
                        </button>

                        <Image
                            src={logo}
                            alt="Marbloo Logo"
                            width={180}
                            height={180}
                            className="mx-auto mb-2"
                            priority
                        />

                        <div className="text-secondary leading-relaxed mb-6 text-sm">
                            Logo by{" "}
                            <a
                                href="https://www.instagram.com/alecsodev"
                                className="text-primary font-bold hover:underline transition-all"
                                target="_blank"
                            >
                                alecsodev
                                <FiExternalLink className="inline-block w-3 h-3 ml-1" />
                            </a>
                        </div>

                        <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">
                            Welcome to Marbloo!
                        </h2>

                        <div className="text-secondary leading-relaxed mb-6 flex flex-col gap-2 text-sm sm:text-base">
                            <p>
                                Marbloo is an interactive free{" "}
                                <strong className="text-primary text-bold">
                                    English learning platform
                                </strong>{" "}
                                designed to make grammar and phonetics learning
                                fun and effective.
                            </p>

                            <p>
                                This work is part of my{" "}
                                <strong className="text-primary text-bold">
                                    Occupational Internship Report
                                </strong>{" "}
                                submitted as a partial requirement to obtain the
                                degree of{" "}
                                <strong className="text-primary text-bold">
                                    Higher Technician in Languages with a major
                                    in English
                                </strong>{" "}
                                at the{" "}
                                <a
                                    href="https://www.iutso.com/"
                                    className="text-primary font-bold hover:underline transition-all"
                                    target="_blank"
                                >
                                    IUTSO (Instituto Universitario de Tecnología
                                    Superior de Oriente)
                                    <FiExternalLink className="inline-block w-3 h-3 ml-1" />
                                </a>{" "}
                                dedicated to the students of{" "}
                                <a
                                    href="https://uesbl.com"
                                    className="text-primary font-bold hover:underline transition-all"
                                    target="_blank"
                                >
                                    U.E. Simón Bolívar Libertador
                                    <FiExternalLink className="inline-block w-3 h-3 ml-1" />
                                </a>
                                .
                            </p>

                            <p>Made with ❤️ by Carlos Barranca.</p>
                        </div>

                        <a
                            href="https://github.com/justcarlux"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative cursor-pointer flex items-center justify-center p-4 bg-surface border-2
                                         border-secondary/30 rounded-2xl hover:border-primary transition-colors
                                         hover:bg-primary/5 shadow-sm"
                            title="GitHub"
                        >
                            <FaGithub className="w-6 h-6 text-primary" />
                        </a>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

export default function BottomToolbar() {
    const {
        shouldBackButtonAppear,
        allowsScrollingToTop,
        shouldClearQuestionSetOnExit,
    } = useBottomToolbar();

    const { theme, setTheme } = useTheme();
    const router = useRouter();
    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

    return (
        <>
            <ToastContainer
                position="bottom-center"
                theme={theme ?? "light"}
                transition={Slide}
            />

            <InfoModal isOpen={isInfoModalOpen} setOpen={setIsInfoModalOpen} />

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

                <button
                    onClick={() => setIsInfoModalOpen(true)}
                    className="cursor-pointer p-2 rounded-lg not-dark:bg-gray-300
                            dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors
                            focus:outline-none"
                >
                    <FiInfo className="w-5 h-5 text-gray-700 dark:text-yellow-500" />
                </button>
            </div>
        </>
    );
}
