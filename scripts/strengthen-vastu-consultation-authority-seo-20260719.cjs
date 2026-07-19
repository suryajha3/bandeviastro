const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const outputs = path.resolve(root, "..", "..", "outputs");
const seoDaily = path.join(outputs, "seo-daily");
const today = "2026-07-19";
const baseUrl = "https://bandeviastro.com";
const startMarker = "<!-- Vastu Consultation Authority SEO Upgrade 2026-07-19 Start -->";
const endMarker = "<!-- Vastu Consultation Authority SEO Upgrade 2026-07-19 End -->";

const coreVastuLinks = [
  ["vastu-muhurat.html", "Vastu and Muhurat Hub", "Main hub for home, office, shop, griha pravesh, business opening and muhurat guidance."],
  ["online-vastu-consultation-dubai.html", "Vastu Consultation Dubai", "Dubai and UAE home, office, entrance and muhurat consultation page."],
  ["online-vastu-consultation-usa.html", "Vastu Consultation USA", "USA home, office, floor-plan and muhurat consultation page."],
  ["online-vastu-consultation-uk.html", "Vastu Consultation UK", "UK home, office, entrance and muhurat consultation page."],
  ["vastu-for-home-entrance-guide.html", "Vastu Home Entrance Guide", "Guide page for home entrance direction, layout details and consultation preparation."],
];

const guideLinks = [
  ["gemstone-vastu-guides.html", "Gemstone and Vastu Guides", "Guide hub connecting vastu, gemstone and kundli suitability planning."],
  ["griha-pravesh-pooja-checklist.html", "Griha Pravesh Checklist", "Housewarming pooja and muhurat planning checklist."],
  ["online-griha-pravesh-pooja-usa.html", "Griha Pravesh Pooja USA", "USA housewarming pooja, vastu shanti and muhurat route."],
  ["online-griha-pravesh-pooja-canada.html", "Griha Pravesh Pooja Canada", "Canada housewarming pooja, vastu shanti and muhurat route."],
  ["vastu-shanti-hawan-samagri.html", "Vastu Shanti Hawan Samagri", "Vastu shanti hawan samagri route after ritual confirmation."],
];

const supportingServiceLinks = [
  ["online-pooja.html", "Online Pooja", "Remote pooja, sankalp, live option and proof discussion before confirmation."],
  ["hawan.html", "Hawan Booking", "Grah shanti, vastu shanti, Navgrah and family hawan planning."],
  ["kundli.html", "Kundli Consultation", "Birth chart, dosh, timing and remedy consultation path before vastu or muhurat planning."],
  ["kundli-matching-for-marriage-guide.html", "Kundli Matching Guide", "Marriage matching and muhurat discussion before family planning."],
  ["business-problem.html", "Business Guidance", "Business, shop opening, cash counter, office and career astrology route."],
  ["marriage-problem.html", "Marriage Guidance", "Marriage muhurat, compatibility and relationship concern consultation route."],
  ["which-gemstone-is-suitable-by-kundli.html", "Gemstone By Kundli", "Gemstone suitability route when remedy advice needs kundli review."],
  ["gemstone-shop.html", "Gemstone Shop", "Certified gemstone quote path after kundli suitability review."],
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
    "Can vastu consultation be handled online before a site visit?",
    "Yes. Clients can share country, city, property type, entrance direction, photos or floor plan if available, then confirm the quote and Booking ID before payment."
  ],
  [
    "Can vastu, muhurat and griha pravesh be planned together?",
    "Yes. The same enquiry can connect home entrance guidance, griha pravesh pooja, vastu shanti hawan and auspicious date planning where relevant."
  ]
];

const targets = [
  {
    file: "vastu-muhurat.html",
    kind: "service",
    market: "Dubai, USA, UK and India",
    shortMarket: "Global",
    titleText: "Vastu & Muhurat Consultation | Dubai, USA, UK Online Vastu",
    titleHtml: "Vastu &amp; Muhurat Consultation | Dubai, USA, UK Online Vastu",
    description: "Online vastu and muhurat consultation for Dubai, USA, UK and India: home entrance, office, griha pravesh, business opening, floor plan review, Booking ID and quote before payment.",
    hreflang: "en-IN",
    locale: "en_IN",
    schemaName: "Online vastu and muhurat consultation",
    countryHub: ["online-pooja-service-areas.html", "Global Service Areas", "Country and city hub for online pooja, hawan, kundli, gemstone and vastu searches."],
    cityLinks: [
      ["online-pandit-dubai-uae.html", "Online Pandit Dubai UAE", "UAE country hub for pooja, kundli, hawan, gemstone and vastu searches."],
      ["online-pandit-usa.html", "Online Pandit USA", "USA country hub for pooja, kundli, hawan, gemstone and vastu searches."],
      ["online-pandit-uk.html", "Online Pandit UK", "UK country hub for pooja, kundli, hawan, gemstone and vastu searches."],
    ],
    relatedServiceLinks: [
      ["online-kundli-consultation-dubai.html", "Kundli Consultation Dubai", "Dubai kundli route before remedy or vastu timing planning."],
      ["online-kundli-consultation-usa.html", "Kundli Consultation USA", "USA kundli route before remedy or vastu timing planning."],
      ["online-kundli-consultation-uk.html", "Kundli Consultation UK", "UK kundli route before remedy or vastu timing planning."],
      ["online-hawan-booking-usa.html", "Hawan Booking USA", "USA hawan and vastu shanti route."],
      ["online-hawan-booking-uk.html", "Hawan Booking UK", "UK hawan and vastu shanti route."],
      ["online-hawan-booking-canada.html", "Hawan Booking Canada", "Canada hawan and vastu shanti route."],
    ],
    insertBefore: "<!-- Core Service Authority Upgrade Start -->",
    faqId: "https://bandeviastro.com/vastu-muhurat.html#authority-faq",
  },
  {
    file: "online-vastu-consultation-dubai.html",
    kind: "service",
    market: "Dubai and UAE",
    shortMarket: "Dubai",
    titleText: "Online Vastu Consultation Dubai | Home, Office & Muhurat",
    titleHtml: "Online Vastu Consultation Dubai | Home, Office &amp; Muhurat",
    description: "Online vastu consultation Dubai and UAE for home, office, shop, entrance direction, floor plan, griha pravesh and muhurat guidance with quote before payment.",
    hreflang: "en-AE",
    locale: "en_AE",
    schemaName: "Online vastu consultation Dubai",
    countryHub: ["online-pandit-dubai-uae.html", "Online Pandit Dubai UAE", "Country hub for UAE pooja, kundli, hawan, gemstone and vastu searches."],
    cityLinks: [
      ["online-pandit-dubai.html", "Online Pandit Dubai", "Dubai city page for NRI pooja, kundli, hawan and vastu searches."],
      ["online-pandit-abu-dhabi.html", "Online Pandit Abu Dhabi", "Abu Dhabi page for online pooja, kundli and vastu searches."],
      ["online-pandit-sharjah.html", "Online Pandit Sharjah", "Sharjah page for NRI pooja and vastu searches."],
    ],
    relatedServiceLinks: [
      ["online-kundli-consultation-dubai.html", "Kundli Consultation Dubai", "Dubai kundli route before remedy or timing planning."],
      ["online-gemstone-consultation-dubai.html", "Gemstone Consultation Dubai", "Dubai gemstone suitability route after kundli review."],
      ["hawan.html", "Hawan Booking Dubai", "Use the main hawan hub for Dubai vastu shanti or grah shanti enquiries."],
      ["online-pooja.html", "Online Pooja Dubai", "Remote pooja, sankalp and proof route for Dubai families."],
    ],
    insertBefore: "<!-- Service Trust Link Upgrade 2026-07-16 Start -->",
  },
  {
    file: "online-vastu-consultation-usa.html",
    kind: "service",
    market: "USA",
    shortMarket: "USA",
    titleText: "Online Vastu Consultation USA | Home, Office & Muhurat",
    titleHtml: "Online Vastu Consultation USA | Home, Office &amp; Muhurat",
    description: "Online vastu consultation USA for home, office, shop, entrance direction, floor plan, griha pravesh and muhurat guidance with quote before payment.",
    hreflang: "en-US",
    locale: "en_US",
    schemaName: "Online vastu consultation USA",
    countryHub: ["online-pandit-usa.html", "Online Pandit USA", "Country hub for USA pooja, kundli, hawan, gemstone and vastu searches."],
    cityLinks: [
      ["online-pandit-new-york.html", "Online Pandit New York", "New York and New Jersey city page."],
      ["online-pandit-los-angeles.html", "Online Pandit Los Angeles", "Los Angeles and Southern California city page."],
      ["online-pandit-chicago.html", "Online Pandit Chicago", "Chicago and Illinois NRI pooja page."],
    ],
    relatedServiceLinks: [
      ["online-griha-pravesh-pooja-usa.html", "Griha Pravesh Pooja USA", "USA housewarming pooja and vastu shanti planning route."],
      ["online-kundli-consultation-usa.html", "Kundli Consultation USA", "USA kundli route before remedy or timing planning."],
      ["online-gemstone-consultation-usa.html", "Gemstone Consultation USA", "USA gemstone suitability route after kundli review."],
      ["online-hawan-booking-usa.html", "Hawan Booking USA", "USA hawan and vastu shanti route."],
      ["online-satyanarayan-pooja-usa.html", "Satyanarayan Pooja USA", "USA pooja route for family or home ceremony planning."],
    ],
    insertBefore: "<!-- Service Trust Link Upgrade 2026-07-16 Start -->",
  },
  {
    file: "online-vastu-consultation-uk.html",
    kind: "service",
    market: "UK",
    shortMarket: "UK",
    titleText: "Online Vastu Consultation UK | Home, Office & Muhurat",
    titleHtml: "Online Vastu Consultation UK | Home, Office &amp; Muhurat",
    description: "Online vastu consultation UK for home, office, shop, entrance direction, floor plan, griha pravesh and muhurat guidance with quote before payment.",
    hreflang: "en-GB",
    locale: "en_GB",
    schemaName: "Online vastu consultation UK",
    countryHub: ["online-pandit-uk.html", "Online Pandit UK", "Country hub for UK pooja, kundli, hawan, gemstone and vastu searches."],
    cityLinks: [
      ["online-pandit-london.html", "Online Pandit London", "London Hindu priest, kundli, hawan and vastu city page."],
      ["online-pandit-birmingham.html", "Online Pandit Birmingham", "Birmingham Hindu priest, kundli, hawan and vastu city page."],
      ["online-pandit-leicester.html", "Online Pandit Leicester", "Leicester Hindu priest, kundli, hawan and vastu city page."],
    ],
    relatedServiceLinks: [
      ["online-kundli-consultation-uk.html", "Kundli Consultation UK", "UK kundli route before remedy or timing planning."],
      ["online-gemstone-consultation-uk.html", "Gemstone Consultation UK", "UK gemstone suitability route after kundli review."],
      ["online-hawan-booking-uk.html", "Hawan Booking UK", "UK hawan and vastu shanti route."],
      ["online-satyanarayan-pooja-uk.html", "Satyanarayan Pooja UK", "UK pooja route for family or home ceremony planning."],
    ],
    insertBefore: "<!-- Service Trust Link Upgrade 2026-07-16 Start -->",
  },
  {
    file: "vastu-for-home-entrance-guide.html",
    kind: "guide",
    market: "home entrance, griha pravesh and international Vastu searches",
    shortMarket: "Guide",
    titleText: "Vastu for Home Entrance Guide | Direction, Muhurat & Consultation",
    titleHtml: "Vastu for Home Entrance Guide | Direction, Muhurat &amp; Consultation",
    description: "Vastu for home entrance guide with direction, layout, griha pravesh, muhurat, online vastu consultation Dubai, USA, UK and Booking ID before payment.",
    hreflang: "en-IN",
    locale: "en_IN",
    schemaName: "Vastu for home entrance guide",
    countryHub: ["vastu-muhurat.html", "Vastu and Muhurat Hub", "Main vastu and muhurat consultation hub."],
    cityLinks: [
      ["online-vastu-consultation-dubai.html", "Vastu Consultation Dubai", "Dubai and UAE vastu consultation page."],
      ["online-vastu-consultation-usa.html", "Vastu Consultation USA", "USA home and office vastu consultation page."],
      ["online-vastu-consultation-uk.html", "Vastu Consultation UK", "UK home and office vastu consultation page."],
    ],
    relatedServiceLinks: [
      ["griha-pravesh-pooja-checklist.html", "Griha Pravesh Checklist", "Housewarming pooja and muhurat planning checklist."],
      ["online-griha-pravesh-pooja-usa.html", "Griha Pravesh Pooja USA", "USA housewarming pooja and vastu shanti planning route."],
      ["online-griha-pravesh-pooja-canada.html", "Griha Pravesh Pooja Canada", "Canada housewarming pooja and vastu shanti planning route."],
      ["gemstone-vastu-guides.html", "Gemstone and Vastu Guides", "Guide hub connecting vastu, gemstone and kundli suitability planning."],
      ["online-pooja.html", "Online Pooja", "Remote pooja, sankalp and proof route."],
      ["hawan.html", "Hawan Booking", "Vastu shanti hawan and grah shanti planning route."],
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
  const siblings = coreVastuLinks.filter(([href]) => href !== target.file);
  return dedupeLinks([
    target.countryHub,
    ...target.cityLinks,
    ...siblings,
    ...target.relatedServiceLinks,
    ...guideLinks,
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
    ...coreVastuLinks.filter(([href]) => href !== target.file),
    ...target.relatedServiceLinks,
    ...guideLinks,
    ...supportingServiceLinks,
  ]);

  return `      ${startMarker}
      <section class="section regional-links-section vastu-authority-section" aria-labelledby="${id}-vastu-authority-title">
        <div class="section-heading">
          <p class="eyebrow">Vastu consultation authority</p>
          <h2 id="${id}-vastu-authority-title">Vastu, muhurat and home guidance links for ${escapeHtml(target.market)}</h2>
          <p>This upgrade connects ${escapeHtml(target.shortMarket)} Vastu intent with country, city, home entrance, griha pravesh, hawan, kundli, gemstone, proof, office and booking pages so visitors and crawlers can follow the complete service path.</p>
        </div>
        <div class="regional-link-grid" aria-label="${escapeHtml(target.shortMarket)} vastu authority links">
${linkCards(clusterLinks)}
        </div>
      </section>

      <section class="section regional-process-section vastu-authority-process" aria-labelledby="${id}-vastu-process-title">
        <div class="section-heading">
          <p class="eyebrow">Quote before payment</p>
          <h2 id="${id}-vastu-process-title">Floor plan, entrance, muhurat and Booking ID clarity</h2>
        </div>
        <div class="regional-card-grid">
          <article class="regional-card"><h3>Property details first</h3><p>Clients share city, property type, entrance direction, floor plan or photos if available and the concern before recommendation.</p></article>
          <article class="regional-card"><h3>Vastu and muhurat together</h3><p>Home entrance, office setup, shop opening, griha pravesh, vastu shanti hawan and auspicious date planning can be connected in one enquiry.</p></article>
          <article class="regional-card"><h3>Booking and payment path</h3><p>A quote, Booking ID and payment preference are confirmed before payment, with tracking available after the request is created.</p></article>
        </div>
      </section>

      <section class="section faq-section regional-faq-section vastu-authority-faq" aria-labelledby="${id}-vastu-faq-title">
        <div class="section-heading">
          <p class="eyebrow">Vastu consultation FAQ</p>
          <h2 id="${id}-vastu-faq-title">Questions before confirming Vastu or muhurat guidance</h2>
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
  const articleId = `${url}#article`;
  const faqId = target.faqId || `${url}#faq`;
  const itemListId = `${url}#vastu-authority-links`;
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
  webpage.about = { "@id": target.kind === "guide" ? articleId : serviceId };
  replaceGraphItem(graph, webpage);

  if (target.kind === "guide") {
    const article = graph.find((item) => item["@id"] === articleId) || {
      "@type": "Article",
      "@id": articleId,
      author: { "@id": "https://bandeviastro.com/#organization" },
      publisher: { "@id": "https://bandeviastro.com/#organization" },
      mainEntityOfPage: { "@id": webpageId },
    };
    article.headline = target.titleText;
    article.description = target.description;
    article.dateModified = today;
    article.articleSection = "Vastu and muhurat guide";
    replaceGraphItem(graph, article);
  } else {
    const service = graph.find((item) => item["@id"] === serviceId) || {
      "@type": "Service",
      "@id": serviceId,
      provider: { "@id": "https://bandeviastro.com/#organization" },
    };
    service.name = target.schemaName;
    service.description = target.description;
    service.dateModified = today;
    service.serviceType = [
      `online vastu consultation ${target.shortMarket}`,
      `vastu consultant ${target.shortMarket}`,
      `home vastu ${target.shortMarket}`,
      `office vastu ${target.shortMarket}`,
      `griha pravesh muhurat ${target.shortMarket}`,
      "quote before payment vastu consultation",
    ];
    service.hasOfferCatalog = {
      "@type": "OfferCatalog",
      name: `${target.shortMarket} vastu consultation service paths`,
      itemListElement: dedupeLinks([target.countryHub, ...target.relatedServiceLinks, ...coreVastuLinks, ...guideLinks, ...trustLinks])
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
  }

  const faq = graph.find((item) => item["@id"] === faqId) || {
    "@type": "FAQPage",
    "@id": faqId,
  };
  replaceGraphItem(graph, addFaqs(faq, target));

  replaceGraphItem(graph, {
    "@type": "ItemList",
    "@id": itemListId,
    name: `${target.shortMarket} vastu consultation authority links`,
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
  const markerChoices = [
    target.insertBefore,
    "<!-- Core Service Authority Upgrade Start -->",
    "<!-- Service Trust Link Upgrade 2026-07-16 Start -->",
    "<!-- Core Service Trust Link Upgrade 2026-07-19 Start -->",
  ].filter(Boolean);
  for (const marker of markerChoices) {
    const index = html.indexOf(marker);
    if (index >= 0) {
      const lineStart = html.lastIndexOf("\n", index) + 1;
      return `${html.slice(0, lineStart)}${block}\n${html.slice(lineStart)}`;
    }
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
  fs.writeFileSync(path.join(seoDaily, "2026-07-19-vastu-consultation-authority-seo-upgrade.csv"), `${rows.join("\n")}\n`);

  const md = [
    "# Vastu Consultation Authority SEO Upgrade - 2026-07-19",
    "",
    "Upgraded Vastu consultation cluster pages:",
    ...targets.map((target) => `- ${pageUrl(target.file)} (${target.market})`),
    "",
    "Added or refreshed:",
    "- Metadata, Open Graph and Twitter descriptions around Vastu, muhurat, home entrance and international consultation intent.",
    "- Service or Article JSON-LD, FAQ JSON-LD and ItemList JSON-LD for Vastu authority links.",
    "- Internal links to country hubs, city pages, griha pravesh, home entrance guide, hawan, kundli, gemstone, proof, company, offices, chairman, booking and tracking.",
    `- Refreshed sitemap lastmod to ${today}.`,
    "",
  ];
  fs.writeFileSync(path.join(seoDaily, "2026-07-19-vastu-consultation-authority-seo-upgrade.md"), `${md.join("\n")}\n`);

  const completedPath = path.join(outputs, "SEO_COMPLETED_20260705.md");
  let completed = fs.existsSync(completedPath) ? fs.readFileSync(completedPath, "utf8") : "";
  const completedMarker = "## Vastu Consultation Authority SEO Upgrade - 2026-07-19";
  if (!completed.includes(completedMarker)) {
    completed = `${completed.trimEnd()}\n\n${completedMarker}\n- Upgraded the main vastu and muhurat hub, Dubai, USA and UK online vastu consultation pages, plus the home entrance guide.\n- Added country, city, griha pravesh, home entrance guide, hawan, kundli, gemstone, proof, company, office, chairman, booking and tracking internal links.\n- Refreshed metadata, Service/Article schema, FAQ schema, ItemList schema and sitemap lastmod to ${today}.\n- Added SEO reports under outputs/seo-daily/.\n`;
    fs.writeFileSync(completedPath, completed);
  }
}

for (const target of targets) {
  updatePage(target);
}
updateSitemap();
writeReports();

console.log(`Vastu consultation authority SEO upgraded for ${targets.length} pages.`);
