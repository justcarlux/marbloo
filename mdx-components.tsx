import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: (props) => (
            <h1
                {...props}
                className="text-4xl font-bold text-primary pb-6 mt-12"
            />
        ),
        h2: (props) => (
            <h2
                {...props}
                className="text-3xl font-bold text-primary mb-4 mt-10"
            />
        ),
        p: (props) => (
            <p
                {...props}
                className="text-lg text-primary/80 mb-6 leading-relaxed"
            />
        ),
        li: (props) => (
            <li
                {...props}
                className="text-lg text-primary/80 mb-1 leading-relaxed"
            />
        ),
        ...components,
    };
}
