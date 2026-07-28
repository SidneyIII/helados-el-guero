import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "inverse";
  external?: boolean;
  className?: string;
};

const VARIANT_STYLES = {
  primary: "bg-terracotta text-cream hover:bg-espresso",
  outline: "border-2 border-terracotta text-terracotta hover:bg-terracotta hover:text-cream",
  inverse: "bg-cream text-terracotta hover:bg-espresso hover:text-cream",
} as const;

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 font-body font-semibold transition-colors";
  const styles = VARIANT_STYLES[variant];

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${styles} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
