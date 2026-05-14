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
  exclude: ["/admin", "/admin/*", "/api/*", "/icon.png"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/", disallow: ["/admin", "/api"] },
    ],
  },
  additionalPaths: async () => {
    return pages.map((page) => ({
      loc: `${siteUrl}${page}`,
      changefreq: "weekly",
      priority: page === "" ? 1.0 : 0.8,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        { href: `${siteUrl}${page}`, hreflang: "th" },
        { href: `${siteUrl}${page}`, hreflang: "en" },
        { href: `${siteUrl}${page}`, hreflang: "x-default" },
      ],
    }));
  },
};
