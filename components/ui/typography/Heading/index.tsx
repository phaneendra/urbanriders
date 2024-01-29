import { forwardRef, Ref, useMemo } from "react";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { usePropId } from "@/hooks/use-prop-id";

import { headingStyles } from "./heading-styles";

export interface HeadingProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof headingStyles> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  asChild?: boolean;
}

export type HeadingElement = React.ElementRef<"h1">;

export const Heading = forwardRef<HeadingElement, HeadingProps>(
  (props: HeadingProps, forwardedRef) => {
    const id = usePropId(props.id);
    const {
      children,
      className,
      size,
      weight,
      align,
      fluid,
      asChild = false,
      as: Tag = "h1",
      ...aditionalProps
    } = props;

    const classes = cn(headingStyles({ size, weight, align, fluid }), [
      className,
    ]);

    const Comp = asChild ? Slot : Tag;

    return (
      <Comp id={id} ref={forwardedRef} className={classes} {...aditionalProps}>
        {children}
      </Comp>
    );
  }
);

Heading.displayName = "Heading";
