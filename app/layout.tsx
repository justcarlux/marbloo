import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { ToastContainer } from "react-toastify";
import BottomToolbar from "./components/ui/BottomToolbar";
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
            <body className={`antialiased`}>
                <div className="bg-surface transition-colors">
                    <ThemeProvider attribute="class">
                        <BottomToolbar />
                        <ToastContainer />
                        {children}
                    </ThemeProvider>
                </div>
            </body>
        </html>
    );
}
