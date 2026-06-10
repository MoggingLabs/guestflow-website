import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocaleProvider } from "@/lib/locale-client";
import { getLocale } from "@/lib/i18n";
import { siteStrings } from "@/content/site";

const COPY = {
  en: {
    title: "This table doesn't exist.",
    body: "The page you're looking for was moved, renamed, or never made it onto the floor plan.",
    home: "Back to home",
  },
  pt: {
    title: "Esta mesa não existe.",
    body: "A página que procura foi movida, mudou de nome, ou nunca chegou a entrar na planta da sala.",
    home: "Voltar ao início",
  },
} as const;

export default async function NotFound() {
  const locale = await getLocale();
  const t = COPY[locale];
  const cta = siteStrings[locale].cta.primary;

  return (
    <LocaleProvider locale={locale}>
      <Header />
      <main className="flex-1">
        <section className="flex min-h-[70vh] items-center pt-24">
          <Container className="text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-amber">
              404
            </p>
            <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-cream md:text-6xl">
              {t.title}
            </h1>
            <p className="mx-auto mt-5 max-w-md text-base text-cream-dim">
              {t.body}
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/">{t.home}</Button>
              <Button href={cta.href} variant="secondary">
                {cta.label}
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </LocaleProvider>
  );
}
