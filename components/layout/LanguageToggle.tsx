"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { setLocaleAction } from "@/app/locale-action";
import { useLocale } from "@/lib/locale-client";
import { cn } from "@/lib/utils";

export function LanguageToggle({ className }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const switchTo = (next: "en" | "pt") => {
    if (next === locale) return;
    startTransition(async () => {
      await setLocaleAction(next);
      router.refresh();
    });
  };

  return (
    <div
      role="group"
      aria-label="Language"
      className={cn(
        "inline-flex items-center rounded-md border border-line text-xs",
        pending && "opacity-60",
        className,
      )}
    >
      {(["en", "pt"] as const).map((l) => (
        <button
          key={l}
          type="button"
          aria-pressed={locale === l}
          onClick={() => switchTo(l)}
          className={cn(
            "px-2.5 py-1.5 uppercase tracking-wide transition-colors",
            locale === l
              ? "bg-raised text-cream"
              : "text-cream-faint hover:text-cream",
          )}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
