"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

export default function FadeInSection({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [skipAnimation, setSkipAnimation] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const id = requestAnimationFrame(() => {
        setSkipAnimation(true);
        setVisible(true);
      });
      return () => cancelAnimationFrame(id);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${skipAnimation ? "transition-none" : "transition-all duration-1000 ease-out"} ${
        visible ? "translate-y-0 scale-100 opacity-100" : "translate-y-14 scale-95 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
