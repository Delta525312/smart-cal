import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { CalculatorLayout } from "@/components/calculators/CalculatorLayout";
import { CardDrawGame } from "@/components/random/CardDrawGame";
import { CalcInfoSection } from "@/components/calculators/CalcInfoSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "card_draw" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/card-draw`,
      languages: { th: "/th/card-draw", en: "/en/card-draw" },
    },
  };
}

export default async function CardDrawPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "card_draw" });
  return (
    <>
      <CalculatorLayout title={t("title")} description={t("description")} color="orange">
        <CardDrawGame />
      </CalculatorLayout>
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
