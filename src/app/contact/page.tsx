import type { Metadata } from "next";
import Button from "@/components/Button";
import PlaceholderImage from "@/components/PlaceholderImage";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Visit Us | Helados El Güero",
  description: "Address, hours, and contact info for Helados El Güero in Council Bluffs, Iowa.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="text-center">
        <h1 className="font-display text-5xl text-espresso">Visit Us</h1>
        <p className="mt-3 font-body text-espresso/70">
          Come by for a paleta, a cup of esquites, or just to say hi.
        </p>
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <PlaceholderImage label="map" className="aspect-square w-full md:aspect-auto md:h-full" />

        <div className="space-y-8">
          <div>
            <p className="font-display text-xl text-terracotta">Address</p>
            <p className="mt-2 font-body text-espresso/80">
              {siteConfig.address.line1}
              <br />
              {siteConfig.address.line2}
            </p>
          </div>

          <div>
            <p className="font-display text-xl text-terracotta">Contact</p>
            <p className="mt-2 font-body text-espresso/80">
              <a href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`} className="hover:text-terracotta">
                {siteConfig.phone}
              </a>
              <br />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-terracotta">
                {siteConfig.email}
              </a>
            </p>
          </div>

          <div>
            <p className="font-display text-xl text-terracotta">Hours</p>
            <ul className="mt-2 space-y-1 font-body text-espresso/80">
              {siteConfig.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4 border-b border-espresso/10 py-1">
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button href={siteConfig.order.doordash} external>
              Order on DoorDash
            </Button>
            <Button href={siteConfig.order.grubhub} external variant="outline">
              Order on Grubhub
            </Button>
          </div>

          <div>
            <p className="font-body text-sm text-espresso/60">
              Planning something bigger? For catering or large orders, call or email us directly —
              we&apos;ll take care of you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
