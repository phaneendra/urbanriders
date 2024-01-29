// import radixColors from "@radix-ui/colors";
import typographyPlugin from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";
import { fontFamily } from "tailwindcss/defaultTheme";
import { createPlugin } from "windy-radix-palette";

import { cpPlugin } from "./cp-plugin";

const colors = createPlugin();
// TODO: Adding specific colors does not work, to investigate.
// const colors = createPlugin({
//   colors: {
//     whiteA: radixColors.whiteA,
//     blackA: radixColors.blackA,
//     mauve: radixColors.mauve,
//     mauveDark: radixColors.mauveDark,
//     mauveA: radixColors.mauveA,
//     mauveDarkA: radixColors.mauveDarkA,
//     red: radixColors.red,
//     redA: radixColors.redA,
//     redDark: radixColors.redDark,
//     redDarkA: radixColors.redDarkA,
//     iris: radixColors.iris,
//     irisA: radixColors.irisA,
//     irisDark: radixColors.irisDark,
//     irisDarkA: radixColors.irisDarkA,
//     blue: radixColors.blue,
//     blueA: radixColors.blueA,
//     blueDark: radixColors.blueDark,
//     blueDarkA: radixColors.blueDarkA,
//     plum: radixColors.plum,
//     plumA: radixColors.plumA,
//     plumDark: radixColors.plumDark,
//     plumDarkA: radixColors.plumDarkA,
//   },
// });

export const cpPreset = {
  content: [],
  darkMode: ["class"],
  plugins: [colors.plugin, cpPlugin, animatePlugin, typographyPlugin],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        sm: "520px",
        // => @media (min-width: 520px) { ... }
        md: "768px",
        // => @media (min-width: 768px) { ... }
        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
        "2xl": "1640px",
        // => @media (min-width: 1640px) { ... }
      },
      colors: {
        canvas: colors.alias({ name: "canvas", value: "mauve.1" }),
        surface: colors.alias({
          name: "surface",
          light: "#ffffffcc",
          dark: "#22212380",
        }),
        translucent: colors.alias({
          name: "translucent",
          light: "hsla(0,0%,100%,.8)",
          dark: "#1e1d1eb3",
        }),
        panel: colors.alias({ name: "panel", value: "mauve.2" }),
        panelhover: colors.alias({ name: "panelhover", value: "mauve.3" }),
        panelselected: colors.alias({
          name: "panelselected",
          value: "mauve.4",
        }),
        ui: colors.alias({ name: "ui", value: "mauve.3" }),
        uihover: colors.alias({ name: "uihover", value: "mauve.4" }),
        uiselected: colors.alias({ name: "uiselected", value: "mauve.5" }),
        uisoft: colors.alias({ name: "ui", value: "mauveA.3" }),
        uisofthover: colors.alias({ name: "uihover", value: "mauveA.4" }),
        uisoftselected: colors.alias({ name: "uiselected", value: "mauveA.5" }),
        divider: colors.alias({ name: "divider", value: "mauveA.5" }),
        border: colors.alias({ name: "border", value: "mauve.6" }),
        bordersubtle: colors.alias({ name: "bordersubtle", value: "mauve.7" }),
        ring: colors.alias({ name: "ring", value: "mauve.8" }),
        borderdisabled: colors.alias({
          name: "borderdisabled",
          value: "mauveA.6",
        }),
        borderoutline: colors.alias({
          name: "borderoutline",
          value: "mauveA.7",
        }),
        borderoutlinehover: colors.alias({
          name: "borderoutlinehover",
          value: "mauveA.8",
        }),
        uisolid: colors.alias({ name: "solid", value: "mauve.9" }),
        uisolidhover: colors.alias({ name: "solidhover", value: "mauve.10" }),
        fgsubtle: colors.alias({ name: "fgsubtle", value: "mauveA.11" }),
        fg: colors.alias({ name: "fg", value: "mauve.12" }),
        fglink: colors.alias({
          name: "fglink",
          value: "mauveA.11",
        }),
        fgdisabled: colors.alias({
          name: "fgdisabled",
          value: "mauveA.8",
        }),
        disabled: colors.alias({
          name: "disabled",
          value: "mauveA.3",
        }),
        overlay: colors.alias({
          name: "overlay",
          light: "blackA.6",
          dark: "blackA.8",
        }),
        contrast: colors.alias({ name: "contrast", value: "mauveA.12" }),
        primary: {
          DEFAULT: colors.alias({ name: "primary-uisolid", value: "iris.9" }),
          // foreground: "hsl(var(--primary-foreground))",
          surface: colors.alias({
            name: "primary-surface",
            dark: "#1d1b3980",
            light: "#f6f6ffcc",
          }),
          ui: colors.alias({ name: "primary-ui", value: "iris.3" }),
          uihover: colors.alias({ name: "primary-uihover", value: "iris.4" }),
          uiselected: colors.alias({
            name: "primary-uiselected",
            value: "iris.5",
          }),
          uisoft: colors.alias({ name: "ui", value: "irisA.3" }),
          uisofthover: colors.alias({ name: "uihover", value: "irisA.4" }),
          uisoftselected: colors.alias({
            name: "uiselected",
            value: "irisA.5",
          }),
          divider: colors.alias({ name: "primary-divider", value: "irisA.5" }),
          border: colors.alias({ name: "primary-border", value: "iris.6" }),
          bordersubtle: colors.alias({
            name: "primary-bordersubtle",
            value: "iris.7",
          }),
          ring: colors.alias({ name: "primary-ring", value: "iris.8" }),
          borderoutline: colors.alias({
            name: "borderoutline",
            value: "irisA.7",
          }),
          borderoutlinehover: colors.alias({
            name: "borderoutline",
            value: "irisA.8",
          }),
          uisolid: colors.alias({ name: "primary-uisolid", value: "iris.9" }),
          uisolidhover: colors.alias({
            name: "primary-uisolidhover",
            value: "iris.10",
          }),
          fgsubtle: colors.alias({
            name: "primary-fgsubtle",
            value: "irisA.11",
          }),
          fglink: colors.alias({
            name: "primary-fglink",
            value: "irisA.11",
          }),
          fg: colors.alias({ name: "primary-fg", value: "iris.12" }),
          contrast: colors.alias({
            name: "primary-contrast",
            value: "whiteA.12",
          }),
        },
        secondary: {
          DEFAULT: colors.alias({ name: "secondary-solid", value: "blue.9" }),
          // foreground: "hsl(var(--secondary-foreground))",
          surface: colors.alias({
            name: "secondary-surface",
            light: "#f1f9ffcc",
            dark: "#11213d80",
          }),
          ui: colors.alias({ name: "secondary-ui", value: "blue.3" }),
          uihover: colors.alias({ name: "secondary-uihover", value: "blue.4" }),
          uiselected: colors.alias({
            name: "secondary-uiselected",
            value: "blue.5",
          }),
          uisoft: colors.alias({ name: "ui", value: "blueA.3" }),
          uisofthover: colors.alias({ name: "uihover", value: "blueA.4" }),
          uisoftselected: colors.alias({
            name: "uiselected",
            value: "blueA.5",
          }),
          divider: colors.alias({
            name: "secondary-divider",
            value: "blueA.5",
          }),
          border: colors.alias({ name: "secondary-border", value: "blue.6" }),
          bordersubtle: colors.alias({
            name: "secondary-bordersubtle",
            value: "blue.7",
          }),
          ring: colors.alias({ name: "secondary-ring", value: "blue.8" }),
          borderoutline: colors.alias({
            name: "borderoutline",
            value: "blueA.7",
          }),
          borderoutlinehover: colors.alias({
            name: "borderoutline",
            value: "blueA.8",
          }),
          uisolid: colors.alias({ name: "secondary-uisolid", value: "blue.9" }),
          uisolidhover: colors.alias({
            name: "secondary-uisolidhover",
            value: "blue.10",
          }),
          fgsubtle: colors.alias({
            name: "secondary-fgsubtle",
            value: "blueA.11",
          }),
          fg: colors.alias({ name: "secondary-fg", value: "blue.12" }),
          fglink: colors.alias({
            name: "secondary-fglink",
            value: "blueA.11",
          }),
          contrast: colors.alias({
            name: "secondary-contrast",
            value: "whiteA.12",
          }),
        },
        destructive: {
          // DEFAULT: "hsl(var(--destructive))",
          // foreground: "hsl(var(--destructive-foreground))",
          DEFAULT: colors.alias({ name: "destructive-solid", value: "red.9" }),
          surface: colors.alias({
            name: "destructive-surface",
            light: "#fff5f5cc",
            dark: "#2f151780",
          }),
          ui: colors.alias({ name: "destructive-ui", value: "red.3" }),
          uihover: colors.alias({
            name: "destructive-uihover",
            value: "red.4",
          }),
          uiselected: colors.alias({
            name: "destructive-uiselected",
            value: "red.5",
          }),
          uisoft: colors.alias({ name: "ui", value: "redA.3" }),
          uisofthover: colors.alias({ name: "uihover", value: "redA.4" }),
          uisoftselected: colors.alias({
            name: "uiselected",
            value: "redA.5",
          }),
          divider: colors.alias({
            name: "destructive-divider",
            value: "redA.5",
          }),
          border: colors.alias({ name: "destructive-border", value: "red.6" }),
          bordersubtle: colors.alias({
            name: "destructive-bordersubtle",
            value: "red.7",
          }),
          ring: colors.alias({ name: "destructive-ring", value: "red.8" }),
          borderoutline: colors.alias({
            name: "borderoutline",
            value: "redA.7",
          }),
          borderoutlinehover: colors.alias({
            name: "borderoutline",
            value: "redA.8",
          }),
          uisolid: colors.alias({
            name: "destructive-uisolid",
            value: "red.9",
          }),
          uisolidhover: colors.alias({
            name: "destructive-uisolidhover",
            value: "red.10",
          }),
          fgsubtle: colors.alias({
            name: "destructive-fgsubtle",
            value: "redA.11",
          }),
          fg: colors.alias({ name: "destructive-fg", value: "red.12" }),
          fglink: colors.alias({
            name: "destructive-fglink",
            value: "redA.11",
          }),
          contrast: colors.alias({
            name: "destructive-contrast",
            value: "whiteA.12",
          }),
        },
        accent: {
          DEFAULT: colors.alias({ name: "accent-solid", value: "plum.9" }),
          surface: colors.alias({
            name: "accent-surface",
            light: "#fdf5fdcc",
            dark: "#2f152f80",
          }),
          ui: colors.alias({ name: "accent-ui", value: "plum.3" }),
          uihover: colors.alias({ name: "accent-uihover", value: "plum.4" }),
          uiselected: colors.alias({
            name: "accent-uiselected",
            value: "plum.5",
          }),
          uisoft: colors.alias({ name: "ui", value: "plumA.3" }),
          uisofthover: colors.alias({ name: "uihover", value: "plumA.4" }),
          uisoftselected: colors.alias({
            name: "uiselected",
            value: "plumA.5",
          }),
          divider: colors.alias({
            name: "accent-divider",
            value: "plumA.5",
          }),
          border: colors.alias({ name: "accent-border", value: "plum.6" }),
          bordersubtle: colors.alias({
            name: "accent-bordersubtle",
            value: "plum.7",
          }),
          ring: colors.alias({ name: "accent-ring", value: "plum.8" }),
          borderoutline: colors.alias({
            name: "borderoutline",
            value: "plumA.7",
          }),
          borderoutlinehover: colors.alias({
            name: "borderoutline",
            value: "plumA.8",
          }),
          uisolid: colors.alias({ name: "accent-uisolid", value: "plum.9" }),
          uisolidhover: colors.alias({
            name: "accent-uisolidhover",
            value: "plum.10",
          }),
          fgsubtle: colors.alias({
            name: "accent-fgsubtle",
            value: "plumA.11",
          }),
          fg: colors.alias({ name: "accent-fg", value: "plum.12" }),
          fglink: colors.alias({ name: "accent-fglink", value: "plumA.11" }),
          contrast: colors.alias({
            name: "accent-contrast",
            value: "whiteA.12",
          }),
        },
      },
      fontSize: {
        1: [
          "calc(12px * var(--scaling))",
          {
            lineHeight: "calc(16px * var(--scaling))",
            letterSpacing: "0.0025em",
          },
        ],
        2: [
          "calc(14px * var(--scaling))",
          {
            lineHeight: "calc(20px * var(--scaling))",
            letterSpacing: "0em",
          },
        ],
        3: [
          "calc(16px * var(--scaling))",
          {
            lineHeight: "calc(24px * var(--scaling))",
            letterSpacing: "0em",
          },
        ],
        4: [
          "calc(18px * var(--scaling))",
          {
            lineHeight: "calc(26px * var(--scaling))",
            letterSpacing: "-0.0025em",
          },
        ],
        5: [
          "calc(20px * var(--scaling))",
          {
            lineHeight: "calc(28px * var(--scaling))",
            letterSpacing: "-0.005em",
          },
        ],
        6: [
          "calc(24px * var(--scaling))",
          {
            lineHeight: "calc(30px * var(--scaling))",
            letterSpacing: "-0.00625em",
          },
        ],
        7: [
          "calc(28px * var(--scaling))",
          {
            lineHeight: "calc(36px * var(--scaling))",
            letterSpacing: "-0.0075em",
          },
        ],
        8: [
          "calc(35px * var(--scaling))",
          {
            lineHeight: "calc(40px * var(--scaling))",
            letterSpacing: "-0.01em",
          },
        ],
        9: [
          "calc(60px * var(--scaling))",
          {
            lineHeight: "calc(60px * var(--scaling))",
            letterSpacing: "-0.025em",
          },
        ],
        xs: [
          "calc(12px * var(--scaling))",
          {
            lineHeight: "calc(16px * var(--scaling))",
            letterSpacing: "0.0025em",
          },
        ],
        sm: [
          "calc(14px * var(--scaling))",
          {
            lineHeight: "calc(20px * var(--scaling))",
            letterSpacing: "0em",
          },
        ],
        base: [
          "calc(16px * var(--scaling))",
          {
            lineHeight: "calc(24px * var(--scaling))",
            letterSpacing: "0em",
          },
        ],
        lg: [
          "calc(18px * var(--scaling))",
          {
            lineHeight: "calc(26px * var(--scaling))",
            letterSpacing: "-0.0025em",
          },
        ],
        xl: [
          "calc(20px * var(--scaling))",
          {
            lineHeight: "calc(28px * var(--scaling))",
            letterSpacing: "-0.005em",
          },
        ],
        "2xl": [
          "calc(24px * var(--scaling))",
          {
            lineHeight: "calc(30px * var(--scaling))",
            letterSpacing: "-0.00625em",
          },
        ],
        "3xl": [
          "calc(28px * var(--scaling))",
          {
            lineHeight: "calc(36px * var(--scaling))",
            letterSpacing: "-0.0075em",
          },
        ],
        "4xl": [
          "calc(35px * var(--scaling))",
          {
            lineHeight: "calc(40px * var(--scaling))",
            letterSpacing: "-0.01em",
          },
        ],
        "5xl": [
          "calc(45px * var(--scaling))",
          {
            lineHeight: "calc(48px * var(--scaling))",
            letterSpacing: "-0.01em",
          },
        ],
        "6xl": [
          "calc(60px * var(--scaling))",
          {
            lineHeight: "calc(60px * var(--scaling))",
            letterSpacing: "-0.025em",
          },
        ],

        "fluid-sm": "clamp(.8rem,.17vw + .76rem,.89rem)",
        "fluid-base": "clamp(1rem,.34vw + .91rem,1.19rem)",
        "fluid-md": "clamp(1.25rem,.61vw + 1.1rem,1.58rem)",
        "fluid-lg": "clamp(1.56rem,1vw + 1.31rem,2.11rem)",
        "fluid-xl": "clamp(1.95rem,1.56vw + 1.56rem,2.81rem)",
        "fluid-2xl": "clamp(2.44rem,2.38vw + 1.85rem,3.75rem)",
        "fluid-3xl": "clamp(3.05rem,3.54vw + 2.17rem,5rem)",
      },
      letterSpacing: {
        1: "0.0025em",
        2: "0em",
        3: "0em",
        4: "-0.0025em",
        5: "-0.005em",
        6: "-0.00625em",
        7: "-0.0075em",
        8: "-0.01em",
        9: "-0.025em",
      },
      lineHeight: {
        1: "calc(16px * var(--scaling))",
        "leading-none": "calc(16px * var(--scaling))",
        2: "calc(20px * var(--scaling))",
        "leading-tight": "calc(20px * var(--scaling))",
        "leading-snug": "calc(22px * var(--scaling))",
        3: "calc(24px * var(--scaling))",
        "leading-normal": "calc(24px * var(--scaling))",
        4: "calc(26px * var(--scaling))",
        "leading-relaxed": "calc(26px * var(--scaling))",
        5: "calc(28px * var(--scaling))",
        6: "calc(30px * var(--scaling))",
        "leading-loose": "calc(32px * var(--scaling))",
        7: "calc(36px * var(--scaling))",
        8: "calc(40px * var(--scaling))",
        9: "calc(60px * var(--scaling))",
      },
      spacing: {
        px: "1px",
        0: "0",
        0.5: "calc(2px * var(--scaling))",
        1: "calc(4px * var(--scaling))",
        1.5: "calc(6px * var(--scaling))",
        2: "calc(8px * var(--scaling))",
        2.5: "calc(10px * var(--scaling))",
        3: "calc(12px * var(--scaling))",
        3.5: "calc(14px * var(--scaling))",
        4: "calc(16px * var(--scaling))",
        5: "calc(20px * var(--scaling))",
        6: "calc(24px * var(--scaling))",
        7: "calc(28px * var(--scaling))",
        8: "calc(32px * var(--scaling))",
        9: "calc(36px * var(--scaling))",
        10: "calc(40px * var(--scaling))",
        11: "calc(44px * var(--scaling))",
        12: "calc(48px * var(--scaling))",
        14: "calc(56px * var(--scaling))",
        16: "calc(64px * var(--scaling))",
        20: "calc(80px * var(--scaling))",
        24: "calc(96px * var(--scaling))",
        28: "calc(112px * var(--scaling))",
        32: "calc(128px * var(--scaling))",
        36: "calc(144px * var(--scaling))",
        40: "calc(160px * var(--scaling))",
        44: "calc(176px * var(--scaling))",
        48: "calc(192px * var(--scaling))",
        52: "calc(208px * var(--scaling))",
        56: "calc(224px * var(--scaling))",
        60: "calc(240px * var(--scaling))",
        64: "calc(256px * var(--scaling))",
        72: "calc(288px * var(--scaling))",
        80: "calc(320px * var(--scaling))",
        96: "calc(384px * var(--scaling))",
      },
      borderRadius: {
        none: "0px",
        "sm-1": "calc(3px * var(--scaling) * 0.5)",
        "sm-2": "calc(4px * var(--scaling) * 0.5)",
        "sm-3": "calc(6px * var(--scaling) * 0.5)",
        "sm-4": "calc(8px * var(--scaling) * 0.5)",
        "sm-5": "calc(12px * var(--scaling) * 0.5)",
        "sm-6": "calc(16px * var(--scaling) * 0.5)",
        "sm-7": "calc(24px * var(--scaling) * 0.5)",

        "md-1": "calc(3px * var(--scaling) * 1)",
        "md-2": "calc(4px * var(--scaling) * 1)",
        "md-3": "calc(6px * var(--scaling) * 1)",
        "md-4": "calc(8px * var(--scaling) * 1)",
        "md-5": "calc(12px * var(--scaling) * 1)",
        "md-6": "calc(16px * var(--scaling) * 1)",
        "md-7": "calc(24px * var(--scaling) * 1)",

        "lg-1": "calc(3px * var(--scaling) * 1.5)",
        "lg-2": "calc(4px * var(--scaling) * 1.5)",
        "lg-3": "calc(6px * var(--scaling) * 1.5)",
        "lg-4": "calc(8px * var(--scaling) * 1.5)",
        "lg-5": "calc(12px * var(--scaling) * 1.5)",
        "lg-6": "calc(16px * var(--scaling) * 1.5)",
        "lg-7": "calc(24px * var(--scaling) * 1.5)",

        "xl-1": "calc(3px * var(--scaling) * 2)",
        "xl-2": "calc(4px * var(--scaling) * 2)",
        "xl-3": "calc(6px * var(--scaling) * 2)",
        "xl-4": "calc(8px * var(--scaling) * 2)",
        "xl-5": "calc(12px * var(--scaling) * 2)",
        "xl-6": "calc(16px * var(--scaling) * 2)",
        "xl-7": "calc(24px * var(--scaling) * 2)",

        sm: "calc(3px * var(--scaling) * var(--radius-factor))",
        DEFAULT: "calc(4px * var(--scaling) * var(--radius-factor))",
        md: "calc(6px * var(--scaling) * var(--radius-factor))",
        lg: "calc(8px * var(--scaling) * var(--radius-factor))",
        xl: "calc(12px * var(--scaling) * var(--radius-factor))",
        "2xl": "calc(16px * var(--scaling) * var(--radius-factor))",
        "3xl": "calc(24px * var(--scaling) * var(--radius-factor))",

        full: "9999px",
      },
      boxShadow: {
        sm: "0 1px 2px -1px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%))",
        DEFAULT: `
          0 3px 5px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),
          0 7px 14px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%))`,
        md: `
          0 -1px 3px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),
          0 1px 2px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),
          0 2px 5px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 4%)),
          0 4px 12px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%)),
          0 12px 15px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 7%))`,
        lg: `
          0 -2px 5px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),
          0 1px 1px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),
          0 2px 2px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),
          0 5px 5px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 4%)),
          0 9px 9px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%)),
          0 16px 16px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 6%))`,
        xl: `
          0 -1px 2px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),
          0 2px 1px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),
          0 5px 5px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),
          0 10px 10px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 4%)),
          0 20px 20px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%)),
          0 40px 40px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 7%))`,
        "2xl": `
          0 -1px 2px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),
          0 3px 2px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),
          0 7px 5px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),
          0 12px 10px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 4%)),
          0 22px 18px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%)),
          0 41px 33px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 6%)),
          0 100px 80px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 7%))`,

        inner:
          "inset 0 0 0 1px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%))",
        "inner-1":
          "inset 0 1px 2px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%)), var(--inner-shadow-highlight)",
        "inner-2":
          "inset 0 1px 4px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%)), var(--inner-shadow-highlight)",
        "inner-3":
          "inset 0 2px 8px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%)), var(--inner-shadow-highlight)",
        "inner-4":
          "inset 0 2px 14px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%)), var(--inner-shadow-highlight)",

        "border-b":
          "0 1px 0 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%))",
        "border-t":
          "0 -1px 0 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%))",
        "border-l":
          "-1px 0 0 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%))",
        "border-r":
          "1px 0 0 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%))",
        "border-a":
          "0 0 0 1px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%))",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        heading: ["var(--font-heading)", ...fontFamily.sans],
        mono: ["var(--font-mono)", ...fontFamily.mono],
      },
      backgroundImage: {
        "hero-pattern-diagonal-lines":
          "url(\"data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E\");",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "dialog-overlay-no-op": {
          from: {
            opacity: "1",
          },
          to: {
            opacity: "1",
          },
        },
        "dialog-content-show": {
          from: {
            opacity: "0",
            transform: "translateY(5px) scale(0.97)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0px) scale(1)",
          },
        },
        "dialog-content-hide": {
          from: {
            opacity: "1",
            transform: "translateY(0px) scale(1)",
          },
          to: {
            opacity: "0",
            transform: "translateY(5px) scale(0.99)",
          },
        },
      },
      animationTimingFunction: {
        show: "cubic-bezier(0.16, 1, 0.3, 1)",
        up: "cubic-bezier(0.87, 0, 0.13, 1)",
      },
      animation: {
        "accordion-down": "accordion-down 0.3s cubic-bezier(0.87, 0, 0.13, 1)",
        "accordion-up": "accordion-up 0.3s cubic-bezier(0.87, 0, 0.13, 1)",
        "dialog-content-show":
          "dialog-content-show 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
        "dialog-content-hide":
          "dialog-content-hide 0.15s cubic-bezier(0.16, 1, 0.3, 1)",
        "dialog-overlay-no-op":
          "dialog-overlay-no-op 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
} satisfies Config;
