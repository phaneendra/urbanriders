import { cva } from "class-variance-authority";

export const codeStyles = cva(["text-fg text-sm font-mono"], {
  variants: {
    size: {
      xs: "text-xs font-mono",
      sm: "text-sm font-mono",
      base: "text-base font-mono",
      md: "text-md font-mono",
      lg: "text-lg font-mono",
      xl: "text-xl font-mono",
      "2xl": "text-2xl font-mono",
      "3xl": "text-3xl font-mono",
      "4xl": "text-4xl font-mono",
      "5xl": "text-5xl font-mono",
      "6xl": "text-6xl font-mono",
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
    radius: {
      none: "rounded-none",
      small: "rounded-sm",
      medium: "rounded-md",
      large: "rounded-lg",
      full: "rounded-full",
    },
    intent: {
      primary: "text-primary-fg",
      secondary: "text-secondary-fg",
      accent: "text-accent-fg",
      // info: "text-info-fg",
      // success:
      //   "text-success-fg",
      // warning:
      //   "text-warning-fg",
      desctructive: "text-desctructive-fg",
      // neutral:
      //   "text-neutral-fg",
      // natural:
      //   "text-natural-fg",
    },
    variant: {
      solid: [
        "px-[0.25em] pt-[0.1em] pb-[0.1em]",
        "bg-uisolid",
        "text-contrast",
      ],
      soft: ["px-[0.25em] pt-[0.1em] pb-[0.1em]", "bg-uisoft", "text-fgsubtle"],
      surface: [
        "px-[0.25em] pt-[0.1em] pb-[0.1em]",
        "bg-surface",
        "text-fgsubtle",
        "shadow-border shadow-borderoutline",
      ],
      outline: [
        "px-[0.25em] pt-[0.1em] pb-[0.1em]",
        "text-fgsubtle",
        "shadow-border shadow-borderoutline",
      ],
      ghost: ["text-fgsubtle"],
    },
  },
  compoundVariants: [
    // solid
    {
      intent: "primary",
      variant: "solid",
      className: ["bg-primary-uisolid", "text-primary-contrast"],
    },
    {
      intent: "secondary",
      variant: "solid",
      className: ["bg-secondary-uisolid", "text-secondary-contrast"],
    },
    {
      intent: "accent",
      variant: "solid",
      className: ["bg-accent-uisolid", "text-accent-contrast"],
    },
    // {
    //   intent: "info",
    //   variant: "solid",
    //   className: [
    //     "bg-info-uisolid", "text-info-contrast"
    //   ],
    // },
    // {
    //   intent: "success",
    //   variant: "solid",
    //   className: [
    //     "bg-success-uisolid", "text-success-contrast"
    //   ],
    // },
    // {
    //   intent: "warning",
    //   variant: "solid",
    //   className: [
    //     "bg-warning-uisolid", "text-warning-contrast"
    //   ],
    // },
    {
      intent: "desctructive",
      variant: "solid",
      className: ["bg-desctructive-uisolid", "text-desctructive-contrast"],
    },
    // {
    //   intent: "neutral",
    //   variant: "solid",
    //   className: [
    //     "bg-neutral-uisolid", "text-neutral-contrast"
    //   ],
    // },

    // soft
    {
      intent: "primary",
      variant: "soft",
      className: ["bg-primary-uisoft", "text-primary-fgsubtle"],
    },
    {
      intent: "secondary",
      variant: "soft",
      className: ["bg-secondary-uisoft", "text-secondary-fgsubtle"],
    },
    {
      intent: "accent",
      variant: "soft",
      className: ["bg-accent-uisoft", "text-accent-fgsubtle"],
    },
    // {
    //   intent: "info",
    //   variant: "soft",
    //   className: [
    //     "bg-info-uisoft", "text-info-fgsubtle"
    //   ],
    // },
    // {
    //   intent: "success",
    //   variant: "soft",
    //   className: [
    //     "bg-success-uisoft", "text-success-fgsubtle"
    //   ],
    // },
    // {
    //   intent: "warning",
    //   variant: "soft",
    //   className: [
    //     "bg-warning-uisoft", "text-warning-fgsubtle"
    //   ],
    // },
    {
      intent: "desctructive",
      variant: "soft",
      className: ["bg-desctructive-uisoft", "text-desctructive-fgsubtle"],
    },
    // {
    //   intent: "neutral",
    //   variant: "soft",
    //   className: [
    //     "bg-neutral-uisoft", "text-neutral-fgsubtle"
    //   ],
    // },

    // surface
    {
      intent: "primary",
      variant: "surface",
      className: [
        "bg-primary-surface",
        "text-primary-fgsubtle",
        "shadow-border shadow-primary-borderoutline",
      ],
    },
    {
      intent: "secondary",
      variant: "surface",
      className: [
        "bg-secondary-surface",
        "text-secondary-fgsubtle",
        "shadow-border shadow-secondary-borderoutline",
      ],
    },
    {
      intent: "accent",
      variant: "surface",
      className: [
        "bg-accent-surface",
        "text-accent-fgsubtle",
        "shadow-border shadow-accent-borderoutline",
      ],
    },
    // {
    //   intent: "info",
    //   variant: "surface",
    //   className: [
    // "bg-info-surface",
    // "text-info-fgsubtle",
    // "shadow-border shadow-info-borderoutline",
    //   ],
    // },
    // {
    //   intent: "success",
    //   variant: "surface",
    //   className: [
    //             "bg-success-surface",
    // "text-success-fgsubtle",
    // "shadow-border shadow-success-borderoutline",
    //   ],
    // },
    // {
    //   intent: "warning",
    //   variant: "surface",
    //   className: [
    // "bg-warning-surface",
    // "text-warning-fgsubtle",
    // "shadow-border shadow-warning-borderoutline",
    //   ],
    // },
    {
      intent: "desctructive",
      variant: "surface",
      className: [
        "bg-desctructive-surface",
        "text-desctructive-fgsubtle",
        "shadow-border shadow-desctructive-borderoutline",
      ],
    },
    // {
    //   intent: "neutral",
    //   variant: "surface",
    //   className: [
    // "bg-neutral-surface",
    // "text-neutral-fgsubtle",
    // "shadow-border shadow-neutral-borderoutline",
    //   ],
    // },

    // outline
    {
      intent: "primary",
      variant: "outline",
      className: [
        "text-primary-fgsubtle",
        "shadow-border shadow-primary-borderoutline",
      ],
    },
    {
      intent: "secondary",
      variant: "outline",
      className: [
        "text-secondary-fgsubtle",
        "shadow-border shadow-secondary-borderoutline",
      ],
    },
    {
      intent: "accent",
      variant: "outline",
      className: [
        "text-accent-fgsubtle",
        "shadow-border shadow-accent-borderoutline",
      ],
    },
    // {
    //   intent: "info",
    //   variant: "outline",
    //   className: [
    //     "text-info-fgsubtle",
    //     "shadow-border shadow-info-borderoutline",
    //   ],
    // },
    // {
    //   intent: "success",
    //   variant: "outline",
    //   className: [
    //     "text-success-fgsubtle",
    //     "shadow-border shadow-success-borderoutline",
    //   ],
    // },
    // {
    //   intent: "warning",
    //   variant: "outline",
    //   className: [
    //     "text-warning-fgsubtle",
    //     "shadow-border shadow-warning-borderoutline",
    //   ],
    // },
    {
      intent: "desctructive",
      variant: "outline",
      className: [
        "text-desctructive-fgsubtle",
        "shadow-border shadow-desctructive-borderoutline",
      ],
    },
    // {
    //   intent: "neutral",
    //   variant: "outline",
    //   className: [
    //     "text-neutral-fgsubtle",
    //     "shadow-neutral-border shadow-neutral-borderoutline",
    //   ],
    // },

    // ghost
    {
      intent: "primary",
      variant: "ghost",
      className: ["text-primary-fgsubtle"],
    },
    {
      intent: "secondary",
      variant: "ghost",
      className: ["text-secondary-fgsubtle"],
    },
    {
      intent: "accent",
      variant: "ghost",
      className: ["text-accent-fgsubtle"],
    },
    // {
    //   intent: "info",
    //   variant: "ghost",
    //   className: ["text-info-fgsubtle"],
    // },
    // {
    //   intent: "success",
    //   variant: "ghost",
    //   className: ["text-success-fgsubtle"],
    // },
    // {
    //   intent: "warning",
    //   variant: "ghost",
    //   className: ["text-warning-fgsubtle"],
    // },
    {
      intent: "desctructive",
      variant: "ghost",
      className: ["text-desctructive-fgsubtle"],
    },
    // {
    //   intent: "neutral",
    //   variant: "ghost",
    //   className: ["text-neutral-fgsubtle"],
    // },
  ],
  defaultVariants: {
    size: "sm",
    weight: "regular",
    variant: "soft",
    radius: "small",
  },
});
