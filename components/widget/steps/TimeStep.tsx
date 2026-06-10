"use client";

import { WG } from "@/components/widget/wgStyles";
import { widgetUi } from "@/content/widget-ui";
import { useLocale } from "@/lib/locale-client";
import type { Slot } from "@/lib/availability";
import { cn } from "@/lib/utils";

export function TimeStep({
  slots,
  selected,
  onSelect,
  onBack,
}: {
  slots: Slot[];
  selected: string | null;
  onSelect: (time: string) => void;
  onBack: () => void;
}) {
  const ui = widgetUi[useLocale()];

  return (
    <div>
      <button type="button" onClick={onBack} className={WG.backButton}>
        {ui.back}
      </button>
      <p className={WG.heading}>{ui.chooseTime}</p>
      <div
        role="listbox"
        aria-label={ui.chooseTime}
        className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-4"
      >
        {slots.map((slot) => {
          const isSelected = slot.label === selected;
          if (slot.status === "full") {
            return (
              <span
                key={slot.label}
                aria-disabled
                className={cn(WG.chipDisabled, "text-center")}
              >
                {slot.label}
              </span>
            );
          }
          return (
            <button
              key={slot.label}
              type="button"
              role="option"
              aria-selected={isSelected}
              onClick={() => onSelect(slot.label)}
              className={cn(
                isSelected ? WG.chipSelected : WG.chip,
                "relative text-center",
              )}
            >
              {slot.label}
              {slot.status === "limited" && !isSelected && (
                <span className="absolute -top-1.5 right-1 rounded-sm px-1 text-[9px] font-medium [background:var(--wg-accent)] [color:var(--wg-accent-text)]">
                  {ui.twoLeft}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
