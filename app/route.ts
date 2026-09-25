import { getCurrentUser } from "@/lib/auth/session";
import { redirect } from "next/navigation";

export async function GET() {
    const user = await getCurrentUser();

    if (user) {
        return redirect("/learning");
    }

    return redirect("/login");
}
