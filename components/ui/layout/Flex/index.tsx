import { forwardRef, Ref, useMemo } from "react";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { usePropId } from "@/hooks/use-prop-id";

import { flexStyles } from "./flex-styles";

export interface FlexProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof flexStyles> {
  asChild?: boolean;
}

export type FlexElement = React.ElementRef<"div">;

export const Flex = forwardRef<FlexElement, FlexProps>(
  (props: FlexProps, forwardedRef) => {
    const id = usePropId(props.id);
    const {
      children,
      className,
      display,
      direction,
      align,
      justify,
      wrap,
      gap,
      asChild = false,
      ...aditionalProps
    } = props;

    const classes = useMemo(() => {
      return cn(flexStyles({ display, direction, align, justify, wrap, gap }), [
        className,
      ]);
    }, [display, direction, align, justify, wrap, gap, className]);

    const Comp = asChild ? Slot : "div";

    return (
      <Comp id={id} ref={forwardedRef} className={classes} {...aditionalProps}>
        {children}
      </Comp>
    );
  }
);

Flex.displayName = "Flex";
