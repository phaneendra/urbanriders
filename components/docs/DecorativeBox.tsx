import { useMemo } from "react";

import { cn } from "@/lib/utils";
import { Box, BoxProps } from "@/components/ui/layout/Box";

export const DecorativeBox = (props: BoxProps) => {
  const { children, className, ...aditionalProps } = props;

  const classes = useMemo(() => {
    return cn(
      [
        "h-full",
        "border-border border border-solid",
        "rounded-md",
        "bg-ui",
        "bg-hero-pattern-diagonal-lines",
      ],
      [className]
    );
  }, [className]);

  return (
    <Box className={classes} {...aditionalProps}>
      {children}
    </Box>
  );
};
DecorativeBox.displayName = "DecorativeBox";
