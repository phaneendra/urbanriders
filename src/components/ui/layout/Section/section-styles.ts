import { cva } from "class-variance-authority";

export const sectionStyles = cva(["box-border", "shrink-0"], {
  variants: {
    display: {
      none: "none",
      block: "block",
    },
    size: {
      1: ["pt-5", "pb-5"],
      2: ["pt-7", "pb-7"],
      3: ["pt-10", "pb-10"],
    },
  },
});
