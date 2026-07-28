import type { Metadata } from "next";
import Button from "@/components/Button";
import PlaceholderImage from "@/components/PlaceholderImage";

export const metadata: Metadata = {
  title: "Our Story | Helados El Güero",
  description: "The family behind Helados El Güero in Council Bluffs, Iowa.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h1 className="font-display text-5xl text-espresso">Our Story</h1>
        <p className="mt-4 font-body text-lg text-espresso/80">
          Helados El Güero started with one family, one cart, and recipes passed down for
          generations. Today we&apos;re still family-run — same recipes, same care, now with a home
          of our own in Council Bluffs.
        </p>
      </section>

      <section className="mx-auto grid max-w-5xl items-center gap-10 px-6 py-10 md:grid-cols-2">
        <PlaceholderImage label="ribbon cutting, opening day" className="aspect-[4/3] w-full" />
        <div>
          <h2 className="font-display text-2xl text-espresso">How We Started</h2>
          <p className="mt-3 font-body text-espresso/80">
            Placeholder copy: share when and why the shop opened, who started it, and what the
            first day was like. This is where the family&apos;s own words should go.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl items-center gap-10 px-6 py-10 md:grid-cols-2">
        <div className="md:order-2">
          <h2 className="font-display text-2xl text-espresso">Made With Family Recipes</h2>
          <p className="mt-3 font-body text-espresso/80">
            Placeholder copy: talk about the recipes — where they came from, what makes them
            different, and why everything is made in-house instead of bought pre-made.
          </p>
        </div>
        <PlaceholderImage label="the family, working together" className="aspect-[4/3] w-full md:order-1" />
      </section>

      <section className="mx-auto grid max-w-5xl items-center gap-10 px-6 py-10 md:grid-cols-2">
        <PlaceholderImage label="live music night at the shop" className="aspect-[4/3] w-full" />
        <div>
          <h2 className="font-display text-2xl text-espresso">More Than Ice Cream</h2>
          <p className="mt-3 font-body text-espresso/80">
            Placeholder copy: mention community events, live music nights, or anything that shows
            the shop is a neighborhood gathering spot, not just a place to grab a paleta.
          </p>
        </div>
      </section>

      <section className="bg-terracotta">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-14 text-center">
          <h2 className="font-display text-3xl text-cream">Come Say Hi</h2>
          <p className="max-w-md font-body text-cream/90">
            We&apos;d love to meet you in person — stop by and taste the difference family-made makes.
          </p>
          <Button href="/contact" variant="inverse">
            Visit Us
          </Button>
        </div>
      </section>
    </div>
  );
}
