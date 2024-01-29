import { forwardRef, Ref, useMemo } from "react";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { usePropId } from "@/hooks/use-prop-id";

import { textStyles } from "./text-styles";

export * from "./text-styles";

type TextAsChildProps = {
  asChild?: boolean;
  as?: never;
} & React.HTMLAttributes<HTMLSpanElement>;
type TextSpanProps = {
  as?: "span";
  asChild?: never;
} & React.HTMLAttributes<HTMLSpanElement>;
type TextDivProps = {
  as: "div";
  asChild?: never;
} & React.HTMLAttributes<HTMLDivElement>;
type TextLabelProps = {
  as: "label";
  asChild?: never;
} & React.HTMLAttributes<HTMLLabelElement>;
type TextPProps = {
  as: "p";
  asChild?: never;
} & React.HTMLAttributes<HTMLParagraphElement>;

export type TextProps = VariantProps<typeof textStyles> &
  (
    | TextAsChildProps
    | TextSpanProps
    | TextDivProps
    | TextLabelProps
    | TextPProps
  );

export type TextElement = React.ElementRef<"span">;

export const Text = forwardRef<TextElement, TextProps>(
  (props: TextProps, forwardedRef) => {
    const id = usePropId(props.id);
    const {
      children,
      className,
      size,
      weight,
      align,
      intent,
      asChild = false,
      as: Tag = "span",
      ...aditionalProps
    } = props;

    const classes = cn(textStyles({ size, weight, align, intent }), [
      className,
    ]);

    return (
      <Slot id={id} ref={forwardedRef} className={classes} {...aditionalProps}>
        {asChild ? children : <Tag>{children}</Tag>}
      </Slot>
    );
  }
);

Text.displayName = "Text";
