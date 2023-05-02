import { cva, VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-primary hover:bg-primary/80 border-transparent text-primary-foreground',
        secondary: 'bg-secondary hover:bg-secondary/80 border-transparent text-secondary-foreground',
        destructive: 'bg-destructive hover:bg-destructive/80 border-transparent text-destructive-foreground',
        green: 'bg-green-400 border-green-500 text-black',
        yellow: 'bg-yellow-400 border-yellow-500 text-black',
        red: 'bg-red-400 border-red-500 text-white',
        outline: 'text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
