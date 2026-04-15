import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
    typedRoutes: true,
    allowedDevOrigins: ["192.168.50.90"],
};

const withMDX = createMDX();

export default withMDX(nextConfig);
