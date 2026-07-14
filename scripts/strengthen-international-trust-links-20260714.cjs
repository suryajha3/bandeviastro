const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const outputs = path.resolve(root, "..", "..", "outputs");
const seoDaily = path.join(outputs, "seo-daily");
const today = "2026-07-14";
const baseUrl = "https://bandeviastro.com";
const startMarker = "<!-- International Trust Link Upgrade 2026-07-14 Start -->";
const endMarker = "<!-- International Trust Link Upgrade 2026-07-14 End -->";

const targets = [
  {
    file: "online-pandit-dubai-uae.html",
    region: "Dubai UAE",
    service: "online pandit, pooja, kundli and gemstone guidance",
    servicePage: "online-pooja.html",
    servicePageLabel: "Online Pooja",
    keyword: "online pandit in Dubai UAE",
  },
  {
    file: "online-pandit-usa.html",
    region: "USA",
    service: "online pandit, pooja, kundli and gemstone guidance",
    servicePage: "online-pooja.html",
    servicePageLabel: "Online Pooja",
    keyword: "online pandit in USA",
  },
  {
    file: "online-pandit-uk.html",
    region: "UK",
    service: "online Hindu priest, kundli and remedy guidance",
    servicePage: "online-pooja.html",
    servicePageLabel: "Online Pooja",
    keyword: "online pandit UK",
  },
  {
    file: "online-kundli-consultation-dubai.html",
    region: "Dubai",
    service: "online kundli consultation",
    servicePage: "kundli.html",
    servicePageLabel: "Kundli Consultation",
    keyword: "online kundli consultation Dubai",
  },
  {
    file: "online-kundli-consultation-usa.html",
    region: "USA",
    service: "online kundli consultation",
    servicePage: "kundli.html",
    servicePageLabel: "Kundli Consultation",
    keyword: "online kundli consultation USA",
  },
  {
    file: "online-kundli-consultation-uk.html",
    region: "UK",
    service: "online kundli consultation",
    servicePage: "kundli.html",
    servicePageLabel: "Kundli Consultation",
    keyword: "online kundli consultation UK",
  },
  {
    file: "online-gemstone-consultation-dubai.html",
    region: "Dubai",
    service: "online gemstone consultation",
    servicePage: "gemstone-shop.html",
    servicePageLabel: "Gemstone Shop",
    keyword: "online gemstone consultation Dubai",
  },
  {
    file: "online-gemstone-consultation-usa.html",
    region: "USA",
    service: "online gemstone consultation",
    servicePage: "gemstone-shop.html",
    servicePageLabel: "Gemstone Shop",
    keyword: "online gemstone consultation USA",
  },
  {
    file: "online-gemstone-consultation-uk.html",
    region: "UK",
    service: "online gemstone consultation",
    servicePage: "gemstone-shop.html",
    servicePageLabel: "Gemstone Shop",
    keyword: "online gemstone consultation UK",
  },
];

function slugFor(file) {
  return file.replace(/\.html$/, "").replace(/[^a-z0-9]+/gi, "-").toLowerCase();
}

function sectionFor(target) {
  const slug = slugFor(target.file);
  const serviceHeading = `${target.service.charAt(0).toUpperCase()}${target.service.slice(1)}`;
  return `${startMarker}
      <section class="section international-trust-link-section" aria-labelledby="${slug}-trust-title">
        <div class="section-heading compact">
          <p class="eyebrow">Verified booking path for ${target.region}</p>
          <h2 id="${slug}-trust-title">${serviceHeading} trust links for ${target.region}</h2>
          <p>Visitors searching for ${target.keyword} can check company proof, leadership details, global office context, booking status and payment path before speaking with the team.</p>
        </div>
        <div class="international-trust-link-grid" aria-label="${target.region} proof and booking links">
          <a href="proof-center.html"><strong>Proof Center</strong><span>Company-stated net worth, staff count, offices, policies and booking proof in one place.</span></a>
          <a href="company-profile.html"><strong>Company Profile</strong><span>1,289 staff worldwide and INR 7,594 crore company-stated net worth details.</span></a>
          <a href="global-offices.html"><strong>Global Offices</strong><span>India, Dubai, London and United States office and service-network context.</span></a>
          <a href="surya-kant-jha-chairman-networth-travel-agent.html"><strong>Chairman Profile</strong><span>Surya Kant Jha, Suryakant Jha and travel agent leadership search context.</span></a>
          <a href="${target.servicePage}"><strong>${target.servicePageLabel}</strong><span>Continue to the main service page for remedies, consultation details and related options.</span></a>
          <a href="book-online.html"><strong>Create Booking ID</strong><span>Start with a quote, choose payment preference and keep the request trackable.</span></a>
          <a href="track-booking.html"><strong>Track Booking</strong><span>Check booking status, staff updates and payment stage using your Booking ID.</span></a>
        </div>
      </section>
      ${endMarker}`;
}

function updateHtml(target) {
  const filePath = path.join(root, target.file);
  let html = fs.readFileSync(filePath, "utf8");
  const blockPattern = new RegExp(`${startMarker.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[\\s\\S]*?${endMarker.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`);
  const block = sectionFor(target);

  if (blockPattern.test(html)) {
    html = html.replace(blockPattern, block);
  } else if (html.includes("    </main>")) {
    html = html.replace("    </main>", `      ${block}\n    </main>`);
  } else {
    throw new Error(`Could not find </main> in ${target.file}`);
  }

  html = html.replace(/"dateModified"\s*:\s*"[^"]+"/g, `"dateModified": "${today}"`);
  fs.writeFileSync(filePath, html, "utf8");
}

function updateSitemap() {
  const sitemapPath = path.join(root, "sitemap.xml");
  let xml = fs.readFileSync(sitemapPath, "utf8");

  for (const target of targets) {
    const url = `${baseUrl}/${target.file}`;
    const urlPattern = new RegExp(`(<url>\\s*<loc>${url.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}</loc>\\s*<lastmod>)([^<]+)(</lastmod>)`, "m");
    if (!urlPattern.test(xml)) {
      throw new Error(`Could not find sitemap entry for ${url}`);
    }
    xml = xml.replace(urlPattern, `$1${today}$3`);
  }

  fs.writeFileSync(sitemapPath, xml, "utf8");
}

function writeReports() {
  fs.mkdirSync(seoDaily, { recursive: true });

  const csvPath = path.join(seoDaily, "2026-07-14-international-trust-link-upgrade.csv");
  const csvLines = [
    "url,region,target_keyword,service_page,links_added,lastmod",
    ...targets.map((target) => {
      const links = [
        "proof-center.html",
        "company-profile.html",
        "global-offices.html",
        "surya-kant-jha-chairman-networth-travel-agent.html",
        target.servicePage,
        "book-online.html",
        "track-booking.html",
      ].join("|");
      return [
        `${baseUrl}/${target.file}`,
        target.region,
        target.keyword,
        target.servicePage,
        links,
        today,
      ].map((value) => `"${String(value).replace(/"/g, '""')}"`).join(",");
    }),
  ];
  fs.writeFileSync(csvPath, `${csvLines.join("\n")}\n`, "utf8");

  const mdPath = path.join(seoDaily, "2026-07-14-international-trust-link-upgrade.md");
  const md = [
    "# International Trust Link SEO Upgrade - 2026-07-14",
    "",
    "Added a crawlable trust-and-booking section to 9 priority Dubai, USA and UK pages.",
    "",
    "## Links Added",
    "",
    "- Proof Center",
    "- Company Profile",
    "- Global Offices",
    "- Chairman Profile for Surya Kant Jha / Suryakant Jha",
    "- Matching service page",
    "- Create Booking ID",
    "- Track Booking",
    "",
    "## Priority URLs",
    "",
    ...targets.map((target) => `- ${baseUrl}/${target.file} - ${target.keyword}`),
    "",
    "## Search Console Note",
    "",
    "After the quota refreshes, submit these URLs in small batches. Re-submitting the same page repeatedly does not increase queue priority.",
    "",
  ].join("\n");
  fs.writeFileSync(mdPath, md, "utf8");

  const completedPath = path.join(outputs, "SEO_COMPLETED_20260705.md");
  const completedMarker = "## International Trust Link SEO Upgrade - 2026-07-14";
  let completed = fs.existsSync(completedPath) ? fs.readFileSync(completedPath, "utf8") : "";
  if (!completed.includes(completedMarker)) {
    completed = `${completed.trimEnd()}\n\n${completedMarker}\n- Added verified trust-and-booking internal link sections to 9 Dubai, USA and UK target pages.\n- Linked each page to Proof Center, Company Profile, Global Offices, Chairman Profile, service page, booking and tracking.\n- Refreshed sitemap lastmod for all 9 target URLs to ${today}.\n- Added reports under outputs/seo-daily/.\n`;
    fs.writeFileSync(completedPath, completed, "utf8");
  }
}

for (const target of targets) {
  updateHtml(target);
}
updateSitemap();
writeReports();

console.log(`International trust-link SEO upgraded for ${targets.length} pages.`);
