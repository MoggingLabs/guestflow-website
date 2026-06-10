import "server-only";
import { cookies } from "next/headers";
import type { Locale } from "@/lib/i18n-shared";

export type { Locale };

export const LOCALE_COOKIE = "gf_locale";

/** Server-side locale, from the toggle's cookie. Defaults to English. */
export async function getLocale(): Promise<Locale> {
  const store = await cookies();
  return store.get(LOCALE_COOKIE)?.value === "pt" ? "pt" : "en";
}
