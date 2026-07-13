const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const site = "https://bandeviastro.com";
const today = "2026-07-13";

const pages = [
  {
    file: "online-pooja.html",
    url: `${site}/online-pooja.html`,
    id: "online-pooja-authority",
    serviceName: "online pooja",
    eyebrow: "Online pooja authority hub",
    title: "International online pooja pages connected to the main service",
    intro:
      "The main online pooja page now routes clients into exact service and country pages for Satyanarayan pooja, griha pravesh, Navgrah puja, NRI pooja and country-specific booking searches.",
    insertBefore: '<section class="detail-section service-faq-upgrade" aria-labelledby="pooja-faq-title">',
    related: [
      ["online-satyanarayan-pooja-usa.html", "Satyanarayan Pooja USA", "NRI Satyanarayan pooja page for USA families"],
      ["online-satyanarayan-pooja-uk.html", "Satyanarayan Pooja UK", "UK page for online Satyanarayan katha and pooja"],
      ["online-satyanarayan-pooja-canada.html", "Satyanarayan Pooja Canada", "Canada page for NRI Satyanarayan pooja searches"],
      ["online-griha-pravesh-pooja-usa.html", "Griha Pravesh Pooja USA", "Housewarming pooja and muhurat search page"],
      ["online-griha-pravesh-pooja-canada.html", "Griha Pravesh Pooja Canada", "Canada NRI griha pravesh pooja route"],
      ["online-navgrah-puja-usa.html", "Navgrah Puja USA", "Grah shanti and Navgrah puja route"],
      ["online-pooja-service-areas.html", "Service Areas Hub", "All country, city and service-intent pages"],
      ["proof-center.html", "Proof Center", "Company-stated facts, policies and booking proof"],
    ],
    trustCards: [
      ["Sankalp details first", "Clients share name, gotra if available, purpose, city and preferred timing before any quote is finalized."],
      ["Quote before payment", "The WhatsApp desk confirms service scope, date, proof option and Booking ID before payment."],
      ["Regional crawl path", "Country and service-intent pages link back here so Google can understand the main pooja service hierarchy."],
    ],
    faqs: [
      ["Which online pooja page should an NRI family open first?", "Start with the country or service page closest to the exact need, such as Satyanarayan pooja USA, griha pravesh pooja Canada or Navgrah puja USA. The main online pooja page remains the central service hub."],
      ["Can proof or live participation be discussed before payment?", "Yes. Proof, live option or completion update can be discussed on WhatsApp before quote and Booking ID confirmation, depending on the ritual type and timing."],
      ["Do service pages replace WhatsApp confirmation?", "No. The pages help clients and search engines understand the service. Final timing, quote, Booking ID and payment steps are confirmed through the booking process."],
    ],
  },
  {
    file: "kundli.html",
    url: `${site}/kundli.html`,
    id: "kundli-authority",
    serviceName: "kundli consultation",
    eyebrow: "Kundli authority hub",
    title: "Country-specific kundli consultation pages now support the main service",
    intro:
      "The kundli service now connects to USA, UK, Canada, Dubai and Australia consultation pages so users can enter from exact search intent while the main page remains the authority page.",
    insertBefore: '<section class="detail-section service-faq-upgrade" aria-labelledby="kundli-faq-title">',
    related: [
      ["online-kundli-consultation-usa.html", "Kundli Consultation USA", "USA astrology guidance page"],
      ["online-kundli-consultation-uk.html", "Kundli Consultation UK", "UK astrology guidance page"],
      ["online-kundli-consultation-canada.html", "Kundli Consultation Canada", "Canada astrology guidance page"],
      ["online-kundli-consultation-dubai.html", "Kundli Consultation Dubai", "Dubai and UAE kundli consultation page"],
      ["online-kundli-consultation-australia.html", "Kundli Consultation Australia", "Australia kundli consultation page"],
      ["online-marriage-pooja-usa.html", "Marriage Pooja USA", "Marriage pooja and kundli route for USA families"],
      ["gemstone-shop.html", "Gemstone Guidance", "Gemstone suitability route after kundli review"],
      ["proof-center.html", "Proof Center", "Company-stated facts, policies and booking proof"],
    ],
    trustCards: [
      ["Birth details clarity", "Clients are guided to share date, time, place and the main question before consultation options are suggested."],
      ["Remedy context", "Remedies may include mantra, pooja, discipline, donation, muhurat or gemstone guidance according to the consultation."],
      ["International entry pages", "Country pages build exact-match relevance while this page keeps the complete kundli process in one place."],
    ],
    faqs: [
      ["Which kundli page should a USA, UK or Dubai client use?", "Use the matching country page for the first enquiry, then the main kundli page explains the complete consultation process and booking flow."],
      ["Can kundli consultation include marriage and gemstone questions?", "Yes. Clients can ask about marriage, career, dosh, muhurat and gemstone suitability, with recommendations explained as faith-based guidance."],
      ["What happens if birth time is uncertain?", "Share the approximate time and location. The consultant can explain what can and cannot be reviewed reliably before the quote is confirmed."],
    ],
  },
  {
    file: "hawan.html",
    url: `${site}/hawan.html`,
    id: "hawan-authority",
    serviceName: "hawan booking",
    eyebrow: "Hawan authority hub",
    title: "Hawan, Navgrah and Mahamrityunjay service pages connected to one hub",
    intro:
      "The hawan page now links to USA, UK, Canada and Australia hawan booking pages plus Navgrah and Mahamrityunjay intent pages for stronger ritual-service relevance.",
    insertBefore: '<section class="detail-section service-faq-upgrade" aria-labelledby="hawan-faq-title">',
    related: [
      ["online-hawan-booking-usa.html", "Hawan Booking USA", "USA NRI hawan booking page"],
      ["online-hawan-booking-uk.html", "Hawan Booking UK", "UK NRI hawan booking page"],
      ["online-hawan-booking-canada.html", "Hawan Booking Canada", "Canada NRI hawan booking page"],
      ["online-hawan-booking-australia.html", "Hawan Booking Australia", "Australia NRI hawan booking page"],
      ["online-navgrah-puja-usa.html", "Navgrah Puja USA", "Grah shanti and Navgrah puja route"],
      ["online-mahamrityunjay-jaap-usa.html", "Mahamrityunjay Jaap USA", "Mahamrityunjay jaap and hawan route"],
      ["online-pooja.html", "Online Pooja", "Main pooja service page"],
      ["proof-center.html", "Proof Center", "Company-stated facts, policies and booking proof"],
    ],
    trustCards: [
      ["Purpose before ritual", "Clients share whether the need is grah shanti, Navgrah, Mahamrityunjay, vastu shanti or family wellbeing."],
      ["Samagri and proof planning", "The desk confirms samagri need, timing, proof or live preference and quote before payment."],
      ["Service-specific discovery", "Hawan and jaap pages support exact searches while this page carries the complete ritual explanation."],
    ],
    faqs: [
      ["Which hawan page should an NRI client open?", "Use the country page for the first enquiry, such as hawan booking USA, UK, Canada or Australia, then use the main hawan page for the full process."],
      ["Can Navgrah puja or Mahamrityunjay jaap be connected with hawan?", "Yes. The exact recommendation depends on the concern, timing and consultation details confirmed before booking."],
      ["Is samagri included automatically?", "Samagri needs are discussed during the quote stage. The final scope, proof option and Booking ID are confirmed before payment."],
    ],
  },
  {
    file: "gemstone-shop.html",
    url: `${site}/gemstone-shop.html`,
    id: "gemstone-authority",
    serviceName: "gemstone consultation",
    eyebrow: "Gemstone authority hub",
    title: "Country gemstone consultation pages support the shop and guidance flow",
    intro:
      "Gemstone consultation pages for Dubai, USA, UK and Canada now point back to the main gemstone shop so clients can understand suitability, certificate preference, ring or pendant options and order support.",
    insertBefore: '<section class="section faq-section">',
    related: [
      ["online-gemstone-consultation-dubai.html", "Gemstone Consultation Dubai", "Dubai and UAE Jyotish gemstone page"],
      ["online-gemstone-consultation-usa.html", "Gemstone Consultation USA", "USA gemstone consultation page"],
      ["online-gemstone-consultation-uk.html", "Gemstone Consultation UK", "UK gemstone consultation page"],
      ["online-gemstone-consultation-canada.html", "Gemstone Consultation Canada", "Canada gemstone consultation page"],
      ["kundli.html", "Kundli Consultation", "Birth-chart guidance before astrological wearing advice"],
      ["online-kundli-consultation-dubai.html", "Kundli Dubai", "Dubai kundli route before gemstone review"],
      ["proof-center.html", "Proof Center", "Company-stated facts, policies and booking proof"],
      ["refund-policy.html", "Refund Policy", "Policy page for order expectations"],
    ],
    trustCards: [
      ["Suitability review", "Astrological gemstone wearing guidance should be discussed after birth details and suitability review."],
      ["Certificate preference", "Clients can discuss natural stone, certificate preference, carat, metal and ring or pendant format before order."],
      ["Consultation to order", "Country pages capture intent while this page explains products, quote, Booking ID and staff follow-up."],
    ],
    faqs: [
      ["Can a client buy a gemstone without kundli review?", "A client can enquire, but astrological wearing guidance is best discussed after suitability review using birth details and the concern."],
      ["Do country gemstone pages replace the shop page?", "No. Country pages help clients start from Dubai, USA, UK or Canada searches, while the shop page explains product, quote and order support."],
      ["Can certificate preference be discussed before order?", "Yes. Certificate preference, stone type, size, metal and setting can be discussed before quote and Booking ID confirmation."],
    ],
  },
  {
    file: "vastu-muhurat.html",
    url: `${site}/vastu-muhurat.html`,
    id: "vastu-authority",
    serviceName: "vastu and muhurat consultation",
    eyebrow: "Vastu and muhurat authority hub",
    title: "Vastu, muhurat and griha pravesh pages connected to one service hub",
    intro:
      "Vastu consultation pages for Dubai, USA and UK plus griha pravesh pages for USA and Canada now point back to the main vastu and muhurat service page.",
    insertBefore: '<section class="cta-section">',
    related: [
      ["online-vastu-consultation-dubai.html", "Vastu Consultation Dubai", "Dubai and UAE vastu consultation page"],
      ["online-vastu-consultation-usa.html", "Vastu Consultation USA", "USA home and office vastu page"],
      ["online-vastu-consultation-uk.html", "Vastu Consultation UK", "UK home and office vastu page"],
      ["online-griha-pravesh-pooja-usa.html", "Griha Pravesh Pooja USA", "USA housewarming pooja and muhurat route"],
      ["online-griha-pravesh-pooja-canada.html", "Griha Pravesh Pooja Canada", "Canada housewarming pooja and muhurat route"],
      ["online-pooja.html", "Online Pooja", "Main pooja service page"],
      ["online-pooja-service-areas.html", "Service Areas Hub", "All country, city and service-intent pages"],
      ["proof-center.html", "Proof Center", "Company-stated facts, policies and booking proof"],
    ],
    trustCards: [
      ["Space and purpose", "Clients share home, shop, office, griha pravesh or business launch details before guidance is suggested."],
      ["Muhurat planning", "Preferred date range, city and purpose help narrow auspicious timing guidance before quote confirmation."],
      ["Country-specific entry", "Vastu and griha pravesh pages support exact international searches while this page explains the full service."],
    ],
    faqs: [
      ["Can vastu guidance be handled online for USA, UK or Dubai clients?", "Yes. Clients can share city, property type, direction details, floor plan if available and the concern before quote confirmation."],
      ["Can griha pravesh pooja and muhurat be planned together?", "Yes. The enquiry can include housewarming pooja, muhurat timing and related online pooja guidance."],
      ["Is vastu guidance a guaranteed result service?", "No. Vastu and muhurat guidance is faith-based and practical spiritual guidance. It does not replace legal, safety, financial or structural advice."],
    ],
  },
];

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function write(file, data) {
  fs.writeFileSync(path.join(root, file), data, "utf8");
}

function escapeHtml(value) {
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function jsonLd(graph) {
  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph }, null, 8)
    .split("\n")
    .map((line) => `      ${line}`)
    .join("\n");
}

function updateJsonLd(html, page) {
  return html.replace(/<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/, (full, rawJson) => {
    const data = JSON.parse(rawJson);
    const graph = Array.isArray(data["@graph"]) ? data["@graph"] : [];
    const org = graph.find((item) => item["@id"] === `${site}/#organization`);
    if (org?.contactPoint?.[0]) {
      org.contactPoint[0].areaServed = ["IN", "US", "GB", "CA", "AE", "AU", "SG", "QA", "OM", "SA"];
    }
    const service = graph.find((item) => item["@id"] === `${page.url}#service`);
    if (service) {
      service.areaServed = [
        "India",
        "United States",
        "United Kingdom",
        "Canada",
        "United Arab Emirates",
        "Australia",
        "Singapore",
        "Qatar",
        "Oman",
        "Saudi Arabia",
        "NRI families",
      ];
      service.availableChannel = {
        "@type": "ServiceChannel",
        serviceUrl: page.url,
        servicePhone: "+918676846484",
      };
      service.hasOfferCatalog = {
        "@type": "OfferCatalog",
        name: `${page.serviceName} related international pages`,
        itemListElement: page.related.slice(0, 6).map(([href, title], index) => ({
          "@type": "Offer",
          position: index + 1,
          itemOffered: {
            "@type": "Service",
            name: title,
            url: `${site}/${href}`,
          },
        })),
      };
    }
    const itemList = {
      "@type": "ItemList",
      "@id": `${page.url}#related-service-pages`,
      name: `${page.serviceName} related country and intent pages`,
      itemListElement: page.related.map(([href, title], index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: title,
        url: `${site}/${href}`,
      })),
    };
    const faqPage = {
      "@type": "FAQPage",
      "@id": `${page.url}#authority-faq`,
      mainEntity: page.faqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
    };
    replaceGraphItem(graph, itemList);
    replaceGraphItem(graph, faqPage);
    data["@graph"] = graph;
    return `<script type="application/ld+json">\n${jsonLd(data["@graph"])}\n    </script>`;
  });
}

function replaceGraphItem(graph, item) {
  const index = graph.findIndex((entry) => entry["@id"] === item["@id"]);
  if (index >= 0) graph[index] = item;
  else graph.push(item);
}

function renderAuthority(page) {
  const links = page.related
    .map(([href, title, copy]) => `          <a href="${href}"><strong>${escapeHtml(title)}</strong><span>${escapeHtml(copy)}</span></a>`)
    .join("\n");
  const cards = page.trustCards
    .map(([title, copy]) => `          <article class="regional-card"><h3>${escapeHtml(title)}</h3><p>${escapeHtml(copy)}</p></article>`)
    .join("\n");
  const faqs = page.faqs
    .map(([question, answer], index) => `          <details${index === 0 ? " open" : ""}><summary>${escapeHtml(question)}</summary><p>${escapeHtml(answer)}</p></details>`)
    .join("\n");
  return `      <!-- Core Service Authority Upgrade Start -->
      <section class="detail-section core-service-authority-section" aria-labelledby="${page.id}-title">
        <div class="section-heading compact">
          <p class="eyebrow">${escapeHtml(page.eyebrow)}</p>
          <h2 id="${page.id}-title">${escapeHtml(page.title)}</h2>
          <p>${escapeHtml(page.intro)}</p>
        </div>
        <div class="regional-link-grid" aria-label="${escapeHtml(page.serviceName)} related pages">
${links}
        </div>
      </section>

      <section class="detail-section core-service-authority-section" aria-labelledby="${page.id}-trust-title">
        <div class="section-heading compact">
          <p class="eyebrow">Booking trust and crawl clarity</p>
          <h2 id="${page.id}-trust-title">Why this page stays the main ${escapeHtml(page.serviceName)} hub</h2>
        </div>
        <div class="regional-card-grid">
${cards}
        </div>
      </section>

      <section class="detail-section service-faq-upgrade core-service-faq-section" aria-labelledby="${page.id}-faq-title">
        <div class="section-heading compact">
          <p class="eyebrow">International ${escapeHtml(page.serviceName)} FAQ</p>
          <h2 id="${page.id}-faq-title">Questions clients ask before choosing the right page</h2>
        </div>
        <div class="faq-list">
${faqs}
        </div>
      </section>
      <!-- Core Service Authority Upgrade End -->`;
}

function updateHtml(page) {
  let html = read(page.file);
  html = updateJsonLd(html, page);
  html = html.replace(/\r?\n      <!-- Core Service Authority Upgrade Start -->[\s\S]*?      <!-- Core Service Authority Upgrade End -->\r?\n/, "\n");
  const authority = renderAuthority(page);
  if (!html.includes(page.insertBefore)) {
    throw new Error(`${page.file}: insert point not found`);
  }
  html = html.replace(page.insertBefore, `${authority}\n${page.insertBefore}`);
  write(page.file, html);
}

function updateSitemap() {
  let sitemap = read("sitemap.xml");
  for (const page of pages) {
    const loc = page.url.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp(`(<loc>${loc}<\\/loc>\\s*<lastmod>)([^<]+)(<\\/lastmod>)`);
    sitemap = sitemap.replace(re, `$1${today}$3`);
  }
  write("sitemap.xml", sitemap);
}

for (const page of pages) updateHtml(page);
updateSitemap();

console.log(`Strengthened ${pages.length} core service pages and updated sitemap lastmod.`);
