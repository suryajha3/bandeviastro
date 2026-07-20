const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const outputs = path.resolve(root, "..", "..", "outputs");
const seoDaily = path.join(outputs, "seo-daily");
const today = "2026-07-20";
const baseUrl = "https://bandeviastro.com";
const startMarker = "<!-- Australia Service Authority SEO Upgrade 2026-07-20 Start -->";
const endMarker = "<!-- Australia Service Authority SEO Upgrade 2026-07-20 End -->";

const commonAustraliaLinks = [
  ["online-pandit-australia.html", "Online Pandit Australia", "Country hub for Australia pooja, kundli, hawan and NRI service searches."],
  ["online-pandit-sydney.html", "Online Pandit Sydney", "Sydney city page for online pandit, kundli and hawan searches."],
  ["online-pandit-melbourne.html", "Online Pandit Melbourne", "Melbourne city page for online pandit, kundli and hawan searches."],
  ["online-pandit-brisbane.html", "Online Pandit Brisbane", "Brisbane city page for online pandit, kundli and hawan searches."],
];

const coreServiceLinks = [
  ["online-pooja.html", "Online Pooja", "Remote pooja, sankalp, live option and proof discussion before confirmation."],
  ["nri-pooja.html", "NRI Pooja Hub", "Dedicated NRI family support for pooja, hawan and online rituals."],
  ["online-pooja-service-areas.html", "Service Areas Hub", "Global country, city and service-intent SEO hub."],
  ["vastu-muhurat.html", "Vastu and Muhurat", "Home, office, griha pravesh, business and auspicious timing guidance."],
  ["gemstone-shop.html", "Gemstone Shop", "Certified gemstone quote path for rings, pendants and loose stones."],
  ["which-gemstone-is-suitable-by-kundli.html", "Gemstone By Kundli", "Suitability review before choosing gemstone, metal, certificate and form."],
];

const trustLinks = [
  ["proof-center.html", "Proof Center", "Company-stated net worth, staff count, offices, policies and booking proof."],
  ["company-profile.html", "Company Profile", "1,289 staff worldwide and INR 7,594 crore company-stated net worth details."],
  ["global-offices.html", "Global Offices", "India, Dubai, London and United States office and service-network context."],
  ["surya-kant-jha-chairman-networth-travel-agent.html", "Chairman Profile", "Surya Kant Jha, Suryakant Jha and travel agent leadership search context."],
  ["book-online.html", "Create Booking ID", "Create a trackable request before final quote, COD or online payment choice."],
  ["track-booking.html", "Track Booking", "Track quote, staff update, payment stage and completion details."],
];

const kundliCountryLinks = [
  ["online-kundli-consultation-usa.html", "Kundli Consultation USA", "USA kundli and astrology consultation page."],
  ["online-kundli-consultation-uk.html", "Kundli Consultation UK", "UK kundli and astrology consultation page."],
  ["online-kundli-consultation-canada.html", "Kundli Consultation Canada", "Canada kundli and astrology consultation page."],
  ["online-kundli-consultation-dubai.html", "Kundli Consultation Dubai", "Dubai kundli and astrology consultation page."],
];

const hawanCountryLinks = [
  ["online-hawan-booking-usa.html", "Hawan Booking USA", "USA hawan, jaap and grah shanti booking page."],
  ["online-hawan-booking-uk.html", "Hawan Booking UK", "UK hawan, jaap and grah shanti booking page."],
  ["online-hawan-booking-canada.html", "Hawan Booking Canada", "Canada hawan, jaap and grah shanti booking page."],
];

const hawanSamagriLinks = [
  ["hawan-samagri-premium-mix.html", "Premium Hawan Samagri", "Core hawan samagri mix and preparation route after confirmation."],
  ["navgrah-hawan-samagri.html", "Navgrah Hawan Samagri", "Navgrah grah shanti samagri page."],
  ["mahamrityunjay-hawan-samagri.html", "Mahamrityunjay Hawan Samagri", "Mahamrityunjay jaap and hawan samagri page."],
  ["vastu-shanti-hawan-samagri.html", "Vastu Shanti Hawan Samagri", "Vastu shanti and home energy hawan samagri page."],
  ["lakshmi-hawan-samagri.html", "Lakshmi Hawan Samagri", "Lakshmi hawan samagri page."],
  ["ganesh-hawan-samagri.html", "Ganesh Hawan Samagri", "Ganesh hawan samagri page."],
];

const targets = [
  {
    file: "online-kundli-consultation-australia.html",
    slug: "online-kundli-consultation-australia",
    serviceKind: "kundli",
    titleText: "Online Kundli Consultation Australia | Astrology, Dosh & Muhurat",
    titleHtml: "Online Kundli Consultation Australia | Astrology, Dosh &amp; Muhurat",
    description: "Online kundli consultation Australia for NRI families: birth chart, marriage, career, dosh, muhurat and remedies with Booking ID and quote before payment.",
    h1: "Online Kundli Consultation Australia for birth chart, dosh and muhurat guidance",
    heroCopy: "For Indian and NRI families in Sydney, Melbourne, Brisbane, Perth, Adelaide and other Australian cities, Bandevi Astro supports online kundli consultation enquiries for birth chart, marriage, career, dosh, muhurat and remedy guidance with Australia time coordination and quote before payment.",
    whatsapp: "https://wa.me/918676846484?text=Namaste%2C%20I%20am%20in%20Australia%20and%20need%20online%20kundli%20consultation.%20Please%20share%20process%2C%20details%20required%20and%20quote.",
    serviceType: [
      "online kundli consultation Australia",
      "Indian astrologer Australia",
      "Jyotish Australia",
      "birth chart reading Australia",
      "kundli matching Australia",
      "dosh consultation Australia",
      "muhurat consultation Australia",
    ],
    mainLinks: [
      ["kundli.html", "Kundli Consultation", "Main kundli consultation page with process, trust details and booking flow."],
      ["online-hawan-booking-australia.html", "Hawan Booking Australia", "Australia hawan, grah shanti and remedy ritual booking page."],
      ...kundliCountryLinks,
    ],
    faq: [
      ["Can Australia clients request online kundli consultation?", "Yes. Australia clients can enquire for online kundli consultation through WhatsApp with timing, quote and required birth details discussed before confirmation."],
      ["Which details are needed for kundli consultation?", "Share name, date of birth, birth time, birth place, Australia city, main concern and preferred consultation time. If exact birth time is unclear, mention it before the quote."],
      ["Is this a guaranteed result service?", "No. Spiritual and astrology services are faith-based guidance and do not replace medical, legal, financial or emergency advice. Quote and Booking ID are confirmed before payment."],
    ],
  },
  {
    file: "online-hawan-booking-australia.html",
    slug: "online-hawan-booking-australia",
    serviceKind: "hawan",
    titleText: "Online Hawan Booking Australia | Navgrah, Grah Shanti & NRI Havan",
    titleHtml: "Online Hawan Booking Australia | Navgrah, Grah Shanti &amp; NRI Havan",
    description: "Online hawan booking Australia for NRI families: grah shanti, Navgrah, Mahamrityunjay, vastu shanti, samagri guidance, Booking ID and quote before payment.",
    h1: "Online Hawan Booking Australia for Navgrah, Grah Shanti and NRI Havan",
    heroCopy: "For Indian and NRI families in Sydney, Melbourne, Brisbane, Perth, Adelaide and other Australian cities, Bandevi Astro supports online hawan booking enquiries for grah shanti, Navgrah, Mahamrityunjay, vastu shanti and family rituals with samagri guidance, Booking ID and quote before payment.",
    whatsapp: "https://wa.me/918676846484?text=Namaste%2C%20I%20am%20in%20Australia%20and%20need%20online%20hawan%20booking%20guidance.%20Please%20share%20process%2C%20timing%20and%20quote.",
    serviceType: [
      "online hawan booking Australia",
      "havan Australia",
      "grah shanti hawan Australia",
      "Navgrah hawan Australia",
      "Mahamrityunjay hawan Australia",
      "vastu shanti hawan Australia",
      "NRI hawan Australia",
      "quote before payment hawan booking",
    ],
    mainLinks: [
      ["hawan.html", "Main Hawan Hub", "Grah shanti, Navgrah, Mahamrityunjay, vastu shanti and family hawan process."],
      ["online-kundli-consultation-australia.html", "Kundli Consultation Australia", "Australia kundli, birth chart, dosh and muhurat consultation page."],
      ...hawanCountryLinks,
      ...hawanSamagriLinks,
    ],
    faq: [
      ["Can NRI families in Australia book hawan without paying first?", "Yes. The enquiry starts with purpose, location, timing and samagri discussion. The quote, Booking ID and payment option are confirmed before payment."],
      ["Which hawan details should be shared before the quote?", "Share Australia city, preferred date, family names, gotra if available, purpose such as grah shanti, Navgrah, Mahamrityunjay or vastu shanti, and whether live or proof update is needed."],
      ["Can Australia families request samagri guidance?", "Yes. Samagri requirements, safe local arrangement, proof preference and timing can be discussed before confirmation depending on the hawan type."],
    ],
  },
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

function uniqueLinks(links) {
  const seen = new Set();
  return links.filter(([href]) => {
    if (seen.has(href)) return false;
    seen.add(href);
    return true;
  });
}

function authorityLinks(target) {
  return uniqueLinks([
    ...commonAustraliaLinks,
    ...target.mainLinks,
    ...coreServiceLinks,
    ...trustLinks,
  ]);
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

function listItems(links) {
  return links.map(([href, label], index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: label,
    url: `${baseUrl}/${href}`,
  }));
}

function graphFor(target) {
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
          areaServed: ["Australia", "Sydney", "Melbourne", "Brisbane", "NRI families"],
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
      serviceType: target.serviceType,
      description: target.description,
      provider: { "@id": `${baseUrl}/#organization` },
      areaServed: {
        "@type": "Country",
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
        name: `Australia ${target.serviceKind} service paths`,
        itemListElement: offerItems(uniqueLinks([...commonAustraliaLinks, ...target.mainLinks, ...coreServiceLinks])),
      },
    },
    {
      "@type": "ItemList",
      "@id": `${url}#australia-service-authority-links`,
      name: `Australia ${target.serviceKind} authority links`,
      itemListElement: listItems(authorityLinks(target)),
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
          name: target.titleText,
          item: url,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: target.faq.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
    },
  ];
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

function linkCards(links) {
  return links.map(([href, label, copy]) => {
    return `          <a href="${href}"><strong>${label}</strong><span>${copy}</span></a>`;
  }).join("\n");
}

function authorityBlock(target) {
  return `${startMarker}
      <section class="section regional-links-section" aria-labelledby="${target.slug}-service-authority-title">
        <div class="section-heading">
          <p class="eyebrow">Australia service authority</p>
          <h2 id="${target.slug}-service-authority-title">${target.titleText} links for NRI families</h2>
          <p>This service authority block connects Australia search intent with country, city, related service, trust, office, Booking ID and tracking pages so visitors and crawlers can follow the complete path.</p>
        </div>
        <div class="regional-link-grid" aria-label="${target.titleText} authority links">
${linkCards(uniqueLinks([...commonAustraliaLinks, ...target.mainLinks, ...coreServiceLinks]))}
        </div>
      </section>

      <section class="section regional-process-section" aria-labelledby="${target.slug}-quote-payment-flow-title">
        <div class="section-heading">
          <p class="eyebrow">Quote before payment</p>
          <h2 id="${target.slug}-quote-payment-flow-title">Booking ID first, payment after clear quote</h2>
        </div>
        <ol class="regional-process-list">
          <li>Share Australia city, preferred date, time zone, service need and family details required for this service.</li>
          <li>Staff confirms the right service path, timing, proof option, quote and required details before payment.</li>
          <li>Create or confirm a Booking ID so the request remains trackable from enquiry to completion.</li>
          <li>Choose COD or online payment only after the service, quote, proof and delivery details are clear.</li>
          <li>Use Track Booking for staff notes, payment stage, live option, proof update or completion status.</li>
        </ol>
      </section>

      <section class="section international-trust-link-section" aria-labelledby="${target.slug}-service-trust-title">
        <div class="section-heading compact">
          <p class="eyebrow">Trust, proof and company routing</p>
          <h2 id="${target.slug}-service-trust-title">Australia service trust links before booking</h2>
          <p>Australia families can check company proof, office details, chairman profile, Booking ID and tracking pages before confirming ${target.serviceKind} service details.</p>
        </div>
        <div class="international-trust-link-grid" aria-label="${target.titleText} trust links">
${linkCards(trustLinks)}
        </div>
      </section>
      ${endMarker}`;
}

function stripOldHawanAuthority(html) {
  return html.replace(/\s*      <!-- Hawan Booking Authority SEO Upgrade 2026-07-19 Start -->[\s\S]*?<!-- Hawan Booking Authority SEO Upgrade 2026-07-19 End -->/, "");
}

function replaceRelatedSection(html, target) {
  const markerRe = new RegExp(`${escapeRegExp(startMarker)}[\\s\\S]*?${escapeRegExp(endMarker)}`);
  if (markerRe.test(html)) return html.replace(markerRe, authorityBlock(target));
  const relatedRe = new RegExp(`      <section class="section regional-links-section" aria-labelledby="${escapeRegExp(target.slug)}-html-links-title">[\\s\\S]*?      <\\/section>`);
  if (!relatedRe.test(html)) fail(`Could not find related links section in ${target.file}`);
  return html.replace(relatedRe, authorityBlock(target));
}

function updateVisibleFaq(html, target) {
  const details = target.faq.map(([question, answer], index) => {
    const open = index === 0 ? " open" : "";
    return `          <details${open}><summary>${question}</summary><p>${answer}</p></details>`;
  }).join("\n");
  const faqRe = new RegExp(`(<section class="section faq-section regional-faq-section" aria-labelledby="${escapeRegExp(target.slug)}-html-faq-title">[\\s\\S]*?<div class="faq-list">)[\\s\\S]*?(\\s*</div>\\s*</section>)`);
  if (!faqRe.test(html)) fail(`Could not find FAQ section in ${target.file}`);
  return html.replace(faqRe, `$1\n${details}\n$2`);
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
  html = html.replace(/<h1>[\s\S]*?<\/h1>/, `<h1>${target.h1}</h1>`);
  html = html.replace(/<p class="hero-copy">[\s\S]*?<\/p>/, `<p class="hero-copy">${target.heroCopy}</p>`);
  html = html.replace(/<a class="btn btn-primary" href="[^"]*">Ask on WhatsApp<\/a>/, `<a class="btn btn-primary" href="${target.whatsapp}">Ask on WhatsApp</a>`);
  html = html.replace(/<a class="floating-whatsapp" href="[^"]*" aria-label="Open WhatsApp chat">WA<\/a>/, `<a class="floating-whatsapp" href="${target.whatsapp}" aria-label="Open WhatsApp chat">WA</a>`);
  html = stripOldHawanAuthority(html);
  html = replaceJsonLd(html, graphFor(target));
  html = replaceRelatedSection(html, target);
  html = updateVisibleFaq(html, target);
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

function parseGraph(html, file) {
  const match = html.match(/<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/);
  if (!match) fail(`Missing JSON-LD in ${file}`);
  const data = JSON.parse(match[1]);
  return Array.isArray(data["@graph"]) ? data["@graph"] : [data];
}

function validate() {
  const allLinks = uniqueLinks(targets.flatMap((target) => authorityLinks(target)));
  const missing = allLinks.filter(([href]) => !fs.existsSync(filePath(href))).map(([href]) => href);
  if (missing.length) fail(`Missing linked files: ${missing.join(", ")}`);

  const rows = [];
  for (const target of targets) {
    const html = read(target.file);
    const graph = parseGraph(html, target.file);
    JSON.stringify(graph);
    const markerCount = (html.match(new RegExp(escapeRegExp(startMarker), "g")) || []).length;
    if (markerCount !== 1) fail(`Expected one marker in ${target.file}, found ${markerCount}`);
    if (html.includes("Hawan Booking Authority SEO Upgrade 2026-07-19")) fail(`Old hawan authority block still present in ${target.file}`);
    const itemList = graph.find((node) => String(node["@id"] || "").endsWith("#australia-service-authority-links"));
    if (!itemList || !Array.isArray(itemList.itemListElement)) fail(`Missing Australia service ItemList in ${target.file}`);
    const urls = itemList.itemListElement.map((item) => item.url);
    for (const required of [
      `${baseUrl}/online-pandit-australia.html`,
      `${baseUrl}/online-pandit-sydney.html`,
      `${baseUrl}/online-pandit-melbourne.html`,
      `${baseUrl}/online-pandit-brisbane.html`,
      `${baseUrl}/book-online.html`,
      `${baseUrl}/track-booking.html`,
    ]) {
      if (!urls.includes(required)) fail(`Missing structured URL ${required} in ${target.file}`);
    }
    const fake = fakeLinks.filter((link) => html.includes(link));
    if (fake.length) fail(`Fake Australia links in ${target.file}: ${fake.join(", ")}`);
    rows.push({
      file: target.file,
      markerCount,
      itemListCount: urls.length,
      hasAustraliaHub: urls.includes(`${baseUrl}/online-pandit-australia.html`),
      hasSydney: urls.includes(`${baseUrl}/online-pandit-sydney.html`),
      hasBooking: urls.includes(`${baseUrl}/book-online.html`),
      hasTracking: urls.includes(`${baseUrl}/track-booking.html`),
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
  const csvPath = path.join(seoDaily, `${today}-australia-service-authority-seo-upgrade.csv`);
  const mdPath = path.join(seoDaily, `${today}-australia-service-authority-seo-upgrade.md`);
  const csv = [
    "page,marker_count,item_list_count,has_australia_hub,has_sydney,has_booking,has_tracking",
    ...rows.map((row) => `${row.file},${row.markerCount},${row.itemListCount},${row.hasAustraliaHub},${row.hasSydney},${row.hasBooking},${row.hasTracking}`),
  ].join("\n") + "\n";
  const md = [
    `# Australia Service Authority SEO Upgrade - ${today}`,
    "",
    "- Upgraded Australia Kundli and Hawan service pages.",
    "- Added stronger metadata, Service schema, Australia service ItemList schema, authority links, trust links and Booking ID/payment flow.",
    "- Connected both service pages to Australia country, Sydney, Melbourne, Brisbane, booking and tracking pages.",
    "- Updated sitemap lastmod for both service URLs.",
    "",
    "## Targets",
    ...rows.map((row) => `- ${row.file} - service authority links: ${row.itemListCount}`),
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
