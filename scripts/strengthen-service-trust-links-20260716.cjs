const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const outputs = path.resolve(root, "..", "..", "outputs");
const seoDaily = path.join(outputs, "seo-daily");
const today = "2026-07-16";
const baseUrl = "https://bandeviastro.com";
const startMarker = "<!-- Service Trust Link Upgrade 2026-07-16 Start -->";
const endMarker = "<!-- Service Trust Link Upgrade 2026-07-16 End -->";

const targets = [
  {
    file: "online-vastu-consultation-dubai.html",
    region: "Dubai",
    keyword: "online vastu consultation Dubai",
    service: "online vastu consultation for home and office guidance",
    servicePage: "vastu-muhurat.html",
    servicePageLabel: "Vastu Muhurat",
    regionalHub: "online-pandit-dubai-uae.html",
    regionalHubLabel: "Dubai UAE Service Hub",
  },
  {
    file: "online-vastu-consultation-usa.html",
    region: "USA",
    keyword: "online vastu consultation USA",
    service: "online vastu consultation for home and office guidance",
    servicePage: "vastu-muhurat.html",
    servicePageLabel: "Vastu Muhurat",
    regionalHub: "online-pandit-usa.html",
    regionalHubLabel: "USA Service Hub",
  },
  {
    file: "online-vastu-consultation-uk.html",
    region: "UK",
    keyword: "online vastu consultation UK",
    service: "online vastu consultation for home and office guidance",
    servicePage: "vastu-muhurat.html",
    servicePageLabel: "Vastu Muhurat",
    regionalHub: "online-pandit-uk.html",
    regionalHubLabel: "UK Service Hub",
  },
  {
    file: "online-hawan-booking-usa.html",
    region: "USA",
    keyword: "online hawan booking USA",
    service: "online hawan booking for NRI families",
    servicePage: "hawan.html",
    servicePageLabel: "Hawan Service",
    regionalHub: "online-pandit-usa.html",
    regionalHubLabel: "USA Service Hub",
  },
  {
    file: "online-hawan-booking-uk.html",
    region: "UK",
    keyword: "online hawan booking UK",
    service: "online hawan booking for NRI families",
    servicePage: "hawan.html",
    servicePageLabel: "Hawan Service",
    regionalHub: "online-pandit-uk.html",
    regionalHubLabel: "UK Service Hub",
  },
  {
    file: "online-satyanarayan-pooja-usa.html",
    region: "USA",
    keyword: "online Satyanarayan pooja USA",
    service: "online Satyanarayan pooja for NRI families",
    servicePage: "satyanarayan-pooja-vidhi-samagri.html",
    servicePageLabel: "Satyanarayan Pooja Guide",
    regionalHub: "online-pandit-usa.html",
    regionalHubLabel: "USA Service Hub",
  },
  {
    file: "online-satyanarayan-pooja-uk.html",
    region: "UK",
    keyword: "online Satyanarayan pooja UK",
    service: "online Satyanarayan pooja for NRI families",
    servicePage: "satyanarayan-pooja-vidhi-samagri.html",
    servicePageLabel: "Satyanarayan Pooja Guide",
    regionalHub: "online-pandit-uk.html",
    regionalHubLabel: "UK Service Hub",
  },
  {
    file: "online-griha-pravesh-pooja-usa.html",
    region: "USA",
    keyword: "online griha pravesh pooja USA",
    service: "online griha pravesh pooja for NRI families",
    servicePage: "griha-pravesh-pooja-checklist.html",
    servicePageLabel: "Griha Pravesh Checklist",
    regionalHub: "online-pandit-usa.html",
    regionalHubLabel: "USA Service Hub",
  },
  {
    file: "online-marriage-pooja-usa.html",
    region: "USA",
    keyword: "online marriage pooja USA",
    service: "online marriage pooja for NRI families",
    servicePage: "online-pooja.html",
    servicePageLabel: "Online Pooja",
    regionalHub: "online-pandit-usa.html",
    regionalHubLabel: "USA Service Hub",
  },
];

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function slugFor(file) {
  return file.replace(/\.html$/, "").replace(/[^a-z0-9]+/gi, "-").toLowerCase();
}

function sectionFor(target) {
  const slug = slugFor(target.file);
  const serviceHeading = `${target.service.charAt(0).toUpperCase()}${target.service.slice(1)}`;
  return `${startMarker}
      <section class="section international-trust-link-section" aria-labelledby="${slug}-service-trust-title">
        <div class="section-heading compact">
          <p class="eyebrow">Verified service path for ${target.region}</p>
          <h2 id="${slug}-service-trust-title">${serviceHeading} trust links in ${target.region}</h2>
          <p>Visitors searching for ${target.keyword} can check proof pages, company details, global offices, chairman information, booking status and payment path before speaking with the team.</p>
        </div>
        <div class="international-trust-link-grid" aria-label="${target.region} service proof and booking links">
          <a href="proof-center.html"><strong>Proof Center</strong><span>Company-stated net worth, staff count, offices, policies and booking proof in one place.</span></a>
          <a href="company-profile.html"><strong>Company Profile</strong><span>1,289 staff worldwide and INR 7,594 crore company-stated net worth details.</span></a>
          <a href="global-offices.html"><strong>Global Offices</strong><span>India, Dubai, London and United States office and service-network context.</span></a>
          <a href="surya-kant-jha-chairman-networth-travel-agent.html"><strong>Chairman Profile</strong><span>Surya Kant Jha, Suryakant Jha and travel agent leadership search context.</span></a>
          <a href="${target.servicePage}"><strong>${target.servicePageLabel}</strong><span>Continue to the core service guide for rituals, remedies, muhurat and preparation details.</span></a>
          <a href="${target.regionalHub}"><strong>${target.regionalHubLabel}</strong><span>See the wider regional service page for related online pandit and astrology options.</span></a>
          <a href="book-online.html"><strong>Create Booking ID</strong><span>Start with a quote, choose payment preference and keep the request trackable.</span></a>
          <a href="track-booking.html"><strong>Track Booking</strong><span>Check booking status, staff updates and payment stage using your Booking ID.</span></a>
        </div>
      </section>
      ${endMarker}`;
}

function updateHtml(target) {
  const filePath = path.join(root, target.file);
  let html = fs.readFileSync(filePath, "utf8");
  const blockPattern = new RegExp(`${escapeRegExp(startMarker)}[\\s\\S]*?${escapeRegExp(endMarker)}`);
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
    const urlPattern = new RegExp(`(<url>\\s*<loc>${escapeRegExp(url)}</loc>\\s*<lastmod>)([^<]+)(</lastmod>)`, "m");
    if (!urlPattern.test(xml)) {
      throw new Error(`Could not find sitemap entry for ${url}`);
    }
    xml = xml.replace(urlPattern, `$1${today}$3`);
  }

  fs.writeFileSync(sitemapPath, xml, "utf8");
}

function writeReports() {
  fs.mkdirSync(seoDaily, { recursive: true });

  const csvPath = path.join(seoDaily, "2026-07-16-service-trust-link-upgrade.csv");
  const csvLines = [
    "url,region,target_keyword,service_page,regional_hub,links_added,lastmod",
    ...targets.map((target) => {
      const links = [
        "proof-center.html",
        "company-profile.html",
        "global-offices.html",
        "surya-kant-jha-chairman-networth-travel-agent.html",
        target.servicePage,
        target.regionalHub,
        "book-online.html",
        "track-booking.html",
      ].join("|");
      return [
        `${baseUrl}/${target.file}`,
        target.region,
        target.keyword,
        target.servicePage,
        target.regionalHub,
        links,
        today,
      ].map((value) => `"${String(value).replace(/"/g, '""')}"`).join(",");
    }),
  ];
  fs.writeFileSync(csvPath, `${csvLines.join("\n")}\n`, "utf8");

  const mdPath = path.join(seoDaily, "2026-07-16-service-trust-link-upgrade.md");
  const md = [
    "# Service Trust Link SEO Upgrade - 2026-07-16",
    "",
    "Added a crawlable trust-and-booking section to 9 service-specific international pages.",
    "",
    "## Links Added",
    "",
    "- Proof Center",
    "- Company Profile",
    "- Global Offices",
    "- Chairman Profile for Surya Kant Jha / Suryakant Jha",
    "- Matching service guide",
    "- Matching regional service hub",
    "- Create Booking ID",
    "- Track Booking",
    "",
    "## Priority URLs",
    "",
    ...targets.map((target) => `- ${baseUrl}/${target.file} - ${target.keyword}`),
    "",
    "## Search Console Note",
    "",
    "Submit these URLs after the daily quota resets. Site-side SEO and sitemap freshness are already updated.",
    "",
  ].join("\n");
  fs.writeFileSync(mdPath, md, "utf8");

  const completedPath = path.join(outputs, "SEO_COMPLETED_20260705.md");
  const completedMarker = "## Service Trust Link SEO Upgrade - 2026-07-16";
  let completed = fs.existsSync(completedPath) ? fs.readFileSync(completedPath, "utf8") : "";
  if (!completed.includes(completedMarker)) {
    completed = `${completed.trimEnd()}\n\n${completedMarker}\n- Added verified trust-and-booking internal link sections to 9 service-specific international pages.\n- Linked each page to Proof Center, Company Profile, Global Offices, Chairman Profile, service guide, regional hub, booking and tracking.\n- Refreshed sitemap lastmod for all 9 service URLs to ${today}.\n- Added service SEO reports under outputs/seo-daily/.\n`;
    fs.writeFileSync(completedPath, completed, "utf8");
  }
}

for (const target of targets) {
  updateHtml(target);
}
updateSitemap();
writeReports();

console.log(`Service trust-link SEO upgraded for ${targets.length} pages.`);
