import type { ReactNode } from "react";
import { getLinkProps } from "../../utils/linkProps";

type IconLinkVariant = "blue" | "red" | "green" | "gray" | "plain";

type IconLinkProps = {
  href: string;
  label: string;
  children: ReactNode;
  variant?: IconLinkVariant;
};

const variantClasses: Record<IconLinkVariant, string> = {
  blue: "bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full",
  red: "bg-red-600 hover:bg-red-700 text-white p-3 rounded-full",
  green: "bg-green-600 hover:bg-green-700 text-white p-3 rounded-full",
  gray: "bg-gray-600 hover:bg-gray-700 text-white p-3 rounded-full",
  plain: "text-gray-300 hover:text-white",
};

const IconLink = ({ href, label, children, variant = "plain" }: IconLinkProps) => {
  return (
    <a
      href={href}
      {...getLinkProps(href)}
      aria-label={label}
      className={`transition-colors ${variantClasses[variant]}`}
    >
      {children}
    </a>
  );
};

export default IconLink;
