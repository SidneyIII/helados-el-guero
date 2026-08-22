"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { HELADO_FLAVORS } from "@/lib/menu-data";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

// Cycles through the site's three crayon-pill colors (terracotta, sage,
// espresso) -- the same "red-orange, green, black" palette used for the
// menu's jump-link pills.
const PILL_COLORS = ["pill-crayon-a", "pill-crayon-b", "pill-crayon-c"];

export default function HeladosFlavorsModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { language } = useLanguage();
  const t = translations[language].flavors;

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-espresso/50 p-6 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={t.modalTitle}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md rounded-2xl border-2 border-espresso/10 bg-cream p-6 text-center shadow-xl md:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={t.close}
          className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full text-espresso/60 transition-colors hover:bg-espresso/10 hover:text-espresso"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <p className="font-display text-2xl text-espresso">{t.modalTitle}</p>

        <ul className="mt-5 grid grid-cols-1 gap-x-3 gap-y-3 sm:grid-cols-2">
          {HELADO_FLAVORS.map((flavor, i) => (
            <li key={flavor.en} className="flex justify-center">
              <span
                className={`${PILL_COLORS[i % PILL_COLORS.length]} flex items-center justify-center rounded-full px-4 py-1.5 text-center font-body text-sm font-semibold`}
              >
                {flavor[language]}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>,
    document.body,
  );
}
