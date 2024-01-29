import { forwardRef, Ref, useMemo } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps } from 'class-variance-authority';

import { cn } from "@/lib/utils";
import { usePropId } from "@/hooks/use-prop-id";
import { boxStyles } from './Box.styles';

export interface BoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof boxStyles> {
  asChild?: boolean;
}

export type BoxElement = React.ElementRef<'div'>;

export const Box = forwardRef<BoxElement, BoxProps>((props: BoxProps, forwardedRef) => {
  const id = usePropId(props.id);
  const { children, className, display, asChild = false, ...aditionalProps } = props;

  const classes = cn(boxStyles({ display }), [className]);

  const Comp = asChild ? Slot : 'div';

  return (
    <Comp id={id} ref={forwardedRef} className={classes} {...aditionalProps}>
      {children}
    </Comp>
  );
});

Box.displayName = 'Box';
