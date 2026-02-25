import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, children, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variants = {
      primary: 'bg-accent text-white hover:bg-accent/90 shadow-lg',
      secondary: 'bg-accent-secondary text-white hover:bg-accent-secondary/90 shadow-lg',
      outline: 'border-2 border-accent text-accent hover:bg-accent hover:text-white',
      ghost: 'text-foreground hover:bg-accent hover:text-white',
      glass: 'glass-effect text-white hover:bg-white/20 border-white/30'
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm min-h-[44px]',
      md: 'px-6 py-3 text-base min-h-[44px]',
      lg: 'px-8 py-4 text-lg min-h-[48px]'
    };

    if (asChild) {
      return (
        <span
          className={cn(
            baseClasses,
            variants[variant],
            sizes[size],
            className
          )}
          {...props}
        >
          {children}
        </span>
      );
    }

    return (
      <button
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
