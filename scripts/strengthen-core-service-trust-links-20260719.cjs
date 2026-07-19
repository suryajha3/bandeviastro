const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const outputs = path.resolve(root, "..", "..", "outputs");
const seoDaily = path.join(outputs, "seo-daily");
const today = "2026-07-19";
const baseUrl = "https://bandeviastro.com";
const startMarker = "<!-- Core Service Trust Link Upgrade 2026-07-19 Start -->";
const endMarker = "<!-- Core Service Trust Link Upgrade 2026-07-19 End -->";

const targets = [
  {
    file: "kundli.html",
    service: "online kundli consultation",
    keyword: "online kundli consultation",
    relatedPage: "kundli-astrology-guides.html",
    relatedLabel: "Kundli Guides",
    relatedText: "Read horoscope, matching, dosha and remedy guides that support kundli consultation intent.",
  },
  {
    file: "gemstone.html",
    service: "gemstone guidance",
    keyword: "gemstone guidance by kundli",
    relatedPage: "gemstone-shop.html",
    relatedLabel: "Gemstone Shop",
    relatedText: "Continue to gemstone rings, pendants and loose stones after kundli-based recommendation.",
  },
  {
    file: "gemstone-shop.html",
    service: "certified gemstone shopping",
    keyword: "buy gemstones online with kundli guidance",
    relatedPage: "which-gemstone-is-suitable-by-kundli.html",
    relatedLabel: "Gemstone By Kundli",
    relatedText: "Check which gemstone is suitable by birth chart before purchase or payment.",
  },
  {
    file: "hast-rekha.html",
    service: "hast rekha palmistry guidance",
    keyword: "hast rekha palmistry online",
    relatedPage: "kundli.html",
    relatedLabel: "Kundli Consultation",
    relatedText: "Combine palmistry direction with kundli review for clearer timing and remedy guidance.",
  },
  {
    file: "hawan.html",
    service: "online hawan booking",
    keyword: "hawan booking online",
    relatedPage: "hawan-samagri-premium-mix.html",
    relatedLabel: "Hawan Samagri",
    relatedText: "Review hawan samagri and preparation details before confirming the ritual path.",
  },
  {
    file: "vastu-muhurat.html",
    service: "vastu and muhurat consultation",
    keyword: "vastu muhurat consultation",
    relatedPage: "vastu-for-home-entrance-guide.html",
    relatedLabel: "Vastu Guide",
    relatedText: "Read home entrance, space balance and muhurat guidance before booking consultation.",
  },
  {
    file: "nri-pooja.html",
    service: "NRI online pooja booking",
    keyword: "NRI online pooja booking",
    relatedPage: "nri-online-pooja-guides.html",
    relatedLabel: "NRI Pooja Guides",
    relatedText: "See NRI pooja process, sankalp, family participation and proof expectations.",
  },
  {
    file: "online-pooja.html",
    service: "online pooja booking",
    keyword: "online pooja booking",
    relatedPage: "online-pooja-service-areas.html",
    relatedLabel: "Service Areas",
    relatedText: "Explore online pooja service areas for India, NRI families and international requests.",
  },
  {
    file: "book-online.html",
    service: "online booking and payment path",
    keyword: "book online pandit and astrology service",
    relatedPage: "refund-policy.html",
    relatedLabel: "Refund Policy",
    relatedText: "Check refund, cancellation and payment policy details before final confirmation.",
    hideBookLink: true,
  },
];

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function slugFor(file) {
  return file.replace(/\.html$/, "").replace(/[^a-z0-9]+/gi, "-").toLowerCase();
}

function card(href, title, text) {
  return `          <a href="${href}"><strong>${title}</strong><span>${text}</span></a>`;
}

function sectionFor(target) {
  const slug = slugFor(target.file);
  const serviceHeading = `${target.service.charAt(0).toUpperCase()}${target.service.slice(1)}`;
  const cards = [
    card("proof-center.html", "Proof Center", "Company-stated net worth, staff count, offices, policies and booking proof in one place."),
    card("company-profile.html", "Company Profile", "1,289 staff worldwide and INR 7,594 crore company-stated net worth details."),
    card("global-offices.html", "Global Offices", "India, Dubai, London and United States office and service-network context."),
    card("surya-kant-jha-chairman-networth-travel-agent.html", "Chairman Profile", "Surya Kant Jha, Suryakant Jha and travel agent leadership search context."),
    card(target.relatedPage, target.relatedLabel, target.relatedText),
  ];

  if (!target.hideBookLink) {
    cards.push(card("book-online.html", "Create Booking ID", "Start with a quote, choose payment preference and keep the request trackable."));
  }

  cards.push(
    card("track-booking.html", "Track Booking", "Check booking status, staff updates and payment stage using your Booking ID."),
    card("terms-and-conditions.html", "Booking Terms", "Review service, payment, cancellation and customer responsibility terms before final confirmation."),
  );

  return `${startMarker}
      <section class="section international-trust-link-section" aria-labelledby="${slug}-core-trust-title">
        <div class="section-heading compact">
          <p class="eyebrow">Verified service and payment path</p>
          <h2 id="${slug}-core-trust-title">${serviceHeading} trust links</h2>
          <p>Visitors searching for ${target.keyword} can check company proof, leadership details, office context, booking status, terms and payment path before speaking with the team.</p>
        </div>
        <div class="international-trust-link-grid" aria-label="${target.service} proof and booking links">
${cards.join("\n")}
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

  const csvPath = path.join(seoDaily, "2026-07-19-core-service-trust-link-upgrade.csv");
  const csvLines = [
    "url,service,target_keyword,related_page,links_added,lastmod",
    ...targets.map((target) => {
      const links = [
        "proof-center.html",
        "company-profile.html",
        "global-offices.html",
        "surya-kant-jha-chairman-networth-travel-agent.html",
        target.relatedPage,
        ...(target.hideBookLink ? [] : ["book-online.html"]),
        "track-booking.html",
        "terms-and-conditions.html",
      ].join("|");
      return [
        `${baseUrl}/${target.file}`,
        target.service,
        target.keyword,
        target.relatedPage,
        links,
        today,
      ].map((value) => `"${String(value).replace(/"/g, '""')}"`).join(",");
    }),
  ];
  fs.writeFileSync(csvPath, `${csvLines.join("\n")}\n`, "utf8");

  const mdPath = path.join(seoDaily, "2026-07-19-core-service-trust-link-upgrade.md");
  const md = [
    "# Core Service Trust Link SEO Upgrade - 2026-07-19",
    "",
    "Added a crawlable trust, booking and payment-path section to 9 core service pages.",
    "",
    "## Links Added",
    "",
    "- Proof Center",
    "- Company Profile",
    "- Global Offices",
    "- Chairman Profile for Surya Kant Jha / Suryakant Jha",
    "- Matching service or policy page",
    "- Create Booking ID where relevant",
    "- Track Booking",
    "- Booking Terms",
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
  const completedMarker = "## Core Service Trust Link SEO Upgrade - 2026-07-19";
  let completed = fs.existsSync(completedPath) ? fs.readFileSync(completedPath, "utf8") : "";
  if (!completed.includes(completedMarker)) {
    completed = `${completed.trimEnd()}\n\n${completedMarker}\n- Added verified trust, booking and payment-path internal link sections to 9 core service pages.\n- Linked each page to Proof Center, Company Profile, Global Offices, Chairman Profile, related service/policy page, booking/tracking and terms.\n- Refreshed sitemap lastmod for all 9 core service URLs to ${today}.\n- Added core service SEO reports under outputs/seo-daily/.\n`;
    fs.writeFileSync(completedPath, completed, "utf8");
  }
}

for (const target of targets) {
  updateHtml(target);
}
updateSitemap();
writeReports();

console.log(`Core service trust-link SEO upgraded for ${targets.length} pages.`);
