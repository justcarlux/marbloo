"use client";

import { TbExternalLink } from "react-icons/tb";

export default function ExternalLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-primary no-underline hover:underline decoration-primary/40 decoration-2 underline-offset-4 transition-all duration-300 group"
        >
            {children}
            <TbExternalLink
                size={16}
                className="text-primary/70 transition-colors duration-300"
            />
        </a>
    );
}
