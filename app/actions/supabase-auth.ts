"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server-client";
import { redirect } from "next/navigation";
import { z } from "zod";
import { Provider } from "@supabase/supabase-js";
import { headers } from "next/headers";
import { Route } from "next";

const authSchema = z.object({
    email: z.email("Invalid email format"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    displayName: z
        .string()
        .min(2, "Display name must be at least 2 characters long")
        .optional(),
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
            error: result.error.issues[0].message,
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
            error: result.error.issues[0].message,
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

export async function updateProfile(data: {
    displayName?: string;
    avatarUrl?: string;
}) {
    const supabase = await createSupabaseServerClient();

    const { error } = await supabase.auth.updateUser({
        data: {
            display_name: data.displayName,
            avatar_url: data.avatarUrl,
        },
    });

    if (error) {
        return { success: false, error: error.message };
    }

    return { success: true };
}

export async function signOut() {
    const supabase = await createSupabaseServerClient();
    await supabase.auth.signOut();
    return redirect("/login");
}
