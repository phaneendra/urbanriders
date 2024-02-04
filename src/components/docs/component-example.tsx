"use client";

import * as React from "react";
import { RadixUISurfaceBg } from "@/assets/backgrounds/radix-ui-surface";

import { ScrollArea } from "@/components/ui/elements/ScrollArea";
import { Box } from "@/components/ui/layout/Box";
import { Flex } from "@/components/ui/layout/Flex";

interface ComponentExampleProps extends React.HTMLAttributes<HTMLDivElement> {
  scroll: boolean;
  background: boolean;
}

// export function ComponentExample({
//   children,
//   className,
//   ...props
// }: ComponentExampleProps) {
//   return (
//     // <div
//     //   className={cn("group relative my-4 flex flex-col space-y-2", className)}
//     //   {...props}
//     // >
//     <div className="relative my-4 rounded-md border" {...props}>
//       <ScrollArea.Root className="overflow-hidden rounded">
//         <ScrollArea.Viewport className="h-full w-full rounded p-4">
//           {children}
//         </ScrollArea.Viewport>
//         <ScrollArea.Scrollbar
//           className="bg-uisoft hover:bg-uisofthover flex touch-none select-none p-0.5 transition-colors duration-[160ms] ease-out data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col"
//           orientation="vertical"
//         >
//           <ScrollArea.Thumb className="bg-uisolidhover relative flex-1 rounded-[10px] before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']" />
//         </ScrollArea.Scrollbar>
//         <ScrollArea.Scrollbar
//           className="bg-uisoft hover:bg-uisofthover flex touch-none select-none p-0.5 transition-colors duration-[160ms] ease-out data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col"
//           orientation="horizontal"
//         >
//           <ScrollArea.Thumb className="bg-uisolidhover relative flex-1 rounded-[10px] before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']" />
//         </ScrollArea.Scrollbar>
//         <ScrollArea.Corner className="bg-uisofthover" />
//       </ScrollArea.Root>
//     </div>
//     // </div>
//   );
// }

export function ComponentExample({
  children,
  className,
  scroll = true,
  background = false,
  ...props
}: ComponentExampleProps) {
  return (
    <div className="relative my-4 rounded-md border" {...props}>
      {scroll ? (
        <ScrollArea scrollbars="both">
          {background ? (
            <Flex direction="column">
              <Flex justify="center" className="relative">
                <Flex
                  align="center"
                  justify="center"
                  className="absolute inset-0 overflow-hidden"
                >
                  <RadixUISurfaceBg id="1" width="100%" height="200%" />
                </Flex>
                {children}
              </Flex>
            </Flex>
          ) : (
            <Box className="p-4 pr-8">{children}</Box>
          )}
        </ScrollArea>
      ) : (
        <Box className="p-4">{children}</Box>
      )}
    </div>
  );
}
