"use client";

import { updateProfile } from "@/app/actions/accounts";
import { useBottomToolbar } from "@/app/contexts/BottomToolbarContext";
import type { CurrentUser } from "@/lib/auth/session";
import { motion } from "framer-motion";
import { SubmitEvent, useCallback, useEffect, useState } from "react";
import { IoMdMail, IoMdPerson } from "react-icons/io";
import { OrbitProgress } from "react-loading-indicators";
import { toast } from "react-toastify";

interface ProfileSettingsFormProps {
    user: CurrentUser;
}

export default function ProfileSettingsForm({
    user,
}: ProfileSettingsFormProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [displayName, setDisplayName] = useState(user.displayName);
    const { setShouldBackButtonAppear } = useBottomToolbar();

    useEffect(() => {
        setShouldBackButtonAppear(true);
        return () => {
            setShouldBackButtonAppear(false);
        };
    }, [setShouldBackButtonAppear]);

    const handleSubmit = useCallback(
        async (event: SubmitEvent<HTMLFormElement>) => {
            event.preventDefault();
            setIsLoading(true);

            const result = await updateProfile({
                displayName,
            });

            if (result.success) {
                toast.success("Profile updated successfully!");
            } else {
                toast.error(result.error || "Failed to update profile.");
            }

            setIsLoading(false);
        },
        [setIsLoading, displayName],
    );

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-transparent sm:bg-accent border not-sm:border-hidden sm:border-secondary/30 sm:rounded-3xl p-8 sm:shadow-2xl overflow-hidden"
        >
            <header className="mb-10">
                <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                    Profile Settings
                </h1>
                <p className="text-sm sm:text-base text-secondary">
                    Customize your appearance and account information.
                </p>
            </header>

            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="flex flex-col items-center mb-8">
                    <div className="w-24 h-24 bg-primary/10 rounded-3xl border-2 border-primary/20 overflow-hidden flex items-center justify-center">
                        {user.avatarUrl ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                src={user.avatarUrl}
                                alt={user.displayName}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <IoMdPerson className="w-12 h-12 text-primary/50" />
                        )}
                    </div>
                </div>

                <div className="grid gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-secondary tracking-wider px-1 mb-2">
                            Email
                        </label>
                        <div className="relative mt-1">
                            <IoMdMail className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary w-5 h-5" />
                            <input
                                type="text"
                                className="text-sm sm:text-base w-full bg-surface border-2 border-secondary/30 rounded-2xl py-3 pl-12 pr-4
                                text-primary placeholder:text-secondary/50 focus:outline-none focus:border-primary transition-colors
                                disabled:opacity-50"
                                required
                                disabled
                                value={user.email ?? ""}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-secondary tracking-wider px-1 mb-2">
                            Display Name
                        </label>
                        <div className="relative mt-1">
                            <IoMdPerson className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary w-5 h-5" />
                            <input
                                type="text"
                                value={displayName}
                                onChange={(e) => setDisplayName(e.target.value)}
                                placeholder="Your display name"
                                className="text-sm sm:text-base w-full bg-surface border-2 border-secondary/30 rounded-2xl py-3 pl-12 pr-4
                                text-primary placeholder:text-secondary/50 focus:outline-none focus:border-primary transition-colors
                                disabled:opacity-50"
                                required
                                disabled={isLoading}
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isLoading}
                        className="not-disabled:cursor-pointer w-full bg-primary text-surface font-bold py-4 rounded-2xl shadow-lg transition-colors not-disabled:hover:bg-primary/90 disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                        <span className="text-sm sm:text-base">
                            Save Changes
                        </span>
                        {isLoading && (
                            <div className="w-6 h-6 relative -top-3 scale-[0.4] box-content">
                                <OrbitProgress dense color="#32b5c7" />
                            </div>
                        )}
                    </motion.button>
                </div>
            </form>
        </motion.div>
    );
}
