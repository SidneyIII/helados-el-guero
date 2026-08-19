import type { CSSProperties } from "react";

type TapeProps = {
  className?: string;
  rotate?: number;
  color?: "cream" | "terracotta" | "sage";
};

const COLOR_STYLES = {
  cream: "bg-cream/90",
  terracotta: "bg-terracotta/70",
  sage: "bg-sage/70",
} as const;

// A small piece of washi/masking tape: a rotated, semi-transparent strip
// with torn-looking edges and a faint diagonal weave texture, plus a very
// subtle idle sway so pinned items feel a little alive.
export default function Tape({ className = "", rotate = -6, color = "terracotta" }: TapeProps) {
  return (
    <span
      aria-hidden="true"
      className={`pinned pointer-events-none absolute block h-5 w-14 ${COLOR_STYLES[color]} shadow-sm ring-1 ring-espresso/15 ${className}`}
      style={
        {
          "--rot": `${rotate}deg`,
          clipPath: "polygon(3% 15%, 97% 0%, 100% 85%, 2% 100%)",
          backgroundImage:
            "repeating-linear-gradient(115deg, rgba(43,33,26,0.07) 0px, rgba(43,33,26,0.07) 2px, transparent 2px, transparent 6px)",
        } as CSSProperties
      }
    />
  );
}
