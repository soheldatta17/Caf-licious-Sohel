import * as React from 'react';

// Define button variants and sizes
const buttonVariants = {
  variant: {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    link: 'text-primary underline-offset-4 hover:underline',
  },
  size: {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 rounded-md px-3',
    lg: 'h-11 rounded-md px-8',
    icon: 'h-10 w-10',
  },
};

// ButtonProps interface
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants.variant;
  size?: keyof typeof buttonVariants.size;
  asChild?: boolean; // Optional, if you want to render a custom component
}

// Button component
const Button: React.FC<ButtonProps> = ({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}) => {
  // Determine the classes based on the variant and size props
  const buttonClass = [
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    buttonVariants.variant[variant],
    buttonVariants.size[size],
    className, // Allow custom classes to be passed in
  ]
    .filter(Boolean) // Remove falsy values
    .join(' ');

  // Render a normal button tag or any other element if asChild is true
  if (asChild) {
    return (
      <span
        className={buttonClass}
        {...props}
      />
    );
  }

  return (
    <button
      className={buttonClass}
      {...props}
    />
  );
};

Button.displayName = 'Button';

export { Button };
