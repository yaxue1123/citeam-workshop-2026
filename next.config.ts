import type { NextConfig } from "next";

const isProd = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  ...(isProd && {
    basePath: "/citeam-workshop-2026",
    assetPrefix: "/citeam-workshop-2026/",
  }),
};

export default nextConfig;
