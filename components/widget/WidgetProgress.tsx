"use client";

import type { BookingStep } from "@/components/widget/useBookingMachine";
import { widgetUi } from "@/content/widget-ui";
import { useLocale } from "@/lib/locale-client";
import { cn } from "@/lib/utils";

const ORDER: Record<BookingStep, number> = {
  date: 0,
  party: 1,
  time: 2,
  details: 3,
  confirming: 4,
  confirmed: 4,
};

export function WidgetProgress({ step }: { step: BookingStep }) {
  const ui = widgetUi[useLocale()];
  const steps = [
    { id: "date", label: ui.progress.date },
    { id: "party", label: ui.progress.party },
    { id: "time", label: ui.progress.time },
    { id: "details", label: ui.progress.details },
  ];
  const current = ORDER[step];

  return (
    <ol aria-label="Booking progress" className="mb-6 flex items-center gap-2">
      {steps.map((s, i) => (
        <li key={s.id} className="flex flex-1 flex-col gap-1.5">
          <span
            className={cn(
              "h-1 rounded-full transition-colors duration-300",
              i <= current
                ? "[background:var(--wg-accent)]"
                : "[background:var(--wg-line)]",
            )}
          />
          <span
            className={cn(
              "text-[10px] font-medium uppercase tracking-wider transition-colors duration-300",
              i <= current
                ? "[color:var(--wg-text)]"
                : "[color:var(--wg-muted)]",
            )}
            aria-current={i === current ? "step" : undefined}
          >
            {s.label}
          </span>
        </li>
      ))}
    </ol>
  );
}
