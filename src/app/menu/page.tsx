import type { Metadata } from "next";
import { MENU } from "@/lib/menu-data";

export const metadata: Metadata = {
  title: "Menu | Helados El Güero",
  description: "Paletas, helados, esquites, elotes, mangonadas, tostilocos, and fresas con crema.",
};

export default function MenuPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="text-center">
        <h1 className="font-display text-5xl text-espresso">Our Menu</h1>
        <p className="mt-3 font-body text-espresso/70">
          Everything made fresh, in-house, every day. Prices and flavors may vary seasonally.
        </p>
      </div>

      <nav className="mt-8 flex flex-wrap justify-center gap-3 font-body text-sm font-semibold">
        {MENU.map((category) => (
          <a
            key={category.id}
            href={`#${category.id}`}
            className="rounded-full border-2 border-terracotta px-4 py-2 text-terracotta transition-colors hover:bg-terracotta hover:text-cream"
          >
            {category.title}
          </a>
        ))}
      </nav>

      <div className="mt-12 space-y-16">
        {MENU.map((category) => (
          <section key={category.id} id={category.id} className="scroll-mt-24">
            <h2 className="font-display text-3xl text-espresso">{category.title}</h2>
            <p className="mt-1 font-body text-espresso/70">{category.intro}</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-start justify-between gap-4 rounded-2xl border-2 border-espresso/10 bg-cream p-5"
                >
                  <div>
                    <p className="font-display text-lg text-espresso">{item.name}</p>
                    <p className="mt-1 font-body text-sm text-espresso/70">{item.description}</p>
                  </div>
                  <p className="whitespace-nowrap font-body text-lg font-semibold text-terracotta">
                    {item.price}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
