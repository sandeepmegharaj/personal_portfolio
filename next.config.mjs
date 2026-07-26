import { withContentCollections } from "@content-collections/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/sandeepmegharaj",
  assetPrefix: "/sandeepmegharaj/",
  reactStrictMode: true,
  trailingSlash: true,
};

// withContentCollections must be the outermost plugin
export default withContentCollections(nextConfig);
