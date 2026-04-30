import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
    typedRoutes: true,
    allowedDevOrigins: ["192.168.1.100"],
};

const withMDX = createMDX();

export default withMDX(nextConfig);
