import { Metadata } from "next";
import SignUpForm from "../components/ui/SignUpForm";
import { getCurrentUser } from "@/lib/auth/session";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "Sign Up | Marbloo",
};

export default async function SignUpPage() {
    const user = await getCurrentUser();

    if (user) {
        redirect("/");
    }

    return <SignUpForm />;
}
