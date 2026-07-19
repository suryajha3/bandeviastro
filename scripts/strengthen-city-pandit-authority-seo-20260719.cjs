const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const outputs = path.resolve(root, "..", "..", "outputs");
const seoDaily = path.join(outputs, "seo-daily");
const today = "2026-07-19";
const baseUrl = "https://bandeviastro.com";
const startMarker = "<!-- City Pandit Authority SEO Upgrade 2026-07-19 Start -->";
const endMarker = "<!-- City Pandit Authority SEO Upgrade 2026-07-19 End -->";

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

const cityGroups = {
  uae: {
    countryHub: ["online-pandit-dubai-uae.html", "Dubai UAE Country Hub", "Country authority page for UAE pooja, kundli, hawan and gemstone searches."],
    countryLabel: "Dubai UAE",
    hreflang: "en-AE",
    cityLinks: [
      ["online-pandit-dubai.html", "Online Pandit Dubai", "Dubai city page for NRI pooja, kundli and gemstone searches."],
      ["online-pandit-abu-dhabi.html", "Online Pandit Abu Dhabi", "Abu Dhabi page for online pooja and kundli searches."],
      ["online-pandit-sharjah.html", "Online Pandit Sharjah", "Sharjah page for NRI pooja and online pandit searches."],
    ],
    serviceLinks: [
      ["online-kundli-consultation-dubai.html", "Kundli Consultation Dubai", "Dubai kundli and astrology consultation page."],
      ["online-gemstone-consultation-dubai.html", "Gemstone Consultation Dubai", "Dubai gemstone suitability, quote and certificate path."],
      ["online-vastu-consultation-dubai.html", "Vastu Consultation Dubai", "Dubai home and office vastu consultation page."],
      ["hawan.html", "Hawan Booking Dubai", "Use the main hawan hub for Dubai hawan, jaap and grah shanti enquiries."],
    ],
  },
  usa: {
    countryHub: ["online-pandit-usa.html", "USA Country Hub", "Country authority page for USA pooja, kundli, hawan and gemstone searches."],
    countryLabel: "USA",
    hreflang: "en-US",
    cityLinks: [
      ["online-pandit-new-york.html", "Online Pandit New York", "New York and New Jersey search page."],
      ["online-pandit-los-angeles.html", "Online Pandit Los Angeles", "Los Angeles and Southern California page."],
      ["online-pandit-chicago.html", "Online Pandit Chicago", "Chicago and Illinois NRI pooja search page."],
    ],
    serviceLinks: [
      ["online-kundli-consultation-usa.html", "Kundli Consultation USA", "USA kundli and astrology consultation page."],
      ["online-gemstone-consultation-usa.html", "Gemstone Consultation USA", "USA gemstone suitability, quote and certificate path."],
      ["online-hawan-booking-usa.html", "Hawan Booking USA", "USA hawan, jaap and grah shanti booking page."],
      ["online-vastu-consultation-usa.html", "Vastu Consultation USA", "USA home and office vastu consultation page."],
    ],
  },
  uk: {
    countryHub: ["online-pandit-uk.html", "UK Country Hub", "Country authority page for UK Hindu priest online, kundli and gemstone searches."],
    countryLabel: "UK",
    hreflang: "en-GB",
    cityLinks: [
      ["online-pandit-london.html", "Online Pandit London", "London, Southall, Wembley and Harrow page."],
      ["online-pandit-birmingham.html", "Online Pandit Birmingham", "Birmingham and West Midlands page."],
      ["online-pandit-leicester.html", "Online Pandit Leicester", "Leicester and Belgrave page."],
    ],
    serviceLinks: [
      ["online-kundli-consultation-uk.html", "Kundli Consultation UK", "UK kundli and astrology consultation page."],
      ["online-gemstone-consultation-uk.html", "Gemstone Consultation UK", "UK gemstone suitability, quote and certificate path."],
      ["online-hawan-booking-uk.html", "Hawan Booking UK", "UK hawan, jaap and grah shanti booking page."],
      ["online-vastu-consultation-uk.html", "Vastu Consultation UK", "UK home and office vastu consultation page."],
    ],
  },
  canada: {
    countryHub: ["online-pandit-canada.html", "Canada Country Hub", "Country authority page for Canada NRI pooja, kundli and gemstone searches."],
    countryLabel: "Canada",
    hreflang: "en-CA",
    cityLinks: [
      ["online-pandit-toronto.html", "Online Pandit Toronto", "Toronto and GTA city page for NRI pooja and kundli searches."],
      ["online-pandit-vancouver.html", "Online Pandit Vancouver", "Vancouver and British Columbia page for online pandit searches."],
      ["online-pandit-brampton.html", "Online Pandit Brampton", "Brampton and Peel Region page for Hindu priest online searches."],
    ],
    serviceLinks: [
      ["online-kundli-consultation-canada.html", "Kundli Consultation Canada", "Canada kundli and astrology consultation page."],
      ["online-gemstone-consultation-canada.html", "Gemstone Consultation Canada", "Canada gemstone suitability, quote and certificate path."],
      ["online-hawan-booking-canada.html", "Hawan Booking Canada", "Canada hawan, jaap and grah shanti booking page."],
      ["vastu-muhurat.html", "Vastu and Muhurat Canada", "Use the main vastu and muhurat hub for Canada home, office and timing enquiries."],
    ],
  },
};

const targets = [
  {
    file: "online-pandit-dubai.html",
    city: "Dubai",
    cityArea: "Dubai, Bur Dubai, Deira, Jumeirah and Dubai Marina",
    group: "uae",
    titleText: "Online Pandit Dubai | NRI Pooja, Kundli, Hawan & Gemstone",
    titleHtml: "Online Pandit Dubai | NRI Pooja, Kundli, Hawan &amp; Gemstone",
    description: "Online pandit Dubai for NRI pooja, kundli, hawan, vastu muhurat and gemstone guidance with UAE time coordination, Booking ID and payment after quote.",
  },
  {
    file: "online-pandit-abu-dhabi.html",
    city: "Abu Dhabi",
    cityArea: "Abu Dhabi, Mussafah, Khalifa City, Al Reem and nearby UAE areas",
    group: "uae",
    titleText: "Online Pandit Abu Dhabi | NRI Pooja, Kundli, Hawan & Gemstone",
    titleHtml: "Online Pandit Abu Dhabi | NRI Pooja, Kundli, Hawan &amp; Gemstone",
    description: "Online pandit Abu Dhabi for NRI pooja, kundli, hawan, vastu muhurat and gemstone guidance with UAE time coordination, Booking ID and payment after quote.",
  },
  {
    file: "online-pandit-sharjah.html",
    city: "Sharjah",
    cityArea: "Sharjah, Al Nahda, Rolla, Al Majaz and nearby UAE areas",
    group: "uae",
    titleText: "Online Pandit Sharjah | NRI Pooja, Kundli, Hawan & Gemstone",
    titleHtml: "Online Pandit Sharjah | NRI Pooja, Kundli, Hawan &amp; Gemstone",
    description: "Online pandit Sharjah for NRI pooja, kundli, hawan, vastu muhurat and gemstone guidance with UAE time coordination, Booking ID and payment after quote.",
  },
  {
    file: "online-pandit-new-york.html",
    city: "New York",
    cityArea: "New York, New Jersey, Queens, Manhattan, Brooklyn and Edison",
    group: "usa",
    titleText: "Online Pandit New York | NRI Pooja, Kundli, Hawan & Gemstone",
    titleHtml: "Online Pandit New York | NRI Pooja, Kundli, Hawan &amp; Gemstone",
    description: "Online pandit New York for NRI pooja, kundli, hawan, vastu muhurat and gemstone guidance with US time coordination, Booking ID and payment after quote.",
  },
  {
    file: "online-pandit-los-angeles.html",
    city: "Los Angeles",
    cityArea: "Los Angeles, Artesia, Cerritos, Irvine and Southern California",
    group: "usa",
    titleText: "Online Pandit Los Angeles | NRI Pooja, Kundli, Hawan & Gemstone",
    titleHtml: "Online Pandit Los Angeles | NRI Pooja, Kundli, Hawan &amp; Gemstone",
    description: "Online pandit Los Angeles for NRI pooja, kundli, hawan, vastu muhurat and gemstone guidance with US time coordination, Booking ID and payment after quote.",
  },
  {
    file: "online-pandit-chicago.html",
    city: "Chicago",
    cityArea: "Chicago, Naperville, Schaumburg, Aurora and Illinois Indian families",
    group: "usa",
    titleText: "Online Pandit Chicago | NRI Pooja, Kundli, Hawan & Gemstone",
    titleHtml: "Online Pandit Chicago | NRI Pooja, Kundli, Hawan &amp; Gemstone",
    description: "Online pandit Chicago for NRI pooja, kundli, hawan, vastu muhurat and gemstone guidance with US time coordination, Booking ID and payment after quote.",
  },
  {
    file: "online-pandit-london.html",
    city: "London",
    cityArea: "London, Southall, Wembley, Harrow, Ilford and UK Indian families",
    group: "uk",
    titleText: "Online Pandit London | Hindu Priest, Kundli, Hawan & Gemstone",
    titleHtml: "Online Pandit London | Hindu Priest, Kundli, Hawan &amp; Gemstone",
    description: "Online pandit London for Hindu priest online, NRI pooja, kundli, hawan, vastu muhurat and gemstone guidance with Booking ID and payment after quote.",
  },
  {
    file: "online-pandit-birmingham.html",
    city: "Birmingham",
    cityArea: "Birmingham, West Midlands, Wolverhampton, Coventry and Leicester",
    group: "uk",
    titleText: "Online Pandit Birmingham | Hindu Priest, Kundli, Hawan & Gemstone",
    titleHtml: "Online Pandit Birmingham | Hindu Priest, Kundli, Hawan &amp; Gemstone",
    description: "Online pandit Birmingham for Hindu priest online, NRI pooja, kundli, hawan, vastu muhurat and gemstone guidance with Booking ID and payment after quote.",
  },
  {
    file: "online-pandit-leicester.html",
    city: "Leicester",
    cityArea: "Leicester, Belgrave, Loughborough, Coventry and nearby UK cities",
    group: "uk",
    titleText: "Online Pandit Leicester | Hindu Priest, Kundli, Hawan & Gemstone",
    titleHtml: "Online Pandit Leicester | Hindu Priest, Kundli, Hawan &amp; Gemstone",
    description: "Online pandit Leicester for Hindu priest online, NRI pooja, kundli, hawan, vastu muhurat and gemstone guidance with Booking ID and payment after quote.",
  },
  {
    file: "online-pandit-toronto.html",
    city: "Toronto",
    cityArea: "Toronto, Mississauga, Scarborough, North York and GTA",
    group: "canada",
    titleText: "Online Pandit Toronto | NRI Pooja, Kundli, Hawan & Gemstone",
    titleHtml: "Online Pandit Toronto | NRI Pooja, Kundli, Hawan &amp; Gemstone",
    description: "Online pandit Toronto for NRI pooja, kundli, hawan, vastu muhurat and gemstone guidance with Canada time coordination, Booking ID and payment after quote.",
  },
  {
    file: "online-pandit-vancouver.html",
    city: "Vancouver",
    cityArea: "Vancouver, Surrey, Burnaby, Richmond and British Columbia",
    group: "canada",
    titleText: "Online Pandit Vancouver | NRI Pooja, Kundli, Hawan & Gemstone",
    titleHtml: "Online Pandit Vancouver | NRI Pooja, Kundli, Hawan &amp; Gemstone",
    description: "Online pandit Vancouver for NRI pooja, kundli, hawan, vastu muhurat and gemstone guidance with Canada time coordination, Booking ID and payment after quote.",
  },
  {
    file: "online-pandit-brampton.html",
    city: "Brampton",
    cityArea: "Brampton, Mississauga, Toronto, Peel Region and GTA",
    group: "canada",
    titleText: "Online Pandit Brampton | NRI Pooja, Kundli, Hawan & Gemstone",
    titleHtml: "Online Pandit Brampton | NRI Pooja, Kundli, Hawan &amp; Gemstone",
    description: "Online pandit Brampton for NRI pooja, kundli, hawan, vastu muhurat and gemstone guidance with Canada time coordination, Booking ID and payment after quote.",
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

function cityGroup(target) {
  return cityGroups[target.group];
}

function allPageLinks(target) {
  const group = cityGroup(target);
  return dedupeLinks([
    group.countryHub,
    ...group.cityLinks,
    ...group.serviceLinks,
    ...coreServiceLinks,
    ...trustLinks,
  ]);
}

function sectionFor(target) {
  const group = cityGroup(target);
  const pageSlug = target.file.replace(".html", "");
  return `${startMarker}
      <section class="section regional-links-section" aria-labelledby="${pageSlug}-city-authority-title">
        <div class="section-heading">
          <p class="eyebrow">City service authority hub</p>
          <h2 id="${pageSlug}-city-authority-title">${target.city} online pandit services by intent</h2>
          <p>${target.city} clients can move from this city page to the country hub, nearby city pages, pooja, hawan, kundli, gemstone, vastu and NRI service pages before quote or payment.</p>
        </div>
        <div class="regional-link-grid" aria-label="${target.city} city and service authority links">
${linkCards(dedupeLinks([group.countryHub, ...group.cityLinks, ...group.serviceLinks, ...coreServiceLinks]))}
        </div>
      </section>

      <section class="section regional-process-section" aria-labelledby="${pageSlug}-city-payment-flow-title">
        <div class="section-heading">
          <p class="eyebrow">City booking and payment flow</p>
          <h2 id="${pageSlug}-city-payment-flow-title">Booking ID first for ${target.city}, payment after clear quote</h2>
        </div>
        <ol class="regional-process-list">
          <li>Share city, country, service need, preferred date, time zone and birth details if kundli or gemstone guidance is needed.</li>
          <li>Staff confirms the right service path, quote, proof option and timing before any payment step.</li>
          <li>Create or confirm a Booking ID so ${target.city} requests remain trackable from enquiry to completion.</li>
          <li>Choose COD or online payment only after service, proof, quote and delivery terms are clear.</li>
          <li>Use Track Booking for staff notes, payment stage, live option, proof update or delivery status.</li>
        </ol>
      </section>

      <section class="section international-trust-link-section" aria-labelledby="${pageSlug}-city-trust-title">
        <div class="section-heading compact">
          <p class="eyebrow">City trust, proof and country routing</p>
          <h2 id="${pageSlug}-city-trust-title">${target.city} pandit page trust and company links</h2>
          <p>This city authority block connects ${target.cityArea} searches to company proof, offices, chairman profile, booking ID, tracking and the ${group.countryLabel} country hub.</p>
        </div>
        <div class="international-trust-link-grid" aria-label="${target.city} trust, proof and country routing links">
${linkCards(dedupeLinks([...trustLinks, group.countryHub]))}
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

  const group = cityGroup(target);
  const pageUrl = `${baseUrl}/${target.file}`;
  const data = JSON.parse(match[1]);
  const graph = Array.isArray(data["@graph"]) ? data["@graph"] : [];
  const pageLinks = allPageLinks(target);

  for (const item of graph) {
    if (item["@id"] === `${pageUrl}#webpage`) {
      item.name = target.titleText;
      item.description = target.description;
      item.inLanguage = group.hreflang;
      item.dateModified = today;
    }
    if (item["@id"] === `${pageUrl}#service`) {
      item.name = target.titleText;
      item.description = target.description;
      item.dateModified = today;
      item.serviceType = [
        `online pandit ${target.city}`,
        `NRI pooja ${target.city}`,
        `kundli consultation ${target.city}`,
        `hawan booking ${target.city}`,
        `gemstone guidance ${target.city}`,
        `vastu muhurat ${target.city}`,
      ];
      item.hasOfferCatalog = {
        "@type": "OfferCatalog",
        name: `${target.city} pooja kundli hawan gemstone service paths`,
        itemListElement: dedupeLinks([group.countryHub, ...group.serviceLinks, ...coreServiceLinks]).map(([href, label], index) => ({
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
      if (!mainEntity.some((faq) => faq.name === "Should payment be made before the final city quote is confirmed?")) {
        mainEntity.push({
          "@type": "Question",
          name: "Should payment be made before the final city quote is confirmed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. City clients should create or confirm a Booking ID first, review the service, timing, proof option and quote, then choose COD or online payment only after staff confirmation.",
          },
        });
      }
      item.mainEntity = mainEntity;
    }
  }

  const itemList = {
    "@type": "ItemList",
    "@id": `${pageUrl}#city-authority-links`,
    name: `${target.city} online pandit authority links`,
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
  } else if (html.includes("      <!-- City Trust Link Upgrade 2026-07-16 Start -->")) {
    html = html.replace("      <!-- City Trust Link Upgrade 2026-07-16 Start -->", `      ${block}\n      <!-- City Trust Link Upgrade 2026-07-16 Start -->`);
  } else if (html.includes("      <!-- Expansion Trust Link Upgrade 2026-07-18 Start -->")) {
    html = html.replace("      <!-- Expansion Trust Link Upgrade 2026-07-18 Start -->", `      ${block}\n      <!-- Expansion Trust Link Upgrade 2026-07-18 Start -->`);
  } else if (html.includes("    </main>")) {
    html = html.replace("    </main>", `      ${block}\n    </main>`);
  } else {
    throw new Error(`Could not find insertion point in ${target.file}`);
  }

  if (!html.includes("<summary>Should payment be made before the final city quote is confirmed?</summary>")) {
    const faqPattern = /(<div class="faq-list">[\s\S]*?)(\s*<\/div>\s*<\/section>)/;
    if (!faqPattern.test(html)) {
      throw new Error(`Could not find FAQ list in ${target.file}`);
    }
    html = html.replace(
      faqPattern,
      '$1\n          <details><summary>Should payment be made before the final city quote is confirmed?</summary><p>No. Create or confirm a Booking ID first, review service, timing, proof option and quote, then choose COD or online payment only after staff confirmation.</p></details>$2'
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
  const csvPath = path.join(seoDaily, "2026-07-19-city-pandit-authority-seo-upgrade.csv");
  const csvLines = [
    "url,city,country,links_added,lastmod",
    ...targets.map((target) => {
      const group = cityGroup(target);
      const links = allPageLinks(target).map(([href]) => href).join("|");
      return [`${baseUrl}/${target.file}`, target.city, group.countryLabel, links, today].map((value) => `"${String(value).replace(/"/g, '""')}"`).join(",");
    }),
  ];
  fs.writeFileSync(csvPath, `${csvLines.join("\n")}\n`, "utf8");

  const mdPath = path.join(seoDaily, "2026-07-19-city-pandit-authority-seo-upgrade.md");
  const md = [
    "# City Pandit Authority SEO Upgrade - 2026-07-19",
    "",
    "Upgraded 12 high-priority city pandit pages across UAE, USA, UK and Canada.",
    "",
    "## Added",
    "",
    "- City authority blocks linking each page to its country hub, sibling city pages and exact service pages.",
    "- Service links for pooja, hawan, kundli, gemstone, gemstone-by-kundli, hast rekha, vastu, muhurat and NRI pooja.",
    "- Trust links to Proof Center, Company Profile, Global Offices, Chairman Profile, Book Online and Track Booking.",
    "- Booking/payment flow: Booking ID first, COD or online payment only after staff quote.",
    "- Refreshed title, meta description, Open Graph, Twitter metadata, Service schema, FAQ schema and ItemList schema.",
    `- Refreshed sitemap lastmod to ${today}.`,
    "",
    "## Priority URLs",
    "",
    ...targets.map((target) => `- ${baseUrl}/${target.file} - ${target.city}`),
    "",
  ].join("\n");
  fs.writeFileSync(mdPath, md, "utf8");

  const completedPath = path.join(outputs, "SEO_COMPLETED_20260705.md");
  const completedMarker = "## City Pandit Authority SEO Upgrade - 2026-07-19";
  let completed = fs.existsSync(completedPath) ? fs.readFileSync(completedPath, "utf8") : "";
  if (!completed.includes(completedMarker)) {
    completed = `${completed.trimEnd()}\n\n${completedMarker}\n- Upgraded 12 high-priority city pandit pages across UAE, USA, UK and Canada.\n- Added city, country, service, trust, proof, company, office, chairman, booking and tracking internal links.\n- Refreshed metadata, Service schema, FAQ schema, ItemList schema and sitemap lastmod to ${today}.\n- Added SEO reports under outputs/seo-daily/.\n`;
    fs.writeFileSync(completedPath, completed, "utf8");
  }
}

for (const target of targets) {
  updateHtml(target);
}
updateSitemap();
writeReports();

console.log(`City pandit authority SEO upgraded for ${targets.length} pages.`);
