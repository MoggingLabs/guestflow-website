"use client";

import { WG } from "@/components/widget/wgStyles";
import { widgetUi } from "@/content/widget-ui";
import { useLocale } from "@/lib/locale-client";
import type { VenueTheme } from "@/types/content";
import { cn } from "@/lib/utils";

export function PartyStep({
  theme,
  selected,
  onSelect,
  onBack,
}: {
  theme: VenueTheme;
  selected: number | null;
  onSelect: (size: number) => void;
  onBack: () => void;
}) {
  const ui = widgetUi[useLocale()];

  return (
    <div>
      <button type="button" onClick={onBack} className={WG.backButton}>
        {ui.back}
      </button>
      <p className={WG.heading}>{theme.unitLabel}</p>
      <div
        role="listbox"
        aria-label={theme.unitLabel}
        className="mt-4 grid grid-cols-4 gap-2"
      >
        {theme.unitOptions.map((n) => {
          const isSelected = n === selected;
          return (
            <button
              key={n}
              type="button"
              role="option"
              aria-selected={isSelected}
              onClick={() => onSelect(n)}
              className={cn(isSelected ? WG.chipSelected : WG.chip)}
            >
              {n}
            </button>
          );
        })}
      </div>
    </div>
  );
}
