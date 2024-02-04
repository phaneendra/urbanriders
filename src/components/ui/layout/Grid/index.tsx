import { forwardRef, Ref, useMemo } from "react";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { usePropId } from "@/hooks/use-prop-id";

import { gridItemStyles, gridStyles } from "./grid-styles";

export interface GridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridStyles> {
  asChild?: boolean;
}

export interface GridItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridItemStyles> {
  asChild?: boolean;
}

export type GridElement = React.ElementRef<"div">;

export const Grid = forwardRef<GridElement, GridProps>(
  (props: GridProps, forwardedRef) => {
    const id = usePropId(props.id);
    const {
      children,
      className,
      display,
      cols,
      row,
      flow,
      align,
      justify,
      gap,
      gapX,
      gapY,
      asChild = false,
      ...aditionalProps
    } = props;

    const classes = cn(
      gridStyles({ display, cols, row, flow, align, justify, gap, gapX, gapY }),
      [className]
    );

    const Comp = asChild ? Slot : "div";

    return (
      <Comp id={id} ref={forwardedRef} className={classes} {...aditionalProps}>
        {children}
      </Comp>
    );
  }
);

Grid.displayName = "Grid";

export const GridItem = forwardRef<GridElement, GridItemProps>(
  (props: GridItemProps, forwardedRef) => {
    const id = usePropId(props.id);
    const {
      children,
      className,
      span,
      start,
      end,
      asChild = false,
      ...aditionalProps
    } = props;

    const classes = cn(gridItemStyles({ span, start, end }));

    const Comp = asChild ? Slot : "div";

    return (
      <Comp id={id} ref={forwardedRef} className={classes} {...aditionalProps}>
        {children}
      </Comp>
    );
  }
);

GridItem.displayName = "GridItem";
