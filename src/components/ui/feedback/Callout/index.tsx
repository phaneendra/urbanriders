"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { usePropId } from "@/hooks/use-prop-id";
import { Text, textStyles } from "@/components/ui/typography/Text";

import {
  calloutIconStyles,
  calloutStyles,
  calloutTextStyles,
} from "./callout-styles";

export interface CalloutProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof calloutStyles> {
  asChild?: boolean;
}

type CalloutContextValue = VariantProps<typeof calloutStyles>;
const CalloutContext = React.createContext<CalloutContextValue>({});

export const CalloutRoot = React.forwardRef<HTMLDivElement, CalloutProps>(
  (
    {
      children,
      className,
      variant,
      size,
      intent,
      radius,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const id = usePropId(props.id);
    const classes = cn(calloutStyles({ variant, size, intent, radius }), [
      className,
    ]);

    const Comp = asChild ? Slot : "div";

    return (
      <Comp id={id} ref={ref} className={classes} {...props}>
        <CalloutContext.Provider
          value={React.useMemo(
            () => ({ variant, size, intent, radius }),
            [variant, size, intent, radius]
          )}
        >
          {children}
        </CalloutContext.Provider>
      </Comp>
    );
  }
);

CalloutRoot.displayName = "CalloutRoot";

type CalloutIconElement = React.ElementRef<"div">;
interface CalloutIconProps extends React.HTMLAttributes<HTMLDivElement> {}
export const CalloutIcon = React.forwardRef<
  CalloutIconElement,
  CalloutIconProps
>(({ className, ...props }, forwardedRef) => {
  const { intent, size } = React.useContext(CalloutContext);
  return (
    <Text asChild intent={intent} size={size}>
      <div
        {...props}
        className={cn(calloutIconStyles, className)}
        ref={forwardedRef}
      />
    </Text>
  );
});
CalloutIcon.displayName = "CalloutIcon";

type CalloutTextElement = React.ElementRef<"div">;
type CalloutTextProps = VariantProps<typeof textStyles> &
  React.HTMLAttributes<HTMLParagraphElement>;
export const CalloutText = React.forwardRef<
  CalloutTextElement,
  CalloutTextProps
>(({ className, ...props }, forwardedRef) => {
  const { intent, size } = React.useContext(CalloutContext);
  return (
    <Text
      as="div"
      size={size}
      intent={intent}
      ref={forwardedRef}
      className={cn(calloutTextStyles, className)}
      {...props}
    />
  );
});
CalloutText.displayName = "CalloutText";

// interface CalloutProps {
//   icon?: string;
//   children?: React.ReactNode;
//   type?: "default" | "warning" | "danger";
// }

// export function Callout({
//   children,
//   icon,
//   type = "default",
//   ...props
// }: CalloutProps) {
//   return (
//     <div
//       className={cn("my-6 flex items-start rounded-md border border-l-4 p-4", {
//         "border-red-900 bg-red-50": type === "danger",
//         "border-yellow-900 bg-yellow-50": type === "warning",
//       })}
//       {...props}
//     >
//       {icon && <span className="mr-4 text-2xl">{icon}</span>}
//       <div>{children}</div>
//     </div>
//   );
// }
