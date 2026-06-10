"use client";

import { useState, type FormEvent } from "react";
import { WG } from "@/components/widget/wgStyles";
import { widgetUi } from "@/content/widget-ui";
import { useLocale } from "@/lib/locale-client";
import type { VenueTheme } from "@/types/content";

const SAMPLE_GUEST = { name: "Alex Moreau", email: "alex@example.com" };

export function DetailsStep({
  theme,
  onSubmit,
  onBack,
}: {
  theme: VenueTheme;
  onSubmit: (name: string, email: string) => void;
  onBack: () => void;
}) {
  const ui = widgetUi[useLocale()];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.includes("@")) return;
    onSubmit(name.trim(), email.trim());
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <button type="button" onClick={onBack} className={WG.backButton}>
        {ui.back}
      </button>
      <div className="flex items-baseline justify-between gap-4">
        <p className={WG.heading}>{ui.yourDetails}</p>
        <p className={WG.hint}>{ui.demoOnly}</p>
      </div>
      <div className="mt-4 space-y-3">
        <input
          type="text"
          aria-label={ui.namePlaceholder}
          placeholder={ui.namePlaceholder}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={WG.input}
        />
        <input
          type="email"
          aria-label={ui.emailPlaceholder}
          placeholder={ui.emailPlaceholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={WG.input}
        />
      </div>
      <button
        type="button"
        onClick={() => {
          setName(SAMPLE_GUEST.name);
          setEmail(SAMPLE_GUEST.email);
        }}
        className="mt-2.5 text-xs underline underline-offset-2 transition-colors [color:var(--wg-muted)] hover:[color:var(--wg-text)]"
      >
        {ui.useSampleGuest}
      </button>
      <button
        type="submit"
        disabled={!name.trim() || !email.includes("@")}
        className={`${WG.primaryButton} mt-5 disabled:cursor-not-allowed`}
      >
        {theme.ctaLabel}
      </button>
    </form>
  );
}
