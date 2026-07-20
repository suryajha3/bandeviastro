const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const outputs = path.resolve(root, "..", "..", "outputs");
const seoDaily = path.join(outputs, "seo-daily");
const today = "2026-07-20";
const baseUrl = "https://bandeviastro.com";
const startMarker = "<!-- Australia City Pandit Authority SEO Upgrade 2026-07-20 Start -->";
const endMarker = "<!-- Australia City Pandit Authority SEO Upgrade 2026-07-20 End -->";

const targets = [
  {
    file: "online-pandit-sydney.html",
    slug: "sydney",
    city: "Sydney",
    state: "New South Wales",
    area: "Sydney, Parramatta, Harris Park, Blacktown, Liverpool and nearby New South Wales areas",
    titleText: "Online Pandit Sydney | NRI Pooja, Kundli, Hawan & Gemstone",
    titleHtml: "Online Pandit Sydney | NRI Pooja, Kundli, Hawan &amp; Gemstone",
    description: "Online pandit Sydney for NRI pooja, kundli, hawan, vastu muhurat and gemstone guidance with Booking ID, proof links and payment after quote.",
    whatsapp: "https://wa.me/918676846484?text=Namaste%2C%20I%20am%20in%20Sydney%20and%20need%20online%20pandit%20or%20pooja%20guidance.%20Please%20share%20the%20process.",
  },
  {
    file: "online-pandit-melbourne.html",
    slug: "melbourne",
    city: "Melbourne",
    state: "Victoria",
    area: "Melbourne, Dandenong, Tarneit, Point Cook, Werribee and nearby Victoria areas",
    titleText: "Online Pandit Melbourne | NRI Pooja, Kundli, Hawan & Gemstone",
    titleHtml: "Online Pandit Melbourne | NRI Pooja, Kundli, Hawan &amp; Gemstone",
    description: "Online pandit Melbourne for NRI pooja, kundli, hawan, vastu muhurat and gemstone guidance with Booking ID, proof links and payment after quote.",
    whatsapp: "https://wa.me/918676846484?text=Namaste%2C%20I%20am%20in%20Melbourne%20and%20need%20online%20pandit%20or%20pooja%20guidance.%20Please%20share%20the%20process.",
  },
  {
    file: "online-pandit-brisbane.html",
    slug: "brisbane",
    city: "Brisbane",
    state: "Queensland",
    area: "Brisbane, Sunnybank, Springfield, Logan, Gold Coast and nearby Queensland areas",
    titleText: "Online Pandit Brisbane | NRI Pooja, Kundli, Hawan & Gemstone",
    titleHtml: "Online Pandit Brisbane | NRI Pooja, Kundli, Hawan &amp; Gemstone",
    description: "Online pandit Brisbane for NRI pooja, kundli, hawan, vastu muhurat and gemstone guidance with Booking ID, proof links and payment after quote.",
    whatsapp: "https://wa.me/918676846484?text=Namaste%2C%20I%20am%20in%20Brisbane%20and%20need%20online%20pandit%20or%20pooja%20guidance.%20Please%20share%20the%20process.",
  },
];

const countryLink = ["online-pandit-australia.html", "Online Pandit Australia", "Country hub for Sydney, Melbourne, Brisbane and Australian NRI family searches."];

const serviceLinks = [
  ["online-kundli-consultation-australia.html", "Kundli Consultation Australia", "Australia kundli, birth chart, dosh, marriage, career and muhurat consultation page."],
  ["online-hawan-booking-australia.html", "Hawan Booking Australia", "Australia hawan, jaap, navgrah and grah shanti booking page."],
  ["online-pooja.html", "Online Pooja", "Remote pooja, sankalp, live option and proof discussion before confirmation."],
  ["hawan.html", "Hawan Services", "Grah shanti, navgrah, family, business and vastu hawan planning."],
  ["kundli.html", "Kundli Consultation", "Birth chart, dosh, marriage, career, business and remedy guidance."],
  ["gemstone-shop.html", "Gemstone Shop", "Certified gemstone quote path for rings, pendants and loose stones."],
  ["which-gemstone-is-suitable-by-kundli.html", "Gemstone By Kundli", "Suitability review before choosing gemstone, metal, certificate and form."],
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

const fakeLinks = [
  "online-gemstone-consultation-australia.html",
  "online-vastu-consultation-australia.html",
  "online-pooja-australia.html",
  "online-griha-pravesh-pooja-australia.html",
  "online-satyanarayan-pooja-australia.html",
];

function fail(message) {
  throw new Error(message);
}

function filePath(file) {
  return path.join(root, file);
}

function read(file) {
  return fs.readFileSync(filePath(file), "utf8");
}

function write(file, content) {
  fs.writeFileSync(filePath(file), content);
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function attr(value) {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

function setTitle(html, titleHtml) {
  return html.replace(/<title>[\s\S]*?<\/title>/, `<title>${titleHtml}</title>`);
}

function setMetaName(html, name, content) {
  const re = new RegExp(`<meta\\s+name="${escapeRegExp(name)}"\\s+content="[^"]*"\\s*\\/>`, "i");
  if (!re.test(html)) fail(`Missing meta name ${name}`);
  return html.replace(re, `<meta name="${name}" content="${attr(content)}" />`);
}

function setMetaProperty(html, property, content) {
  const re = new RegExp(`<meta\\s+property="${escapeRegExp(property)}"\\s+content="[^"]*"\\s*\\/>`, "i");
  if (!re.test(html)) fail(`Missing meta property ${property}`);
  return html.replace(re, `<meta property="${property}" content="${attr(content)}" />`);
}

function parseJsonLd(html, file) {
  const match = html.match(/<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/);
  if (!match) fail(`Missing JSON-LD in ${file}`);
  const data = JSON.parse(match[1]);
  return Array.isArray(data["@graph"]) ? data["@graph"] : [data];
}

function formatJsonLd(graph) {
  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }, null, 2)
    .split("\n")
    .map((line) => `      ${line}`)
    .join("\n");
  return `    <script type="application/ld+json">\n${json}\n    </script>`;
}

function replaceJsonLd(html, graph) {
  return html.replace(/    <script type="application\/ld\+json">[\s\S]*?<\/script>/, formatJsonLd(graph));
}

function uniqueLinks(links) {
  const seen = new Set();
  return links.filter(([href]) => {
    if (seen.has(href)) return false;
    seen.add(href);
    return true;
  });
}

function peerCityLinks(target) {
  return targets
    .filter((item) => item.file !== target.file)
    .map((item) => [item.file, `Online Pandit ${item.city}`, `${item.city} city page for Australia NRI pooja, kundli and hawan searches.`]);
}

function allAuthorityLinks(target) {
  return uniqueLinks([
    countryLink,
    ...peerCityLinks(target),
    ...serviceLinks,
    ...trustLinks,
  ]);
}

function listItems(links) {
  return links.map(([href, label], index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: label,
    url: `${baseUrl}/${href}`,
  }));
}

function offerItems(links) {
  return links.map(([href, label], index) => ({
    "@type": "Offer",
    position: index + 1,
    itemOffered: {
      "@type": "Service",
      name: label,
      url: `${baseUrl}/${href}`,
    },
  }));
}

function cityGraph(target) {
  const url = `${baseUrl}/${target.file}`;
  return [
    {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "Bandevi Astro",
      url: `${baseUrl}/`,
      email: "bandeviglobalgroup@gmail.com",
      telephone: ["+918676846484", "+916204641845"],
      founder: {
        "@type": "Person",
        name: "Pdt. Jyotishacharya Kumodanand Jha (Shastri)",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+918676846484",
          contactType: "customer support",
          areaServed: ["Australia", target.city, "NRI families"],
          availableLanguage: ["Hindi", "English"],
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: target.titleText,
      description: target.description,
      isPartOf: { "@id": `${baseUrl}/#website` },
      about: { "@id": `${url}#service` },
      inLanguage: "en-AU",
      dateModified: today,
    },
    {
      "@type": "Service",
      "@id": `${url}#service`,
      name: target.titleText,
      serviceType: [
        `online pandit ${target.city}`,
        `Hindu priest online ${target.city}`,
        `NRI pooja ${target.city}`,
        `kundli consultation ${target.city}`,
        `hawan booking ${target.city}`,
        `gemstone guidance ${target.city}`,
        `vastu muhurat ${target.city}`,
      ],
      description: target.description,
      provider: { "@id": `${baseUrl}/#organization` },
      areaServed: {
        "@type": "City",
        name: target.city,
        containedInPlace: {
          "@type": "Country",
          name: "Australia",
        },
      },
      audience: {
        "@type": "Audience",
        audienceType: "Indian families, NRI families and spiritual consultation clients",
      },
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: url,
        servicePhone: "+918676846484",
      },
      dateModified: today,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${target.city} pooja kundli hawan gemstone service paths`,
        itemListElement: offerItems(uniqueLinks([countryLink, ...peerCityLinks(target), ...serviceLinks])),
      },
    },
    {
      "@type": "ItemList",
      "@id": `${url}#city-authority-links`,
      name: `${target.city} online pandit authority links`,
      itemListElement: listItems(allAuthorityLinks(target)),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${baseUrl}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Service Areas",
          item: `${baseUrl}/online-pooja-service-areas.html`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Online Pandit Australia",
          item: `${baseUrl}/online-pandit-australia.html`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: `${target.city} Australia`,
          item: url,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: `Can ${target.city} Australia clients book online pooja from India?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `Yes. ${target.city} Australia clients can enquire for online pooja, hawan, kundli, gemstone, vastu and muhurat guidance with timing coordination and quote confirmation before payment.`,
          },
        },
        {
          "@type": "Question",
          name: `Which ${target.city} Australia areas are relevant?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `The online desk can support Indian families in ${target.area} through WhatsApp and online consultation.`,
          },
        },
        {
          "@type": "Question",
          name: `Can ${target.city} Australia families request proof after pooja?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: "Proof, live option or completion update can be discussed before confirmation depending on the service, timing and ritual type.",
          },
        },
      ],
    },
  ];
}

function linkCards(links) {
  return links.map(([href, label, copy]) => {
    return `          <a href="${href}"><strong>${label}</strong><span>${copy}</span></a>`;
  }).join("\n");
}

function authorityBlock(target) {
  const pageSlug = `online-pandit-${target.slug}`;
  return `${startMarker}
      <section class="section regional-links-section" aria-labelledby="${pageSlug}-authority-services-title">
        <div class="section-heading">
          <p class="eyebrow">Australia city authority hub</p>
          <h2 id="${pageSlug}-authority-services-title">${target.city} online pandit services by intent</h2>
          <p>${target.city} families can move from this city page to Australia country, nearby city, kundli, hawan, pooja, gemstone, vastu, NRI and service-area pages before quote or payment.</p>
        </div>
        <div class="regional-link-grid" aria-label="${target.city} Australia city and service authority links">
${linkCards(uniqueLinks([countryLink, ...peerCityLinks(target), ...serviceLinks]))}
        </div>
      </section>

      <section class="section regional-process-section" aria-labelledby="${pageSlug}-booking-payment-flow-title">
        <div class="section-heading">
          <p class="eyebrow">Quote and payment flow</p>
          <h2 id="${pageSlug}-booking-payment-flow-title">Booking ID first, payment after clear quote for ${target.city}</h2>
        </div>
        <ol class="regional-process-list">
          <li>Share ${target.city} area, service need, preferred date, time zone and birth details if kundli or gemstone guidance is needed.</li>
          <li>Staff confirms the right service page, ritual or consultation path, proof option, quote and timing before payment.</li>
          <li>Create or confirm a Booking ID so the request remains trackable from enquiry to completion.</li>
          <li>Choose COD or online payment only after the final service, quote, proof and delivery details are clear.</li>
          <li>Use Track Booking for staff notes, payment stage, live option, proof update or delivery status.</li>
        </ol>
      </section>

      <section class="section international-trust-link-section" aria-labelledby="${pageSlug}-authority-trust-title">
        <div class="section-heading compact">
          <p class="eyebrow">Trust, proof and Australia routing</p>
          <h2 id="${pageSlug}-authority-trust-title">${target.city} pandit hub trust and company links</h2>
          <p>This city authority block connects ${target.area} searches to company proof, offices, chairman profile, booking ID, tracking and the Australia country hub.</p>
        </div>
        <div class="international-trust-link-grid" aria-label="${target.city} trust, proof and booking links">
${linkCards(uniqueLinks([...trustLinks, countryLink]))}
        </div>
      </section>
      ${endMarker}`;
}

function stripExpansionTrust(html) {
  return html.replace(/\s*      <!-- Expansion Trust Link Upgrade 2026-07-18 Start -->[\s\S]*?<!-- Expansion Trust Link Upgrade 2026-07-18 End -->/, "");
}

function replaceRelatedSection(html, target) {
  const markerRe = new RegExp(`${escapeRegExp(startMarker)}[\\s\\S]*?${escapeRegExp(endMarker)}`);
  if (markerRe.test(html)) return html.replace(markerRe, authorityBlock(target));
  const relatedRe = new RegExp(`      <section class="section regional-links-section" aria-labelledby="${escapeRegExp(target.slug)}-links-title">[\\s\\S]*?      <\\/section>`);
  if (!relatedRe.test(html)) fail(`Could not find related links section in ${target.file}`);
  return html.replace(relatedRe, authorityBlock(target));
}

function strengthenPage(target) {
  let html = read(target.file);
  html = setTitle(html, target.titleHtml);
  html = setMetaName(html, "description", target.description);
  html = setMetaProperty(html, "og:title", target.titleHtml);
  html = setMetaProperty(html, "og:description", target.description);
  html = setMetaProperty(html, "og:image:alt", `${target.titleText} guidance`);
  html = setMetaName(html, "twitter:title", target.titleHtml);
  html = setMetaName(html, "twitter:description", target.description);
  html = html.replace(/<h1>[\s\S]*?<\/h1>/, `<h1>${target.titleHtml} for Australian NRI families</h1>`);
  html = html.replace(/<p class="hero-copy">[\s\S]*?<\/p>/, `<p class="hero-copy">For Indian families in ${target.area}, Bandevi Astro supports online pooja, hawan, kundli, gemstone, vastu and muhurat enquiries with Australia time coordination, Booking ID tracking and quote before payment.</p>`);
  html = html.replace(/<a class="btn btn-primary" href="[^"]*">Ask on WhatsApp<\/a>/, `<a class="btn btn-primary" href="${target.whatsapp}">Ask on WhatsApp</a>`);
  html = html.replace(/<a class="floating-whatsapp" href="[^"]*" aria-label="Open WhatsApp chat">WA<\/a>/, `<a class="floating-whatsapp" href="${target.whatsapp}" aria-label="Open WhatsApp chat">WA</a>`);
  html = replaceJsonLd(html, cityGraph(target));
  html = replaceRelatedSection(html, target);
  html = stripExpansionTrust(html);
  write(target.file, html);
}

function updateSitemap() {
  const sitemapPath = filePath("sitemap.xml");
  let sitemap = fs.readFileSync(sitemapPath, "utf8");
  for (const { file } of targets) {
    const loc = `<loc>${baseUrl}/${file}</loc>`;
    const re = new RegExp(`(${escapeRegExp(loc)}\\s*<lastmod>)([^<]+)(</lastmod>)`, "g");
    if (!re.test(sitemap)) fail(`Missing sitemap entry for ${file}`);
    sitemap = sitemap.replace(re, `$1${today}$3`);
  }
  fs.writeFileSync(sitemapPath, sitemap);
}

function validate() {
  const requiredTargets = uniqueLinks([
    countryLink,
    ...targets.map((target) => [target.file, `Online Pandit ${target.city}`, ""]),
    ...serviceLinks,
    ...trustLinks,
  ]);
  const missing = requiredTargets.filter(([href]) => !fs.existsSync(filePath(href))).map(([href]) => href);
  if (missing.length) fail(`Missing linked files: ${missing.join(", ")}`);

  const rows = [];
  for (const target of targets) {
    const html = read(target.file);
    const graph = parseJsonLd(html, target.file);
    JSON.stringify(graph);
    const markerCount = (html.match(new RegExp(escapeRegExp(startMarker), "g")) || []).length;
    if (markerCount !== 1) fail(`Expected one marker in ${target.file}, found ${markerCount}`);
    const itemList = graph.find((node) => String(node["@id"] || "").endsWith("#city-authority-links"));
    if (!itemList || !Array.isArray(itemList.itemListElement)) fail(`Missing city ItemList in ${target.file}`);
    const urls = itemList.itemListElement.map((item) => item.url);
    for (const required of [`${baseUrl}/online-pandit-australia.html`, `${baseUrl}/online-kundli-consultation-australia.html`, `${baseUrl}/online-hawan-booking-australia.html`]) {
      if (!urls.includes(required)) fail(`Missing structured URL ${required} in ${target.file}`);
    }
    const fake = fakeLinks.filter((link) => html.includes(link));
    if (fake.length) fail(`Fake Australia links in ${target.file}: ${fake.join(", ")}`);
    rows.push({
      file: target.file,
      markerCount,
      itemListCount: urls.length,
      hasAustraliaHub: urls.includes(`${baseUrl}/online-pandit-australia.html`),
      hasKundliAustralia: urls.includes(`${baseUrl}/online-kundli-consultation-australia.html`),
      hasHawanAustralia: urls.includes(`${baseUrl}/online-hawan-booking-australia.html`),
    });
  }
  const sitemap = read("sitemap.xml");
  for (const { file } of targets) {
    const loc = `<loc>${baseUrl}/${file}</loc>`;
    const index = sitemap.indexOf(loc);
    if (index < 0) fail(`Missing sitemap loc for ${file}`);
    const block = sitemap.slice(index, index + 220);
    if (!block.includes(`<lastmod>${today}</lastmod>`)) fail(`Sitemap lastmod not updated for ${file}`);
  }
  return rows;
}

function writeReports(rows) {
  fs.mkdirSync(seoDaily, { recursive: true });
  const csvPath = path.join(seoDaily, `${today}-australia-city-pandit-authority-seo-upgrade.csv`);
  const mdPath = path.join(seoDaily, `${today}-australia-city-pandit-authority-seo-upgrade.md`);
  const csv = [
    "page,marker_count,item_list_count,has_australia_hub,has_kundli_australia,has_hawan_australia",
    ...rows.map((row) => `${row.file},${row.markerCount},${row.itemListCount},${row.hasAustraliaHub},${row.hasKundliAustralia},${row.hasHawanAustralia}`),
  ].join("\n") + "\n";
  const md = [
    `# Australia City Pandit Authority SEO Upgrade - ${today}`,
    "",
    "- Upgraded Sydney, Melbourne and Brisbane online pandit city pages.",
    "- Added stronger metadata, Service schema, city ItemList schema, authority links, trust links and Booking ID/payment flow.",
    "- Connected all three city pages to Australia country, Australia kundli and Australia hawan pages.",
    "- Updated sitemap lastmod for all three city URLs.",
    "",
    "## Targets",
    ...rows.map((row) => `- ${row.file} - city authority links: ${row.itemListCount}`),
    "",
  ].join("\n");
  fs.writeFileSync(csvPath, csv);
  fs.writeFileSync(mdPath, md);
  console.log(`Wrote ${csvPath}`);
  console.log(`Wrote ${mdPath}`);
}

for (const target of targets) {
  if (!fs.existsSync(filePath(target.file))) fail(`Missing target page: ${target.file}`);
  strengthenPage(target);
}
updateSitemap();
const rows = validate();
writeReports(rows);
console.table(rows);
