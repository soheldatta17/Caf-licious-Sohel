import * as React from "react";

interface ProgressProps extends React.ComponentPropsWithoutRef<"div"> {
  value?: number; 
  max?: number;   
  className?: string; 
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ value = 0, max = 100, className, ...props }, ref) => {
    
    const progressValue = Math.min(Math.max(value, 0), max);
    const percentage = (progressValue / max) * 100;

    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuenow={progressValue}
        aria-valuemin={0}
        aria-valuemax={max}
        className={`relative h-4 w-full overflow-hidden rounded-full bg-gray-200 ${className}`}
        {...props}
      >
        <div
          className="absolute left-0 top-0 h-full bg-blue-500 transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>
    );
  }
);

Progress.displayName = "Progress";

export { Progress };
