const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const outputs = path.resolve(root, "..", "..", "outputs");
const seoDaily = path.join(outputs, "seo-daily");
const today = "2026-07-18";
const baseUrl = "https://bandeviastro.com";
const startMarker = "<!-- Expansion Trust Link Upgrade 2026-07-18 Start -->";
const endMarker = "<!-- Expansion Trust Link Upgrade 2026-07-18 End -->";

const targets = [
  {
    file: "online-pandit-canada.html",
    market: "Canada",
    keyword: "online pandit in Canada",
    service: "online pandit, pooja, kundli and gemstone guidance",
    regionalHub: "nri-pooja.html",
    regionalHubLabel: "NRI Pooja Hub",
  },
  {
    file: "online-pandit-toronto.html",
    market: "Toronto",
    keyword: "online pandit in Toronto",
    service: "online pandit, pooja, kundli and gemstone guidance",
    regionalHub: "online-pandit-canada.html",
    regionalHubLabel: "Canada Service Hub",
  },
  {
    file: "online-pandit-vancouver.html",
    market: "Vancouver",
    keyword: "online pandit in Vancouver",
    service: "online pandit, pooja, kundli and gemstone guidance",
    regionalHub: "online-pandit-canada.html",
    regionalHubLabel: "Canada Service Hub",
  },
  {
    file: "online-pandit-brampton.html",
    market: "Brampton",
    keyword: "online pandit in Brampton",
    service: "online pandit, pooja, kundli and gemstone guidance",
    regionalHub: "online-pandit-canada.html",
    regionalHubLabel: "Canada Service Hub",
  },
  {
    file: "online-pandit-australia.html",
    market: "Australia",
    keyword: "online pandit in Australia",
    service: "online pandit, pooja, kundli and gemstone guidance",
    regionalHub: "nri-pooja.html",
    regionalHubLabel: "NRI Pooja Hub",
  },
  {
    file: "online-pandit-sydney.html",
    market: "Sydney",
    keyword: "online pandit in Sydney",
    service: "online pandit, pooja, kundli and gemstone guidance",
    regionalHub: "online-pandit-australia.html",
    regionalHubLabel: "Australia Service Hub",
  },
  {
    file: "online-pandit-melbourne.html",
    market: "Melbourne",
    keyword: "online pandit in Melbourne",
    service: "online pandit, pooja, kundli and gemstone guidance",
    regionalHub: "online-pandit-australia.html",
    regionalHubLabel: "Australia Service Hub",
  },
  {
    file: "online-pandit-singapore.html",
    market: "Singapore",
    keyword: "online pandit in Singapore",
    service: "online pandit, pooja, kundli and gemstone guidance",
    regionalHub: "nri-pooja.html",
    regionalHubLabel: "NRI Pooja Hub",
  },
  {
    file: "online-pandit-qatar.html",
    market: "Qatar",
    keyword: "online pandit in Qatar",
    service: "online pandit, pooja, kundli and gemstone guidance",
    regionalHub: "online-pandit-doha.html",
    regionalHubLabel: "Doha Service Page",
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
      <section class="section international-trust-link-section" aria-labelledby="${slug}-expansion-trust-title">
        <div class="section-heading compact">
          <p class="eyebrow">Verified booking path for ${target.market}</p>
          <h2 id="${slug}-expansion-trust-title">${serviceHeading} trust links for ${target.market}</h2>
          <p>Visitors searching for ${target.keyword} can check company proof, leadership details, global office context, booking status and payment path before speaking with the team.</p>
        </div>
        <div class="international-trust-link-grid" aria-label="${target.market} proof and booking links">
          <a href="proof-center.html"><strong>Proof Center</strong><span>Company-stated net worth, staff count, offices, policies and booking proof in one place.</span></a>
          <a href="company-profile.html"><strong>Company Profile</strong><span>1,289 staff worldwide and INR 7,594 crore company-stated net worth details.</span></a>
          <a href="global-offices.html"><strong>Global Offices</strong><span>India, Dubai, London and United States office and service-network context.</span></a>
          <a href="surya-kant-jha-chairman-networth-travel-agent.html"><strong>Chairman Profile</strong><span>Surya Kant Jha, Suryakant Jha and travel agent leadership search context.</span></a>
          <a href="${target.regionalHub}"><strong>${target.regionalHubLabel}</strong><span>Continue to the wider regional service page for related online pandit and NRI pooja options.</span></a>
          <a href="online-pooja.html"><strong>Online Pooja</strong><span>Explore remote pooja, sankalp, remedies and consultation paths for NRI families.</span></a>
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

  const csvPath = path.join(seoDaily, "2026-07-18-expansion-trust-link-upgrade.csv");
  const csvLines = [
    "url,market,target_keyword,regional_hub,links_added,lastmod",
    ...targets.map((target) => {
      const links = [
        "proof-center.html",
        "company-profile.html",
        "global-offices.html",
        "surya-kant-jha-chairman-networth-travel-agent.html",
        target.regionalHub,
        "online-pooja.html",
        "book-online.html",
        "track-booking.html",
      ].join("|");
      return [
        `${baseUrl}/${target.file}`,
        target.market,
        target.keyword,
        target.regionalHub,
        links,
        today,
      ].map((value) => `"${String(value).replace(/"/g, '""')}"`).join(",");
    }),
  ];
  fs.writeFileSync(csvPath, `${csvLines.join("\n")}\n`, "utf8");

  const mdPath = path.join(seoDaily, "2026-07-18-expansion-trust-link-upgrade.md");
  const md = [
    "# Expansion Trust Link SEO Upgrade - 2026-07-18",
    "",
    "Added a crawlable trust-and-booking section to 9 Canada, Australia, Singapore and Qatar expansion pages.",
    "",
    "## Links Added",
    "",
    "- Proof Center",
    "- Company Profile",
    "- Global Offices",
    "- Chairman Profile for Surya Kant Jha / Suryakant Jha",
    "- Matching regional hub",
    "- Online Pooja",
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
  const completedMarker = "## Expansion Trust Link SEO Upgrade - 2026-07-18";
  let completed = fs.existsSync(completedPath) ? fs.readFileSync(completedPath, "utf8") : "";
  if (!completed.includes(completedMarker)) {
    completed = `${completed.trimEnd()}\n\n${completedMarker}\n- Added verified trust-and-booking internal link sections to 9 Canada, Australia, Singapore and Qatar expansion pages.\n- Linked each page to Proof Center, Company Profile, Global Offices, Chairman Profile, regional hub, Online Pooja, booking and tracking.\n- Refreshed sitemap lastmod for all 9 expansion URLs to ${today}.\n- Added expansion SEO reports under outputs/seo-daily/.\n`;
    fs.writeFileSync(completedPath, completed, "utf8");
  }
}

for (const target of targets) {
  updateHtml(target);
}
updateSitemap();
writeReports();

console.log(`Expansion trust-link SEO upgraded for ${targets.length} pages.`);
