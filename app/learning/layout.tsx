import { getCurrentUser } from "@/lib/auth/session";
import { redirect } from "next/navigation";

export const metadata = {
    title: "Marbloo",
};

export default async function LearningLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const user = await getCurrentUser();

    if (!user) {
        redirect("/login");
    }

    return <>{children}</>;
}
