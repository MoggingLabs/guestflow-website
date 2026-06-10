import type { Locale } from "@/lib/i18n-shared";

export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

const INTL: Record<Locale, string> = { en: "en-US", pt: "pt-PT" };

export function formatWeekday(date: Date, locale: Locale = "en"): string {
  return new Intl.DateTimeFormat(INTL[locale], { weekday: "short" }).format(date);
}

export function formatDayShort(date: Date, locale: Locale = "en"): string {
  return new Intl.DateTimeFormat(INTL[locale], {
    month: "short",
    day: "numeric",
  }).format(date);
}

export function formatDateFull(date: Date, locale: Locale = "en"): string {
  return new Intl.DateTimeFormat(INTL[locale], {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(date);
}

/** Local-timezone YYYY-MM-DD key for a date (avoids UTC off-by-one). */
export function toDateKey(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}
