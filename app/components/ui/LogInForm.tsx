"use client";

import { signIn, signInWithOAuth } from "@/app/actions/accounts";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitEvent, useCallback, useState } from "react";
import { FaDiscord, FaGithub, FaGoogle } from "react-icons/fa";
import { IoMdLock, IoMdLogIn, IoMdMail } from "react-icons/io";
import { OrbitProgress } from "react-loading-indicators";

export default function LogInForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSubmit = useCallback(
        async (event: SubmitEvent<HTMLFormElement>) => {
            event.preventDefault();
            setIsLoading(true);
            setError(null);
            const result = await signIn({ email, password });

            if (result.success) {
                router.push("/learning");
                return;
            }

            if (
                result.reason === "validation_error" ||
                result.reason === "auth_error"
            ) {
                setError(result.error);
            }
            setIsLoading(false);
        },
        [setIsLoading, email, password, router],
    );

    return (
        <div className="min-h-screen flex items-center justify-center sm:px-4 sm:py-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full sm:max-w-md not-sm:h-dvh not-sm:flex not-sm:flex-col not-sm:justify-center bg-accent border-secondary sm:rounded-3xl p-8 shadow-2xl overflow-hidden not-sm:border-hidden sm:border"
            >
                <div className="flex flex-col items-center mb-8">
                    <motion.div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4">
                        <IoMdLogIn className="w-8 h-8 text-surface" />
                    </motion.div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-primary">
                        Welcome Back
                    </h1>
                    <p className="text-sm sm:text-base text-secondary mt-2">
                        Log in to continue your journey!
                    </p>
                </div>

                {error && (
                    <div className="mb-6 p-4 bg-error-bg text-error-fg rounded-xl text-sm font-medium border border-error-fg/20 text-center">
                        {error}
                    </div>
                )}

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="relative">
                        <IoMdMail className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary w-5 h-5" />
                        <input
                            name="email"
                            type="email"
                            placeholder="Email address"
                            required
                            disabled={isLoading}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="text-sm sm:text-base w-full bg-surface border-2 border-secondary/30
                            rounded-2xl py-3 pl-12 pr-4 text-primary placeholder:text-secondary/50 focus:outline-none
                             focus:border-primary transition-colors disabled:opacity-50"
                        />
                    </div>
                    <div className="relative">
                        <IoMdLock className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary w-5 h-5" />
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            required
                            disabled={isLoading}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="text-sm sm:text-base w-full bg-surface border-2 border-secondary/30
                            rounded-2xl py-3 pl-12 pr-4 text-primary placeholder:text-secondary/50 focus:outline-none
                            focus:border-primary transition-colors disabled:opacity-50"
                        />
                    </div>

                    <motion.button
                        whileHover={{ scale: isLoading ? 1.0 : 1.02 }}
                        whileTap={{ scale: isLoading ? 1.0 : 0.98 }}
                        disabled={isLoading}
                        className="not-disabled:cursor-pointer w-full bg-primary text-surface font-bold py-4 rounded-2xl shadow-lg transition-colors not-disabled:hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                    >
                        <div className="flex items-center justify-center gap-1 text-sm sm:text-base">
                            Log In
                            {isLoading && (
                                <div className="w-8 h-0 relative -top-3.75 scale-[0.4]">
                                    <OrbitProgress dense color="#32b5c7" />
                                </div>
                            )}
                        </div>
                    </motion.button>
                </form>

                <div className="mt-8">
                    <div className="relative flex items-center justify-center mb-6">
                        <div className="grow border-t border-secondary/20"></div>
                        <span className="shrink mx-4 text-secondary text-sm font-medium">
                            Or continue with
                        </span>
                        <div className="grow border-t border-secondary/20"></div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        <button
                            type="button"
                            onClick={() => signInWithOAuth("google")}
                            className="cursor-pointer flex items-center justify-center p-3 bg-surface border-2 border-secondary/30 rounded-2xl hover:border-primary transition-colors hover:bg-primary/5"
                        >
                            <FaGoogle className="w-6 h-6 text-[#4285F4]" />
                        </button>
                        <button
                            type="button"
                            onClick={() => signInWithOAuth("github")}
                            className="cursor-pointer flex items-center justify-center p-3 bg-surface border-2 border-secondary/30 rounded-2xl hover:border-primary transition-colors hover:bg-primary/5"
                        >
                            <FaGithub className="w-6 h-6 text-primary" />
                        </button>
                        <button
                            type="button"
                            onClick={() => signInWithOAuth("discord")}
                            className="cursor-pointer flex items-center justify-center p-3 bg-surface border-2 border-secondary/30 rounded-2xl hover:border-primary transition-colors hover:bg-primary/5"
                        >
                            <FaDiscord className="w-6 h-6 text-[#5865F2]" />
                        </button>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <Link
                        className="text-sm sm:text-base text-primary font-semibold transition-colors hover:underline underline-offset-4 cursor-pointer"
                        href="/signup"
                    >
                        Don&apos;t have an account? Sign Up
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
