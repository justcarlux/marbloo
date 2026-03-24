"use client";

import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { FiArrowUp, FiMoon, FiSun } from "react-icons/fi";

export default function BottomToolbar() {
    const { theme, setTheme } = useTheme();
    const pathname = usePathname();
    const shouldShowScrollToTopButton = pathname.includes("/lectures/");

    return (
        <div className="fixed z-50 bottom-3 right-3 flex gap-2">
            {shouldShowScrollToTopButton && (
                <button
                    onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="cursor-pointer p-2 rounded-lg not-dark:bg-gray-300 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors focus:outline-none"
                >
                    <FiArrowUp className="w-5 h-5 dark:text-yellow-500 not-dark:text-gray-700" />
                </button>
            )}
            <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="cursor-pointer p-2 rounded-lg not-dark:bg-gray-300 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors focus:outline-none"
            >
                <FiSun className="w-5 h-5 text-yellow-500 not-dark:hidden dark:block" />
                <FiMoon className="w-5 h-5 text-gray-700 not-dark:block dark:hidden" />
            </button>
        </div>
    );
}
