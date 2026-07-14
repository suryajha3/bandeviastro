const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const outputs = path.resolve(root, "..", "..", "outputs");
const seoDaily = path.join(outputs, "seo-daily");
const baseUrl = "https://bandeviastro.com";
const today = "2026-07-14";

const priorityPages = [
  { file: "index.html", reason: "Homepage moved to Node Web Service and trust/payment flow is live." },
  { file: "book-online.html", reason: "Payment option flow and Booking request ID wording are live." },
  { file: "gemstone-shop.html", reason: "Gemstone quote flow now includes COD, UPI/bank and Razorpay option selection." },
  { file: "company-profile.html", reason: "Priority entity page for staff size, offices and net worth searches." },
  { file: "proof-center.html", reason: "Central proof hub for net worth, staff, offices, chairman and policy proof." },
  { file: "global-offices.html", reason: "Office/service-network page for India, Dubai, London and United States trust queries." },
  { file: "surya-kant-jha-chairman-networth-travel-agent.html", reason: "Leadership page for Surya Kant Jha, Suryakant Jha and travel-agent search variants." },
  { file: "google-business-profile.html", reason: "Google profile proof page for branded trust and verification searches." },
  { file: "business-citations.html", reason: "Citation consistency page for NAP and business profile checks." },
  { file: "reviews-testimonials.html", reason: "Review/testimonial proof page for trust searches." },
  { file: "review-bandevi-astro.html", reason: "Review request page for approved testimonial growth." },
  { file: "online-pandit-dubai-uae.html", reason: "Priority Dubai/UAE target page." },
  { file: "online-pandit-usa.html", reason: "Priority USA target page." },
  { file: "online-pandit-uk.html", reason: "Priority UK target page." },
  { file: "online-kundli-consultation-dubai.html", reason: "Priority Dubai kundli intent page." },
  { file: "online-kundli-consultation-usa.html", reason: "Priority USA kundli intent page." },
  { file: "online-kundli-consultation-uk.html", reason: "Priority UK kundli intent page." },
  { file: "online-gemstone-consultation-dubai.html", reason: "Priority Dubai gemstone intent page." },
  { file: "online-gemstone-consultation-usa.html", reason: "Priority USA gemstone intent page." },
  { file: "online-gemstone-consultation-uk.html", reason: "Priority UK gemstone intent page." }
];

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function write(file, content) {
  fs.writeFileSync(path.join(root, file), content);
}

function publicUrl(file) {
  return file === "index.html" ? `${baseUrl}/` : `${baseUrl}/${file}`;
}

function csvCell(value) {
  return `"${String(value ?? "").replace(/"/g, '""')}"`;
}

function updateDateModified(file) {
  let html = read(file);
  let changed = false;

  const replaced = html.replace(/"dateModified":\s*"20\d{2}-\d{2}-\d{2}"/g, `"dateModified": "${today}"`);
  if (replaced !== html) {
    html = replaced;
    changed = true;
  }

  if (!changed && /"@type":\s*"WebPage"/.test(html) && /"primaryImageOfPage"/.test(html)) {
    const inserted = html.replace(
      /("primaryImageOfPage":\s*\{\s*"@type":\s*"ImageObject",\s*"url":\s*"[^"]+"\s*\})(\s*\n\s*\})/s,
      `$1,\n            "dateModified": "${today}"$2`
    );
    if (inserted !== html) {
      html = inserted;
      changed = true;
    }
  }

  if (changed) write(file, html);
  return changed;
}

function updateSitemapLastmod(pages) {
  const sitemapPath = path.join(root, "sitemap.xml");
  let sitemap = fs.readFileSync(sitemapPath, "utf8");
  const changedUrls = [];
  const missingUrls = [];

  for (const page of pages) {
    const url = publicUrl(page.file);
    const escapedUrl = url.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const pattern = new RegExp(`(<loc>${escapedUrl}</loc>\\s*<lastmod>)[^<]+(</lastmod>)`);
    if (!pattern.test(sitemap)) {
      missingUrls.push(url);
      continue;
    }
    sitemap = sitemap.replace(pattern, `$1${today}$2`);
    changedUrls.push(url);
  }

  fs.writeFileSync(sitemapPath, sitemap);
  return { changedUrls, missingUrls };
}

function writeSearchConsoleQueue(pages) {
  fs.mkdirSync(seoDaily, { recursive: true });
  const csvPath = path.join(seoDaily, "2026-07-14-search-console-priority-urls.csv");
  const mdPath = path.join(seoDaily, "2026-07-14-seo-freshness-plan.md");

  const rows = [
    ["Priority", "URL", "Reason", "Search Console Action", "Status"],
    ["1", `${baseUrl}/sitemap.xml`, "Submit refreshed sitemap after Web Service and payment-flow migration.", "Submit sitemap", "Ready"],
    ...pages.map((page, index) => [
      String(index + 2),
      publicUrl(page.file),
      page.reason,
      "Inspect URL and Request Indexing after sitemap submit",
      "Ready"
    ])
  ];

  fs.writeFileSync(csvPath, rows.map((row) => row.map(csvCell).join(",")).join("\n"));

  const md = `# SEO Freshness Plan - ${today}

## Completed
- Updated structured-data \`dateModified\` for priority trust and payment-flow pages where available.
- Updated \`sitemap.xml\` lastmod for the priority URL set below.
- Created a Search Console queue for manual indexing work.

## Submit First
1. ${baseUrl}/sitemap.xml

## Priority URL Inspection Queue
${pages.map((page, index) => `${index + 1}. ${publicUrl(page.file)} - ${page.reason}`).join("\n")}

## Notes
- The public domain now runs through the Node Web Service, so payment API URLs are crawl-visible as server routes.
- Keep requesting indexing in small batches to avoid Search Console daily quota errors.
- Start with the first 8 URLs today, then continue the rest tomorrow if quota appears.
`;

  fs.writeFileSync(mdPath, md);
  return { csvPath, mdPath };
}

const dateUpdated = priorityPages.filter((page) => fs.existsSync(path.join(root, page.file)) && updateDateModified(page.file));
const sitemapResult = updateSitemapLastmod(priorityPages);
const queueFiles = writeSearchConsoleQueue(priorityPages);

console.log(JSON.stringify({
  dateUpdated: dateUpdated.map((page) => page.file),
  sitemapUpdated: sitemapResult.changedUrls.length,
  sitemapMissing: sitemapResult.missingUrls,
  queueFiles
}, null, 2));
