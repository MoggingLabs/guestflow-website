import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { siteStrings } from "@/content/site";
import { getLocale } from "@/lib/i18n";

type PageHeroProps = {
  eyebrow?: string;
  headline: string;
  subhead?: string;
  showCta?: boolean;
};

export async function PageHero({
  eyebrow,
  headline,
  subhead,
  showCta = true,
}: PageHeroProps) {
  const cta = siteStrings[await getLocale()].cta.primary;

  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-24">
      <Container className="text-center">
        <Reveal>
          {eyebrow && (
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-amber">
              {eyebrow}
            </p>
          )}
          <h1 className="mx-auto max-w-3xl font-display text-4xl font-medium tracking-tight text-cream md:text-6xl text-balance">
            {headline}
          </h1>
          {subhead && (
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream-dim md:text-lg">
              {subhead}
            </p>
          )}
          {showCta && (
            <div className="mt-9">
              <Button href={cta.href} size="lg">
                {cta.label}
              </Button>
            </div>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
