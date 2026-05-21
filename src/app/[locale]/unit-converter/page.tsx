import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { UnitConverter } from "@/components/calculators/UnitConverter";
import { CalculatorLayout } from "@/components/calculators/CalculatorLayout";
import { CalcInfoSection } from "@/components/calculators/CalcInfoSection";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "unit" });
  return { title: t("title"), description: t("description"), alternates: { canonical: `/${locale}/unit-converter`, languages: { th: "/th/unit-converter", en: "/en/unit-converter" } } };
}

export default async function UnitConverterPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "unit" });
  return (
    <>
      <CalculatorLayout title={t("title")} description={t("description")}><UnitConverter /></CalculatorLayout>
      <CalcInfoSection
        howTitle={t("seo_how_title")}
        steps={[t("seo_step_1"), t("seo_step_2"), t("seo_step_3")]}
        formulaTitle={t("seo_formula_title")}
        formula={t("seo_formula")}
        faqTitle={t("seo_faq_title")}
        faq={[
          { q: t("seo_faq_1_q"), a: t("seo_faq_1_a") },
          { q: t("seo_faq_2_q"), a: t("seo_faq_2_a") },
          { q: t("seo_faq_3_q"), a: t("seo_faq_3_a") },
        ]}
      />
    </>
  );
}
