import type { Metadata } from "next";
import { PageHero } from "@/components/sections/shared/PageHero";
import { FeatureGrid } from "@/components/sections/product/FeatureGrid";
import { OwnYourData } from "@/components/sections/product/OwnYourData";
import { WidgetShowcase } from "@/components/sections/shared/WidgetShowcase";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import { FooterCta } from "@/components/layout/FooterCta";
import { productHero } from "@/content/product";
import { productFaq } from "@/content/faq";

export const metadata: Metadata = {
  title: "Product",
  description:
    "The full reservation lifecycle: a branded booking widget, real-time availability, guest CRM, deposits, reminders, and analytics — on your own website.",
};

export default function ProductPage() {
  return (
    <>
      <PageHero
        eyebrow={productHero.eyebrow}
        headline={productHero.headline}
        subhead={productHero.subhead}
      />
      <FeatureGrid />
      <OwnYourData />
      <WidgetShowcase
        eyebrow="Live demo"
        title="Feel it for yourself."
        subhead="The same widget your guests would use — try a booking, then switch venue types."
        caption="Same engine. Your brand."
      />
      <FaqSection items={productFaq} title="Product questions" />
      <FooterCta />
    </>
  );
}
