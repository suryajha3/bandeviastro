const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const outputs = path.resolve(root, "..", "..", "outputs");
const seoDaily = path.join(outputs, "seo-daily");
const today = "2026-07-19";
const baseUrl = "https://bandeviastro.com";
const startMarker = "<!-- International Gemstone Country SEO Upgrade 2026-07-19 Start -->";
const endMarker = "<!-- International Gemstone Country SEO Upgrade 2026-07-19 End -->";

const stones = [
  ["Ruby / Manik", "ruby-ring.html", "ruby-pendant.html", "ruby-loose-stone.html", "ruby gemstone by kundli"],
  ["Emerald / Panna", "emerald-ring.html", "emerald-pendant.html", "emerald-loose-stone.html", "emerald gemstone by kundli"],
  ["Blue Sapphire / Neelam", "blue-sapphire-ring.html", "blue-sapphire-pendant.html", "blue-sapphire-loose-stone.html", "blue sapphire gemstone by kundli"],
  ["Yellow Sapphire / Pukhraj", "yellow-sapphire-ring.html", "yellow-sapphire-pendant.html", "yellow-sapphire-loose-stone.html", "yellow sapphire gemstone by kundli"],
  ["Red Coral / Moonga", "red-coral-ring.html", "red-coral-pendant.html", "red-coral-loose-stone.html", "red coral gemstone by kundli"],
  ["Pearl / Moti", "pearl-ring.html", "pearl-pendant.html", "pearl-loose-stone.html", "pearl gemstone by kundli"],
  ["Diamond / Heera", "diamond-ring.html", "diamond-pendant.html", "diamond-loose-stone.html", "diamond gemstone by kundli"],
  ["Hessonite / Gomed", "hessonite-ring.html", "hessonite-pendant.html", "hessonite-loose-stone.html", "hessonite gemstone by kundli"],
  ["Cat's Eye / Lehsunia", "cats-eye-ring.html", "cats-eye-pendant.html", "cats-eye-loose-stone.html", "cat's eye gemstone by kundli"],
];

const targets = [
  {
    file: "online-gemstone-consultation-dubai.html",
    market: "Dubai and UAE",
    shortMarket: "Dubai",
    title: "Online Gemstone Consultation Dubai | Kundli Gemstone Guidance",
    description: "Online gemstone consultation in Dubai and UAE with kundli suitability review, ring, pendant, loose stone quote, certificate preference and payment after staff confirmation.",
    countryPage: "online-pandit-dubai-uae.html",
    localAreas: "Dubai, Abu Dhabi, Sharjah, Ajman, Al Ain and UAE NRI families",
    hreflang: "en-AE",
    relatedCountryPages: ["online-gemstone-consultation-usa.html", "online-gemstone-consultation-uk.html", "online-gemstone-consultation-canada.html"],
  },
  {
    file: "online-gemstone-consultation-usa.html",
    market: "USA",
    shortMarket: "USA",
    title: "Online Gemstone Consultation USA | Kundli Gemstone Guidance",
    description: "Online gemstone consultation in USA with kundli suitability review, ring, pendant, loose stone quote, certificate preference and payment after staff confirmation.",
    countryPage: "online-pandit-usa.html",
    localAreas: "New York, New Jersey, Chicago, Dallas, Houston, California and USA NRI families",
    hreflang: "en-US",
    relatedCountryPages: ["online-gemstone-consultation-dubai.html", "online-gemstone-consultation-uk.html", "online-gemstone-consultation-canada.html"],
  },
  {
    file: "online-gemstone-consultation-uk.html",
    market: "UK",
    shortMarket: "UK",
    title: "Online Gemstone Consultation UK | Kundli Gemstone Guidance",
    description: "Online gemstone consultation in UK with kundli suitability review, ring, pendant, loose stone quote, certificate preference and payment after staff confirmation.",
    countryPage: "online-pandit-uk.html",
    localAreas: "London, Birmingham, Leicester, Manchester, Coventry, Slough and UK NRI families",
    hreflang: "en-GB",
    relatedCountryPages: ["online-gemstone-consultation-dubai.html", "online-gemstone-consultation-usa.html", "online-gemstone-consultation-canada.html"],
  },
  {
    file: "online-gemstone-consultation-canada.html",
    market: "Canada",
    shortMarket: "Canada",
    title: "Online Gemstone Consultation Canada | Kundli Gemstone Guidance",
    description: "Online gemstone consultation in Canada with kundli suitability review, ring, pendant, loose stone quote, certificate preference and payment after staff confirmation.",
    countryPage: "online-pandit-canada.html",
    localAreas: "Toronto, Brampton, Vancouver, Calgary, Montreal and Canada NRI families",
    hreflang: "en-CA",
    relatedCountryPages: ["online-gemstone-consultation-dubai.html", "online-gemstone-consultation-usa.html", "online-gemstone-consultation-uk.html"],
  },
];

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function replaceMeta(html, pattern, replacement) {
  if (!pattern.test(html)) {
    throw new Error(`Could not find metadata pattern: ${pattern}`);
  }
  return html.replace(pattern, replacement);
}

function stoneCards(market) {
  return stones.map(([name, ring, pendant, loose, keyword]) => {
    return [
      `          <a href="${ring}"><strong>${name} Ring</strong><span>${market} clients can compare the ring path for ${keyword} after kundli review.</span></a>`,
      `          <a href="${pendant}"><strong>${name} Pendant</strong><span>Review pendant guidance when the client prefers a neck-worn gemstone form.</span></a>`,
      `          <a href="${loose}"><strong>${name} Loose Stone</strong><span>Check loose stone quote details before setting, certificate and payment confirmation.</span></a>`,
    ].join("\n");
  }).join("\n");
}

function supportCards(target) {
  const countryLinks = target.relatedCountryPages.map((href) => {
    const label = href.replace("online-gemstone-consultation-", "").replace(".html", "").toUpperCase();
    return `          <a href="${href}"><strong>Gemstone ${label}</strong><span>Compare another international gemstone consultation page and country search route.</span></a>`;
  }).join("\n");

  return [
    `          <a href="which-gemstone-is-suitable-by-kundli.html"><strong>Gemstone By Kundli</strong><span>Use the gemstone suitability hub before choosing ring, pendant or loose stone.</span></a>`,
    `          <a href="gemstone-shop.html"><strong>Gemstone Shop</strong><span>Compare certified gemstone quote paths, product forms and staff-reviewed order flow.</span></a>`,
    `          <a href="${target.countryPage}"><strong>${target.shortMarket} Pandit Page</strong><span>Connect gemstone searches to the main ${target.shortMarket} pooja, kundli and hawan country page.</span></a>`,
    `          <a href="proof-center.html"><strong>Proof Center</strong><span>Company-stated proof, policies, staff count, net worth and booking proof in one place.</span></a>`,
    `          <a href="company-profile.html"><strong>Company Profile</strong><span>1,289 staff worldwide and INR 7,594 crore company-stated net worth details.</span></a>`,
    `          <a href="global-offices.html"><strong>Global Offices</strong><span>India, Dubai, London and United States office and service-network context.</span></a>`,
    `          <a href="book-online.html"><strong>Create Booking ID</strong><span>Create a trackable request before final quote, COD or online payment selection.</span></a>`,
    `          <a href="track-booking.html"><strong>Track Booking</strong><span>Track quote, staff update, payment stage and delivery path using Booking ID.</span></a>`,
    countryLinks,
  ].join("\n");
}

function sectionFor(target) {
  const pageSlug = target.file.replace(".html", "");
  return `${startMarker}
      <section class="section regional-links-section" aria-labelledby="${pageSlug}-gemstone-product-hub-title">
        <div class="section-heading">
          <p class="eyebrow">Gemstone forms for ${target.shortMarket}</p>
          <h2 id="${pageSlug}-gemstone-product-hub-title">Compare rings, pendants and loose stones before ${target.shortMarket} consultation</h2>
          <p>${target.market} clients can move from kundli suitability review to the right gemstone form before certificate preference, quote and payment confirmation.</p>
        </div>
        <div class="regional-link-grid" aria-label="${target.market} gemstone ring pendant and loose stone links">
${stoneCards(target.shortMarket)}
        </div>
      </section>

      <section class="section regional-process-section" aria-labelledby="${pageSlug}-payment-flow-title">
        <div class="section-heading">
          <p class="eyebrow">Quote and payment flow</p>
          <h2 id="${pageSlug}-payment-flow-title">How ${target.shortMarket} gemstone clients should proceed</h2>
        </div>
        <ol class="regional-process-list">
          <li>Share birth date, time, place, current country, city and main concern for kundli-based suitability review.</li>
          <li>Confirm whether guidance is for a ring, pendant, loose stone, or only a spiritual consultation.</li>
          <li>Discuss carat or ratti, metal, certificate preference, budget, delivery country and expected timeline.</li>
          <li>Create a Booking ID first, then choose COD or online payment only after staff confirms the final quote.</li>
          <li>Use Track Booking for quote updates, payment stage, staff notes and delivery progress.</li>
        </ol>
      </section>

      <section class="section international-trust-link-section" aria-labelledby="${pageSlug}-country-trust-title">
        <div class="section-heading compact">
          <p class="eyebrow">International trust path</p>
          <h2 id="${pageSlug}-country-trust-title">${target.shortMarket} gemstone consultation support links</h2>
          <p>This country page connects ${target.localAreas} to gemstone suitability, product quote pages, company proof, booking ID and payment tracking.</p>
        </div>
        <div class="international-trust-link-grid" aria-label="${target.market} gemstone consultation trust and product links">
${supportCards(target)}
        </div>
      </section>
      ${endMarker}`;
}

function updateJsonLd(html, target) {
  const scriptPattern = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/;
  const match = html.match(scriptPattern);
  if (!match) {
    throw new Error(`Could not find JSON-LD in ${target.file}`);
  }

  const data = JSON.parse(match[1]);
  const graph = Array.isArray(data["@graph"]) ? data["@graph"] : [];
  const pageUrl = `${baseUrl}/${target.file}`;
  const moneyPages = stones.flatMap(([name, ring, pendant, loose]) => [
    [`${name} Ring`, ring],
    [`${name} Pendant`, pendant],
    [`${name} Loose Stone`, loose],
  ]);

  for (const item of graph) {
    if (item["@id"] === `${pageUrl}#webpage`) {
      item.name = target.title;
      item.description = target.description;
      item.inLanguage = target.hreflang;
      item.dateModified = today;
    }
    if (item["@id"] === `${pageUrl}#service`) {
      item.name = `Online gemstone consultation ${target.shortMarket}`;
      item.description = target.description;
      item.dateModified = today;
      item.serviceType = [
        `online gemstone consultation ${target.shortMarket}`,
        `kundli gemstone guidance ${target.shortMarket}`,
        `gemstone ring pendant loose stone ${target.shortMarket}`,
        `certified gemstone quote ${target.shortMarket}`,
        `Jyotish gemstone consultation ${target.shortMarket}`,
      ];
      item.hasOfferCatalog = {
        "@type": "OfferCatalog",
        name: `${target.shortMarket} gemstone ring pendant and loose stone quote paths`,
        itemListElement: moneyPages.map(([name, href], index) => ({
          "@type": "Offer",
          position: index + 1,
          itemOffered: {
            "@type": "Product",
            name,
            url: `${baseUrl}/${href}`,
          },
        })),
      };
    }
    if (item["@id"] === `${pageUrl}#faq`) {
      const already = item.mainEntity || [];
      if (!already.some((faq) => faq.name === "Should payment be made before gemstone quote confirmation?")) {
        already.push({
          "@type": "Question",
          name: "Should payment be made before gemstone quote confirmation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The safer path is to create or confirm a Booking ID, check suitability, certificate preference, quote and delivery terms, then choose COD or online payment after staff confirmation.",
          },
        });
      }
      item.mainEntity = already;
    }
  }

  const itemList = {
    "@type": "ItemList",
    "@id": `${pageUrl}#gemstone-country-money-pages`,
    name: `${target.shortMarket} gemstone consultation ring pendant and loose stone pages`,
    itemListElement: moneyPages.map(([name, href], index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      url: `${baseUrl}/${href}`,
    })),
  };

  const existingIndex = graph.findIndex((item) => item["@id"] === itemList["@id"]);
  if (existingIndex >= 0) {
    graph[existingIndex] = itemList;
  } else {
    graph.splice(Math.max(graph.length - 2, 0), 0, itemList);
  }

  data["@graph"] = graph;
  return html.replace(scriptPattern, `<script type="application/ld+json">\n${JSON.stringify(data, null, 14)}\n    </script>`);
}

function updateHtml(target) {
  const filePath = path.join(root, target.file);
  let html = fs.readFileSync(filePath, "utf8");
  const pageUrl = `${baseUrl}/${target.file}`;
  const blockPattern = new RegExp(`${escapeRegExp(startMarker)}[\\s\\S]*?${escapeRegExp(endMarker)}`);
  const section = sectionFor(target);

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${target.title}</title>`);
  html = replaceMeta(html, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${target.description}" />`);
  html = replaceMeta(html, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${target.title}" />`);
  html = replaceMeta(html, /<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${target.description}" />`);
  html = replaceMeta(html, /<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${target.title}" />`);
  html = replaceMeta(html, /<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${target.description}" />`);

  if (!html.includes('<link rel="alternate" hreflang="en-IN" href="https://bandeviastro.com/gemstone-shop.html" />')) {
    html = html.replace(
      /<link rel="alternate" hreflang="x-default" href="[^"]+" \/>/,
      `$&\n    <link rel="alternate" hreflang="en-IN" href="https://bandeviastro.com/gemstone-shop.html" />`
    );
  }

  if (blockPattern.test(html)) {
    html = html.replace(blockPattern, section);
  } else if (html.includes('      <!-- International Trust Link Upgrade 2026-07-14 Start -->')) {
    html = html.replace('      <!-- International Trust Link Upgrade 2026-07-14 Start -->', `      ${section}\n      <!-- International Trust Link Upgrade 2026-07-14 Start -->`);
  } else if (html.includes("    </main>")) {
    html = html.replace("    </main>", `      ${section}\n    </main>`);
  } else {
    throw new Error(`Could not find insertion point in ${target.file}`);
  }

  if (!html.includes("<summary>Should payment be made before gemstone quote confirmation?</summary>")) {
    const faqPattern = /(<div class="faq-list">[\s\S]*?)(\s*<\/div>\s*<\/section>)/;
    if (!faqPattern.test(html)) {
      throw new Error(`Could not find FAQ list in ${target.file}`);
    }
    html = html.replace(
      faqPattern,
      '$1\n          <details><summary>Should payment be made before gemstone quote confirmation?</summary><p>No. Create or confirm a Booking ID, check suitability, quote, certificate preference and delivery terms, then choose COD or online payment after staff confirmation.</p></details>$2'
    );
  }

  html = updateJsonLd(html, target, pageUrl);
  fs.writeFileSync(filePath, html, "utf8");
}

function updateSitemap() {
  const sitemapPath = path.join(root, "sitemap.xml");
  let xml = fs.readFileSync(sitemapPath, "utf8");
  for (const target of targets) {
    const pageUrl = `${baseUrl}/${target.file}`;
    const urlPattern = new RegExp(`(<url>\\s*<loc>${escapeRegExp(pageUrl)}</loc>\\s*<lastmod>)([^<]+)(</lastmod>)`, "m");
    if (!urlPattern.test(xml)) {
      throw new Error(`Could not find sitemap entry for ${pageUrl}`);
    }
    xml = xml.replace(urlPattern, `$1${today}$3`);
  }
  fs.writeFileSync(sitemapPath, xml, "utf8");
}

function writeReports() {
  fs.mkdirSync(seoDaily, { recursive: true });
  const moneyLinks = stones.flatMap(([, ring, pendant, loose]) => [ring, pendant, loose]);
  const csvPath = path.join(seoDaily, "2026-07-19-international-gemstone-consultation-seo-upgrade.csv");
  const csvLines = [
    "url,market,links_added,lastmod",
    ...targets.map((target) => {
      const links = [
        ...moneyLinks,
        "which-gemstone-is-suitable-by-kundli.html",
        "gemstone-shop.html",
        target.countryPage,
        ...target.relatedCountryPages,
        "proof-center.html",
        "company-profile.html",
        "global-offices.html",
        "book-online.html",
        "track-booking.html",
      ].join("|");
      return [`${baseUrl}/${target.file}`, target.market, links, today].map((value) => `"${String(value).replace(/"/g, '""')}"`).join(",");
    }),
  ];
  fs.writeFileSync(csvPath, `${csvLines.join("\n")}\n`, "utf8");

  const mdPath = path.join(seoDaily, "2026-07-19-international-gemstone-consultation-seo-upgrade.md");
  const md = [
    "# International Gemstone Consultation SEO Upgrade - 2026-07-19",
    "",
    "Upgraded Dubai, USA, UK and Canada gemstone consultation pages as international SEO entry points.",
    "",
    "## Added",
    "",
    "- 27 ring, pendant and loose-stone money-page links on each country page.",
    "- Gemstone suitability hub, Gemstone Shop, country page, Proof Center, Company Profile, Global Offices, Book Online and Track Booking links.",
    "- Quote and payment flow emphasizing Booking ID, COD/online payment only after staff confirmation.",
    "- Refreshed title, meta description, Open Graph, Twitter metadata, Service schema, FAQ schema and ItemList schema.",
    `- Refreshed sitemap lastmod to ${today}.`,
    "",
    "## Priority URLs",
    "",
    ...targets.map((target) => `- ${baseUrl}/${target.file} - ${target.market}`),
    "",
  ].join("\n");
  fs.writeFileSync(mdPath, md, "utf8");

  const completedPath = path.join(outputs, "SEO_COMPLETED_20260705.md");
  const completedMarker = "## International Gemstone Consultation SEO Upgrade - 2026-07-19";
  let completed = fs.existsSync(completedPath) ? fs.readFileSync(completedPath, "utf8") : "";
  if (!completed.includes(completedMarker)) {
    completed = `${completed.trimEnd()}\n\n${completedMarker}\n- Upgraded Dubai, USA, UK and Canada gemstone consultation pages as international SEO entry points.\n- Added 27 ring, pendant and loose-stone links per page plus suitability hub, shop, country, proof, company, office, booking and tracking links.\n- Refreshed metadata, Service schema, FAQ schema, ItemList schema and sitemap lastmod to ${today}.\n- Added SEO reports under outputs/seo-daily/.\n`;
    fs.writeFileSync(completedPath, completed, "utf8");
  }
}

for (const target of targets) {
  updateHtml(target);
}
updateSitemap();
writeReports();

console.log(`International gemstone consultation SEO upgraded for ${targets.length} pages.`);
