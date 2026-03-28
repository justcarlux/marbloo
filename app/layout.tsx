import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import BottomToolbar from "./components/ui/BottomToolbar";
import Header from "./components/ui/Header";
import { BottomToolbarContextProvider } from "./contexts/BottomToolbarContext";
import "./globals.css";

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
            <body className="antialiased">
                <div className="bg-surface transition-colors">
                    <ThemeProvider attribute="class">
                        <BottomToolbarContextProvider>
                            <Header />
                            <BottomToolbar />
                            {children}
                        </BottomToolbarContextProvider>
                    </ThemeProvider>
                </div>
            </body>
        </html>
    );
}
