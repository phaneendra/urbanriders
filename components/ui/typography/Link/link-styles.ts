import { cva } from "class-variance-authority";

export const linkStyles = cva(
  [
    "cursor-pointer",
    "text-fglink",
    "no-underline",
    "decoration-solid",
    "decoration-[min(2px, max(1px, 0.05em))",
    "underline-offset-[calc(0.025em + 2px)]",
    "decoration-divider",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    "focus-visible:outline-uisolid",
    "focus-visible:no-underline",
  ],
  {
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
        primary:
          "text-primary-fglink decoration-primary-divider focus-visible:outline-primary-uisolid",
        secondary:
          "text-secondary-fglink decoration-divider focus-visible:outline-secondary-solid",
        accent:
          "text-accent-fglink decoration-accent-divider focus-visible:outline-accent-uisolid",
        // info: "text-info-fglink decoration-info-divider focus-visible:outline-info-uisolid",
        // success:
        //   "text-success-fglink decoration-success-divider focus-visible:outline-success-uisolid",
        // warning:
        //   "text-warning-fglink decoration-warning-divider focus-visible:outline-warning-uisolid",
        desctructive:
          "text-desctructive-fglink decoration-desctructive-divider focus-visible:outline-desctructive-uisolid",
        // neutral:
        //   "text-neutral-fglink decoration-neutral-divider focus-visible:outline-neutral-uisolid",
        // natural:
        //   "text-natural-fglink decoration-natural-divider focus-visible:outline-natural-solid",
      },
      underline: {
        auto: "hover:underline",
        hover: "hover:underline",
        always: "underline",
      },
    },
  }
);
