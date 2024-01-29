import { forwardRef, Ref, useMemo } from "react";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { usePropId } from "@/hooks/use-prop-id";

import { codeStyles } from "./code-styles";

export interface CodeProps
  extends React.HTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof codeStyles> {
  asChild?: boolean;
}

export type CodeElement = React.ElementRef<"code">;

export const Code = forwardRef<CodeElement, CodeProps>(
  (props: CodeProps, forwardedRef) => {
    const id = usePropId(props.id);
    const {
      children,
      className,
      size,
      weight,
      align,
      intent,
      asChild = false,
      ...aditionalProps
    } = props;

    const classes = cn(codeStyles({ size, weight, align, intent }), [
      className,
    ]);

    const Comp = asChild ? Slot : "code";

    return (
      <Comp id={id} ref={forwardedRef} className={classes} {...aditionalProps}>
        {children}
      </Comp>
    );
  }
);

Code.displayName = "Code";
