import { Metadata } from "next";
import LogInForm from "../components/ui/LogInForm";
import { createSupabaseServerClient } from "@/lib/supabase/server-client";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "Log In | Marbloo",
};

export default async function LoginPage() {
    const supabase = await createSupabaseServerClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (user) {
        redirect("/");
    }

    return <LogInForm />;
}
