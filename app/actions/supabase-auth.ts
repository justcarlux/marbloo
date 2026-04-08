"use server";

import {
    getOrCreateSupabaseAdminClient,
    createSupabaseServerClient,
} from "@/lib/supabase/server-client";
import { redirect } from "next/navigation";
import { z } from "zod";
import { Provider } from "@supabase/supabase-js";
import { headers } from "next/headers";
import { Route } from "next";
import { revalidatePath } from "next/cache";
import crypto from "crypto";

const authSchema = z.object({
    email: z.email("Invalid email format"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    displayName: z
        .string()
        .min(2, "Display name must be at least 2 characters long")
        .optional(),
});

const updateProfileSchema = z.object({
    displayName: z.string().max(30).optional(),
});

export type AuthResponseErrorReason = "validation_error" | "auth_error";

export type AuthResponse =
    | { success: true }
    | {
          success: false;
          reason: AuthResponseErrorReason;
          error: string;
      };

export async function signIn(
    input: z.input<typeof authSchema>,
): Promise<AuthResponse> {
    const result = authSchema.safeParse(input);

    if (!result.success) {
        return {
            success: false,
            reason: "validation_error",
            error: result.error.message,
        };
    }

    const { email, password } = result.data;

    const supabase = await createSupabaseServerClient();
    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        return { success: false, reason: "auth_error", error: error.message };
    }

    return { success: true };
}

export async function signUp(
    input: z.input<typeof authSchema>,
): Promise<AuthResponse> {
    const result = authSchema.safeParse(input);

    if (!result.success) {
        return {
            success: false,
            reason: "validation_error",
            error: result.error.message,
        };
    }

    const { email, password, displayName } = result.data;

    const supabase = await createSupabaseServerClient();
    const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                display_name: displayName,
            },
        },
    });

    if (error) {
        return { success: false, reason: "auth_error", error: error.message };
    }

    return { success: true };
}

export async function signInWithOAuth(provider: Provider) {
    const supabase = await createSupabaseServerClient();
    const headerList = await headers();
    const host = headerList.get("host");
    const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
            redirectTo: `${protocol}://${host}/auth/callback`,
        },
    });

    if (error) {
        throw new Error(error.message);
    }

    if (data.url) {
        redirect(data.url! as Route);
    }
}

export async function updateProfile(
    input: z.input<typeof updateProfileSchema>,
) {
    const result = updateProfileSchema.safeParse(input);

    if (!result.success) {
        return {
            success: false,
            error: result.error.message,
        };
    }

    const { displayName } = result.data;
    const supabase = await createSupabaseServerClient();

    const { error } = await supabase.auth.updateUser({
        data: {
            display_name: displayName,
        },
    });

    if (error) {
        return { success: false, error: error.message };
    }

    revalidatePath("/", "layout");
    return { success: true };
}

export async function uploadAvatar(formData: FormData) {
    const supabaseSession = await createSupabaseServerClient();
    const {
        data: { user },
    } = await supabaseSession.auth.getUser();

    if (!user) {
        return { success: false, error: "User not authenticated" };
    }

    const supabaseAdmin = getOrCreateSupabaseAdminClient();
    const file = formData.get("file") as File;

    if (!file || !(file instanceof File)) {
        return { success: false, error: "No file provided" };
    }

    const arrayBuffer = await file.arrayBuffer();
    const hash = crypto
        .createHash("sha256")
        .update(Buffer.from(arrayBuffer))
        .digest("hex");

    const fileExt = file.name.split(".").pop();
    const fileName = `${hash}.${fileExt}`;
    const filePath = fileName;

    const oldCustomAvatarUrl: string | undefined =
        user.user_metadata?.custom_avatar_url;

    const { error: uploadError } = await supabaseAdmin.storage
        .from("avatars")
        .upload(filePath, file, {
            upsert: true,
        });

    if (uploadError) {
        return { success: false, error: uploadError.message };
    }

    const {
        data: { publicUrl },
    } = supabaseAdmin.storage.from("avatars").getPublicUrl(filePath);

    const { error: updateError } =
        await supabaseAdmin.auth.admin.updateUserById(user.id, {
            user_metadata: {
                ...user.user_metadata,
                custom_avatar_url: publicUrl,
            },
        });

    if (updateError) {
        return { success: false, error: updateError.message };
    }

    if (oldCustomAvatarUrl && oldCustomAvatarUrl !== publicUrl) {
        const encodedPath = oldCustomAvatarUrl
            .split("avatars/")
            .pop()
            ?.split("?")[0];
        const oldPath = encodedPath ? decodeURIComponent(encodedPath) : null;
        if (oldPath) {
            await supabaseAdmin.storage.from("avatars").remove([oldPath]);
        }
    }

    revalidatePath("/", "layout");
    return { success: true, publicUrl };
}

export async function signOut() {
    const supabase = await createSupabaseServerClient();
    await supabase.auth.signOut();
    return redirect("/login");
}
