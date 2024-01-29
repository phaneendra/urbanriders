import { type VariantProps } from 'class-variance-authority';
import { boxStyles } from './Box.styles';

export interface BoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof boxStyles> {
  asChild?: boolean;
}

export type BoxElement = React.ElementRef<'div'>;
