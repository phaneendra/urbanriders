import plugin from "tailwindcss/plugin";

export const cpPlugin = plugin(
  // Add css variables to baselayer
  function ({ addBase }) {
    addBase({
      ":root": {
        "--scaling": "1",
        "--radius-factor": "1.5",
        "--shadow-color": "220 40% 2%",
        "--shadow-strength": "25%",
        "--inner-shadow-highlight":
          "inset 0 -.5px 0 0 #fff1, inset 0 .5px 0 0 #0007",
      },
      ".dark": {
        "--shadow-color": "220 3% 15%",
        "--shadow-strength": "1%",
        "--inner-shadow-highlight":
          "inset 0 -.5px 0 0 #fff, inset 0 .5px 0 0 #0001",
      },
      "[data-radius='none']": {
        "--radius-factor": "0",
        "--radius-full": "0px",
        "--radius-thumb": "0.5px",
      },
      "[data-radius='small']": {
        "--radius-factor": "0.75",
        "--radius-full": "0px",
        "--radius-thumb": "0.5px",
      },
      "[data-radius='medium']": {
        "--radius-factor": "1",
        "--radius-full": "0px",
        "--radius-thumb": "9999px",
      },
      "[data-radius='large']": {
        "--radius-factor": "1.5",
        "--radius-full": "0px",
        "--radius-thumb": "9999px",
      },
      "[data-radius='full']": {
        "--radius-factor": "1.5",
        "--radius-full": "9999px",
        "--radius-thumb": "9999px",
      },
      "[data-scaling='90%']": { "--scaling": "0.9" },
      "[data-scaling='95%']": { "--scaling": "0.95" },
      "[data-scaling='100%']": { "--scaling": "1" },
      "[data-scaling='105%']": { "--scaling": "1.05" },
      "[data-scaling='110%']": { "--scaling": "1.1" },
    });

    addBase({
      "*": {
        "@apply border-border": {},
      },
      body: {
        "@apply bg-canvas text-fg": {},
        fontFeatureSettings: '"rlig" 1,"calt" 1',
      },
    });
  },
  // Extend the tailwind themes with themeable utilities
  {}
);
