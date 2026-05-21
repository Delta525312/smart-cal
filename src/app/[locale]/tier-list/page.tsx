import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "tier_list" });
  return {
    title: t("title"),
    description: t("description"),
    robots: { index: false, follow: false },
    alternates: { canonical: `/${locale}/tier-list`, languages: { th: "/th/tier-list", en: "/en/tier-list" } },
  };
}

export default async function TierListPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "tier_list" });
  return (
    <div className="calc-page-stack">
      <div className="calc-card">
        <h1 className="text-2xl font-bold">{t("title")}</h1>
        <p className="text-(--muted-foreground) text-sm mt-1">{t("description")}</p>
        <p className="text-(--muted-foreground) text-sm mt-4">Coming soon...</p>
      </div>
    </div>
  );
}
