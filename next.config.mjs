import { withContentCollections } from "@content-collections/next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isGithubActions ? "/personal_portfolio" : "",
  assetPrefix: isGithubActions ? "/personal_portfolio/" : "",
  reactStrictMode: true,
  trailingSlash: true,
};

// withContentCollections must be the outermost plugin
export default withContentCollections(nextConfig);
