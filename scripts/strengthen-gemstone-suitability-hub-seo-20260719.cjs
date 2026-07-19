const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const outputs = path.resolve(root, "..", "..", "outputs");
const seoDaily = path.join(outputs, "seo-daily");
const today = "2026-07-19";
const baseUrl = "https://bandeviastro.com";
const file = "which-gemstone-is-suitable-by-kundli.html";
const pageUrl = `${baseUrl}/${file}`;
const title = "Which Gemstone Is Suitable by Kundli? Rings, Pendants & Loose Stones";
const description = "Find which gemstone is suitable by kundli, compare ruby, emerald, sapphire, coral, pearl, diamond, hessonite and cat's eye rings, pendants and loose stones before quote.";
const startMarker = "<!-- Gemstone Suitability Hub SEO Upgrade 2026-07-19 Start -->";
const endMarker = "<!-- Gemstone Suitability Hub SEO Upgrade 2026-07-19 End -->";

const stones = [
  {
    name: "Ruby / Manik",
    keyword: "ruby gemstone by kundli",
    ring: "ruby-ring.html",
    pendant: "ruby-pendant.html",
    loose: "ruby-loose-stone.html",
  },
  {
    name: "Emerald / Panna",
    keyword: "emerald gemstone by kundli",
    ring: "emerald-ring.html",
    pendant: "emerald-pendant.html",
    loose: "emerald-loose-stone.html",
  },
  {
    name: "Blue Sapphire / Neelam",
    keyword: "blue sapphire gemstone by kundli",
    ring: "blue-sapphire-ring.html",
    pendant: "blue-sapphire-pendant.html",
    loose: "blue-sapphire-loose-stone.html",
  },
  {
    name: "Yellow Sapphire / Pukhraj",
    keyword: "yellow sapphire gemstone by kundli",
    ring: "yellow-sapphire-ring.html",
    pendant: "yellow-sapphire-pendant.html",
    loose: "yellow-sapphire-loose-stone.html",
  },
  {
    name: "Red Coral / Moonga",
    keyword: "red coral gemstone by kundli",
    ring: "red-coral-ring.html",
    pendant: "red-coral-pendant.html",
    loose: "red-coral-loose-stone.html",
  },
  {
    name: "Pearl / Moti",
    keyword: "pearl gemstone by kundli",
    ring: "pearl-ring.html",
    pendant: "pearl-pendant.html",
    loose: "pearl-loose-stone.html",
  },
  {
    name: "Diamond / Heera",
    keyword: "diamond gemstone by kundli",
    ring: "diamond-ring.html",
    pendant: "diamond-pendant.html",
    loose: "diamond-loose-stone.html",
  },
  {
    name: "Hessonite / Gomed",
    keyword: "hessonite gemstone by kundli",
    ring: "hessonite-ring.html",
    pendant: "hessonite-pendant.html",
    loose: "hessonite-loose-stone.html",
  },
  {
    name: "Cat's Eye / Lehsunia",
    keyword: "cat's eye gemstone by kundli",
    ring: "cats-eye-ring.html",
    pendant: "cats-eye-pendant.html",
    loose: "cats-eye-loose-stone.html",
  },
];

const supportLinks = [
  ["gemstone-shop.html", "Gemstone Shop", "Compare gemstones, rings, pendants and loose stone quote paths."],
  ["kundli.html", "Kundli Consultation", "Use birth details and concern before final gemstone selection."],
  ["online-gemstone-consultation-dubai.html", "Gemstone Consultation Dubai", "Dubai and UAE clients can start from the regional gemstone page."],
  ["online-gemstone-consultation-usa.html", "Gemstone Consultation USA", "USA clients can route gemstone enquiries through the country page."],
  ["online-gemstone-consultation-uk.html", "Gemstone Consultation UK", "UK clients can compare suitability and booking steps before quote."],
  ["online-gemstone-consultation-canada.html", "Gemstone Consultation Canada", "Canada clients can prepare details before WhatsApp review."],
  ["proof-center.html", "Proof Center", "Review company-stated proof, staff, offices, policy and booking signals."],
  ["company-profile.html", "Company Profile", "1,289 staff worldwide and INR 7,594 crore company-stated net worth details."],
  ["book-online.html", "Create Booking ID", "Create a trackable request before quote or payment confirmation."],
  ["track-booking.html", "Track Booking", "Track quote, payment stage, staff update and delivery path."],
];

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function replaceOrInsertMeta(html, selector, replacement) {
  if (selector.test(html)) {
    return html.replace(selector, replacement);
  }
  return html.replace("</title>", `</title>\n    ${replacement}`);
}

function formLinks() {
  return stones.map((stone) => {
    return [
      `          <a href="${stone.ring}"><strong>${stone.name} Ring</strong><span>Compare the ring path for ${stone.keyword} after suitability review.</span></a>`,
      `          <a href="${stone.pendant}"><strong>${stone.name} Pendant</strong><span>Review pendant guidance if wearing near the neck is preferred.</span></a>`,
      `          <a href="${stone.loose}"><strong>${stone.name} Loose Stone</strong><span>Check loose stone quote details before setting, certificate or payment.</span></a>`,
    ].join("\n");
  }).join("\n");
}

function supportLinkCards() {
  return supportLinks.map(([href, name, copy]) => {
    return `          <a href="${href}"><strong>${name}</strong><span>${copy}</span></a>`;
  }).join("\n");
}

function hubSection() {
  return `${startMarker}
      <section class="section regional-links-section" aria-labelledby="gemstone-kundli-form-hub-title">
        <div class="section-heading">
          <p class="eyebrow">Gemstone form comparison</p>
          <h2 id="gemstone-kundli-form-hub-title">Compare ring, pendant and loose stone pages by kundli guidance</h2>
          <p>After suitability review, clients can compare the same gemstone as a ring, pendant or loose stone before final quote, certificate preference and payment choice.</p>
        </div>
        <div class="regional-link-grid" aria-label="Gemstone ring pendant and loose stone comparison links">
${formLinks()}
        </div>
      </section>

      <section class="section regional-process-section" aria-labelledby="gemstone-kundli-decision-flow-title">
        <div class="section-heading">
          <p class="eyebrow">Decision flow</p>
          <h2 id="gemstone-kundli-decision-flow-title">How to decide the gemstone path before payment</h2>
        </div>
        <ol class="regional-process-list">
          <li>Share birth date, birth time, birth place and main concern for kundli-based review.</li>
          <li>Confirm whether the recommendation is for guidance only, ring, pendant or loose stone purchase.</li>
          <li>For high-caution stones like blue sapphire, hessonite and cat's eye, ask for suitability review before wearing.</li>
          <li>Discuss carat or ratti, metal, certificate preference, budget and delivery country before the final quote.</li>
          <li>Create or track a Booking ID first, then choose COD or online payment only after staff confirmation.</li>
        </ol>
      </section>

      <section class="section international-trust-link-section" aria-labelledby="gemstone-kundli-trust-path-title">
        <div class="section-heading compact">
          <p class="eyebrow">Trust, country and payment path</p>
          <h2 id="gemstone-kundli-trust-path-title">Gemstone suitability support links</h2>
          <p>This hub connects informational gemstone-by-kundli searches to the shop, country pages, company proof, booking ID and tracking path.</p>
        </div>
        <div class="international-trust-link-grid" aria-label="Gemstone suitability support and trust links">
${supportLinkCards()}
        </div>
      </section>
      ${endMarker}`;
}

function updateJsonLd(html) {
  const scriptPattern = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/;
  const match = html.match(scriptPattern);
  if (!match) {
    throw new Error("Could not find JSON-LD script");
  }

  const data = JSON.parse(match[1]);
  const graph = Array.isArray(data["@graph"]) ? data["@graph"] : [];

  for (const item of graph) {
    if (item["@id"] === `${pageUrl}#webpage`) {
      item.name = title;
      item.description = description;
      item.dateModified = today;
    }
    if (item["@id"] === `${pageUrl}#article`) {
      item.headline = "Which gemstone is suitable by kundli: ring, pendant and loose stone guide";
      item.description = description;
      item.dateModified = today;
      item.articleSection = "Gemstone suitability guide";
    }
    if (item["@id"] === `${pageUrl}#related-pages`) {
      item.name = "Which gemstone is suitable by kundli related booking and country pages";
      item.itemListElement = supportLinks.slice(0, 6).map(([href, name], index) => ({
        "@type": "ListItem",
        position: index + 1,
        name,
        url: `${baseUrl}/${href}`,
      }));
    }
    if (item["@id"] === `${pageUrl}#faq`) {
      item.mainEntity = [
        {
          "@type": "Question",
          name: "Can gemstone be selected only by zodiac sign?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A simple zodiac suggestion is not enough for serious astrological wearing guidance. Kundli details and the concern should be reviewed.",
          },
        },
        {
          "@type": "Question",
          name: "Should I choose loose stone, ring or pendant first?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Suitability should come first. After review, the client can compare loose stone, ring and pendant pages before certificate, metal, quote and payment preference are confirmed.",
          },
        },
        {
          "@type": "Question",
          name: "Can certificate preference be discussed first?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Certificate preference, natural stone type, carat, metal and setting can be discussed before quote and Booking ID confirmation.",
          },
        },
        {
          "@type": "Question",
          name: "Can someone buy without consultation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A client can enquire, but astrological wearing guidance is best discussed after suitability review.",
          },
        },
      ];
    }
  }

  const moneyPages = [];
  stones.forEach((stone) => {
    moneyPages.push([`${stone.name} Ring`, stone.ring]);
    moneyPages.push([`${stone.name} Pendant`, stone.pendant]);
    moneyPages.push([`${stone.name} Loose Stone`, stone.loose]);
  });

  const moneyItemList = {
    "@type": "ItemList",
    "@id": `${pageUrl}#gemstone-money-pages`,
    name: "Gemstone ring pendant and loose stone pages by kundli guidance",
    itemListElement: moneyPages.map(([name, href], index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      url: `${baseUrl}/${href}`,
    })),
  };

  const existingIndex = graph.findIndex((item) => item["@id"] === moneyItemList["@id"]);
  if (existingIndex >= 0) {
    graph[existingIndex] = moneyItemList;
  } else {
    graph.splice(Math.max(graph.length - 2, 0), 0, moneyItemList);
  }

  data["@graph"] = graph;
  const pretty = JSON.stringify(data, null, 14);
  return html.replace(scriptPattern, `<script type="application/ld+json">\n${pretty}\n    </script>`);
}

function updateHtml() {
  const filePath = path.join(root, file);
  let html = fs.readFileSync(filePath, "utf8");
  const blockPattern = new RegExp(`${escapeRegExp(startMarker)}[\\s\\S]*?${escapeRegExp(endMarker)}`);
  const block = hubSection();

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);
  html = replaceOrInsertMeta(html, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${description}" />`);
  html = replaceOrInsertMeta(html, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${title}" />`);
  html = replaceOrInsertMeta(html, /<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${description}" />`);
  html = replaceOrInsertMeta(html, /<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${title}" />`);
  html = replaceOrInsertMeta(html, /<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${description}" />`);

  html = html.replace(
    "<h1>Which gemstone is suitable by kundli guide</h1>",
    "<h1>Which gemstone is suitable by kundli guide for rings, pendants and loose stones</h1>"
  );
  html = html.replace(
    "Gemstone wearing advice should be handled carefully. This guide explains why birth details, concern, certificate preference and suitability review matter before ordering.",
    "Gemstone wearing advice should be handled carefully. This guide explains why birth details, concern, certificate preference, ring or pendant form and suitability review matter before ordering."
  );

  if (blockPattern.test(html)) {
    html = html.replace(blockPattern, block);
  } else if (html.includes('      <section class="section faq-section regional-faq-section"')) {
    html = html.replace('      <section class="section faq-section regional-faq-section"', `      ${block}\n\n      <section class="section faq-section regional-faq-section"`);
  } else {
    throw new Error("Could not find FAQ section insertion point");
  }

  if (!html.includes("<summary>Should I choose loose stone, ring or pendant first?</summary>")) {
    html = html.replace(
      '<details><summary>Can certificate preference be discussed first?</summary>',
      '<details><summary>Should I choose loose stone, ring or pendant first?</summary><p>Suitability should come first. After review, compare loose stone, ring and pendant pages before certificate, metal, quote and payment preference are confirmed.</p></details>\n          <details><summary>Can certificate preference be discussed first?</summary>'
    );
  }

  html = updateJsonLd(html);
  fs.writeFileSync(filePath, html, "utf8");
}

function updateSitemap() {
  const sitemapPath = path.join(root, "sitemap.xml");
  let xml = fs.readFileSync(sitemapPath, "utf8");
  const urlPattern = new RegExp(`(<url>\\s*<loc>${escapeRegExp(pageUrl)}</loc>\\s*<lastmod>)([^<]+)(</lastmod>)`, "m");
  if (!urlPattern.test(xml)) {
    throw new Error(`Could not find sitemap entry for ${pageUrl}`);
  }
  xml = xml.replace(urlPattern, `$1${today}$3`);
  fs.writeFileSync(sitemapPath, xml, "utf8");
}

function writeReports() {
  fs.mkdirSync(seoDaily, { recursive: true });
  const csvPath = path.join(seoDaily, "2026-07-19-gemstone-suitability-hub-seo-upgrade.csv");
  const moneyPages = stones.flatMap((stone) => [stone.ring, stone.pendant, stone.loose]);
  const csvLines = [
    "url,hub_page,links_added,lastmod",
    `"${pageUrl}","gemstone suitability by kundli","${[...moneyPages, ...supportLinks.map(([href]) => href)].join("|")}","${today}"`,
  ];
  fs.writeFileSync(csvPath, `${csvLines.join("\n")}\n`, "utf8");

  const mdPath = path.join(seoDaily, "2026-07-19-gemstone-suitability-hub-seo-upgrade.md");
  const md = [
    "# Gemstone Suitability Hub SEO Upgrade - 2026-07-19",
    "",
    `Upgraded ${pageUrl} into a stronger gemstone-by-kundli hub page.`,
    "",
    "## Added",
    "",
    "- 27 crawlable links to gemstone ring, pendant and loose-stone money pages.",
    "- Decision flow for kundli review, form choice, certificate, quote and payment stage.",
    "- Trust, country and payment links to Gemstone Shop, Kundli, country pages, Proof Center, Company Profile, Book Online and Track Booking.",
    "- Refreshed title, meta description, Open Graph, Twitter metadata, Article JSON-LD and ItemList JSON-LD.",
    `- Refreshed sitemap lastmod to ${today}.`,
    "",
    "## Search Console Note",
    "",
    "Submit this hub page after the daily quota resets, then use it as the internal-link source for ring, pendant and loose-stone pages.",
    "",
  ].join("\n");
  fs.writeFileSync(mdPath, md, "utf8");

  const completedPath = path.join(outputs, "SEO_COMPLETED_20260705.md");
  const completedMarker = "## Gemstone Suitability Hub SEO Upgrade - 2026-07-19";
  let completed = fs.existsSync(completedPath) ? fs.readFileSync(completedPath, "utf8") : "";
  if (!completed.includes(completedMarker)) {
    completed = `${completed.trimEnd()}\n\n${completedMarker}\n- Upgraded ${pageUrl} as the gemstone-by-kundli hub for ring, pendant and loose-stone pages.\n- Added 27 internal links to gemstone money pages plus trust, country, booking and tracking links.\n- Refreshed metadata, Article JSON-LD, ItemList JSON-LD, FAQ JSON-LD and sitemap lastmod to ${today}.\n- Added SEO reports under outputs/seo-daily/.\n`;
    fs.writeFileSync(completedPath, completed, "utf8");
  }
}

updateHtml();
updateSitemap();
writeReports();

console.log("Gemstone suitability hub SEO upgraded.");
