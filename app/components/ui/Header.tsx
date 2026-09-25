import { getCurrentUser } from "@/lib/auth/session";
import ProfileButton from "./ProfileButton";

export default async function Header() {
    const user = await getCurrentUser();

    if (!user) return null;

    return (
        <header className="fixed top-0 right-0 p-4  sm:p-6 z-50 pointer-events-none">
            <div className="pointer-events-auto relative">
                <ProfileButton user={user} />
            </div>
        </header>
    );
}
