"use client";

import Image from "next/image";
import PlaceholderImage from "@/components/PlaceholderImage";
import FadeInSection from "@/components/FadeInSection";
import Tilde from "@/components/Tilde";
import Tape from "@/components/Tape";
import StickyNote from "@/components/StickyNote";
import ReviewForm from "@/components/ReviewForm";
import { siteConfig } from "@/lib/site-config";
import { MENU, type MenuCategory } from "@/lib/menu-data";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

// Small fixed set of tilt angles cycled by index so each pinned card/photo
// reads as casually placed rather than perfectly repeating or random
// (random would also risk a server/client hydration mismatch).
const TILTS = [-2, 1.5, -1, 2.5, -2.5, 1, -1.5, 2];

// One per category so every menu section gets its own hand-drawn crayon
// outline instead of a couple of shapes cycling around. The nav pills reuse
// the same letters (via pill-crayon-*) so each jump link visually matches
// the section it points to.
const CRAYON_LETTERS = ["a", "b", "c", "d", "e"];
const CRAYON_VARIANTS = CRAYON_LETTERS.map((letter) => `crayon-${letter}`);

function MenuCategoryBlock({ category, index }: { category: MenuCategory; index: number }) {
  const { language } = useLanguage();
  const t = translations[language];
  const single = category.items.length === 1;
  const crayon = CRAYON_VARIANTS[index % CRAYON_VARIANTS.length];
  return (
    <FadeInSection>
      <section id={category.id} className={`${crayon} scroll-mt-20 p-6 text-center md:p-7`}>
        <h3 className="flex items-center justify-center gap-3 font-display text-3xl text-espresso">
          <Tilde className="h-5 w-10 shrink-0" />
          {category.title[language]}
          <Tilde flip className="h-5 w-10 shrink-0" />
        </h3>
        <p className="mt-1 font-body text-espresso/70">{category.intro[language]}</p>

        {category.image && (
          <div
            className="relative mx-auto mt-8 w-full max-w-xs"
            style={{ transform: `rotate(${TILTS[index % TILTS.length]}deg)` }}
          >
            <Image
              src={category.image.src}
              alt={category.image.alt}
              width={800}
              height={600}
              className="h-auto w-full rounded-lg border-[6px] border-white object-cover shadow-lg"
            />
            <Tape rotate={-12} className="-top-3 -left-4 h-6 w-16" />
          </div>
        )}

        <div
          className={`mt-10 grid items-start gap-x-4 gap-y-10 ${
            single ? "mx-auto max-w-xs" : "sm:grid-cols-2"
          }`}
        >
          {category.items.map((item, ii) => {
            const tilt = TILTS[(index * 3 + ii) % TILTS.length];
            return (
              <div key={item.name.en} className="relative" style={{ transform: `rotate(${tilt}deg)` }}>
                {item.popular && (
                  <StickyNote
                    label={t.menu.fanFavorite}
                    rotate={tilt > 0 ? -9 : 9}
                    className="-top-5 -right-3"
                  />
                )}
                <Tape rotate={tilt * 3} className="-top-2.5 left-1/2 h-5 w-14 -translate-x-1/2" />
                <div className="flex h-full flex-col overflow-hidden rounded-xl border-2 border-espresso/10 bg-white text-center shadow-md">
                  {item.image && (
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      width={400}
                      height={300}
                      className="aspect-[6/5] w-full object-cover"
                    />
                  )}
                  <div className="flex flex-1 flex-col items-center gap-1 p-5">
                    <p className="font-display text-lg text-espresso">{item.name[language]}</p>
                    <p className="font-body text-sm text-espresso/70">{item.description[language]}</p>
                    <p className="mt-1 font-body text-lg font-semibold text-terracotta">
                      {item.price}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </FadeInSection>
  );
}

// Images (and which items even have one) live here, keyed by the same index
// as translations.story.items -- title/imageLabel/body come from the
// translations dictionary instead, so each language stays in sync from one
// source without duplicating the image data per-language.
const STORY_IMAGES: ({ src: string; alt: string } | undefined)[] = [
  { src: "/story/oldphoto.png", alt: "How we started" },
  { src: "/story/grandopening.png", alt: "Made with family recipes" },
  undefined,
  undefined,
];

// Tilted-photo-plus-taped-card formation borrowed from the menu category
// block, minus the crayon frame -- kept plain for now while this section is
// still being experimented with.
function StoryBlock({ index }: { index: number }) {
  const { language } = useLanguage();
  const item = translations[language].story.items[index];
  const image = STORY_IMAGES[index];
  const tilt = TILTS[index % TILTS.length];
  return (
    <FadeInSection>
      <section className="p-6 text-center md:p-7">
        <h3 className="flex items-center justify-center gap-3 font-display text-2xl text-espresso">
          <Tilde className="h-5 w-10 shrink-0" />
          {item.title}
          <Tilde flip className="h-5 w-10 shrink-0" />
        </h3>

        <div
          className="relative mx-auto mt-8 w-full max-w-md"
          style={{ transform: `rotate(${tilt}deg)` }}
        >
          {image ? (
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={600}
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
          ) : (
            <PlaceholderImage label={item.imageLabel} className="aspect-[4/3] w-full" />
          )}
          <Tape rotate={-12} className="-top-3 -left-4 h-6 w-16" />
        </div>

        <div
          className="relative mx-auto mt-10 max-w-xs"
          style={{ transform: `rotate(${-tilt}deg)` }}
        >
          <Tape rotate={tilt * 3} className="-top-2.5 left-1/2 h-5 w-14 -translate-x-1/2" />
          <div className="rounded-xl border-2 border-espresso/10 bg-white p-5 shadow-md">
            <p className="font-body text-sm text-espresso/80">{item.body}</p>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}

// A tiny hand-drawn spiral flourish, matching the corner doodles on the
// crayon frame artwork -- placed at the tip of each arm below instead of
// tucked into a box corner.
const CROSS_SPIRAL = "M-8,1 Q-8,-6.5 0,-6.5 Q8,-6.5 8,1.5 Q8,7.5 2,7.5 Q-3,7.5 -2,2.5";

// The little slivers on the menu section's crayon boxes aren't drawn on
// purpose -- they're the border artwork's scattered accent dots (see the
// circle elements in public/graphics/crayon-*.svg) landing in an edge strip
// that CSS border-image stretches lengthwise and squashes thin, turning a
// round dot into a thin blade. Reproduced here directly as short, thick,
// round-capped ticks laid along each arm -- horizontal ticks near the
// horizontal arm, vertical near the vertical -- in the other three palette
// colors, since the shaft itself already uses terracotta.
const CROSS_SLIVERS: {
  x: number;
  y: number;
  axis: "h" | "v";
  length: number;
  width: number;
  color: string;
  opacity: number;
}[] = [
  { x: 442, y: 160, axis: "v", length: 24, width: 6, color: "#2B211A", opacity: 0.7 },
  { x: 409, y: 430, axis: "v", length: 18, width: 5, color: "#E8B896", opacity: 0.6 },
  { x: 444, y: 760, axis: "v", length: 22, width: 5.5, color: "#8A9B6E", opacity: 0.65 },
  { x: 405, y: 990, axis: "v", length: 20, width: 6, color: "#2B211A", opacity: 0.6 },
  { x: 120, y: 601, axis: "h", length: 22, width: 5.5, color: "#8A9B6E", opacity: 0.65 },
  { x: 285, y: 605, axis: "h", length: 18, width: 5, color: "#E8B896", opacity: 0.6 },
  { x: 585, y: 593, axis: "h", length: 24, width: 6, color: "#2B211A", opacity: 0.7 },
  { x: 735, y: 601, axis: "h", length: 20, width: 5.5, color: "#8A9B6E", opacity: 0.6 },
];

// A single hand-drawn "+" laid across the middle of the four story cards,
// in place of each one getting its own box. The viewBox is sized close to
// the grid's real pixel footprint (instead of a small square stretched to
// fit) and every stroke uses vector-effect="non-scaling-stroke", so the
// line comes out the same few-pixels-thin weight as the menu's crayon
// borders no matter how tall this section ends up -- a small viewBox
// blown up to fill a much bigger box is what made the first version balloon
// into a thick, shadowed line instead of a light crayon mark.
function StoryCross({ className = "" }: { className?: string }) {
  const vShaft =
    "M425,20 Q440,252 440,252 Q409.4,484 409.4,484 Q442.6,716 442.6,716 Q409.9,948 409.9,948 Q425,1180 425,1180";
  const hShaft =
    "M20,600 Q182,614 182,614 Q344,587 344,587 Q506,613 506,613 Q668,588 668,588 Q830,600 830,600";
  const color = "#C1502E";
  const tips: [number, number][] = [
    [425, 20],
    [425, 1180],
    [20, 600],
    [830, 600],
  ];
  return (
    <svg
      viewBox="0 0 850 1200"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
    >
      {[vShaft, hShaft].map((d) => (
        <path
          key={d}
          d={d}
          vectorEffect="non-scaling-stroke"
          fill="none"
          stroke={color}
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
      {CROSS_SLIVERS.map((sliver, i) => {
        const half = sliver.length / 2;
        const bulge = sliver.width / 2;
        // A pointed lens/leaf shape (two bowed curves meeting at tips), not
        // a round-capped bar -- matches the tapered blade shape of the
        // stretched border-image dots.
        const d =
          sliver.axis === "h"
            ? `M${-half},0 Q0,${-bulge} ${half},0 Q0,${bulge} ${-half},0 Z`
            : `M0,${-half} Q${bulge},0 0,${half} Q${-bulge},0 0,${-half} Z`;
        return (
          <path
            key={i}
            d={d}
            transform={`translate(${sliver.x},${sliver.y})`}
            fill={sliver.color}
            opacity={sliver.opacity}
          />
        );
      })}
    </svg>
  );
}

// Bows into a "C" curve (bulges left at the vertical middle, curves back right
// at top/bottom) while keeping a small zigzag jitter for texture. The `flip`
// prop mirrors it into a backwards "C" for the right-hand side.
const ZIGZAG_PATH =
  "M60,10 L39.2,45 L49.4,80 L21.7,115 L36.7,150 L15,185 L36.7,220 L21.7,255 L49.4,290 L39.2,325 L60,360";
const ZIGZAG_COLORS = ["#C1502E", "#FAF3E4", "#8A9B6E"];

function ZigzagCluster({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 235 370"
      aria-hidden="true"
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      {ZIGZAG_COLORS.map((color, i) => (
        <g
          key={color}
          transform={`translate(${i * 78},0)`}
          className={`zigzag-ribbon ${i === 2 ? "hidden sm:block" : ""}`}
          style={{ animationDelay: `${i * 0.25}s` }}
        >
          <path
            d={ZIGZAG_PATH}
            fill="none"
            stroke="#2B211A"
            strokeWidth={17}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d={ZIGZAG_PATH}
            fill="none"
            stroke={color}
            strokeWidth={11}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      ))}
    </svg>
  );
}

function ScrollArrow({ className = "" }: { className?: string }) {
  const { language } = useLanguage();
  return (
    <a href="#menu" aria-label={translations[language].hero.scrollToMenu} className={className}>
      <span className="relative flex h-10 w-10 items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-terracotta/50 blur-lg motion-safe:animate-pulse" />
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          className="relative h-7 w-7 text-terracotta drop-shadow-[0_0_10px_rgba(193,80,46,0.7)] motion-safe:animate-bounce"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </span>
    </a>
  );
}

// Real coordinates for 622 South Main Street, Council Bluffs, IA 51501
// (geocoded via OpenStreetMap's Nominatim) -- power the free, no-API-key
// embedded map on the Visit Us "Find Us" card below.
const SHOP_LAT = 41.2552947;
const SHOP_LON = -95.8511642;
const OSM_EMBED_SRC = `https://www.openstreetmap.org/export/embed.html?bbox=${SHOP_LON - 0.006}%2C${SHOP_LAT - 0.004}%2C${SHOP_LON + 0.006}%2C${SHOP_LAT + 0.004}&layer=mapnik&marker=${SHOP_LAT}%2C${SHOP_LON}`;

// Visit Us is down to a single custom feature (the map), so this is a
// plain one-off block instead of a generic list item -- no tilt, no tape,
// no card, just the map centered and the address as a plain caption below.
function FindUsBlock() {
  const { language } = useLanguage();
  const t = translations[language].findUs;
  return (
    <FadeInSection className="w-full">
      <section className="px-6 pb-6 text-center md:px-10 md:pb-10">
        <h3 className="flex items-center justify-center gap-4 font-display text-3xl text-espresso md:text-4xl">
          <Tilde className="h-6 w-12 shrink-0" />
          {t.heading}
          <Tilde flip className="h-6 w-12 shrink-0" />
        </h3>

        <div className="relative mx-auto mt-10 aspect-[4/3] w-full max-w-2xl overflow-hidden rounded-2xl md:max-w-4xl">
          <iframe
            src={OSM_EMBED_SRC}
            className="h-full w-full border-0"
            loading="lazy"
            title={t.mapTitle}
          />
        </div>

        <p className="mt-6 font-body text-base text-espresso">
          {siteConfig.address.line1}, {siteConfig.address.line2}
        </p>
        <p className="font-body text-base text-espresso">{t.hours}</p>
      </section>
    </FadeInSection>
  );
}

// Same shape as MenuItem above, so the "Leave a Review" feature can reuse
// MenuCategoryBlock's exact crayon-box layout verbatim -- star rating
// stands in for price, reviewer name stands in for item name, no item
// images since there are no real customer photos. No title/intro on the
// group itself (unlike MenuCategory) -- these boxes are unlabeled, just the
// crayon border and the taped review cards.
type ReviewEntry = {
  name: string;
  quote: string;
  rating: string;
  featured?: boolean;
};

type ReviewGroup = {
  items: ReviewEntry[];
};

const REVIEW_GROUPS: ReviewGroup[] = [
  {
    items: [
      {
        name: "— Max A.",
        quote: "Had an awesome experience here! The ice cream was fresh, delicious, and there were plenty of great options to choose from.",
        rating: "★★★★★",
      },
      {
        name: "— Jen H.",
        quote: "Best place in town! You can grab a meal at his family's restaurant next door and get ice cream right after.",
        rating: "★★★★★",
      },
      {
        name: "— Renee K.",
        quote: "Fruit paletas are so fresh you can taste the difference — my go-to on hot days.",
        rating: "★★★★★",
      },
    ],
  },
  {
    items: [
      {
        name: "— trippmillikan",
        quote: "Ice cream is authentic and tastes great! Good environment and kid-friendly.",
        rating: "★★★★★",
      },
      {
        name: "— R. Ortega",
        quote: "Absolutely delicious! Customer service is exceptional — 10/10 all around.",
        rating: "★★★★★",
      },
      {
        name: "— Carlos V.",
        quote: "The helado cup with two scoops is the perfect size — never leaves you overstuffed.",
        rating: "★★★★★",
      },
    ],
  },
  {
    items: [
      {
        name: "— Jennifer R.",
        quote: "Really good service — the food was great, the Dubai strawberries were good, and the Maruchan Loka was yummy!",
        rating: "★★★★★",
      },
      {
        name: "— Ashley S.",
        quote: "It's so delicious for a good price, and their customer service is amazing.",
        rating: "★★★★★",
      },
      {
        name: "— Sidney W.",
        quote: "The Dubai Strawberries and Smores Strawberries are some of the best snacks to re-fuel after the gym.",
        rating: "★★★★★",
      },
    ],
  },
  {
    items: [
      {
        name: "— Victor C.",
        quote: "Beautiful establishment, and even tastier ice cream — right next door to an amazing restaurant!",
        rating: "★★★★★",
      },
      {
        name: "— Ill Boy",
        quote: "Without a doubt the best ice cream in Iowa! Everything is made fresh to order.",
        rating: "★★★★★",
      },
      {
        name: "— Diego M.",
        quote: "Chamoyada hits different on a summer afternoon — icy, spicy, and perfectly balanced.",
        rating: "★★★★★",
      },
    ],
  },
  {
    items: [
      {
        name: "— Carlos A.",
        quote: "Absolutely love this place! You can tell right away it's a true family-owned business where they genuinely care about their customers.",
        rating: "★★★★★",
      },
      {
        name: "— Maria R.",
        quote: "Great service — the strawberries and cream were delicious, especially the ones from Dubai.",
        rating: "★★★★★",
      },
      {
        name: "— Hannah S.",
        quote: "Every visit feels personal. You're not just a customer, you're part of the family.",
        rating: "★★★★★",
      },
    ],
  },
];

// MenuCategoryBlock's markup minus the title/intro/image slots -- same
// crayon box, same taped item-card grid, just re-themed from menu items to
// reviews and with the label stripped off.
function ReviewGroupBlock({ group, index }: { group: ReviewGroup; index: number }) {
  const { language } = useLanguage();
  const t = translations[language];
  const single = group.items.length === 1;
  const crayon = CRAYON_VARIANTS[index % CRAYON_VARIANTS.length];
  return (
    <FadeInSection>
      <section className={`${crayon} p-6 text-center md:p-7`}>
        <div
          className={`grid gap-x-4 gap-y-10 ${
            single ? "mx-auto max-w-xs" : "sm:grid-cols-2"
          }`}
        >
          {group.items.map((item, ii) => {
            const tilt = TILTS[(index * 3 + ii) % TILTS.length];
            // A third card (index 2) drops onto its own row, centered under
            // the top pair, so the three sticky notes read as an upside-down
            // triangle instead of a lopsided third column.
            const bottomCenter = ii === 2;
            return (
              <div
                key={item.name}
                className={`relative ${bottomCenter ? "sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-xs" : ""}`}
                style={{ transform: `rotate(${tilt}deg)` }}
              >
                {item.featured && (
                  <StickyNote
                    label={t.reviews.loyalRegular}
                    rotate={tilt > 0 ? -9 : 9}
                    className="-top-5 -right-3"
                  />
                )}
                <Tape rotate={tilt * 3} className="-top-2.5 left-1/2 h-5 w-14 -translate-x-1/2" />
                <div className="flex h-full flex-col overflow-hidden rounded-xl border-2 border-espresso/10 bg-white text-center shadow-md">
                  <div className="flex flex-1 flex-col items-center gap-1 p-5">
                    <p className="font-display text-lg text-espresso">{item.name}</p>
                    <p className="font-body text-sm text-espresso/70">&ldquo;{item.quote}&rdquo;</p>
                    <p className="mt-1 font-body text-lg font-semibold text-terracotta">
                      {item.rating}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </FadeInSection>
  );
}

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <div>
      <div className="flex min-h-[calc(100vh-46px)] flex-col md:min-h-[calc(100vh-62px)]">
        {/* Hero */}
        <section
          id="home"
          className="relative flex flex-1 scroll-mt-20 flex-col justify-center overflow-hidden bg-[#fffefa]"
        >
          <ZigzagCluster className="pointer-events-none absolute top-1/2 left-1 h-40 w-auto -translate-y-1/2 opacity-80 md:left-4 md:h-56 md:opacity-90 lg:left-8 lg:h-72 xl:left-12 xl:h-80" />
          <ZigzagCluster
            flip
            className="pointer-events-none absolute top-1/2 right-1 h-40 w-auto -translate-y-1/2 opacity-80 md:right-4 md:h-56 md:opacity-90 lg:right-8 lg:h-72 xl:right-12 xl:h-80"
          />

          <div className="mx-auto flex max-w-2xl flex-col items-center px-6 pt-0 pb-6 text-center md:pt-1 md:pb-8">
            <FadeInSection>
              <h1 className="sr-only">{t.hero.srHeading}</h1>
              <Image
                src="/logo.jpg"
                alt="Helados El Güero logo"
                width={1024}
                height={1024}
                priority
                className="h-auto w-full max-w-[240px] sm:max-w-[380px] md:max-w-xl"
              />
            </FadeInSection>
          </div>

          <ScrollArrow className="absolute bottom-2 left-4 md:bottom-3 md:left-8" />
          <ScrollArrow className="absolute bottom-2 right-4 md:bottom-3 md:right-8" />
        </section>

        {/* Quick info strip */}
        <section className="bg-terracotta">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 text-center md:grid-cols-3">
            <div>
              <p className="font-display text-lg text-cream">{t.quickInfo.hours}</p>
              <p className="mt-1 font-body text-cream/90">{t.quickInfo.hoursLine1}</p>
              <p className="font-body text-cream/90">{t.quickInfo.hoursLine2}</p>
            </div>
            <div>
              <p className="font-display text-lg text-cream">{t.quickInfo.location}</p>
              <p className="mt-1 font-body text-cream/90">
                {siteConfig.address.line1}, {siteConfig.address.line2}
              </p>
            </div>
            <div>
              <p className="font-display text-lg text-cream">{t.quickInfo.contact}</p>
              <p className="mt-1 font-body text-cream/90">
                {siteConfig.phone} • {t.quickInfo.emailTBD}
              </p>
              <p className="mt-1 font-body text-cream/90">
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream/70"
                >
                  Facebook
                </a>
                {" • "}
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream/70"
                >
                  Instagram
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Menu */}
      <section
        id="menu"
        className="scroll-mt-20 border-y-2 border-espresso/10 bg-cream py-16"
      >
        <div className="mx-auto max-w-[96rem] px-6">
          <FadeInSection className="text-center">
            <h2 className="font-display text-5xl text-espresso">{t.menu.heading}</h2>
            <p className="mt-3 font-body text-espresso/70">{t.menu.subheading}</p>
            <nav className="mt-8 flex flex-wrap justify-center gap-3 font-body text-sm font-semibold">
              {MENU.map((category, i) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className={`pill-crayon-${CRAYON_LETTERS[i % CRAYON_LETTERS.length]} px-4 py-2`}
                >
                  {category.title[language]}
                </a>
              ))}
            </nav>
          </FadeInSection>

          {/* Two explicit, fixed columns instead of CSS `columns` -- auto-balancing
              columns re-run their height calculation on every render (any viewport
              width change, font load, or a category growing taller), which could
              silently reshuffle which category lands in which column. A hardcoded
              split can't ever reshuffle. */}
          <div className="mt-16 grid grid-cols-1 gap-x-12 md:grid-cols-2">
            <div>
              {MENU.slice(0, 4).map((category, i) => (
                <div key={category.id} className="mb-16">
                  <MenuCategoryBlock category={category} index={i} />
                </div>
              ))}
            </div>
            <div className="mt-16 md:mt-14">
              {MENU.slice(4).map((category, i) => (
                <div key={category.id} className="mb-16">
                  <MenuCategoryBlock category={category} index={i + 4} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Order for Delivery */}
      <FadeInSection className="bg-terracotta">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 text-center">
          <h2 className="font-display text-3xl text-cream">{t.delivery.heading}</h2>
          <p className="max-w-md font-body text-cream/90">{t.delivery.body}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="inline-flex items-center justify-center rounded-full bg-cream px-6 py-3 font-body font-semibold text-terracotta">
              {t.delivery.doordash}
            </span>
            <span className="inline-flex items-center justify-center rounded-full bg-cream px-6 py-3 font-body font-semibold text-terracotta">
              {t.delivery.grubhub}
            </span>
          </div>
        </div>
      </FadeInSection>

      {/* About */}
      <section id="about" className="scroll-mt-20 bg-cream py-16">
        <div className="mx-auto max-w-[96rem] px-6">
          <FadeInSection className="text-center">
            <h2 className="font-display text-5xl text-espresso">{t.story.heading}</h2>
          </FadeInSection>

          {/* No individual boxes -- one big hand-drawn "+" through the
              middle keeps the four items apart instead. */}
          <div className="relative mt-16">
            <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-2 lg:gap-x-20 lg:gap-y-16">
              {STORY_IMAGES.map((_, i) => (
                <StoryBlock key={i} index={i} />
              ))}
            </div>
            <StoryCross className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block" />
          </div>
        </div>
      </section>

      {/* Partner restaurant */}
      <section className="bg-terracotta">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 text-center md:grid-cols-3">
          <div>
            <p className="font-display text-lg text-cream">{t.partner.restaurant}</p>
            <p className="mt-1 font-body text-cream/90">{siteConfig.partner.name}</p>
          </div>
          <div>
            <p className="font-display text-lg text-cream">{t.partner.nextDoor}</p>
            <p className="mt-1 font-body text-cream/90">{t.partner.blurb}</p>
          </div>
          <div>
            <p className="font-display text-lg text-cream">{t.partner.followThem}</p>
            <p className="mt-1 font-body text-cream/90">
              <a
                href={siteConfig.partner.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-espresso"
              >
                Instagram
              </a>
              {" • "}
              <a
                href={siteConfig.partner.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-espresso"
              >
                Facebook
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Contact / Visit Us */}
      <section id="contact" className="scroll-mt-20">
        <div className="bg-cream py-16">
          <div className="mx-auto max-w-[96rem] px-6">
            {/* Single centered column instead of the Our Story "+" grid --
                each item gets the full width to breathe, with the cross's
                horizontal arm reused as a plain rule between items instead
                of pinned across a grid. Full width (not capped) so the
                divider lines can run almost the width of the page, stopping
                only at the section's own px-6 gutter. */}
            <div className="mx-auto flex w-full flex-col items-center">
              <FindUsBlock />

              {/* "Leave a Review" feature: a straight copy of the Menu
                  section's crayon-box category grid (MenuCategoryBlock,
                  the columns masonry, all of it), re-themed from menu items
                  to mock reviews instead of a single taped card like the
                  other Visit Us features. A 6th box (same crayon cycle,
                  wraps back to crayon-a) holds a real review-submission
                  form in place of the old Google-review link. */}
              <section className="w-full p-6 text-center md:p-10">
                <h3 className="flex items-center justify-center gap-4 font-display text-3xl text-espresso md:text-4xl">
                  <Tilde className="h-6 w-12 shrink-0" />
                  {t.reviews.heading}
                  <Tilde flip className="h-6 w-12 shrink-0" />
                </h3>
                <p className="mt-3 font-body text-espresso/70">{t.reviews.subheading}</p>

                {/* CSS masonry (`columns`) computes its own left/right split
                    from rendered heights, and that came out differently
                    between renders/browsers -- the same swap that put
                    Overall Experience top-right here put it bottom-left for
                    the user. Hand-placed columns instead, guaranteed stable:
                    left is Paletas/Helados/Antojitos, right is Overall
                    Experience/Bebidas/the form, in that exact order. Each
                    still passes its *original* index so crayon color/tilt
                    stay the same. The right column gets a bit of top margin
                    on desktop so it still sits a touch lower than the left
                    -- the offset the masonry stagger used to give for free. */}
                <div className="mt-12 grid grid-cols-1 gap-x-12 md:grid-cols-2">
                  <div className="flex flex-col gap-y-16">
                    <ReviewGroupBlock group={REVIEW_GROUPS[0]} index={0} />
                    <ReviewGroupBlock group={REVIEW_GROUPS[1]} index={1} />
                    <ReviewGroupBlock group={REVIEW_GROUPS[2]} index={2} />
                  </div>
                  <div className="mt-16 flex flex-col gap-y-16 md:mt-14">
                    <ReviewGroupBlock group={REVIEW_GROUPS[4]} index={4} />
                    <ReviewGroupBlock group={REVIEW_GROUPS[3]} index={3} />
                    <FadeInSection>
                      <section
                        className={`${CRAYON_VARIANTS[REVIEW_GROUPS.length % CRAYON_VARIANTS.length]} p-6 text-center md:p-7`}
                      >
                        <div
                          className="relative mx-auto max-w-sm"
                          style={{ transform: `rotate(${TILTS[REVIEW_GROUPS.length % TILTS.length]}deg)` }}
                        >
                          <Tape rotate={-8} className="-top-2.5 left-1/2 h-5 w-14 -translate-x-1/2" />
                          <div className="rounded-xl border-2 border-espresso/10 bg-white p-6 shadow-md">
                            <p className="font-display text-lg text-espresso">{t.reviews.shareExperience}</p>
                            <div className="mt-4">
                              <ReviewForm />
                            </div>
                          </div>
                        </div>
                      </section>
                    </FadeInSection>
                  </div>
                </div>
              </section>
            </div>

            <p className="mt-16 text-center font-body text-sm text-espresso/60">{t.catering}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
