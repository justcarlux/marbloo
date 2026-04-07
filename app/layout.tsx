import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import BottomToolbar from "./components/ui/BottomToolbar";
import Header from "./components/ui/Header";
import { BottomToolbarContextProvider } from "./contexts/BottomToolbarContext";
import "./globals.css";
import { SfxContextProvider } from "./contexts/SfxContext";

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
                            <SfxContextProvider>
                                <Header />
                                <BottomToolbar />
                                {children}
                            </SfxContextProvider>
                        </BottomToolbarContextProvider>
                    </ThemeProvider>
                </div>
            </body>
        </html>
    );
}
