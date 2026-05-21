import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { StorageConverter } from "@/components/calculators/StorageConverter";
import { CalculatorLayout } from "@/components/calculators/CalculatorLayout";
import { CalcInfoSection } from "@/components/calculators/CalcInfoSection";
import { HardDrive } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "storage" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/storage-converter`,
      languages: { th: "/th/storage-converter", en: "/en/storage-converter" },
    },
  };
}

export default async function StorageConverterPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "storage" });
  return (
    <>
      <CalculatorLayout
        title={t("title")}
        description={t("description")}
        icon={<HardDrive size={28} className="text-white" />}
        color="teal"
        slug="storage-converter"
      >
        <StorageConverter />
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
