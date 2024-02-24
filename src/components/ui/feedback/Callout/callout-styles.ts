import { cva } from "class-variance-authority";

export const calloutIconStyles = "flex items-center col-start-[-2]";
export const calloutTextStyles = "col-start-[-1]";

export const calloutStyles = cva(
  ["border-box grid items-start justify-start text-left text-fg mb-3"],
  {
    variants: {
      size: {
        xs: "gap-x-2 gap-y-2 p-3",
        sm: "gap-x-2 gap-y-3 p-4",
        base: "gap-x-3 gap-y-4 p-6",
      },
      radius: {
        none: "rounded-none",
        small: "rounded-sm",
        medium: "rounded-md",
        large: "rounded-lg",
        full: "rounded-full",
      },
      intent: {
        primary: "text-primary-fglink",
        secondary: "text-secondary-fglink",
        accent: "text-accent-fglink",
        // info: "text-info-fglink",
        // success: "text-success-fglink",
        // warning: "text-warning-fglink",
        destructive: "text-destructive-fglink",
        // neutral: "text-neutral-fglink",
      },
      variant: {
        soft: ["bg-uisoft"],
        surface: ["bg-surface", "shadow-inner shadow-borderoutline"],
        outline: ["shadow-inner shadow-borderoutline"],
      },
    },
    compoundVariants: [
      // soft
      {
        intent: "primary",
        variant: "soft",
        className: ["bg-primary-uisoft", "text-primary-fglink"],
      },
      {
        intent: "secondary",
        variant: "soft",
        className: ["bg-secondary-uisoft", "text-secondary-fglink"],
      },
      {
        intent: "accent",
        variant: "soft",
        className: ["bg-accent-uisoft", "text-accent-fglink"],
      },
      // {
      //   intent: "info",
      //   variant: "soft",
      //   className: [
      //     "bg-accent-uisoft",
      //   ],
      // },
      // {
      //   intent: "success",
      //   variant: "soft",
      //   className: [
      //     "bg-accent-uisoft",
      //   ],
      // },
      // {
      //   intent: "warning",
      //   variant: "soft",
      //   className: [
      //     "bg-accent-uisoft",
      //   ],
      // },
      {
        intent: "destructive",
        variant: "soft",
        className: ["bg-destructive-uisoft", "text-destructive-fglink"],
      },
      // {
      //   intent: "neutral",
      //   variant: "soft",
      //   className: [
      //     "bg-destructive-uisoft",
      //   ],
      // },

      // surface
      {
        intent: "primary",
        variant: "surface",
        className: [
          "bg-primary-surface",
          "text-primary-fglink",
          "shadow-inner shadow-primary-borderoutline",
        ],
      },
      {
        intent: "secondary",
        variant: "surface",
        className: [
          "bg-secondary-surface",
          "text-secondary-fglink",
          "shadow-inner shadow-secondary-borderoutline",
        ],
      },
      {
        intent: "accent",
        variant: "surface",
        className: [
          "bg-accent-surface",
          "text-accent-fglink",
          "shadow-inner shadow-accent-borderoutline",
        ],
      },
      // {
      //   intent: "info",
      //   variant: "surface",
      //   className: [
      //     "bg-surface",
      //     "shadow-inner shadow-borderoutline",
      //   ],
      // },
      // {
      //   intent: "success",
      //   variant: "surface",
      //   className: [
      //     "bg-surface",
      //     "shadow-inner shadow-borderoutline",
      //   ],
      // },
      // {
      //   intent: "warning",
      //   variant: "surface",
      //   className: [
      //     "bg-surface",
      //     "shadow-inner shadow-borderoutline",
      //   ],
      // },
      {
        intent: "destructive",
        variant: "surface",
        className: [
          "bg-destructive-surface",
          "text-destructive-fglink",
          "shadow-inner shadow-destructive-borderoutline",
        ],
      },
      // {
      //   intent: "neutral",
      //   variant: "surface",
      //   className: [
      //     "bg-neutral-surface",
      //     "shadow-inner shadow-borderoutline",
      //   ],
      // },

      // outline
      {
        intent: "primary",
        variant: "outline",
        className: [
          "text-primary-fglink",
          "shadow-inner shadow-primary-borderoutline",
        ],
      },
      {
        intent: "secondary",
        variant: "outline",
        className: [
          "text-secondary-fglink",
          "shadow-inner shadow-secondary-borderoutline",
        ],
      },
      {
        intent: "accent",
        variant: "outline",
        className: [
          "text-accent-fglink",
          "shadow-inner shadow-accent-borderoutline",
        ],
      },
      // {
      //   intent: "info",
      //   variant: "outline",
      //   className: [
      //     "shadow-inner shadow-info-borderoutline",
      //   ],
      // },
      // {
      //   intent: "success",
      //   variant: "outline",
      //   className: [
      //     "shadow-inner shadow-success-borderoutline",
      //   ],
      // },
      // {
      //   intent: "warning",
      //   variant: "outline",
      //   className: [
      //     "shadow-inner shadow-warning-borderoutline",
      //   ],
      // },
      {
        intent: "destructive",
        variant: "outline",
        className: [
          "text-destructive-fglink",
          "shadow-inner shadow-destructive-borderoutline",
        ],
      },
      // {
      //   intent: "neutral",
      //   variant: "outline",
      //   className: [
      //     "shadow-inner shadow-primary-borderoutline",
      //   ],
      // },

      // sizes and radius
      {
        size: "xs",
        radius: "small",
        className: "rounded-sm-1",
      },
      {
        size: "sm",
        radius: "small",
        className: "rounded-sm-2",
      },
      {
        size: "base",
        radius: "small",
        className: "rounded-sm-3",
      },
      {
        size: "xs",
        radius: "medium",
        className: "rounded-md-1",
      },
      {
        size: "sm",
        radius: "medium",
        className: "rounded-md-2",
      },
      {
        size: "base",
        radius: "medium",
        className: "rounded-md-3",
      },
      {
        size: "xs",
        radius: "large",
        className: "rounded-lg-1",
      },
      {
        size: "sm",
        radius: "large",
        className: "rounded-lg-2",
      },
      {
        size: "base",
        radius: "large",
        className: "rounded-lg-3",
      },
    ],
    defaultVariants: {
      size: "sm",
      radius: "medium",
      variant: "soft",
    },
  }
);
