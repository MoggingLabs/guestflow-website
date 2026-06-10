import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { homeContent } from "@/content/home";
import { getLocale } from "@/lib/i18n";

export async function PromiseStrip() {
  const t = homeContent[await getLocale()].promiseStrip;

  return (
    <section className="border-t border-line bg-surface/40 py-20 md:py-24">
      <Container className="max-w-3xl text-center">
        <Reveal>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-amber">
            {t.eyebrow}
          </p>
          <h2 className="font-display text-2xl font-medium tracking-tight text-cream md:text-3xl text-balance">
            {t.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-cream-dim">
            {t.body}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
