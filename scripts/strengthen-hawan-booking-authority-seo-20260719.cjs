const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const outputs = path.resolve(root, "..", "..", "outputs");
const seoDaily = path.join(outputs, "seo-daily");
const today = "2026-07-19";
const baseUrl = "https://bandeviastro.com";
const startMarker = "<!-- Hawan Booking Authority SEO Upgrade 2026-07-19 Start -->";
const endMarker = "<!-- Hawan Booking Authority SEO Upgrade 2026-07-19 End -->";

const coreHawanLinks = [
  ["hawan.html", "Main Hawan Hub", "Grah shanti, Navgrah, Mahamrityunjay, vastu shanti and family hawan process."],
  ["online-hawan-booking-usa.html", "Hawan Booking USA", "NRI hawan enquiry page for USA families."],
  ["online-hawan-booking-uk.html", "Hawan Booking UK", "NRI hawan enquiry page for UK families."],
  ["online-hawan-booking-canada.html", "Hawan Booking Canada", "NRI hawan enquiry page for Canada families."],
  ["online-hawan-booking-australia.html", "Hawan Booking Australia", "NRI hawan enquiry page for Australia families."],
];

const samagriLinks = [
  ["hawan-samagri-premium-mix.html", "Premium Hawan Samagri", "Core samagri mix and preparation route after confirmation."],
  ["navgrah-hawan-samagri.html", "Navgrah Hawan Samagri", "Navgrah grah shanti samagri page."],
  ["mahamrityunjay-hawan-samagri.html", "Mahamrityunjay Hawan Samagri", "Mahamrityunjay jaap and hawan samagri page."],
  ["vastu-shanti-hawan-samagri.html", "Vastu Shanti Hawan Samagri", "Vastu shanti and home energy hawan samagri page."],
  ["lakshmi-hawan-samagri.html", "Lakshmi Hawan Samagri", "Lakshmi hawan samagri for prosperity and business intent."],
  ["ganesh-hawan-samagri.html", "Ganesh Hawan Samagri", "Ganesh hawan samagri for auspicious beginning intent."],
];

const supportingServiceLinks = [
  ["online-pooja.html", "Online Pooja", "Remote pooja, sankalp, live option and proof discussion before confirmation."],
  ["kundli.html", "Kundli Consultation", "Birth chart, dosh, timing and remedy consultation path before hawan planning."],
  ["kundli-matching-for-marriage-guide.html", "Kundli Matching Guide", "Marriage matching and dosh discussion before ritual planning."],
  ["marriage-problem.html", "Marriage Guidance", "Marriage delay, compatibility and relationship concern consultation route."],
  ["business-problem.html", "Business Guidance", "Business, shop opening, finance and career concern astrology route."],
  ["vastu-muhurat.html", "Vastu and Muhurat", "Home, office, griha pravesh, business and auspicious timing guidance."],
  ["which-gemstone-is-suitable-by-kundli.html", "Gemstone By Kundli", "Gemstone suitability route when remedy advice needs kundli review."],
];

const trustLinks = [
  ["proof-center.html", "Proof Center", "Company-stated net worth, staff count, offices, policies and booking proof."],
  ["company-profile.html", "Company Profile", "1,289 staff worldwide and INR 7,594 crore company-stated net worth details."],
  ["global-offices.html", "Global Offices", "India, Dubai, London and United States office and service-network context."],
  ["surya-kant-jha-chairman-networth-travel-agent.html", "Chairman Profile", "Surya Kant Jha, Suryakant Jha and travel agent leadership search context."],
  ["book-online.html", "Create Booking ID", "Create a trackable request before final quote, COD or online payment choice."],
  ["track-booking.html", "Track Booking", "Track quote, staff update, payment stage and consultation status."],
  ["terms-and-conditions.html", "Terms and Conditions", "Service terms, policy clarity and responsible-use details."],
];

const sharedFaqs = [
  [
    "Can NRI families book hawan without paying first?",
    "Yes. The enquiry starts with purpose, location, timing and samagri discussion. The quote, Booking ID and payment option are confirmed before payment."
  ],
  [
    "Which hawan details should be shared before the quote?",
    "Share country, city, preferred date, family names, gotra if available, purpose such as grah shanti, Navgrah, Mahamrityunjay or vastu shanti, and whether live or proof update is needed."
  ]
];

const targets = [
  {
    file: "hawan.html",
    market: "India, Dubai, USA, UK, Canada and Australia",
    shortMarket: "Global",
    titleText: "Hawan Booking Online | USA, UK, Canada, Australia NRI Havan",
    titleHtml: "Hawan Booking Online | USA, UK, Canada, Australia NRI Havan",
    description: "Book hawan online for USA, UK, Canada, Australia, Dubai and India: grah shanti, Navgrah, Mahamrityunjay, vastu shanti, samagri, Booking ID and quote before payment.",
    hreflang: "en-IN",
    locale: "en_IN",
    serviceName: "Hawan booking online for NRI families",
    countryHub: ["online-pooja-service-areas.html", "Global Service Areas", "Country and city hub for online pooja, hawan, kundli and gemstone searches."],
    cityLinks: [
      ["online-pandit-dubai-uae.html", "Online Pandit Dubai UAE", "UAE country hub for pooja, kundli, hawan and gemstone searches."],
      ["online-pandit-usa.html", "Online Pandit USA", "USA country hub for pooja, kundli, hawan and gemstone searches."],
      ["online-pandit-uk.html", "Online Pandit UK", "UK country hub for pooja, kundli, hawan and gemstone searches."],
      ["online-pandit-canada.html", "Online Pandit Canada", "Canada country hub for pooja, kundli, hawan and gemstone searches."],
      ["online-pandit-australia.html", "Online Pandit Australia", "Australia country hub for pooja, kundli and hawan searches."],
    ],
    relatedServiceLinks: [
      ["online-navgrah-puja-usa.html", "Navgrah Puja USA", "Grah shanti and Navgrah puja route for USA searches."],
      ["online-mahamrityunjay-jaap-usa.html", "Mahamrityunjay Jaap USA", "Mahamrityunjay jaap and hawan route for USA searches."],
      ["online-kundli-consultation-dubai.html", "Kundli Consultation Dubai", "Dubai kundli consultation route before remedy planning."],
      ["online-kundli-consultation-usa.html", "Kundli Consultation USA", "USA kundli consultation route before remedy planning."],
      ["online-kundli-consultation-uk.html", "Kundli Consultation UK", "UK kundli consultation route before remedy planning."],
      ["online-kundli-consultation-canada.html", "Kundli Consultation Canada", "Canada kundli consultation route before remedy planning."],
    ],
    insertBefore: "      <!-- Core Service Authority Upgrade Start -->",
    faqId: "https://bandeviastro.com/hawan.html#authority-faq",
  },
  {
    file: "online-hawan-booking-usa.html",
    market: "USA",
    shortMarket: "USA",
    titleText: "Online Hawan Booking USA | Navgrah, Grah Shanti & NRI Havan",
    titleHtml: "Online Hawan Booking USA | Navgrah, Grah Shanti &amp; NRI Havan",
    description: "Online hawan booking USA for NRI families: grah shanti, Navgrah, Mahamrityunjay, vastu shanti, samagri guidance, Booking ID and quote before payment.",
    hreflang: "en-US",
    locale: "en_US",
    serviceName: "Online hawan booking USA",
    countryHub: ["online-pandit-usa.html", "Online Pandit USA", "Country hub for USA pooja, kundli, hawan and gemstone searches."],
    cityLinks: [
      ["online-pandit-new-york.html", "Online Pandit New York", "New York and New Jersey city page."],
      ["online-pandit-los-angeles.html", "Online Pandit Los Angeles", "Los Angeles and Southern California city page."],
      ["online-pandit-chicago.html", "Online Pandit Chicago", "Chicago and Illinois NRI pooja page."],
    ],
    relatedServiceLinks: [
      ["online-navgrah-puja-usa.html", "Navgrah Puja USA", "Grah shanti and Navgrah puja route."],
      ["online-mahamrityunjay-jaap-usa.html", "Mahamrityunjay Jaap USA", "Mahamrityunjay jaap and hawan route."],
      ["online-griha-pravesh-pooja-usa.html", "Griha Pravesh Pooja USA", "Housewarming and vastu shanti planning route."],
      ["online-satyanarayan-pooja-usa.html", "Satyanarayan Pooja USA", "Satyanarayan pooja route for USA families."],
      ["online-kundli-consultation-usa.html", "Kundli Consultation USA", "Kundli and dosh discussion before hawan planning."],
      ["online-gemstone-consultation-usa.html", "Gemstone Consultation USA", "Gemstone remedy route after kundli review."],
      ["online-vastu-consultation-usa.html", "Vastu Consultation USA", "Home and office vastu consultation route."],
    ],
    insertBefore: "      <!-- Service Trust Link Upgrade 2026-07-16 Start -->",
  },
  {
    file: "online-hawan-booking-uk.html",
    market: "UK",
    shortMarket: "UK",
    titleText: "Online Hawan Booking UK | Navgrah, Grah Shanti & NRI Havan",
    titleHtml: "Online Hawan Booking UK | Navgrah, Grah Shanti &amp; NRI Havan",
    description: "Online hawan booking UK for NRI families: grah shanti, Navgrah, Mahamrityunjay, vastu shanti, samagri guidance, Booking ID and quote before payment.",
    hreflang: "en-GB",
    locale: "en_GB",
    serviceName: "Online hawan booking UK",
    countryHub: ["online-pandit-uk.html", "Online Pandit UK", "Country hub for UK pooja, kundli, hawan and gemstone searches."],
    cityLinks: [
      ["online-pandit-london.html", "Online Pandit London", "London Hindu priest, kundli and hawan city page."],
      ["online-pandit-birmingham.html", "Online Pandit Birmingham", "Birmingham Hindu priest, kundli and hawan city page."],
      ["online-pandit-leicester.html", "Online Pandit Leicester", "Leicester Hindu priest, kundli and hawan city page."],
    ],
    relatedServiceLinks: [
      ["online-satyanarayan-pooja-uk.html", "Satyanarayan Pooja UK", "Satyanarayan pooja route for UK families."],
      ["online-kundli-consultation-uk.html", "Kundli Consultation UK", "Kundli and dosh discussion before hawan planning."],
      ["online-gemstone-consultation-uk.html", "Gemstone Consultation UK", "Gemstone remedy route after kundli review."],
      ["online-vastu-consultation-uk.html", "Vastu Consultation UK", "Home and office vastu consultation route."],
    ],
    insertBefore: "      <!-- Service Trust Link Upgrade 2026-07-16 Start -->",
  },
  {
    file: "online-hawan-booking-canada.html",
    market: "Canada",
    shortMarket: "Canada",
    titleText: "Online Hawan Booking Canada | Navgrah, Grah Shanti & NRI Havan",
    titleHtml: "Online Hawan Booking Canada | Navgrah, Grah Shanti &amp; NRI Havan",
    description: "Online hawan booking Canada for NRI families: grah shanti, Navgrah, Mahamrityunjay, vastu shanti, samagri guidance, Booking ID and quote before payment.",
    hreflang: "en-CA",
    locale: "en_CA",
    serviceName: "Online hawan booking Canada",
    countryHub: ["online-pandit-canada.html", "Online Pandit Canada", "Country hub for Canada pooja, kundli, hawan and gemstone searches."],
    cityLinks: [
      ["online-pandit-toronto.html", "Online Pandit Toronto", "Toronto Hindu priest, kundli and hawan city page."],
      ["online-pandit-vancouver.html", "Online Pandit Vancouver", "Vancouver Hindu priest, kundli and hawan city page."],
      ["online-pandit-brampton.html", "Online Pandit Brampton", "Brampton Hindu priest, kundli and hawan city page."],
    ],
    relatedServiceLinks: [
      ["online-satyanarayan-pooja-canada.html", "Satyanarayan Pooja Canada", "Satyanarayan pooja route for Canada families."],
      ["online-griha-pravesh-pooja-canada.html", "Griha Pravesh Pooja Canada", "Housewarming and vastu shanti planning route."],
      ["online-kundli-consultation-canada.html", "Kundli Consultation Canada", "Kundli and dosh discussion before hawan planning."],
      ["online-gemstone-consultation-canada.html", "Gemstone Consultation Canada", "Gemstone remedy route after kundli review."],
    ],
  },
  {
    file: "online-hawan-booking-australia.html",
    market: "Australia",
    shortMarket: "Australia",
    titleText: "Online Hawan Booking Australia | Navgrah, Grah Shanti & NRI Havan",
    titleHtml: "Online Hawan Booking Australia | Navgrah, Grah Shanti &amp; NRI Havan",
    description: "Online hawan booking Australia for NRI families: grah shanti, Navgrah, Mahamrityunjay, vastu shanti, samagri guidance, Booking ID and quote before payment.",
    hreflang: "en-AU",
    locale: "en_AU",
    serviceName: "Online hawan booking Australia",
    countryHub: ["online-pandit-australia.html", "Online Pandit Australia", "Country hub for Australia pooja, kundli and hawan searches."],
    cityLinks: [
      ["online-pandit-sydney.html", "Online Pandit Sydney", "Sydney Hindu priest, kundli and hawan city page."],
      ["online-pandit-melbourne.html", "Online Pandit Melbourne", "Melbourne Hindu priest, kundli and hawan city page."],
      ["online-pandit-brisbane.html", "Online Pandit Brisbane", "Brisbane Hindu priest, kundli and hawan city page."],
    ],
    relatedServiceLinks: [
      ["online-kundli-consultation-australia.html", "Kundli Consultation Australia", "Australia kundli and astrology consultation page."],
      ["online-pooja.html", "Online Pooja", "Remote pooja, sankalp, proof and booking route."],
      ["vastu-muhurat.html", "Vastu and Muhurat", "Vastu and muhurat route for home, office and auspicious timing."],
    ],
  },
];

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function dedupeLinks(links) {
  const seen = new Set();
  return links.filter(([href]) => {
    if (seen.has(href)) return false;
    seen.add(href);
    return true;
  });
}

function pageUrl(file) {
  return `${baseUrl}/${file}`;
}

function absoluteUrl(href) {
  return href.startsWith("http") ? href : `${baseUrl}/${href}`;
}

function allPageLinks(target) {
  const siblings = coreHawanLinks.filter(([href]) => href !== target.file);
  return dedupeLinks([
    target.countryHub,
    ...target.cityLinks,
    ...siblings,
    ...target.relatedServiceLinks,
    ...samagriLinks,
    ...supportingServiceLinks,
    ...trustLinks,
  ]);
}

function linkCards(links) {
  return links
    .map(([href, label, note]) => `          <a href="${escapeHtml(href)}"><strong>${escapeHtml(label)}</strong><span>${escapeHtml(note)}</span></a>`)
    .join("\n");
}

function faqDetails(target) {
  return sharedFaqs
    .map(([question, answer], index) => {
      const text = answer.replace("country, city", `${target.shortMarket} city`);
      return `          <details${index === 0 ? " open" : ""}><summary>${escapeHtml(question)}</summary><p>${escapeHtml(text)}</p></details>`;
    })
    .join("\n");
}

function authorityBlock(target) {
  const id = slugify(target.file.replace(".html", ""));
  const clusterLinks = dedupeLinks([
    target.countryHub,
    ...target.cityLinks,
    ...coreHawanLinks.filter(([href]) => href !== target.file),
    ...target.relatedServiceLinks,
    ...samagriLinks.slice(0, 4),
    ...supportingServiceLinks,
  ]);

  return `      ${startMarker}
      <section class="section regional-links-section hawan-authority-section" aria-labelledby="${id}-hawan-authority-title">
        <div class="section-heading">
          <p class="eyebrow">Hawan booking authority</p>
          <h2 id="${id}-hawan-authority-title">Hawan booking links for ${escapeHtml(target.market)} NRI searches</h2>
          <p>This upgrade connects ${escapeHtml(target.shortMarket)} hawan booking intent with country, city, samagri, kundli, vastu, gemstone, proof, office and booking pages so visitors and crawlers can follow the complete service path.</p>
        </div>
        <div class="regional-link-grid" aria-label="${escapeHtml(target.shortMarket)} hawan authority links">
${linkCards(clusterLinks)}
        </div>
      </section>

      <section class="section regional-process-section hawan-authority-process" aria-labelledby="${id}-hawan-process-title">
        <div class="section-heading">
          <p class="eyebrow">Quote before payment</p>
          <h2 id="${id}-hawan-process-title">Hawan planning, samagri and Booking ID clarity</h2>
        </div>
        <div class="regional-card-grid">
          <article class="regional-card"><h3>Purpose first</h3><p>Families share whether the need is grah shanti, Navgrah, Mahamrityunjay, vastu shanti, business opening, marriage concern or family wellbeing.</p></article>
          <article class="regional-card"><h3>Samagri and safety</h3><p>The team discusses required samagri, safe local arrangement, live option, proof preference and timing before confirmation.</p></article>
          <article class="regional-card"><h3>Booking and payment path</h3><p>A Booking ID, quote and payment preference are confirmed before payment, with tracking available after the request is created.</p></article>
        </div>
      </section>

      <section class="section faq-section regional-faq-section hawan-authority-faq" aria-labelledby="${id}-hawan-faq-title">
        <div class="section-heading">
          <p class="eyebrow">Hawan booking FAQ</p>
          <h2 id="${id}-hawan-faq-title">Questions before confirming hawan booking</h2>
        </div>
        <div class="faq-list">
${faqDetails(target)}
        </div>
      </section>
      ${endMarker}`;
}

function replaceOrAppendMeta(html, pattern, replacement, insertAfterTitle = false) {
  if (pattern.test(html)) {
    return html.replace(pattern, replacement);
  }
  if (insertAfterTitle) {
    return html.replace("</title>", `</title>\n    ${replacement}`);
  }
  return html.replace("<head>", `<head>\n    ${replacement}`);
}

function updateMetadata(html, target) {
  const description = escapeHtml(target.description);
  const title = escapeHtml(target.titleText);
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${target.titleHtml}</title>`);
  html = replaceOrAppendMeta(html, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${description}" />`, true);
  html = replaceOrAppendMeta(html, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${title}" />`);
  html = replaceOrAppendMeta(html, /<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${description}" />`);
  html = replaceOrAppendMeta(html, /<meta property="og:locale" content="[^"]*" \/>/, `<meta property="og:locale" content="${target.locale}" />`);
  html = replaceOrAppendMeta(html, /<meta property="og:image:alt" content="[^"]*" \/>/, `<meta property="og:image:alt" content="${title}" />`);
  html = replaceOrAppendMeta(html, /<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${title}" />`);
  html = replaceOrAppendMeta(html, /<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${description}" />`);
  if (!html.includes(`hreflang="${target.hreflang}"`)) {
    const canonical = `<link rel="canonical" href="${pageUrl(target.file)}" />`;
    html = html.replace(canonical, `${canonical}\n    <link rel="alternate" hreflang="${target.hreflang}" href="${pageUrl(target.file)}" />`);
  }
  return html;
}

function addFaqs(existing, target) {
  const mainEntity = Array.isArray(existing.mainEntity) ? existing.mainEntity : [];
  for (const [question, answer] of sharedFaqs) {
    if (!mainEntity.some((item) => item.name === question)) {
      mainEntity.push({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer.replace("country, city", `${target.shortMarket} city`),
        },
      });
    }
  }
  return {
    ...existing,
    "@type": "FAQPage",
    mainEntity,
  };
}

function replaceGraphItem(graph, item) {
  const index = graph.findIndex((candidate) => candidate["@id"] === item["@id"]);
  if (index >= 0) {
    graph[index] = item;
  } else {
    graph.push(item);
  }
}

function updateJsonLd(html, target) {
  const url = pageUrl(target.file);
  const scriptPattern = /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/i;
  const match = html.match(scriptPattern);
  if (!match) throw new Error(`Missing JSON-LD script in ${target.file}`);

  const data = JSON.parse(match[1].trim());
  const graph = Array.isArray(data["@graph"]) ? data["@graph"] : [data];

  const webpageId = `${url}#webpage`;
  const serviceId = `${url}#service`;
  const faqId = target.faqId || `${url}#faq`;
  const itemListId = `${url}#hawan-authority-links`;
  const links = allPageLinks(target);

  const webpage = graph.find((item) => item["@id"] === webpageId) || {
    "@type": "WebPage",
    "@id": webpageId,
    url,
    isPartOf: { "@id": "https://bandeviastro.com/#website" },
  };
  webpage.name = target.titleText;
  webpage.description = target.description;
  webpage.inLanguage = target.hreflang;
  webpage.dateModified = today;
  webpage.about = { "@id": serviceId };
  replaceGraphItem(graph, webpage);

  const service = graph.find((item) => item["@id"] === serviceId) || {
    "@type": "Service",
    "@id": serviceId,
    provider: { "@id": "https://bandeviastro.com/#organization" },
  };
  service.name = target.serviceName;
  service.description = target.description;
  service.dateModified = today;
  service.serviceType = [
    `online hawan booking ${target.shortMarket}`,
    `havan ${target.shortMarket}`,
    `grah shanti hawan ${target.shortMarket}`,
    `Navgrah hawan ${target.shortMarket}`,
    `NRI hawan ${target.shortMarket}`,
    "quote before payment hawan booking",
  ];
  service.hasOfferCatalog = {
    "@type": "OfferCatalog",
    name: `${target.shortMarket} hawan booking service paths`,
    itemListElement: dedupeLinks([target.countryHub, ...target.relatedServiceLinks, ...coreHawanLinks, ...samagriLinks, ...trustLinks])
      .map(([href, label], index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: label,
          url: absoluteUrl(href),
        },
      })),
  };
  replaceGraphItem(graph, service);

  const faq = graph.find((item) => item["@id"] === faqId) || {
    "@type": "FAQPage",
    "@id": faqId,
  };
  replaceGraphItem(graph, addFaqs(faq, target));

  replaceGraphItem(graph, {
    "@type": "ItemList",
    "@id": itemListId,
    name: `${target.shortMarket} hawan booking authority links`,
    itemListElement: links.map(([href, label], index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: label,
      url: absoluteUrl(href),
    })),
  });

  const updated = {
    ...data,
    "@context": "https://schema.org",
    "@graph": graph,
  };
  return html.replace(scriptPattern, `<script type="application/ld+json">\n      ${JSON.stringify(updated, null, 6)}\n    </script>`);
}

function insertAuthorityBlock(html, target) {
  const blockPattern = new RegExp(`${escapeRegExp(startMarker)}[\\s\\S]*?${escapeRegExp(endMarker)}`, "m");
  html = html.replace(blockPattern, "");
  const block = authorityBlock(target);
  if (target.insertBefore && html.includes(target.insertBefore)) {
    return html.replace(target.insertBefore, `${block}\n${target.insertBefore}`);
  }
  if (html.includes("      <!-- Service Trust Link Upgrade 2026-07-16 Start -->")) {
    return html.replace("      <!-- Service Trust Link Upgrade 2026-07-16 Start -->", `${block}\n      <!-- Service Trust Link Upgrade 2026-07-16 Start -->`);
  }
  if (html.includes("    </main>")) {
    return html.replace("    </main>", `${block}\n    </main>`);
  }
  if (html.includes("</main>")) {
    return html.replace("</main>", `${block}\n    </main>`);
  }
  throw new Error(`Could not find insertion point in ${target.file}`);
}

function updatePage(target) {
  const filePath = path.join(root, target.file);
  let html = fs.readFileSync(filePath, "utf8");
  html = updateMetadata(html, target);
  html = updateJsonLd(html, target);
  html = insertAuthorityBlock(html, target);
  html = html.replace(/[ \t]+$/gm, "");
  fs.writeFileSync(filePath, html);
}

function updateSitemap() {
  const sitemapPath = path.join(root, "sitemap.xml");
  let sitemap = fs.readFileSync(sitemapPath, "utf8");
  for (const target of targets) {
    const loc = pageUrl(target.file);
    const urlPattern = new RegExp(`(<url>\\s*<loc>${escapeRegExp(loc)}</loc>\\s*<lastmod>)([^<]+)(</lastmod>)`, "m");
    if (!urlPattern.test(sitemap)) {
      throw new Error(`Missing sitemap entry for ${loc}`);
    }
    sitemap = sitemap.replace(urlPattern, `$1${today}$3`);
  }
  fs.writeFileSync(sitemapPath, sitemap);
}

function writeReports() {
  fs.mkdirSync(seoDaily, { recursive: true });
  const rows = [
    "url,market,links_added,lastmod",
    ...targets.map((target) => [
      pageUrl(target.file),
      target.market,
      allPageLinks(target).length,
      today,
    ].map((value) => `"${String(value).replace(/"/g, '""')}"`).join(",")),
  ];
  fs.writeFileSync(path.join(seoDaily, "2026-07-19-hawan-booking-authority-seo-upgrade.csv"), `${rows.join("\n")}\n`);

  const md = [
    "# Hawan Booking Authority SEO Upgrade - 2026-07-19",
    "",
    "Upgraded Hawan booking cluster pages:",
    ...targets.map((target) => `- ${pageUrl(target.file)} (${target.market})`),
    "",
    "Added or refreshed:",
    "- Metadata, Open Graph and Twitter descriptions around Hawan booking intent.",
    "- Service JSON-LD, FAQ JSON-LD and ItemList JSON-LD for hawan authority links.",
    "- Internal links to country hubs, city pages, hawan samagri, kundli, gemstone, vastu, proof, company, offices, chairman, booking and tracking.",
    `- Refreshed sitemap lastmod to ${today}.`,
    "",
  ];
  fs.writeFileSync(path.join(seoDaily, "2026-07-19-hawan-booking-authority-seo-upgrade.md"), `${md.join("\n")}\n`);

  const completedPath = path.join(outputs, "SEO_COMPLETED_20260705.md");
  let completed = fs.existsSync(completedPath) ? fs.readFileSync(completedPath, "utf8") : "";
  const completedMarker = "## Hawan Booking Authority SEO Upgrade - 2026-07-19";
  if (!completed.includes(completedMarker)) {
    completed = `${completed.trimEnd()}\n\n${completedMarker}\n- Upgraded the main hawan hub plus USA, UK, Canada and Australia online hawan booking pages.\n- Added country, city, hawan samagri, Navgrah, Mahamrityunjay, kundli, gemstone, vastu, proof, company, office, chairman, booking and tracking internal links.\n- Refreshed metadata, Service schema, FAQ schema, ItemList schema and sitemap lastmod to ${today}.\n- Added SEO reports under outputs/seo-daily/.\n`;
    fs.writeFileSync(completedPath, completed);
  }
}

for (const target of targets) {
  updatePage(target);
}
updateSitemap();
writeReports();

console.log(`Hawan booking authority SEO upgraded for ${targets.length} pages.`);
