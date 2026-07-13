const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const site = "https://bandeviastro.com";
const today = "2026-07-13";
const heroImage = "assets/spiritual-consultation-hero.png";

const batch6Pages = [
  previous("online-satyanarayan-pooja-usa.html", "Online Satyanarayan pooja in USA for NRI families", "Online Satyanarayan pooja", "satyanarayan-pooja", "USA"),
  previous("online-satyanarayan-pooja-uk.html", "Online Satyanarayan pooja in UK for NRI families", "Online Satyanarayan pooja", "satyanarayan-pooja", "UK"),
  previous("online-satyanarayan-pooja-canada.html", "Online Satyanarayan pooja in Canada for NRI families", "Online Satyanarayan pooja", "satyanarayan-pooja", "Canada"),
  previous("online-kundli-consultation-usa.html", "Online kundli consultation in USA for astrology guidance", "Online kundli consultation", "kundli", "USA"),
  previous("online-kundli-consultation-uk.html", "Online kundli consultation in UK for astrology guidance", "Online kundli consultation", "kundli", "UK"),
  previous("online-kundli-consultation-canada.html", "Online kundli consultation in Canada for astrology guidance", "Online kundli consultation", "kundli", "Canada"),
  previous("online-gemstone-consultation-dubai.html", "Online gemstone consultation in Dubai for Jyotish guidance", "Online gemstone consultation", "gemstone", "Dubai"),
  previous("online-gemstone-consultation-usa.html", "Online gemstone consultation in USA for Jyotish guidance", "Online gemstone consultation", "gemstone", "USA"),
  previous("online-hawan-booking-canada.html", "Online hawan booking in Canada for NRI families", "Online hawan booking", "hawan", "Canada"),
  previous("online-hawan-booking-australia.html", "Online hawan booking in Australia for NRI families", "Online hawan booking", "hawan", "Australia"),
  previous("online-vastu-consultation-dubai.html", "Online vastu consultation in Dubai for home and office guidance", "Online vastu consultation", "vastu", "Dubai"),
  previous("online-marriage-pooja-usa.html", "Online marriage pooja in USA for NRI families", "Online marriage pooja", "marriage-pooja", "USA"),
];

const batch7Pages = [
  servicePage({
    slug: "online-kundli-consultation-dubai.html",
    serviceName: "Online kundli consultation",
    serviceGroup: "kundli",
    market: "Dubai",
    areaName: "Dubai and UAE",
    areaType: "Place",
    lang: "en-AE",
    locale: "en_AE",
    hreflang: "en-AE",
    countryPage: "online-pandit-dubai-uae.html",
    countryTitle: "Online Pandit Dubai UAE",
    servicePage: "kundli.html",
    serviceTitle: "Kundli Consultation",
    timeCopy: "UAE time coordination",
    areas: "Dubai, Abu Dhabi, Sharjah, Ajman, Al Ain and nearby UAE areas",
    title: "Online Kundli Consultation Dubai | Jyotish",
    description: "Online kundli consultation for Dubai and UAE clients for marriage, career, dosh, muhurat and remedies with quote before payment.",
    h1: "Online kundli consultation in Dubai for astrology guidance",
    intentCopy: "This page supports Dubai searches for online kundli consultation, Indian astrologer Dubai, birth chart reading UAE and Jyotish guidance.",
    whatsappText: "Namaste, I am in Dubai/UAE and need online kundli consultation. Please share process, details required and quote.",
    terms: ["online kundli consultation Dubai", "Indian astrologer Dubai", "Jyotish Dubai", "birth chart reading UAE", "kundli matching Dubai"],
  }),
  servicePage({
    slug: "online-kundli-consultation-australia.html",
    serviceName: "Online kundli consultation",
    serviceGroup: "kundli",
    market: "Australia",
    areaName: "Australia",
    areaType: "Country",
    lang: "en-AU",
    locale: "en_AU",
    hreflang: "en-AU",
    countryPage: "online-pandit-australia.html",
    countryTitle: "Online Pandit Australia",
    servicePage: "kundli.html",
    serviceTitle: "Kundli Consultation",
    timeCopy: "Australia time coordination",
    areas: "Sydney, Melbourne, Brisbane, Perth, Adelaide and other Australian cities",
    title: "Online Kundli Consultation Australia | Jyotish",
    description: "Online kundli consultation for Australia clients for marriage, career, dosh, muhurat and remedies with quote before payment.",
    h1: "Online kundli consultation in Australia for astrology guidance",
    intentCopy: "This page supports Australia searches for online kundli consultation, Indian astrologer Australia, birth chart reading and Jyotish guidance.",
    whatsappText: "Namaste, I am in Australia and need online kundli consultation. Please share process, details required and quote.",
    terms: ["online kundli consultation Australia", "Indian astrologer Australia", "Jyotish Australia", "birth chart reading Australia", "kundli matching Australia"],
  }),
  servicePage({
    slug: "online-gemstone-consultation-uk.html",
    serviceName: "Online gemstone consultation",
    serviceGroup: "gemstone",
    market: "UK",
    areaName: "United Kingdom",
    areaType: "Country",
    lang: "en-GB",
    locale: "en_GB",
    hreflang: "en-GB",
    countryPage: "online-pandit-uk.html",
    countryTitle: "Online Pandit UK",
    servicePage: "gemstone-shop.html",
    serviceTitle: "Gemstone Guidance",
    timeCopy: "UK time coordination",
    areas: "London, Birmingham, Leicester, Manchester, Coventry, Slough and other UK cities",
    title: "Online Gemstone Consultation UK | Jyotish Gem",
    description: "Online gemstone consultation for UK clients with kundli-based suitability review, quote and certificate preference before order.",
    h1: "Online gemstone consultation in UK for Jyotish guidance",
    intentCopy: "This page supports UK searches for online gemstone consultation, astrologer gemstone advice UK, Jyotish gemstone and certified gem guidance.",
    whatsappText: "Namaste, I am in UK and need gemstone consultation. Please share process, details required and quote.",
    terms: ["online gemstone consultation UK", "gemstone advice UK", "Jyotish gemstone UK", "astrologer gemstone UK", "certified gemstone UK"],
  }),
  servicePage({
    slug: "online-gemstone-consultation-canada.html",
    serviceName: "Online gemstone consultation",
    serviceGroup: "gemstone",
    market: "Canada",
    areaName: "Canada",
    areaType: "Country",
    lang: "en-CA",
    locale: "en_CA",
    hreflang: "en-CA",
    countryPage: "online-pandit-canada.html",
    countryTitle: "Online Pandit Canada",
    servicePage: "gemstone-shop.html",
    serviceTitle: "Gemstone Guidance",
    timeCopy: "Canada time coordination",
    areas: "Toronto, Brampton, Vancouver, Calgary, Montreal and other Canadian cities",
    title: "Online Gemstone Consultation Canada | Jyotish",
    description: "Online gemstone consultation for Canada clients with kundli-based suitability review, quote and certificate preference before order.",
    h1: "Online gemstone consultation in Canada for Jyotish guidance",
    intentCopy: "This page supports Canada searches for online gemstone consultation, astrologer gemstone advice Canada, Jyotish gemstone and certified gem guidance.",
    whatsappText: "Namaste, I am in Canada and need gemstone consultation. Please share process, details required and quote.",
    terms: ["online gemstone consultation Canada", "gemstone advice Canada", "Jyotish gemstone Canada", "astrologer gemstone Canada", "certified gemstone Canada"],
  }),
  servicePage({
    slug: "online-hawan-booking-usa.html",
    serviceName: "Online hawan booking",
    serviceGroup: "hawan",
    market: "USA",
    areaName: "United States",
    areaType: "Country",
    lang: "en-US",
    locale: "en_US",
    hreflang: "en-US",
    countryPage: "online-pandit-usa.html",
    countryTitle: "Online Pandit USA",
    servicePage: "hawan.html",
    serviceTitle: "Hawan Services",
    timeCopy: "US time coordination",
    areas: "New York, New Jersey, Chicago, Dallas, Houston, California and other USA cities",
    title: "Online Hawan Booking USA | NRI Havan",
    description: "Online hawan booking for USA NRI families for grah shanti, navgrah and family rituals with quote before payment.",
    h1: "Online hawan booking in USA for NRI families",
    intentCopy: "This page supports USA searches for online hawan booking, havan USA, navgrah hawan and NRI ritual support from abroad.",
    whatsappText: "Namaste, I am in USA and need online hawan booking guidance. Please share process, timing and quote.",
    terms: ["online hawan booking USA", "havan USA", "navgrah hawan USA", "NRI hawan USA", "Hindu priest online USA"],
  }),
  servicePage({
    slug: "online-hawan-booking-uk.html",
    serviceName: "Online hawan booking",
    serviceGroup: "hawan",
    market: "UK",
    areaName: "United Kingdom",
    areaType: "Country",
    lang: "en-GB",
    locale: "en_GB",
    hreflang: "en-GB",
    countryPage: "online-pandit-uk.html",
    countryTitle: "Online Pandit UK",
    servicePage: "hawan.html",
    serviceTitle: "Hawan Services",
    timeCopy: "UK time coordination",
    areas: "London, Birmingham, Leicester, Manchester, Coventry, Slough and other UK cities",
    title: "Online Hawan Booking UK | NRI Havan",
    description: "Online hawan booking for UK NRI families for grah shanti, navgrah and family rituals with quote before payment.",
    h1: "Online hawan booking in UK for NRI families",
    intentCopy: "This page supports UK searches for online hawan booking, havan UK, navgrah hawan and NRI ritual support from abroad.",
    whatsappText: "Namaste, I am in UK and need online hawan booking guidance. Please share process, timing and quote.",
    terms: ["online hawan booking UK", "havan UK", "navgrah hawan UK", "NRI hawan UK", "Hindu priest online UK"],
  }),
  servicePage({
    slug: "online-vastu-consultation-usa.html",
    serviceName: "Online vastu consultation",
    serviceGroup: "vastu",
    market: "USA",
    areaName: "United States",
    areaType: "Country",
    lang: "en-US",
    locale: "en_US",
    hreflang: "en-US",
    countryPage: "online-pandit-usa.html",
    countryTitle: "Online Pandit USA",
    servicePage: "vastu-muhurat.html",
    serviceTitle: "Vastu and Muhurat",
    timeCopy: "US time coordination",
    areas: "New York, New Jersey, Chicago, Dallas, Houston, California and other USA cities",
    title: "Online Vastu Consultation USA | Home Guidance",
    description: "Online vastu consultation for USA homes, offices and muhurat planning with quote before payment and online review.",
    h1: "Online vastu consultation in USA for home and office guidance",
    intentCopy: "This page supports USA searches for online vastu consultation, vastu expert USA, home vastu and muhurat guidance.",
    whatsappText: "Namaste, I am in USA and need vastu consultation. Please share process, details required and quote.",
    terms: ["online vastu consultation USA", "vastu expert USA", "home vastu USA", "office vastu USA", "muhurat guidance USA"],
  }),
  servicePage({
    slug: "online-vastu-consultation-uk.html",
    serviceName: "Online vastu consultation",
    serviceGroup: "vastu",
    market: "UK",
    areaName: "United Kingdom",
    areaType: "Country",
    lang: "en-GB",
    locale: "en_GB",
    hreflang: "en-GB",
    countryPage: "online-pandit-uk.html",
    countryTitle: "Online Pandit UK",
    servicePage: "vastu-muhurat.html",
    serviceTitle: "Vastu and Muhurat",
    timeCopy: "UK time coordination",
    areas: "London, Birmingham, Leicester, Manchester, Coventry, Slough and other UK cities",
    title: "Online Vastu Consultation UK | Home Guidance",
    description: "Online vastu consultation for UK homes, offices and muhurat planning with quote before payment and online review.",
    h1: "Online vastu consultation in UK for home and office guidance",
    intentCopy: "This page supports UK searches for online vastu consultation, vastu expert UK, home vastu and muhurat guidance.",
    whatsappText: "Namaste, I am in UK and need vastu consultation. Please share process, details required and quote.",
    terms: ["online vastu consultation UK", "vastu expert UK", "home vastu UK", "office vastu UK", "muhurat guidance UK"],
  }),
  servicePage({
    slug: "online-griha-pravesh-pooja-usa.html",
    serviceName: "Online griha pravesh pooja",
    serviceGroup: "griha-pravesh",
    market: "USA",
    areaName: "United States",
    areaType: "Country",
    lang: "en-US",
    locale: "en_US",
    hreflang: "en-US",
    countryPage: "online-pandit-usa.html",
    countryTitle: "Online Pandit USA",
    servicePage: "online-pooja.html",
    serviceTitle: "Online Pooja",
    timeCopy: "US time coordination",
    areas: "New York, New Jersey, Chicago, Dallas, Houston, California and other USA cities",
    title: "Online Griha Pravesh Pooja USA | NRI Pandit",
    description: "Online griha pravesh pooja guidance for USA NRI families with sankalp, muhurat, quote before payment and proof option.",
    h1: "Online griha pravesh pooja in USA for NRI families",
    intentCopy: "This page supports USA searches for online griha pravesh pooja, housewarming pooja USA, NRI pandit and muhurat guidance.",
    whatsappText: "Namaste, I am in USA and need online griha pravesh pooja guidance. Please share process, timing and quote.",
    terms: ["online griha pravesh pooja USA", "housewarming pooja USA", "NRI griha pravesh", "Hindu priest online USA", "muhurat guidance USA"],
  }),
  servicePage({
    slug: "online-griha-pravesh-pooja-canada.html",
    serviceName: "Online griha pravesh pooja",
    serviceGroup: "griha-pravesh",
    market: "Canada",
    areaName: "Canada",
    areaType: "Country",
    lang: "en-CA",
    locale: "en_CA",
    hreflang: "en-CA",
    countryPage: "online-pandit-canada.html",
    countryTitle: "Online Pandit Canada",
    servicePage: "online-pooja.html",
    serviceTitle: "Online Pooja",
    timeCopy: "Canada time coordination",
    areas: "Toronto, Brampton, Vancouver, Calgary, Montreal and other Canadian cities",
    title: "Online Griha Pravesh Pooja Canada | NRI Pandit",
    description: "Online griha pravesh pooja guidance for Canada NRI families with sankalp, muhurat, quote before payment and proof option.",
    h1: "Online griha pravesh pooja in Canada for NRI families",
    intentCopy: "This page supports Canada searches for online griha pravesh pooja, housewarming pooja Canada, NRI pandit and muhurat guidance.",
    whatsappText: "Namaste, I am in Canada and need online griha pravesh pooja guidance. Please share process, timing and quote.",
    terms: ["online griha pravesh pooja Canada", "housewarming pooja Canada", "NRI griha pravesh", "Hindu priest online Canada", "muhurat guidance Canada"],
  }),
  servicePage({
    slug: "online-navgrah-puja-usa.html",
    serviceName: "Online navgrah puja",
    serviceGroup: "navgrah",
    market: "USA",
    areaName: "United States",
    areaType: "Country",
    lang: "en-US",
    locale: "en_US",
    hreflang: "en-US",
    countryPage: "online-pandit-usa.html",
    countryTitle: "Online Pandit USA",
    servicePage: "online-pooja.html",
    serviceTitle: "Online Pooja",
    timeCopy: "US time coordination",
    areas: "New York, New Jersey, Chicago, Dallas, Houston, California and other USA cities",
    title: "Online Navgrah Puja USA | Grah Shanti",
    description: "Online navgrah puja guidance for USA NRI families for grah shanti, dosh remedy discussion and quote before payment.",
    h1: "Online Navgrah puja in USA for grah shanti guidance",
    intentCopy: "This page supports USA searches for online navgrah puja, grah shanti USA, navgrah hawan and NRI remedy guidance.",
    whatsappText: "Namaste, I am in USA and need online Navgrah puja guidance. Please share process, timing and quote.",
    terms: ["online navgrah puja USA", "grah shanti USA", "navgrah hawan USA", "NRI pooja USA", "dosh remedy guidance USA"],
  }),
  servicePage({
    slug: "online-mahamrityunjay-jaap-usa.html",
    serviceName: "Online Mahamrityunjay jaap",
    serviceGroup: "mahamrityunjay",
    market: "USA",
    areaName: "United States",
    areaType: "Country",
    lang: "en-US",
    locale: "en_US",
    hreflang: "en-US",
    countryPage: "online-pandit-usa.html",
    countryTitle: "Online Pandit USA",
    servicePage: "hawan.html",
    serviceTitle: "Hawan Services",
    timeCopy: "US time coordination",
    areas: "New York, New Jersey, Chicago, Dallas, Houston, California and other USA cities",
    title: "Online Mahamrityunjay Jaap USA | NRI Pooja",
    description: "Online Mahamrityunjay jaap guidance for USA NRI families with sankalp details, quote before payment and proof option.",
    h1: "Online Mahamrityunjay jaap in USA for NRI families",
    intentCopy: "This page supports USA searches for online Mahamrityunjay jaap, Mahamrityunjay pooja USA, NRI jaap and hawan guidance.",
    whatsappText: "Namaste, I am in USA and need online Mahamrityunjay jaap guidance. Please share process, timing and quote.",
    terms: ["online Mahamrityunjay jaap USA", "Mahamrityunjay pooja USA", "NRI jaap USA", "hawan guidance USA", "Hindu priest online USA"],
  }),
];

const allServiceIntentPages = [...batch6Pages, ...batch7Pages];

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

const cityPages = [
  ["online-pandit-delhi.html", "Online Pandit Delhi"],
  ["online-pandit-mumbai.html", "Online Pandit Mumbai"],
  ["online-pandit-bengaluru.html", "Online Pandit Bengaluru"],
  ["online-pandit-hyderabad.html", "Online Pandit Hyderabad"],
  ["online-pandit-chennai.html", "Online Pandit Chennai"],
  ["online-pandit-pune.html", "Online Pandit Pune"],
  ["online-pandit-ahmedabad.html", "Online Pandit Ahmedabad"],
  ["online-pandit-kolkata.html", "Online Pandit Kolkata"],
  ["online-pandit-dubai.html", "Online Pandit Dubai"],
  ["online-pandit-abu-dhabi.html", "Online Pandit Abu Dhabi"],
  ["online-pandit-sharjah.html", "Online Pandit Sharjah"],
  ["online-pandit-ajman.html", "Online Pandit Ajman"],
  ["online-pandit-al-ain.html", "Online Pandit Al Ain"],
  ["online-pandit-new-york.html", "Online Pandit New York"],
  ["online-pandit-los-angeles.html", "Online Pandit Los Angeles"],
  ["online-pandit-chicago.html", "Online Pandit Chicago"],
  ["online-pandit-dallas.html", "Online Pandit Dallas"],
  ["online-pandit-houston.html", "Online Pandit Houston"],
  ["online-pandit-san-francisco.html", "Online Pandit San Francisco"],
  ["online-pandit-edison.html", "Online Pandit Edison"],
  ["online-pandit-jersey-city.html", "Online Pandit Jersey City"],
  ["online-pandit-london.html", "Online Pandit London"],
  ["online-pandit-birmingham.html", "Online Pandit Birmingham"],
  ["online-pandit-leicester.html", "Online Pandit Leicester"],
  ["online-pandit-manchester.html", "Online Pandit Manchester"],
  ["online-pandit-coventry.html", "Online Pandit Coventry"],
  ["online-pandit-wolverhampton.html", "Online Pandit Wolverhampton"],
  ["online-pandit-slough.html", "Online Pandit Slough"],
  ["online-pandit-toronto.html", "Online Pandit Toronto"],
  ["online-pandit-vancouver.html", "Online Pandit Vancouver"],
  ["online-pandit-brampton.html", "Online Pandit Brampton"],
  ["online-pandit-sydney.html", "Online Pandit Sydney"],
  ["online-pandit-melbourne.html", "Online Pandit Melbourne"],
  ["online-pandit-brisbane.html", "Online Pandit Brisbane"],
  ["online-pandit-doha.html", "Online Pandit Doha"],
  ["online-pandit-muscat.html", "Online Pandit Muscat"],
  ["online-pandit-riyadh.html", "Online Pandit Riyadh"],
  ["online-pandit-jeddah.html", "Online Pandit Jeddah"],
  ["online-pandit-singapore.html", "Online Pandit Singapore"],
];

function previous(slug, h1, serviceName, serviceGroup, market) {
  return {
    slug,
    h1,
    serviceName,
    serviceGroup,
    market,
    description: `${serviceName} ${market} page with WhatsApp confirmation, quote before payment and proof option for Indian and NRI families.`,
  };
}

function servicePage(item) {
  return {
    ...item,
    eyebrow: `${item.market} service intent desk`,
    heroCopy: `For Indian and NRI families in ${item.areas}, Bandevi Astro supports ${item.serviceName.toLowerCase()} enquiries with ${item.timeCopy}, WhatsApp confirmation, clear quote before payment and proof discussion where applicable.`,
    relatedCountryCopy: `${item.market} country page for online pooja, kundli, hawan and gemstone searches`,
    relatedServiceCopy: `Main ${item.serviceTitle.toLowerCase()} page with process, trust details and booking flow`,
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
    <a href="online-kundli-consultation-dubai.html"><strong>Kundli Dubai</strong><span>UAE astrology search</span></a>
    <a href="online-hawan-booking-usa.html"><strong>Hawan USA</strong><span>NRI hawan search</span></a>
    <a href="online-vastu-consultation-uk.html"><strong>Vastu UK</strong><span>Home guidance</span></a>
    <a href="online-griha-pravesh-pooja-canada.html"><strong>Griha Canada</strong><span>Housewarming pooja</span></a>
  </div>
</header>`;
}

function renderRegionalNav() {
  const countryLinks = countryPages.map(([href, title]) => `      <a href="${href}">${escapeHtml(title)}</a>`).join("\n");
  const intentLinks = allServiceIntentPages.map((item) => `      <a href="${item.slug}">${escapeHtml(item.h1)}</a>`).join("\n");
  const cityLinks = cityPages.map(([href, title]) => `      <a href="${href}">${escapeHtml(title)}</a>`).join("\n");
  return `    <nav class="footer-column" aria-label="Regional SEO links">
      <h2>Regions</h2>
      <a href="online-pooja-service-areas.html">Service Areas</a>
${countryLinks}
${intentLinks}
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

function renderJsonLd(item) {
  const url = `${site}/${item.slug}`;
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
      name: `${item.serviceName} ${item.market}`,
      serviceType: item.terms,
      description: item.description,
      provider: { "@id": `${site}/#organization` },
      areaServed: { "@type": item.areaType, name: item.areaName },
      audience: { "@type": "Audience", audienceType: "Indian families, NRI families and spiritual consultation clients" },
      availableChannel: { "@type": "ServiceChannel", serviceUrl: url, servicePhone: "+918676846484" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${site}/` },
        { "@type": "ListItem", position: 2, name: "Service Areas", item: `${site}/online-pooja-service-areas.html` },
        { "@type": "ListItem", position: 3, name: item.countryTitle, item: `${site}/${item.countryPage}` },
        { "@type": "ListItem", position: 4, name: item.h1, item: url },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: [
        { "@type": "Question", name: `Can ${item.market} clients request ${item.serviceName.toLowerCase()}?`, acceptedAnswer: { "@type": "Answer", text: `Yes. ${item.market} clients can enquire for ${item.serviceName.toLowerCase()} through WhatsApp with timing, quote and proof option discussed before confirmation.` } },
        { "@type": "Question", name: `Which ${item.market} areas are relevant?`, acceptedAnswer: { "@type": "Answer", text: `The online desk can support families in ${item.areas} through WhatsApp and online consultation.` } },
        { "@type": "Question", name: "Is this a guaranteed result service?", acceptedAnswer: { "@type": "Answer", text: "No. Spiritual services are faith-based guidance and do not replace medical, legal, financial or emergency advice. Quote and Booking ID are confirmed before payment." } },
      ],
    },
  ]);
}

function relatedLinksFor(item) {
  const sameMarket = allServiceIntentPages
    .filter((page) => page.slug !== item.slug && page.market === item.market)
    .slice(0, 6)
    .map((page) => [page.slug, page.h1, `${page.market} service-intent page`]);
  const sameService = allServiceIntentPages
    .filter((page) => page.slug !== item.slug && page.serviceGroup === item.serviceGroup && page.market !== item.market)
    .slice(0, 4)
    .map((page) => [page.slug, page.h1, `${page.serviceName} page for ${page.market}`]);
  const base = [
    [item.countryPage, item.countryTitle, item.relatedCountryCopy],
    [item.servicePage, item.serviceTitle, item.relatedServiceCopy],
    ["online-pooja-service-areas.html", "Service Areas Hub", "Country, city and service-intent SEO hub"],
    ["proof-center.html", "Proof Center", "Company-stated facts, policies and booking proof"],
  ];
  const seen = new Set();
  return [...base, ...sameMarket, ...sameService].filter(([href]) => {
    if (seen.has(href)) return false;
    seen.add(href);
    return true;
  });
}

function renderServiceIntentPage(item) {
  const url = `${site}/${item.slug}`;
  const id = slugId(item.slug);
  const terms = item.terms.map((term) => `          <span>${escapeHtml(term)}</span>`).join("\n");
  const links = relatedLinksFor(item)
    .map(([href, title, copy]) => `          <a href="${href}"><strong>${escapeHtml(title)}</strong><span>${escapeHtml(copy)}</span></a>`)
    .join("\n");
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
${renderJsonLd(item)}
    </script>
    <link rel="preload" href="${heroImage}" as="image" />
    <link rel="icon" type="image/png" href="${heroImage}" />
    <link rel="apple-touch-icon" href="${heroImage}" />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
${renderHeader()}

    <main id="top" class="regional-page-main">
      <section class="hero regional-hero" aria-label="${escapeHtml(item.h1)}">
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
          <div class="hero-proof-row" aria-label="${escapeHtml(item.market)} service highlights">
            <span>${escapeHtml(item.market)}</span>
            <span>${escapeHtml(item.timeCopy)}</span>
            <span>Quote before payment</span>
            <span>Proof where applicable</span>
          </div>
        </div>
      </section>

      <section class="section regional-intent-section" aria-labelledby="${id}-intent-title">
        <div class="section-heading">
          <p class="eyebrow">High-intent SEO page</p>
          <h2 id="${id}-intent-title">${escapeHtml(item.serviceName)} page for ${escapeHtml(item.market)} searches</h2>
          <p>${escapeHtml(item.intentCopy)}</p>
        </div>
        <div class="regional-keyword-grid" aria-label="${escapeHtml(item.market)} service search topics">
${terms}
        </div>
      </section>

      <section class="section regional-services-section" aria-labelledby="${id}-service-title">
        <div class="section-heading">
          <p class="eyebrow">Service process</p>
          <h2 id="${id}-service-title">What ${escapeHtml(item.market)} clients can share before confirmation</h2>
        </div>
        <div class="regional-card-grid">
          <article class="regional-card"><h3>Location and timing</h3><p>Share your ${escapeHtml(item.market)} city, preferred date, preferred time window and whether family members will join online.</p></article>
          <article class="regional-card"><h3>Purpose and details</h3><p>Send the service purpose, names, gotra if available, birth details if needed and any specific concern for guidance.</p></article>
          <article class="regional-card"><h3>Quote and Booking ID</h3><p>Confirm the recommendation, quote, proof preference and Booking ID before payment. Spiritual services remain faith-based guidance.</p></article>
        </div>
      </section>

      <section class="section regional-process-section" aria-labelledby="${id}-process-title">
        <div class="section-heading">
          <p class="eyebrow">Booking flow</p>
          <h2 id="${id}-process-title">Simple ${escapeHtml(item.market)} enquiry flow</h2>
        </div>
        <ol class="regional-process-list">
          <li>Open WhatsApp and share this page name with city, country and concern.</li>
          <li>Receive recommended process, timing, quote and proof option where applicable.</li>
          <li>Create or confirm Booking ID before payment.</li>
          <li>Receive service update, live option or proof according to the confirmed service.</li>
        </ol>
      </section>

      <section class="section regional-links-section" aria-labelledby="${id}-links-title">
        <div class="section-heading">
          <p class="eyebrow">Related pages</p>
          <h2 id="${id}-links-title">Continue with country, service and trust pages</h2>
        </div>
        <div class="regional-link-grid">
${links}
        </div>
      </section>

      <section class="section faq-section regional-faq-section" aria-labelledby="${id}-faq-title">
        <div class="section-heading">
          <p class="eyebrow">${escapeHtml(item.market)} FAQ</p>
          <h2 id="${id}-faq-title">${escapeHtml(item.h1)} FAQ</h2>
        </div>
        <div class="faq-list">
          <details open><summary>Can ${escapeHtml(item.market)} clients request ${escapeHtml(item.serviceName.toLowerCase())}?</summary><p>Yes. ${escapeHtml(item.market)} clients can enquire for ${escapeHtml(item.serviceName.toLowerCase())} through WhatsApp with timing, quote and proof option discussed before confirmation.</p></details>
          <details><summary>Which ${escapeHtml(item.market)} areas are relevant?</summary><p>The online desk can support families in ${escapeHtml(item.areas)} through WhatsApp and online consultation.</p></details>
          <details><summary>Is this a guaranteed result service?</summary><p>No. Spiritual services are faith-based guidance and do not replace medical, legal, financial or emergency advice. Quote and Booking ID are confirmed before payment.</p></details>
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

function renderServiceIntentCards() {
  return allServiceIntentPages
    .map((item) => `          <article class="service-area-card">
            <span>${escapeHtml(item.market)} | ${escapeHtml(item.serviceName)}</span>
            <h3>${escapeHtml(item.h1)}</h3>
            <p>${escapeHtml(item.description)}</p>
            <a href="${item.slug}">Open ${escapeHtml(item.market)} service page</a>
          </article>`)
    .join("\n");
}

function renderServiceIntentHubSection() {
  return `      <section class="section service-intent-market-section" aria-labelledby="service-intent-market-title">
        <div class="section-heading">
          <p class="eyebrow">Service + country SEO pages</p>
          <h2 id="service-intent-market-title">High-intent service pages for USA, UK, Canada, Australia and Dubai</h2>
          <p>These pages target service-specific searches such as kundli consultation Dubai, gemstone consultation UK, hawan booking USA, vastu consultation UK, griha pravesh pooja Canada, Navgrah puja USA and Mahamrityunjay jaap USA while keeping the quote-before-payment booking process.</p>
        </div>
        <div class="service-area-grid">
${renderServiceIntentCards()}
        </div>
      </section>`;
}

function updateServiceAreaHubJsonLd(graph) {
  const itemList = {
    "@type": "ItemList",
    "@id": `${site}/online-pooja-service-areas.html#service-intent-list`,
    name: "Bandevi Astro service and country intent SEO pages",
    itemListElement: allServiceIntentPages.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.h1,
      url: `${site}/${item.slug}`,
    })),
  };
  const existingIndex = graph.findIndex((item) => item["@id"] === itemList["@id"]);
  if (existingIndex >= 0) {
    graph[existingIndex] = itemList;
  } else {
    const cityIndex = graph.findIndex((item) => item["@id"] === `${site}/online-pooja-service-areas.html#city-market-list`);
    graph.splice(cityIndex >= 0 ? cityIndex + 1 : graph.length, 0, itemList);
  }
  const webpage = graph.find((item) => item["@id"] === `${site}/online-pooja-service-areas.html#webpage`);
  if (webpage) {
    webpage.description = "Bandevi Astro global online pooja service areas plus service-specific SEO pages for USA, UK, Canada, Australia and Dubai searches.";
  }
  return graph;
}

function updateServiceAreaHub() {
  let html = read("online-pooja-service-areas.html");
  html = html.replace(
    /<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/,
    (full, rawJson) => {
      const data = JSON.parse(rawJson);
      return `<script type="application/ld+json">\n${jsonLd(updateServiceAreaHubJsonLd(data["@graph"]))}\n    </script>`;
    }
  );
  html = html.replace(
    /\r?\n      <section class="section service-intent-market-section" aria-labelledby="service-intent-market-title">[\s\S]*?      <\/section>\r?\n(?=\r?\n      <section class="section regional-intent-section")/,
    "\n"
  );
  html = html.replace(
    /(      <section class="section service-area-map-section" aria-labelledby="city-market-title">[\s\S]*?      <\/section>)(\r?\n\r?\n      <section class="section regional-intent-section")/,
    `$1\n\n${renderServiceIntentHubSection()}$2`
  );
  html = html.replace(
    /        <div class="regional-keyword-grid" aria-label="Service-area search topics">[\s\S]*?        <\/div>/,
    `        <div class="regional-keyword-grid" aria-label="Service-area search topics">
          <span>online pooja service areas</span>
          <span>online kundli consultation Dubai Australia</span>
          <span>online gemstone consultation UK Canada</span>
          <span>online hawan booking USA UK</span>
          <span>online vastu consultation USA UK</span>
          <span>online griha pravesh pooja USA Canada</span>
          <span>online Navgrah puja USA</span>
          <span>online Mahamrityunjay jaap USA</span>
        </div>`
  );
  html = html.replace(/    <nav class="footer-column" aria-label="Regional SEO links">[\s\S]*?    <\/nav>/, renderRegionalNav());
  write("online-pooja-service-areas.html", html);
}

function renderHomepageRegionalSection() {
  const homepageLinks = [
    ["online-pooja-service-areas.html", "Service Areas Hub", "Country, city and service-intent SEO hub"],
    ["online-pandit-usa.html", "Online Pandit USA", "USA country page for pooja, kundli, hawan and gemstone searches"],
    ["online-pandit-uk.html", "Online Pandit UK", "UK country page for online pandit and NRI pooja searches"],
    ["online-pandit-canada.html", "Online Pandit Canada", "Canada country page for Toronto, Brampton and Vancouver searches"],
    ["online-pandit-dubai-uae.html", "Online Pandit Dubai UAE", "Dubai and UAE country page for Indian families"],
    ...allServiceIntentPages.map((item) => [item.slug, item.h1, item.description]),
  ]
    .map(([href, title, copy]) => `          <a href="${href}"><strong>${escapeHtml(title)}</strong><span>${escapeHtml(copy)}</span></a>`)
    .join("\n");
  return `      <!-- Regional SEO Section Start -->
      <section class="section regional-hub-section" aria-labelledby="regional-hub-title">
        <div class="section-heading">
          <p class="eyebrow">Regional and service-intent SEO desk</p>
          <h2 id="regional-hub-title">Dedicated pages for country, city and service-specific searches</h2>
          <p>Choose the exact page for online pooja, Satyanarayan pooja, kundli consultation, hawan booking, gemstone guidance, vastu, griha pravesh, Navgrah puja and Mahamrityunjay jaap searches across USA, UK, Canada, Australia, Dubai and global NRI markets.</p>
        </div>
        <div class="company-profile-hub-actions">
          <a class="btn btn-primary" href="online-pooja-service-areas.html">Open Service Areas Hub</a>
          <a class="btn btn-secondary" href="proof-center.html">Proof Center</a>
          <a class="btn btn-secondary" href="reviews-testimonials.html">Reviews</a>
        </div>
        <div class="regional-link-grid">
${homepageLinks}
        </div>
      </section>
      <!-- Regional SEO Section End -->`;
}

function updateHomepage() {
  let html = read("index.html");
  html = html.replace(
    /      <!-- Regional SEO Section Start -->[\s\S]*?      <!-- Regional SEO Section End -->/,
    renderHomepageRegionalSection()
  );
  html = html.replace(/    <nav class="footer-column" aria-label="Regional SEO links">[\s\S]*?    <\/nav>/, renderRegionalNav());
  write("index.html", html);
}

function updateSitemap() {
  let sitemap = read("sitemap.xml");
  for (const item of batch7Pages) {
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
  for (const item of batch7Pages) {
    write(item.slug, renderServiceIntentPage(item));
  }
}

generatePages();
updateServiceAreaHub();
updateHomepage();
updateSitemap();

console.log(`Added ${batch7Pages.length} service-intent SEO pages and updated Batch 7 links.`);
