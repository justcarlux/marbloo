import { NextResponse, type NextRequest } from "next/server";
import { SESSION_COOKIE_NAME, SESSION_DURATION_MS } from "@/lib/auth/constants";

const PUBLIC_PATH_PREFIXES = ["/login", "/signup", "/auth"];

export async function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const token = request.cookies.get(SESSION_COOKIE_NAME)?.value;

    const isPublic =
        pathname === "/" ||
        PUBLIC_PATH_PREFIXES.some((prefix) => pathname.startsWith(prefix));

    if (!token && !isPublic) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    const response = NextResponse.next();

    if (token && request.method === "GET") {
        response.cookies.set(SESSION_COOKIE_NAME, token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: SESSION_DURATION_MS / 1000,
        });
    }

    return response;
}

export const config = {
    matcher: [
        "/((?!_next/static|_next/image|favicon.ico|.*\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    ],
};
