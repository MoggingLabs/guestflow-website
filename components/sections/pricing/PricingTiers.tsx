"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { pricingContent } from "@/content/pricing";
import { siteStrings } from "@/content/site";
import { useLocale } from "@/lib/locale-client";
import { cn } from "@/lib/utils";

const ANNUAL_FACTOR = 2 / 3; // annual billing takes a third off

export function PricingTiers() {
  const locale = useLocale();
  const t = pricingContent[locale];
  const cta = siteStrings[locale].cta.primary;
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");
  const annual = billing === "annual";

  return (
    <div>
      <div className="mb-10 flex justify-center">
        <div
          role="radiogroup"
          aria-label="Billing period"
          className="inline-flex rounded-md border border-line bg-surface p-1"
        >
          {(["monthly", "annual"] as const).map((option) => (
            <button
              key={option}
              type="button"
              role="radio"
              aria-checked={billing === option}
              onClick={() => setBilling(option)}
              className={cn(
                "rounded px-5 py-2 text-sm transition-colors",
                billing === option
                  ? "bg-amber font-medium text-ink"
                  : "text-cream-dim hover:text-cream",
              )}
            >
              {option === "monthly" ? (
                t.tierUi.monthly
              ) : (
                <>
                  {t.tierUi.annual}
                  <span
                    className={cn(
                      "ml-1.5 text-xs",
                      billing === "annual" ? "text-ink/70" : "text-amber",
                    )}
                  >
                    {t.tierUi.annualBadge}
                  </span>
                </>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {t.tiers.map((tier) => {
          const monthly = tier.monthlyEur;
          const shown =
            monthly === null
              ? null
              : annual
                ? Math.round(monthly * ANNUAL_FACTOR)
                : monthly;
          return (
            <div
              key={tier.name}
              className={cn(
                "flex h-full flex-col rounded-lg border bg-surface p-8 shadow-card",
                tier.featured ? "border-amber-deep shadow-glow" : "border-line",
              )}
            >
              {/* Name row: badge space is reserved so every card's rows line up */}
              <div className="flex h-7 items-center justify-between">
                <h2 className="font-display text-xl font-medium text-cream">
                  {tier.name}
                </h2>
                {tier.featured && <Badge>{t.tierUi.mostPopular}</Badge>}
              </div>

              {/* Price block: fixed height across all three cards */}
              <div className="mt-5 min-h-16">
                {shown === null ? (
                  <p className="font-display text-3xl font-medium text-cream">
                    {t.tierUi.letsTalk}
                  </p>
                ) : (
                  <>
                    <p className="font-display text-3xl font-medium text-cream">
                      {t.tierUi.fromPerMonth(shown)}
                    </p>
                    <p className="mt-1 text-xs text-cream-faint">
                      {annual ? (
                        <>
                          {t.tierUi.billedAnnually} ·{" "}
                          <s className="text-cream-faint/70">€{monthly}</s>{" "}
                          {t.tierUi.monthlyWord}
                        </>
                      ) : (
                        <>{t.tierUi.orAnnually(Math.round(monthly! * ANNUAL_FACTOR))}</>
                      )}
                    </p>
                  </>
                )}
              </div>

              <p className="mt-2 min-h-10 text-xs text-cream-faint">
                {tier.priceNote}
              </p>
              <p className="min-h-12 text-sm leading-relaxed text-cream-dim">
                {tier.blurb}
              </p>

              <ul className="mt-5 space-y-3">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-cream-dim"
                  >
                    <span aria-hidden className="mt-1 shrink-0 text-amber">
                      <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                        <path
                          d="m3.5 8.5 3 3 6-7"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button pinned to the bottom of every card */}
              <div className="mt-auto pt-8">
                <Button
                  href={cta.href}
                  variant={tier.featured ? "primary" : "secondary"}
                  className="h-11 w-full"
                  analyticsLabel={`pricing_${tier.name.toLowerCase()}_${billing}`}
                >
                  {cta.label}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
