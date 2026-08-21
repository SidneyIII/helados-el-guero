"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

const WEB3FORMS_ACCESS_KEY = "ac436ca1-8ffd-4439-aee0-29a09f8259ee";

export default function ReviewForm() {
  const { language } = useLanguage();
  const t = translations[language].reviewForm;

  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    try {
      const formData = new FormData();
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("subject", `New review from ${name || "a customer"}`);
      formData.append("name", name);
      formData.append("rating", `${rating} / 5 stars`);
      formData.append("review", review);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  const inputClasses =
    "mt-1 w-full rounded-md border border-espresso/20 bg-cream/50 px-3 py-2 font-body text-sm text-espresso placeholder:text-espresso/40 focus:border-terracotta focus:outline-none";

  if (status === "success") {
    return (
      <p className="font-body text-sm text-espresso">
        {t.thanks}, {name || t.friend}! {t.thanksBody}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 text-left">
      <div>
        <label htmlFor="review-name" className="block font-body text-sm font-semibold text-espresso">
          {t.name}
        </label>
        <input
          id="review-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={t.namePlaceholder}
          required
          className={inputClasses}
        />
      </div>

      <div>
        <span className="block font-body text-sm font-semibold text-espresso">{t.rating}</span>
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
          {t.yourReview}
        </label>
        <textarea
          id="review-text"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          rows={3}
          placeholder={t.reviewPlaceholder}
          required
          className={inputClasses}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-terracotta px-4 py-2 font-body text-sm font-semibold text-cream transition-colors hover:bg-espresso disabled:opacity-60"
      >
        {status === "submitting" ? t.sending : t.submit}
      </button>

      {status === "error" && (
        <p className="font-body text-sm text-terracotta">{t.error}</p>
      )}
    </form>
  );
}
