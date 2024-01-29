import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const scrollAreaStyles = cn([
  "flex h-full w-full flex-col overflow-hidden",
]);
export const scrollAreaViewportStyles = cn([
  "group h-full w-full overscroll-x-contain",
]);
export const scrollAreaViewportFocusRingStyles = cn([
  "group-focus-visible:absolute",
  "group-focus-visible:inset-0",
  "group-focus-visible:pointer-events-none",
  "group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-[-2px]",
  "group-focus-visible:outline-uisolid",
]);
export const scrollBarStyles = cva(
  [
    "m-1",
    "flex select-none touch-none",
    "bg-uisoft",
    "duration-150 ease-out",
    "data-[state=visible]:animate-in data-[state=visible]:fade-in",
    "data-[state=hidden]:animate-out data-[state=visible]:fade-out",
  ],
  {
    variants: {
      size: {
        "1": "",
        "2": "",
        "3": "",
      },
      radius: {
        none: "rounded-none",
        small: "rounded-sm-1",
        medium: "rounded-md-1",
        large: "rounded-lg-1",
        full: "rounded-full",
      },
      variant: {
        horizontal: ["flex-row"],
        vertical: ["flex-col"],
      },
    },
    compoundVariants: [
      {
        variant: "horizontal",
        size: "1",
        className: ["h-1"],
      },
      {
        variant: "horizontal",
        size: "2",
        className: ["h-2"],
      },
      {
        variant: "horizontal",
        size: "3",
        className: ["h-3"],
      },
      {
        variant: "vertical",
        size: "1",
        className: ["w-1"],
      },
      {
        variant: "vertical",
        size: "2",
        className: ["w-2"],
      },
      {
        variant: "vertical",
        size: "3",
        className: ["w-3"],
      },
      // size and radius
      // {
      //   radius: "small",
      //   size: "1",
      //   className: ["rounded-sm-1"],
      // },
      // {
      //   radius: "small",
      //   size: "2",
      //   className: ["rounded-sm-2"],
      // },
      // {
      //   radius: "small",
      //   size: "3",
      //   className: ["rounded-sm-3"],
      // },
      // {
      //   radius: "medium",
      //   size: "1",
      //   className: ["rounded-md-1"],
      // },
      // {
      //   radius: "medium",
      //   size: "2",
      //   className: ["rounded-md-2"],
      // },
      // {
      //   radius: "medium",
      //   size: "3",
      //   className: ["rounded-md-3"],
      // },
      // {
      //   radius: "large",
      //   size: "1",
      //   className: ["rounded-lg-1"],
      // },
      // {
      //   radius: "large",
      //   size: "2",
      //   className: ["rounded-lg-2"],
      // },
      // {
      //   radius: "large",
      //   size: "3",
      //   className: ["rounded-lg-3"],
      // },
    ],
    defaultVariants: {
      size: "1",
      variant: "vertical",
      radius: "medium",
    },
  }
);
export const scrollBarThumbStyles = cn([
  "relative",
  "bg-borderoutlinehover",
  "rounded-[inherit]",
  "before:absolute before:content-['']",
  "before:translate-x-[-50%] before:translate-y-[-50%]",
  "before:left-1/2 before:top-1/2",
  "before:h-full before:min-h-4 before:w-full before:min-w-4",
]);
