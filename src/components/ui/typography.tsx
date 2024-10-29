import React from "react";
import { cn } from "@/lib/utils"

interface TypographyProps {
    children: React.ReactNode;
    variant?: "p" | "span"  | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    color?: 'text-green-light' | 'text-white' | 'text-black';
    className?: string;
}

const Typography: React.FC<TypographyProps> = ({className, color = 'text-white', variant = 'p', children, ...props }) => {
    const Component = variant;

    const styles = {
        p: `text-base font-normal`,
        span: `text-sm font-normal`,
        h1: `text-xl font-bold`,
        h2: `text-3xl font-bold`,
        h3: `text-xl md:text-2xl font-light`,
        h4: `text-xl font-bold`,
        h5: `text-lg font-bold`,
        h6: `text-base font-bold`,
    };

    return (
        <Component {...props} className={cn(styles[variant], color, className)}>
            {children}
        </Component>
    );
};

export default Typography;