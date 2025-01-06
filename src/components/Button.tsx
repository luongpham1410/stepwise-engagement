import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className,
  ...props 
}) => {
  return (
    <button
      className={cn(
        "px-6 py-3 rounded-md font-medium transition-all duration-200 ease-out",
        "hover:translate-y-[-1px] active:translate-y-[1px]",
        variant === 'primary' && "bg-primary text-primary-foreground hover:bg-primary/90",
        variant === 'secondary' && "bg-secondary text-secondary-foreground hover:bg-secondary/90",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;