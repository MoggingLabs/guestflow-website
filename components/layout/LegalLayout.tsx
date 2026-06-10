import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <section className="pt-36 pb-24 md:pt-44 md:pb-32">
      <Container className="max-w-3xl">
        <h1 className="font-display text-4xl font-medium tracking-tight text-cream">
          {title}
        </h1>
        <p className="mt-3 text-xs text-cream-faint">Last updated: {updated}</p>
        <div className="prose-legal mt-10 space-y-6 text-sm leading-relaxed text-cream-dim [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-medium [&_h2]:text-cream [&_h2]:mt-10">
          {children}
        </div>
      </Container>
    </section>
  );
}
