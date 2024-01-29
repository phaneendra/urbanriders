import { cva } from "class-variance-authority";

export const headingStyles = cva("box-border", {
  variants: {
    fluid: {
      "display-1": "text-fluid-3xl font-heading",
      "display-2": "text-fluid-2xl font-heading",
      xl: "text-fluid-xl font-heading",
      lg: "text-fluid-lg font-heading",
      md: "text-fluid-md font-heading",
      base: "text-fluid-base font-heading",
      xs: "text-fluid-xs font-heading",
    },
    size: {
      xs: "text-xs font-heading",
      sm: "text-sm font-heading",
      base: "text-base font-heading",
      "6": "text-lg font-heading", // h6
      "5": "text-lg xs:text-xl font-heading", // h5
      "4": "text-xl xs:text-2xl font-heading", // h4
      "3": "text-2xl xs:text-3xl font-heading", // h3
      "2": "text-3xl xs:text-4xl font-heading", // h2
      "1": "text-4xl xs:text-5xl font-heading", // h1
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
  },
  defaultVariants: {
    fluid: "base",
    weight: "bold",
  },
});
