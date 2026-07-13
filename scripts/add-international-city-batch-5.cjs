const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const site = "https://bandeviastro.com";
const today = "2026-07-11";
const heroImage = "assets/spiritual-consultation-hero.jpg";

const newCityPages = [
  page("online-pandit-chicago.html", "Chicago", "Chicago USA", "USA", "en-US", "en_US", "online-pandit-usa.html", "Online Pandit USA", "US time planned", "Chicago, Naperville, Schaumburg, Devon Avenue, Aurora and nearby Illinois areas"),
  page("online-pandit-dallas.html", "Dallas", "Dallas USA", "USA", "en-US", "en_US", "online-pandit-usa.html", "Online Pandit USA", "US time planned", "Dallas, Irving, Plano, Frisco, Richardson and nearby North Texas areas"),
  page("online-pandit-houston.html", "Houston", "Houston USA", "USA", "en-US", "en_US", "online-pandit-usa.html", "Online Pandit USA", "US time planned", "Houston, Sugar Land, Katy, Pearland, The Woodlands and nearby Texas areas"),
  page("online-pandit-san-francisco.html", "San Francisco", "San Francisco Bay Area USA", "USA", "en-US", "en_US", "online-pandit-usa.html", "Online Pandit USA", "US time planned", "San Francisco, Fremont, Sunnyvale, Santa Clara, San Jose and nearby Bay Area cities"),
  page("online-pandit-edison.html", "Edison", "Edison New Jersey USA", "USA", "en-US", "en_US", "online-pandit-usa.html", "Online Pandit USA", "US time planned", "Edison, Iselin, Woodbridge, Piscataway, New Brunswick and nearby New Jersey areas"),
  page("online-pandit-jersey-city.html", "Jersey City", "Jersey City USA", "USA", "en-US", "en_US", "online-pandit-usa.html", "Online Pandit USA", "US time planned", "Jersey City, Hoboken, Newark, Bayonne, Journal Square and nearby New Jersey areas"),
  page("online-pandit-manchester.html", "Manchester", "Manchester UK", "UK", "en-GB", "en_GB", "online-pandit-uk.html", "Online Pandit UK", "UK time planned", "Manchester, Bolton, Stockport, Oldham, Salford and nearby Greater Manchester areas"),
  page("online-pandit-coventry.html", "Coventry", "Coventry UK", "UK", "en-GB", "en_GB", "online-pandit-uk.html", "Online Pandit UK", "UK time planned", "Coventry, Warwick, Leamington Spa, Nuneaton and nearby West Midlands areas"),
  page("online-pandit-wolverhampton.html", "Wolverhampton", "Wolverhampton UK", "UK", "en-GB", "en_GB", "online-pandit-uk.html", "Online Pandit UK", "UK time planned", "Wolverhampton, Walsall, Dudley, West Bromwich and nearby West Midlands areas"),
  page("online-pandit-slough.html", "Slough", "Slough UK", "UK", "en-GB", "en_GB", "online-pandit-uk.html", "Online Pandit UK", "UK time planned", "Slough, Southall, Hayes, Hounslow, Windsor and nearby Berkshire and West London areas"),
  page("online-pandit-chennai.html", "Chennai", "Chennai India", "India", "en-IN", "en_IN", "online-pooja-india.html", "Online Pooja India", "India time planned", "Chennai, T Nagar, Anna Nagar, Velachery, Tambaram and nearby Tamil Nadu areas"),
  page("online-pandit-pune.html", "Pune", "Pune India", "India", "en-IN", "en_IN", "online-pooja-india.html", "Online Pooja India", "India time planned", "Pune, Pimpri-Chinchwad, Hinjewadi, Kothrud, Baner and nearby Maharashtra areas"),
  page("online-pandit-ahmedabad.html", "Ahmedabad", "Ahmedabad India", "India", "en-IN", "en_IN", "online-pooja-india.html", "Online Pooja India", "India time planned", "Ahmedabad, Gandhinagar, Maninagar, Satellite, Bopal and nearby Gujarat areas"),
  page("online-pandit-kolkata.html", "Kolkata", "Kolkata India", "India", "en-IN", "en_IN", "online-pooja-india.html", "Online Pooja India", "India time planned", "Kolkata, Salt Lake, Howrah, Ballygunge, New Town and nearby West Bengal areas"),
  page("online-pandit-ajman.html", "Ajman", "Ajman UAE", "UAE", "en-AE", "en_AE", "online-pandit-dubai-uae.html", "Online Pandit Dubai UAE", "UAE time planned", "Ajman, Al Nuaimiya, Al Rashidiya, Al Jurf and nearby UAE areas"),
  page("online-pandit-al-ain.html", "Al Ain", "Al Ain UAE", "UAE", "en-AE", "en_AE", "online-pandit-dubai-uae.html", "Online Pandit Dubai UAE", "UAE time planned", "Al Ain, Al Jimi, Al Muwaiji, Al Towayya and nearby Abu Dhabi emirate areas"),
];

const existingCityPages = [
  ["online-pandit-delhi.html", "Delhi NCR", "India", "Online pandit in Delhi", "For Delhi, Noida, Gurugram, Ghaziabad and Faridabad clients searching pooja, hawan, kundli, vastu, muhurat and gemstone guidance."],
  ["online-pandit-mumbai.html", "Mumbai", "India", "Online pandit in Mumbai", "For Mumbai, Navi Mumbai, Thane, Andheri and Borivali clients needing pooja, hawan, kundli and gemstone guidance."],
  ["online-pandit-bengaluru.html", "Bengaluru", "India", "Online pandit in Bengaluru", "For Bengaluru, Whitefield, Electronic City, Indiranagar and Koramangala clients needing pooja and kundli guidance."],
  ["online-pandit-hyderabad.html", "Hyderabad", "India", "Online pandit in Hyderabad", "For Hyderabad, Secunderabad, Gachibowli, HITEC City and Kukatpally clients needing online pandit support."],
  ["online-pandit-dubai.html", "Dubai", "UAE", "Online pandit in Dubai", "For Dubai Indian families needing NRI pooja, online pandit, kundli, hawan, gemstone and muhurat support with UAE time planning."],
  ["online-pandit-abu-dhabi.html", "Abu Dhabi", "UAE", "Online pandit in Abu Dhabi", "For Abu Dhabi, Mussafah, Khalifa City and Al Reem Island clients needing online pooja and kundli support."],
  ["online-pandit-sharjah.html", "Sharjah", "UAE", "Online pandit in Sharjah", "For Sharjah, Al Nahda, Rolla, Muwaileh and Ajman clients needing online pandit and pooja support."],
  ["online-pandit-new-york.html", "New York", "USA", "Online pandit in New York", "For New York, Queens, Brooklyn, Long Island and nearby New Jersey families needing online Hindu priest and astrology guidance."],
  ["online-pandit-los-angeles.html", "Los Angeles", "USA", "Online pandit in Los Angeles", "For Los Angeles, Artesia, Cerritos, Irvine and Orange County families needing NRI pooja and kundli guidance."],
  ["online-pandit-london.html", "London", "UK", "Online pandit in London UK", "For London, Southall, Wembley, Harrow and East Ham families needing online pooja, kundli, hawan and gemstone guidance."],
  ["online-pandit-birmingham.html", "Birmingham", "UK", "Online pandit in Birmingham UK", "For Birmingham, Wolverhampton, Coventry, Solihull and West Bromwich clients needing pooja and kundli guidance."],
  ["online-pandit-leicester.html", "Leicester", "UK", "Online pandit in Leicester UK", "For Leicester, Belgrave, Oadby, Evington and Loughborough clients needing NRI pooja and pandit guidance."],
  ["online-pandit-toronto.html", "Toronto", "Canada", "Online pandit in Toronto", "For Toronto, Scarborough, Mississauga, North York and nearby GTA families needing online pandit guidance."],
  ["online-pandit-vancouver.html", "Vancouver", "Canada", "Online pandit in Vancouver", "For Vancouver, Surrey, Burnaby, Richmond and Abbotsford families needing online pooja and kundli support."],
  ["online-pandit-brampton.html", "Brampton", "Canada", "Online pandit in Brampton", "For Brampton, Mississauga, Caledon and Peel Region families needing Hindu priest online support."],
  ["online-pandit-sydney.html", "Sydney", "Australia", "Online pandit in Sydney", "For Sydney, Parramatta, Harris Park, Blacktown and nearby NSW families needing NRI pooja guidance."],
  ["online-pandit-melbourne.html", "Melbourne", "Australia", "Online pandit in Melbourne", "For Melbourne, Dandenong, Tarneit, Point Cook and nearby Victoria families needing online pandit support."],
  ["online-pandit-brisbane.html", "Brisbane", "Australia", "Online pandit in Brisbane", "For Brisbane, Sunnybank, Springfield, Logan and nearby Queensland families needing kundli and pooja guidance."],
  ["online-pandit-doha.html", "Doha", "Qatar", "Online pandit in Doha", "For Doha, Lusail, Al Wakrah, West Bay and Al Sadd families needing NRI pooja and kundli support."],
  ["online-pandit-muscat.html", "Muscat", "Oman", "Online pandit in Muscat", "For Muscat, Ruwi, Muttrah, Qurum and Seeb families needing online pandit support."],
  ["online-pandit-riyadh.html", "Riyadh", "Saudi Arabia", "Online pandit in Riyadh", "For Riyadh, Malaz, Olaya and nearby Saudi Arabia families needing online pandit and NRI pooja guidance."],
  ["online-pandit-jeddah.html", "Jeddah", "Saudi Arabia", "Online pandit in Jeddah", "For Jeddah, Aziziyah, Al Rehab and Al Hamra families needing kundli, pooja and gemstone guidance."],
  ["online-pandit-singapore.html", "Singapore", "Singapore", "Online pandit in Singapore", "For Singapore, Little India, Serangoon, Tampines and Jurong families needing online pooja, kundli and gemstone guidance."],
].map(([slug, shortName, countryLabel, cardTitle, cardCopy]) => ({ slug, shortName, countryLabel, cardTitle, cardCopy }));

const allCityPages = [
  ...existingCityPages,
  ...newCityPages.map((item) => ({
    slug: item.slug,
    shortName: item.shortName,
    countryLabel: item.countryLabel,
    cardTitle: item.h1.replace(" for pooja, kundli and gemstone guidance", "").replace(" for NRI pooja, kundli and gemstone guidance", ""),
    cardCopy: item.heroCopy,
  })),
];

const countryPages = [
  ["online-pooja-india.html", "Online Pooja India"],
  ["online-pandit-dubai-uae.html", "Online Pandit Dubai UAE"],
  ["online-pandit-usa.html", "Online Pandit USA"],
  ["online-pandit-uk.html", "Online Pandit UK"],
  ["online-pandit-canada.html", "Online Pandit Canada"],
  ["online-pandit-australia.html", "Online Pandit Australia"],
  ["online-pandit-singapore.html", "Online Pandit Singapore"],
  ["online-pandit-qatar.html", "Online Pandit Qatar"],
  ["online-pandit-oman.html", "Online Pandit Oman"],
  ["online-pandit-saudi-arabia.html", "Online Pandit Saudi Arabia"],
];

const countryCityLinks = {
  "online-pandit-usa.html": [
    ["online-pandit-new-york.html", "Online Pandit New York", "New York and New Jersey search page"],
    ["online-pandit-los-angeles.html", "Online Pandit Los Angeles", "Los Angeles and Southern California page"],
    ["online-pandit-chicago.html", "Online Pandit Chicago", "Chicago and Illinois NRI pooja search page"],
    ["online-pandit-dallas.html", "Online Pandit Dallas", "Dallas, Irving, Plano and Frisco page"],
    ["online-pandit-houston.html", "Online Pandit Houston", "Houston and Sugar Land online pandit page"],
    ["online-pandit-san-francisco.html", "Online Pandit San Francisco", "Bay Area, Fremont, Sunnyvale and San Jose page"],
    ["online-pandit-edison.html", "Online Pandit Edison", "Edison and New Jersey Hindu priest online page"],
    ["online-pandit-jersey-city.html", "Online Pandit Jersey City", "Jersey City, Newark and Hoboken page"],
  ],
  "online-pandit-uk.html": [
    ["online-pandit-london.html", "Online Pandit London", "London, Southall, Wembley and Harrow page"],
    ["online-pandit-birmingham.html", "Online Pandit Birmingham", "Birmingham and West Midlands page"],
    ["online-pandit-leicester.html", "Online Pandit Leicester", "Leicester and Belgrave page"],
    ["online-pandit-manchester.html", "Online Pandit Manchester", "Manchester, Bolton and Greater Manchester page"],
    ["online-pandit-coventry.html", "Online Pandit Coventry", "Coventry and Warwickshire page"],
    ["online-pandit-wolverhampton.html", "Online Pandit Wolverhampton", "Wolverhampton and Black Country page"],
    ["online-pandit-slough.html", "Online Pandit Slough", "Slough, Southall and West London page"],
  ],
  "online-pooja-india.html": [
    ["online-pandit-delhi.html", "Online Pandit Delhi", "Delhi NCR page for pooja, kundli and gemstone searches"],
    ["online-pandit-mumbai.html", "Online Pandit Mumbai", "Mumbai, Navi Mumbai and Thane search page"],
    ["online-pandit-bengaluru.html", "Online Pandit Bengaluru", "Bengaluru city page for pooja and kundli searches"],
    ["online-pandit-hyderabad.html", "Online Pandit Hyderabad", "Hyderabad city page for pooja and hawan searches"],
    ["online-pandit-chennai.html", "Online Pandit Chennai", "Chennai and Tamil Nadu online pooja search page"],
    ["online-pandit-pune.html", "Online Pandit Pune", "Pune and Maharashtra online pandit search page"],
    ["online-pandit-ahmedabad.html", "Online Pandit Ahmedabad", "Ahmedabad and Gujarat pooja search page"],
    ["online-pandit-kolkata.html", "Online Pandit Kolkata", "Kolkata and West Bengal online pooja search page"],
  ],
  "online-pandit-dubai-uae.html": [
    ["online-pandit-dubai.html", "Online Pandit Dubai", "Dubai city page for NRI pooja and kundli guidance"],
    ["online-pandit-abu-dhabi.html", "Online Pandit Abu Dhabi", "Abu Dhabi page for online pooja and kundli searches"],
    ["online-pandit-sharjah.html", "Online Pandit Sharjah", "Sharjah page for NRI pooja and online pandit searches"],
    ["online-pandit-ajman.html", "Online Pandit Ajman", "Ajman city page for UAE Indian families"],
    ["online-pandit-al-ain.html", "Online Pandit Al Ain", "Al Ain page for online pandit and pooja searches"],
  ],
};

function page(slug, city, regionLabel, countryLabel, lang, locale, countryPage, countryTitle, timeCopy, areas) {
  const nri = countryLabel === "India" ? "" : "NRI ";
  return {
    slug,
    city,
    shortName: city,
    regionLabel,
    countryLabel,
    lang,
    locale,
    countryPage,
    relatedCountryTitle: countryTitle,
    relatedCountryCopy: `Country-level ${countryLabel} service page`,
    title: `Online Pandit in ${regionLabel} | ${nri}Pooja & Kundli`,
    description: `Online pandit in ${regionLabel} for ${nri.toLowerCase()}pooja, hawan, kundli, gemstone, vastu and muhurat guidance with ${timeCopy.toLowerCase()}.`,
    eyebrow: `${regionLabel} online pandit desk`,
    h1: `Online pandit in ${regionLabel} for ${nri.toLowerCase()}pooja, kundli and gemstone guidance`,
    heroCopy: `For Indian families in ${areas}, Bandevi Astro supports online pooja, hawan, kundli, gemstone, vastu and muhurat enquiries with ${timeCopy.toLowerCase()}.`,
    areas,
    timeCopy,
    cityIntent: `This page supports searches around online pandit in ${city}, Hindu priest online ${city}, online pooja ${city}, kundli consultation ${city} and gemstone guidance ${countryLabel}.`,
    areasFaq: `The online desk can support ${areas} through WhatsApp and online consultation.`,
    whatsappText: `Namaste, I am in ${city} and need online pandit or pooja guidance. Please share the process.`,
    hreflang: lang,
    serviceTerms: [`Online pooja ${city}`, `Online pandit ${city}`, `Hindu priest online ${city}`, `${nri}pooja ${city}`.trim(), `Kundli consultation ${city}`, `Gemstone guidance ${countryLabel}`],
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
      <a href="online-pooja.html"><strong>Pooja</strong><span>Proof</span></a>
      <a href="online-pooja-service-areas.html"><strong>Areas</strong><span>Cities</span></a>
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
    <a href="online-pandit-usa.html"><strong>USA</strong><span>Chicago, Dallas, Houston, Bay Area</span></a>
    <a href="online-pandit-uk.html"><strong>UK</strong><span>Manchester, Coventry, Slough</span></a>
    <a href="online-pooja-india.html"><strong>India</strong><span>Chennai, Pune, Ahmedabad, Kolkata</span></a>
    <a href="online-pandit-dubai-uae.html"><strong>UAE</strong><span>Dubai, Ajman, Al Ain</span></a>
  </div>
</header>`;
}

function renderRegionalNav() {
  const countryLinks = countryPages.map(([href, title]) => `      <a href="${href}">${escapeHtml(title)}</a>`).join("\n");
  const cityLinks = allCityPages.map((item) => `      <a href="${item.slug}">Online Pandit ${escapeHtml(item.shortName)}</a>`).join("\n");
  return `    <nav class="footer-column" aria-label="Regional SEO links">
      <h2>Regions</h2>
      <a href="online-pooja-service-areas.html">Service Areas</a>
${countryLinks}
${cityLinks}
    </nav>`;
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
${renderRegionalNav()}
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

function renderCityPage(item) {
  const url = `${site}/${item.slug}`;
  const countryUrl = `${site}/${item.countryPage}`;
  const id = slugId(item.shortName);
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
      name: item.title,
      description: item.description,
      isPartOf: { "@id": `${site}/#website` },
      about: { "@id": `${url}#service` },
      inLanguage: item.lang,
    },
    {
      "@type": "Service",
      "@id": `${url}#service`,
      name: `Online pandit in ${item.regionLabel}`,
      serviceType: item.serviceTerms,
      description: item.description,
      provider: { "@id": `${site}/#organization` },
      areaServed: { "@type": "City", name: item.city },
      availableChannel: { "@type": "ServiceChannel", serviceUrl: url, servicePhone: "+918676846484" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${site}/` },
        { "@type": "ListItem", position: 2, name: "Service Areas", item: `${site}/online-pooja-service-areas.html` },
        { "@type": "ListItem", position: 3, name: item.relatedCountryTitle, item: countryUrl },
        { "@type": "ListItem", position: 4, name: item.regionLabel, item: url },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: [
        { "@type": "Question", name: `Can ${item.regionLabel} clients book online pooja?`, acceptedAnswer: { "@type": "Answer", text: `Yes. ${item.regionLabel} clients can enquire for online pooja, hawan, kundli, gemstone and muhurat guidance with timing coordination and quote confirmation before payment.` } },
        { "@type": "Question", name: `Which ${item.regionLabel} areas are relevant?`, acceptedAnswer: { "@type": "Answer", text: item.areasFaq } },
        { "@type": "Question", name: `Can ${item.regionLabel} families request proof after pooja?`, acceptedAnswer: { "@type": "Answer", text: "Proof, live option or completion update can be discussed before confirmation depending on the service, timing and ritual type." } },
      ],
    },
  ];
  const terms = item.serviceTerms.map((term) => `          <span>${escapeHtml(term)}</span>`).join("\n");
  const whatsapp = whatsAppUrl(item.whatsappText);
  return `<!DOCTYPE html>
<html lang="${item.lang}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(item.title)}</title>
    <meta name="description" content="${escapeHtml(item.description)}" />
    <link rel="canonical" href="${url}" />
    <link rel="alternate" hreflang="${item.hreflang}" href="${url}" />
    <link rel="alternate" hreflang="x-default" href="${site}/online-pooja-service-areas.html" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Bandevi Astro" />
    <meta property="og:locale" content="${item.locale}" />
    <meta property="og:title" content="${escapeHtml(item.title)}" />
    <meta property="og:description" content="${escapeHtml(item.description)}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${site}/${heroImage}" />
    <meta property="og:image:alt" content="${escapeHtml(item.h1)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(item.title)}" />
    <meta name="twitter:description" content="${escapeHtml(item.description)}" />
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
      <section class="hero regional-hero" aria-label="${escapeHtml(item.regionLabel)} online pandit service">
        <img class="hero-slide-image" src="${heroImage}" alt="${escapeHtml(item.h1)}" />
        <div class="hero-shade" aria-hidden="true"></div>
        <div class="hero-content">
          <p class="eyebrow">${escapeHtml(item.eyebrow)}</p>
          <h1>${escapeHtml(item.h1)}</h1>
          <p class="hero-copy">${escapeHtml(item.heroCopy)}</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="${whatsapp}">Ask on WhatsApp</a>
            <a class="btn btn-secondary" href="book-online.html">Create Booking ID</a>
          </div>
          <div class="hero-proof-row" aria-label="${escapeHtml(item.regionLabel)} trust highlights">
            <span>${escapeHtml(item.regionLabel)}</span>
            <span>${escapeHtml(item.timeCopy)}</span>
            <span>Proof where applicable</span>
          </div>
        </div>
      </section>

      <section class="section regional-intent-section" aria-labelledby="${id}-intent-title">
        <div class="section-heading">
          <p class="eyebrow">${escapeHtml(item.regionLabel)} search intent</p>
          <h2 id="${id}-intent-title">Built for ${escapeHtml(item.regionLabel)} families who want pandit support without confusion.</h2>
          <p>${escapeHtml(item.cityIntent)}</p>
        </div>
        <div class="regional-keyword-grid" aria-label="${escapeHtml(item.regionLabel)} search topics">
${terms}
        </div>
      </section>

      <section class="section regional-services-section" aria-labelledby="${id}-services-title">
        <div class="section-heading">
          <p class="eyebrow">${escapeHtml(item.regionLabel)} services</p>
          <h2 id="${id}-services-title">What ${escapeHtml(item.regionLabel)} clients can request</h2>
        </div>
        <div class="regional-card-grid">
          <article class="regional-card"><h3>Pooja and hawan</h3><p>Discuss Satyanarayan pooja, grah shanti, navgrah hawan, Lakshmi pooja, Durga pooja and other family rituals with timing and proof preference.</p></article>
          <article class="regional-card"><h3>Kundli and muhurat</h3><p>Share birth details and the concern for marriage, career, business, vastu, muhurat or remedy guidance from your city.</p></article>
          <article class="regional-card"><h3>Gemstone guidance</h3><p>Gemstone advice is given only after suitability review, with quote and certificate preference discussed before order.</p></article>
        </div>
      </section>

      <section class="section regional-process-section" aria-labelledby="${id}-process-title">
        <div class="section-heading">
          <p class="eyebrow">Booking process</p>
          <h2 id="${id}-process-title">Simple ${escapeHtml(item.regionLabel)} enquiry flow</h2>
        </div>
        <ol class="regional-process-list">
          <li>Share ${escapeHtml(item.regionLabel)} area, service need, preferred time and birth details if needed.</li>
          <li>Receive recommendation, quote, timing and proof option on WhatsApp.</li>
          <li>Create or confirm Booking ID before payment.</li>
          <li>Receive update, live option or proof where applicable after completion.</li>
        </ol>
      </section>

      <section class="section regional-links-section" aria-labelledby="${id}-links-title">
        <div class="section-heading">
          <p class="eyebrow">Related pages</p>
          <h2 id="${id}-links-title">Continue with regional and trust pages</h2>
        </div>
        <div class="regional-link-grid">
          <a href="${item.countryPage}"><strong>${escapeHtml(item.relatedCountryTitle)}</strong><span>${escapeHtml(item.relatedCountryCopy)}</span></a>
          <a href="online-pooja-service-areas.html"><strong>Service Areas Hub</strong><span>Global country and city cluster</span></a>
          <a href="proof-center.html"><strong>Proof Center</strong><span>Company-stated facts, policies and booking proof</span></a>
          <a href="reviews-testimonials.html"><strong>Reviews</strong><span>Approved review and testimonial policy</span></a>
        </div>
      </section>

      <section class="section faq-section regional-faq-section" aria-labelledby="${id}-faq-title">
        <div class="section-heading">
          <p class="eyebrow">${escapeHtml(item.regionLabel)} FAQ</p>
          <h2 id="${id}-faq-title">Online pandit ${escapeHtml(item.regionLabel)} FAQ</h2>
        </div>
        <div class="faq-list">
          <details open><summary>Can ${escapeHtml(item.regionLabel)} clients book online pooja?</summary><p>Yes. ${escapeHtml(item.regionLabel)} clients can enquire for online pooja, hawan, kundli, gemstone and muhurat guidance with timing coordination and quote confirmation before payment.</p></details>
          <details><summary>Which ${escapeHtml(item.regionLabel)} areas are relevant?</summary><p>${escapeHtml(item.areasFaq)}</p></details>
          <details><summary>Can ${escapeHtml(item.regionLabel)} families request proof after pooja?</summary><p>Proof, live option or completion update can be discussed before confirmation depending on the service, timing and ritual type.</p></details>
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

function renderCityMarketSection() {
  const cards = allCityPages
    .map((item) => `          <article class="service-area-card">
            <span>${escapeHtml(item.countryLabel)} | ${escapeHtml(item.shortName)}</span>
            <h3>${escapeHtml(item.cardTitle)}</h3>
            <p>${escapeHtml(item.cardCopy)}</p>
            <a href="${item.slug}">Open ${escapeHtml(item.shortName)} page</a>
          </article>`)
    .join("\n");
  return `      <section class="section service-area-map-section" aria-labelledby="city-market-title">
        <div class="section-heading">
          <p class="eyebrow">Priority international city markets</p>
          <h2 id="city-market-title">City pages for USA, UK, India, UAE and global search growth</h2>
          <p>These city pages support high-intent local and NRI searches while still routing every enquiry through the same quote-before-payment and Booking ID process.</p>
        </div>
        <div class="service-area-grid">
${cards}
        </div>
      </section>`;
}

function updateServiceAreaHub() {
  let html = read("online-pooja-service-areas.html");
  html = html.replace(
    /<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/,
    (full, rawJson) => {
      const data = JSON.parse(rawJson);
      const list = data["@graph"].find((item) => item["@id"] === `${site}/online-pooja-service-areas.html#city-market-list`);
      list.name = "Bandevi Astro priority international city online pandit pages";
      list.itemListElement = allCityPages.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: `Online Pandit ${item.shortName}`,
        url: `${site}/${item.slug}`,
      }));
      return `<script type="application/ld+json">\n${jsonLd(data["@graph"])}\n    </script>`;
    }
  );
  html = html.replace(
    /      <section class="section service-area-map-section" aria-labelledby="city-market-title">[\s\S]*?      <\/section>\r?\n\r?\n      <section class="section regional-intent-section"/,
    `${renderCityMarketSection()}\n\n      <section class="section regional-intent-section"`
  );
  html = html.replace(/    <nav class="footer-column" aria-label="Regional SEO links">[\s\S]*?    <\/nav>/, renderRegionalNav());
  write("online-pooja-service-areas.html", html);
}

function updateCountryPages() {
  const baseLinks = [
    ["online-pooja.html", "Online Pooja", "Temple, live video or proof options"],
    ["hawan.html", "Hawan Services", "Grah shanti, navgrah and family rituals"],
    ["kundli.html", "Kundli Consultation", "Dosh, marriage, career and remedies"],
    ["gemstone-shop.html", "Gemstone Guidance", "Ring, pendant and loose stone quote"],
    ["online-pooja-service-areas.html", "Service Areas Hub", "Global country and city cluster"],
  ];
  for (const [file, cityLinks] of Object.entries(countryCityLinks)) {
    let html = read(file);
    const links = [...cityLinks, ...baseLinks]
      .map(([href, title, copy]) => `          <a href="${href}"><strong>${escapeHtml(title)}</strong><span>${escapeHtml(copy)}</span></a>`)
      .join("\n");
    html = html.replace(/        <div class="regional-link-grid">[\s\S]*?        <\/div>/, `        <div class="regional-link-grid">\n${links}\n        </div>`);
    html = html.replace(/    <nav class="footer-column" aria-label="Regional SEO links">[\s\S]*?    <\/nav>/, renderRegionalNav());
    write(file, html);
  }
}

function updateHomepage() {
  let html = read("index.html");
  const links = [
    ["online-pooja-service-areas.html", "Service Areas Hub", "Global country and city-page cluster"],
    ["online-pandit-usa.html", "Online Pandit USA", "New York, Los Angeles, Chicago, Dallas, Houston and Bay Area pages"],
    ["online-pandit-uk.html", "Online Pandit UK", "London, Birmingham, Leicester, Manchester, Coventry and Slough pages"],
    ["online-pooja-india.html", "Online Pooja India", "Delhi, Mumbai, Bengaluru, Hyderabad, Chennai, Pune, Ahmedabad and Kolkata pages"],
    ["online-pandit-dubai-uae.html", "Online Pandit Dubai UAE", "Dubai, Abu Dhabi, Sharjah, Ajman and Al Ain pages"],
    ["online-pandit-chicago.html", "Online Pandit Chicago", "USA city page for NRI pooja and kundli searches"],
    ["online-pandit-dallas.html", "Online Pandit Dallas", "Texas city page for online pandit searches"],
    ["online-pandit-manchester.html", "Online Pandit Manchester", "UK city page for Hindu priest online searches"],
    ["online-pandit-chennai.html", "Online Pandit Chennai", "India city page for online pooja searches"],
    ["online-pandit-ajman.html", "Online Pandit Ajman", "UAE city page for NRI pooja searches"],
  ]
    .map(([href, title, copy]) => `          <a href="${href}"><strong>${escapeHtml(title)}</strong><span>${escapeHtml(copy)}</span></a>`)
    .join("\n");
  html = html.replace(
    /        <div class="regional-link-grid">\r?\n          <a href="online-pooja-service-areas\.html">[\s\S]*?        <\/div>\r?\n      <\/section>\r?\n      <!-- Regional SEO Section End -->/,
    `        <div class="regional-link-grid">\n${links}\n        </div>\n      </section>\n      <!-- Regional SEO Section End -->`
  );
  html = html.replace(/    <nav class="footer-column" aria-label="Regional SEO links">[\s\S]*?    <\/nav>/, renderRegionalNav());
  write("index.html", html);
}

function updateSitemap() {
  let sitemap = read("sitemap.xml");
  for (const item of newCityPages) {
    const loc = `${site}/${item.slug}`;
    if (sitemap.includes(`<loc>${loc}</loc>`)) continue;
    sitemap = sitemap.replace(
      "\n</urlset>",
      `\n  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.9</priority>\n  </url>\n</urlset>`
    );
  }
  write("sitemap.xml", sitemap);
}

function generatePages() {
  for (const item of newCityPages) {
    write(item.slug, renderCityPage(item));
  }
}

generatePages();
updateServiceAreaHub();
updateCountryPages();
updateHomepage();
updateSitemap();

console.log(`Added ${newCityPages.length} international city pages and updated Batch 5 city links.`);
