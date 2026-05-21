/** @type {import('next-sitemap').IConfig} */

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.dcalcs.com";

// Static pages (non-calculator)
const staticPages = [
  "",
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
    // Auto-read calculator slugs from app directory — no manual update needed when adding pages
    const fs = await import("fs");
    const path = await import("path");
    const localeDir = path.join(process.cwd(), "src/app/[locale]");
    const entries = fs.readdirSync(localeDir, { withFileTypes: true });
    const calcPages = entries
      .filter((e) => e.isDirectory() && !["admin", "api", "announcements", "patch-notes", "maintenance", "tier-list", "about", "contact", "privacy", "terms"].includes(e.name))
      .map((e) => `/${e.name}`);

    const allPages = [...staticPages, ...calcPages];

    return allPages.map((page) => ({
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
