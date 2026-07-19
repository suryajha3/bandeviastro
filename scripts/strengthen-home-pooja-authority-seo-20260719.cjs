const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const outputs = path.resolve(root, "..", "..", "outputs");
const seoDaily = path.join(outputs, "seo-daily");
const today = "2026-07-19";
const baseUrl = "https://bandeviastro.com";
const startMarker = "<!-- Home Pooja Authority SEO Upgrade 2026-07-19 Start -->";
const endMarker = "<!-- Home Pooja Authority SEO Upgrade 2026-07-19 End -->";

const coreHomePoojaLinks = [
  ["griha-pravesh-pooja-checklist.html", "Griha Pravesh Checklist", "Housewarming pooja, muhurat, sankalp and NRI booking preparation guide."],
  ["satyanarayan-pooja-vidhi-samagri.html", "Satyanarayan Pooja Guide", "Satyanarayan pooja vidhi, samagri, sankalp and NRI booking preparation guide."],
  ["online-griha-pravesh-pooja-usa.html", "Griha Pravesh Pooja USA", "USA housewarming pooja, muhurat and NRI home ceremony page."],
  ["online-griha-pravesh-pooja-canada.html", "Griha Pravesh Pooja Canada", "Canada housewarming pooja, muhurat and NRI home ceremony page."],
  ["online-satyanarayan-pooja-usa.html", "Satyanarayan Pooja USA", "USA Satyanarayan katha and NRI family pooja page."],
  ["online-satyanarayan-pooja-uk.html", "Satyanarayan Pooja UK", "UK Satyanarayan katha and NRI family pooja page."],
  ["online-satyanarayan-pooja-canada.html", "Satyanarayan Pooja Canada", "Canada Satyanarayan katha and NRI family pooja page."],
];

const guideAndKitLinks = [
  ["pooja-guides.html", "Pooja Guides", "Guide hub for vidhi, samagri and online booking routes."],
  ["nri-online-pooja-guides.html", "NRI Online Pooja Guides", "NRI pooja guide hub for global family booking routes."],
  ["online-pooja-for-nri-family-guide.html", "NRI Family Pooja Guide", "Time zone, sankalp, proof and online pooja planning guide."],
  ["griha-pravesh-pooja-kit.html", "Griha Pravesh Pooja Kit", "Pooja kit quote route with item list, availability and Booking ID."],
  ["satyanarayan-pooja-kit.html", "Satyanarayan Pooja Kit", "Satyanarayan kit quote route with item list, availability and Booking ID."],
];

const supportingServiceLinks = [
  ["online-pooja.html", "Online Pooja", "Remote pooja, sankalp, live option and proof discussion before confirmation."],
  ["online-pooja-service-areas.html", "Service Areas Hub", "Country, city and service-intent SEO hub."],
  ["vastu-muhurat.html", "Vastu and Muhurat", "Home, office, griha pravesh, business and auspicious timing guidance."],
  ["vastu-for-home-entrance-guide.html", "Vastu Home Entrance Guide", "Home entrance direction and consultation preparation guide."],
  ["hawan.html", "Hawan Booking", "Grah shanti, vastu shanti, Navgrah and family hawan planning."],
  ["vastu-shanti-hawan-samagri.html", "Vastu Shanti Hawan Samagri", "Vastu shanti hawan samagri route after confirmation."],
  ["kundli.html", "Kundli Consultation", "Birth chart, dosh, timing and remedy consultation path."],
  ["kundli-matching-for-marriage-guide.html", "Kundli Matching Guide", "Marriage matching and family planning guide before consultation."],
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
    "Can NRI families confirm home pooja before payment?",
    "Yes. The enquiry starts with country, city, purpose, family details, muhurat need and proof preference. Quote, Booking ID and payment option are confirmed before payment."
  ],
  [
    "What details are needed for Griha Pravesh or Satyanarayan pooja?",
    "Share country, city, preferred date, family names, gotra if available, pooja purpose, online participation preference, samagri or kit need and whether proof update is required."
  ]
];

const targets = [
  {
    file: "griha-pravesh-pooja-checklist.html",
    kind: "guide",
    market: "Griha Pravesh, housewarming, muhurat and NRI home pooja searches",
    shortMarket: "Griha Pravesh Guide",
    titleText: "Griha Pravesh Pooja Checklist | Housewarming Muhurat & NRI Booking",
    titleHtml: "Griha Pravesh Pooja Checklist | Housewarming Muhurat &amp; NRI Booking",
    description: "Griha Pravesh pooja checklist for housewarming, muhurat, sankalp, samagri, USA and Canada NRI home pooja booking with quote before payment.",
    hreflang: "en-IN",
    locale: "en_IN",
    schemaName: "Griha Pravesh pooja checklist",
    countryHub: ["online-pooja.html", "Online Pooja", "Main online pooja booking hub for home ceremony planning."],
    cityLinks: [
      ["online-griha-pravesh-pooja-usa.html", "Griha Pravesh Pooja USA", "USA housewarming pooja and muhurat route."],
      ["online-griha-pravesh-pooja-canada.html", "Griha Pravesh Pooja Canada", "Canada housewarming pooja and muhurat route."],
      ["vastu-muhurat.html", "Vastu and Muhurat", "Main vastu and muhurat consultation hub."],
    ],
    relatedServiceLinks: [
      ["vastu-for-home-entrance-guide.html", "Vastu Home Entrance Guide", "Home entrance direction and consultation preparation guide."],
      ["online-satyanarayan-pooja-usa.html", "Satyanarayan Pooja USA", "USA family pooja route after home entry planning."],
      ["online-satyanarayan-pooja-canada.html", "Satyanarayan Pooja Canada", "Canada family pooja route after home entry planning."],
      ["griha-pravesh-pooja-kit.html", "Griha Pravesh Pooja Kit", "Pooja kit quote path before payment."],
    ],
  },
  {
    file: "satyanarayan-pooja-vidhi-samagri.html",
    kind: "guide",
    market: "Satyanarayan pooja, vidhi, samagri and NRI booking searches",
    shortMarket: "Satyanarayan Guide",
    titleText: "Satyanarayan Pooja Vidhi & Samagri | USA UK Canada Booking",
    titleHtml: "Satyanarayan Pooja Vidhi &amp; Samagri | USA UK Canada Booking",
    description: "Satyanarayan pooja vidhi and samagri guide for USA, UK and Canada NRI families with sankalp details, kit, proof option, Booking ID and quote before payment.",
    hreflang: "en-IN",
    locale: "en_IN",
    schemaName: "Satyanarayan pooja vidhi and samagri guide",
    countryHub: ["online-pooja.html", "Online Pooja", "Main online pooja booking hub for family pooja planning."],
    cityLinks: [
      ["online-satyanarayan-pooja-usa.html", "Satyanarayan Pooja USA", "USA Satyanarayan katha route."],
      ["online-satyanarayan-pooja-uk.html", "Satyanarayan Pooja UK", "UK Satyanarayan katha route."],
      ["online-satyanarayan-pooja-canada.html", "Satyanarayan Pooja Canada", "Canada Satyanarayan katha route."],
    ],
    relatedServiceLinks: [
      ["online-griha-pravesh-pooja-usa.html", "Griha Pravesh Pooja USA", "USA housewarming pooja route."],
      ["griha-pravesh-pooja-checklist.html", "Griha Pravesh Checklist", "Housewarming pooja and muhurat preparation guide."],
      ["satyanarayan-pooja-kit.html", "Satyanarayan Pooja Kit", "Pooja kit quote path before payment."],
      ["nri-online-pooja-guides.html", "NRI Online Pooja Guides", "NRI pooja guide hub for global families."],
    ],
  },
  {
    file: "online-griha-pravesh-pooja-usa.html",
    kind: "service",
    market: "USA",
    shortMarket: "USA",
    titleText: "Online Griha Pravesh Pooja USA | Housewarming & Muhurat",
    titleHtml: "Online Griha Pravesh Pooja USA | Housewarming &amp; Muhurat",
    description: "Online Griha Pravesh pooja USA for NRI families: housewarming muhurat, sankalp, vastu shanti, samagri, proof option, Booking ID and quote before payment.",
    hreflang: "en-US",
    locale: "en_US",
    schemaName: "Online Griha Pravesh pooja USA",
    countryHub: ["online-pandit-usa.html", "Online Pandit USA", "Country hub for USA pooja, kundli, hawan, gemstone and vastu searches."],
    cityLinks: [
      ["online-pandit-new-york.html", "Online Pandit New York", "New York and New Jersey city page."],
      ["online-pandit-los-angeles.html", "Online Pandit Los Angeles", "Los Angeles and Southern California city page."],
      ["online-pandit-chicago.html", "Online Pandit Chicago", "Chicago and Illinois NRI pooja page."],
    ],
    relatedServiceLinks: [
      ["griha-pravesh-pooja-checklist.html", "Griha Pravesh Checklist", "Housewarming pooja and muhurat preparation guide."],
      ["online-griha-pravesh-pooja-canada.html", "Griha Pravesh Pooja Canada", "Canada housewarming pooja route."],
      ["online-vastu-consultation-usa.html", "Vastu Consultation USA", "USA home and office vastu route."],
      ["online-hawan-booking-usa.html", "Hawan Booking USA", "USA hawan and vastu shanti route."],
      ["online-satyanarayan-pooja-usa.html", "Satyanarayan Pooja USA", "USA family pooja route."],
    ],
    insertBefore: "<!-- Service Trust Link Upgrade 2026-07-16 Start -->",
  },
  {
    file: "online-griha-pravesh-pooja-canada.html",
    kind: "service",
    market: "Canada",
    shortMarket: "Canada",
    titleText: "Online Griha Pravesh Pooja Canada | Housewarming & Muhurat",
    titleHtml: "Online Griha Pravesh Pooja Canada | Housewarming &amp; Muhurat",
    description: "Online Griha Pravesh pooja Canada for NRI families: housewarming muhurat, sankalp, vastu shanti, samagri, proof option, Booking ID and quote before payment.",
    hreflang: "en-CA",
    locale: "en_CA",
    schemaName: "Online Griha Pravesh pooja Canada",
    countryHub: ["online-pandit-canada.html", "Online Pandit Canada", "Country hub for Canada pooja, kundli, hawan and gemstone searches."],
    cityLinks: [
      ["online-pandit-toronto.html", "Online Pandit Toronto", "Toronto Hindu priest, kundli and hawan city page."],
      ["online-pandit-vancouver.html", "Online Pandit Vancouver", "Vancouver Hindu priest, kundli and hawan city page."],
      ["online-pandit-brampton.html", "Online Pandit Brampton", "Brampton Hindu priest, kundli and hawan city page."],
    ],
    relatedServiceLinks: [
      ["griha-pravesh-pooja-checklist.html", "Griha Pravesh Checklist", "Housewarming pooja and muhurat preparation guide."],
      ["online-griha-pravesh-pooja-usa.html", "Griha Pravesh Pooja USA", "USA housewarming pooja route."],
      ["vastu-muhurat.html", "Vastu and Muhurat", "Main vastu and muhurat consultation hub."],
      ["online-hawan-booking-canada.html", "Hawan Booking Canada", "Canada hawan and vastu shanti route."],
      ["online-satyanarayan-pooja-canada.html", "Satyanarayan Pooja Canada", "Canada family pooja route."],
    ],
  },
  {
    file: "online-satyanarayan-pooja-usa.html",
    kind: "service",
    market: "USA",
    shortMarket: "USA",
    titleText: "Online Satyanarayan Pooja USA | Katha, Samagri & NRI Booking",
    titleHtml: "Online Satyanarayan Pooja USA | Katha, Samagri &amp; NRI Booking",
    description: "Online Satyanarayan pooja USA for NRI families: katha, sankalp, samagri, timing, proof option, Booking ID and quote before payment.",
    hreflang: "en-US",
    locale: "en_US",
    schemaName: "Online Satyanarayan pooja USA",
    countryHub: ["online-pandit-usa.html", "Online Pandit USA", "Country hub for USA pooja, kundli, hawan, gemstone and vastu searches."],
    cityLinks: [
      ["online-pandit-new-york.html", "Online Pandit New York", "New York and New Jersey city page."],
      ["online-pandit-los-angeles.html", "Online Pandit Los Angeles", "Los Angeles and Southern California city page."],
      ["online-pandit-chicago.html", "Online Pandit Chicago", "Chicago and Illinois NRI pooja page."],
    ],
    relatedServiceLinks: [
      ["satyanarayan-pooja-vidhi-samagri.html", "Satyanarayan Pooja Guide", "Vidhi, samagri and sankalp preparation guide."],
      ["online-satyanarayan-pooja-uk.html", "Satyanarayan Pooja UK", "UK Satyanarayan pooja route."],
      ["online-satyanarayan-pooja-canada.html", "Satyanarayan Pooja Canada", "Canada Satyanarayan pooja route."],
      ["online-griha-pravesh-pooja-usa.html", "Griha Pravesh Pooja USA", "USA housewarming and family pooja route."],
      ["satyanarayan-pooja-kit.html", "Satyanarayan Pooja Kit", "Satyanarayan kit quote path before payment."],
    ],
    insertBefore: "<!-- Service Trust Link Upgrade 2026-07-16 Start -->",
  },
  {
    file: "online-satyanarayan-pooja-uk.html",
    kind: "service",
    market: "UK",
    shortMarket: "UK",
    titleText: "Online Satyanarayan Pooja UK | Katha, Samagri & NRI Booking",
    titleHtml: "Online Satyanarayan Pooja UK | Katha, Samagri &amp; NRI Booking",
    description: "Online Satyanarayan pooja UK for NRI families: katha, sankalp, samagri, timing, proof option, Booking ID and quote before payment.",
    hreflang: "en-GB",
    locale: "en_GB",
    schemaName: "Online Satyanarayan pooja UK",
    countryHub: ["online-pandit-uk.html", "Online Pandit UK", "Country hub for UK pooja, kundli, hawan, gemstone and vastu searches."],
    cityLinks: [
      ["online-pandit-london.html", "Online Pandit London", "London Hindu priest, kundli, hawan and pooja city page."],
      ["online-pandit-birmingham.html", "Online Pandit Birmingham", "Birmingham Hindu priest, kundli, hawan and pooja city page."],
      ["online-pandit-leicester.html", "Online Pandit Leicester", "Leicester Hindu priest, kundli, hawan and pooja city page."],
    ],
    relatedServiceLinks: [
      ["satyanarayan-pooja-vidhi-samagri.html", "Satyanarayan Pooja Guide", "Vidhi, samagri and sankalp preparation guide."],
      ["online-satyanarayan-pooja-usa.html", "Satyanarayan Pooja USA", "USA Satyanarayan pooja route."],
      ["online-satyanarayan-pooja-canada.html", "Satyanarayan Pooja Canada", "Canada Satyanarayan pooja route."],
      ["online-hawan-booking-uk.html", "Hawan Booking UK", "UK hawan and family ritual route."],
      ["satyanarayan-pooja-kit.html", "Satyanarayan Pooja Kit", "Satyanarayan kit quote path before payment."],
    ],
    insertBefore: "<!-- Service Trust Link Upgrade 2026-07-16 Start -->",
  },
  {
    file: "online-satyanarayan-pooja-canada.html",
    kind: "service",
    market: "Canada",
    shortMarket: "Canada",
    titleText: "Online Satyanarayan Pooja Canada | Katha, Samagri & NRI Booking",
    titleHtml: "Online Satyanarayan Pooja Canada | Katha, Samagri &amp; NRI Booking",
    description: "Online Satyanarayan pooja Canada for NRI families: katha, sankalp, samagri, timing, proof option, Booking ID and quote before payment.",
    hreflang: "en-CA",
    locale: "en_CA",
    schemaName: "Online Satyanarayan pooja Canada",
    countryHub: ["online-pandit-canada.html", "Online Pandit Canada", "Country hub for Canada pooja, kundli, hawan and gemstone searches."],
    cityLinks: [
      ["online-pandit-toronto.html", "Online Pandit Toronto", "Toronto Hindu priest, kundli and family pooja city page."],
      ["online-pandit-vancouver.html", "Online Pandit Vancouver", "Vancouver Hindu priest, kundli and family pooja city page."],
      ["online-pandit-brampton.html", "Online Pandit Brampton", "Brampton Hindu priest, kundli and family pooja city page."],
    ],
    relatedServiceLinks: [
      ["satyanarayan-pooja-vidhi-samagri.html", "Satyanarayan Pooja Guide", "Vidhi, samagri and sankalp preparation guide."],
      ["online-satyanarayan-pooja-usa.html", "Satyanarayan Pooja USA", "USA Satyanarayan pooja route."],
      ["online-satyanarayan-pooja-uk.html", "Satyanarayan Pooja UK", "UK Satyanarayan pooja route."],
      ["online-griha-pravesh-pooja-canada.html", "Griha Pravesh Pooja Canada", "Canada housewarming and family pooja route."],
      ["satyanarayan-pooja-kit.html", "Satyanarayan Pooja Kit", "Satyanarayan kit quote path before payment."],
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
  const siblings = coreHomePoojaLinks.filter(([href]) => href !== target.file);
  return dedupeLinks([
    target.countryHub,
    ...target.cityLinks,
    ...siblings,
    ...target.relatedServiceLinks,
    ...guideAndKitLinks,
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
    ...coreHomePoojaLinks.filter(([href]) => href !== target.file),
    ...target.relatedServiceLinks,
    ...guideAndKitLinks,
    ...supportingServiceLinks,
  ]);

  return `      ${startMarker}
      <section class="section regional-links-section home-pooja-authority-section" aria-labelledby="${id}-home-pooja-authority-title">
        <div class="section-heading">
          <p class="eyebrow">Home pooja authority</p>
          <h2 id="${id}-home-pooja-authority-title">Griha Pravesh, Satyanarayan and NRI family pooja links for ${escapeHtml(target.market)}</h2>
          <p>This upgrade connects ${escapeHtml(target.shortMarket)} intent with country, city, guide, kit, vastu, hawan, kundli, proof, office and booking pages so visitors and crawlers can follow the complete home ceremony service path.</p>
        </div>
        <div class="regional-link-grid" aria-label="${escapeHtml(target.shortMarket)} home pooja authority links">
${linkCards(clusterLinks)}
        </div>
      </section>

      <section class="section regional-process-section home-pooja-authority-process" aria-labelledby="${id}-home-pooja-process-title">
        <div class="section-heading">
          <p class="eyebrow">Quote before payment</p>
          <h2 id="${id}-home-pooja-process-title">Sankalp, muhurat, samagri and Booking ID clarity</h2>
        </div>
        <div class="regional-card-grid">
          <article class="regional-card"><h3>Family details first</h3><p>Families share country, city, names, gotra if available, purpose, preferred date and online participation preference before recommendation.</p></article>
          <article class="regional-card"><h3>Home ceremony planning</h3><p>Griha Pravesh, Satyanarayan katha, muhurat, vastu shanti hawan, kit or samagri needs can be connected in one enquiry.</p></article>
          <article class="regional-card"><h3>Booking and payment path</h3><p>A quote, Booking ID and payment preference are confirmed before payment, with tracking available after the request is created.</p></article>
        </div>
      </section>

      <section class="section faq-section regional-faq-section home-pooja-authority-faq" aria-labelledby="${id}-home-pooja-faq-title">
        <div class="section-heading">
          <p class="eyebrow">Home pooja FAQ</p>
          <h2 id="${id}-home-pooja-faq-title">Questions before confirming Griha Pravesh or Satyanarayan pooja</h2>
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
  const faqId = `${url}#faq`;
  const itemListId = `${url}#home-pooja-authority-links`;
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
    article.articleSection = "Home pooja and NRI booking guide";
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
      `online home pooja ${target.shortMarket}`,
      `Griha Pravesh pooja ${target.shortMarket}`,
      `Satyanarayan pooja ${target.shortMarket}`,
      `NRI family pooja ${target.shortMarket}`,
      `housewarming pooja ${target.shortMarket}`,
      "quote before payment pooja booking",
    ];
    service.hasOfferCatalog = {
      "@type": "OfferCatalog",
      name: `${target.shortMarket} home pooja booking service paths`,
      itemListElement: dedupeLinks([target.countryHub, ...target.relatedServiceLinks, ...coreHomePoojaLinks, ...guideAndKitLinks, ...trustLinks])
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
    name: `${target.shortMarket} home pooja authority links`,
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
  fs.writeFileSync(path.join(seoDaily, "2026-07-19-home-pooja-authority-seo-upgrade.csv"), `${rows.join("\n")}\n`);

  const md = [
    "# Home Pooja Authority SEO Upgrade - 2026-07-19",
    "",
    "Upgraded Griha Pravesh and Satyanarayan pooja cluster pages:",
    ...targets.map((target) => `- ${pageUrl(target.file)} (${target.market})`),
    "",
    "Added or refreshed:",
    "- Metadata, Open Graph and Twitter descriptions around Griha Pravesh, Satyanarayan, housewarming and NRI home pooja intent.",
    "- Service or Article JSON-LD, FAQ JSON-LD and ItemList JSON-LD for home pooja authority links.",
    "- Internal links to country hubs, city pages, guides, kits, vastu, hawan, kundli, proof, company, offices, chairman, booking and tracking.",
    `- Refreshed sitemap lastmod to ${today}.`,
    "",
  ];
  fs.writeFileSync(path.join(seoDaily, "2026-07-19-home-pooja-authority-seo-upgrade.md"), `${md.join("\n")}\n`);

  const completedPath = path.join(outputs, "SEO_COMPLETED_20260705.md");
  let completed = fs.existsSync(completedPath) ? fs.readFileSync(completedPath, "utf8") : "";
  const completedMarker = "## Home Pooja Authority SEO Upgrade - 2026-07-19";
  if (!completed.includes(completedMarker)) {
    completed = `${completed.trimEnd()}\n\n${completedMarker}\n- Upgraded Griha Pravesh checklist, Satyanarayan guide, USA/Canada Griha Pravesh pages and USA/UK/Canada Satyanarayan pooja pages.\n- Added country, city, guide, kit, vastu, hawan, kundli, proof, company, office, chairman, booking and tracking internal links.\n- Refreshed metadata, Service/Article schema, FAQ schema, ItemList schema and sitemap lastmod to ${today}.\n- Added SEO reports under outputs/seo-daily/.\n`;
    fs.writeFileSync(completedPath, completed);
  }
}

for (const target of targets) {
  updatePage(target);
}
updateSitemap();
writeReports();

console.log(`Home pooja authority SEO upgraded for ${targets.length} pages.`);
