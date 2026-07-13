const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const site = "https://bandeviastro.com";
const today = "2026-07-13";
const heroImage = "assets/spiritual-consultation-hero.png";

const guidePages = [
  guide({
    slug: "satyanarayan-pooja-vidhi-samagri.html",
    title: "Satyanarayan Pooja Vidhi & Samagri Guide",
    description: "Satyanarayan pooja vidhi, samagri checklist, sankalp details and NRI online pooja planning guide with related booking pages.",
    h1: "Satyanarayan pooja vidhi and samagri guide for families",
    eyebrow: "Satyanarayan pooja guide",
    intro: "Use this guide to understand the basic planning flow for Satyanarayan pooja, what details are commonly requested before sankalp, and which Bandevi Astro page to open for country-specific booking.",
    quickPoints: ["Prepare name, gotra if available, city and purpose", "Confirm date, time zone and family participation", "Discuss proof or live option before quote", "Use country-specific pages for USA, UK and Canada enquiries"],
    steps: ["Share the reason for Satyanarayan pooja and preferred date.", "Confirm sankalp names, gotra if available and family participation.", "Discuss samagri, katha, proof option and timing on WhatsApp.", "Create or confirm Booking ID before payment."],
    checklist: ["Sankalp name", "Gotra if available", "City and country", "Preferred date", "Family members joining online", "Proof or live option preference"],
    related: [
      ["online-satyanarayan-pooja-usa.html", "Online Satyanarayan Pooja USA", "USA NRI pooja page"],
      ["online-satyanarayan-pooja-uk.html", "Online Satyanarayan Pooja UK", "UK Satyanarayan katha page"],
      ["online-satyanarayan-pooja-canada.html", "Online Satyanarayan Pooja Canada", "Canada Satyanarayan pooja page"],
      ["online-pooja.html", "Online Pooja", "Main online pooja service hub"],
      ["online-pooja-for-nri-family-guide.html", "NRI Online Pooja Guide", "Planning guide for families abroad"],
      ["proof-center.html", "Proof Center", "Booking and company proof page"],
    ],
    faq: [
      ["Is Satyanarayan pooja possible for NRI families online?", "Yes. NRI families can discuss sankalp details, timing, proof option and quote before confirmation through WhatsApp."],
      ["What details should be shared first?", "Share city, country, preferred date, name, gotra if available, purpose and whether the family wants to join online."],
      ["Does this guide replace pandit guidance?", "No. This guide is educational. Final vidhi, timing, quote and Booking ID are confirmed through the service desk."],
    ],
  }),
  guide({
    slug: "navgrah-puja-benefits-vidhi.html",
    title: "Navgrah Puja Benefits & Vidhi Guide",
    description: "Navgrah puja benefits, basic vidhi, grah shanti checklist and online booking links for NRI families.",
    h1: "Navgrah puja benefits and vidhi guide for grah shanti",
    eyebrow: "Navgrah puja guide",
    intro: "Navgrah puja is commonly requested for faith-based grah shanti guidance. This guide explains planning points and routes users to the correct pooja or hawan page.",
    quickPoints: ["Useful for grah shanti and dosh-related enquiries", "Birth details may help decide related guidance", "Timing and sankalp should be confirmed before payment", "USA NRI users can open the dedicated Navgrah page"],
    steps: ["Share the concern and whether a kundli review is also needed.", "Confirm whether the enquiry is for puja, hawan or both.", "Discuss sankalp, date, time zone and proof preference.", "Use Booking ID to track quote, schedule and completion update."],
    checklist: ["Name and city", "Birth details if related to kundli", "Main concern", "Preferred date", "Puja or hawan preference", "Proof option preference"],
    related: [
      ["online-navgrah-puja-usa.html", "Online Navgrah Puja USA", "USA grah shanti page"],
      ["hawan.html", "Hawan Services", "Main hawan service hub"],
      ["online-pooja.html", "Online Pooja", "Main pooja service hub"],
      ["kundli.html", "Kundli Consultation", "Kundli review for dosh questions"],
      ["online-hawan-booking-usa.html", "Hawan Booking USA", "USA hawan booking page"],
      ["proof-center.html", "Proof Center", "Booking and policy proof page"],
    ],
    faq: [
      ["Can Navgrah puja be booked online?", "Yes. Clients can enquire online and confirm sankalp, timing, proof option, quote and Booking ID before payment."],
      ["Is kundli required for Navgrah puja?", "Not always, but birth details may help when the enquiry is connected to grah dosh, dasha or remedy guidance."],
      ["Are benefits guaranteed?", "No. Navgrah puja is faith-based spiritual guidance and does not guarantee outcomes or replace professional advice."],
    ],
  }),
  guide({
    slug: "mahamrityunjay-jaap-benefits.html",
    title: "Mahamrityunjay Jaap Benefits Guide",
    description: "Mahamrityunjay jaap benefits, sankalp planning, faith-based guidance and online booking routes for NRI families.",
    h1: "Mahamrityunjay jaap benefits and planning guide",
    eyebrow: "Mahamrityunjay jaap guide",
    intro: "Mahamrityunjay jaap is a faith-based Shiva mantra practice. This guide helps families understand what to prepare before requesting online jaap or related hawan support.",
    quickPoints: ["Share the purpose and family details clearly", "Discuss count, timing and proof option before quote", "Keep expectations faith-based and respectful", "Use the dedicated USA page for NRI enquiries"],
    steps: ["Share the reason for the jaap and the preferred date range.", "Confirm names, city, country and participation preference.", "Discuss whether jaap, hawan or both are being requested.", "Confirm quote, timing and Booking ID before payment."],
    checklist: ["Name for sankalp", "Purpose of jaap", "City and country", "Preferred date range", "Jaap or hawan preference", "Completion update preference"],
    related: [
      ["online-mahamrityunjay-jaap-usa.html", "Online Mahamrityunjay Jaap USA", "USA NRI jaap page"],
      ["hawan.html", "Hawan Services", "Main hawan and jaap service hub"],
      ["online-hawan-booking-usa.html", "Hawan Booking USA", "USA hawan route"],
      ["online-pooja.html", "Online Pooja", "Main online pooja service hub"],
      ["navgrah-puja-benefits-vidhi.html", "Navgrah Puja Guide", "Related grah shanti guide"],
      ["proof-center.html", "Proof Center", "Booking and policy proof page"],
    ],
    faq: [
      ["Can Mahamrityunjay jaap be requested online?", "Yes. Families can discuss sankalp details, jaap count, timing and proof option before quote confirmation."],
      ["Can jaap be connected with hawan?", "Yes. Depending on the enquiry, jaap and hawan options can be discussed before Booking ID confirmation."],
      ["Is this medical or emergency advice?", "No. Mahamrityunjay jaap is faith-based spiritual practice and does not replace medical, legal, safety or emergency advice."],
    ],
  }),
  guide({
    slug: "griha-pravesh-pooja-checklist.html",
    title: "Griha Pravesh Pooja Checklist",
    description: "Griha pravesh pooja checklist for housewarming, muhurat, sankalp details and online NRI booking pages.",
    h1: "Griha pravesh pooja checklist for home entry planning",
    eyebrow: "Griha pravesh checklist",
    intro: "This checklist helps families prepare the first details needed for griha pravesh pooja, housewarming muhurat and online pooja planning from India or abroad.",
    quickPoints: ["Share city, home type and preferred date range", "Ask for muhurat guidance when dates are flexible", "Confirm family participation and proof option", "Use USA or Canada pages for NRI booking routes"],
    steps: ["Share location, tentative move-in date and family details.", "Discuss griha pravesh muhurat and related pooja needs.", "Confirm online participation, proof and quote before payment.", "Track the booking with Booking ID after confirmation."],
    checklist: ["New home city", "Preferred date range", "Family names", "Gotra if available", "Online participation preference", "Muhurta flexibility", "Proof or completion note preference"],
    related: [
      ["online-griha-pravesh-pooja-usa.html", "Griha Pravesh Pooja USA", "USA housewarming pooja page"],
      ["online-griha-pravesh-pooja-canada.html", "Griha Pravesh Pooja Canada", "Canada housewarming pooja page"],
      ["vastu-muhurat.html", "Vastu and Muhurat", "Main vastu and muhurat hub"],
      ["online-pooja.html", "Online Pooja", "Main online pooja hub"],
      ["vastu-for-home-entrance-guide.html", "Home Entrance Vastu Guide", "Related vastu guide"],
      ["proof-center.html", "Proof Center", "Booking and policy proof page"],
    ],
    faq: [
      ["Can griha pravesh pooja be planned online?", "Yes. Families can share date range, location, family details and participation preference before quote confirmation."],
      ["Can muhurat and pooja be discussed together?", "Yes. The enquiry can include housewarming pooja, griha pravesh muhurat and related vastu questions."],
      ["What if the move-in date is fixed?", "Share the fixed date and city. The desk can discuss what timing or ritual planning is possible before confirmation."],
    ],
  }),
  guide({
    slug: "kundli-matching-for-marriage-guide.html",
    title: "Kundli Matching for Marriage Guide",
    description: "Kundli matching for marriage guide with birth details checklist, dosh questions and online consultation links.",
    h1: "Kundli matching for marriage guide before consultation",
    eyebrow: "Marriage kundli guide",
    intro: "This guide helps families prepare the details usually needed for kundli matching, marriage questions, dosh review and muhurat guidance before booking consultation.",
    quickPoints: ["Prepare birth date, time and place for both people", "Share the main marriage question clearly", "Ask about dosh, compatibility and muhurat in one enquiry", "Use country pages for USA, UK, Canada, Dubai or Australia"],
    steps: ["Collect birth details for both people.", "Share the main question and family context.", "Confirm whether matching, dosh review or muhurat is needed.", "Receive consultation option and Booking ID before payment."],
    checklist: ["Date of birth", "Time of birth", "Place of birth", "Names", "Marriage question", "Preferred language", "Country and time zone"],
    related: [
      ["kundli.html", "Kundli Consultation", "Main kundli service hub"],
      ["online-kundli-consultation-usa.html", "Kundli Consultation USA", "USA consultation page"],
      ["online-kundli-consultation-uk.html", "Kundli Consultation UK", "UK consultation page"],
      ["online-kundli-consultation-canada.html", "Kundli Consultation Canada", "Canada consultation page"],
      ["online-kundli-consultation-dubai.html", "Kundli Consultation Dubai", "Dubai and UAE consultation page"],
      ["online-marriage-pooja-usa.html", "Marriage Pooja USA", "Related marriage pooja page"],
    ],
    faq: [
      ["What details are needed for kundli matching?", "Date, time and place of birth for both people are usually requested. Share uncertainty clearly if exact time is not known."],
      ["Can dosh and muhurat questions be included?", "Yes. Marriage matching, dosh review and muhurat questions can be discussed in the same enquiry before quote confirmation."],
      ["Is kundli matching a guaranteed decision?", "No. Kundli matching is faith-based guidance and family decisions should also consider practical, personal and professional advice where needed."],
    ],
  }),
  guide({
    slug: "which-gemstone-is-suitable-by-kundli.html",
    title: "Which Gemstone Is Suitable by Kundli?",
    description: "Guide to gemstone suitability by kundli, birth details, certificate preference and online gemstone consultation pages.",
    h1: "Which gemstone is suitable by kundli guide",
    eyebrow: "Gemstone suitability guide",
    intro: "Gemstone wearing advice should be handled carefully. This guide explains why birth details, concern, certificate preference and suitability review matter before ordering.",
    quickPoints: ["Do not choose a gemstone only by trend or color", "Share birth details and main concern first", "Discuss natural stone and certificate preference", "Use country consultation pages before order"],
    steps: ["Share birth details and the concern.", "Ask whether gemstone guidance, kundli review or both are needed.", "Discuss stone, carat, metal, certificate and setting preference.", "Confirm quote and Booking ID before payment."],
    checklist: ["Birth date", "Birth time", "Birth place", "Main concern", "Current gemstone if any", "Ring or pendant preference", "Certificate preference"],
    related: [
      ["gemstone-shop.html", "Gemstone Shop", "Main gemstone guidance and order hub"],
      ["kundli.html", "Kundli Consultation", "Birth chart consultation hub"],
      ["online-gemstone-consultation-dubai.html", "Gemstone Consultation Dubai", "Dubai and UAE gemstone page"],
      ["online-gemstone-consultation-usa.html", "Gemstone Consultation USA", "USA gemstone page"],
      ["online-gemstone-consultation-uk.html", "Gemstone Consultation UK", "UK gemstone page"],
      ["online-gemstone-consultation-canada.html", "Gemstone Consultation Canada", "Canada gemstone page"],
    ],
    faq: [
      ["Can gemstone be selected only by zodiac sign?", "A simple zodiac suggestion is not enough for serious astrological wearing guidance. Kundli details and the concern should be reviewed."],
      ["Can certificate preference be discussed first?", "Yes. Certificate preference, natural stone type, carat, metal and setting can be discussed before quote and Booking ID confirmation."],
      ["Can someone buy without consultation?", "A client can enquire, but astrological wearing guidance is best discussed after suitability review."],
    ],
  }),
  guide({
    slug: "vastu-for-home-entrance-guide.html",
    title: "Vastu for Home Entrance Guide",
    description: "Vastu for home entrance guide with direction, layout details, griha pravesh links and online vastu consultation pages.",
    h1: "Vastu for home entrance guide before consultation",
    eyebrow: "Home entrance vastu guide",
    intro: "The home entrance is one of the first details clients mention in vastu enquiries. This guide helps prepare direction, layout and purpose details before online consultation.",
    quickPoints: ["Share entrance direction if known", "Mention home, flat, shop or office context", "Share floor plan if available", "Connect vastu with griha pravesh and muhurat when needed"],
    steps: ["Share property type, city and concern.", "Mention entrance direction and room layout if available.", "Ask whether vastu, muhurat or griha pravesh guidance is needed.", "Confirm consultation option and Booking ID before payment."],
    checklist: ["Property type", "City and country", "Entrance direction", "Floor plan if available", "Main concern", "Preferred date range", "Photos if requested"],
    related: [
      ["vastu-muhurat.html", "Vastu and Muhurat", "Main vastu and muhurat hub"],
      ["online-vastu-consultation-dubai.html", "Vastu Consultation Dubai", "Dubai and UAE vastu page"],
      ["online-vastu-consultation-usa.html", "Vastu Consultation USA", "USA vastu page"],
      ["online-vastu-consultation-uk.html", "Vastu Consultation UK", "UK vastu page"],
      ["online-griha-pravesh-pooja-usa.html", "Griha Pravesh Pooja USA", "USA griha pravesh route"],
      ["griha-pravesh-pooja-checklist.html", "Griha Pravesh Checklist", "Related housewarming checklist"],
    ],
    faq: [
      ["Can entrance vastu be checked online?", "Yes. Clients can share property type, direction details, photos or floor plan if available before consultation confirmation."],
      ["Can vastu and muhurat be discussed together?", "Yes. Vastu guidance, griha pravesh and muhurat planning can be connected in one enquiry."],
      ["Is vastu a structural or legal service?", "No. Vastu guidance is faith-based and practical spiritual guidance. It does not replace structural, legal, financial or safety advice."],
    ],
  }),
  guide({
    slug: "online-pooja-for-nri-family-guide.html",
    title: "Online Pooja for NRI Family Guide",
    description: "Online pooja guide for NRI families with time zone planning, sankalp checklist, proof option and country service pages.",
    h1: "Online pooja for NRI family guide",
    eyebrow: "NRI online pooja guide",
    intro: "NRI families often need help choosing the right country page, sharing sankalp details and coordinating time zones. This guide explains the booking path before payment.",
    quickPoints: ["Use the country page closest to your location", "Share time zone and family availability", "Confirm proof, live option or completion note before payment", "Use Booking ID for tracking"],
    steps: ["Choose the country, city or service-specific page.", "Share service name, city, country, preferred time and sankalp details.", "Confirm quote, proof option and Booking ID.", "Track the service update after confirmation."],
    checklist: ["Country and city", "Service needed", "Preferred date and time zone", "Name and gotra if available", "Family participation preference", "Proof or live option preference"],
    related: [
      ["online-pooja-service-areas.html", "Service Areas Hub", "All country, city and service-intent pages"],
      ["online-pandit-usa.html", "Online Pandit USA", "USA country service page"],
      ["online-pandit-uk.html", "Online Pandit UK", "UK country service page"],
      ["online-pandit-canada.html", "Online Pandit Canada", "Canada country service page"],
      ["online-pandit-dubai-uae.html", "Online Pandit Dubai UAE", "Dubai and UAE service page"],
      ["online-pooja.html", "Online Pooja", "Main online pooja service hub"],
    ],
    faq: [
      ["How should an NRI family start an online pooja booking?", "Open the matching country or service page, then share service name, city, country, time zone and sankalp details on WhatsApp."],
      ["Can family members join from different countries?", "Yes. Share who will join, their time zones and the preferred participation method before quote confirmation."],
      ["Does submitting many pages in Search Console improve priority?", "No. Search Console says repeated submissions do not change queue position. Sitemap discovery and strong internal links also help Google find pages."],
    ],
  }),
];

function guide(item) {
  return {
    ...item,
    lang: "en-IN",
    locale: "en_IN",
    modified: today,
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
      <a href="kundli.html"><strong>Kundli</strong><span>Dosh</span></a>
      <a href="hawan.html"><strong>Hawan</strong><span>Jaap</span></a>
      <a href="gemstone-shop.html"><strong>Gems</strong><span>Rings</span></a>
      <a href="vastu-muhurat.html"><strong>Vastu</strong><span>Muhurat</span></a>
      <a href="online-pooja-service-areas.html"><strong>Areas</strong><span>Global</span></a>
    </nav>
    <div class="header-actions" aria-label="Quick contact actions">
      <a class="header-action login" href="login.html" aria-label="Open client login"><span>Client</span><strong>Login</strong></a>
      <a class="header-action whatsapp" href="https://wa.me/918676846484" aria-label="Open WhatsApp enquiry"><span>WA</span><strong>WhatsApp</strong></a>
      <a class="header-action primary" href="book-online.html" aria-label="Create booking ID"><span>Book</span><strong>Now</strong></a>
    </div>
  </div>
  <div class="header-trust-row international-service-rail" aria-label="Guide shortcuts">
    <a href="satyanarayan-pooja-vidhi-samagri.html"><strong>Satyanarayan</strong><span>Vidhi and samagri</span></a>
    <a href="kundli-matching-for-marriage-guide.html"><strong>Kundli Match</strong><span>Marriage guide</span></a>
    <a href="which-gemstone-is-suitable-by-kundli.html"><strong>Gemstone</strong><span>Kundli suitability</span></a>
    <a href="vastu-for-home-entrance-guide.html"><strong>Vastu</strong><span>Home entrance</span></a>
    <a href="online-pooja-for-nri-family-guide.html"><strong>NRI Pooja</strong><span>Time zone guide</span></a>
  </div>
</header>`;
}

function renderFooter() {
  const guideLinks = guidePages.map((page) => `      <a href="${page.slug}">${escapeHtml(page.h1)}</a>`).join("\n");
  return `<footer class="site-footer premium-footer">
  <section class="footer-cta" aria-label="Booking call to action">
    <div>
      <p class="eyebrow">Premium spiritual service</p>
      <h2>Book online, confirm on WhatsApp, track every stage.</h2>
      <p>Read the guide, choose the right service page, then confirm timing, quote and Booking ID before payment.</p>
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
      <a href="vastu-muhurat.html">Vastu & Muhurat</a>
      <a href="gemstone-shop.html">Gemstone Guidance</a>
      <a href="online-pooja-service-areas.html">Service Areas</a>
    </nav>
    <nav class="footer-column" aria-label="SEO guide links">
      <h2>Guides</h2>
${guideLinks}
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

function renderJsonLd(page) {
  const url = `${site}/${page.slug}`;
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
      name: page.title,
      description: page.description,
      isPartOf: { "@id": `${site}/#website` },
      about: { "@id": `${url}#article` },
      inLanguage: page.lang,
    },
    {
      "@type": "Article",
      "@id": `${url}#article`,
      headline: page.h1,
      description: page.description,
      image: `${site}/${heroImage}`,
      author: { "@id": `${site}/#organization` },
      publisher: { "@id": `${site}/#organization` },
      datePublished: today,
      dateModified: today,
      mainEntityOfPage: { "@id": `${url}#webpage` },
      articleSection: "Spiritual guide",
    },
    {
      "@type": "ItemList",
      "@id": `${url}#related-pages`,
      name: `${page.h1} related booking pages`,
      itemListElement: page.related.map(([href, title], index) => ({
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
        { "@type": "ListItem", position: 2, name: "SEO Guides", item: `${site}/#seo-guides` },
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

function renderGuidePage(page) {
  const url = `${site}/${page.slug}`;
  const id = slugId(page.slug);
  const quickPoints = page.quickPoints.map((point) => `          <span>${escapeHtml(point)}</span>`).join("\n");
  const steps = page.steps.map((step) => `          <li>${escapeHtml(step)}</li>`).join("\n");
  const checklist = page.checklist.map((item) => `          <article class="regional-card"><h3>${escapeHtml(item)}</h3><p>Keep this ready before WhatsApp confirmation so the quote and Booking ID can be prepared correctly.</p></article>`).join("\n");
  const related = page.related.map(([href, title, copy]) => `          <a href="${href}"><strong>${escapeHtml(title)}</strong><span>${escapeHtml(copy)}</span></a>`).join("\n");
  const faq = page.faq.map(([question, answer], index) => `          <details${index === 0 ? " open" : ""}><summary>${escapeHtml(question)}</summary><p>${escapeHtml(answer)}</p></details>`).join("\n");
  const whatsapp = whatsAppUrl(`Namaste, I read ${page.h1}. Please guide me to the correct booking page and quote.`);
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
    <meta property="og:type" content="article" />
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

    <main id="top" class="regional-page-main guide-page-main">
      <section class="hero regional-hero" aria-label="${escapeHtml(page.h1)}">
        <img class="hero-slide-image" src="${heroImage}" alt="${escapeHtml(page.h1)}" />
        <div class="hero-shade" aria-hidden="true"></div>
        <div class="hero-content">
          <p class="eyebrow">${escapeHtml(page.eyebrow)}</p>
          <h1>${escapeHtml(page.h1)}</h1>
          <p class="hero-copy">${escapeHtml(page.intro)}</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="${whatsapp}">Ask on WhatsApp</a>
            <a class="btn btn-secondary" href="online-pooja-service-areas.html">Find Service Page</a>
          </div>
          <div class="hero-proof-row" aria-label="Guide highlights">
            <span>Educational guide</span>
            <span>Booking ID before payment</span>
            <span>Proof where applicable</span>
          </div>
        </div>
      </section>

      <section class="section regional-intent-section" aria-labelledby="${id}-points-title">
        <div class="section-heading">
          <p class="eyebrow">Quick planning points</p>
          <h2 id="${id}-points-title">What to know before opening a booking page</h2>
          <p>This guide supports informational search traffic and routes serious enquiries to the right service page.</p>
        </div>
        <div class="regional-keyword-grid" aria-label="${escapeHtml(page.h1)} quick points">
${quickPoints}
        </div>
      </section>

      <section class="section regional-process-section" aria-labelledby="${id}-steps-title">
        <div class="section-heading">
          <p class="eyebrow">Step-by-step planning</p>
          <h2 id="${id}-steps-title">Simple preparation flow</h2>
        </div>
        <ol class="regional-process-list">
${steps}
        </ol>
      </section>

      <section class="section regional-services-section" aria-labelledby="${id}-checklist-title">
        <div class="section-heading">
          <p class="eyebrow">Checklist</p>
          <h2 id="${id}-checklist-title">Keep these details ready</h2>
        </div>
        <div class="regional-card-grid">
${checklist}
        </div>
      </section>

      <section class="section regional-links-section" aria-labelledby="${id}-links-title">
        <div class="section-heading">
          <p class="eyebrow">Related booking pages</p>
          <h2 id="${id}-links-title">Move from guide to the right service page</h2>
        </div>
        <div class="regional-link-grid">
${related}
        </div>
      </section>

      <section class="section faq-section regional-faq-section" aria-labelledby="${id}-faq-title">
        <div class="section-heading">
          <p class="eyebrow">Guide FAQ</p>
          <h2 id="${id}-faq-title">${escapeHtml(page.h1)} FAQ</h2>
        </div>
        <div class="faq-list">
${faq}
        </div>
      </section>

      <section class="section regional-services-section" aria-labelledby="${id}-disclaimer-title">
        <div class="section-heading">
          <p class="eyebrow">Important note</p>
          <h2 id="${id}-disclaimer-title">Faith-based guidance, clear booking process</h2>
          <p>These guides are educational and spiritual in nature. Final ritual, consultation, gemstone, vastu, muhurat, proof option and quote details should be confirmed on WhatsApp with Booking ID before payment.</p>
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

function renderGuideCards() {
  return guidePages
    .map((page) => `          <a href="${page.slug}"><strong>${escapeHtml(page.h1)}</strong><span>${escapeHtml(page.description)}</span></a>`)
    .join("\n");
}

function renderGuideSection() {
  return `      <!-- Guide SEO Section Start -->
      <section class="section guide-hub-section" id="seo-guides" aria-labelledby="seo-guides-title">
        <div class="section-heading">
          <p class="eyebrow">Spiritual SEO guides</p>
          <h2 id="seo-guides-title">Helpful guides that connect readers to booking pages</h2>
          <p>These guides target informational searches and route users to the correct pooja, kundli, hawan, gemstone, vastu and NRI service pages.</p>
        </div>
        <div class="regional-link-grid">
${renderGuideCards()}
        </div>
      </section>
      <!-- Guide SEO Section End -->`;
}

function updateHomepage() {
  let html = read("index.html");
  html = html.replace(/\r?\n      <!-- Guide SEO Section Start -->[\s\S]*?      <!-- Guide SEO Section End -->\r?\n/, "\n");
  html = html.replace("      <!-- Regional SEO Section Start -->", `${renderGuideSection()}\n      <!-- Regional SEO Section Start -->`);
  write("index.html", html);
}

function updateServiceAreaHub() {
  let html = read("online-pooja-service-areas.html");
  html = html.replace(/\r?\n      <!-- Guide SEO Section Start -->[\s\S]*?      <!-- Guide SEO Section End -->\r?\n/, "\n");
  html = html.replace('      <section class="section regional-intent-section" aria-labelledby="service-area-intent-title">', `${renderGuideSection()}\n\n      <section class="section regional-intent-section" aria-labelledby="service-area-intent-title">`);
  html = html.replace(
    /<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/,
    (full, rawJson) => {
      const data = JSON.parse(rawJson);
      const graph = data["@graph"];
      const list = {
        "@type": "ItemList",
        "@id": `${site}/online-pooja-service-areas.html#guide-list`,
        name: "Bandevi Astro spiritual SEO guides",
        itemListElement: guidePages.map((page, index) => ({
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
  for (const page of guidePages) {
    const loc = `${site}/${page.slug}`;
    if (sitemap.includes(`<loc>${loc}</loc>`)) continue;
    sitemap = sitemap.replace(
      "\n</urlset>",
      `\n  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.85</priority>\n  </url>\n</urlset>`
    );
  }
  for (const loc of [`${site}/`, `${site}/online-pooja-service-areas.html`]) {
    const escaped = loc.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp(`(<loc>${escaped}<\\/loc>\\s*<lastmod>)([^<]+)(<\\/lastmod>)`);
    sitemap = sitemap.replace(re, `$1${today}$3`);
  }
  write("sitemap.xml", sitemap);
}

for (const page of guidePages) {
  write(page.slug, renderGuidePage(page));
}
updateHomepage();
updateServiceAreaHub();
updateSitemap();

console.log(`Added ${guidePages.length} SEO guide pages and updated guide links.`);
