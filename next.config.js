import("./env.mjs");

const { createContentlayerPlugin } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.githubusercontent.com",
      },
    ],
  },
  webpack: (config) => {
    // mark oslo dependencies as external to prevent it from being bundled.
    config.externals.push("@node-rs/argon2", "@node-rs/bcrypt");
    return config;
  },
};

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
});

module.exports = withContentlayer(nextConfig);
