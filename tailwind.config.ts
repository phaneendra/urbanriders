import type { Config } from "tailwindcss";

import { cpPreset } from "./lib/tailwindutils/cp-preset";

const config = {
  presets: [cpPreset],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./ui/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
} satisfies Config;

export default config;
