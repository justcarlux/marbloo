"use client";

import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggleOverlay() {
    const { theme, setTheme } = useTheme();

    return (
        <div className="fixed z-50 bottom-3 right-3">
            <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="cursor-pointer p-2 rounded-lg not-dark:bg-gray-300 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none"
            >
                <FiSun className="w-5 h-5 text-yellow-500 not-dark:hidden dark:block" />
                <FiMoon className="w-5 h-5 text-gray-700 not-dark:block dark:hidden" />
            </button>
        </div>
    );
}
