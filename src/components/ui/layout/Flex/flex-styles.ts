import { cva } from "class-variance-authority";

export const flexStyles = cva(["box-border", "flex", "justify-start"], {
  variants: {
    display: {
      inline: "inline",
      inlineFlex: "inline-flex",
      flex: "flex",
    },
    direction: {
      row: "flex-row",
      column: "flex-col",
      rowReverse: "flex-row-reverse",
      colReverse: "flex-col-reverse",
    },
    align: {
      center: "items-center",
      start: "items-start",
      end: "items-end",
      baseline: "items-baseline",
      stretch: "items-stretch",
    },
    justify: {
      start: "justify-start",
      end: "justify-end",
      center: "justify-center",
      stretch: "justify-stretch",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
      normal: "justify-normal",
    },
    wrap: {
      wrap: "flex-wrap",
      reverse: "flex-wrap-reverse",
      nowrap: "flex-nowrap",
    },
    gap: {
      "0": "gap-0",
      px: "gap-px",
      "1": "gap-1",
      "2": "gap-2",
      "3": "gap-3",
      "4": "gap-4",
      "5": "gap-5",
      "6": "gap-6",
      "7": "gap-7",
      "8": "gap-8",
      "9": "gap-9",
    },
    gapX: {
      0: "gap-x-0",
      px: "gap-x-px",
      1: "gap-x-1",
      2: "gap-x-2",
      3: "gap-x-3",
      4: "gap-x-4",
      5: "gap-x-5",
      6: "gap-x-6",
      7: "gap-x-7",
      8: "gap-x-8",
      9: "gap-x-9",
    },
    gapY: {
      0: "gap-y-0",
      px: "gap-y-px",
      1: "gap-y-1",
      2: "gap-y-2",
      3: "gap-y-3",
      4: "gap-y-4",
      5: "gap-y-5",
      6: "gap-y-6",
      7: "gap-y-7",
      8: "gap-y-8",
      9: "gap-y-9",
    },
  },
});