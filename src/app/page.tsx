import Button from "@/components/Button";
import PlaceholderImage from "@/components/PlaceholderImage";
import { siteConfig } from "@/lib/site-config";

const FEATURED = [
  {
    label: "paletas & helados",
    title: "Paletas & Helados",
    description: "Handmade Mexican popsicles and ice cream in classic and seasonal flavors.",
  },
  {
    label: "esquites & elotes",
    title: "Esquites & Elotes",
    description: "Warm corn cups and cobs, loaded the traditional way.",
  },
  {
    label: "mangonada",
    title: "Mangonadas & Tostilocos",
    description: "Chamoy, tajín, and all the fixings for our most-loved snacks.",
  },
  {
    label: "fresas con crema",
    title: "Fresas Con Crema",
    description: "Our take on the trending strawberries and cream, made fresh to order.",
  },
];

export default function Home() {
  return (
    <div>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="font-body text-sm font-semibold uppercase tracking-widest text-terracotta">
            Council Bluffs, Iowa
          </p>
          <h1 className="mt-3 font-display text-5xl leading-tight text-espresso md:text-6xl">
            Family-Owned.
            <br />
            Full of Flavor.
          </h1>
          <p className="mt-5 max-w-md font-body text-lg text-espresso/80">
            {siteConfig.tagline}. Real recipes, real family, made fresh every day.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/menu">View Menu</Button>
            <Button href="/contact" variant="outline">
              Visit Us
            </Button>
          </div>
        </div>
        <PlaceholderImage label="storefront" className="aspect-[4/3] w-full" />
      </section>

      <section className="border-y-2 border-espresso/10 bg-cream">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-3">
          <div>
            <p className="font-display text-lg text-terracotta">Hours</p>
            <p className="mt-1 font-body text-espresso/80">Tue–Sun, see full schedule</p>
          </div>
          <div>
            <p className="font-display text-lg text-terracotta">Location</p>
            <p className="mt-1 font-body text-espresso/80">
              {siteConfig.address.line1}, {siteConfig.address.line2}
            </p>
          </div>
          <div>
            <p className="font-display text-lg text-terracotta">Order</p>
            <p className="mt-1 font-body text-espresso/80">
              Available on DoorDash &amp; Grubhub for delivery
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-3xl text-espresso">On the Menu</h2>
        <p className="mt-2 max-w-xl font-body text-espresso/70">
          From handmade paletas to trending fresas con crema, everything is made fresh, in-house.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-4 rounded-2xl border-2 border-espresso/10 bg-cream p-4"
            >
              <PlaceholderImage label={item.label} className="aspect-square w-full" />
              <div>
                <p className="font-display text-base text-espresso">{item.title}</p>
                <p className="mt-1 font-body text-sm text-espresso/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Button href="/menu">See Full Menu</Button>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2">
        <PlaceholderImage label="the family" className="aspect-[4/3] w-full md:order-2" />
        <div className="md:order-1">
          <h2 className="font-display text-3xl text-espresso">A Family Business, Not a Chain</h2>
          <p className="mt-4 font-body text-espresso/80">
            Helados El Güero is run by our family, for our neighbors. Every paleta and every cup of
            esquites comes from recipes we grew up with — no corporate playbook, just the real thing.
          </p>
          <div className="mt-6">
            <Button href="/about" variant="outline">
              Read Our Story
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-terracotta">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-14 text-center">
          <h2 className="font-display text-3xl text-cream">Order for Delivery</h2>
          <p className="max-w-md font-body text-cream/90">
            Can&apos;t make it in? Order Helados El Güero through DoorDash or Grubhub.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href={siteConfig.order.doordash} external variant="inverse">
              Order on DoorDash
            </Button>
            <Button href={siteConfig.order.grubhub} external variant="inverse">
              Order on Grubhub
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
