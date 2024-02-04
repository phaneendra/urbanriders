import type { Config } from "tailwindcss";

import { cpPreset } from "./src/lib/tailwindutils/cp-preset";

const config = {
  presets: [cpPreset],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
} satisfies Config;

export default config;
