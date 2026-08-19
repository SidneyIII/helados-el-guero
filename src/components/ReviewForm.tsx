"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

// No backend to store submissions, so "submitting" hands the visitor off to
// their own email client with the review pre-filled instead of posting
// somewhere -- a mailto link is the only reliable option on a static site.
export default function ReviewForm() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `Review from ${name || "a customer"}`;
    const body = `Rating: ${"★".repeat(rating)}${"☆".repeat(5 - rating)}\n\n${review}`;
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const inputClasses =
    "mt-1 w-full rounded-md border border-espresso/20 bg-cream/50 px-3 py-2 font-body text-sm text-espresso placeholder:text-espresso/40 focus:border-terracotta focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="space-y-3 text-left">
      <div>
        <label htmlFor="review-name" className="block font-body text-sm font-semibold text-espresso">
          Name
        </label>
        <input
          id="review-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required
          className={inputClasses}
        />
      </div>

      <div>
        <span className="block font-body text-sm font-semibold text-espresso">Rating</span>
        <div className="mt-1 flex gap-1 text-2xl text-terracotta">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setRating(n)}
              aria-label={`${n} star${n > 1 ? "s" : ""}`}
              className="leading-none"
            >
              {n <= rating ? "★" : "☆"}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="review-text" className="block font-body text-sm font-semibold text-espresso">
          Your review
        </label>
        <textarea
          id="review-text"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          rows={3}
          placeholder="Tell us about your visit..."
          required
          className={inputClasses}
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-terracotta px-4 py-2 font-body text-sm font-semibold text-cream transition-colors hover:bg-espresso"
      >
        Submit Review
      </button>
    </form>
  );
}
