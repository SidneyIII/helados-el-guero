"use client";

import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  const label = translations[language].languageToggle;

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="rounded-full border-2 border-terracotta/30 px-2.5 py-1 font-body text-sm font-semibold whitespace-nowrap text-terracotta uppercase tracking-wide transition-colors hover:bg-terracotta hover:text-cream"
    >
      {label}
    </button>
  );
}
