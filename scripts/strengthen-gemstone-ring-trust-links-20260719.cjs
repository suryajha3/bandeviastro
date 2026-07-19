const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const outputs = path.resolve(root, "..", "..", "outputs");
const seoDaily = path.join(outputs, "seo-daily");
const today = "2026-07-19";
const baseUrl = "https://bandeviastro.com";
const startMarker = "<!-- Gemstone Ring Trust Link Upgrade 2026-07-19 Start -->";
const endMarker = "<!-- Gemstone Ring Trust Link Upgrade 2026-07-19 End -->";

const targets = [
  {
    file: "ruby-ring.html",
    product: "Manik Ring / Ruby Ring",
    keyword: "ruby ring with kundli guidance",
    relatedStone: "ruby-loose-stone.html",
  },
  {
    file: "emerald-ring.html",
    product: "Panna Ring / Emerald Ring",
    keyword: "emerald ring with kundli guidance",
    relatedStone: "emerald-loose-stone.html",
  },
  {
    file: "blue-sapphire-ring.html",
    product: "Neelam Ring / Blue Sapphire Ring",
    keyword: "blue sapphire ring with kundli guidance",
    relatedStone: "blue-sapphire-loose-stone.html",
  },
  {
    file: "yellow-sapphire-ring.html",
    product: "Pukhraj Ring / Yellow Sapphire Ring",
    keyword: "yellow sapphire ring with kundli guidance",
    relatedStone: "yellow-sapphire-loose-stone.html",
  },
  {
    file: "red-coral-ring.html",
    product: "Moonga Ring / Red Coral Ring",
    keyword: "red coral ring with kundli guidance",
    relatedStone: "red-coral-loose-stone.html",
  },
  {
    file: "pearl-ring.html",
    product: "Moti Ring / Pearl Ring",
    keyword: "pearl ring with kundli guidance",
    relatedStone: "pearl-loose-stone.html",
  },
  {
    file: "diamond-ring.html",
    product: "Heera Ring / Diamond Ring",
    keyword: "diamond ring with kundli guidance",
    relatedStone: "diamond-loose-stone.html",
  },
  {
    file: "hessonite-ring.html",
    product: "Gomed Ring / Hessonite Ring",
    keyword: "hessonite ring with kundli guidance",
    relatedStone: "hessonite-loose-stone.html",
  },
  {
    file: "cats-eye-ring.html",
    product: "Lehsunia Ring / Cat's Eye Ring",
    keyword: "cat's eye ring with kundli guidance",
    relatedStone: "cats-eye-loose-stone.html",
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
      <section class="section international-trust-link-section" aria-labelledby="${slug}-ring-trust-title">
        <div class="section-heading compact">
          <p class="eyebrow">Verified gemstone quote and payment path</p>
          <h2 id="${slug}-ring-trust-title">${target.product} trust links</h2>
          <p>Visitors searching for ${target.keyword} can check kundli suitability, company proof, leadership details, booking status and payment path before requesting a quote.</p>
        </div>
        <div class="international-trust-link-grid" aria-label="${target.product} proof, suitability and booking links">
          <a href="gemstone-shop.html"><strong>Gemstone Shop</strong><span>Compare rings, pendants, loose stones and request a staff-reviewed quote.</span></a>
          <a href="which-gemstone-is-suitable-by-kundli.html"><strong>Gemstone By Kundli</strong><span>Check why gemstone selection should be matched with birth chart guidance first.</span></a>
          <a href="${target.relatedStone}"><strong>Loose Stone Option</strong><span>Review the matching loose stone page before finalizing ring, pendant or custom setting.</span></a>
          <a href="proof-center.html"><strong>Proof Center</strong><span>Company-stated net worth, staff count, offices, policies and booking proof in one place.</span></a>
          <a href="company-profile.html"><strong>Company Profile</strong><span>1,289 staff worldwide and INR 7,594 crore company-stated net worth details.</span></a>
          <a href="surya-kant-jha-chairman-networth-travel-agent.html"><strong>Chairman Profile</strong><span>Surya Kant Jha, Suryakant Jha and leadership search context.</span></a>
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

  const csvPath = path.join(seoDaily, "2026-07-19-gemstone-ring-trust-link-upgrade.csv");
  const csvLines = [
    "url,product,target_keyword,related_stone,links_added,lastmod",
    ...targets.map((target) => {
      const links = [
        "gemstone-shop.html",
        "which-gemstone-is-suitable-by-kundli.html",
        target.relatedStone,
        "proof-center.html",
        "company-profile.html",
        "surya-kant-jha-chairman-networth-travel-agent.html",
        "book-online.html",
        "track-booking.html",
      ].join("|");
      return [
        `${baseUrl}/${target.file}`,
        target.product,
        target.keyword,
        target.relatedStone,
        links,
        today,
      ].map((value) => `"${String(value).replace(/"/g, '""')}"`).join(",");
    }),
  ];
  fs.writeFileSync(csvPath, `${csvLines.join("\n")}\n`, "utf8");

  const mdPath = path.join(seoDaily, "2026-07-19-gemstone-ring-trust-link-upgrade.md");
  const md = [
    "# Gemstone Ring Trust Link SEO Upgrade - 2026-07-19",
    "",
    "Added a crawlable trust, suitability and booking/payment path section to 9 gemstone ring money pages.",
    "",
    "## Links Added",
    "",
    "- Gemstone Shop",
    "- Gemstone suitability by kundli",
    "- Matching loose stone option",
    "- Proof Center",
    "- Company Profile",
    "- Chairman Profile for Surya Kant Jha / Suryakant Jha",
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
  const completedMarker = "## Gemstone Ring Trust Link SEO Upgrade - 2026-07-19";
  let completed = fs.existsSync(completedPath) ? fs.readFileSync(completedPath, "utf8") : "";
  if (!completed.includes(completedMarker)) {
    completed = `${completed.trimEnd()}\n\n${completedMarker}\n- Added verified gemstone suitability, trust and payment-path internal link sections to 9 gemstone ring money pages.\n- Linked each page to Gemstone Shop, kundli suitability, matching loose stone, Proof Center, Company Profile, Chairman Profile, booking and tracking.\n- Refreshed sitemap lastmod for all 9 gemstone ring URLs to ${today}.\n- Added gemstone ring SEO reports under outputs/seo-daily/.\n`;
    fs.writeFileSync(completedPath, completed, "utf8");
  }
}

for (const target of targets) {
  updateHtml(target);
}
updateSitemap();
writeReports();

console.log(`Gemstone ring trust-link SEO upgraded for ${targets.length} pages.`);
