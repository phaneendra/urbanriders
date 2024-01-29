import { forwardRef, Ref, useMemo } from "react";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { usePropId } from "@/hooks/use-prop-id";

import { sectionStyles } from "./section-styles";

export interface SectionProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sectionStyles> {
  asChild?: boolean;
}

export type SectionElement = React.ElementRef<"section">;

export const Section = forwardRef<SectionElement, SectionProps>(
  (props: SectionProps, forwardedRef) => {
    const id = usePropId(props.id);
    const {
      children,
      className,
      display,
      size,
      asChild = false,
      ...aditionalProps
    } = props;

    const classes = useMemo(() => {
      return cn(sectionStyles({ display, size }), [className]);
    }, [display, size, className]);

    const Comp = asChild ? Slot : "section";

    return (
      <Comp id={id} ref={forwardedRef} className={classes} {...aditionalProps}>
        {children}
      </Comp>
    );
  }
);

Section.displayName = "Section";
