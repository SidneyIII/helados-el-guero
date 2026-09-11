"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import type { Flavor } from "@/lib/menu-data";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

// Cycles through the site's three crayon-pill colors (terracotta, sage,
// espresso) -- the same "red-orange, green, black" palette used for the
// menu's jump-link pills.
const PILL_COLORS = ["pill-crayon-a", "pill-crayon-b", "pill-crayon-c"];

export default function FlavorsModal({
  open,
  onClose,
  flavors,
  title,
}: {
  open: boolean;
  onClose: () => void;
  flavors: Flavor[];
  title?: string;
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

  const modalTitle = title ?? t.modalTitle;

  return createPortal(
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-espresso/50 p-6 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={modalTitle}
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[85vh] w-full max-w-md flex-col rounded-2xl border-2 border-espresso/10 bg-cream text-center shadow-xl"
      >
        <div className="relative shrink-0 p-6 pb-3 md:p-8 md:pb-4">
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

          <p className="font-display text-2xl text-espresso">{modalTitle}</p>
        </div>

        <div className="overflow-y-auto px-6 pb-6 md:px-8 md:pb-8">
          <ul className="grid grid-cols-1 gap-x-3 gap-y-3 sm:grid-cols-2">
            {flavors.map((flavor, i) => (
              <li key={flavor.en} className="flex justify-center">
                <span
                  className={`${
                    flavor.soldOut
                      ? "border-2 border-espresso/20 text-espresso/40"
                      : PILL_COLORS[i % PILL_COLORS.length]
                  } flex items-center justify-center gap-1.5 rounded-full px-4 py-1.5 text-center font-body text-sm font-semibold`}
                >
                  {flavor[language]}
                  {flavor.soldOut && (
                    <span className="text-xs font-bold uppercase tracking-wide">({t.soldOut})</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>,
    document.body,
  );
}
