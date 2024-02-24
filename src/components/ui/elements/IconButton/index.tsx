import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

import { iconButtonStyles } from "./icon-button-styles";

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonStyles> {}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    { className, variant, size, weight, intent, align, radius, ...props },
    ref
  ) => {
    return (
      <button
        className={cn(
          iconButtonStyles({
            variant,
            size,
            weight,
            intent,
            align,
            radius,
          }),
          [className]
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
IconButton.displayName = "Button";

export { IconButton, iconButtonStyles };
