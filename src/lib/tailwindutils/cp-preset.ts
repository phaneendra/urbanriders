import variablePlugin from "@mertasan/tailwindcss-variables";
import * as radixColors from "@radix-ui/colors";
import typographyPlugin from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";
import { fontFamily } from "tailwindcss/defaultTheme";

import { cpPlugin } from "./cp-plugin";

export const cpPreset = {
  content: [],
  darkMode: ["class"],
  plugins: [variablePlugin, cpPlugin, animatePlugin, typographyPlugin],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    variables: {
      DEFAULT: {
        canvas: radixColors.mauve.mauve1,
        surface: "#ffffffcc",
        translucent: "hsla(0,0%,100%,.8)",
        panel: radixColors.mauve.mauve2,
        panelhover: radixColors.mauve.mauve3,
        panelselected: radixColors.mauve.mauve4,
        ui: radixColors.mauve.mauve3,
        uihover: radixColors.mauve.mauve4,
        uiselected: radixColors.mauve.mauve5,
        uisoft: radixColors.mauveA.mauveA3,
        uisofthover: radixColors.mauveA.mauveA4,
        uisoftselected: radixColors.mauveA.mauveA5,
        divider: radixColors.mauveA.mauveA5,
        border: radixColors.mauve.mauve6,
        bordersubtle: radixColors.mauve.mauve7,
        ring: radixColors.mauve.mauve8,
        borderdisabled: radixColors.mauveA.mauveA6,
        borderoutline: radixColors.mauveA.mauveA7,
        borderoutlinehover: radixColors.mauveA.mauveA8,
        uisolid: radixColors.mauve.mauve9,
        uisolidhover: radixColors.mauve.mauve10,
        fgsubtle: radixColors.mauveA.mauveA11,
        fg: radixColors.mauve.mauve12,
        fglink: radixColors.mauveA.mauveA11,
        fgdisabled: radixColors.mauveA.mauveA8,
        disabled: radixColors.mauveA.mauveA3,
        overlay: radixColors.blackA.blackA6,
        contrast: radixColors.mauveA.mauveA12,
        primary: {
          canvas: radixColors.iris.iris1,
          surface: "#f6f6ffcc",
          panel: radixColors.iris.iris2,
          ui: radixColors.iris.iris3,
          uihover: radixColors.iris.iris4,
          uiselected: radixColors.iris.iris5,
          uisoft: radixColors.irisA.irisA3,
          uisofthover: radixColors.irisA.irisA4,
          uisoftselected: radixColors.irisA.irisA5,
          divider: radixColors.irisA.irisA5,
          border: radixColors.iris.iris6,
          bordersubtle: radixColors.iris.iris7,
          ring: radixColors.iris.iris8,
          borderoutline: radixColors.irisA.irisA7,
          borderoutlinehover: radixColors.irisA.irisA8,
          uisolid: radixColors.iris.iris9,
          uisolidhover: radixColors.iris.iris10,
          fgsubtle: radixColors.irisA.irisA11,
          fglink: radixColors.irisA.irisA11,
          fg: radixColors.iris.iris12,
          contrast: radixColors.whiteA.whiteA12,
        },
        secondary: {
          canvas: radixColors.blue.blue1,
          surface: "#f1f9ffcc",
          panel: radixColors.blue.blue2,
          ui: radixColors.blue.blue3,
          uihover: radixColors.blue.blue4,
          uiselected: radixColors.blue.blue5,
          uisoft: radixColors.blueA.blueA3,
          uisofthover: radixColors.blueA.blueA4,
          uisoftselected: radixColors.blueA.blueA5,
          divider: radixColors.blueA.blueA5,
          border: radixColors.blue.blue6,
          bordersubtle: radixColors.blue.blue7,
          ring: radixColors.blue.blue8,
          borderoutline: radixColors.blueA.blueA7,
          borderoutlinehover: radixColors.blueA.blueA8,
          uisolid: radixColors.blue.blue9,
          uisolidhover: radixColors.blue.blue10,
          fgsubtle: radixColors.blueA.blueA11,
          fglink: radixColors.blueA.blueA11,
          fg: radixColors.blue.blue12,
          contrast: radixColors.whiteA.whiteA12,
        },
        destructive: {
          canvas: radixColors.red.red1,
          surface: "#fff5f5cc",
          panel: radixColors.red.red2,
          ui: radixColors.red.red3,
          uihover: radixColors.red.red4,
          uiselected: radixColors.red.red5,
          uisoft: radixColors.redA.redA3,
          uisofthover: radixColors.redA.redA4,
          uisoftselected: radixColors.redA.redA5,
          divider: radixColors.redA.redA5,
          border: radixColors.red.red6,
          bordersubtle: radixColors.red.red7,
          ring: radixColors.red.red8,
          borderoutline: radixColors.redA.redA7,
          borderoutlinehover: radixColors.redA.redA8,
          uisolid: radixColors.red.red9,
          uisolidhover: radixColors.red.red10,
          fgsubtle: radixColors.redA.redA11,
          fglink: radixColors.redA.redA11,
          fg: radixColors.red.red12,
          contrast: radixColors.whiteA.whiteA12,
        },
        accent: {
          canvas: radixColors.plum.plum1,
          surface: "#fdf5fdcc",
          panel: radixColors.plum.plum2,
          ui: radixColors.plum.plum3,
          uihover: radixColors.plum.plum4,
          uiselected: radixColors.plum.plum5,
          uisoft: radixColors.plumA.plumA3,
          uisofthover: radixColors.plumA.plumA4,
          uisoftselected: radixColors.plumA.plumA5,
          divider: radixColors.plumA.plumA5,
          border: radixColors.plum.plum6,
          bordersubtle: radixColors.plum.plum7,
          ring: radixColors.plum.plum8,
          borderoutline: radixColors.plumA.plumA7,
          borderoutlinehover: radixColors.plumA.plumA8,
          uisolid: radixColors.plum.plum9,
          uisolidhover: radixColors.plum.plum10,
          fgsubtle: radixColors.plumA.plumA11,
          fglink: radixColors.plumA.plumA11,
          fg: radixColors.plum.plum12,
          contrast: radixColors.whiteA.whiteA12,
        },
      },
    },
    darkVariables: {
      DEFAULT: {
        canvas: radixColors.mauveDark.mauve1,
        surface: "#22212380",
        translucent: "#1e1d1eb3",
        panel: radixColors.mauveDark.mauve2,
        panelhover: radixColors.mauveDark.mauve3,
        panelselected: radixColors.mauveDark.mauve4,
        ui: radixColors.mauveDark.mauve3,
        uihover: radixColors.mauveDark.mauve4,
        uiselected: radixColors.mauveDark.mauve5,
        uisoft: radixColors.mauveDarkA.mauveA3,
        uisofthover: radixColors.mauveDarkA.mauveA4,
        uisoftselected: radixColors.mauveDarkA.mauveA5,
        divider: radixColors.mauveDarkA.mauveA5,
        border: radixColors.mauveDark.mauve6,
        bordersubtle: radixColors.mauveDark.mauve7,
        ring: radixColors.mauveDark.mauve8,
        borderdisabled: radixColors.mauveDarkA.mauveA6,
        borderoutline: radixColors.mauveDarkA.mauveA7,
        borderoutlinehover: radixColors.mauveDarkA.mauveA8,
        uisolid: radixColors.mauveDark.mauve9,
        uisolidhover: radixColors.mauveDark.mauve10,
        fgsubtle: radixColors.mauveDarkA.mauveA11,
        fg: radixColors.mauveDark.mauve12,
        fglink: radixColors.mauveDarkA.mauveA11,
        fgdisabled: radixColors.mauveDarkA.mauveA8,
        disabled: radixColors.mauveDarkA.mauveA3,
        overlay: radixColors.blackA.blackA8,
        contrast: radixColors.mauveDarkA.mauveA12,
        primary: {
          canvas: radixColors.irisDark.iris1,
          surface: "#1d1b3980",
          panel: radixColors.irisDark.iris2,
          ui: radixColors.irisDark.iris3,
          uihover: radixColors.irisDark.iris4,
          uiselected: radixColors.irisDark.iris5,
          uisoft: radixColors.irisDarkA.irisA3,
          uisofthover: radixColors.irisDarkA.irisA4,
          uisoftselected: radixColors.irisDarkA.irisA5,
          divider: radixColors.irisDarkA.irisA5,
          border: radixColors.irisDark.iris6,
          bordersubtle: radixColors.irisDark.iris7,
          ring: radixColors.irisDark.iris8,
          borderoutline: radixColors.irisDarkA.irisA7,
          borderoutlinehover: radixColors.irisDarkA.irisA8,
          uisolid: radixColors.irisDark.iris9,
          uisolidhover: radixColors.irisDark.iris10,
          fgsubtle: radixColors.irisDarkA.irisA11,
          fglink: radixColors.irisDarkA.irisA11,
          fg: radixColors.irisDark.iris12,
          contrast: radixColors.whiteA.whiteA12,
        },
        secondary: {
          canvas: radixColors.blueDark.blue1,
          surface: "#11213d80",
          panel: radixColors.blueDark.blue2,
          ui: radixColors.blueDark.blue3,
          uihover: radixColors.blueDark.blue4,
          uiselected: radixColors.blueDark.blue5,
          uisoft: radixColors.blueDarkA.blueA3,
          uisofthover: radixColors.blueDarkA.blueA4,
          uisoftselected: radixColors.blueDarkA.blueA5,
          divider: radixColors.blueDarkA.blueA5,
          border: radixColors.blueDark.blue6,
          bordersubtle: radixColors.blueDark.blue7,
          ring: radixColors.blueDark.blue8,
          borderoutline: radixColors.blueDarkA.blueA7,
          borderoutlinehover: radixColors.blueDarkA.blueA8,
          uisolid: radixColors.blueDark.blue9,
          uisolidhover: radixColors.blueDark.blue10,
          fgsubtle: radixColors.blueDarkA.blueA11,
          fglink: radixColors.blueDarkA.blueA11,
          fg: radixColors.blueDark.blue12,
          contrast: radixColors.whiteA.whiteA12,
        },
        destructive: {
          canvas: radixColors.redDark.red1,
          surface: "#2f151780",
          panel: radixColors.redDark.red2,
          ui: radixColors.redDark.red3,
          uihover: radixColors.redDark.red4,
          uiselected: radixColors.redDark.red5,
          uisoft: radixColors.redDarkA.redA3,
          uisofthover: radixColors.redDarkA.redA4,
          uisoftselected: radixColors.redDarkA.redA5,
          divider: radixColors.redDarkA.redA5,
          border: radixColors.redDark.red6,
          bordersubtle: radixColors.redDark.red7,
          ring: radixColors.redDark.red8,
          borderoutline: radixColors.redDarkA.redA7,
          borderoutlinehover: radixColors.redDarkA.redA8,
          uisolid: radixColors.redDark.red9,
          uisolidhover: radixColors.redDark.red10,
          fgsubtle: radixColors.redDarkA.redA11,
          fglink: radixColors.redDarkA.redA11,
          fg: radixColors.redDark.red12,
          contrast: radixColors.whiteA.whiteA12,
        },
        accent: {
          canvas: radixColors.plumDark.plum1,
          surface: "#2f152f80",
          panel: radixColors.plumDark.plum2,
          ui: radixColors.plumDark.plum3,
          uihover: radixColors.plumDark.plum4,
          uiselected: radixColors.plumDark.plum5,
          uisoft: radixColors.plumDarkA.plumA3,
          uisofthover: radixColors.plumDarkA.plumA4,
          uisoftselected: radixColors.plumDarkA.plumA5,
          divider: radixColors.plumDarkA.plumA5,
          border: radixColors.plumDark.plum6,
          bordersubtle: radixColors.plumDark.plum7,
          ring: radixColors.plumDark.plum8,
          borderoutline: radixColors.plumDarkA.plumA7,
          borderoutlinehover: radixColors.plumDarkA.plumA8,
          uisolid: radixColors.plumDark.plum9,
          uisolidhover: radixColors.plumDark.plum10,
          fgsubtle: radixColors.plumDarkA.plumA11,
          fglink: radixColors.plumDarkA.plumA11,
          fg: radixColors.plumDark.plum12,
          contrast: radixColors.whiteA.whiteA12,
        },
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
        canvas: "var(--canvas)",
        surface: "var(--surface)",
        translucent: "var(--translucent)",
        panel: "var(--panel)",
        panelhover: "var(--panelhover)",
        panelselected: "var(--panelselected)",
        ui: "var(--ui)",
        uihover: "var(--uihover)",
        uiselected: "var(--uiselected)",
        uisoft: "var(--uisoft)",
        uisofthover: "var(--uisofthover)",
        uisoftselected: "var(--uisoftselected)",
        divider: "var(--divider)",
        border: "var(--border)",
        bordersubtle: "var(--bordersubtle)",
        ring: "var(--ring)",
        borderdisabled: "var(--borderdisabled)",
        borderoutline: "var(--borderoutline)",
        borderoutlinehover: "var(--borderoutlinehover)",
        uisolid: "var(--uisolid)",
        uisolidhover: "var(--uisolidhover)",
        fgsubtle: "var(--fgsubtle)",
        fg: "var(--fg)",
        fglink: "var(--fglink)",
        fgdisabled: "var(--fgdisabled)",
        disabled: "var(--disabled)",
        overlay: "var(--overlay)",
        contrast: "var(--contrast)",
        primary: {
          DEFAULT: "var(--primary-uisolid)",
          surface: "var(--primary-surface)",
          canvas: "var(--primary-canvas)",
          panel: "var(--primary-panel)",
          ui: "var(--primary-ui)",
          uihover: "var(--primary-uihover)",
          uiselected: "var(--primary-uiselected)",
          uisoft: "var(--primary-uisoft)",
          uisofthover: "var(--primary-uisofthover)",
          uisoftselected: "var(--primary-uisoftselected)",
          divider: "var(--primary-divider)",
          border: "var(--primary-border)",
          bordersubtle: "var(--primary-bordersubtle)",
          ring: "var(--primary-ring)",
          borderoutline: "var(--primary-borderoutline)",
          borderoutlinehover: "var(--primary-borderoutline)",
          uisolid: "var(--primary-uisolid)",
          uisolidhover: "var(--primary-uisolidhover)",
          fgsubtle: "var(--primary-fgsubtle)",
          fglink: "var(--primary-fglink)",
          fg: "var(--primary-fg)",
          contrast: "var(--primary-contrast)",
        },
        secondary: {
          DEFAULT: "var(--secondary-uisolid)",
          surface: "var(--secondary-surface)",
          canvas: "var(--secondary-canvas)",
          panel: "var(--secondary-panel)",
          ui: "var(--secondary-ui)",
          uihover: "var(--secondary-uihover)",
          uiselected: "var(--secondary-uiselected)",
          uisoft: "var(--secondary-uisoft)",
          uisofthover: "var(--secondary-uisofthover)",
          uisoftselected: "var(--secondary-uisoftselected)",
          divider: "var(--secondary-divider)",
          border: "var(--secondary-border)",
          bordersubtle: "var(--secondary-bordersubtle)",
          ring: "var(--secondary-ring)",
          borderoutline: "var(--secondary-borderoutline)",
          borderoutlinehover: "var(--secondary-borderoutline)",
          uisolid: "var(--secondary-uisolid)",
          uisolidhover: "var(--secondary-uisolidhover)",
          fgsubtle: "var(--secondary-fgsubtle)",
          fglink: "var(--secondary-fglink)",
          fg: "var(--secondary-fg)",
          contrast: "var(--secondary-contrast)",
        },
        destructive: {
          DEFAULT: "var(--destructive-uisolid)",
          surface: "var(--destructive-surface)",
          canvas: "var(--destructive-canvas)",
          panel: "var(--destructive-panel)",
          ui: "var(--destructive-ui)",
          uihover: "var(--destructive-uihover)",
          uiselected: "var(--destructive-uiselected)",
          uisoft: "var(--destructive-uisoft)",
          uisofthover: "var(--destructive-uisofthover)",
          uisoftselected: "var(--destructive-uisoftselected)",
          divider: "var(--destructive-divider)",
          border: "var(--destructive-border)",
          bordersubtle: "var(--destructive-bordersubtle)",
          ring: "var(--destructive-ring)",
          borderoutline: "var(--destructive-borderoutline)",
          borderoutlinehover: "var(--destructive-borderoutline)",
          uisolid: "var(--destructive-uisolid)",
          uisolidhover: "var(--destructive-uisolidhover)",
          fgsubtle: "var(--destructive-fgsubtle)",
          fglink: "var(--destructive-fglink)",
          fg: "var(--destructive-fg)",
          contrast: "var(--destructive-contrast)",
        },
        accent: {
          DEFAULT: "var(--accent-uisolid)",
          surface: "var(--accent-surface)",
          canvas: "var(--accent-canvas)",
          panel: "var(--accent-panel)",
          ui: "var(--accent-ui)",
          uihover: "var(--accent-uihover)",
          uiselected: "var(--accent-uiselected)",
          uisoft: "var(--accent-uisoft)",
          uisofthover: "var(--accent-uisofthover)",
          uisoftselected: "var(--accent-uisoftselected)",
          divider: "var(--accent-divider)",
          border: "var(--accent-border)",
          bordersubtle: "var(--accent-bordersubtle)",
          ring: "var(--accent-ring)",
          borderoutline: "var(--accent-borderoutline)",
          borderoutlinehover: "var(--accent-borderoutline)",
          uisolid: "var(--accent-uisolid)",
          uisolidhover: "var(--accent-uisolidhover)",
          fgsubtle: "var(--accent-fgsubtle)",
          fglink: "var(--accent-fglink)",
          fg: "var(--accent-fg)",
          contrast: "var(--accent-contrast)",
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
        none: "calc(16px * var(--scaling))",
        2: "calc(20px * var(--scaling))",
        tight: "calc(20px * var(--scaling))",
        snug: "calc(22px * var(--scaling))",
        3: "calc(24px * var(--scaling))",
        normal: "calc(24px * var(--scaling))",
        4: "calc(26px * var(--scaling))",
        relaxed: "calc(26px * var(--scaling))",
        5: "calc(28px * var(--scaling))",
        6: "calc(30px * var(--scaling))",
        loose: "calc(32px * var(--scaling))",
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
        4.5: "calc(18px * var(--scaling))",
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
      listStyleType: {
        circle: "circle",
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
