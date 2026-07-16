const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const outputs = path.resolve(root, "..", "..", "outputs");
const seoDaily = path.join(outputs, "seo-daily");
const today = "2026-07-16";
const baseUrl = "https://bandeviastro.com";
const startMarker = "<!-- City Trust Link Upgrade 2026-07-16 Start -->";
const endMarker = "<!-- City Trust Link Upgrade 2026-07-16 End -->";

const targets = [
  {
    file: "online-pandit-dubai.html",
    city: "Dubai",
    region: "UAE",
    keyword: "online pandit in Dubai",
    service: "online pandit, pooja, kundli and gemstone guidance",
    relatedCityPage: "online-pandit-dubai-uae.html",
    relatedCityLabel: "Dubai UAE Service Hub",
  },
  {
    file: "online-pandit-abu-dhabi.html",
    city: "Abu Dhabi",
    region: "UAE",
    keyword: "online pandit in Abu Dhabi",
    service: "online pandit, pooja, kundli and gemstone guidance",
    relatedCityPage: "online-pandit-dubai-uae.html",
    relatedCityLabel: "UAE Service Hub",
  },
  {
    file: "online-pandit-sharjah.html",
    city: "Sharjah",
    region: "UAE",
    keyword: "online pandit in Sharjah",
    service: "online pandit, pooja, kundli and gemstone guidance",
    relatedCityPage: "online-pandit-dubai-uae.html",
    relatedCityLabel: "UAE Service Hub",
  },
  {
    file: "online-pandit-london.html",
    city: "London",
    region: "UK",
    keyword: "online pandit in London UK",
    service: "online Hindu priest, pooja, kundli and remedy guidance",
    relatedCityPage: "online-pandit-uk.html",
    relatedCityLabel: "UK Service Hub",
  },
  {
    file: "online-pandit-manchester.html",
    city: "Manchester",
    region: "UK",
    keyword: "online pandit in Manchester UK",
    service: "online Hindu priest, pooja, kundli and remedy guidance",
    relatedCityPage: "online-pandit-uk.html",
    relatedCityLabel: "UK Service Hub",
  },
  {
    file: "online-pandit-new-york.html",
    city: "New York",
    region: "USA",
    keyword: "online pandit in New York",
    service: "online pandit, pooja, kundli and gemstone guidance",
    relatedCityPage: "online-pandit-usa.html",
    relatedCityLabel: "USA Service Hub",
  },
  {
    file: "online-pandit-jersey-city.html",
    city: "Jersey City",
    region: "USA",
    keyword: "online pandit in Jersey City USA",
    service: "online pandit, pooja, kundli and gemstone guidance",
    relatedCityPage: "online-pandit-usa.html",
    relatedCityLabel: "USA Service Hub",
  },
  {
    file: "online-pandit-san-francisco.html",
    city: "San Francisco Bay Area",
    region: "USA",
    keyword: "online pandit in San Francisco Bay Area",
    service: "online pandit, pooja, kundli and gemstone guidance",
    relatedCityPage: "online-pandit-usa.html",
    relatedCityLabel: "USA Service Hub",
  },
  {
    file: "online-pandit-chicago.html",
    city: "Chicago",
    region: "USA",
    keyword: "online pandit in Chicago USA",
    service: "online pandit, pooja, kundli and gemstone guidance",
    relatedCityPage: "online-pandit-usa.html",
    relatedCityLabel: "USA Service Hub",
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
      <section class="section international-trust-link-section" aria-labelledby="${slug}-city-trust-title">
        <div class="section-heading compact">
          <p class="eyebrow">Verified booking path for ${target.city}</p>
          <h2 id="${slug}-city-trust-title">${serviceHeading} trust links for ${target.city}</h2>
          <p>Visitors searching for ${target.keyword} can check proof pages, company details, global office context, chairman information, booking status and payment path before speaking with the team.</p>
        </div>
        <div class="international-trust-link-grid" aria-label="${target.city} proof and booking links">
          <a href="proof-center.html"><strong>Proof Center</strong><span>Company-stated net worth, staff count, offices, policies and booking proof in one place.</span></a>
          <a href="company-profile.html"><strong>Company Profile</strong><span>1,289 staff worldwide and INR 7,594 crore company-stated net worth details.</span></a>
          <a href="global-offices.html"><strong>Global Offices</strong><span>India, Dubai, London and United States office and service-network context.</span></a>
          <a href="surya-kant-jha-chairman-networth-travel-agent.html"><strong>Chairman Profile</strong><span>Surya Kant Jha, Suryakant Jha and travel agent leadership search context.</span></a>
          <a href="${target.relatedCityPage}"><strong>${target.relatedCityLabel}</strong><span>Continue to the wider ${target.region} service page for related city and country options.</span></a>
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

  const csvPath = path.join(seoDaily, "2026-07-16-city-trust-link-upgrade.csv");
  const csvLines = [
    "url,city,region,target_keyword,related_hub,links_added,lastmod",
    ...targets.map((target) => {
      const links = [
        "proof-center.html",
        "company-profile.html",
        "global-offices.html",
        "surya-kant-jha-chairman-networth-travel-agent.html",
        target.relatedCityPage,
        "book-online.html",
        "track-booking.html",
      ].join("|");
      return [
        `${baseUrl}/${target.file}`,
        target.city,
        target.region,
        target.keyword,
        target.relatedCityPage,
        links,
        today,
      ].map((value) => `"${String(value).replace(/"/g, '""')}"`).join(",");
    }),
  ];
  fs.writeFileSync(csvPath, `${csvLines.join("\n")}\n`, "utf8");

  const mdPath = path.join(seoDaily, "2026-07-16-city-trust-link-upgrade.md");
  const md = [
    "# City Trust Link SEO Upgrade - 2026-07-16",
    "",
    "Added a crawlable trust-and-booking section to 9 priority city pages after Search Console submission quota was reached.",
    "",
    "## Links Added",
    "",
    "- Proof Center",
    "- Company Profile",
    "- Global Offices",
    "- Chairman Profile for Surya Kant Jha / Suryakant Jha",
    "- Matching country or regional hub page",
    "- Create Booking ID",
    "- Track Booking",
    "",
    "## Priority URLs",
    "",
    ...targets.map((target) => `- ${baseUrl}/${target.file} - ${target.keyword}`),
    "",
    "## Search Console Note",
    "",
    "Google Search Console indexing quota was exceeded on 2026-07-16. Submit these URLs again after the daily quota resets.",
    "",
  ].join("\n");
  fs.writeFileSync(mdPath, md, "utf8");

  const completedPath = path.join(outputs, "SEO_COMPLETED_20260705.md");
  const completedMarker = "## City Trust Link SEO Upgrade - 2026-07-16";
  let completed = fs.existsSync(completedPath) ? fs.readFileSync(completedPath, "utf8") : "";
  if (!completed.includes(completedMarker)) {
    completed = `${completed.trimEnd()}\n\n${completedMarker}\n- Added verified trust-and-booking internal link sections to 9 priority UAE, UK and USA city pages.\n- Linked each city page to Proof Center, Company Profile, Global Offices, Chairman Profile, matching regional hub, booking and tracking.\n- Refreshed sitemap lastmod for all 9 city URLs to ${today}.\n- Added city SEO reports under outputs/seo-daily/.\n`;
    fs.writeFileSync(completedPath, completed, "utf8");
  }
}

for (const target of targets) {
  updateHtml(target);
}
updateSitemap();
writeReports();

console.log(`City trust-link SEO upgraded for ${targets.length} pages.`);
