const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const site = "https://bandeviastro.com";
const today = "2026-07-11";
const heroImage = "assets/spiritual-consultation-hero.png";

const countryPages = [
  {
    slug: "online-pandit-canada.html",
    name: "Canada",
    label: "Canada",
    lang: "en-CA",
    locale: "en_CA",
    hreflang: "en-CA",
    title: "Online Pandit in Canada | NRI Pooja & Kundli",
    description: "Online pandit in Canada for NRI pooja, hawan, kundli, gemstone, vastu and muhurat guidance with Canada time coordination.",
    eyebrow: "Canada NRI pooja and astrology desk",
    h1: "Online pandit in Canada for NRI pooja, kundli and gemstone guidance",
    heroCopy: "For Indian families in Toronto, Brampton, Vancouver, Calgary, Montreal and across Canada, Bandevi Astro supports online pooja, hawan, kundli, gemstone, vastu and muhurat enquiries with Canada time coordination.",
    areas: "Toronto, Brampton, Vancouver, Calgary, Montreal and nearby Canadian cities",
    timeCopy: "Canada time planned",
    intentCopy: "This page supports searches around online pandit in Canada, Hindu priest online Canada, NRI pooja Canada, kundli consultation Canada and gemstone guidance Canada.",
    whatsApp: "Namaste, I am in Canada and need online pandit or pooja guidance. Please share the process.",
    serviceTerms: ["online pandit Canada", "Hindu priest online Canada", "NRI pooja Canada", "kundli consultation Canada", "hawan booking Canada", "gemstone guidance Canada"],
  },
  {
    slug: "online-pandit-australia.html",
    name: "Australia",
    label: "Australia",
    lang: "en-AU",
    locale: "en_AU",
    hreflang: "en-AU",
    title: "Online Pandit in Australia | NRI Pooja & Kundli",
    description: "Online pandit in Australia for NRI pooja, hawan, kundli, gemstone, vastu and muhurat guidance with Australia time coordination.",
    eyebrow: "Australia NRI pooja and astrology desk",
    h1: "Online pandit in Australia for NRI pooja, kundli and gemstone guidance",
    heroCopy: "For Indian families in Sydney, Melbourne, Brisbane, Perth, Adelaide and across Australia, Bandevi Astro supports online pooja, hawan, kundli, gemstone, vastu and muhurat enquiries with Australia time coordination.",
    areas: "Sydney, Melbourne, Brisbane, Perth, Adelaide and nearby Australian cities",
    timeCopy: "Australia time planned",
    intentCopy: "This page supports searches around online pandit in Australia, Hindu priest online Australia, NRI pooja Australia, kundli consultation Australia and gemstone guidance Australia.",
    whatsApp: "Namaste, I am in Australia and need online pandit or pooja guidance. Please share the process.",
    serviceTerms: ["online pandit Australia", "Hindu priest online Australia", "NRI pooja Australia", "kundli consultation Australia", "hawan booking Australia", "gemstone guidance Australia"],
  },
  {
    slug: "online-pandit-singapore.html",
    name: "Singapore",
    label: "Singapore",
    lang: "en-SG",
    locale: "en_SG",
    hreflang: "en-SG",
    title: "Online Pandit in Singapore | NRI Pooja & Kundli",
    description: "Online pandit in Singapore for NRI pooja, hawan, kundli, gemstone, vastu and muhurat guidance with Singapore time coordination.",
    eyebrow: "Singapore NRI pooja and astrology desk",
    h1: "Online pandit in Singapore for NRI pooja, kundli and gemstone guidance",
    heroCopy: "For Indian families in Singapore, Little India, Serangoon, Tampines, Jurong and nearby areas, Bandevi Astro supports online pooja, hawan, kundli, gemstone, vastu and muhurat enquiries with Singapore time coordination.",
    areas: "Singapore, Little India, Serangoon, Tampines, Jurong and nearby areas",
    timeCopy: "Singapore time planned",
    intentCopy: "This page supports searches around online pandit in Singapore, Hindu priest online Singapore, NRI pooja Singapore, kundli consultation Singapore and gemstone guidance Singapore.",
    whatsApp: "Namaste, I am in Singapore and need online pandit or pooja guidance. Please share the process.",
    serviceTerms: ["online pandit Singapore", "Hindu priest online Singapore", "NRI pooja Singapore", "kundli consultation Singapore", "hawan booking Singapore", "gemstone guidance Singapore"],
  },
  {
    slug: "online-pandit-qatar.html",
    name: "Qatar",
    label: "Qatar",
    lang: "en-QA",
    locale: "en_QA",
    hreflang: "en-QA",
    title: "Online Pandit in Qatar | NRI Pooja & Kundli",
    description: "Online pandit in Qatar for NRI pooja, hawan, kundli, gemstone, vastu and muhurat guidance with Qatar time coordination.",
    eyebrow: "Qatar NRI pooja and astrology desk",
    h1: "Online pandit in Qatar for NRI pooja, kundli and gemstone guidance",
    heroCopy: "For Indian families in Doha, Lusail, Al Wakrah, Al Khor and across Qatar, Bandevi Astro supports online pooja, hawan, kundli, gemstone, vastu and muhurat enquiries with Qatar time coordination.",
    areas: "Doha, Lusail, Al Wakrah, Al Khor and nearby Qatar areas",
    timeCopy: "Qatar time planned",
    intentCopy: "This page supports searches around online pandit in Qatar, Hindu priest online Qatar, NRI pooja Qatar, kundli consultation Qatar and gemstone guidance Qatar.",
    whatsApp: "Namaste, I am in Qatar and need online pandit or pooja guidance. Please share the process.",
    serviceTerms: ["online pandit Qatar", "Hindu priest online Qatar", "NRI pooja Qatar", "kundli consultation Qatar", "hawan booking Qatar", "gemstone guidance Qatar"],
  },
  {
    slug: "online-pandit-oman.html",
    name: "Oman",
    label: "Oman",
    lang: "en-OM",
    locale: "en_OM",
    hreflang: "en-OM",
    title: "Online Pandit in Oman | NRI Pooja & Kundli",
    description: "Online pandit in Oman for NRI pooja, hawan, kundli, gemstone, vastu and muhurat guidance with Oman time coordination.",
    eyebrow: "Oman NRI pooja and astrology desk",
    h1: "Online pandit in Oman for NRI pooja, kundli and gemstone guidance",
    heroCopy: "For Indian families in Muscat, Salalah, Sohar, Nizwa and across Oman, Bandevi Astro supports online pooja, hawan, kundli, gemstone, vastu and muhurat enquiries with Oman time coordination.",
    areas: "Muscat, Salalah, Sohar, Nizwa and nearby Oman areas",
    timeCopy: "Oman time planned",
    intentCopy: "This page supports searches around online pandit in Oman, Hindu priest online Oman, NRI pooja Oman, kundli consultation Oman and gemstone guidance Oman.",
    whatsApp: "Namaste, I am in Oman and need online pandit or pooja guidance. Please share the process.",
    serviceTerms: ["online pandit Oman", "Hindu priest online Oman", "NRI pooja Oman", "kundli consultation Oman", "hawan booking Oman", "gemstone guidance Oman"],
  },
  {
    slug: "online-pandit-saudi-arabia.html",
    name: "Saudi Arabia",
    label: "Saudi Arabia",
    lang: "en-SA",
    locale: "en_SA",
    hreflang: "en-SA",
    title: "Online Pandit in Saudi Arabia | NRI Pooja & Kundli",
    description: "Online pandit in Saudi Arabia for NRI pooja, kundli, gemstone, vastu and muhurat guidance with Saudi time coordination.",
    eyebrow: "Saudi Arabia NRI pooja and astrology desk",
    h1: "Online pandit in Saudi Arabia for NRI pooja, kundli and gemstone guidance",
    heroCopy: "For Indian families in Riyadh, Jeddah, Dammam, Al Khobar and across Saudi Arabia, Bandevi Astro supports online pooja, kundli, gemstone, vastu and muhurat enquiries with Saudi time coordination.",
    areas: "Riyadh, Jeddah, Dammam, Al Khobar and nearby Saudi Arabia areas",
    timeCopy: "Saudi time planned",
    intentCopy: "This page supports searches around online pandit in Saudi Arabia, Hindu priest online Saudi Arabia, NRI pooja Saudi, kundli consultation Saudi Arabia and gemstone guidance Saudi Arabia.",
    whatsApp: "Namaste, I am in Saudi Arabia and need online pandit or pooja guidance. Please share the process.",
    serviceTerms: ["online pandit Saudi Arabia", "Hindu priest online Saudi Arabia", "NRI pooja Saudi", "kundli consultation Saudi Arabia", "muhurat guidance Saudi Arabia", "gemstone guidance Saudi Arabia"],
  },
];

const coreRegionalPages = [
  { slug: "online-pooja-india.html", title: "Online Pooja India", copy: "India page for pooja, kundli, hawan and gemstones" },
  { slug: "online-pandit-dubai-uae.html", title: "Online Pandit Dubai UAE", copy: "UAE page for Dubai, Abu Dhabi and Sharjah" },
  { slug: "online-pandit-usa.html", title: "Online Pandit USA", copy: "USA page for New York and Los Angeles" },
  { slug: "online-pandit-uk.html", title: "Online Pandit UK", copy: "UK page for London, Birmingham and Leicester" },
];

const cityPages = [
  ["online-pandit-delhi.html", "Online Pandit Delhi NCR"],
  ["online-pandit-dubai.html", "Online Pandit Dubai"],
  ["online-pandit-new-york.html", "Online Pandit New York"],
  ["online-pandit-london.html", "Online Pandit London"],
  ["online-pandit-mumbai.html", "Online Pandit Mumbai"],
  ["online-pandit-bengaluru.html", "Online Pandit Bengaluru"],
  ["online-pandit-hyderabad.html", "Online Pandit Hyderabad"],
  ["online-pandit-abu-dhabi.html", "Online Pandit Abu Dhabi"],
  ["online-pandit-sharjah.html", "Online Pandit Sharjah"],
  ["online-pandit-los-angeles.html", "Online Pandit Los Angeles"],
  ["online-pandit-birmingham.html", "Online Pandit Birmingham"],
  ["online-pandit-leicester.html", "Online Pandit Leicester"],
];

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function write(file, data) {
  fs.writeFileSync(path.join(root, file), data, "utf8");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function jsonLd(graph) {
  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph }, null, 8)
    .split("\n")
    .map((line) => `      ${line}`)
    .join("\n");
}

function whatsapp(text) {
  return `https://wa.me/918676846484?text=${encodeURIComponent(text)}`;
}

function footerRegions() {
  const countryLinks = countryPages.map((page) => `      <a href="${page.slug}">Online Pandit ${escapeHtml(page.label)}</a>`).join("\n");
  const cityLinks = cityPages.map(([slug, label]) => `      <a href="${slug}">${escapeHtml(label)}</a>`).join("\n");
  return `    <nav class="footer-column" aria-label="Regional SEO links">
      <h2>Regions</h2>
      <a href="online-pooja-service-areas.html">Service Areas</a>
      <a href="online-pooja-india.html">Online Pooja India</a>
      <a href="online-pandit-dubai-uae.html">Online Pandit Dubai UAE</a>
      <a href="online-pandit-usa.html">Online Pandit USA</a>
      <a href="online-pandit-uk.html">Online Pandit UK</a>
${countryLinks}
${cityLinks}
    </nav>`;
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
      <a href="online-pooja.html"><strong>Pooja</strong><span>Proof</span></a>
      <a href="online-pooja-service-areas.html"><strong>Areas</strong><span>Countries</span></a>
      <a href="kundli.html"><strong>Kundli</strong><span>Dosh</span></a>
      <a href="gemstone-shop.html"><strong>Gems</strong><span>Rings</span></a>
      <a href="book-online.html"><strong>Book</strong><span>Create ID</span></a>
      <a href="about.html"><strong>Trust</strong><span>About us</span></a>
    </nav>
    <div class="header-actions" aria-label="Quick contact actions">
      <a class="header-action login" href="login.html" aria-label="Open client login"><span>Client</span><strong>Login</strong></a>
      <a class="header-action whatsapp" href="https://wa.me/918676846484" aria-label="Open WhatsApp enquiry"><span>WA</span><strong>WhatsApp</strong></a>
      <a class="header-action primary" href="book-online.html" aria-label="Create booking ID"><span>Book</span><strong>Now</strong></a>
    </div>
  </div>
  <div class="header-trust-row international-service-rail" aria-label="International service shortcuts">
    <a href="online-pooja-service-areas.html"><strong>Service Areas</strong><span>Global NRI hub</span></a>
    <a href="online-pandit-canada.html"><strong>Canada</strong><span>Toronto, Brampton, Vancouver</span></a>
    <a href="online-pandit-australia.html"><strong>Australia</strong><span>Sydney, Melbourne, Brisbane</span></a>
    <a href="online-pandit-singapore.html"><strong>Singapore</strong><span>Little India and NRI families</span></a>
    <a href="online-pandit-qatar.html"><strong>Gulf</strong><span>Qatar, Oman, Saudi</span></a>
  </div>
</header>`;
}

function renderFooter() {
  return `<footer class="site-footer premium-footer">
  <section class="footer-cta" aria-label="Booking call to action">
    <div>
      <p class="eyebrow">Premium spiritual service</p>
      <h2>Book online, confirm on WhatsApp, track every stage.</h2>
      <p>Clients can request pooja, hawan, kundli, hast rekha, vastu, muhurat and gemstone guidance with a clear Booking ID before any payment.</p>
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
    <nav class="footer-column" aria-label="Footer services">
      <h2>Services</h2>
      <a href="online-pooja.html">Online Pooja</a>
      <a href="hawan.html">Hawan / Havan</a>
      <a href="kundli.html">Kundli Consultation</a>
      <a href="hast-rekha.html">Hast Rekha</a>
      <a href="vastu-muhurat.html">Vastu & Muhurat</a>
      <a href="gemstone-shop.html">Gemstone Guidance</a>
    </nav>
${footerRegions()}
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

function renderCountryPage(page) {
  const url = `${site}/${page.slug}`;
  const graph = [
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
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: page.title,
      description: page.description,
      isPartOf: { "@id": `${site}/#website` },
      about: { "@id": `${url}#service` },
      inLanguage: page.lang,
    },
    {
      "@type": "Service",
      "@id": `${url}#service`,
      name: `Online pandit in ${page.label}`,
      serviceType: page.serviceTerms,
      description: page.description,
      provider: { "@id": `${site}/#organization` },
      areaServed: { "@type": "Country", name: page.name },
      audience: { "@type": "Audience", audienceType: "Indian families, NRI families and spiritual consultation clients" },
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: url,
        servicePhone: "+918676846484",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${site}/` },
        { "@type": "ListItem", position: 2, name: "Service Areas", item: `${site}/online-pooja-service-areas.html` },
        { "@type": "ListItem", position: 3, name: page.label, item: url },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: `Can ${page.label} clients book online pooja from India?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `Yes. ${page.label} clients can enquire for online pooja, hawan, kundli, gemstone, vastu and muhurat guidance with timing coordination and quote confirmation before payment.`,
          },
        },
        {
          "@type": "Question",
          name: `Which ${page.label} areas are relevant?`,
          acceptedAnswer: { "@type": "Answer", text: `The online desk can support Indian families in ${page.areas} through WhatsApp and online consultation.` },
        },
        {
          "@type": "Question",
          name: `Can ${page.label} families request proof after pooja?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: "Proof, live option or completion update can be discussed before confirmation depending on the service, timing and ritual type.",
          },
        },
      ],
    },
  ];

  const termsHtml = page.serviceTerms.map((term) => `          <span>${escapeHtml(term)}</span>`).join("\n");
  const relatedCountries = countryPages
    .filter((item) => item.slug !== page.slug)
    .slice(0, 5)
    .map((item) => `          <a href="${item.slug}"><strong>Online Pandit ${escapeHtml(item.label)}</strong><span>NRI pooja, kundli and gemstone guidance</span></a>`)
    .join("\n");

  return `<!DOCTYPE html>
<html lang="${page.lang}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(page.title)}</title>
    <meta name="description" content="${escapeHtml(page.description)}" />
    <link rel="canonical" href="${url}" />
    <link rel="alternate" hreflang="${page.hreflang}" href="${url}" />
    <link rel="alternate" hreflang="x-default" href="${site}/online-pooja-service-areas.html" />
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
${jsonLd(graph)}
    </script>
    <link rel="preload" href="${heroImage}" as="image" />
    <link rel="icon" type="image/png" href="${heroImage}" />
    <link rel="apple-touch-icon" href="${heroImage}" />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
${renderHeader()}

    <main id="top" class="regional-page-main">
      <section class="hero regional-hero" aria-label="${escapeHtml(page.label)} online pandit service">
        <img class="hero-slide-image" src="${heroImage}" alt="${escapeHtml(page.h1)}" />
        <div class="hero-shade" aria-hidden="true"></div>
        <div class="hero-content">
          <p class="eyebrow">${escapeHtml(page.eyebrow)}</p>
          <h1>${escapeHtml(page.h1)}</h1>
          <p class="hero-copy">${escapeHtml(page.heroCopy)}</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="${whatsapp(page.whatsApp)}">Ask on WhatsApp</a>
            <a class="btn btn-secondary" href="book-online.html">Create Booking ID</a>
          </div>
          <div class="hero-proof-row" aria-label="${escapeHtml(page.label)} trust highlights">
            <span>${escapeHtml(page.label)}</span>
            <span>${escapeHtml(page.timeCopy)}</span>
            <span>Proof where applicable</span>
          </div>
        </div>
      </section>

      <section class="section regional-intent-section" aria-labelledby="country-intent-title">
        <div class="section-heading">
          <p class="eyebrow">${escapeHtml(page.label)} search intent</p>
          <h2 id="country-intent-title">Built for ${escapeHtml(page.label)} families who need pandit support from abroad.</h2>
          <p>${escapeHtml(page.intentCopy)}</p>
        </div>
        <div class="regional-keyword-grid" aria-label="${escapeHtml(page.label)} search topics">
${termsHtml}
        </div>
      </section>

      <section class="section regional-services-section" aria-labelledby="country-services-title">
        <div class="section-heading">
          <p class="eyebrow">${escapeHtml(page.label)} services</p>
          <h2 id="country-services-title">What ${escapeHtml(page.label)} clients can request</h2>
        </div>
        <div class="regional-card-grid">
          <article class="regional-card">
            <h3>NRI pooja and hawan</h3>
            <p>Discuss Satyanarayan pooja, grah shanti, navgrah hawan, Lakshmi pooja, Durga pooja and family rituals with timing and proof preference.</p>
          </article>
          <article class="regional-card">
            <h3>Kundli and muhurat</h3>
            <p>Share birth details and the concern for marriage, career, business, vastu, muhurat or remedy guidance from ${escapeHtml(page.label)}.</p>
          </article>
          <article class="regional-card">
            <h3>Gemstone guidance</h3>
            <p>Gemstone advice is given only after suitability review, with quote and certificate preference discussed before order.</p>
          </article>
        </div>
      </section>

      <section class="section regional-process-section" aria-labelledby="country-process-title">
        <div class="section-heading">
          <p class="eyebrow">Booking process</p>
          <h2 id="country-process-title">Simple ${escapeHtml(page.label)} enquiry flow</h2>
        </div>
        <ol class="regional-process-list">
          <li>Share your ${escapeHtml(page.label)} city, service need, preferred time and birth details if needed.</li>
          <li>Receive recommendation, quote, timing and proof option on WhatsApp.</li>
          <li>Create or confirm Booking ID before payment.</li>
          <li>Receive update, live option or proof where applicable after completion.</li>
        </ol>
      </section>

      <section class="section regional-links-section" aria-labelledby="country-links-title">
        <div class="section-heading">
          <p class="eyebrow">Related global pages</p>
          <h2 id="country-links-title">Continue with international and trust pages</h2>
        </div>
        <div class="regional-link-grid">
          <a href="online-pooja-service-areas.html"><strong>Service Areas Hub</strong><span>Global country and city cluster</span></a>
${relatedCountries}
          <a href="proof-center.html"><strong>Proof Center</strong><span>Company-stated facts, policies and booking proof</span></a>
          <a href="reviews-testimonials.html"><strong>Reviews</strong><span>Approved review and testimonial policy</span></a>
        </div>
      </section>

      <section class="section faq-section regional-faq-section" aria-labelledby="country-faq-title">
        <div class="section-heading">
          <p class="eyebrow">${escapeHtml(page.label)} FAQ</p>
          <h2 id="country-faq-title">Online pandit ${escapeHtml(page.label)} FAQ</h2>
        </div>
        <div class="faq-list">
          <details open>
            <summary>Can ${escapeHtml(page.label)} clients book online pooja from India?</summary>
            <p>Yes. ${escapeHtml(page.label)} clients can enquire for online pooja, hawan, kundli, gemstone, vastu and muhurat guidance with timing coordination and quote confirmation before payment.</p>
          </details>
          <details>
            <summary>Which ${escapeHtml(page.label)} areas are relevant?</summary>
            <p>The online desk can support Indian families in ${escapeHtml(page.areas)} through WhatsApp and online consultation.</p>
          </details>
          <details>
            <summary>Can ${escapeHtml(page.label)} families request proof after pooja?</summary>
            <p>Proof, live option or completion update can be discussed before confirmation depending on the service, timing and ritual type.</p>
          </details>
        </div>
      </section>
    </main>

    <a class="floating-whatsapp" href="${whatsapp(page.whatsApp)}" aria-label="Open WhatsApp chat">WA</a>

${renderFooter()}

    <script src="site-config.js"></script>
    <script src="script.js"></script>
  </body>
</html>
`;
}

function generatePages() {
  for (const page of countryPages) {
    write(page.slug, renderCountryPage(page));
  }
}

function updateServiceAreaHub() {
  let html = read("online-pooja-service-areas.html");
  const title = "Online Pooja Service Areas | Global NRI Pandit Desk";
  const desc = "Bandevi Astro global online pooja service areas for India, UAE, USA, UK, Canada, Australia, Singapore and Gulf NRI families.";
  html = html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${escapeHtml(desc)}" />`)
    .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${escapeHtml(title)}" />`)
    .replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${escapeHtml(desc)}" />`)
    .replace(/<meta property="og:image:alt" content="[^"]*" \/>/, `<meta property="og:image:alt" content="Global online pooja service areas for NRI families" />`)
    .replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${escapeHtml(title)}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${escapeHtml(desc)}" />`);

  const alternates = [
    ["en-IN", "online-pooja-india.html"],
    ["en-AE", "online-pandit-dubai-uae.html"],
    ["en-GB", "online-pandit-uk.html"],
    ["en-US", "online-pandit-usa.html"],
    ...countryPages.map((page) => [page.hreflang, page.slug]),
  ]
    .map(([lang, slug]) => `    <link rel="alternate" hreflang="${lang}" href="${site}/${slug}" />`)
    .join("\n");
  html = html.replace(
    /    <link rel="alternate" hreflang="en-IN"[\s\S]*?    <link rel="alternate" hreflang="x-default" href="https:\/\/bandeviastro\.com\/online-pooja-service-areas\.html" \/>/,
    `${alternates}\n    <link rel="alternate" hreflang="x-default" href="${site}/online-pooja-service-areas.html" />`
  );

  html = html.replace(
    /<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/,
    (full, rawJson) => {
      const data = JSON.parse(rawJson);
      const graph = data["@graph"];
      const org = graph.find((item) => item["@id"] === `${site}/#organization`);
      org.contactPoint[0].areaServed = ["IN", "AE", "US", "GB", "CA", "AU", "SG", "QA", "OM", "SA"];
      const page = graph.find((item) => item["@id"] === `${site}/online-pooja-service-areas.html#webpage`);
      page.name = title;
      page.description = desc;
      const service = graph.find((item) => item["@id"] === `${site}/online-pooja-service-areas.html#service`);
      service.areaServed = [
        { "@type": "Country", name: "India" },
        { "@type": "Place", name: "Dubai and United Arab Emirates" },
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "United Kingdom" },
        ...countryPages.map((item) => ({ "@type": "Country", name: item.name })),
      ];
      const list = graph.find((item) => item["@id"] === `${site}/online-pooja-service-areas.html#service-area-list`);
      list.name = "Bandevi Astro global online pooja country pages";
      list.itemListElement = [
        ...coreRegionalPages.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.title, url: `${site}/${item.slug}` })),
        ...countryPages.map((item, index) => ({ "@type": "ListItem", position: coreRegionalPages.length + index + 1, name: `Online Pandit ${item.label}`, url: `${site}/${item.slug}` })),
      ];
      return `<script type="application/ld+json">\n${jsonLd(graph)}\n    </script>`;
    }
  );

  const countryCards = [
    ...coreRegionalPages.map((item) => {
      const label = item.title.replace("Online Pooja ", "").replace("Online Pandit ", "");
      return `          <article class="service-area-card">
            <span>${escapeHtml(label)}</span>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.copy)}</p>
            <a href="${item.slug}">Open ${escapeHtml(label)} page</a>
          </article>`;
    }),
    ...countryPages.map((page) => `          <article class="service-area-card">
            <span>${escapeHtml(page.label)}</span>
            <h3>Online pandit in ${escapeHtml(page.label)}</h3>
            <p>${escapeHtml(page.heroCopy)}</p>
            <a href="${page.slug}">Open ${escapeHtml(page.label)} page</a>
          </article>`),
  ].join("\n");

  html = html.replace(/<p class="eyebrow">India, Dubai, USA and UK service-area hub<\/p>/, `<p class="eyebrow">Global NRI service-area hub</p>`);
  html = html.replace(/<h1>Online pooja service areas for India, Dubai, USA and UK<\/h1>/, `<h1>Online pooja service areas for global NRI families</h1>`);
  html = html.replace(
    /<p class="hero-copy">Choose the right Bandevi Astro regional page[\s\S]*?search engines\.<\/p>/,
    `<p class="hero-copy">Choose the right Bandevi Astro country or city page for online pooja, NRI pandit guidance, kundli, hawan, hast rekha, gemstone and muhurat enquiries across India, UAE, USA, UK, Canada, Australia, Singapore and Gulf markets.</p>`
  );
  html = html.replace(
    /          <div class="hero-proof-row" aria-label="Service area highlights">[\s\S]*?          <\/div>/,
    `          <div class="hero-proof-row" aria-label="Service area highlights">
            <span>India</span>
            <span>UAE</span>
            <span>USA</span>
            <span>UK</span>
            <span>Canada</span>
            <span>Australia</span>
            <span>Singapore</span>
            <span>Gulf</span>
          </div>`
  );
  html = html.replace(
    /      <section class="section service-area-map-section" aria-labelledby="service-area-map-title">[\s\S]*?      <\/section>\r?\n\r?\n      <section class="section service-area-map-section" aria-labelledby="city-market-title">/,
    `      <section class="section service-area-map-section" aria-labelledby="service-area-map-title">
        <div class="section-heading">
          <p class="eyebrow">Choose by country</p>
          <h2 id="service-area-map-title">Dedicated pages for priority global search markets</h2>
          <p>These pages support international SEO without mixing every country into one generic page. Clients can open the most relevant page and then confirm details on WhatsApp.</p>
        </div>
        <div class="service-area-grid">
${countryCards}
        </div>
      </section>

      <section class="section service-area-map-section" aria-labelledby="city-market-title">`
  );
  html = html.replace(
    /<p>Google can now crawl one clear page that explains how the India, Dubai, USA and UK pages relate to each other, while users can quickly pick the right route\.<\/p>/,
    `<p>Google can now crawl one clear hub that explains how the country and city pages relate to each other, while users can quickly pick the right route for their country.</p>`
  );
  html = html.replace(
    /<span>online pandit India Dubai USA UK<\/span>/,
    `<span>online pandit India UAE USA UK Canada Australia Singapore Gulf</span>`
  );
  html = html.replace(
    /<span>Hindu priest online USA UK Dubai<\/span>/,
    `<span>Hindu priest online USA UK Canada Australia Singapore Gulf</span>`
  );
  html = html.replace(
    /    <nav class="footer-column" aria-label="Regional SEO links">[\s\S]*?    <\/nav>/,
    footerRegions()
  );
  write("online-pooja-service-areas.html", html);
}

function updateHomepage() {
  let html = read("index.html");
  const links = [
    ["online-pooja-service-areas.html", "Service Areas Hub", "Global country and city-page cluster"],
    ["online-pooja-india.html", "Online Pooja India", "Delhi, Mumbai, Bengaluru and Hyderabad pages"],
    ["online-pandit-dubai-uae.html", "Online Pandit Dubai UAE", "Dubai, Abu Dhabi and Sharjah pages"],
    ["online-pandit-uk.html", "Online Pandit UK", "London, Birmingham and Leicester pages"],
    ["online-pandit-usa.html", "Online Pandit USA", "New York and Los Angeles pages"],
    ...countryPages.map((page) => [page.slug, `Online Pandit ${page.label}`, `NRI pooja, kundli and gemstone guidance for ${page.label}`]),
  ]
    .map(([href, title, copy]) => `          <a href="${href}"><strong>${escapeHtml(title)}</strong><span>${escapeHtml(copy)}</span></a>`)
    .join("\n");
  html = html.replace(
    /<h2 id="regional-hub-title">Dedicated pages for India, Dubai\/UAE, UK and USA searches<\/h2>/,
    `<h2 id="regional-hub-title">Dedicated pages for India, UAE, UK, USA and global NRI searches</h2>`
  );
  html = html.replace(
    /<p>Choose your country page for online pooja, hawan, kundli, hast rekha, gemstone guidance, muhurat and NRI spiritual support with WhatsApp confirmation before payment\.<\/p>/,
    `<p>Choose your country page for online pooja, hawan, kundli, hast rekha, gemstone guidance, muhurat and NRI spiritual support across India, UAE, USA, UK, Canada, Australia, Singapore and Gulf markets.</p>`
  );
  html = html.replace(
    /        <div class="regional-link-grid">\r?\n          <a href="online-pooja-service-areas\.html">[\s\S]*?        <\/div>\r?\n      <\/section>\r?\n      <!-- Regional SEO Section End -->/,
    `        <div class="regional-link-grid">\n${links}\n        </div>\n      </section>\n      <!-- Regional SEO Section End -->`
  );
  write("index.html", html);
}

function updateSitemap() {
  let sitemap = read("sitemap.xml");
  for (const page of countryPages) {
    const loc = `${site}/${page.slug}`;
    if (sitemap.includes(`<loc>${loc}</loc>`)) continue;
    sitemap = sitemap.replace(
      "\n</urlset>",
      `\n  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.9</priority>\n  </url>\n</urlset>`
    );
  }
  write("sitemap.xml", sitemap);
}

generatePages();
updateServiceAreaHub();
updateHomepage();
updateSitemap();

console.log(`Added ${countryPages.length} international country pages and updated global hub links.`);
