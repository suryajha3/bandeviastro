const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const outputs = path.resolve(root, "..", "..", "outputs");
const seoDaily = path.join(outputs, "seo-daily");
const today = "2026-07-19";
const baseUrl = "https://bandeviastro.com";
const startMarker = "<!-- Country Pandit Hub Authority SEO Upgrade 2026-07-19 Start -->";
const endMarker = "<!-- Country Pandit Hub Authority SEO Upgrade 2026-07-19 End -->";

const coreServiceLinks = [
  ["online-pooja.html", "Online Pooja", "Remote pooja, sankalp, live option and proof discussion before confirmation."],
  ["hawan.html", "Hawan Services", "Grah shanti, navgrah, family, business and vastu hawan planning."],
  ["kundli.html", "Kundli Consultation", "Birth chart, dosh, marriage, career, business and remedy guidance."],
  ["gemstone-shop.html", "Gemstone Shop", "Certified gemstone quote path for rings, pendants and loose stones."],
  ["which-gemstone-is-suitable-by-kundli.html", "Gemstone By Kundli", "Suitability review before choosing gemstone, metal, certificate and form."],
  ["hast-rekha.html", "Hast Rekha", "Palm reading and spiritual consultation route for family concerns."],
  ["vastu-muhurat.html", "Vastu and Muhurat", "Home, office, griha pravesh, business and auspicious timing guidance."],
  ["nri-pooja.html", "NRI Pooja Hub", "Dedicated NRI family support for pooja, hawan and online rituals."],
  ["online-pooja-service-areas.html", "Service Areas Hub", "Global country, city and service-intent SEO hub."],
];

const trustLinks = [
  ["proof-center.html", "Proof Center", "Company-stated net worth, staff count, offices, policies and booking proof."],
  ["company-profile.html", "Company Profile", "1,289 staff worldwide and INR 7,594 crore company-stated net worth details."],
  ["global-offices.html", "Global Offices", "India, Dubai, London and United States office and service-network context."],
  ["surya-kant-jha-chairman-networth-travel-agent.html", "Chairman Profile", "Surya Kant Jha, Suryakant Jha and travel agent leadership search context."],
  ["book-online.html", "Create Booking ID", "Create a trackable request before final quote, COD or online payment choice."],
  ["track-booking.html", "Track Booking", "Track quote, staff update, payment stage and completion details."],
];

const targets = [
  {
    file: "online-pandit-dubai-uae.html",
    market: "Dubai UAE",
    marketLong: "Dubai, Abu Dhabi, Sharjah, Ajman, Al Ain and UAE",
    countryLabel: "Dubai and UAE",
    titleText: "Online Pandit Dubai UAE | Pooja, Kundli, Hawan & Gemstone",
    titleHtml: "Online Pandit Dubai UAE | Pooja, Kundli, Hawan &amp; Gemstone",
    description: "Online pandit Dubai UAE for NRI pooja, kundli, hawan, vastu muhurat and gemstone guidance with Booking ID, proof links and payment after quote.",
    hreflang: "en-AE",
    cityLinks: [
      ["online-pandit-dubai.html", "Online Pandit Dubai", "Dubai city page for NRI pooja, kundli and gemstone searches."],
      ["online-pandit-abu-dhabi.html", "Online Pandit Abu Dhabi", "Abu Dhabi page for online pooja and kundli searches."],
      ["online-pandit-sharjah.html", "Online Pandit Sharjah", "Sharjah page for NRI pooja and online pandit searches."],
      ["online-pandit-ajman.html", "Online Pandit Ajman", "Ajman city page for UAE Indian families."],
      ["online-pandit-al-ain.html", "Online Pandit Al Ain", "Al Ain page for online pandit and pooja searches."],
    ],
    countryServiceLinks: [
      ["online-kundli-consultation-dubai.html", "Kundli Consultation Dubai", "Dubai kundli and astrology consultation page."],
      ["online-gemstone-consultation-dubai.html", "Gemstone Consultation Dubai", "Dubai gemstone suitability, quote and certificate path."],
      ["online-vastu-consultation-dubai.html", "Vastu Consultation Dubai", "Dubai home and office vastu consultation page."],
      ["hawan.html", "Hawan Booking Dubai", "Use the main hawan hub for Dubai hawan, jaap and grah shanti enquiries."],
    ],
    crossCountryLinks: [
      ["online-pandit-usa.html", "Online Pandit USA", "USA country hub for pooja, kundli, gemstone and hawan searches."],
      ["online-pandit-uk.html", "Online Pandit UK", "UK country hub for Hindu priest online and astrology searches."],
      ["online-pandit-canada.html", "Online Pandit Canada", "Canada country hub for NRI pooja, kundli and gemstone searches."],
    ],
  },
  {
    file: "online-pandit-usa.html",
    market: "USA",
    marketLong: "New York, New Jersey, Chicago, Dallas, Houston, California and USA",
    countryLabel: "United States",
    titleText: "Online Pandit USA | Pooja, Kundli, Hawan & Gemstone",
    titleHtml: "Online Pandit USA | Pooja, Kundli, Hawan &amp; Gemstone",
    description: "Online pandit USA for NRI pooja, kundli, hawan, vastu muhurat and gemstone guidance with Booking ID, proof links and payment after quote.",
    hreflang: "en-US",
    cityLinks: [
      ["online-pandit-new-york.html", "Online Pandit New York", "New York and New Jersey search page."],
      ["online-pandit-los-angeles.html", "Online Pandit Los Angeles", "Los Angeles and Southern California page."],
      ["online-pandit-chicago.html", "Online Pandit Chicago", "Chicago and Illinois NRI pooja search page."],
      ["online-pandit-dallas.html", "Online Pandit Dallas", "Dallas, Irving, Plano and Frisco page."],
      ["online-pandit-houston.html", "Online Pandit Houston", "Houston and Sugar Land online pandit page."],
      ["online-pandit-san-francisco.html", "Online Pandit San Francisco", "Bay Area, Fremont, Sunnyvale and San Jose page."],
      ["online-pandit-edison.html", "Online Pandit Edison", "Edison and New Jersey Hindu priest online page."],
      ["online-pandit-jersey-city.html", "Online Pandit Jersey City", "Jersey City, Newark and Hoboken page."],
    ],
    countryServiceLinks: [
      ["online-kundli-consultation-usa.html", "Kundli Consultation USA", "USA kundli and astrology consultation page."],
      ["online-gemstone-consultation-usa.html", "Gemstone Consultation USA", "USA gemstone suitability, quote and certificate path."],
      ["online-hawan-booking-usa.html", "Hawan Booking USA", "USA hawan, jaap and grah shanti booking page."],
      ["online-vastu-consultation-usa.html", "Vastu Consultation USA", "USA home and office vastu consultation page."],
    ],
    crossCountryLinks: [
      ["online-pandit-dubai-uae.html", "Online Pandit Dubai UAE", "Dubai and UAE country hub for Indian families abroad."],
      ["online-pandit-uk.html", "Online Pandit UK", "UK country hub for Hindu priest online and astrology searches."],
      ["online-pandit-canada.html", "Online Pandit Canada", "Canada country hub for NRI pooja, kundli and gemstone searches."],
    ],
  },
  {
    file: "online-pandit-uk.html",
    market: "UK",
    marketLong: "London, Birmingham, Leicester, Manchester, Coventry, Slough and UK",
    countryLabel: "United Kingdom",
    titleText: "Online Pandit UK | Hindu Priest, Kundli, Hawan & Gemstone",
    titleHtml: "Online Pandit UK | Hindu Priest, Kundli, Hawan &amp; Gemstone",
    description: "Online pandit UK for Hindu priest online, NRI pooja, kundli, hawan, vastu muhurat and gemstone guidance with Booking ID and payment after quote.",
    hreflang: "en-GB",
    cityLinks: [
      ["online-pandit-london.html", "Online Pandit London", "London, Southall, Wembley and Harrow page."],
      ["online-pandit-birmingham.html", "Online Pandit Birmingham", "Birmingham and West Midlands page."],
      ["online-pandit-leicester.html", "Online Pandit Leicester", "Leicester and Belgrave page."],
      ["online-pandit-manchester.html", "Online Pandit Manchester", "Manchester, Bolton and Greater Manchester page."],
      ["online-pandit-coventry.html", "Online Pandit Coventry", "Coventry and Warwickshire page."],
      ["online-pandit-wolverhampton.html", "Online Pandit Wolverhampton", "Wolverhampton and Black Country page."],
      ["online-pandit-slough.html", "Online Pandit Slough", "Slough, Southall and West London page."],
    ],
    countryServiceLinks: [
      ["online-kundli-consultation-uk.html", "Kundli Consultation UK", "UK kundli and astrology consultation page."],
      ["online-gemstone-consultation-uk.html", "Gemstone Consultation UK", "UK gemstone suitability, quote and certificate path."],
      ["online-hawan-booking-uk.html", "Hawan Booking UK", "UK hawan, jaap and grah shanti booking page."],
      ["online-vastu-consultation-uk.html", "Vastu Consultation UK", "UK home and office vastu consultation page."],
    ],
    crossCountryLinks: [
      ["online-pandit-dubai-uae.html", "Online Pandit Dubai UAE", "Dubai and UAE country hub for Indian families abroad."],
      ["online-pandit-usa.html", "Online Pandit USA", "USA country hub for pooja, kundli, gemstone and hawan searches."],
      ["online-pandit-canada.html", "Online Pandit Canada", "Canada country hub for NRI pooja, kundli and gemstone searches."],
    ],
  },
  {
    file: "online-pandit-canada.html",
    market: "Canada",
    marketLong: "Toronto, Brampton, Vancouver, Calgary, Montreal and Canada",
    countryLabel: "Canada",
    titleText: "Online Pandit Canada | NRI Pooja, Kundli, Hawan & Gemstone",
    titleHtml: "Online Pandit Canada | NRI Pooja, Kundli, Hawan &amp; Gemstone",
    description: "Online pandit Canada for NRI pooja, kundli, hawan, vastu muhurat and gemstone guidance with Booking ID, proof links and payment after quote.",
    hreflang: "en-CA",
    cityLinks: [
      ["online-pandit-toronto.html", "Online Pandit Toronto", "Toronto and GTA city page for NRI pooja and kundli searches."],
      ["online-pandit-vancouver.html", "Online Pandit Vancouver", "Vancouver and British Columbia page for online pandit searches."],
      ["online-pandit-brampton.html", "Online Pandit Brampton", "Brampton and Peel Region page for Hindu priest online searches."],
    ],
    countryServiceLinks: [
      ["online-kundli-consultation-canada.html", "Kundli Consultation Canada", "Canada kundli and astrology consultation page."],
      ["online-gemstone-consultation-canada.html", "Gemstone Consultation Canada", "Canada gemstone suitability, quote and certificate path."],
      ["online-hawan-booking-canada.html", "Hawan Booking Canada", "Canada hawan, jaap and grah shanti booking page."],
      ["vastu-muhurat.html", "Vastu and Muhurat Canada", "Use the main vastu and muhurat hub for Canada home, office and timing enquiries."],
    ],
    crossCountryLinks: [
      ["online-pandit-dubai-uae.html", "Online Pandit Dubai UAE", "Dubai and UAE country hub for Indian families abroad."],
      ["online-pandit-usa.html", "Online Pandit USA", "USA country hub for pooja, kundli, gemstone and hawan searches."],
      ["online-pandit-uk.html", "Online Pandit UK", "UK country hub for Hindu priest online and astrology searches."],
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
    ...target.cityLinks,
    ...target.countryServiceLinks,
    ...coreServiceLinks,
    ...target.crossCountryLinks,
    ...trustLinks,
  ]);
}

function sectionFor(target) {
  const pageSlug = target.file.replace(".html", "");
  return `${startMarker}
      <section class="section regional-links-section" aria-labelledby="${pageSlug}-authority-services-title">
        <div class="section-heading">
          <p class="eyebrow">Country service authority hub</p>
          <h2 id="${pageSlug}-authority-services-title">${target.countryLabel} online pandit services by intent</h2>
          <p>${target.countryLabel} clients can move from this country hub to exact pooja, hawan, kundli, gemstone, vastu, muhurat and NRI service pages before quote or payment.</p>
        </div>
        <div class="regional-link-grid" aria-label="${target.countryLabel} city and service authority links">
${linkCards(dedupeLinks([...target.cityLinks, ...target.countryServiceLinks, ...coreServiceLinks]))}
        </div>
      </section>

      <section class="section regional-process-section" aria-labelledby="${pageSlug}-quote-payment-flow-title">
        <div class="section-heading">
          <p class="eyebrow">Quote and payment flow</p>
          <h2 id="${pageSlug}-quote-payment-flow-title">Booking ID first, payment after clear quote for ${target.countryLabel}</h2>
        </div>
        <ol class="regional-process-list">
          <li>Share country, city, service need, preferred date, time zone and birth details if kundli or gemstone guidance is needed.</li>
          <li>Staff confirms the right service page, ritual or consultation path, proof option, quote and timing before payment.</li>
          <li>Create or confirm a Booking ID so the request remains trackable from enquiry to completion.</li>
          <li>Choose COD or online payment only after the final service, quote, proof and delivery details are clear.</li>
          <li>Use Track Booking for staff notes, payment stage, live option, proof update or delivery status.</li>
        </ol>
      </section>

      <section class="section international-trust-link-section" aria-labelledby="${pageSlug}-authority-trust-title">
        <div class="section-heading compact">
          <p class="eyebrow">Trust, proof and international routing</p>
          <h2 id="${pageSlug}-authority-trust-title">${target.countryLabel} pandit hub trust and company links</h2>
          <p>This country authority block connects ${target.marketLong} searches to company proof, offices, chairman profile, booking ID, tracking and related international pandit hubs.</p>
        </div>
        <div class="international-trust-link-grid" aria-label="${target.countryLabel} trust, proof and country routing links">
${linkCards(dedupeLinks([...trustLinks, ...target.crossCountryLinks]))}
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
        `online pandit ${target.countryLabel}`,
        `NRI pooja ${target.countryLabel}`,
        `kundli consultation ${target.countryLabel}`,
        `hawan booking ${target.countryLabel}`,
        `gemstone guidance ${target.countryLabel}`,
        `vastu muhurat ${target.countryLabel}`,
      ];
      item.hasOfferCatalog = {
        "@type": "OfferCatalog",
        name: `${target.countryLabel} pooja kundli hawan gemstone service paths`,
        itemListElement: dedupeLinks([...target.countryServiceLinks, ...coreServiceLinks]).map(([href, label], index) => ({
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
      if (!mainEntity.some((faq) => faq.name === "Should payment be made before the final quote is confirmed?")) {
        mainEntity.push({
          "@type": "Question",
          name: "Should payment be made before the final quote is confirmed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Clients should create or confirm a Booking ID first, review the service, timing, proof option and quote, then choose COD or online payment only after staff confirmation.",
          },
        });
      }
      item.mainEntity = mainEntity;
    }
  }

  const itemList = {
    "@type": "ItemList",
    "@id": `${pageUrl}#country-authority-links`,
    name: `${target.countryLabel} online pandit authority links`,
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
  } else if (html.includes("      <!-- Expansion Trust Link Upgrade 2026-07-18 Start -->")) {
    html = html.replace("      <!-- Expansion Trust Link Upgrade 2026-07-18 Start -->", `      ${block}\n      <!-- Expansion Trust Link Upgrade 2026-07-18 Start -->`);
  } else if (html.includes("    </main>")) {
    html = html.replace("    </main>", `      ${block}\n    </main>`);
  } else {
    throw new Error(`Could not find insertion point in ${target.file}`);
  }

  if (!html.includes("<summary>Should payment be made before the final quote is confirmed?</summary>")) {
    const faqPattern = /(<div class="faq-list">[\s\S]*?)(\s*<\/div>\s*<\/section>)/;
    if (!faqPattern.test(html)) {
      throw new Error(`Could not find FAQ list in ${target.file}`);
    }
    html = html.replace(
      faqPattern,
      '$1\n          <details><summary>Should payment be made before the final quote is confirmed?</summary><p>No. Create or confirm a Booking ID first, review service, timing, proof option and quote, then choose COD or online payment only after staff confirmation.</p></details>$2'
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
  const csvPath = path.join(seoDaily, "2026-07-19-country-pandit-hub-authority-seo-upgrade.csv");
  const csvLines = [
    "url,market,links_added,lastmod",
    ...targets.map((target) => {
      const links = allPageLinks(target).map(([href]) => href).join("|");
      return [`${baseUrl}/${target.file}`, target.countryLabel, links, today].map((value) => `"${String(value).replace(/"/g, '""')}"`).join(",");
    }),
  ];
  fs.writeFileSync(csvPath, `${csvLines.join("\n")}\n`, "utf8");

  const mdPath = path.join(seoDaily, "2026-07-19-country-pandit-hub-authority-seo-upgrade.md");
  const md = [
    "# Country Pandit Hub Authority SEO Upgrade - 2026-07-19",
    "",
    "Upgraded Dubai/UAE, USA, UK and Canada country pandit hub pages as authority pages for international service rankings.",
    "",
    "## Added",
    "",
    "- Country service authority blocks linking to pooja, hawan, kundli, gemstone, hast rekha, vastu, muhurat, NRI pooja and service-area hubs.",
    "- Country-specific links for kundli, gemstone, hawan and vastu pages where available.",
    "- Trust links to Proof Center, Company Profile, Global Offices, Chairman Profile, Book Online and Track Booking.",
    "- Booking/payment flow: Booking ID first, COD or online payment only after staff quote.",
    "- Refreshed title, meta description, Open Graph, Twitter metadata, Service schema, FAQ schema and ItemList schema.",
    `- Refreshed sitemap lastmod to ${today}.`,
    "",
    "## Priority URLs",
    "",
    ...targets.map((target) => `- ${baseUrl}/${target.file} - ${target.countryLabel}`),
    "",
  ].join("\n");
  fs.writeFileSync(mdPath, md, "utf8");

  const completedPath = path.join(outputs, "SEO_COMPLETED_20260705.md");
  const completedMarker = "## Country Pandit Hub Authority SEO Upgrade - 2026-07-19";
  let completed = fs.existsSync(completedPath) ? fs.readFileSync(completedPath, "utf8") : "";
  if (!completed.includes(completedMarker)) {
    completed = `${completed.trimEnd()}\n\n${completedMarker}\n- Upgraded Dubai/UAE, USA, UK and Canada country pandit hub pages as international authority pages.\n- Added service, city, trust, proof, company, office, chairman, booking and tracking internal links.\n- Refreshed metadata, Service schema, FAQ schema, ItemList schema and sitemap lastmod to ${today}.\n- Added SEO reports under outputs/seo-daily/.\n`;
    fs.writeFileSync(completedPath, completed, "utf8");
  }
}

for (const target of targets) {
  updateHtml(target);
}
updateSitemap();
writeReports();

console.log(`Country pandit hub authority SEO upgraded for ${targets.length} pages.`);
