import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: (props) => (
            <h1
                {...props}
                className="text-3xl sm:text-4xl font-bold text-primary mb-8 mt-12"
            />
        ),
        h2: (props) => (
            <h2
                {...props}
                className="text-2xl sm:text-3xl font-bold text-primary mb-4 mt-10"
            />
        ),
        p: (props) => (
            <p
                {...props}
                className="sm:text-lg text-base text-primary/80 mb-4 leading-relaxed"
            />
        ),
        li: (props) => (
            <li
                {...props}
                className="sm:text-lg text-base text-primary/80 mb-1 leading-relaxed"
            />
        ),
        ...components,
    };
}
