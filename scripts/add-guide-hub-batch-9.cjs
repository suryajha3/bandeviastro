const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const site = "https://bandeviastro.com";
const today = "2026-07-13";
const heroImage = "assets/spiritual-consultation-hero.jpg";

const hubPages = [
  hub({
    slug: "pooja-guides.html",
    title: "Pooja Guides | Vidhi, Samagri & NRI Booking Help",
    description: "Pooja guides for Satyanarayan, Navgrah, Mahamrityunjay, griha pravesh and NRI online pooja booking routes.",
    h1: "Pooja guides for vidhi, samagri and online booking",
    eyebrow: "Pooja guide library",
    intro: "Use this pooja guide library to move from educational planning to the right online pooja, hawan, jaap or NRI booking page.",
    topics: ["Satyanarayan pooja vidhi and samagri", "Navgrah puja and grah shanti", "Mahamrityunjay jaap planning", "Griha pravesh pooja checklist", "NRI online pooja process"],
    primaryLinks: [
      ["satyanarayan-pooja-vidhi-samagri.html", "Satyanarayan Pooja Vidhi & Samagri", "Checklist, sankalp details and NRI Satyanarayan booking routes"],
      ["navgrah-puja-benefits-vidhi.html", "Navgrah Puja Benefits & Vidhi", "Grah shanti planning and related hawan pages"],
      ["mahamrityunjay-jaap-benefits.html", "Mahamrityunjay Jaap Benefits", "Faith-based jaap planning and hawan support routes"],
      ["griha-pravesh-pooja-checklist.html", "Griha Pravesh Pooja Checklist", "Housewarming pooja, muhurat and NRI planning checklist"],
      ["online-pooja-for-nri-family-guide.html", "Online Pooja for NRI Family", "Time zone, sankalp and proof planning guide"],
    ],
    serviceLinks: [
      ["online-pooja.html", "Online Pooja", "Main online pooja service hub"],
      ["hawan.html", "Hawan Services", "Main hawan, havan and jaap hub"],
      ["online-satyanarayan-pooja-usa.html", "Satyanarayan Pooja USA", "USA NRI Satyanarayan page"],
      ["online-navgrah-puja-usa.html", "Navgrah Puja USA", "USA grah shanti page"],
      ["online-mahamrityunjay-jaap-usa.html", "Mahamrityunjay Jaap USA", "USA NRI jaap page"],
      ["online-griha-pravesh-pooja-canada.html", "Griha Pravesh Canada", "Canada housewarming pooja route"],
    ],
    faq: [
      ["Which pooja guide should I read first?", "Start with the guide closest to the ritual name, such as Satyanarayan, Navgrah, Mahamrityunjay or griha pravesh. NRI families can also read the NRI online pooja guide."],
      ["Do guide pages replace booking confirmation?", "No. Guide pages are educational. Timing, quote, proof option and Booking ID are confirmed through WhatsApp before payment."],
      ["Why are pooja guides linked to service pages?", "The guides help search users understand the topic, then route serious enquiries to the correct booking page."],
    ],
  }),
  hub({
    slug: "kundli-astrology-guides.html",
    title: "Kundli & Astrology Guides | Marriage, Dosh & Remedies",
    description: "Kundli and astrology guides for marriage matching, consultation routes, dosh questions and NRI astrology pages.",
    h1: "Kundli and astrology guides for marriage and remedies",
    eyebrow: "Kundli guide library",
    intro: "This hub connects kundli matching, marriage astrology, country consultation pages and related spiritual service pages.",
    topics: ["Kundli matching for marriage", "Birth details checklist", "Dosh and remedy questions", "Country consultation routes", "Marriage pooja and muhurat guidance"],
    primaryLinks: [
      ["kundli-matching-for-marriage-guide.html", "Kundli Matching for Marriage Guide", "Birth details checklist and marriage question planning"],
      ["kundli.html", "Kundli Consultation", "Main kundli service hub"],
      ["online-marriage-pooja-usa.html", "Marriage Pooja USA", "Marriage pooja and kundli route for USA families"],
      ["which-gemstone-is-suitable-by-kundli.html", "Gemstone by Kundli Guide", "Gemstone suitability guide connected to birth chart review"],
    ],
    serviceLinks: [
      ["online-kundli-consultation-usa.html", "Kundli Consultation USA", "USA astrology guidance page"],
      ["online-kundli-consultation-uk.html", "Kundli Consultation UK", "UK astrology guidance page"],
      ["online-kundli-consultation-canada.html", "Kundli Consultation Canada", "Canada astrology guidance page"],
      ["online-kundli-consultation-dubai.html", "Kundli Consultation Dubai", "Dubai and UAE kundli page"],
      ["online-kundli-consultation-australia.html", "Kundli Consultation Australia", "Australia kundli page"],
      ["gemstone-shop.html", "Gemstone Guidance", "Gemstone review after kundli suitability"],
    ],
    faq: [
      ["What details are needed before a kundli consultation?", "Birth date, birth time, birth place and the main question are usually requested before consultation options are confirmed."],
      ["Can marriage matching and gemstone questions be connected?", "Yes. Marriage, dosh, muhurat and gemstone suitability can be discussed together when relevant."],
      ["Are kundli guides final predictions?", "No. Guides are educational and faith-based. Final consultation scope and quote are confirmed before payment."],
    ],
  }),
  hub({
    slug: "gemstone-vastu-guides.html",
    title: "Gemstone & Vastu Guides | Kundli Suitability and Home Direction",
    description: "Gemstone and vastu guide hub for kundli gemstone suitability, home entrance vastu and international consultation pages.",
    h1: "Gemstone and vastu guides for suitability and home planning",
    eyebrow: "Gemstone and vastu library",
    intro: "This hub connects gemstone suitability, kundli review, vastu entrance planning, griha pravesh and country-specific consultation pages.",
    topics: ["Gemstone suitability by kundli", "Certificate and ring preference", "Home entrance vastu", "Vastu consultation by country", "Griha pravesh and muhurat planning"],
    primaryLinks: [
      ["which-gemstone-is-suitable-by-kundli.html", "Which Gemstone Is Suitable by Kundli?", "Gemstone suitability guide before order"],
      ["vastu-for-home-entrance-guide.html", "Vastu for Home Entrance Guide", "Direction and layout preparation guide"],
      ["griha-pravesh-pooja-checklist.html", "Griha Pravesh Checklist", "Housewarming pooja and muhurat checklist"],
      ["gemstone-shop.html", "Gemstone Shop", "Main gemstone guidance and order hub"],
      ["vastu-muhurat.html", "Vastu and Muhurat", "Main vastu and muhurat service page"],
    ],
    serviceLinks: [
      ["online-gemstone-consultation-dubai.html", "Gemstone Consultation Dubai", "Dubai and UAE gemstone page"],
      ["online-gemstone-consultation-usa.html", "Gemstone Consultation USA", "USA gemstone page"],
      ["online-gemstone-consultation-uk.html", "Gemstone Consultation UK", "UK gemstone page"],
      ["online-gemstone-consultation-canada.html", "Gemstone Consultation Canada", "Canada gemstone page"],
      ["online-vastu-consultation-dubai.html", "Vastu Consultation Dubai", "Dubai and UAE vastu page"],
      ["online-vastu-consultation-usa.html", "Vastu Consultation USA", "USA vastu page"],
      ["online-vastu-consultation-uk.html", "Vastu Consultation UK", "UK vastu page"],
    ],
    faq: [
      ["Should gemstone selection start with a guide or consultation?", "The guide explains what details to prepare. Astrological wearing guidance should be discussed after kundli suitability review."],
      ["Can vastu and griha pravesh be linked?", "Yes. Vastu, muhurat and griha pravesh pooja questions can be planned together when relevant."],
      ["Are vastu guides structural advice?", "No. Vastu guides are faith-based and practical spiritual guidance, not structural, legal or safety advice."],
    ],
  }),
  hub({
    slug: "nri-online-pooja-guides.html",
    title: "NRI Online Pooja Guides | USA, UK, Canada, Dubai & Australia",
    description: "NRI online pooja guide hub for USA, UK, Canada, Dubai, Australia and global service-area booking pages.",
    h1: "NRI online pooja guides for global families",
    eyebrow: "NRI guide library",
    intro: "This hub helps NRI families choose the right country, city, service and guide page before sending a WhatsApp enquiry.",
    topics: ["NRI online pooja flow", "Country and city selection", "Time zone planning", "Sankalp and proof preference", "Service-specific booking routes"],
    primaryLinks: [
      ["online-pooja-for-nri-family-guide.html", "Online Pooja for NRI Family Guide", "Time zone, sankalp and proof planning guide"],
      ["online-pooja-service-areas.html", "Service Areas Hub", "All country, city and service-intent pages"],
      ["pooja-guides.html", "Pooja Guides", "Pooja guide library"],
      ["kundli-astrology-guides.html", "Kundli and Astrology Guides", "Kundli guide library"],
      ["gemstone-vastu-guides.html", "Gemstone and Vastu Guides", "Gemstone and vastu library"],
    ],
    serviceLinks: [
      ["online-pandit-usa.html", "Online Pandit USA", "USA country service page"],
      ["online-pandit-uk.html", "Online Pandit UK", "UK country service page"],
      ["online-pandit-canada.html", "Online Pandit Canada", "Canada country service page"],
      ["online-pandit-dubai-uae.html", "Online Pandit Dubai UAE", "Dubai and UAE service page"],
      ["online-pandit-australia.html", "Online Pandit Australia", "Australia country service page"],
      ["online-pandit-singapore.html", "Online Pandit Singapore", "Singapore service page"],
      ["online-pandit-qatar.html", "Online Pandit Qatar", "Qatar service page"],
      ["online-pandit-saudi-arabia.html", "Online Pandit Saudi Arabia", "Saudi Arabia service page"],
    ],
    faq: [
      ["Which country page should an NRI family open?", "Open the page closest to the country or city where the family is based, then send service name, time zone and sankalp details on WhatsApp."],
      ["Can family members join from different countries?", "Yes. Share the countries and time zones before quote confirmation so timing can be planned."],
      ["Do NRI guides replace Search Console indexing?", "No. Guides improve crawl structure and user routing. Search Console indexing can continue after quota reset."],
    ],
  }),
];

function hub(item) {
  return {
    ...item,
    lang: "en-IN",
    locale: "en_IN",
  };
}

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

function whatsAppUrl(text) {
  return `https://wa.me/918676846484?text=${encodeURIComponent(text)}`;
}

function slugId(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function renderHeader() {
  return `<header class="site-header premium-header international-header" aria-label="Main header">
  <div class="header-topline international-topline">
    <span><strong>Global desk</strong> India, UAE, USA, UK, Canada, Australia, Singapore and Gulf NRI families</span>
    <a href="track-booking.html">Track Booking ID</a>
    <span>Hindi and English | Quote before payment | Proof where applicable</span>
  </div>
  <div class="header-main">
    <a class="brand international-brand" href="index.html#top" aria-label="Bandevi Astro home">
      <span class="brand-mark" aria-hidden="true">BA</span>
      <span class="brand-copy">
        <strong>Bandevi Astro</strong>
        <small>Pdt. Jyotishacharya Kumodanand Jha (Shastri)</small>
        <em>Since 1981 Jyotish, Pooja and Gemstone Desk</em>
      </span>
    </a>
    <button class="menu-toggle" id="menuToggle" type="button" aria-expanded="false" aria-controls="primaryNav" aria-label="Open menu">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <strong>Menu</strong>
    </button>
    <nav class="main-nav international-nav" id="primaryNav" aria-label="Primary navigation">
      <a href="pooja-guides.html"><strong>Pooja</strong><span>Guides</span></a>
      <a href="kundli-astrology-guides.html"><strong>Kundli</strong><span>Guides</span></a>
      <a href="gemstone-vastu-guides.html"><strong>Gems</strong><span>Vastu</span></a>
      <a href="nri-online-pooja-guides.html"><strong>NRI</strong><span>Global</span></a>
      <a href="online-pooja-service-areas.html"><strong>Areas</strong><span>Pages</span></a>
      <a href="book-online.html"><strong>Book</strong><span>ID</span></a>
    </nav>
    <div class="header-actions" aria-label="Quick contact actions">
      <a class="header-action login" href="login.html" aria-label="Open client login"><span>Client</span><strong>Login</strong></a>
      <a class="header-action whatsapp" href="https://wa.me/918676846484" aria-label="Open WhatsApp enquiry"><span>WA</span><strong>WhatsApp</strong></a>
      <a class="header-action primary" href="book-online.html" aria-label="Create booking ID"><span>Book</span><strong>Now</strong></a>
    </div>
  </div>
  <div class="header-trust-row international-service-rail" aria-label="Guide hub shortcuts">
    <a href="pooja-guides.html"><strong>Pooja Guides</strong><span>Vidhi, samagri, jaap</span></a>
    <a href="kundli-astrology-guides.html"><strong>Kundli Guides</strong><span>Marriage, dosh</span></a>
    <a href="gemstone-vastu-guides.html"><strong>Gem + Vastu</strong><span>Suitability, entrance</span></a>
    <a href="nri-online-pooja-guides.html"><strong>NRI Guides</strong><span>USA, UK, Canada, Dubai</span></a>
  </div>
</header>`;
}

function renderFooter() {
  const hubLinks = hubPages.map((page) => `      <a href="${page.slug}">${escapeHtml(page.h1)}</a>`).join("\n");
  return `<footer class="site-footer premium-footer">
  <section class="footer-cta" aria-label="Booking call to action">
    <div>
      <p class="eyebrow">Premium spiritual service</p>
      <h2>Read the guide hub, choose the exact page, then confirm on WhatsApp.</h2>
      <p>Guide hubs organize pooja, kundli, gemstone, vastu and NRI service pages so clients can move from learning to booking with a clear Booking ID.</p>
    </div>
    <div class="footer-cta-actions">
      <a class="btn btn-primary" href="book-online.html">Create Booking ID</a>
      <a class="btn btn-secondary" href="track-booking.html">Track Booking</a>
    </div>
  </section>
  <div class="footer-inner">
    <div class="footer-brand">
      <span class="footer-brand-mark">BA</span>
      <strong>Pdt. Jyotishacharya Kumodanand Jha (Shastri)</strong>
      <p>Jyotishacharya, Vedacharya and Shastri-led guidance for online pooja, hawan, kundli, hast rekha, gemstones, vastu and muhurat support since 1981.</p>
      <div class="footer-badges" aria-label="Trust highlights">
        <span>Since 1981</span>
        <span>Jyotishacharya</span>
        <span>Vedacharya</span>
      </div>
    </div>
    <nav class="footer-column" aria-label="Guide hubs">
      <h2>Guide Hubs</h2>
${hubLinks}
    </nav>
    <nav class="footer-column" aria-label="Footer services">
      <h2>Services</h2>
      <a href="online-pooja.html">Online Pooja</a>
      <a href="hawan.html">Hawan / Havan</a>
      <a href="kundli.html">Kundli Consultation</a>
      <a href="vastu-muhurat.html">Vastu & Muhurat</a>
      <a href="gemstone-shop.html">Gemstone Guidance</a>
      <a href="online-pooja-service-areas.html">Service Areas</a>
    </nav>
    <nav class="footer-column" aria-label="Trust links">
      <h2>Trust</h2>
      <a href="proof-center.html">Proof Center</a>
      <a href="reviews-testimonials.html">Reviews</a>
      <a href="company-profile.html">Company Profile</a>
      <a href="global-offices.html">Global Offices</a>
      <a href="surya-kant-jha-chairman-networth-travel-agent.html">Chairman Profile</a>
    </nav>
    <div class="footer-contact-card" aria-label="Contact details">
      <h2>Contact</h2>
      <p>For urgent enquiry, send service name, city/country, preferred date and concern on WhatsApp.</p>
      <a class="footer-contact-link" href="https://wa.me/918676846484">WhatsApp: +91 86768 46484 / +91 62046 41845</a>
      <a class="footer-contact-link" href="mailto:bandeviglobalgroup@gmail.com">bandeviglobalgroup@gmail.com</a>
      <p class="footer-note">Spiritual services are faith-based and do not replace medical, legal, financial or safety advice.</p>
    </div>
  </div>
  <div class="footer-bottom">
    <p>Copyright <span id="year"></span> Bandevi Astro. Clear quote before payment. Privacy, cancellation, refund and shipping terms apply.</p>
    <div class="footer-bottom-links">
      <a href="terms-and-conditions.html">Terms</a>
      <a href="privacy-policy.html">Privacy</a>
      <a href="cancellation-policy.html">Cancellation</a>
      <a href="refund-policy.html">Refund</a>
      <a href="shipping-policy.html">Shipping</a>
    </div>
  </div>
</footer>`;
}

function allLinks(hubPage) {
  const seen = new Set();
  return [...hubPage.primaryLinks, ...hubPage.serviceLinks].filter(([href]) => {
    if (seen.has(href)) return false;
    seen.add(href);
    return true;
  });
}

function renderJsonLd(page) {
  const url = `${site}/${page.slug}`;
  const related = allLinks(page);
  return jsonLd([
    {
      "@type": "Organization",
      "@id": `${site}/#organization`,
      name: "Bandevi Astro",
      url: `${site}/`,
      email: "bandeviglobalgroup@gmail.com",
      telephone: ["+918676846484", "+916204641845"],
      founder: { "@type": "Person", name: "Pdt. Jyotishacharya Kumodanand Jha (Shastri)" },
    },
    {
      "@type": "CollectionPage",
      "@id": `${url}#collection`,
      url,
      name: page.title,
      description: page.description,
      isPartOf: { "@id": `${site}/#website` },
      inLanguage: page.lang,
      mainEntity: { "@id": `${url}#hub-list` },
    },
    {
      "@type": "ItemList",
      "@id": `${url}#hub-list`,
      name: `${page.h1} links`,
      itemListElement: related.map(([href, title], index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: title,
        url: `${site}/${href}`,
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${site}/` },
        { "@type": "ListItem", position: 2, name: "Guide Hubs", item: `${site}/#guide-hubs` },
        { "@type": "ListItem", position: 3, name: page.h1, item: url },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: page.faq.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ]);
}

function renderHubPage(page) {
  const url = `${site}/${page.slug}`;
  const id = slugId(page.slug);
  const topics = page.topics.map((topic) => `          <span>${escapeHtml(topic)}</span>`).join("\n");
  const primary = page.primaryLinks.map(([href, title, copy]) => `          <a href="${href}"><strong>${escapeHtml(title)}</strong><span>${escapeHtml(copy)}</span></a>`).join("\n");
  const services = page.serviceLinks.map(([href, title, copy]) => `          <a href="${href}"><strong>${escapeHtml(title)}</strong><span>${escapeHtml(copy)}</span></a>`).join("\n");
  const faq = page.faq.map(([question, answer], index) => `          <details${index === 0 ? " open" : ""}><summary>${escapeHtml(question)}</summary><p>${escapeHtml(answer)}</p></details>`).join("\n");
  const whatsapp = whatsAppUrl(`Namaste, I opened ${page.h1}. Please guide me to the correct service page and quote.`);
  return `<!DOCTYPE html>
<html lang="${page.lang}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(page.title)}</title>
    <meta name="description" content="${escapeHtml(page.description)}" />
    <link rel="canonical" href="${url}" />
    <link rel="alternate" hreflang="en-IN" href="${url}" />
    <link rel="alternate" hreflang="x-default" href="${url}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Bandevi Astro" />
    <meta property="og:locale" content="${page.locale}" />
    <meta property="og:title" content="${escapeHtml(page.title)}" />
    <meta property="og:description" content="${escapeHtml(page.description)}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${site}/${heroImage}" />
    <meta property="og:image:alt" content="${escapeHtml(page.h1)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(page.title)}" />
    <meta name="twitter:description" content="${escapeHtml(page.description)}" />
    <meta name="twitter:image" content="${site}/${heroImage}" />
    <script type="application/ld+json">
${renderJsonLd(page)}
    </script>
    <link rel="preload" href="${heroImage}" as="image" />
    <link rel="icon" type="image/png" href="${heroImage}" />
    <link rel="apple-touch-icon" href="${heroImage}" />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
${renderHeader()}

    <main id="top" class="regional-page-main guide-hub-main">
      <section class="hero regional-hero" aria-label="${escapeHtml(page.h1)}">
        <img class="hero-slide-image" src="${heroImage}" alt="${escapeHtml(page.h1)}" />
        <div class="hero-shade" aria-hidden="true"></div>
        <div class="hero-content">
          <p class="eyebrow">${escapeHtml(page.eyebrow)}</p>
          <h1>${escapeHtml(page.h1)}</h1>
          <p class="hero-copy">${escapeHtml(page.intro)}</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="${whatsapp}">Ask on WhatsApp</a>
            <a class="btn btn-secondary" href="online-pooja-service-areas.html">Open Service Areas</a>
          </div>
          <div class="hero-proof-row" aria-label="Guide hub highlights">
            <span>Guide library</span>
            <span>Service routing</span>
            <span>Booking ID before payment</span>
          </div>
        </div>
      </section>

      <section class="section regional-intent-section" aria-labelledby="${id}-topics-title">
        <div class="section-heading">
          <p class="eyebrow">Topics covered</p>
          <h2 id="${id}-topics-title">Use this hub to choose the correct guide path</h2>
          <p>Each topic links users from research intent to the right service or booking page.</p>
        </div>
        <div class="regional-keyword-grid" aria-label="${escapeHtml(page.h1)} topics">
${topics}
        </div>
      </section>

      <section class="section regional-links-section" aria-labelledby="${id}-guides-title">
        <div class="section-heading">
          <p class="eyebrow">Guide pages</p>
          <h2 id="${id}-guides-title">Read these guides first</h2>
        </div>
        <div class="regional-link-grid">
${primary}
        </div>
      </section>

      <section class="section regional-links-section" aria-labelledby="${id}-services-title">
        <div class="section-heading">
          <p class="eyebrow">Service pages</p>
          <h2 id="${id}-services-title">Move from guide to booking route</h2>
        </div>
        <div class="regional-link-grid">
${services}
        </div>
      </section>

      <section class="section faq-section regional-faq-section" aria-labelledby="${id}-faq-title">
        <div class="section-heading">
          <p class="eyebrow">Guide hub FAQ</p>
          <h2 id="${id}-faq-title">${escapeHtml(page.h1)} FAQ</h2>
        </div>
        <div class="faq-list">
${faq}
        </div>
      </section>
    </main>

    <a class="floating-whatsapp" href="${whatsapp}" aria-label="Open WhatsApp chat">WA</a>

${renderFooter()}

    <script src="site-config.js"></script>
    <script src="script.js"></script>
  </body>
</html>
`;
}

function renderHubCards() {
  return hubPages
    .map((page) => `          <a href="${page.slug}"><strong>${escapeHtml(page.h1)}</strong><span>${escapeHtml(page.description)}</span></a>`)
    .join("\n");
}

function renderHubSection() {
  return `      <!-- Guide Hub SEO Section Start -->
      <section class="section guide-hub-index-section" id="guide-hubs" aria-labelledby="guide-hubs-title">
        <div class="section-heading">
          <p class="eyebrow">Guide hub library</p>
          <h2 id="guide-hubs-title">Organized guide hubs for stronger SEO structure</h2>
          <p>These hub pages group related guides and route readers into the correct service, country and booking pages.</p>
        </div>
        <div class="regional-link-grid">
${renderHubCards()}
        </div>
      </section>
      <!-- Guide Hub SEO Section End -->`;
}

function updatePageWithHubSection(file, beforeMarker) {
  let html = read(file);
  html = html.replace(/\r?\n      <!-- Guide Hub SEO Section Start -->[\s\S]*?      <!-- Guide Hub SEO Section End -->\r?\n/, "\n");
  if (!html.includes(beforeMarker)) throw new Error(`${file}: marker not found`);
  html = html.replace(beforeMarker, `${renderHubSection()}\n${beforeMarker}`);
  write(file, html);
}

function updateServiceAreaHubJsonLd() {
  let html = read("online-pooja-service-areas.html");
  html = html.replace(
    /<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/,
    (full, rawJson) => {
      const data = JSON.parse(rawJson);
      const graph = data["@graph"];
      const list = {
        "@type": "ItemList",
        "@id": `${site}/online-pooja-service-areas.html#guide-hub-list`,
        name: "Bandevi Astro SEO guide hub pages",
        itemListElement: hubPages.map((page, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: page.h1,
          url: `${site}/${page.slug}`,
        })),
      };
      const index = graph.findIndex((item) => item["@id"] === list["@id"]);
      if (index >= 0) graph[index] = list;
      else graph.push(list);
      return `<script type="application/ld+json">\n${jsonLd(graph)}\n    </script>`;
    }
  );
  write("online-pooja-service-areas.html", html);
}

function updateSitemap() {
  let sitemap = read("sitemap.xml");
  for (const page of hubPages) {
    const loc = `${site}/${page.slug}`;
    if (sitemap.includes(`<loc>${loc}</loc>`)) continue;
    sitemap = sitemap.replace(
      "\n</urlset>",
      `\n  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.9</priority>\n  </url>\n</urlset>`
    );
  }
  for (const loc of [`${site}/`, `${site}/online-pooja-service-areas.html`]) {
    const escaped = loc.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp(`(<loc>${escaped}<\\/loc>\\s*<lastmod>)([^<]+)(<\\/lastmod>)`);
    sitemap = sitemap.replace(re, `$1${today}$3`);
  }
  write("sitemap.xml", sitemap);
}

for (const page of hubPages) {
  write(page.slug, renderHubPage(page));
}
updatePageWithHubSection("index.html", "      <!-- Guide SEO Section Start -->");
updatePageWithHubSection("online-pooja-service-areas.html", "      <!-- Guide SEO Section Start -->");
updateServiceAreaHubJsonLd();
updateSitemap();

console.log(`Added ${hubPages.length} SEO guide hub pages and updated hub links.`);
