import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { CalculatorLayout } from "@/components/calculators/CalculatorLayout";
import { RandomNumberGenerator } from "@/components/random/RandomNumberGenerator";
import { CalcInfoSection } from "@/components/calculators/CalcInfoSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "random_number" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/random-number`,
      languages: { th: "/th/random-number", en: "/en/random-number" },
    },
  };
}

export default async function RandomNumberPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "random_number" });
  return (
    <>
      <CalculatorLayout title={t("title")} description={t("description")} color="indigo">
        <RandomNumberGenerator />
      </CalculatorLayout>
      <CalcInfoSection
        howTitle={t("seo_how_title")}
        steps={[t("seo_step_1"), t("seo_step_2"), t("seo_step_3"), t("seo_step_4")]}
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
