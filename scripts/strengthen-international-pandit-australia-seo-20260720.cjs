const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const outputs = path.resolve(root, "..", "..", "outputs");
const seoDaily = path.join(outputs, "seo-daily");
const today = "2026-07-20";
const baseUrl = "https://bandeviastro.com";
const startMarker = "<!-- International Pandit Australia Authority SEO Upgrade 2026-07-20 Start -->";
const endMarker = "<!-- International Pandit Australia Authority SEO Upgrade 2026-07-20 End -->";

const countryFiles = [
  "online-pandit-dubai-uae.html",
  "online-pandit-usa.html",
  "online-pandit-uk.html",
  "online-pandit-canada.html",
  "online-pandit-australia.html",
];

const australiaCityLinks = [
  ["online-pandit-sydney.html", "Online Pandit Sydney", "Sydney and New South Wales page for NRI pooja, kundli and hawan searches."],
  ["online-pandit-melbourne.html", "Online Pandit Melbourne", "Melbourne and Victoria page for online pandit and pooja searches."],
  ["online-pandit-brisbane.html", "Online Pandit Brisbane", "Brisbane and Queensland page for kundli, pooja and hawan searches."],
];

const australiaServiceLinks = [
  ["online-kundli-consultation-australia.html", "Kundli Consultation Australia", "Australia kundli, birth chart, dosh and muhurat consultation page."],
  ["online-hawan-booking-australia.html", "Hawan Booking Australia", "Australia hawan, jaap and grah shanti booking page."],
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

const crossCountryLinks = [
  ["online-pandit-dubai-uae.html", "Online Pandit Dubai UAE", "Dubai and UAE country hub for Indian families abroad."],
  ["online-pandit-usa.html", "Online Pandit USA", "USA country hub for pooja, kundli, gemstone and hawan searches."],
  ["online-pandit-uk.html", "Online Pandit UK", "UK country hub for Hindu priest online and astrology searches."],
  ["online-pandit-canada.html", "Online Pandit Canada", "Canada country hub for NRI pooja, kundli and gemstone searches."],
];

function fail(message) {
  throw new Error(message);
}

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function write(file, html) {
  fs.writeFileSync(path.join(root, file), html);
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
  return html.replace(re, `<meta name="${name}" content="${attr(content)}" />`);
}

function setMetaProperty(html, property, content) {
  const re = new RegExp(`<meta\\s+property="${escapeRegExp(property)}"\\s+content="[^"]*"\\s*\\/>`, "i");
  return html.replace(re, `<meta property="${property}" content="${attr(content)}" />`);
}

function ensureAlternate(html, hreflang, href) {
  const line = `    <link rel="alternate" hreflang="${hreflang}" href="${href}" />\n`;
  if (html.includes(`hreflang="${hreflang}"`) && html.includes(href)) return html;
  const xDefault = /    <link rel="alternate" hreflang="x-default" href="[^"]+" \/>\r?\n/;
  if (xDefault.test(html)) {
    return html.replace(xDefault, `${line}$&`);
  }
  const canonical = /    <link rel="canonical" href="[^"]+" \/>\r?\n/;
  if (canonical.test(html)) {
    return html.replace(canonical, `$&${line}`);
  }
  fail(`Could not place hreflang ${hreflang}`);
}

function parseJsonLd(html, file) {
  const match = html.match(/<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/);
  if (!match) fail(`Missing JSON-LD in ${file}`);
  const data = JSON.parse(match[1]);
  const graph = Array.isArray(data["@graph"]) ? data["@graph"] : [data];
  return graph;
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

function linkCards(links) {
  return links.map(([href, label, copy]) => {
    return `          <a href="${href}"><strong>${label}</strong><span>${copy}</span></a>`;
  }).join("\n");
}

function uniqueLinks(links) {
  const seen = new Set();
  return links.filter(([href]) => {
    if (seen.has(href)) return false;
    seen.add(href);
    return true;
  });
}

function allAustraliaLinks() {
  return uniqueLinks([
    ...australiaCityLinks,
    ...australiaServiceLinks,
    ...trustLinks,
    ...crossCountryLinks,
  ]);
}

function australiaGraph() {
  const title = "Online Pandit Australia | NRI Pooja, Kundli, Hawan & Gemstone";
  const description = "Online pandit Australia for NRI pooja, kundli, hawan, vastu muhurat and gemstone guidance with Booking ID, proof links and payment after quote.";
  const url = `${baseUrl}/online-pandit-australia.html`;
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
          areaServed: ["Australia", "India", "NRI families"],
          availableLanguage: ["Hindi", "English"],
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: title,
      description,
      isPartOf: { "@id": `${baseUrl}/#website` },
      about: { "@id": `${url}#service` },
      inLanguage: "en-AU",
      dateModified: today,
    },
    {
      "@type": "Service",
      "@id": `${url}#service`,
      name: title,
      serviceType: [
        "online pandit Australia",
        "Hindu priest online Australia",
        "NRI pooja Australia",
        "kundli consultation Australia",
        "hawan booking Australia",
        "gemstone guidance Australia",
        "vastu muhurat Australia",
      ],
      description,
      provider: { "@id": `${baseUrl}/#organization` },
      areaServed: {
        "@type": "Place",
        name: "Australia",
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
        name: "Australia pooja kundli hawan gemstone service paths",
        itemListElement: offerItems(uniqueLinks([...australiaCityLinks, ...australiaServiceLinks])),
      },
    },
    {
      "@type": "ItemList",
      "@id": `${url}#country-authority-links`,
      name: "Australia online pandit authority links",
      itemListElement: listItems(allAustraliaLinks()),
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
          name: "Australia",
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
          name: "Can Australia clients book online pooja from India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Australia clients can enquire for online pooja, hawan, kundli, gemstone, vastu and muhurat guidance with timing coordination and quote confirmation before payment.",
          },
        },
        {
          "@type": "Question",
          name: "Which Australia areas are relevant?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The online desk can support Indian families in Sydney, Melbourne, Brisbane, Perth, Adelaide and nearby Australian cities through WhatsApp and online consultation.",
          },
        },
        {
          "@type": "Question",
          name: "Can Australia families request proof after pooja?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Proof, live option or completion update can be discussed before confirmation depending on the service, timing and ritual type.",
          },
        },
      ],
    },
  ];
}

function authorityBlock() {
  return `${startMarker}
      <section class="section regional-links-section" aria-labelledby="online-pandit-australia-authority-services-title">
        <div class="section-heading">
          <p class="eyebrow">Country service authority hub</p>
          <h2 id="online-pandit-australia-authority-services-title">Australia online pandit services by city and intent</h2>
          <p>Australia clients can move from this country hub to exact Sydney, Melbourne, Brisbane, kundli, hawan, gemstone, vastu, NRI pooja and service-area pages before quote or payment.</p>
        </div>
        <div class="regional-link-grid" aria-label="Australia city and service authority links">
${linkCards(uniqueLinks([...australiaCityLinks, ...australiaServiceLinks]))}
        </div>
      </section>

      <section class="section international-trust-link-section" aria-labelledby="online-pandit-australia-authority-trust-title">
        <div class="section-heading compact">
          <p class="eyebrow">Trust, proof and international routing</p>
          <h2 id="online-pandit-australia-authority-trust-title">Australia pandit hub trust and company links</h2>
          <p>This country authority block connects Sydney, Melbourne, Brisbane, Perth, Adelaide and Australia searches to company proof, offices, chairman profile, booking ID, tracking and related international pandit hubs.</p>
        </div>
        <div class="international-trust-link-grid" aria-label="Australia trust, proof and country routing links">
${linkCards(uniqueLinks([...trustLinks, ...crossCountryLinks]))}
        </div>
      </section>
      ${endMarker}`;
}

function strengthenExistingCountry(file) {
  let html = read(file);
  html = ensureAlternate(html, "en-AU", `${baseUrl}/online-pandit-australia.html`);
  const graph = parseJsonLd(html, file);
  const itemList = graph.find((item) => String(item["@id"] || "").endsWith("#country-authority-links"));
  if (itemList) {
    itemList.itemListElement = Array.isArray(itemList.itemListElement) ? itemList.itemListElement : [];
    const hasAustralia = itemList.itemListElement.some((item) => item.url === `${baseUrl}/online-pandit-australia.html`);
    if (!hasAustralia) {
      itemList.itemListElement.push({
        "@type": "ListItem",
        position: itemList.itemListElement.length + 1,
        name: "Online Pandit Australia",
        url: `${baseUrl}/online-pandit-australia.html`,
      });
    }
  }
  const service = graph.find((item) => item["@type"] === "Service" && String(item["@id"] || "").includes(file));
  if (service) {
    service.dateModified = today;
    const offers = service.hasOfferCatalog && Array.isArray(service.hasOfferCatalog.itemListElement)
      ? service.hasOfferCatalog.itemListElement
      : null;
    if (offers && !offers.some((offer) => offer.itemOffered && offer.itemOffered.url === `${baseUrl}/online-pandit-australia.html`)) {
      offers.push({
        "@type": "Offer",
        position: offers.length + 1,
        itemOffered: {
          "@type": "Service",
          name: "Online Pandit Australia",
          url: `${baseUrl}/online-pandit-australia.html`,
        },
      });
    }
  }
  const webpage = graph.find((item) => item["@type"] === "WebPage" && String(item["@id"] || "").includes(file));
  if (webpage) webpage.dateModified = today;
  html = replaceJsonLd(html, graph);
  write(file, html);
}

function strengthenAustralia() {
  const file = "online-pandit-australia.html";
  let html = read(file);
  const titleText = "Online Pandit Australia | NRI Pooja, Kundli, Hawan & Gemstone";
  const titleHtml = "Online Pandit Australia | NRI Pooja, Kundli, Hawan &amp; Gemstone";
  const description = "Online pandit Australia for NRI pooja, kundli, hawan, vastu muhurat and gemstone guidance with Booking ID, proof links and payment after quote.";

  html = setTitle(html, titleHtml);
  html = setMetaName(html, "description", description);
  html = setMetaProperty(html, "og:title", titleHtml);
  html = setMetaProperty(html, "og:description", description);
  html = setMetaProperty(html, "og:image:alt", "Online pandit Australia for NRI pooja, kundli, hawan and gemstone guidance");
  html = setMetaName(html, "twitter:title", titleHtml);
  html = setMetaName(html, "twitter:description", description);
  html = ensureAlternate(html, "en-AE", `${baseUrl}/online-pandit-dubai-uae.html`);
  html = ensureAlternate(html, "en-US", `${baseUrl}/online-pandit-usa.html`);
  html = ensureAlternate(html, "en-GB", `${baseUrl}/online-pandit-uk.html`);
  html = ensureAlternate(html, "en-CA", `${baseUrl}/online-pandit-canada.html`);
  html = replaceJsonLd(html, australiaGraph());

  html = html.replace(
    /      <section class="section regional-links-section" aria-labelledby="country-links-title">[\s\S]*?      <\/section>/,
    authorityBlock(),
  );
  html = html.replace(
    /\s*      <!-- Expansion Trust Link Upgrade 2026-07-18 Start -->[\s\S]*?<!-- Expansion Trust Link Upgrade 2026-07-18 End -->/,
    "",
  );
  write(file, html);
}

function updateSitemap() {
  const sitemapPath = path.join(root, "sitemap.xml");
  let sitemap = fs.readFileSync(sitemapPath, "utf8");
  for (const file of countryFiles) {
    const loc = `<loc>${baseUrl}/${file}</loc>`;
    const re = new RegExp(`(${escapeRegExp(loc)}\\s*<lastmod>)([^<]+)(</lastmod>)`, "g");
    if (!re.test(sitemap)) fail(`Missing sitemap entry for ${file}`);
    sitemap = sitemap.replace(re, `$1${today}$3`);
  }
  fs.writeFileSync(sitemapPath, sitemap);
}

function validate() {
  const missing = [];
  for (const [href] of allAustraliaLinks()) {
    if (!fs.existsSync(path.join(root, href))) missing.push(href);
  }
  if (missing.length) fail(`Missing authority targets: ${missing.join(", ")}`);
  const badLinks = [
    "online-gemstone-consultation-australia.html",
    "online-vastu-consultation-australia.html",
    "online-pooja-australia.html",
  ];
  const report = [];
  for (const file of countryFiles) {
    const html = read(file);
    const graph = parseJsonLd(html, file);
    JSON.stringify(graph);
    const itemList = graph.find((item) => String(item["@id"] || "").endsWith("#country-authority-links"));
    const itemUrls = itemList && Array.isArray(itemList.itemListElement)
      ? itemList.itemListElement.map((item) => item.url)
      : [];
    const hasAustraliaStructuredLink = file === "online-pandit-australia.html"
      ? itemUrls.includes(`${baseUrl}/online-pandit-sydney.html`) && itemUrls.includes(`${baseUrl}/online-pandit-usa.html`)
      : itemUrls.includes(`${baseUrl}/online-pandit-australia.html`);
    if (!hasAustraliaStructuredLink) fail(`Missing Australia structured link in ${file}`);
    if (!html.includes(`hreflang="en-AU"`)) fail(`Missing en-AU hreflang in ${file}`);
    const fakeLinksFound = badLinks.filter((link) => html.includes(link));
    if (fakeLinksFound.length) fail(`Fake Australia links in ${file}: ${fakeLinksFound.join(", ")}`);
    report.push({
      file,
      itemListCount: itemUrls.length,
      hasAustraliaAuthorityMarker: html.includes(startMarker),
      fakeLinksFound: fakeLinksFound.join("|"),
    });
  }
  const sitemap = read("sitemap.xml");
  for (const file of countryFiles) {
    const entry = `<loc>${baseUrl}/${file}</loc>`;
    const index = sitemap.indexOf(entry);
    if (index < 0) fail(`Sitemap entry missing for ${file}`);
    const block = sitemap.slice(index, index + 220);
    if (!block.includes(`<lastmod>${today}</lastmod>`)) fail(`Sitemap date not updated for ${file}`);
  }
  return report;
}

function writeReports(report) {
  fs.mkdirSync(seoDaily, { recursive: true });
  const csvPath = path.join(seoDaily, `${today}-international-pandit-australia-authority-seo-upgrade.csv`);
  const mdPath = path.join(seoDaily, `${today}-international-pandit-australia-authority-seo-upgrade.md`);
  const csv = [
    "page,item_list_count,australia_authority_marker,fake_links_found",
    ...report.map((row) => `${row.file},${row.itemListCount},${row.hasAustraliaAuthorityMarker},${row.fakeLinksFound}`),
  ].join("\n") + "\n";
  const md = [
    `# International Pandit Australia Authority SEO Upgrade - ${today}`,
    "",
    "- Strengthened Australia country hub title, metadata, hreflang, Service schema, ItemList schema, FAQ schema and authority links.",
    "- Added Australia structured routing to Dubai UAE, USA, UK and Canada country hubs.",
    "- Updated sitemap lastmod for all five international pandit country targets.",
    "- Avoided missing Australia-specific gemstone, vastu and generic pooja URLs.",
    "",
    "## Targets",
    ...report.map((row) => `- ${row.file} - ItemList links: ${row.itemListCount}`),
    "",
  ].join("\n");
  fs.writeFileSync(csvPath, csv);
  fs.writeFileSync(mdPath, md);
  console.log(`Wrote ${csvPath}`);
  console.log(`Wrote ${mdPath}`);
}

for (const file of countryFiles) {
  if (!fs.existsSync(path.join(root, file))) fail(`Missing target page: ${file}`);
}

for (const file of countryFiles.filter((file) => file !== "online-pandit-australia.html")) {
  strengthenExistingCountry(file);
}
strengthenAustralia();
updateSitemap();
const report = validate();
writeReports(report);
console.table(report);
