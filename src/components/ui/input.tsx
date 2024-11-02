import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type = "text", ...props }, ref) => {
   return (
      <input
         type={type}
         className={cn(
            "flex h-12 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-base placeholder-gray-500",
            "transition-all duration-200 ease-in-out",
            "shadow-sm hover:shadow-md focus:shadow-md",
            "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
            "disabled:cursor-not-allowed disabled:opacity-50",
            className,
         )}
         ref={ref}
         {...props}
      />
   );
});
Input.displayName = "Input";

export { Input };
