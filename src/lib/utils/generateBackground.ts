import * as radixColors from "@radix-ui/colors";

const colors = [
  radixColors.bronze.bronze3,
  radixColors.gold.gold3,
  radixColors.brown.brown3,
  radixColors.orange.orange3,
  radixColors.tomato.tomato3,
  radixColors.red.red3,
  radixColors.ruby.ruby3,
  radixColors.crimson.crimson3,
  radixColors.pink.pink3,
  radixColors.plum.plum3,
  radixColors.purple.purple3,
  radixColors.violet.violet3,
  radixColors.iris.iris3,
  radixColors.indigo.indigo3,
  radixColors.blue.blue3,
  radixColors.cyan.cyan3,
  radixColors.teal.teal3,
  radixColors.jade.jade3,
  radixColors.green.green3,
  radixColors.grass.grass3,
];

export const generateBackground = () => {
  const color = colors[Math.floor(Math.random() * colors.length)];
  // return `radial-gradient(at top right, ${color}, rgba(255, 255, 255, 0))`;
  return color;
};
