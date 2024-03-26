import { ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      shadow: [
        {
          shadow: [
            "border-b",
            "border-t",
            "border-r",
            "border-l",
            "border-a",
            "inner-0",
            "inner-1",
            "inner-2",
            "inner-3",
            "inner-4",
          ],
        },
      ],
      rounded: [
        {
          rounded: [
            "sm-1",
            "sm-2",
            "sm-3",
            "sm-4",
            "sm-5",
            "sm-6",
            "sm-7",
            "md-1",
            "md-2",
            "md-3",
            "md-4",
            "md-5",
            "md-6",
            "md-7",
            "lg-1",
            "lg-2",
            "lg-3",
            "lg-4",
            "lg-5",
            "lg-6",
            "lg-7",
            "xl-1",
            "xl-2",
            "xl-3",
            "xl-4",
            "xl-5",
            "xl-6",
            "xl-7",
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}
