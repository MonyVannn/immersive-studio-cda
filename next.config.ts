import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.mov": {
        loaders: ["next-video/webpack/video-raw-loader.js"],
        as: "*.json",
      },
    },
  },
};

export default withNextVideo(nextConfig);