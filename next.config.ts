import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

/** @type {import('remark-gfm').Options} */
const remarkGFMOptions = {
    singleTilde: false,
};

const withMDX = createMDX({
    options: {
        remarkPlugins: [["remark-gfm", remarkGFMOptions]],
        rehypePlugins: [],
    },
});

export default withMDX(nextConfig);
