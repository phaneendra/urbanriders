import { ClassValue, clsx } from "clsx";
import { extendTailwindMerge, twMerge } from "tailwind-merge";

import { env } from "@/env.mjs";

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

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function absoluteUrl(path: string) {
  return `${env.NEXT_PUBLIC_APP_URL}${path}`;
}
