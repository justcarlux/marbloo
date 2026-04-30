import { Metadata } from "next";
import SignUpForm from "../components/ui/SignUpForm";
import { createSupabaseServerClient } from "@/lib/supabase/server-client";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "Sign Up | Marbloo",
};

export default async function SignUpPage() {
    const supabase = await createSupabaseServerClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (user) {
        redirect("/");
    }

    return <SignUpForm />;
}
