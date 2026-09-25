import prisma from "@/lib/prisma";
import "server-only";
import { OAuthProviderName } from "./constants";
import { OAuthProfile } from "./oauth";

export function normalizeEmail(email: string) {
    return email.trim().toLowerCase();
}

export async function findOrCreateOAuthUser(
    provider: OAuthProviderName,
    profile: OAuthProfile,
): Promise<string> {
    return prisma.$transaction(async (tx) => {
        const account = await tx.oAuthAccount.findUnique({
            where: {
                provider_providerAccountId: {
                    provider,
                    providerAccountId: profile.providerAccountId,
                },
            },
            include: { user: { select: { avatarUrl: true } } },
        });

        if (account) {
            if (
                profile.avatarUrl &&
                profile.avatarUrl !== account.user.avatarUrl
            ) {
                await tx.user.update({
                    where: { id: account.userId },
                    data: { avatarUrl: profile.avatarUrl },
                });
            }
            return account.userId;
        }

        const verifiedEmail =
            profile.emailVerified && profile.email
                ? normalizeEmail(profile.email)
                : null;

        if (verifiedEmail) {
            const existing = await tx.user.findUnique({
                where: { email: verifiedEmail },
            });

            if (existing) {
                await tx.oAuthAccount.create({
                    data: {
                        provider,
                        providerAccountId: profile.providerAccountId,
                        userId: existing.id,
                    },
                });

                if (!existing.emailVerified) {
                    await tx.user.update({
                        where: { id: existing.id },
                        data: {
                            emailVerified: true,
                            passwordHash: null,
                            avatarUrl: existing.avatarUrl ?? profile.avatarUrl,
                        },
                    });
                    await tx.session.deleteMany({
                        where: { userId: existing.id },
                    });
                }

                return existing.id;
            }
        }

        const user = await tx.user.create({
            data: {
                email: verifiedEmail,
                emailVerified: verifiedEmail !== null,
                displayName: profile.displayName?.slice(0, 30),
                avatarUrl: profile.avatarUrl,
                accounts: {
                    create: {
                        provider,
                        providerAccountId: profile.providerAccountId,
                    },
                },
            },
        });

        return user.id;
    });
}
