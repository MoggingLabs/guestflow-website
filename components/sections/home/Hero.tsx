import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { HeroParticles } from "@/components/sections/home/HeroParticles";
import { hero } from "@/content/home";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-28 pb-20 md:pt-32 md:pb-24">
      <div aria-hidden className="hero-glow absolute inset-0" />
      <HeroParticles />
      <Container className="relative text-center">
        <Reveal>
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-amber">
            {hero.eyebrow}
          </p>
          <h1 className="mx-auto max-w-3xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-cream md:text-7xl text-balance">
            {hero.headline}
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-cream-dim md:text-lg">
            {hero.subhead}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              href={site.cta.primary.href}
              size="lg"
              analyticsLabel="hero_book_demo"
            >
              {site.cta.primary.label}
            </Button>
            <Button
              href={site.cta.secondary.href}
              variant="secondary"
              size="lg"
              analyticsLabel="hero_try_demo"
            >
              {site.cta.secondary.label}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
