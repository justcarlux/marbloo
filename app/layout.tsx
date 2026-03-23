import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import ThemeToggleOverlay from "./components/ui/ThemeToggleOverlay";

export const metadata: Metadata = {
    title: "Marbloo",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`antialiased`}>
                <div className="bg-surface transition-colors duration-200">
                    <ThemeProvider attribute="class">
                        <ThemeToggleOverlay />
                        {children}
                    </ThemeProvider>
                </div>
            </body>
        </html>
    );
}
