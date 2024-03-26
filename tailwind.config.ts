import type { Config } from "tailwindcss";

import { uiPreset } from "./src/lib/utils/tailwind-preset";

const config = {
  presets: [uiPreset],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
} satisfies Config;

export default config;
