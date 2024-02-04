"use client";

import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { usePropId } from "@/hooks/use-prop-id";

import {
  scrollAreaStyles,
  scrollAreaViewportFocusRingStyles,
  scrollAreaViewportStyles,
  scrollBarStyles,
  scrollBarThumbStyles,
} from "./scroll-area-styles";

export interface ScrollAreaProps
  extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>,
    VariantProps<typeof scrollBarStyles> {
  scrollbars: "horizontal" | "vertical" | "both";
}

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  ScrollAreaProps
>(({ className, children, scrollbars, size, radius, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn(scrollAreaStyles, className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className={scrollAreaViewportStyles}>
      {children}
    </ScrollAreaPrimitive.Viewport>
    <div className={scrollAreaViewportFocusRingStyles} />
    {scrollbars !== "vertical" ? (
      <ScrollBar
        orientation="horizontal"
        variant="horizontal"
        size={size}
        radius={radius}
      />
    ) : null}
    {scrollbars !== "horizontal" ? (
      <ScrollBar
        orientation="vertical"
        variant="vertical"
        size={size}
        radius={radius}
      />
    ) : null}
    {scrollbars === "both" ? <ScrollAreaPrimitive.Corner /> : null}
  </ScrollAreaPrimitive.Root>
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

export interface ScrollBarProps
  extends React.ComponentPropsWithoutRef<
      typeof ScrollAreaPrimitive.ScrollAreaScrollbar
    >,
    VariantProps<typeof scrollBarStyles> {}

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  ScrollBarProps
>(({ className, orientation, variant, size, radius, ...props }, ref) => {
  const id = usePropId(props.id);
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      id={id}
      ref={ref}
      orientation={orientation}
      className={cn(scrollBarStyles({ variant, size, radius }), [className])}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb className={scrollBarThumbStyles} />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  );
});
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };

// const ScrollArea = React.forwardRef<
//   React.ElementRef<typeof ScrollAreaPrimitive.Root>,
//   React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
// >(({ className, children, ...props }, ref) => (
//   <ScrollAreaPrimitive.Root
//     ref={ref}
//     className={cn("relative overflow-hidden", className)}
//     {...props}
//   >
//     <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
//       {children}
//     </ScrollAreaPrimitive.Viewport>
//     <ScrollBar />
//     <ScrollAreaPrimitive.Corner />
//   </ScrollAreaPrimitive.Root>
// ));
// ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

// const ScrollBar = React.forwardRef<
//   React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
//   React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
// >(({ className, orientation = "vertical", ...props }, ref) => (
//   <ScrollAreaPrimitive.ScrollAreaScrollbar
//     ref={ref}
//     orientation={orientation}
//     className={cn(
//       "flex touch-none select-none transition-colors",
//       orientation === "vertical" &&
//         "h-full w-2.5 border-l border-l-transparent p-[1px]",
//       orientation === "horizontal" &&
//         "h-2.5 border-t border-t-transparent p-[1px]",
//       className
//     )}
//     {...props}
//   >
//     <ScrollAreaPrimitive.ScrollAreaThumb
//       className={cn(
//         "bg-border relative rounded-full",
//         orientation === "vertical" && "flex-1"
//       )}
//     />
//   </ScrollAreaPrimitive.ScrollAreaScrollbar>
// ));
// ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

// export { ScrollArea, ScrollBar };
