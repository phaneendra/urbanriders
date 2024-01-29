import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const sheetOverlayStyles = cn([
  "fixed inset-0 flex items-center justify-center p-4",
  "after:bg-overlay after:absolute after:inset-0 after:content-['']",
  "after:data-[state=open]:animate-in after:data-[state=open]:fade-in after:data-[state=open]:ease-show after:data-[state=open]:duration-[400ms]",
  "after:data-[state=closed]:animate-out after:data-[state=closed]:fade-out after:data-[state=closed]:ease-show after:data-[state=closed]:duration-[250ms]",
  "data-[state=closed]:animate-dialog-overlay-no-op ",
]);

export const sheetContentStyles = cva(
  [
    "fixed z-50 gap-4",
    "bg-panel p-6 shadow-2xl",
    "transition ease-in-out",
    "data-[state=open]:animate-in data-[state=open]:duration-500",
    "data-[state=closed]:animate-out data-[state=closed]:duration-300",
  ],
  {
    variants: {
      side: {
        top: [
          "inset-x-0 top-0 border-b",
          "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        ],
        bottom: [
          "inset-x-0 bottom-0 border-t",
          "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        ],
        left: [
          "inset-y-0 left-0 h-full w-3/4 border-r",
          "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
          "sm:max-w-sm",
        ],
        right: [
          "inset-y-0 right-0 h-full w-3/4 border-l",
          "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
          "sm:max-w-sm",
        ],
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
);
