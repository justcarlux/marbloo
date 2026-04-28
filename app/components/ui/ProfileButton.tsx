"use client";

import { signOut } from "@/app/actions/accounts";
import { getAvatarUrl, getDisplayName } from "@/app/utils/users";
import { User } from "@supabase/supabase-js";
import { AnimatePresence, motion } from "framer-motion";
import { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IoMdLogOut, IoMdPerson, IoMdSettings } from "react-icons/io";

interface ProfileButtonProps {
    user: User;
}

export default function ProfileButton({ user }: ProfileButtonProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname() as Route;

    const displayName = getDisplayName(user);
    const avatarUrl = getAvatarUrl(user);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <motion.div
            className="relative"
            ref={dropdownRef}
            animate={{ top: pathname === "/learning/practice" ? "25px" : "" }}
        >
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-3 bg-accent/50 border border-secondary/30 rounded-2xl p-2 hover:border-primary transition-colors focus:outline-none cursor-pointer"
            >
                <div className="w-10 h-10 rounded-xl overflow-hidden bg-primary/10 flex items-center justify-center border border-primary/20">
                    {avatarUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            src={avatarUrl}
                            alt={displayName}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <IoMdPerson className="w-6 h-6 text-primary" />
                    )}
                </div>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute right-0 mt-3 w-56 bg-accent border border-secondary/30 rounded-3xl shadow-2xl overflow-hidden z-50 p-2"
                    >
                        <div className="px-4 py-3 border-b border-secondary/10 mb-2">
                            <p className="text-xs text-secondary font-medium uppercase tracking-wider mb-1">
                                Signed in as
                            </p>
                            <p className="text-sm font-bold text-primary truncate">
                                {displayName}
                            </p>
                        </div>

                        <Link
                            href="/settings/profile"
                            onClick={() => {
                                setIsOpen(false);
                            }}
                            className="flex items-center gap-3 w-full px-4 py-3 text-sm font-semibold text-primary/70 hover:text-primary hover:bg-primary/5 rounded-2xl transition-all group"
                        >
                            <IoMdSettings className="w-5 h-5 transition-transform" />
                            Profile Settings
                        </Link>

                        <button
                            onClick={() => {
                                setIsOpen(false);
                                signOut();
                            }}
                            className="flex items-center gap-3 w-full px-4 py-3 text-sm font-bold text-error-fg not-dark:hover:bg-error-bg/50 dark:hover:bg-error-bg/30 rounded-2xl transition-all mt-1 cursor-pointer"
                        >
                            <IoMdLogOut className="w-5 h-5" />
                            Sign Out
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
