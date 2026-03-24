import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import BottomToolbar from "./components/ui/BottomToolbar";

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
                <div className="bg-surface transition-colors">
                    <ThemeProvider attribute="class">
                        <BottomToolbar />
                        {children}
                    </ThemeProvider>
                </div>
            </body>
        </html>
    );
}
