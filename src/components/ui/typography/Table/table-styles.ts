import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const tableRootStyles = cva(
  [
    "w-full text-left align-top box-border",
    "border-collapse border-spacing-0",
    "h-0",
  ],
  {
    variants: {
      size: {
        "1": "text-sm",
        "2": "text-sm",
        "3": "text-base",
      },
      radius: {
        none: "rounded-none",
        small: "rounded-sm-1",
        medium: "rounded-md-1",
        large: "rounded-lg-1",
        full: "rounded-full",
      },
      variant: {
        surface: [
          "border border-solid border-divider",
          "bg-panel bg-clip-padding relative",
        ],
        ghost: "",
      },
    },
  }
);

export const tableHeaderStyles = cn(["align-[inherit]"]);
export const tableBodyStyles = cn(["align-[inherit]"]);
export const tableRowStyles = cn(["align-[inherit]"]);
export const tableCellStyles = cva(
  [
    "bg-transperent box-border align-[inherit]",
    "shadow-divider shadow-[inset_0_-1px]",
  ],
  {
    variants: {
      size: {
        "1": "p-2 h-9",
        "2": "p-3 h-11",
        "3": "px-3 py-4 h-12",
      },
    },
  }
);
export const tableColumnHeaderStyles = cn(["font-bold"]);
export const tableRowHeaderStyles = cn(["font-normal"]);

/*
Ghost is the transparent one
Surface is with surface color
Translucent is with translusant color
Soft is with 

*/
