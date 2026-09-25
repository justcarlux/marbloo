import { Metadata } from "next";
import LogInForm from "../components/ui/LogInForm";
import { getCurrentUser } from "@/lib/auth/session";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "Log In | Marbloo",
};

export default async function LoginPage() {
    const user = await getCurrentUser();

    if (user) {
        redirect("/");
    }

    return <LogInForm />;
}
