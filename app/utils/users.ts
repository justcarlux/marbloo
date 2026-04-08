import { User } from "@supabase/supabase-js";

export function getDisplayName(user: User): string {
    if (user.user_metadata?.display_name) {
        return user.user_metadata?.display_name;
    }
    if (user.app_metadata.provider === "google") {
        return user.user_metadata.name;
    }
    if (user.app_metadata.provider === "github") {
        return user.user_metadata.user_name;
    }
    if (user.app_metadata.provider === "discord") {
        return user.user_metadata.full_name;
    }
    return user.email?.split("@")[0] || "User";
}

export function getAvatarUrl(user: User) {
    if (user.user_metadata?.custom_avatar_url) {
        return user.user_metadata.custom_avatar_url;
    }
    return user.user_metadata?.avatar_url;
}
