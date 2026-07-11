const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const today = "2026-07-11";
const site = "https://bandeviastro.com";
const heroImage = "assets/spiritual-consultation-hero.png";

const cityPages = [
  {
    slug: "online-pandit-mumbai.html",
    city: "Mumbai",
    shortName: "Mumbai",
    regionLabel: "Mumbai",
    countryLabel: "India",
    lang: "en-IN",
    locale: "en_IN",
    countryPage: "online-pooja-india.html",
    title: "Online Pandit in Mumbai | Pooja, Kundli & Gemstone",
    description:
      "Online pandit in Mumbai for pooja, hawan, kundli, gemstone, vastu and muhurat guidance with WhatsApp quote and Booking ID.",
    eyebrow: "Mumbai online pandit desk",
    h1: "Online pandit in Mumbai for pooja, kundli and gemstone guidance",
    heroCopy:
      "For families in Mumbai, Navi Mumbai, Thane, Andheri, Borivali and nearby Maharashtra areas, Bandevi Astro supports online pooja, hawan, kundli, gemstone, vastu and muhurat enquiries with WhatsApp confirmation.",
    areas: "Mumbai, Navi Mumbai, Thane, Andheri, Borivali and nearby Maharashtra areas",
    timeCopy: "India time planned",
    cityIntent:
      "This page supports searches around online pandit in Mumbai, online pooja Mumbai, kundli consultation Mumbai, hawan booking Mumbai and gemstone guidance Mumbai.",
    areasFaq:
      "The online desk can support Mumbai, Navi Mumbai, Thane, Andheri, Borivali and nearby Maharashtra clients through WhatsApp and online consultation.",
    relatedCountryTitle: "Online Pooja India",
    relatedCountryCopy: "Country-level India service page",
    whatsappText:
      "Namaste, I am in Mumbai and need online pandit or pooja guidance. Please share the process.",
    hreflang: "en-IN",
    serviceTerms: [
      "Online pooja Mumbai",
      "Online pandit Mumbai",
      "Kundli consultation Mumbai",
      "Hawan booking Mumbai",
      "Gemstone guidance Mumbai",
      "Muhurta and vastu Mumbai",
    ],
  },
  {
    slug: "online-pandit-bengaluru.html",
    city: "Bengaluru",
    shortName: "Bengaluru",
    regionLabel: "Bengaluru",
    countryLabel: "India",
    lang: "en-IN",
    locale: "en_IN",
    countryPage: "online-pooja-india.html",
    title: "Online Pandit in Bengaluru | Pooja, Kundli & Gemstone",
    description:
      "Online pandit in Bengaluru for pooja, hawan, kundli, gemstone, vastu and muhurat guidance with WhatsApp quote and Booking ID.",
    eyebrow: "Bengaluru online pandit desk",
    h1: "Online pandit in Bengaluru for pooja, kundli and gemstone guidance",
    heroCopy:
      "For families in Bengaluru, Whitefield, Electronic City, Indiranagar, Koramangala and Jayanagar, Bandevi Astro supports online pooja, hawan, kundli, gemstone, vastu and muhurat enquiries with WhatsApp confirmation.",
    areas: "Bengaluru, Whitefield, Electronic City, Indiranagar, Koramangala and Jayanagar",
    timeCopy: "India time planned",
    cityIntent:
      "This page supports searches around online pandit in Bengaluru, online pooja Bengaluru, kundli consultation Bengaluru, hawan booking Bengaluru and gemstone guidance Bengaluru.",
    areasFaq:
      "The online desk can support Bengaluru, Whitefield, Electronic City, Indiranagar, Koramangala and Jayanagar clients through WhatsApp and online consultation.",
    relatedCountryTitle: "Online Pooja India",
    relatedCountryCopy: "Country-level India service page",
    whatsappText:
      "Namaste, I am in Bengaluru and need online pandit or pooja guidance. Please share the process.",
    hreflang: "en-IN",
    serviceTerms: [
      "Online pooja Bengaluru",
      "Online pandit Bengaluru",
      "Kundli consultation Bengaluru",
      "Hawan booking Bengaluru",
      "Gemstone guidance Bengaluru",
      "Muhurta and vastu Bengaluru",
    ],
  },
  {
    slug: "online-pandit-hyderabad.html",
    city: "Hyderabad",
    shortName: "Hyderabad",
    regionLabel: "Hyderabad",
    countryLabel: "India",
    lang: "en-IN",
    locale: "en_IN",
    countryPage: "online-pooja-india.html",
    title: "Online Pandit in Hyderabad | Pooja, Kundli & Gemstone",
    description:
      "Online pandit in Hyderabad for pooja, hawan, kundli, gemstone, vastu and muhurat guidance with WhatsApp quote and Booking ID.",
    eyebrow: "Hyderabad online pandit desk",
    h1: "Online pandit in Hyderabad for pooja, kundli and gemstone guidance",
    heroCopy:
      "For families in Hyderabad, Secunderabad, Gachibowli, HITEC City, Kukatpally and Banjara Hills, Bandevi Astro supports online pooja, hawan, kundli, gemstone, vastu and muhurat enquiries with WhatsApp confirmation.",
    areas: "Hyderabad, Secunderabad, Gachibowli, HITEC City, Kukatpally and Banjara Hills",
    timeCopy: "India time planned",
    cityIntent:
      "This page supports searches around online pandit in Hyderabad, online pooja Hyderabad, kundli consultation Hyderabad, hawan booking Hyderabad and gemstone guidance Hyderabad.",
    areasFaq:
      "The online desk can support Hyderabad, Secunderabad, Gachibowli, HITEC City, Kukatpally and Banjara Hills clients through WhatsApp and online consultation.",
    relatedCountryTitle: "Online Pooja India",
    relatedCountryCopy: "Country-level India service page",
    whatsappText:
      "Namaste, I am in Hyderabad and need online pandit or pooja guidance. Please share the process.",
    hreflang: "en-IN",
    serviceTerms: [
      "Online pooja Hyderabad",
      "Online pandit Hyderabad",
      "Kundli consultation Hyderabad",
      "Hawan booking Hyderabad",
      "Gemstone guidance Hyderabad",
      "Muhurta and vastu Hyderabad",
    ],
  },
  {
    slug: "online-pandit-abu-dhabi.html",
    city: "Abu Dhabi",
    shortName: "Abu Dhabi",
    regionLabel: "Abu Dhabi",
    countryLabel: "UAE",
    lang: "en-AE",
    locale: "en_AE",
    countryPage: "online-pandit-dubai-uae.html",
    title: "Online Pandit in Abu Dhabi | NRI Pooja & Kundli",
    description:
      "Online pandit in Abu Dhabi for NRI pooja, hawan, kundli, gemstone, vastu and muhurat guidance with UAE time coordination.",
    eyebrow: "Abu Dhabi online pandit desk",
    h1: "Online pandit in Abu Dhabi for NRI pooja, kundli and gemstone guidance",
    heroCopy:
      "For Indian families in Abu Dhabi, Mussafah, Khalifa City, Al Reem Island and nearby UAE areas, Bandevi Astro supports online pooja, hawan, kundli, gemstone, vastu and muhurat enquiries with UAE time coordination.",
    areas: "Abu Dhabi, Mussafah, Khalifa City, Al Reem Island and nearby UAE areas",
    timeCopy: "UAE time planned",
    cityIntent:
      "This page supports searches around online pandit in Abu Dhabi, NRI pooja Abu Dhabi, kundli consultation Abu Dhabi, hawan booking Abu Dhabi and gemstone guidance UAE.",
    areasFaq:
      "The online desk can support Abu Dhabi, Mussafah, Khalifa City, Al Reem Island and nearby UAE clients through WhatsApp and online consultation.",
    relatedCountryTitle: "Dubai UAE Page",
    relatedCountryCopy: "Country-level UAE service page",
    whatsappText:
      "Namaste, I am in Abu Dhabi and need online pandit or pooja guidance. Please share the process.",
    hreflang: "en-AE",
    serviceTerms: [
      "Online pooja Abu Dhabi",
      "Online pandit Abu Dhabi",
      "NRI pooja Abu Dhabi",
      "Kundli consultation Abu Dhabi",
      "Gemstone guidance Abu Dhabi",
      "Muhurta and vastu UAE",
    ],
  },
  {
    slug: "online-pandit-sharjah.html",
    city: "Sharjah",
    shortName: "Sharjah",
    regionLabel: "Sharjah",
    countryLabel: "UAE",
    lang: "en-AE",
    locale: "en_AE",
    countryPage: "online-pandit-dubai-uae.html",
    title: "Online Pandit in Sharjah | NRI Pooja & Kundli",
    description:
      "Online pandit in Sharjah for NRI pooja, hawan, kundli, gemstone, vastu and muhurat guidance with UAE time coordination.",
    eyebrow: "Sharjah online pandit desk",
    h1: "Online pandit in Sharjah for NRI pooja, kundli and gemstone guidance",
    heroCopy:
      "For Indian families in Sharjah, Al Nahda, Rolla, Muwaileh, Ajman and nearby UAE areas, Bandevi Astro supports online pooja, hawan, kundli, gemstone, vastu and muhurat enquiries with UAE time coordination.",
    areas: "Sharjah, Al Nahda, Rolla, Muwaileh, Ajman and nearby UAE areas",
    timeCopy: "UAE time planned",
    cityIntent:
      "This page supports searches around online pandit in Sharjah, NRI pooja Sharjah, kundli consultation Sharjah, hawan booking Sharjah and gemstone guidance UAE.",
    areasFaq:
      "The online desk can support Sharjah, Al Nahda, Rolla, Muwaileh, Ajman and nearby UAE clients through WhatsApp and online consultation.",
    relatedCountryTitle: "Dubai UAE Page",
    relatedCountryCopy: "Country-level UAE service page",
    whatsappText:
      "Namaste, I am in Sharjah and need online pandit or pooja guidance. Please share the process.",
    hreflang: "en-AE",
    serviceTerms: [
      "Online pooja Sharjah",
      "Online pandit Sharjah",
      "NRI pooja Sharjah",
      "Kundli consultation Sharjah",
      "Gemstone guidance Sharjah",
      "Muhurta and vastu UAE",
    ],
  },
  {
    slug: "online-pandit-los-angeles.html",
    city: "Los Angeles",
    shortName: "Los Angeles",
    regionLabel: "Los Angeles",
    countryLabel: "USA",
    lang: "en-US",
    locale: "en_US",
    countryPage: "online-pandit-usa.html",
    title: "Online Pandit in Los Angeles | NRI Pooja & Kundli",
    description:
      "Online pandit in Los Angeles for NRI pooja, hawan, kundli, gemstone, vastu and muhurat guidance with US time coordination.",
    eyebrow: "Los Angeles online pandit desk",
    h1: "Online pandit in Los Angeles for NRI pooja, kundli and gemstone guidance",
    heroCopy:
      "For Indian families in Los Angeles, Artesia, Cerritos, Irvine, Pasadena and Orange County, Bandevi Astro supports online pooja, hawan, kundli, gemstone, vastu and muhurat enquiries with US time coordination.",
    areas: "Los Angeles, Artesia, Cerritos, Irvine, Pasadena and Orange County",
    timeCopy: "US time planned",
    cityIntent:
      "This page supports searches around online pandit in Los Angeles, Hindu priest online Los Angeles, NRI pooja Los Angeles, kundli consultation Los Angeles and gemstone guidance USA.",
    areasFaq:
      "The online desk can support Los Angeles, Artesia, Cerritos, Irvine, Pasadena and Orange County clients through WhatsApp and online consultation.",
    relatedCountryTitle: "Online Pandit USA",
    relatedCountryCopy: "Country-level USA service page",
    whatsappText:
      "Namaste, I am in Los Angeles and need online pandit or pooja guidance. Please share the process.",
    hreflang: "en-US",
    serviceTerms: [
      "Online pooja Los Angeles",
      "Online pandit Los Angeles",
      "Hindu priest online Los Angeles",
      "NRI pooja Los Angeles",
      "Kundli consultation Los Angeles",
      "Gemstone guidance USA",
    ],
  },
  {
    slug: "online-pandit-birmingham.html",
    city: "Birmingham",
    shortName: "Birmingham",
    regionLabel: "Birmingham UK",
    countryLabel: "UK",
    lang: "en-GB",
    locale: "en_GB",
    countryPage: "online-pandit-uk.html",
    title: "Online Pandit in Birmingham UK | Pooja & Kundli",
    description:
      "Online pandit in Birmingham UK for NRI pooja, hawan, kundli, gemstone, vastu and muhurat guidance with UK time coordination.",
    eyebrow: "Birmingham UK online pandit desk",
    h1: "Online pandit in Birmingham UK for pooja, kundli and gemstone guidance",
    heroCopy:
      "For Indian families in Birmingham, Wolverhampton, Coventry, Solihull and West Bromwich, Bandevi Astro supports online pooja, hawan, kundli, gemstone, vastu and muhurat enquiries with UK time coordination.",
    areas: "Birmingham, Wolverhampton, Coventry, Solihull and West Bromwich",
    timeCopy: "UK time planned",
    cityIntent:
      "This page supports searches around online pandit in Birmingham UK, Hindu priest online Birmingham, NRI pooja Birmingham, kundli consultation Birmingham and gemstone guidance UK.",
    areasFaq:
      "The online desk can support Birmingham, Wolverhampton, Coventry, Solihull and West Bromwich clients through WhatsApp and online consultation.",
    relatedCountryTitle: "Online Pandit UK",
    relatedCountryCopy: "Country-level UK service page",
    whatsappText:
      "Namaste, I am in Birmingham UK and need online pandit or pooja guidance. Please share the process.",
    hreflang: "en-GB",
    serviceTerms: [
      "Online pooja Birmingham UK",
      "Online pandit Birmingham UK",
      "Hindu priest online Birmingham",
      "NRI pooja Birmingham",
      "Kundli consultation Birmingham",
      "Gemstone guidance UK",
    ],
  },
  {
    slug: "online-pandit-leicester.html",
    city: "Leicester",
    shortName: "Leicester",
    regionLabel: "Leicester UK",
    countryLabel: "UK",
    lang: "en-GB",
    locale: "en_GB",
    countryPage: "online-pandit-uk.html",
    title: "Online Pandit in Leicester UK | Pooja & Kundli",
    description:
      "Online pandit in Leicester UK for NRI pooja, hawan, kundli, gemstone, vastu and muhurat guidance with UK time coordination.",
    eyebrow: "Leicester UK online pandit desk",
    h1: "Online pandit in Leicester UK for pooja, kundli and gemstone guidance",
    heroCopy:
      "For Indian families in Leicester, Belgrave, Oadby, Evington and Loughborough, Bandevi Astro supports online pooja, hawan, kundli, gemstone, vastu and muhurat enquiries with UK time coordination.",
    areas: "Leicester, Belgrave, Oadby, Evington and Loughborough",
    timeCopy: "UK time planned",
    cityIntent:
      "This page supports searches around online pandit in Leicester UK, Hindu priest online Leicester, NRI pooja Leicester, kundli consultation Leicester and gemstone guidance UK.",
    areasFaq:
      "The online desk can support Leicester, Belgrave, Oadby, Evington and Loughborough clients through WhatsApp and online consultation.",
    relatedCountryTitle: "Online Pandit UK",
    relatedCountryCopy: "Country-level UK service page",
    whatsappText:
      "Namaste, I am in Leicester UK and need online pandit or pooja guidance. Please share the process.",
    hreflang: "en-GB",
    serviceTerms: [
      "Online pooja Leicester UK",
      "Online pandit Leicester UK",
      "Hindu priest online Leicester",
      "NRI pooja Leicester",
      "Kundli consultation Leicester",
      "Gemstone guidance UK",
    ],
  },
];

const existingCityPages = [
  { slug: "online-pandit-delhi.html", name: "Online Pandit Delhi NCR", shortName: "Delhi NCR", countryLabel: "India", cardTitle: "Online pandit in Delhi", cardCopy: "For Delhi, Noida, Gurugram, Ghaziabad and Faridabad clients searching pooja, hawan, kundli, vastu, muhurat and gemstone guidance." },
  { slug: "online-pandit-dubai.html", name: "Online Pandit Dubai", shortName: "Dubai", countryLabel: "UAE", cardTitle: "Online pandit in Dubai", cardCopy: "For Dubai Indian families needing NRI pooja, online pandit, kundli, hawan, gemstone and muhurat support with UAE time planning." },
  { slug: "online-pandit-new-york.html", name: "Online Pandit New York", shortName: "New York", countryLabel: "USA", cardTitle: "Online pandit in New York", cardCopy: "For New York, Queens, Brooklyn, Long Island and nearby New Jersey families needing online Hindu priest and astrology guidance." },
  { slug: "online-pandit-london.html", name: "Online Pandit London UK", shortName: "London", countryLabel: "UK", cardTitle: "Online pandit in London UK", cardCopy: "For London, Southall, Wembley, Harrow and East Ham families needing online pooja, kundli, hawan and gemstone guidance." },
];

const allCityPages = [
  ...existingCityPages,
  ...cityPages.map((page) => ({
    slug: page.slug,
    name: `Online Pandit ${page.regionLabel}`,
    shortName: page.shortName,
    countryLabel: page.countryLabel,
    cardTitle: page.h1.replace(" for pooja, kundli and gemstone guidance", "").replace(" for NRI pooja, kundli and gemstone guidance", ""),
    cardCopy: page.heroCopy,
  })),
];

const countryCityLinks = {
  "online-pooja-india.html": [
    ["online-pandit-delhi.html", "Online Pandit Delhi", "Delhi NCR page for pooja, kundli and gemstone searches"],
    ["online-pandit-mumbai.html", "Online Pandit Mumbai", "Mumbai, Navi Mumbai and Thane search page"],
    ["online-pandit-bengaluru.html", "Online Pandit Bengaluru", "Bengaluru city page for pooja and kundli searches"],
    ["online-pandit-hyderabad.html", "Online Pandit Hyderabad", "Hyderabad city page for pooja, hawan and gemstone guidance"],
  ],
  "online-pandit-dubai-uae.html": [
    ["online-pandit-dubai.html", "Online Pandit Dubai", "Dubai city page for NRI pooja, kundli and gemstone guidance"],
    ["online-pandit-abu-dhabi.html", "Online Pandit Abu Dhabi", "Abu Dhabi UAE page for NRI pooja and kundli searches"],
    ["online-pandit-sharjah.html", "Online Pandit Sharjah", "Sharjah UAE page for NRI pooja and online pandit searches"],
  ],
  "online-pandit-usa.html": [
    ["online-pandit-new-york.html", "Online Pandit New York", "New York city page for NRI pooja and Hindu priest searches"],
    ["online-pandit-los-angeles.html", "Online Pandit Los Angeles", "Los Angeles city page for NRI pooja and kundli searches"],
  ],
  "online-pandit-uk.html": [
    ["online-pandit-london.html", "Online Pandit London", "London city page for UK pooja and Hindu priest searches"],
    ["online-pandit-birmingham.html", "Online Pandit Birmingham", "Birmingham UK page for pooja and kundli searches"],
    ["online-pandit-leicester.html", "Online Pandit Leicester", "Leicester UK page for NRI pooja and pandit searches"],
  ],
};

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

function whatsAppUrl(text) {
  return `https://wa.me/918676846484?text=${encodeURIComponent(text)}`;
}

function renderHeader(activeCityLabel) {
  return `<header class="site-header premium-header international-header" aria-label="Main header">
  <div class="header-topline international-topline">
    <span><strong>Global desk</strong> India, USA, UK, Canada, UAE and NRI families</span>
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
    <a href="online-pooja-service-areas.html"><strong>Service Areas</strong><span>India, UAE, USA and UK</span></a>
    <a href="online-pooja-india.html"><strong>India Cities</strong><span>Delhi, Mumbai, Bengaluru, Hyderabad</span></a>
    <a href="online-pandit-dubai-uae.html"><strong>UAE Cities</strong><span>Dubai, Abu Dhabi, Sharjah</span></a>
    <a href="online-pandit-usa.html"><strong>USA Cities</strong><span>New York, Los Angeles</span></a>
    <a href="online-pandit-uk.html"><strong>UK Cities</strong><span>London, Birmingham, Leicester</span></a>
  </div>
</header>`;
}

function renderCityFooter() {
  const cityLinks = allCityPages
    .map((page) => `      <a href="${page.slug}">Online Pandit ${escapeHtml(page.shortName)}</a>`)
    .join("\n");
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
    <nav class="footer-column" aria-label="City market links">
      <h2>City Pages</h2>
${cityLinks}
    </nav>
    <nav class="footer-column" aria-label="Regional SEO links">
      <h2>Regions</h2>
      <a href="online-pooja-service-areas.html">Service Areas</a>
      <a href="online-pooja-india.html">Online Pooja India</a>
      <a href="online-pandit-dubai-uae.html">Online Pandit Dubai UAE</a>
      <a href="online-pandit-uk.html">Online Pandit UK</a>
      <a href="online-pandit-usa.html">Online Pandit USA</a>
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

function renderCityPage(page) {
  const url = `${site}/${page.slug}`;
  const countryUrl = `${site}/${page.countryPage}`;
  const graph = [
    {
      "@type": "Organization",
      "@id": `${site}/#organization`,
      name: "Bandevi Astro",
      url: `${site}/`,
      email: "bandeviglobalgroup@gmail.com",
      telephone: ["+918676846484", "+916204641845"],
      founder: {
        "@type": "Person",
        name: "Pdt. Jyotishacharya Kumodanand Jha (Shastri)",
      },
    },
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: page.title,
      description: page.description,
      isPartOf: {
        "@id": `${site}/#website`,
      },
      about: {
        "@id": `${url}#service`,
      },
      inLanguage: page.lang,
    },
    {
      "@type": "Service",
      "@id": `${url}#service`,
      name: `Online pandit in ${page.regionLabel}`,
      serviceType: page.serviceTerms,
      provider: {
        "@id": `${site}/#organization`,
      },
      areaServed: {
        "@type": "City",
        name: page.city,
      },
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
        { "@type": "ListItem", position: 3, name: page.regionLabel, item: url },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: `Can ${page.regionLabel} clients book online pooja from India?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `Yes. ${page.regionLabel} clients can enquire for online pooja, hawan, kundli, gemstone and muhurat guidance with timing coordination and quote confirmation before payment.`,
          },
        },
        {
          "@type": "Question",
          name: `Which ${page.regionLabel} areas are relevant?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: page.areasFaq,
          },
        },
        {
          "@type": "Question",
          name: `Can ${page.regionLabel} families request proof after pooja?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: "Proof, live option or completion update can be discussed before confirmation depending on the service, timing and ritual type.",
          },
        },
      ],
    },
  ];

  const whatsapp = whatsAppUrl(page.whatsappText);
  const serviceTermsHtml = page.serviceTerms
    .map((term) => `          <span>${escapeHtml(term)}</span>`)
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
${renderHeader(page.regionLabel)}

    <main id="top" class="regional-page-main">
      <section class="hero regional-hero" aria-label="${escapeHtml(page.regionLabel)} online pandit service">
        <img class="hero-slide-image" src="${heroImage}" alt="${escapeHtml(page.h1)}" />
        <div class="hero-shade" aria-hidden="true"></div>
        <div class="hero-content">
          <p class="eyebrow">${escapeHtml(page.eyebrow)}</p>
          <h1>${escapeHtml(page.h1)}</h1>
          <p class="hero-copy">${escapeHtml(page.heroCopy)}</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="${whatsapp}">Ask on WhatsApp</a>
            <a class="btn btn-secondary" href="book-online.html">Create Booking ID</a>
          </div>
          <div class="hero-proof-row" aria-label="${escapeHtml(page.regionLabel)} trust highlights">
            <span>${escapeHtml(page.regionLabel)}</span>
            <span>${escapeHtml(page.timeCopy)}</span>
            <span>Proof where applicable</span>
          </div>
        </div>
      </section>

      <section class="section regional-intent-section" aria-labelledby="${page.shortName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-intent-title">
        <div class="section-heading">
          <p class="eyebrow">${escapeHtml(page.regionLabel)} search intent</p>
          <h2 id="${page.shortName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-intent-title">Built for ${escapeHtml(page.regionLabel)} families who want pandit support without confusion.</h2>
          <p>${escapeHtml(page.cityIntent)}</p>
        </div>
        <div class="regional-keyword-grid" aria-label="${escapeHtml(page.regionLabel)} search topics">
${serviceTermsHtml}
        </div>
      </section>

      <section class="section regional-services-section" aria-labelledby="${page.shortName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-services-title">
        <div class="section-heading">
          <p class="eyebrow">${escapeHtml(page.regionLabel)} services</p>
          <h2 id="${page.shortName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-services-title">What ${escapeHtml(page.regionLabel)} clients can request</h2>
        </div>
        <div class="regional-card-grid">
          <article class="regional-card">
            <h3>Pooja and hawan</h3>
            <p>Discuss Satyanarayan pooja, grah shanti, navgrah hawan, Lakshmi pooja, Durga pooja and other family rituals with timing and proof preference.</p>
          </article>
          <article class="regional-card">
            <h3>Kundli and muhurat</h3>
            <p>Share birth details and the concern for marriage, career, business, vastu, muhurat or remedy guidance from your city.</p>
          </article>
          <article class="regional-card">
            <h3>Gemstone guidance</h3>
            <p>Gemstone advice is given only after suitability review, with quote and certificate preference discussed before order.</p>
          </article>
        </div>
      </section>

      <section class="section regional-process-section" aria-labelledby="${page.shortName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-process-title">
        <div class="section-heading">
          <p class="eyebrow">Booking process</p>
          <h2 id="${page.shortName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-process-title">Simple ${escapeHtml(page.regionLabel)} enquiry flow</h2>
        </div>
        <ol class="regional-process-list">
          <li>Share ${escapeHtml(page.regionLabel)} area, service need, preferred time and birth details if needed.</li>
          <li>Receive recommendation, quote, timing and proof option on WhatsApp.</li>
          <li>Create or confirm Booking ID before payment.</li>
          <li>Receive update, live option or proof where applicable after completion.</li>
        </ol>
      </section>

      <section class="section regional-links-section" aria-labelledby="${page.shortName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-links-title">
        <div class="section-heading">
          <p class="eyebrow">Related pages</p>
          <h2 id="${page.shortName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-links-title">Continue with regional and trust pages</h2>
        </div>
        <div class="regional-link-grid">
          <a href="${page.countryPage}"><strong>${escapeHtml(page.relatedCountryTitle)}</strong><span>${escapeHtml(page.relatedCountryCopy)}</span></a>
          <a href="online-pooja-service-areas.html"><strong>Service Areas Hub</strong><span>India, UAE, USA and UK city cluster</span></a>
          <a href="proof-center.html"><strong>Proof Center</strong><span>Company-stated facts, policies and booking proof</span></a>
          <a href="reviews-testimonials.html"><strong>Reviews</strong><span>Approved review and testimonial policy</span></a>
        </div>
      </section>

      <section class="section faq-section regional-faq-section" aria-labelledby="${page.shortName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-faq-title">
        <div class="section-heading">
          <p class="eyebrow">${escapeHtml(page.regionLabel)} FAQ</p>
          <h2 id="${page.shortName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-faq-title">Online pandit ${escapeHtml(page.regionLabel)} FAQ</h2>
        </div>
        <div class="faq-list">
          <details open>
            <summary>Can ${escapeHtml(page.regionLabel)} clients book online pooja from India?</summary>
            <p>Yes. ${escapeHtml(page.regionLabel)} clients can enquire for online pooja, hawan, kundli, gemstone and muhurat guidance with timing coordination and quote confirmation before payment.</p>
          </details>
          <details>
            <summary>Which ${escapeHtml(page.regionLabel)} areas are relevant?</summary>
            <p>${escapeHtml(page.areasFaq)}</p>
          </details>
          <details>
            <summary>Can ${escapeHtml(page.regionLabel)} families request proof after pooja?</summary>
            <p>Proof, live option or completion update can be discussed before confirmation depending on the service, timing and ritual type.</p>
          </details>
        </div>
      </section>
    </main>

    <a class="floating-whatsapp" href="${whatsapp}" aria-label="Open WhatsApp chat">WA</a>

${renderCityFooter()}

    <script src="site-config.js"></script>
    <script src="script.js"></script>
  </body>
</html>
`;
}

function renderCityMarketSection() {
  const cards = allCityPages
    .map(
      (page) => `          <article class="service-area-card">
            <span>${escapeHtml(page.countryLabel)} | ${escapeHtml(page.shortName)}</span>
            <h3>${escapeHtml(page.cardTitle)}</h3>
            <p>${escapeHtml(page.cardCopy)}</p>
            <a href="${page.slug}">Open ${escapeHtml(page.shortName)} page</a>
          </article>`
    )
    .join("\n");
  return `      <section class="section service-area-map-section" aria-labelledby="city-market-title">
        <div class="section-heading">
          <p class="eyebrow">Priority international city markets</p>
          <h2 id="city-market-title">City pages for India, UAE, USA and UK search growth</h2>
          <p>These city pages support high-intent local and NRI searches while still routing every enquiry through the same quote-before-payment and Booking ID process.</p>
        </div>
        <div class="service-area-grid">
${cards}
        </div>
      </section>`;
}

function renderRegionalNav() {
  const cityLinks = allCityPages
    .map((page) => `      <a href="${page.slug}">Online Pandit ${escapeHtml(page.shortName)}</a>`)
    .join("\n");
  return `    <nav class="footer-column" aria-label="Regional SEO links">
      <h2>Regions</h2>
      <a href="online-pooja-service-areas.html">Service Areas</a>
${cityLinks}
      <a href="online-pooja-india.html">Online Pooja India</a>
      <a href="online-pandit-dubai-uae.html">Online Pandit Dubai UAE</a>
      <a href="online-pandit-uk.html">Online Pandit UK</a>
      <a href="online-pandit-usa.html">Online Pandit USA</a>
    </nav>`;
}

function updateServiceAreaHub() {
  let html = read("online-pooja-service-areas.html");
  html = html.replace(
    /<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/,
    (full, rawJson) => {
      const data = JSON.parse(rawJson);
      const list = data["@graph"].find((item) => item["@id"] === `${site}/online-pooja-service-areas.html#city-market-list`);
      list.name = "Bandevi Astro priority international city online pandit pages";
      list.itemListElement = allCityPages.map((page, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: `Online Pandit ${page.shortName}`,
        url: `${site}/${page.slug}`,
      }));
      return `<script type="application/ld+json">\n${jsonLd(data["@graph"])}\n    </script>`;
    }
  );
  html = html.replace(
    /      <section class="section service-area-map-section" aria-labelledby="city-market-title">[\s\S]*?      <\/section>\r?\n\r?\n      <section class="section regional-intent-section"/,
    `${renderCityMarketSection()}\n\n      <section class="section regional-intent-section"`
  );
  html = html.replace(
    /    <nav class="footer-column" aria-label="Regional SEO links">[\s\S]*?    <\/nav>/,
    renderRegionalNav()
  );
  write("online-pooja-service-areas.html", html);
}

function updateCountryPages() {
  const baseLinks = [
    ["online-pooja.html", "Online Pooja", "Temple, live video or proof options"],
    ["hawan.html", "Hawan Services", "Grah shanti, navgrah and family rituals"],
    ["kundli.html", "Kundli Consultation", "Dosh, marriage, career and remedies"],
    ["gemstone-shop.html", "Gemstone Guidance", "Ring, pendant and loose stone quote"],
    ["online-pooja-service-areas.html", "Service Areas Hub", "Compare India, UAE, USA and UK online pooja pages"],
  ];
  for (const [file, cityLinks] of Object.entries(countryCityLinks)) {
    let html = read(file);
    const links = [...baseLinks, ...cityLinks]
      .map(([href, title, copy]) => `          <a href="${href}"><strong>${escapeHtml(title)}</strong><span>${escapeHtml(copy)}</span></a>`)
      .join("\n");
    html = html.replace(
      /        <div class="regional-link-grid">[\s\S]*?        <\/div>/,
      `        <div class="regional-link-grid">\n${links}\n        </div>`
    );
    write(file, html);
  }
}

function updateHomepage() {
  let html = read("index.html");
  const regionLinks = [
    ["online-pooja-service-areas.html", "Service Areas Hub", "India, UAE, USA and UK country and city-page cluster"],
    ["online-pooja-india.html", "Online Pooja India", "Delhi, Mumbai, Bengaluru and Hyderabad pages"],
    ["online-pandit-dubai-uae.html", "Online Pandit Dubai UAE", "Dubai, Abu Dhabi and Sharjah pages"],
    ["online-pandit-uk.html", "Online Pandit UK", "London, Birmingham and Leicester pages"],
    ["online-pandit-usa.html", "Online Pandit USA", "New York and Los Angeles pages"],
    ["online-pandit-mumbai.html", "Online Pandit Mumbai", "Mumbai, Navi Mumbai and Thane search page"],
    ["online-pandit-abu-dhabi.html", "Online Pandit Abu Dhabi", "UAE NRI pooja and kundli city page"],
    ["online-pandit-los-angeles.html", "Online Pandit Los Angeles", "USA NRI pooja and Hindu priest city page"],
    ["online-pandit-birmingham.html", "Online Pandit Birmingham", "UK pooja and kundli city page"],
  ]
    .map(([href, title, copy]) => `          <a href="${href}"><strong>${escapeHtml(title)}</strong><span>${escapeHtml(copy)}</span></a>`)
    .join("\n");
  html = html.replace(
    /        <div class="regional-link-grid">\r?\n          <a href="online-pooja-service-areas\.html">[\s\S]*?        <\/div>\r?\n      <\/section>\r?\n      <!-- Regional SEO Section End -->/,
    `        <div class="regional-link-grid">\n${regionLinks}\n        </div>\n      </section>\n      <!-- Regional SEO Section End -->`
  );
  write("index.html", html);
}

function updateSitemap() {
  let sitemap = read("sitemap.xml");
  for (const page of cityPages) {
    const loc = `${site}/${page.slug}`;
    if (sitemap.includes(`<loc>${loc}</loc>`)) continue;
    sitemap = sitemap.replace(
      "\n</urlset>",
      `\n  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.9</priority>\n  </url>\n</urlset>`
    );
  }
  write("sitemap.xml", sitemap);
}

function generatePages() {
  for (const page of cityPages) {
    write(page.slug, renderCityPage(page));
  }
}

generatePages();
updateServiceAreaHub();
updateCountryPages();
updateHomepage();
updateSitemap();

console.log(`Added ${cityPages.length} international city pages and updated service-area links.`);
