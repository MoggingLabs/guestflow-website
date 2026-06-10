import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ownYourData } from "@/content/product";

export function OwnYourData() {
  return (
    <section className="border-t border-line bg-surface/40 py-24 md:py-36">
      <Container className="max-w-3xl text-center">
        <Reveal>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-amber">
            {ownYourData.eyebrow}
          </p>
          <h2 className="font-display text-3xl font-medium tracking-tight text-cream md:text-4xl text-balance">
            {ownYourData.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-cream-dim">
            {ownYourData.body}
          </p>
          <ul className="mx-auto mt-9 inline-flex flex-col gap-3 text-left">
            {ownYourData.points.map((point) => (
              <li key={point} className="flex items-center gap-3 text-sm text-cream">
                <span aria-hidden className="text-amber">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="m3.5 8.5 3 3 6-7"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
