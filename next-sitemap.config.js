/** @type {import('next-sitemap').IConfig} */

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.dcalcs.com";

const pages = [
  "",
  "/age-calculator",
  "/bmi",
  "/calorie-calculator",
  "/card-draw",
  "/currency-converter",
  "/date-calculator",
  "/gpa-calculator",
  "/loan-calculator",
  "/percentage-calculator",
  "/random-number",
  "/sleep-calculator",
  "/spin-wheel",
  "/storage-converter",
  "/unit-converter",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
];

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ["/admin", "/admin/*", "/api/*", "/{locale}/*", "/icon.png"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/", disallow: ["/admin", "/api"] },
    ],
  },
  additionalPaths: async () => {
    const locales = ["th", "en"];
    const paths = [];
    for (const page of pages) {
      for (const locale of locales) {
        paths.push({
          loc: `${siteUrl}/${locale}${page}`,
          changefreq: "weekly",
          priority: page === "" ? 1.0 : 0.8,
          lastmod: new Date().toISOString(),
          alternateRefs: [
            { href: `${siteUrl}/th${page}`, hreflang: "th" },
            { href: `${siteUrl}/en${page}`, hreflang: "en" },
          ],
        });
      }
    }
    return paths;
  },
};
