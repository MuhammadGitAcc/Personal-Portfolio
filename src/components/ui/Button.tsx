import type { ReactNode } from "react";
import { getLinkProps } from "../../utils/linkProps";

type ButtonVariant = "primary" | "secondary" | "neutral";

type ButtonProps = {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary hover:bg-primary/90 text-white",
  secondary:
    "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white",
  neutral: "bg-gray-600 hover:bg-gray-700 text-white",
};

const Button = ({ href, variant = "primary", children, className = "" }: ButtonProps) => {
  return (
    <a
      href={href}
      {...getLinkProps(href)}
      className={`inline-flex items-center justify-center gap-2 font-medium py-3 px-8 rounded-md transition-colors ${variantClasses[variant]} ${className}`.trim()}
    >
      {children}
    </a>
  );
};

export default Button;
