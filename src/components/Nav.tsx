"use client";

import Link from "next/link";
import { useState } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Visit Us" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-espresso/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-2xl tracking-wide text-espresso">
          EL G<span className="text-terracotta">Ü</span>ERO
        </Link>

        <nav className="hidden gap-8 font-body font-semibold text-espresso md:flex">
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-terracotta">
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border-2 border-espresso/20 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="h-0.5 w-5 bg-espresso" />
          <span className="h-0.5 w-5 bg-espresso" />
          <span className="h-0.5 w-5 bg-espresso" />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t-2 border-espresso/10 bg-white px-6 py-4 font-body font-semibold text-espresso md:hidden">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 transition-colors hover:bg-cream hover:text-terracotta"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
