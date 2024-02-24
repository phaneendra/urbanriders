import * as React from "react";
import { VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Box } from "@/components/ui/layout/Box";

import { preStyles } from "./pre-styles";

type PreProps = React.ComponentPropsWithoutRef<typeof Box> &
  React.ComponentPropsWithoutRef<"pre"> &
  VariantProps<typeof preStyles>;

const Pre = React.forwardRef<HTMLPreElement, PreProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Box asChild {...props}>
        <pre ref={ref} className={cn(preStyles(), className)}>
          {children}
        </pre>
      </Box>
    );
  }
);
Pre.displayName = "Pre";

export { Pre, preStyles };
