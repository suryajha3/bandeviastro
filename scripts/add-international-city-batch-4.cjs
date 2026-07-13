const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const site = "https://bandeviastro.com";
const today = "2026-07-11";
const heroImage = "assets/spiritual-consultation-hero.jpg";

const newCityPages = [
  {
    slug: "online-pandit-toronto.html",
    city: "Toronto",
    shortName: "Toronto",
    regionLabel: "Toronto Canada",
    countryLabel: "Canada",
    lang: "en-CA",
    locale: "en_CA",
    countryPage: "online-pandit-canada.html",
    relatedCountryTitle: "Online Pandit Canada",
    relatedCountryCopy: "Country-level Canada NRI pooja and kundli page",
    title: "Online Pandit in Toronto | NRI Pooja & Kundli",
    description: "Online pandit in Toronto for NRI pooja, hawan, kundli, gemstone, vastu and muhurat guidance with Canada time coordination.",
    eyebrow: "Toronto online pandit desk",
    h1: "Online pandit in Toronto for NRI pooja, kundli and gemstone guidance",
    heroCopy: "For Indian families in Toronto, Scarborough, Mississauga, North York, Etobicoke and nearby GTA areas, Bandevi Astro supports online pooja, hawan, kundli, gemstone, vastu and muhurat enquiries with Canada time coordination.",
    areas: "Toronto, Scarborough, Mississauga, North York, Etobicoke and nearby GTA areas",
    timeCopy: "Canada time planned",
    cityIntent: "This page supports searches around online pandit in Toronto, Hindu priest online Toronto, NRI pooja Toronto, kundli consultation Toronto and gemstone guidance Canada.",
    areasFaq: "The online desk can support Toronto, Scarborough, Mississauga, North York, Etobicoke and nearby GTA clients through WhatsApp and online consultation.",
    whatsappText: "Namaste, I am in Toronto and need online pandit or pooja guidance. Please share the process.",
    hreflang: "en-CA",
    serviceTerms: ["Online pooja Toronto", "Online pandit Toronto", "Hindu priest online Toronto", "NRI pooja Toronto", "Kundli consultation Toronto", "Gemstone guidance Canada"],
  },
  {
    slug: "online-pandit-vancouver.html",
    city: "Vancouver",
    shortName: "Vancouver",
    regionLabel: "Vancouver Canada",
    countryLabel: "Canada",
    lang: "en-CA",
    locale: "en_CA",
    countryPage: "online-pandit-canada.html",
    relatedCountryTitle: "Online Pandit Canada",
    relatedCountryCopy: "Country-level Canada NRI pooja and kundli page",
    title: "Online Pandit in Vancouver | NRI Pooja & Kundli",
    description: "Online pandit in Vancouver for NRI pooja, hawan, kundli, gemstone, vastu and muhurat guidance with Canada time coordination.",
    eyebrow: "Vancouver online pandit desk",
    h1: "Online pandit in Vancouver for NRI pooja, kundli and gemstone guidance",
    heroCopy: "For Indian families in Vancouver, Surrey, Burnaby, Richmond, Abbotsford and nearby British Columbia areas, Bandevi Astro supports online pooja, hawan, kundli, gemstone, vastu and muhurat enquiries with Canada time coordination.",
    areas: "Vancouver, Surrey, Burnaby, Richmond, Abbotsford and nearby British Columbia areas",
    timeCopy: "Canada time planned",
    cityIntent: "This page supports searches around online pandit in Vancouver, Hindu priest online Vancouver, NRI pooja Vancouver, kundli consultation Vancouver and gemstone guidance Canada.",
    areasFaq: "The online desk can support Vancouver, Surrey, Burnaby, Richmond, Abbotsford and nearby British Columbia clients through WhatsApp and online consultation.",
    whatsappText: "Namaste, I am in Vancouver and need online pandit or pooja guidance. Please share the process.",
    hreflang: "en-CA",
    serviceTerms: ["Online pooja Vancouver", "Online pandit Vancouver", "Hindu priest online Vancouver", "NRI pooja Vancouver", "Kundli consultation Vancouver", "Gemstone guidance Canada"],
  },
  {
    slug: "online-pandit-brampton.html",
    city: "Brampton",
    shortName: "Brampton",
    regionLabel: "Brampton Canada",
    countryLabel: "Canada",
    lang: "en-CA",
    locale: "en_CA",
    countryPage: "online-pandit-canada.html",
    relatedCountryTitle: "Online Pandit Canada",
    relatedCountryCopy: "Country-level Canada NRI pooja and kundli page",
    title: "Online Pandit in Brampton | NRI Pooja & Kundli",
    description: "Online pandit in Brampton for NRI pooja, hawan, kundli, gemstone, vastu and muhurat guidance with Canada time coordination.",
    eyebrow: "Brampton online pandit desk",
    h1: "Online pandit in Brampton for NRI pooja, kundli and gemstone guidance",
    heroCopy: "For Indian families in Brampton, Mississauga, Caledon, Malton, Vaughan and nearby Peel Region areas, Bandevi Astro supports online pooja, hawan, kundli, gemstone, vastu and muhurat enquiries with Canada time coordination.",
    areas: "Brampton, Mississauga, Caledon, Malton, Vaughan and nearby Peel Region areas",
    timeCopy: "Canada time planned",
    cityIntent: "This page supports searches around online pandit in Brampton, Hindu priest online Brampton, NRI pooja Brampton, kundli consultation Brampton and gemstone guidance Canada.",
    areasFaq: "The online desk can support Brampton, Mississauga, Caledon, Malton, Vaughan and nearby Peel Region clients through WhatsApp and online consultation.",
    whatsappText: "Namaste, I am in Brampton and need online pandit or pooja guidance. Please share the process.",
    hreflang: "en-CA",
    serviceTerms: ["Online pooja Brampton", "Online pandit Brampton", "Hindu priest online Brampton", "NRI pooja Brampton", "Kundli consultation Brampton", "Gemstone guidance Canada"],
  },
  {
    slug: "online-pandit-sydney.html",
    city: "Sydney",
    shortName: "Sydney",
    regionLabel: "Sydney Australia",
    countryLabel: "Australia",
    lang: "en-AU",
    locale: "en_AU",
    countryPage: "online-pandit-australia.html",
    relatedCountryTitle: "Online Pandit Australia",
    relatedCountryCopy: "Country-level Australia NRI pooja and kundli page",
    title: "Online Pandit in Sydney | NRI Pooja & Kundli",
    description: "Online pandit in Sydney for NRI pooja, hawan, kundli, gemstone, vastu and muhurat guidance with Australia time coordination.",
    eyebrow: "Sydney online pandit desk",
    h1: "Online pandit in Sydney for NRI pooja, kundli and gemstone guidance",
    heroCopy: "For Indian families in Sydney, Parramatta, Harris Park, Blacktown, Liverpool and nearby New South Wales areas, Bandevi Astro supports online pooja, hawan, kundli, gemstone, vastu and muhurat enquiries with Australia time coordination.",
    areas: "Sydney, Parramatta, Harris Park, Blacktown, Liverpool and nearby New South Wales areas",
    timeCopy: "Australia time planned",
    cityIntent: "This page supports searches around online pandit in Sydney, Hindu priest online Sydney, NRI pooja Sydney, kundli consultation Sydney and gemstone guidance Australia.",
    areasFaq: "The online desk can support Sydney, Parramatta, Harris Park, Blacktown, Liverpool and nearby New South Wales clients through WhatsApp and online consultation.",
    whatsappText: "Namaste, I am in Sydney and need online pandit or pooja guidance. Please share the process.",
    hreflang: "en-AU",
    serviceTerms: ["Online pooja Sydney", "Online pandit Sydney", "Hindu priest online Sydney", "NRI pooja Sydney", "Kundli consultation Sydney", "Gemstone guidance Australia"],
  },
  {
    slug: "online-pandit-melbourne.html",
    city: "Melbourne",
    shortName: "Melbourne",
    regionLabel: "Melbourne Australia",
    countryLabel: "Australia",
    lang: "en-AU",
    locale: "en_AU",
    countryPage: "online-pandit-australia.html",
    relatedCountryTitle: "Online Pandit Australia",
    relatedCountryCopy: "Country-level Australia NRI pooja and kundli page",
    title: "Online Pandit in Melbourne | NRI Pooja & Kundli",
    description: "Online pandit in Melbourne for NRI pooja, hawan, kundli, gemstone, vastu and muhurat guidance with Australia time coordination.",
    eyebrow: "Melbourne online pandit desk",
    h1: "Online pandit in Melbourne for NRI pooja, kundli and gemstone guidance",
    heroCopy: "For Indian families in Melbourne, Dandenong, Tarneit, Point Cook, Werribee and nearby Victoria areas, Bandevi Astro supports online pooja, hawan, kundli, gemstone, vastu and muhurat enquiries with Australia time coordination.",
    areas: "Melbourne, Dandenong, Tarneit, Point Cook, Werribee and nearby Victoria areas",
    timeCopy: "Australia time planned",
    cityIntent: "This page supports searches around online pandit in Melbourne, Hindu priest online Melbourne, NRI pooja Melbourne, kundli consultation Melbourne and gemstone guidance Australia.",
    areasFaq: "The online desk can support Melbourne, Dandenong, Tarneit, Point Cook, Werribee and nearby Victoria clients through WhatsApp and online consultation.",
    whatsappText: "Namaste, I am in Melbourne and need online pandit or pooja guidance. Please share the process.",
    hreflang: "en-AU",
    serviceTerms: ["Online pooja Melbourne", "Online pandit Melbourne", "Hindu priest online Melbourne", "NRI pooja Melbourne", "Kundli consultation Melbourne", "Gemstone guidance Australia"],
  },
  {
    slug: "online-pandit-brisbane.html",
    city: "Brisbane",
    shortName: "Brisbane",
    regionLabel: "Brisbane Australia",
    countryLabel: "Australia",
    lang: "en-AU",
    locale: "en_AU",
    countryPage: "online-pandit-australia.html",
    relatedCountryTitle: "Online Pandit Australia",
    relatedCountryCopy: "Country-level Australia NRI pooja and kundli page",
    title: "Online Pandit in Brisbane | NRI Pooja & Kundli",
    description: "Online pandit in Brisbane for NRI pooja, hawan, kundli, gemstone, vastu and muhurat guidance with Australia time coordination.",
    eyebrow: "Brisbane online pandit desk",
    h1: "Online pandit in Brisbane for NRI pooja, kundli and gemstone guidance",
    heroCopy: "For Indian families in Brisbane, Sunnybank, Springfield, Logan, Gold Coast and nearby Queensland areas, Bandevi Astro supports online pooja, hawan, kundli, gemstone, vastu and muhurat enquiries with Australia time coordination.",
    areas: "Brisbane, Sunnybank, Springfield, Logan, Gold Coast and nearby Queensland areas",
    timeCopy: "Australia time planned",
    cityIntent: "This page supports searches around online pandit in Brisbane, Hindu priest online Brisbane, NRI pooja Brisbane, kundli consultation Brisbane and gemstone guidance Australia.",
    areasFaq: "The online desk can support Brisbane, Sunnybank, Springfield, Logan, Gold Coast and nearby Queensland clients through WhatsApp and online consultation.",
    whatsappText: "Namaste, I am in Brisbane and need online pandit or pooja guidance. Please share the process.",
    hreflang: "en-AU",
    serviceTerms: ["Online pooja Brisbane", "Online pandit Brisbane", "Hindu priest online Brisbane", "NRI pooja Brisbane", "Kundli consultation Brisbane", "Gemstone guidance Australia"],
  },
  {
    slug: "online-pandit-doha.html",
    city: "Doha",
    shortName: "Doha",
    regionLabel: "Doha Qatar",
    countryLabel: "Qatar",
    lang: "en-QA",
    locale: "en_QA",
    countryPage: "online-pandit-qatar.html",
    relatedCountryTitle: "Online Pandit Qatar",
    relatedCountryCopy: "Country-level Qatar NRI pooja and kundli page",
    title: "Online Pandit in Doha | NRI Pooja & Kundli",
    description: "Online pandit in Doha for NRI pooja, hawan, kundli, gemstone, vastu and muhurat guidance with Qatar time coordination.",
    eyebrow: "Doha online pandit desk",
    h1: "Online pandit in Doha for NRI pooja, kundli and gemstone guidance",
    heroCopy: "For Indian families in Doha, Lusail, Al Wakrah, West Bay, Al Sadd and nearby Qatar areas, Bandevi Astro supports online pooja, hawan, kundli, gemstone, vastu and muhurat enquiries with Qatar time coordination.",
    areas: "Doha, Lusail, Al Wakrah, West Bay, Al Sadd and nearby Qatar areas",
    timeCopy: "Qatar time planned",
    cityIntent: "This page supports searches around online pandit in Doha, Hindu priest online Doha, NRI pooja Doha, kundli consultation Doha and gemstone guidance Qatar.",
    areasFaq: "The online desk can support Doha, Lusail, Al Wakrah, West Bay, Al Sadd and nearby Qatar clients through WhatsApp and online consultation.",
    whatsappText: "Namaste, I am in Doha and need online pandit or pooja guidance. Please share the process.",
    hreflang: "en-QA",
    serviceTerms: ["Online pooja Doha", "Online pandit Doha", "Hindu priest online Doha", "NRI pooja Doha", "Kundli consultation Doha", "Gemstone guidance Qatar"],
  },
  {
    slug: "online-pandit-muscat.html",
    city: "Muscat",
    shortName: "Muscat",
    regionLabel: "Muscat Oman",
    countryLabel: "Oman",
    lang: "en-OM",
    locale: "en_OM",
    countryPage: "online-pandit-oman.html",
    relatedCountryTitle: "Online Pandit Oman",
    relatedCountryCopy: "Country-level Oman NRI pooja and kundli page",
    title: "Online Pandit in Muscat | NRI Pooja & Kundli",
    description: "Online pandit in Muscat for NRI pooja, hawan, kundli, gemstone, vastu and muhurat guidance with Oman time coordination.",
    eyebrow: "Muscat online pandit desk",
    h1: "Online pandit in Muscat for NRI pooja, kundli and gemstone guidance",
    heroCopy: "For Indian families in Muscat, Ruwi, Muttrah, Qurum, Seeb and nearby Oman areas, Bandevi Astro supports online pooja, hawan, kundli, gemstone, vastu and muhurat enquiries with Oman time coordination.",
    areas: "Muscat, Ruwi, Muttrah, Qurum, Seeb and nearby Oman areas",
    timeCopy: "Oman time planned",
    cityIntent: "This page supports searches around online pandit in Muscat, Hindu priest online Muscat, NRI pooja Muscat, kundli consultation Muscat and gemstone guidance Oman.",
    areasFaq: "The online desk can support Muscat, Ruwi, Muttrah, Qurum, Seeb and nearby Oman clients through WhatsApp and online consultation.",
    whatsappText: "Namaste, I am in Muscat and need online pandit or pooja guidance. Please share the process.",
    hreflang: "en-OM",
    serviceTerms: ["Online pooja Muscat", "Online pandit Muscat", "Hindu priest online Muscat", "NRI pooja Muscat", "Kundli consultation Muscat", "Gemstone guidance Oman"],
  },
  {
    slug: "online-pandit-riyadh.html",
    city: "Riyadh",
    shortName: "Riyadh",
    regionLabel: "Riyadh Saudi Arabia",
    countryLabel: "Saudi Arabia",
    lang: "en-SA",
    locale: "en_SA",
    countryPage: "online-pandit-saudi-arabia.html",
    relatedCountryTitle: "Online Pandit Saudi Arabia",
    relatedCountryCopy: "Country-level Saudi Arabia NRI pooja and kundli page",
    title: "Online Pandit in Riyadh | NRI Pooja & Kundli",
    description: "Online pandit in Riyadh for NRI pooja, kundli, gemstone, vastu and muhurat guidance with Saudi time coordination.",
    eyebrow: "Riyadh online pandit desk",
    h1: "Online pandit in Riyadh for NRI pooja, kundli and gemstone guidance",
    heroCopy: "For Indian families in Riyadh, Malaz, Olaya, Sulaymaniyah, Al Nakheel and nearby Saudi Arabia areas, Bandevi Astro supports online pooja, kundli, gemstone, vastu and muhurat enquiries with Saudi time coordination.",
    areas: "Riyadh, Malaz, Olaya, Sulaymaniyah, Al Nakheel and nearby Saudi Arabia areas",
    timeCopy: "Saudi time planned",
    cityIntent: "This page supports searches around online pandit in Riyadh, Hindu priest online Riyadh, NRI pooja Riyadh, kundli consultation Riyadh and gemstone guidance Saudi Arabia.",
    areasFaq: "The online desk can support Riyadh, Malaz, Olaya, Sulaymaniyah, Al Nakheel and nearby Saudi Arabia clients through WhatsApp and online consultation.",
    whatsappText: "Namaste, I am in Riyadh and need online pandit or pooja guidance. Please share the process.",
    hreflang: "en-SA",
    serviceTerms: ["Online pooja Riyadh", "Online pandit Riyadh", "Hindu priest online Riyadh", "NRI pooja Riyadh", "Kundli consultation Riyadh", "Gemstone guidance Saudi Arabia"],
  },
  {
    slug: "online-pandit-jeddah.html",
    city: "Jeddah",
    shortName: "Jeddah",
    regionLabel: "Jeddah Saudi Arabia",
    countryLabel: "Saudi Arabia",
    lang: "en-SA",
    locale: "en_SA",
    countryPage: "online-pandit-saudi-arabia.html",
    relatedCountryTitle: "Online Pandit Saudi Arabia",
    relatedCountryCopy: "Country-level Saudi Arabia NRI pooja and kundli page",
    title: "Online Pandit in Jeddah | NRI Pooja & Kundli",
    description: "Online pandit in Jeddah for NRI pooja, kundli, gemstone, vastu and muhurat guidance with Saudi time coordination.",
    eyebrow: "Jeddah online pandit desk",
    h1: "Online pandit in Jeddah for NRI pooja, kundli and gemstone guidance",
    heroCopy: "For Indian families in Jeddah, Aziziyah, Al Rehab, Al Hamra, Makkah Road and nearby Saudi Arabia areas, Bandevi Astro supports online pooja, kundli, gemstone, vastu and muhurat enquiries with Saudi time coordination.",
    areas: "Jeddah, Aziziyah, Al Rehab, Al Hamra, Makkah Road and nearby Saudi Arabia areas",
    timeCopy: "Saudi time planned",
    cityIntent: "This page supports searches around online pandit in Jeddah, Hindu priest online Jeddah, NRI pooja Jeddah, kundli consultation Jeddah and gemstone guidance Saudi Arabia.",
    areasFaq: "The online desk can support Jeddah, Aziziyah, Al Rehab, Al Hamra, Makkah Road and nearby Saudi Arabia clients through WhatsApp and online consultation.",
    whatsappText: "Namaste, I am in Jeddah and need online pandit or pooja guidance. Please share the process.",
    hreflang: "en-SA",
    serviceTerms: ["Online pooja Jeddah", "Online pandit Jeddah", "Hindu priest online Jeddah", "NRI pooja Jeddah", "Kundli consultation Jeddah", "Gemstone guidance Saudi Arabia"],
  },
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
  ["online-pandit-singapore.html", "Singapore", "Singapore", "Online pandit in Singapore", "For Singapore, Little India, Serangoon, Tampines and Jurong families needing online pooja, kundli and gemstone guidance."],
].map(([slug, shortName, countryLabel, cardTitle, cardCopy]) => ({ slug, shortName, countryLabel, cardTitle, cardCopy }));

const allCityPages = [
  ...existingCityPages,
  ...newCityPages.map((page) => ({
    slug: page.slug,
    shortName: page.shortName,
    countryLabel: page.countryLabel,
    cardTitle: page.h1.replace(" for NRI pooja, kundli and gemstone guidance", ""),
    cardCopy: page.heroCopy,
  })),
];

const countryCityLinks = {
  "online-pandit-canada.html": [
    ["online-pandit-toronto.html", "Online Pandit Toronto", "Toronto and GTA city page for NRI pooja and kundli searches"],
    ["online-pandit-vancouver.html", "Online Pandit Vancouver", "Vancouver and British Columbia page for online pandit searches"],
    ["online-pandit-brampton.html", "Online Pandit Brampton", "Brampton and Peel Region page for Hindu priest online searches"],
  ],
  "online-pandit-australia.html": [
    ["online-pandit-sydney.html", "Online Pandit Sydney", "Sydney and New South Wales page for NRI pooja searches"],
    ["online-pandit-melbourne.html", "Online Pandit Melbourne", "Melbourne and Victoria page for online pandit searches"],
    ["online-pandit-brisbane.html", "Online Pandit Brisbane", "Brisbane and Queensland page for kundli and pooja searches"],
  ],
  "online-pandit-qatar.html": [
    ["online-pandit-doha.html", "Online Pandit Doha", "Doha city page for NRI pooja, kundli and gemstone searches"],
  ],
  "online-pandit-oman.html": [
    ["online-pandit-muscat.html", "Online Pandit Muscat", "Muscat city page for NRI pooja and kundli searches"],
  ],
  "online-pandit-saudi-arabia.html": [
    ["online-pandit-riyadh.html", "Online Pandit Riyadh", "Riyadh city page for online pandit and NRI pooja searches"],
    ["online-pandit-jeddah.html", "Online Pandit Jeddah", "Jeddah city page for kundli, pooja and gemstone searches"],
  ],
  "online-pandit-singapore.html": [
    ["online-pandit-singapore.html", "Online Pandit Singapore", "Singapore, Little India, Serangoon, Tampines and Jurong service page"],
  ],
};

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
    <a href="online-pandit-canada.html"><strong>Canada</strong><span>Toronto, Brampton, Vancouver</span></a>
    <a href="online-pandit-australia.html"><strong>Australia</strong><span>Sydney, Melbourne, Brisbane</span></a>
    <a href="online-pandit-singapore.html"><strong>Singapore</strong><span>Little India and NRI families</span></a>
    <a href="online-pandit-qatar.html"><strong>Gulf</strong><span>Doha, Muscat, Riyadh, Jeddah</span></a>
  </div>
</header>`;
}

function renderRegionalNav() {
  const countryLinks = countryPages
    .map(([href, title]) => `      <a href="${href}">${escapeHtml(title)}</a>`)
    .join("\n");
  const cityLinks = allCityPages
    .map((page) => `      <a href="${page.slug}">Online Pandit ${escapeHtml(page.shortName)}</a>`)
    .join("\n");
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

function renderCityPage(page) {
  const url = `${site}/${page.slug}`;
  const countryUrl = `${site}/${page.countryPage}`;
  const idBase = slugId(page.shortName);
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
      description: page.description,
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
        { "@type": "ListItem", position: 3, name: page.relatedCountryTitle, item: countryUrl },
        { "@type": "ListItem", position: 4, name: page.regionLabel, item: url },
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
  const serviceTermsHtml = page.serviceTerms.map((term) => `          <span>${escapeHtml(term)}</span>`).join("\n");

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

      <section class="section regional-intent-section" aria-labelledby="${idBase}-intent-title">
        <div class="section-heading">
          <p class="eyebrow">${escapeHtml(page.regionLabel)} search intent</p>
          <h2 id="${idBase}-intent-title">Built for ${escapeHtml(page.regionLabel)} families who want pandit support without confusion.</h2>
          <p>${escapeHtml(page.cityIntent)}</p>
        </div>
        <div class="regional-keyword-grid" aria-label="${escapeHtml(page.regionLabel)} search topics">
${serviceTermsHtml}
        </div>
      </section>

      <section class="section regional-services-section" aria-labelledby="${idBase}-services-title">
        <div class="section-heading">
          <p class="eyebrow">${escapeHtml(page.regionLabel)} services</p>
          <h2 id="${idBase}-services-title">What ${escapeHtml(page.regionLabel)} clients can request</h2>
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

      <section class="section regional-process-section" aria-labelledby="${idBase}-process-title">
        <div class="section-heading">
          <p class="eyebrow">Booking process</p>
          <h2 id="${idBase}-process-title">Simple ${escapeHtml(page.regionLabel)} enquiry flow</h2>
        </div>
        <ol class="regional-process-list">
          <li>Share ${escapeHtml(page.regionLabel)} area, service need, preferred time and birth details if needed.</li>
          <li>Receive recommendation, quote, timing and proof option on WhatsApp.</li>
          <li>Create or confirm Booking ID before payment.</li>
          <li>Receive update, live option or proof where applicable after completion.</li>
        </ol>
      </section>

      <section class="section regional-links-section" aria-labelledby="${idBase}-links-title">
        <div class="section-heading">
          <p class="eyebrow">Related pages</p>
          <h2 id="${idBase}-links-title">Continue with regional and trust pages</h2>
        </div>
        <div class="regional-link-grid">
          <a href="${page.countryPage}"><strong>${escapeHtml(page.relatedCountryTitle)}</strong><span>${escapeHtml(page.relatedCountryCopy)}</span></a>
          <a href="online-pooja-service-areas.html"><strong>Service Areas Hub</strong><span>Global country and city cluster</span></a>
          <a href="proof-center.html"><strong>Proof Center</strong><span>Company-stated facts, policies and booking proof</span></a>
          <a href="reviews-testimonials.html"><strong>Reviews</strong><span>Approved review and testimonial policy</span></a>
        </div>
      </section>

      <section class="section faq-section regional-faq-section" aria-labelledby="${idBase}-faq-title">
        <div class="section-heading">
          <p class="eyebrow">${escapeHtml(page.regionLabel)} FAQ</p>
          <h2 id="${idBase}-faq-title">Online pandit ${escapeHtml(page.regionLabel)} FAQ</h2>
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

${renderFooter()}

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
          <h2 id="city-market-title">City pages for Canada, Australia, Singapore and Gulf search growth</h2>
          <p>These city pages support high-intent NRI searches while still routing every enquiry through the same quote-before-payment and Booking ID process.</p>
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

function renderCountryCitySection(file, cityLinks) {
  const baseLinks = [
    ["online-pooja.html", "Online Pooja", "Temple, live video or proof options"],
    ["hawan.html", "Hawan Services", "Grah shanti, navgrah and family rituals"],
    ["kundli.html", "Kundli Consultation", "Dosh, marriage, career and remedies"],
    ["gemstone-shop.html", "Gemstone Guidance", "Ring, pendant and loose stone quote"],
    ["online-pooja-service-areas.html", "Service Areas Hub", "Global country and city cluster"],
  ];
  const links = [...cityLinks, ...baseLinks]
    .map(([href, title, copy]) => `          <a href="${href}"><strong>${escapeHtml(title)}</strong><span>${escapeHtml(copy)}</span></a>`)
    .join("\n");
  let html = read(file);
  html = html.replace(
    /        <div class="regional-link-grid">[\s\S]*?        <\/div>/,
    `        <div class="regional-link-grid">\n${links}\n        </div>`
  );
  html = html.replace(
    /    <nav class="footer-column" aria-label="Regional SEO links">[\s\S]*?    <\/nav>/,
    renderRegionalNav()
  );
  write(file, html);
}

function updateCountryPages() {
  for (const [file, cityLinks] of Object.entries(countryCityLinks)) {
    renderCountryCitySection(file, cityLinks);
  }
}

function updateHomepage() {
  let html = read("index.html");
  const links = [
    ["online-pooja-service-areas.html", "Service Areas Hub", "Global country and city-page cluster"],
    ["online-pandit-canada.html", "Online Pandit Canada", "Toronto, Vancouver and Brampton city pages"],
    ["online-pandit-australia.html", "Online Pandit Australia", "Sydney, Melbourne and Brisbane city pages"],
    ["online-pandit-singapore.html", "Online Pandit Singapore", "Singapore, Little India and NRI family service page"],
    ["online-pandit-qatar.html", "Online Pandit Qatar", "Doha city page for NRI pooja and kundli"],
    ["online-pandit-oman.html", "Online Pandit Oman", "Muscat city page for online pandit searches"],
    ["online-pandit-saudi-arabia.html", "Online Pandit Saudi Arabia", "Riyadh and Jeddah city pages"],
    ["online-pandit-toronto.html", "Online Pandit Toronto", "Canada city page for NRI pooja searches"],
    ["online-pandit-sydney.html", "Online Pandit Sydney", "Australia city page for Hindu priest online searches"],
    ["online-pandit-doha.html", "Online Pandit Doha", "Qatar city page for online pandit searches"],
  ]
    .map(([href, title, copy]) => `          <a href="${href}"><strong>${escapeHtml(title)}</strong><span>${escapeHtml(copy)}</span></a>`)
    .join("\n");
  html = html.replace(
    /        <div class="regional-link-grid">\r?\n          <a href="online-pooja-service-areas\.html">[\s\S]*?        <\/div>\r?\n      <\/section>\r?\n      <!-- Regional SEO Section End -->/,
    `        <div class="regional-link-grid">\n${links}\n        </div>\n      </section>\n      <!-- Regional SEO Section End -->`
  );
  html = html.replace(
    /    <nav class="footer-column" aria-label="Regional SEO links">[\s\S]*?    <\/nav>/,
    renderRegionalNav()
  );
  write("index.html", html);
}

function updateSitemap() {
  let sitemap = read("sitemap.xml");
  for (const page of newCityPages) {
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
  for (const page of newCityPages) {
    write(page.slug, renderCityPage(page));
  }
}

generatePages();
updateServiceAreaHub();
updateCountryPages();
updateHomepage();
updateSitemap();

console.log(`Added ${newCityPages.length} international city pages and updated Batch 4 city links.`);
