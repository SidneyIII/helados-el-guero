import Tilde from "@/components/Tilde";

const LINKS = [
  { href: "#home", label: "Home", color: "text-terracotta" },
  { href: "#menu", label: "Menu", color: "text-sage" },
  { href: "#about", label: "Our Story", color: "text-terracotta" },
  { href: "#contact", label: "Visit Us", color: "text-sage" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-espresso/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-3 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4">
        <Tilde className="hidden h-5 w-10 shrink-0 md:block" />
        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 font-body font-semibold sm:gap-x-6 md:gap-x-8">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm uppercase tracking-wide whitespace-nowrap transition-colors hover:text-espresso sm:text-base md:text-lg ${link.color}`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <Tilde flip className="hidden h-5 w-10 shrink-0 md:block" />
      </div>
    </header>
  );
}
