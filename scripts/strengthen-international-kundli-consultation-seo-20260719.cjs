const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const outputs = path.resolve(root, "..", "..", "outputs");
const seoDaily = path.join(outputs, "seo-daily");
const today = "2026-07-19";
const baseUrl = "https://bandeviastro.com";
const startMarker = "<!-- International Kundli Authority SEO Upgrade 2026-07-19 Start -->";
const endMarker = "<!-- International Kundli Authority SEO Upgrade 2026-07-19 End -->";

const coreServiceLinks = [
  ["kundli.html", "Kundli Consultation", "Main kundli consultation hub for birth chart, dosh, marriage, career and remedies."],
  ["kundli-matching-for-marriage-guide.html", "Kundli Matching Guide", "Marriage matching guide before consultation or family discussion."],
  ["marriage-problem.html", "Marriage Guidance", "Marriage delay, compatibility and relationship concern consultation path."],
  ["business-problem.html", "Business Guidance", "Business, career and financial concern astrology consultation path."],
  ["gemstone-shop.html", "Gemstone Shop", "Certified gemstone quote path after kundli suitability review."],
  ["which-gemstone-is-suitable-by-kundli.html", "Gemstone By Kundli", "Suitability review before choosing gemstone, metal, certificate and form."],
  ["hast-rekha.html", "Hast Rekha", "Palm reading and spiritual consultation route for family concerns."],
  ["vastu-muhurat.html", "Vastu and Muhurat", "Home, office, griha pravesh, business and auspicious timing guidance."],
  ["online-pooja.html", "Online Pooja", "Remote pooja, sankalp, live option and proof discussion before confirmation."],
  ["hawan.html", "Hawan Services", "Grah shanti, navgrah, family, business and vastu hawan planning."],
  ["online-pooja-service-areas.html", "Service Areas Hub", "Global country, city and service-intent SEO hub."],
];

const trustLinks = [
  ["proof-center.html", "Proof Center", "Company-stated net worth, staff count, offices, policies and booking proof."],
  ["company-profile.html", "Company Profile", "1,289 staff worldwide and INR 7,594 crore company-stated net worth details."],
  ["global-offices.html", "Global Offices", "India, Dubai, London and United States office and service-network context."],
  ["surya-kant-jha-chairman-networth-travel-agent.html", "Chairman Profile", "Surya Kant Jha, Suryakant Jha and travel agent leadership search context."],
  ["book-online.html", "Create Booking ID", "Create a trackable request before final quote, COD or online payment choice."],
  ["track-booking.html", "Track Booking", "Track quote, staff update, payment stage and consultation status."],
];

const targets = [
  {
    file: "online-kundli-consultation-dubai.html",
    market: "Dubai and UAE",
    shortMarket: "Dubai",
    titleText: "Online Kundli Consultation Dubai | Marriage, Career, Dosh & Remedies",
    titleHtml: "Online Kundli Consultation Dubai | Marriage, Career, Dosh &amp; Remedies",
    description: "Online kundli consultation Dubai and UAE for marriage, career, dosh, gemstone, vastu and muhurat guidance with Booking ID and payment after quote.",
    hreflang: "en-AE",
    countryHub: ["online-pandit-dubai-uae.html", "Online Pandit Dubai UAE", "Country hub for UAE pooja, kundli, hawan and gemstone searches."],
    cityLinks: [
      ["online-pandit-dubai.html", "Online Pandit Dubai", "Dubai city page for NRI pooja, kundli and gemstone searches."],
      ["online-pandit-abu-dhabi.html", "Online Pandit Abu Dhabi", "Abu Dhabi page for online pooja and kundli searches."],
      ["online-pandit-sharjah.html", "Online Pandit Sharjah", "Sharjah page for NRI pooja and online pandit searches."],
    ],
    siblingLinks: [
      ["online-kundli-consultation-usa.html", "Kundli Consultation USA", "USA kundli and astrology consultation page."],
      ["online-kundli-consultation-uk.html", "Kundli Consultation UK", "UK kundli and astrology consultation page."],
      ["online-kundli-consultation-canada.html", "Kundli Consultation Canada", "Canada kundli and astrology consultation page."],
    ],
    localServiceLinks: [
      ["online-gemstone-consultation-dubai.html", "Gemstone Consultation Dubai", "Dubai gemstone suitability and certificate quote path."],
      ["online-vastu-consultation-dubai.html", "Vastu Consultation Dubai", "Dubai home and office vastu consultation page."],
      ["hawan.html", "Hawan Booking Dubai", "Use the main hawan hub for Dubai hawan, jaap and grah shanti enquiries."],
    ],
  },
  {
    file: "online-kundli-consultation-usa.html",
    market: "USA",
    shortMarket: "USA",
    titleText: "Online Kundli Consultation USA | Marriage, Career, Dosh & Remedies",
    titleHtml: "Online Kundli Consultation USA | Marriage, Career, Dosh &amp; Remedies",
    description: "Online kundli consultation USA for marriage, career, dosh, gemstone, vastu and muhurat guidance with Booking ID and payment after quote.",
    hreflang: "en-US",
    countryHub: ["online-pandit-usa.html", "Online Pandit USA", "Country hub for USA pooja, kundli, hawan and gemstone searches."],
    cityLinks: [
      ["online-pandit-new-york.html", "Online Pandit New York", "New York and New Jersey city page."],
      ["online-pandit-los-angeles.html", "Online Pandit Los Angeles", "Los Angeles and Southern California city page."],
      ["online-pandit-chicago.html", "Online Pandit Chicago", "Chicago and Illinois NRI pooja page."],
    ],
    siblingLinks: [
      ["online-kundli-consultation-dubai.html", "Kundli Consultation Dubai", "Dubai and UAE kundli consultation page."],
      ["online-kundli-consultation-uk.html", "Kundli Consultation UK", "UK kundli and astrology consultation page."],
      ["online-kundli-consultation-canada.html", "Kundli Consultation Canada", "Canada kundli and astrology consultation page."],
    ],
    localServiceLinks: [
      ["online-gemstone-consultation-usa.html", "Gemstone Consultation USA", "USA gemstone suitability and certificate quote path."],
      ["online-hawan-booking-usa.html", "Hawan Booking USA", "USA hawan, jaap and grah shanti booking page."],
      ["online-vastu-consultation-usa.html", "Vastu Consultation USA", "USA home and office vastu consultation page."],
    ],
  },
  {
    file: "online-kundli-consultation-uk.html",
    market: "UK",
    shortMarket: "UK",
    titleText: "Online Kundli Consultation UK | Marriage, Career, Dosh & Remedies",
    titleHtml: "Online Kundli Consultation UK | Marriage, Career, Dosh &amp; Remedies",
    description: "Online kundli consultation UK for marriage, career, dosh, gemstone, vastu and muhurat guidance with Booking ID and payment after quote.",
    hreflang: "en-GB",
    countryHub: ["online-pandit-uk.html", "Online Pandit UK", "Country hub for UK Hindu priest online, kundli and gemstone searches."],
    cityLinks: [
      ["online-pandit-london.html", "Online Pandit London", "London, Southall, Wembley and Harrow page."],
      ["online-pandit-birmingham.html", "Online Pandit Birmingham", "Birmingham and West Midlands page."],
      ["online-pandit-leicester.html", "Online Pandit Leicester", "Leicester and Belgrave page."],
    ],
    siblingLinks: [
      ["online-kundli-consultation-dubai.html", "Kundli Consultation Dubai", "Dubai and UAE kundli consultation page."],
      ["online-kundli-consultation-usa.html", "Kundli Consultation USA", "USA kundli and astrology consultation page."],
      ["online-kundli-consultation-canada.html", "Kundli Consultation Canada", "Canada kundli and astrology consultation page."],
    ],
    localServiceLinks: [
      ["online-gemstone-consultation-uk.html", "Gemstone Consultation UK", "UK gemstone suitability and certificate quote path."],
      ["online-hawan-booking-uk.html", "Hawan Booking UK", "UK hawan, jaap and grah shanti booking page."],
      ["online-vastu-consultation-uk.html", "Vastu Consultation UK", "UK home and office vastu consultation page."],
    ],
  },
  {
    file: "online-kundli-consultation-canada.html",
    market: "Canada",
    shortMarket: "Canada",
    titleText: "Online Kundli Consultation Canada | Marriage, Career, Dosh & Remedies",
    titleHtml: "Online Kundli Consultation Canada | Marriage, Career, Dosh &amp; Remedies",
    description: "Online kundli consultation Canada for marriage, career, dosh, gemstone, vastu and muhurat guidance with Booking ID and payment after quote.",
    hreflang: "en-CA",
    countryHub: ["online-pandit-canada.html", "Online Pandit Canada", "Country hub for Canada NRI pooja, kundli and gemstone searches."],
    cityLinks: [
      ["online-pandit-toronto.html", "Online Pandit Toronto", "Toronto and GTA city page."],
      ["online-pandit-vancouver.html", "Online Pandit Vancouver", "Vancouver and British Columbia city page."],
      ["online-pandit-brampton.html", "Online Pandit Brampton", "Brampton and Peel Region page."],
    ],
    siblingLinks: [
      ["online-kundli-consultation-dubai.html", "Kundli Consultation Dubai", "Dubai and UAE kundli consultation page."],
      ["online-kundli-consultation-usa.html", "Kundli Consultation USA", "USA kundli and astrology consultation page."],
      ["online-kundli-consultation-uk.html", "Kundli Consultation UK", "UK kundli and astrology consultation page."],
    ],
    localServiceLinks: [
      ["online-gemstone-consultation-canada.html", "Gemstone Consultation Canada", "Canada gemstone suitability and certificate quote path."],
      ["online-hawan-booking-canada.html", "Hawan Booking Canada", "Canada hawan, jaap and grah shanti booking page."],
      ["vastu-muhurat.html", "Vastu and Muhurat Canada", "Use the main vastu and muhurat hub for Canada home, office and timing enquiries."],
    ],
  },
];

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function attr(value) {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

function dedupeLinks(links) {
  const seen = new Set();
  return links.filter(([href]) => {
    if (seen.has(href)) return false;
    seen.add(href);
    return true;
  });
}

function linkCards(links) {
  return links.map(([href, label, copy]) => {
    return `          <a href="${href}"><strong>${label}</strong><span>${copy}</span></a>`;
  }).join("\n");
}

function allPageLinks(target) {
  return dedupeLinks([
    target.countryHub,
    ...target.cityLinks,
    ...target.localServiceLinks,
    ...coreServiceLinks,
    ...target.siblingLinks,
    ...trustLinks,
  ]);
}

function sectionFor(target) {
  const pageSlug = target.file.replace(".html", "");
  return `${startMarker}
      <section class="section regional-links-section" aria-labelledby="${pageSlug}-kundli-authority-title">
        <div class="section-heading">
          <p class="eyebrow">Kundli consultation authority hub</p>
          <h2 id="${pageSlug}-kundli-authority-title">${target.shortMarket} kundli paths for marriage, career, dosh and remedies</h2>
          <p>${target.market} clients can move from kundli consultation to country hubs, city pages, marriage guidance, business guidance, gemstone suitability, vastu, muhurat, pooja and hawan pages before quote or payment.</p>
        </div>
        <div class="regional-link-grid" aria-label="${target.market} kundli service and city authority links">
${linkCards(dedupeLinks([target.countryHub, ...target.cityLinks, ...target.localServiceLinks, ...coreServiceLinks, ...target.siblingLinks]))}
        </div>
      </section>

      <section class="section regional-process-section" aria-labelledby="${pageSlug}-kundli-payment-flow-title">
        <div class="section-heading">
          <p class="eyebrow">Consultation and payment flow</p>
          <h2 id="${pageSlug}-kundli-payment-flow-title">Booking ID first for ${target.shortMarket} kundli consultation</h2>
        </div>
        <ol class="regional-process-list">
          <li>Share name, birth date, birth time, birth place, current city/country and the exact concern.</li>
          <li>Confirm whether the request is for marriage, career, business, dosh, gemstone, vastu, muhurat or pooja remedies.</li>
          <li>Staff confirms the consultation path, timing, quote and follow-up options before payment.</li>
          <li>Create or confirm a Booking ID so the kundli request remains trackable.</li>
          <li>Choose COD or online payment only after the quote and service details are clear.</li>
        </ol>
      </section>

      <section class="section international-trust-link-section" aria-labelledby="${pageSlug}-kundli-trust-title">
        <div class="section-heading compact">
          <p class="eyebrow">Trust, proof and international routing</p>
          <h2 id="${pageSlug}-kundli-trust-title">${target.shortMarket} kundli consultation trust links</h2>
          <p>This kundli authority block connects ${target.market} astrology searches to company proof, offices, chairman profile, booking ID, tracking and related international kundli pages.</p>
        </div>
        <div class="international-trust-link-grid" aria-label="${target.market} kundli trust, proof and booking links">
${linkCards(dedupeLinks([...trustLinks, target.countryHub, ...target.siblingLinks]))}
        </div>
      </section>
      ${endMarker}`;
}

function replaceMeta(html, pattern, replacement, file) {
  if (!pattern.test(html)) {
    throw new Error(`Could not find metadata pattern in ${file}: ${pattern}`);
  }
  return html.replace(pattern, replacement);
}

function updateJsonLd(html, target) {
  const scriptPattern = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/;
  const match = html.match(scriptPattern);
  if (!match) {
    throw new Error(`Could not find JSON-LD in ${target.file}`);
  }

  const pageUrl = `${baseUrl}/${target.file}`;
  const data = JSON.parse(match[1]);
  const graph = Array.isArray(data["@graph"]) ? data["@graph"] : [];
  const pageLinks = allPageLinks(target);

  for (const item of graph) {
    if (item["@id"] === `${pageUrl}#webpage`) {
      item.name = target.titleText;
      item.description = target.description;
      item.inLanguage = target.hreflang;
      item.dateModified = today;
    }
    if (item["@id"] === `${pageUrl}#service`) {
      item.name = target.titleText;
      item.description = target.description;
      item.dateModified = today;
      item.serviceType = [
        `online kundli consultation ${target.shortMarket}`,
        `marriage kundli guidance ${target.shortMarket}`,
        `career astrology consultation ${target.shortMarket}`,
        `dosh remedy consultation ${target.shortMarket}`,
        `business astrology ${target.shortMarket}`,
        `gemstone by kundli ${target.shortMarket}`,
      ];
      item.hasOfferCatalog = {
        "@type": "OfferCatalog",
        name: `${target.shortMarket} kundli consultation related service paths`,
        itemListElement: dedupeLinks([target.countryHub, ...target.localServiceLinks, ...coreServiceLinks]).map(([href, label], index) => ({
          "@type": "Offer",
          position: index + 1,
          itemOffered: {
            "@type": "Service",
            name: label,
            url: `${baseUrl}/${href}`,
          },
        })),
      };
    }
    if (item["@id"] === `${pageUrl}#faq`) {
      const mainEntity = item.mainEntity || [];
      if (!mainEntity.some((faq) => faq.name === "What details are needed for online kundli consultation?")) {
        mainEntity.push({
          "@type": "Question",
          name: "What details are needed for online kundli consultation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Keep name, birth date, birth time, birth place, current city and the main concern ready. Share whether the issue is marriage, career, business, dosh, gemstone, vastu, muhurat or pooja related.",
          },
        });
      }
      if (!mainEntity.some((faq) => faq.name === "Should payment be made before the kundli quote is confirmed?")) {
        mainEntity.push({
          "@type": "Question",
          name: "Should payment be made before the kundli quote is confirmed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Clients should create or confirm a Booking ID first, review consultation scope, timing and quote, then choose COD or online payment only after staff confirmation.",
          },
        });
      }
      item.mainEntity = mainEntity;
    }
  }

  const itemList = {
    "@type": "ItemList",
    "@id": `${pageUrl}#kundli-authority-links`,
    name: `${target.shortMarket} online kundli consultation authority links`,
    itemListElement: pageLinks.map(([href, label], index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: label,
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
  const blockPattern = new RegExp(`${escapeRegExp(startMarker)}[\\s\\S]*?${escapeRegExp(endMarker)}`);
  const block = sectionFor(target);

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${target.titleHtml}</title>`);
  html = replaceMeta(html, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${attr(target.description)}" />`, target.file);
  html = replaceMeta(html, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${attr(target.titleText)}" />`, target.file);
  html = replaceMeta(html, /<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${attr(target.description)}" />`, target.file);
  html = replaceMeta(html, /<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${attr(target.titleText)}" />`, target.file);
  html = replaceMeta(html, /<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${attr(target.description)}" />`, target.file);

  if (blockPattern.test(html)) {
    html = html.replace(blockPattern, block);
  } else if (html.includes("      <!-- International Trust Link Upgrade 2026-07-14 Start -->")) {
    html = html.replace("      <!-- International Trust Link Upgrade 2026-07-14 Start -->", `      ${block}\n      <!-- International Trust Link Upgrade 2026-07-14 Start -->`);
  } else if (html.includes("    </main>")) {
    html = html.replace("    </main>", `      ${block}\n    </main>`);
  } else {
    throw new Error(`Could not find insertion point in ${target.file}`);
  }

  if (!html.includes("<summary>What details are needed for online kundli consultation?</summary>")) {
    const faqPattern = /(<div class="faq-list">[\s\S]*?)(\s*<\/div>\s*<\/section>)/;
    if (!faqPattern.test(html)) {
      throw new Error(`Could not find FAQ list in ${target.file}`);
    }
    html = html.replace(
      faqPattern,
      '$1\n          <details><summary>What details are needed for online kundli consultation?</summary><p>Keep name, birth date, birth time, birth place, current city and the main concern ready. Share whether the issue is marriage, career, business, dosh, gemstone, vastu, muhurat or pooja related.</p></details>\n          <details><summary>Should payment be made before the kundli quote is confirmed?</summary><p>No. Create or confirm a Booking ID first, review consultation scope, timing and quote, then choose COD or online payment only after staff confirmation.</p></details>$2'
    );
  }

  html = updateJsonLd(html, target);
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
  const csvPath = path.join(seoDaily, "2026-07-19-international-kundli-consultation-seo-upgrade.csv");
  const csvLines = [
    "url,market,links_added,lastmod",
    ...targets.map((target) => {
      const links = allPageLinks(target).map(([href]) => href).join("|");
      return [`${baseUrl}/${target.file}`, target.market, links, today].map((value) => `"${String(value).replace(/"/g, '""')}"`).join(",");
    }),
  ];
  fs.writeFileSync(csvPath, `${csvLines.join("\n")}\n`, "utf8");

  const mdPath = path.join(seoDaily, "2026-07-19-international-kundli-consultation-seo-upgrade.md");
  const md = [
    "# International Kundli Consultation SEO Upgrade - 2026-07-19",
    "",
    "Upgraded Dubai, USA, UK and Canada online kundli consultation pages as high-intent international astrology entry points.",
    "",
    "## Added",
    "",
    "- Kundli authority blocks linking to country hubs, city pages and exact service paths.",
    "- Links to marriage guidance, business guidance, gemstone suitability, hast rekha, vastu, muhurat, pooja and hawan pages.",
    "- Trust links to Proof Center, Company Profile, Global Offices, Chairman Profile, Book Online and Track Booking.",
    "- Booking/payment flow: Booking ID first, COD or online payment only after staff quote.",
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
  const completedMarker = "## International Kundli Consultation SEO Upgrade - 2026-07-19";
  let completed = fs.existsSync(completedPath) ? fs.readFileSync(completedPath, "utf8") : "";
  if (!completed.includes(completedMarker)) {
    completed = `${completed.trimEnd()}\n\n${completedMarker}\n- Upgraded Dubai, USA, UK and Canada online kundli consultation pages as high-intent international astrology entry points.\n- Added country, city, marriage, business, gemstone, hast rekha, vastu, pooja, hawan, proof, company, office, chairman, booking and tracking internal links.\n- Refreshed metadata, Service schema, FAQ schema, ItemList schema and sitemap lastmod to ${today}.\n- Added SEO reports under outputs/seo-daily/.\n`;
    fs.writeFileSync(completedPath, completed, "utf8");
  }
}

for (const target of targets) {
  updateHtml(target);
}
updateSitemap();
writeReports();

console.log(`International kundli consultation SEO upgraded for ${targets.length} pages.`);
