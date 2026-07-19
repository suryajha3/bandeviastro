const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const outputs = path.resolve(root, "..", "..", "outputs");
const seoDaily = path.join(outputs, "seo-daily");
const today = "2026-07-19";
const baseUrl = "https://bandeviastro.com";
const startMarker = "<!-- Gemstone Loose Stone Trust Link Upgrade 2026-07-19 Start -->";
const endMarker = "<!-- Gemstone Loose Stone Trust Link Upgrade 2026-07-19 End -->";

const targets = [
  {
    file: "ruby-loose-stone.html",
    product: "Manik Loose Stone / Ruby Loose Stone",
    keyword: "ruby loose stone with kundli guidance",
    relatedRing: "ruby-ring.html",
    relatedPendant: "ruby-pendant.html",
  },
  {
    file: "emerald-loose-stone.html",
    product: "Panna Loose Stone / Emerald Loose Stone",
    keyword: "emerald loose stone with kundli guidance",
    relatedRing: "emerald-ring.html",
    relatedPendant: "emerald-pendant.html",
  },
  {
    file: "blue-sapphire-loose-stone.html",
    product: "Neelam Loose Stone / Blue Sapphire Loose Stone",
    keyword: "blue sapphire loose stone with kundli guidance",
    relatedRing: "blue-sapphire-ring.html",
    relatedPendant: "blue-sapphire-pendant.html",
  },
  {
    file: "yellow-sapphire-loose-stone.html",
    product: "Pukhraj Loose Stone / Yellow Sapphire Loose Stone",
    keyword: "yellow sapphire loose stone with kundli guidance",
    relatedRing: "yellow-sapphire-ring.html",
    relatedPendant: "yellow-sapphire-pendant.html",
  },
  {
    file: "red-coral-loose-stone.html",
    product: "Moonga Loose Stone / Red Coral Loose Stone",
    keyword: "red coral loose stone with kundli guidance",
    relatedRing: "red-coral-ring.html",
    relatedPendant: "red-coral-pendant.html",
  },
  {
    file: "pearl-loose-stone.html",
    product: "Moti Loose Stone / Pearl Loose Stone",
    keyword: "pearl loose stone with kundli guidance",
    relatedRing: "pearl-ring.html",
    relatedPendant: "pearl-pendant.html",
  },
  {
    file: "diamond-loose-stone.html",
    product: "Heera Loose Stone / Diamond Loose Stone",
    keyword: "diamond loose stone with kundli guidance",
    relatedRing: "diamond-ring.html",
    relatedPendant: "diamond-pendant.html",
  },
  {
    file: "hessonite-loose-stone.html",
    product: "Gomed Loose Stone / Hessonite Loose Stone",
    keyword: "hessonite loose stone with kundli guidance",
    relatedRing: "hessonite-ring.html",
    relatedPendant: "hessonite-pendant.html",
  },
  {
    file: "cats-eye-loose-stone.html",
    product: "Lehsunia Loose Stone / Cat's Eye Loose Stone",
    keyword: "cat's eye loose stone with kundli guidance",
    relatedRing: "cats-eye-ring.html",
    relatedPendant: "cats-eye-pendant.html",
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
  return `${startMarker}
      <section class="section international-trust-link-section" aria-labelledby="${slug}-loose-stone-trust-title">
        <div class="section-heading compact">
          <p class="eyebrow">Verified loose gemstone quote and payment path</p>
          <h2 id="${slug}-loose-stone-trust-title">${target.product} trust links</h2>
          <p>Visitors searching for ${target.keyword} can compare shop options, check kundli suitability, review company proof and keep every quote or payment stage trackable before buying.</p>
        </div>
        <div class="international-trust-link-grid" aria-label="${target.product} proof, suitability and booking links">
          <a href="gemstone-shop.html"><strong>Gemstone Shop</strong><span>Compare loose stones, rings, pendants and request a staff-reviewed quote.</span></a>
          <a href="which-gemstone-is-suitable-by-kundli.html"><strong>Gemstone By Kundli</strong><span>Check why gemstone selection should be matched with birth chart guidance first.</span></a>
          <a href="${target.relatedRing}"><strong>Ring Option</strong><span>Review the matching ring page if a ring setting is preferred after guidance.</span></a>
          <a href="${target.relatedPendant}"><strong>Pendant Option</strong><span>Compare the matching pendant page before finalizing loose stone or custom setting.</span></a>
          <a href="proof-center.html"><strong>Proof Center</strong><span>Company-stated net worth, staff count, offices, policies and booking proof in one place.</span></a>
          <a href="company-profile.html"><strong>Company Profile</strong><span>1,289 staff worldwide and INR 7,594 crore company-stated net worth details.</span></a>
          <a href="book-online.html"><strong>Create Booking ID</strong><span>Start with a quote, choose payment preference and keep the gemstone request trackable.</span></a>
          <a href="track-booking.html"><strong>Track Booking</strong><span>Check quote, payment stage, staff updates and delivery path using your Booking ID.</span></a>
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

  const csvPath = path.join(seoDaily, "2026-07-19-gemstone-loose-stone-trust-link-upgrade.csv");
  const csvLines = [
    "url,product,target_keyword,related_ring,related_pendant,links_added,lastmod",
    ...targets.map((target) => {
      const links = [
        "gemstone-shop.html",
        "which-gemstone-is-suitable-by-kundli.html",
        target.relatedRing,
        target.relatedPendant,
        "proof-center.html",
        "company-profile.html",
        "book-online.html",
        "track-booking.html",
      ].join("|");
      return [
        `${baseUrl}/${target.file}`,
        target.product,
        target.keyword,
        target.relatedRing,
        target.relatedPendant,
        links,
        today,
      ].map((value) => `"${String(value).replace(/"/g, '""')}"`).join(",");
    }),
  ];
  fs.writeFileSync(csvPath, `${csvLines.join("\n")}\n`, "utf8");

  const mdPath = path.join(seoDaily, "2026-07-19-gemstone-loose-stone-trust-link-upgrade.md");
  const md = [
    "# Gemstone Loose Stone Trust Link SEO Upgrade - 2026-07-19",
    "",
    "Added a crawlable trust, suitability and booking/payment path section to 9 loose gemstone money pages.",
    "",
    "## Links Added",
    "",
    "- Gemstone Shop",
    "- Gemstone suitability by kundli",
    "- Matching ring option",
    "- Matching pendant option",
    "- Proof Center",
    "- Company Profile",
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
  const completedMarker = "## Gemstone Loose Stone Trust Link SEO Upgrade - 2026-07-19";
  let completed = fs.existsSync(completedPath) ? fs.readFileSync(completedPath, "utf8") : "";
  if (!completed.includes(completedMarker)) {
    completed = `${completed.trimEnd()}\n\n${completedMarker}\n- Added verified gemstone suitability, trust and payment-path internal link sections to 9 loose gemstone money pages.\n- Linked each page to Gemstone Shop, kundli suitability, matching ring, matching pendant, Proof Center, Company Profile, booking and tracking.\n- Refreshed sitemap lastmod for all 9 loose gemstone URLs to ${today}.\n- Added loose gemstone SEO reports under outputs/seo-daily/.\n`;
    fs.writeFileSync(completedPath, completed, "utf8");
  }
}

for (const target of targets) {
  updateHtml(target);
}
updateSitemap();
writeReports();

console.log(`Gemstone loose stone trust-link SEO upgraded for ${targets.length} pages.`);
