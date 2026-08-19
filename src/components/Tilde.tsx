import { useId } from "react";

export default function Tilde({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  const gradientId = useId();
  return (
    <svg
      viewBox="0 0 64 24"
      aria-hidden="true"
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#C1502E" />
          <stop offset="100%" stopColor="#8A9B6E" />
        </linearGradient>
      </defs>
      <path
        d="M2,12 C10,2 18,2 26,12 C34,22 42,22 50,12 C54,7 58,7 62,12"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth={4}
        strokeLinecap="round"
      />
    </svg>
  );
}
