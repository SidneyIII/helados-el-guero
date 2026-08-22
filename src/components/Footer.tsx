"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="border-t-2 border-espresso/10 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <p className="font-body text-sm font-semibold text-espresso">{t.tagline}</p>
          <div className="mt-4 flex gap-4 font-body text-sm font-semibold text-terracotta">
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-espresso">
              Instagram
            </a>
            <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-espresso">
              Facebook
            </a>
          </div>
        </div>

        <div className="font-body text-sm text-espresso/80">
          <p className="font-semibold text-espresso">{t.footer.visitUs}</p>
          <p className="mt-2">{siteConfig.address.line1}</p>
          <p>{siteConfig.address.line2}</p>
          <p className="mt-2">
            <a href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`} className="hover:text-terracotta">
              {siteConfig.phone}
            </a>
          </p>
        </div>

        <div className="font-body text-sm text-espresso/80">
          <p className="font-semibold text-espresso">{t.footer.hours}</p>
          <ul className="mt-2 space-y-1">
            {siteConfig.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{t.days[h.day]}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-espresso/10 px-6 py-4 text-center font-body text-xs text-espresso/50">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. {t.footer.madeWithCare}
        </p>
        <p className="mt-1">
          <a href="#contact" className="hover:text-terracotta">
            {t.footer.getInTouch}
          </a>
        </p>
        <p className="mt-3 flex justify-center gap-4">
          <Link href="/privacy-policy" className="hover:text-terracotta">
            {t.footer.privacyPolicy}
          </Link>
          <Link href="/terms" className="hover:text-terracotta">
            {t.footer.terms}
          </Link>
        </p>
      </div>
    </footer>
  );
}
