import { cva } from "class-variance-authority";

export const buttonStyles = cva(
  [
    "inline-flex items-center justify-center box-border shrink-0 select-none align-top",
    "data-[disabled=true]:cursor-not-allowed data-[disabled=true]:filter-none",
    "data-[disabled=true]:text-fgdisabled data-[disabled=true]:bg-disabled",

    // "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    // "focus-visible:outline-uisolid",
    // "focus-visible:no-underline",
  ],
  {
    variants: {
      size: {
        xs: "text-xs [&_svg]:w-4 [&_svg]:h-4",
        sm: "text-sm [&_svg]:w-5 [&_svg]:h-5",
        base: "text-base [&_svg]:w-6 [&_svg]:h-6",
        lg: "text-lg [&_svg]:w-7 [&_svg]:h-7",
      },
      weight: {
        light: "font-light",
        regular: "font-normal",
        medium: "font-medium",
        bold: "font-bold",
      },
      align: {
        left: "text-left",
        right: "text-right",
        center: "text-center",
      },
      radius: {
        none: "rounded-none",
        small: "rounded-sm",
        medium: "rounded-md",
        large: "rounded-lg",
        full: "rounded-full",
      },
      intent: {
        primary:
          "text-primary-fglink decoration-primary-divider focus-visible:outline-primary-uisolid",
        secondary:
          "text-secondary-fglink decoration-divider focus-visible:outline-secondary-solid",
        accent:
          "text-accent-fglink decoration-accent-divider focus-visible:outline-accent-uisolid",
        // info: "text-info-fglink decoration-info-divider focus-visible:outline-info-uisolid",
        // success:
        //   "text-success-fglink decoration-success-divider focus-visible:outline-success-uisolid",
        // warning:
        //   "text-warning-fglink decoration-warning-divider focus-visible:outline-warning-uisolid",
        destructive:
          "text-destructive-fglink decoration-destructive-divider focus-visible:outline-destructive-uisolid",
        // neutral:
        //   "text-neutral-fglink decoration-neutral-divider focus-visible:outline-neutral-uisolid",
      },
      variant: {
        solid: [
          "bg-uisolid hover:bg-uisolidhover data-[active=true]:bg-uisolidhover",
          "text-contrast font-medium",
          "data-[active=true]:brightness-[1.1] dark:data-[active=true]:brightness-[1.08] data-[active=true]:saturate-[1.1]",
          "focus-visible:outline-ring",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
          "[&_svg]:opacity-90",
        ],
        soft: [
          "bg-uisoft hover:bg-uisofthover data-[active=true]:bg-uisoftselected",
          "focus-visible:outline-ring",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-1px]",
          "[&_svg]:opacity-90",
        ],
        surface: [
          "bg-surface data-[active=true]:bg-uisoft",
          "shadow-inner shadow-borderoutline",
          "hover:shadow-inner hover:shadow-borderoutlinehover",
          "data-[active=true]:shadow-inner data-[active=true]:shadow-borderoutlinehover",
          "focus-visible:outline-ring",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-1px]",
          "data-[disabled=true]:shadow-inner data-[disabled=true]:shadow-borderdisabled",
          "[&_svg]:opacity-90",
        ],
        outline: [
          "shadow-inner shadow-borderoutline",
          "hover:bg-uisoft data-[active=true]:bg-uisoft",
          "hover:shadow-inner hover:shadow-borderoutlinehover",
          "data-[active=true]:shadow-inner data-[active=true]:shadow-borderoutlinehover",
          "focus-visible:outline-ring",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-1px]",
          "data-[disabled=true]:shadow-inner data-[disabled=true]:shadow-borderdisabled",
          "data-[disabled=true]:bg-transparent",
          "[&_svg]:opacity-90",
        ],
        ghost: [
          "box-content h-fit",
          "hover:bg-uisoft",
          "font-medium",
          "data-[active=true]:bg-uisofthover",
          "focus-visible:outline-ring",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-1px]",
          "data-[disabled=true]:bg-transparent",
        ],
      },
    },
    compoundVariants: [
      // solid
      {
        intent: "primary",
        variant: "solid",
        className: [
          "bg-primary-uisolid hover:bg-primary-uisolidhover data-[active=true]:bg-primary-uisolidhover",
          "focus-visible:outline-primary-ring",
          "text-primary-contrast font-medium",
          "data-[active=true]:brightness-[1.1] dark:data-[active=true]:brightness-[1.08] data-[active=true]:saturate-[1.1]",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        ],
      },
      {
        intent: "secondary",
        variant: "solid",
        className: [
          "bg-secondary-uisolid hover:bg-secondary-uisolidhover data-[active=true]:bg-secondary-uisolidhover",
          "focus-visible:outline-secondary-ring",
          "text-secondary-contrast font-medium",
          "data-[active=true]:brightness-[1.1] dark:data-[active=true]:brightness-[1.08] data-[active=true]:saturate-[1.1]",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        ],
      },
      {
        intent: "accent",
        variant: "solid",
        className: [
          "bg-accent-uisolid hover:bg-accent-uisolidhover data-[active=true]:bg-accent-uisolidhover",
          "focus-visible:outline-accent-ring",
          "text-accent-contrast font-medium",
          "data-[active=true]:brightness-[1.1] dark:data-[active=true]:brightness-[1.08] data-[active=true]:saturate-[1.1]",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        ],
      },
      // {
      //   intent: "info",
      //   variant: "solid",
      //   className: [
      //     "bg-info-uisolid hover:bg-info-uisolidhover data-[active=true]:bg-info-uisolidhover",
      //     "focus-visible:outline-info-ring",
      //   ],
      // },
      // {
      //   intent: "success",
      //   variant: "solid",
      //   className: [
      //     "bg-success-uisolid hover:bg-success-uisolidhover data-[active=true]:bg-success-uisolidhover",
      //     "focus-visible:outline-success-ring",
      //   ],
      // },
      // {
      //   intent: "warning",
      //   variant: "solid",
      //   className: [
      //     "bg-warning-uisolid hover:bg-warning-uisolidhover data-[active=true]:bg-warning-uisolidhover",
      //     "focus-visible:outline-warning-ring",
      //   ],
      // },
      {
        intent: "destructive",
        variant: "solid",
        className: [
          "bg-destructive-uisolid hover:bg-destructive-uisolidhover data-[active=true]:bg-destructive-uisolidhover",
          "focus-visible:outline-destructive-ring",
          "text-destructive-contrast font-medium",
          "data-[active=true]:brightness-[1.1] dark:data-[active=true]:brightness-[1.08] data-[active=true]:saturate-[1.1]",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        ],
      },
      // {
      //   intent: "neutral",
      //   variant: "solid",
      //   className: [
      //     "bg-neutral-uisolid hover:bg-neutral-uisolidhover data-[active=true]:bg-neutral-uisolidhover",
      //     "focus-visible:outline-neutral-ring",
      //   ],
      // },

      // soft
      {
        intent: "primary",
        variant: "soft",
        className: [
          "bg-primary-uisoft hover:bg-primary-uisofthover data-[active=true]:bg-primary-uisoftselected",
          "text-primary-fglink",
          "focus-visible:outline-primary-ring",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-1px]",
        ],
      },
      {
        intent: "secondary",
        variant: "soft",
        className: [
          "bg-secondary-uisoft hover:bg-secondary-uisofthover data-[active=true]:bg-secondary-uisoftselected",
          "text-secondary-fglink",
          "focus-visible:outline-secondary-ring",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-1px]",
        ],
      },
      {
        intent: "accent",
        variant: "soft",
        className: [
          "bg-accent-uisoft hover:bg-accent-uisofthover data-[active=true]:bg-accent-uisoftselected",
          "text-accent-fglink",
          "focus-visible:outline-accent-ring",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-1px]",
        ],
      },
      // {
      //   intent: "info",
      //   variant: "soft",
      //   className: [
      //     "bg-accent-uisoft hover:bg-accent-uisofthover data-[active=true]:bg-accent-uisoftselected",
      //     "focus-visible:outline-accent-ring",
      //   ],
      // },
      // {
      //   intent: "success",
      //   variant: "soft",
      //   className: [
      //     "bg-accent-uisoft hover:bg-accent-uisofthover data-[active=true]:bg-accent-uisoftselected",
      //     "focus-visible:outline-accent-ring",
      //   ],
      // },
      // {
      //   intent: "warning",
      //   variant: "soft",
      //   className: [
      //     "bg-accent-uisoft hover:bg-accent-uisofthover data-[active=true]:bg-accent-uisoftselected",
      //     "focus-visible:outline-accent-ring",
      //   ],
      // },
      {
        intent: "destructive",
        variant: "soft",
        className: [
          "bg-destructive-uisoft hover:bg-destructive-uisofthover data-[active=true]:bg-destructive-uisoftselected",
          "text-destructive-fglink",
          "focus-visible:outline-destructive-ring",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-1px]",
        ],
      },
      // {
      //   intent: "neutral",
      //   variant: "soft",
      //   className: [
      //     "bg-destructive-uisoft hover:bg-destructive-uisofthover data-[active=true]:bg-destructive-uisoftselected",
      //     "focus-visible:outline-destructive-ring",
      //   ],
      // },

      // surface
      {
        intent: "primary",
        variant: "surface",
        className: [
          "bg-primary-surface data-[active=true]:bg-primary-uisoft",
          "text-primary-fglink",
          "shadow-inner shadow-primary-borderoutline",
          "hover:shadow-inner hover:shadow-primary-borderoutlinehover",
          "data-[active=true]:shadow-inner data-[active=true]:shadow-primary-borderoutlinehover",
          "focus-visible:outline-primary-ring",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-1px]",
          "data-[disabled=true]:shadow-inner data-[disabled=true]:shadow-borderdisabled",
        ],
      },
      {
        intent: "secondary",
        variant: "surface",
        className: [
          "bg-secondary-surface data-[active=true]:bg-secondary-uisoft",
          "text-secondary-fglink",
          "shadow-inner shadow-secondary-borderoutline",
          "hover:shadow-inner hover:shadow-secondary-borderoutlinehover",
          "data-[active=true]:shadow-inner data-[active=true]:shadow-secondary-borderoutlinehover",
          "focus-visible:outline-secondary-ring",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-1px]",
          "data-[disabled=true]:shadow-inner data-[disabled=true]:shadow-borderdisabled",
        ],
      },
      {
        intent: "accent",
        variant: "surface",
        className: [
          "bg-accent-surface data-[active=true]:bg-accent-uisoft",
          "text-accent-fglink",
          "shadow-inner shadow-accent-borderoutline",
          "hover:shadow-inner hover:shadow-accent-borderoutlinehover",
          "data-[active=true]:shadow-inner data-[active=true]:shadow-accent-borderoutlinehover",
          "focus-visible:outline-accent-ring",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-1px]",
          "data-[disabled=true]:shadow-inner data-[disabled=true]:shadow-borderdisabled",
        ],
      },
      // {
      //   intent: "info",
      //   variant: "surface",
      //   className: [
      //     "bg-surface data-[active=true]:bg-uisoft",
      //     "shadow-inner shadow-borderoutline",
      //     "hover:shadow-inner hover:shadow-info-borderoutlinehover",
      //     "data-[active=true]:shadow-inner data-[active=true]:shadow-info-borderoutlinehover",
      //     "focus-visible:outline-ring",
      //     "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-1px]",
      //     "data-[disabled=true]:shadow-inner data-[disabled=true]:shadow-borderdisabled",
      //   ],
      // },
      // {
      //   intent: "success",
      //   variant: "surface",
      //   className: [
      //     "bg-surface data-[active=true]:bg-uisoft",
      //     "shadow-inner shadow-borderoutline",
      //     "hover:shadow-inner hover:shadow-success-borderoutlinehover",
      //     "data-[active=true]:shadow-inner data-[active=true]:shadow-success-borderoutlinehover",
      //     "focus-visible:outline-ring",
      //     "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-1px]",
      //     "data-[disabled=true]:shadow-inner data-[disabled=true]:shadow-borderdisabled",
      //   ],
      // },
      // {
      //   intent: "warning",
      //   variant: "surface",
      //   className: [
      //     "bg-surface data-[active=true]:bg-uisoft",
      //     "shadow-inner shadow-borderoutline",
      //     "hover:shadow-inner hover:shadow-warning-borderoutlinehover",
      //     "data-[active=true]:shadow-inner data-[active=true]:shadow-warning-borderoutlinehover",
      //     "focus-visible:outline-ring",
      //     "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-1px]",
      //     "data-[disabled=true]:shadow-inner data-[disabled=true]:shadow-borderdisabled",
      //   ],
      // },
      {
        intent: "destructive",
        variant: "surface",
        className: [
          "bg-destructive-surface data-[active=true]:bg-destructive-uisoft",
          "text-destructive-fglink",
          "shadow-inner shadow-destructive-borderoutline",
          "hover:shadow-inner hover:shadow-destructive-borderoutlinehover",
          "data-[active=true]:shadow-inner data-[active=true]:shadow-destructive-borderoutlinehover",
          "focus-visible:outline-destructive-ring",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-1px]",
          "data-[disabled=true]:shadow-inner data-[disabled=true]:shadow-borderdisabled",
        ],
      },
      // {
      //   intent: "neutral",
      //   variant: "surface",
      //   className: [
      //     "bg-neutral-surface data-[active=true]:bg-neutral-uisoft",
      //     "shadow-inner shadow-borderoutline",
      //     "hover:shadow-inner hover:shadow-neutral-borderoutlinehover",
      //     "data-[active=true]:shadow-inner data-[active=true]:shadow-neutral-borderoutlinehover",
      //     "focus-visible:outline-ring",
      //     "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-1px]",
      //     "data-[disabled=true]:shadow-inner data-[disabled=true]:shadow-borderdisabled",
      //   ],
      // },

      // outline
      {
        intent: "primary",
        variant: "outline",
        className: [
          "text-primary-fglink",
          "shadow-inner shadow-primary-borderoutline",
          "hover:bg-primary-uisoft data-[active=true]:bg-primary-uisoft",
          "hover:shadow-inner hover:shadow-primary-borderoutlinehover",
          "data-[active=true]:shadow-inner data-[active=true]:shadow-primary-borderoutlinehover",
          "focus-visible:outline-primary-ring",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-1px]",
          "data-[disabled=true]:shadow-inner data-[disabled=true]:shadow-borderdisabled",
          "data-[disabled=true]:bg-transparent",
        ],
      },
      {
        intent: "secondary",
        variant: "outline",
        className: [
          "text-secondary-fglink",
          "shadow-inner shadow-secondary-borderoutline",
          "hover:bg-secondary-uisoft data-[active=true]:bg-secondary-uisoft",
          "hover:shadow-inner hover:shadow-secondary-borderoutlinehover",
          "data-[active=true]:shadow-inner data-[active=true]:shadow-secondary-borderoutlinehover",
          "focus-visible:outline-secondary-ring",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-1px]",
          "data-[disabled=true]:shadow-inner data-[disabled=true]:shadow-borderdisabled",
          "data-[disabled=true]:bg-transparent",
        ],
      },
      {
        intent: "accent",
        variant: "outline",
        className: [
          "text-accent-fglink",
          "shadow-inner shadow-accent-borderoutline",
          "hover:bg-accent-uisoft data-[active=true]:bg-accent-uisoft",
          "hover:shadow-inner hover:shadow-accent-borderoutlinehover",
          "data-[active=true]:shadow-inner data-[active=true]:shadow-accent-borderoutlinehover",
          "focus-visible:outline-accent-ring",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-1px]",
          "data-[disabled=true]:shadow-inner data-[disabled=true]:shadow-borderdisabled",
          "data-[disabled=true]:bg-transparent",
        ],
      },
      // {
      //   intent: "info",
      //   variant: "outline",
      //   className: [
      //     "shadow-inner shadow-info-borderoutline",
      //     "hover:bg-info-uisoft data-[active=true]:bg-info-uisoft",
      //     "hover:shadow-inner hover:shadow-info-borderoutlinehover",
      //     "data-[active=true]:shadow-inner data-[active=true]:shadow-info-borderoutlinehover",
      //     "focus-visible:outline-info-ring",
      //     "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-1px]",
      //     "data-[disabled=true]:shadow-inner data-[disabled=true]:shadow-borderdisabled",
      //     "data-[disabled=true]:bg-transparent",
      //   ],
      // },
      // {
      //   intent: "success",
      //   variant: "outline",
      //   className: [
      //     "shadow-inner shadow-success-borderoutline",
      //     "hover:bg-success-uisoft data-[active=true]:bg-success-uisoft",
      //     "hover:shadow-inner hover:shadow-success-borderoutlinehover",
      //     "data-[active=true]:shadow-inner data-[active=true]:shadow-success-borderoutlinehover",
      //     "focus-visible:outline-success-ring",
      //     "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-1px]",
      //     "data-[disabled=true]:shadow-inner data-[disabled=true]:shadow-borderdisabled",
      //     "data-[disabled=true]:bg-transparent",
      //   ],
      // },
      // {
      //   intent: "warning",
      //   variant: "outline",
      //   className: [
      //     "shadow-inner shadow-warning-borderoutline",
      //     "hover:bg-warning-uisoft data-[active=true]:bg-warning-uisoft",
      //     "hover:shadow-inner hover:shadow-warning-borderoutlinehover",
      //     "data-[active=true]:shadow-inner data-[active=true]:shadow-warning-borderoutlinehover",
      //     "focus-visible:outline-warning-ring",
      //     "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-1px]",
      //     "data-[disabled=true]:shadow-inner data-[disabled=true]:shadow-borderdisabled",
      //     "data-[disabled=true]:bg-transparent",
      //   ],
      // },
      {
        intent: "destructive",
        variant: "outline",
        className: [
          "text-destructive-fglink",
          "shadow-inner shadow-destructive-borderoutline",
          "hover:bg-destructive-uisoft data-[active=true]:bg-destructive-uisoft",
          "hover:shadow-inner hover:shadow-destructive-borderoutlinehover",
          "data-[active=true]:shadow-inner data-[active=true]:shadow-destructive-borderoutlinehover",
          "focus-visible:outline-destructive-ring",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-1px]",
          "data-[disabled=true]:shadow-inner data-[disabled=true]:shadow-borderdisabled",
          "data-[disabled=true]:bg-transparent",
        ],
      },
      // {
      //   intent: "neutral",
      //   variant: "outline",
      //   className: [
      //     "shadow-inner shadow-primary-borderoutline",
      //     "hover:bg-primary-uisoft data-[active=true]:bg-primary-uisoft",
      //     "hover:shadow-inner hover:shadow-neutral-borderoutlinehover",
      //     "data-[active=true]:shadow-inner data-[active=true]:shadow-neutral-borderoutlinehover",
      //     "focus-visible:outline-primary-ring",
      //     "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-1px]",
      //     "data-[disabled=true]:shadow-inner data-[disabled=true]:shadow-borderdisabled",
      //     "data-[disabled=true]:bg-transparent",
      //   ],
      // },

      // ghost
      {
        intent: "primary",
        variant: "ghost",
        className: [
          "box-content h-fit",
          "hover:bg-primary-uisoft",
          "data-[active=true]:bg-primary-uisofthover",
          "text-primary-fglink",
          "focus-visible:outline-primary-ring",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-1px]",
          "data-[disabled=true]:bg-transparent",
        ],
      },
      {
        intent: "secondary",
        variant: "ghost",
        className: [
          "box-content h-fit",
          "hover:bg-secondary-uisoft",
          "data-[active=true]:bg-secondary-uisofthover",
          "text-secondary-fglink",
          "focus-visible:outline-secondary-ring",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-1px]",
          "data-[disabled=true]:bg-transparent",
        ],
      },
      {
        intent: "accent",
        variant: "ghost",
        className: [
          "box-content h-fit",
          "hover:bg-accent-uisoft",
          "data-[active=true]:bg-accent-uisofthover",
          "text-accent-fglink",
          "focus-visible:outline-accent-ring",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-1px]",
          "data-[disabled=true]:bg-transparent",
        ],
      },
      // {
      //   intent: "info",
      //   variant: "ghost",
      //   className: [
      //     "box-content h-fit",
      //     "hover:bg-primary-uisoft",
      //     "data-[active=true]:bg-primary-uisofthover",
      //     "focus-visible:outline-primary-ring",
      //     "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-1px]",
      //     "data-[disabled=true]:bg-transparent",
      //   ],
      // },
      // {
      //   intent: "success",
      //   variant: "ghost",
      //   className: [
      //     "box-content h-fit",
      //     "hover:bg-primary-uisoft",
      //     "data-[active=true]:bg-primary-uisofthover",
      //     "focus-visible:outline-primary-ring",
      //     "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-1px]",
      //     "data-[disabled=true]:bg-transparent",
      //   ],
      // },
      // {
      //   intent: "warning",
      //   variant: "ghost",
      //   className: [
      //     "box-content h-fit",
      //     "hover:bg-primary-uisoft",
      //     "data-[active=true]:bg-primary-uisofthover",
      //     "focus-visible:outline-primary-ring",
      //     "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-1px]",
      //     "data-[disabled=true]:bg-transparent",
      //   ],
      // },
      {
        intent: "destructive",
        variant: "ghost",
        className: [
          "box-content h-fit",
          "hover:bg-destructive-uisoft",
          "data-[active=true]:bg-destructive-uisofthover",
          "text-destructive-fglink",
          "focus-visible:outline-destructive-ring",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-1px]",
          "data-[disabled=true]:bg-transparent",
        ],
      },
      // {
      //   intent: "neutral",
      //   variant: "ghost",
      //   className: [
      //     "box-content h-fit",
      //     "hover:bg-primary-uisoft",
      //     "data-[active=true]:bg-primary-uisofthover",
      //     "focus-visible:outline-primary-ring",
      //     "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-1px]",
      //     "data-[disabled=true]:bg-transparent",
      //   ],
      // },

      // sizes and variants
      {
        size: "xs",
        variant: ["solid", "soft", "surface", "outline"],
        className: "h-6 gap-1 px-2",
      },
      {
        size: "sm",
        variant: ["solid", "soft", "surface", "outline"],
        className: "h-8 gap-2 px-3",
      },
      {
        size: "base",
        variant: ["solid", "soft", "surface", "outline"],
        className: "h-10 gap-3 px-4",
      },
      {
        size: "lg",
        variant: ["solid", "soft", "surface", "outline"],
        className: "h-12 gap-3 px-5",
      },

      {
        size: "xs",
        variant: ["ghost"],
        className: "gap-1 px-2 py-1 -mx-2 -my-1",
      },
      {
        size: "sm",
        variant: ["ghost"],
        className: "gap-1 px-2 py-1 -mx-2 -my-1",
      },
      {
        size: "base",
        variant: ["ghost"],
        className: "gap-2 px-3 py-1.5 -mx-3 -my-1.5",
      },
      {
        size: "lg",
        variant: ["ghost"],
        className: "gap-2 px-4 py-2 -mx-4 -my-2",
      },

      // sizes and radius
      {
        size: "xs",
        radius: "small",
        className: "rounded-sm-1",
      },
      {
        size: "sm",
        radius: "small",
        className: "rounded-sm-2",
      },
      {
        size: "base",
        radius: "small",
        className: "rounded-sm-3",
      },
      {
        size: "lg",
        radius: "small",
        className: "rounded-sm-4",
      },
      {
        size: "xs",
        radius: "medium",
        className: "rounded-md-1",
      },
      {
        size: "sm",
        radius: "medium",
        className: "rounded-md-2",
      },
      {
        size: "base",
        radius: "medium",
        className: "rounded-md-3",
      },
      {
        size: "lg",
        radius: "medium",
        className: "rounded-md-4",
      },
      {
        size: "xs",
        radius: "large",
        className: "rounded-lg-1",
      },
      {
        size: "sm",
        radius: "large",
        className: "rounded-lg-2",
      },
      {
        size: "base",
        radius: "large",
        className: "rounded-lg-3",
      },
      {
        size: "lg",
        radius: "large",
        className: "rounded-lg-4",
      },
    ],
    defaultVariants: {
      size: "sm",
      align: "center",
      radius: "medium",
      variant: "soft",
    },
  }
);
