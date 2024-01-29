"use client";

import * as React from "react";
import * as ScrollArea from "@radix-ui/react-scroll-area";

import { cn } from "@/lib/utils";

// import { ScrollArea, ScrollBar } from "@/components/ui/elements/ScrollArea";

interface ComponentExampleProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ComponentExample({
  children,
  className,
  ...props
}: ComponentExampleProps) {
  return (
    // <div
    //   className={cn("group relative my-4 flex flex-col space-y-2", className)}
    //   {...props}
    // >
    <div className="relative my-4 rounded-md border" {...props}>
      <ScrollArea.Root className="overflow-hidden rounded">
        <ScrollArea.Viewport className="h-full w-full rounded p-4">
          {children}
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          className="bg-uisoft hover:bg-uisofthover flex touch-none select-none p-0.5 transition-colors duration-[160ms] ease-out data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col"
          orientation="vertical"
        >
          <ScrollArea.Thumb className="bg-uisolidhover relative flex-1 rounded-[10px] before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Scrollbar
          className="bg-uisoft hover:bg-uisofthover flex touch-none select-none p-0.5 transition-colors duration-[160ms] ease-out data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col"
          orientation="horizontal"
        >
          <ScrollArea.Thumb className="bg-uisolidhover relative flex-1 rounded-[10px] before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner className="bg-uisofthover" />
      </ScrollArea.Root>
    </div>
    // </div>
  );
}
