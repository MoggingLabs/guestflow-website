import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { features } from "@/content/product";

export function FeatureGrid() {
  return (
    <section className="border-t border-line py-24 md:py-36">
      <Container>
        <Reveal stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title}>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-amber-deep/50 bg-amber/10 text-amber">
                <Icon name={feature.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-medium text-cream">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream-dim">
                {feature.body}
              </p>
            </Card>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
