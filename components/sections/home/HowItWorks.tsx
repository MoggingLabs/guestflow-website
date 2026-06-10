import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { homeContent } from "@/content/home";
import { getLocale } from "@/lib/i18n";

export async function HowItWorks() {
  const t = homeContent[await getLocale()];

  return (
    <section className="border-t border-line py-24 md:py-36">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={t.howItWorksEyebrow}
            title={t.howItWorks.title}
            subhead={t.howItWorks.subhead}
          />
        </Reveal>
        <Reveal stagger className="mt-14 grid gap-10 md:grid-cols-3">
          {t.howItWorks.steps.map((step, i) => (
            <div key={step.title}>
              <span className="font-display text-4xl font-medium text-amber">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-lg font-medium text-cream">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream-dim">
                {step.body}
              </p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
