import { cva } from "class-variance-authority";

export const textStyles = cva("box-border text-base text-fg font-normal", {
  variants: {
    size: {
      xs: "text-xs font-sans",
      sm: "text-sm font-sans",
      base: "text-base font-sans",
      md: "text-md font-sans",
      lg: "text-lg font-sans",
      xl: "text-xl font-sans",
      "2xl": "text-2xl font-sans",
      "3xl": "text-3xl font-sans",
      "4xl": "text-4xl font-sans",
      "5xl": "text-5xl font-sans",
      "6xl": "text-6xl font-sans",
    },
    weight: {
      light: "font-light",
      regular: "font-normal",
      medium: "font-medium",
      bold: "font-bold",
    },
    align: {
      left: "text-left",
      right: "text-right",
      center: "text-center",
    },
    intent: {
      primary: "text-primary-fg",
      secondary: "text-secondary-fg",
      accent: "text-accent-fg",
      destructive: "text-destructive-fg",
      // info: "text-info-fg",
      // success: "text-success-fg",
      // warning: "text-warning-fg",
      // neutral: "text-neutral-fg",
      // natural: "text-natural-fg",
    },
  },
  defaultVariants: {
    size: "base",
    weight: "regular",
  },
});
