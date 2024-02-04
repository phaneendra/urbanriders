import { cva } from 'class-variance-authority';

export const boxStyles = cva('box-border', {
  variants: {
    display: {
      inline: 'inline',
      inlineBlock: 'inline-block',
      block: 'block',
    },
  },
});
