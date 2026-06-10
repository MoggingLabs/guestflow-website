"use client";

import { venueThemesByLocale } from "@/content/widget-themes";
import { useLocale } from "@/lib/locale-client";
import type { VenueThemeId } from "@/types/content";
import { cn } from "@/lib/utils";

export function ThemeSwitcher({
  active,
  onChange,
}: {
  active: VenueThemeId;
  onChange: (id: VenueThemeId) => void;
}) {
  const themes = venueThemesByLocale[useLocale()];

  return (
    <div
      role="tablist"
      aria-label="Venue type"
      className="flex flex-wrap justify-center gap-2"
    >
      {themes.map((theme) => {
        const isActive = theme.id === active;
        return (
          <button
            key={theme.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(theme.id)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition-colors duration-200",
              isActive
                ? "border-amber bg-amber text-ink font-medium"
                : "border-line text-cream-dim hover:border-amber-deep hover:text-cream",
            )}
          >
            {theme.label}
          </button>
        );
      })}
    </div>
  );
}
