// import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

// import("./env.mjs");

// // Here we use the @cloudflare/next-on-pages next-dev module to allow us to use bindings during local development
// // (when running the application with `next dev`), for more information see:
// // https://github.com/cloudflare/next-on-pages/blob/5712c57ea7/internal-packages/next-dev/README.md
// if (process.env.NODE_ENV === "development") {
//   await setupDevPlatform();
// }

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // loader: "custom",
    // loaderFile: "./src/lib/utils/cloudflare-image-loader.js",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.githubusercontent.com",
      },
    ],
  },
  experimental: {
    reactCompiler: true,
    ppr: "incremental",
  },
};

export default nextConfig;
