const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const retiredPaths = [
  "surya-kant-jha-chairman-networth-travel-agent.html",
  "surya-kant-jha-chairman.html",
  "surya-kant-jha-net-worth.html",
  "surya-kant-jha-press-media.html",
  "surya-kant-jha-travel-agent.html",
  "suryakant-jha.html"
];
const hrefPattern = retiredPaths.map((item) => item.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
const linkedAnchor = new RegExp(`<a\\b[^>]*\\bhref=["'](?:${hrefPattern})["'][^>]*>[\\s\\S]*?<\\/a>`, "gi");
const absolutePath = new RegExp(`https:\\/\\/bandeviastro\\.com\\/(?:${hrefPattern})`, "gi");
const localPath = new RegExp(`(?:${hrefPattern})`, "gi");
const noindexPages = new Set([
  "company-profile.html",
  "proof-center.html",
  "global-offices.html",
  "business-citations.html",
  "google-business-profile.html",
  "reviews-testimonials.html",
  "review-bandevi-astro.html"
]);

for (const name of fs.readdirSync(root)) {
  if (!name.endsWith(".html")) continue;
  const file = path.join(root, name);
  const original = fs.readFileSync(file, "utf8");
  let updated = original
    .replace(linkedAnchor, "")
    .replace(absolutePath, "https://bandeviastro.com/about.html")
    .replace(localPath, "about.html")
    .replace(/^\s+$/gm, "")
    .replace(/\s*$/, "\n");
  if (noindexPages.has(name)) {
    updated = updated.replace(/<meta name="robots" content="[^"]*"\s*\/>/i, '<meta name="robots" content="noindex, follow" />');
  }
  if (updated !== original) fs.writeFileSync(file, updated);
}

const sitemapPath = path.join(root, "sitemap.xml");
const sitemap = fs.readFileSync(sitemapPath, "utf8");
const updatedSitemap = sitemap.replace(/\s*<url>\s*<loc>https:\/\/bandeviastro\.com\/(?:surya-kant-jha-chairman-networth-travel-agent|surya-kant-jha-chairman|surya-kant-jha-net-worth|surya-kant-jha-press-media|surya-kant-jha-travel-agent|suryakant-jha)\.html<\/loc>[\s\S]*?<\/url>/gi, "");
fs.writeFileSync(sitemapPath, updatedSitemap);
