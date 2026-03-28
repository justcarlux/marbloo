import { createSupabaseServerClient } from "@/lib/supabase/server-client";
import ProfileSettingsForm from "@/app/components/ui/ProfileSettingsForm";
import { redirect } from "next/navigation";

export default async function ProfileSettingsPage() {
    const supabase = await createSupabaseServerClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        redirect("/login");
    }

    return (
        <div className="min-h-screen bg-accent sm:bg-surface sm:p-6 sm:py-16">
            <div className="w-full sm:max-w-2xl mx-auto">
                <ProfileSettingsForm user={user} />
            </div>
        </div>
    );
}
