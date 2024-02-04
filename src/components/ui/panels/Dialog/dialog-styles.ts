import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const dialogOverlayStyles = cn([
  "fixed inset-0 flex items-center justify-center p-4",
  "after:bg-overlay after:absolute after:inset-0 after:content-['']",
  "after:data-[state=open]:animate-in after:data-[state=open]:fade-in after:data-[state=open]:ease-show after:data-[state=open]:duration-[400ms]",
  "after:data-[state=closed]:animate-out after:data-[state=closed]:fade-out after:data-[state=closed]:ease-show after:data-[state=closed]:duration-[250ms]",
  "data-[state=closed]:animate-dialog-overlay-no-op ",
]);

export const dialogContentStyles = cva(
  [
    "overflow-auto bg-panel shadow-2xl relative z-1 box-border",
    "w-full max-w-[580px] max-h-[calc(100vh - calc(16px * var(--scaling)) - calc(16px * var(--scaling)))]",
    "data-[state=open]:animate-dialog-content-show",
    "data-[state=closed]:animate-dialog-content-hide ",
  ],
  {
    variants: {
      size: {
        xs: "p-3 rounded-sm",
        sm: "p-4 rounded",
        base: "p-6 rounded-md",
        lg: "p-8 rounded-lg",
      },
    },
    defaultVariants: {
      size: "base",
    },
  }
);
