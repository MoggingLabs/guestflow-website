import { Hero } from "@/components/sections/home/Hero";
import { ProblemStrip } from "@/components/sections/home/ProblemStrip";
import { WidgetShowcase } from "@/components/sections/shared/WidgetShowcase";
import { HowItWorks } from "@/components/sections/home/HowItWorks";
import { Differentiators } from "@/components/sections/home/Differentiators";
import { NoWebsitePath } from "@/components/sections/home/NoWebsitePath";
import { PromiseStrip } from "@/components/sections/home/PromiseStrip";
import { IndustriesPreview } from "@/components/sections/home/IndustriesPreview";
import { BuiltForStrip } from "@/components/sections/home/BuiltForStrip";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import { FooterCta } from "@/components/layout/FooterCta";
import { homeContent } from "@/content/home";
import { faqContent } from "@/content/faq";
import { getLocale } from "@/lib/i18n";

export default async function HomePage() {
  const locale = await getLocale();
  const t = homeContent[locale];

  return (
    <>
      <Hero />
      <ProblemStrip />
      <WidgetShowcase
        eyebrow={t.widgetShowcase.eyebrow}
        title={t.widgetShowcase.title}
        subhead={t.widgetShowcase.subhead}
        caption={t.widgetShowcase.caption}
      />
      <HowItWorks />
      <Differentiators />
      <NoWebsitePath />
      <PromiseStrip />
      <IndustriesPreview />
      <BuiltForStrip />
      <FaqSection items={faqContent[locale].home} title={t.faqTitle} />
      <FooterCta />
    </>
  );
}
