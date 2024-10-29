import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Typography from "./typography";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  error?: string;
  testid?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, name, onFocus, onBlur, label, testid, type = "text", ...props }, ref) => {

    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      if (onFocus) onFocus(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      setHasValue(!!e.target.value); // Verifica se há valor
      if (onBlur) onBlur(e);
    };

    return (
      <div className="relative w-full">
        <label
          htmlFor={name}
          className={`absolute left-3 text-gray-500 transition-all duration-200 ease-out 
            ${isFocused || hasValue ? "-top-3 text-xs text-green-600" : "top-2 text-sm"}`}
        >
          {label}
        </label>
        <input
          data-testid={testid}
          id={name}
          type={type}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={cn(
            `peer h-10 w-full border-b border-gray-300 bg-transparent px-3 py-2 text-sm text-gray-900 shadow-sm transition-all duration-200 placeholder-transparent focus:border-green-500 focus:outline-none outline-none focus:ring-0  disabled:cursor-not-allowed disabled:opacity-50`,
            className
          )}
          ref={ref}
          {...props}
        />
        <Typography variant="span" className="text-red-500">
            {error}
        </Typography>
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
