const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const today = "2026-07-05";
const baseUrl = "https://bandeviastro.com";
const heroImage = `${baseUrl}/assets/spiritual-consultation-hero.png`;

const pages = [
  {
    file: "online-pooja-india.html",
    region: "India",
    hreflang: "en-IN",
    ogLocale: "en_IN",
    title: "Online Pooja in India | Pandit, Kundli & Gemstone",
    description:
      "Book online pooja in India with Pdt. Jyotishacharya Kumodanand Jha (Shastri) for kundli, hawan, hast rekha, gemstone guidance and vastu muhurat.",
    h1: "Online pooja in India with trusted pandit guidance",
    eyebrow: "India online pooja and astrology desk",
    intro:
      "For families in India who want a clear pooja, hawan, kundli or gemstone consultation process, Bandevi Astro keeps the request simple: share your name, city, concern and preferred date, then confirm the quote on WhatsApp before payment.",
    lead:
      "This page is built for people searching for online pooja in India, pandit ji online, kundli consultation, hast rekha reading, vastu muhurat and gemstone recommendation from an experienced Jyotishacharya.",
    whatsappText:
      "Namaste, I want online pooja or astrology guidance in India. Please share the process.",
    serviceTypes: [
      "Online pooja in India",
      "Kundli consultation",
      "Hawan and jaap",
      "Hast rekha reading",
      "Gemstone recommendation",
      "Vastu and muhurat guidance"
    ],
    keywords: [
      "online pooja in India",
      "online pandit in India",
      "kundli consultation India",
      "hast rekha online",
      "gemstone recommendation India",
      "hawan booking online"
    ],
    trust: [
      "Hindi and English support for family discussions.",
      "Quote, sankalp details, time and proof option confirmed before payment.",
      "Suitable for pooja, hawan, kundli, gemstone, vastu and muhurat requests.",
      "Booking ID flow for service tracking and follow-up."
    ],
    services: [
      {
        title: "Online pooja and hawan",
        text: "Satyanarayan pooja, grah shanti, navgrah hawan, Durga pooja, Lakshmi pooja, Mahamrityunjay jaap and other family rituals can be discussed with date, sankalp and proof needs."
      },
      {
        title: "Kundli, dosh and marriage guidance",
        text: "Clients can request birth-chart review for mangalik dosh, kaal sarp dosh, marriage delay, career, business or family concerns with remedy guidance."
      },
      {
        title: "Gemstone and hast rekha guidance",
        text: "Gemstone suggestions are discussed only after suitability review. Palm reading and practical spiritual guidance can be added to the consultation."
      }
    ],
    process: [
      "Share name, city, date of birth details if needed, and the exact concern.",
      "Receive service recommendation, quote, timing and proof option on WhatsApp.",
      "Confirm Booking ID before payment.",
      "Join online where applicable or receive proof/update after completion."
    ],
    faq: [
      {
        q: "Can online pooja be booked from any city in India?",
        a: "Yes. Clients can enquire from any city in India and confirm the pooja, hawan, sankalp details, timing and proof option on WhatsApp before payment."
      },
      {
        q: "Do I need exact birth details for kundli consultation?",
        a: "For kundli, accurate date, time and place of birth are helpful. If exact time is not available, share what you have so the consultation can be guided properly."
      },
      {
        q: "Can gemstone guidance be given without kundli review?",
        a: "Gemstone advice should be given after suitability review. High-caution stones such as Neelam and Lehsunia should not be worn casually."
      }
    ]
  },
  {
    file: "online-pandit-dubai-uae.html",
    region: "Dubai and UAE",
    hreflang: "en-AE",
    ogLocale: "en_AE",
    title: "Online Pandit in Dubai UAE | Pooja & Astrology",
    description:
      "Online pandit and astrology consultation for Dubai and UAE families. Book NRI pooja, hawan, kundli, gemstone and muhurat guidance on WhatsApp.",
    h1: "Online pandit in Dubai UAE for pooja, kundli and gemstone guidance",
    eyebrow: "Dubai UAE NRI pooja and astrology desk",
    intro:
      "For Indian families in Dubai, Abu Dhabi, Sharjah and across the UAE, Bandevi Astro offers online pooja, hawan, kundli, gemstone and muhurat guidance with WhatsApp confirmation before payment.",
    lead:
      "This page targets people searching for online pandit in Dubai, Indian pandit UAE, astrology consultation Dubai, gemstone recommendation UAE and NRI pooja services from India.",
    whatsappText:
      "Namaste, I am in Dubai/UAE and need online pandit or astrology guidance. Please share the process.",
    serviceTypes: [
      "Online pandit in Dubai",
      "NRI pooja for UAE families",
      "Astrology consultation UAE",
      "Gemstone guidance Dubai",
      "Remote hawan",
      "Muhurta and vastu guidance"
    ],
    keywords: [
      "online pandit Dubai",
      "Indian pandit in UAE",
      "astrology consultation Dubai",
      "NRI pooja UAE",
      "gemstone recommendation Dubai",
      "online hawan UAE"
    ],
    trust: [
      "India-based ritual support for Dubai, Abu Dhabi, Sharjah and UAE clients.",
      "WhatsApp-first confirmation for time-zone friendly coordination.",
      "Clear quote before payment with sankalp and proof discussion.",
      "Hindi and English guidance for NRI families."
    ],
    services: [
      {
        title: "NRI pooja and hawan for UAE",
        text: "Remote pooja, jaap and hawan requests can be planned around UAE timing with sankalp details, video option or completion proof where applicable."
      },
      {
        title: "Dubai astrology consultation",
        text: "Kundli, marriage, career, business, vastu, muhurat and family concerns can be discussed online in Hindi or English."
      },
      {
        title: "Gemstone guidance for UAE clients",
        text: "Gemstone suitability, certificate preference, ring or pendant format and delivery-country details can be confirmed before a final quote."
      }
    ],
    process: [
      "Send your UAE city, concern, preferred date and birth details if needed.",
      "Receive the recommended service, quote and timing in India/UAE time clarity.",
      "Confirm Booking ID and payment only after the details are clear.",
      "Join live where applicable or receive proof and completion update."
    ],
    faq: [
      {
        q: "Can I book online pooja from Dubai or Abu Dhabi?",
        a: "Yes. UAE clients can book online pooja or hawan with sankalp details, timing and proof option confirmed on WhatsApp before payment."
      },
      {
        q: "Can consultation happen in UAE time?",
        a: "Yes. Share your preferred UAE time window and the team can coordinate a suitable consultation or ritual update schedule."
      },
      {
        q: "Do you guide gemstones for Dubai clients?",
        a: "Yes. Gemstone guidance can be discussed after kundli suitability review, with certificate preference and product form confirmed before quote."
      }
    ]
  },
  {
    file: "online-pandit-uk.html",
    region: "United Kingdom",
    hreflang: "en-GB",
    ogLocale: "en_GB",
    title: "Online Pandit in UK | Pooja, Kundli & Gemstone",
    description:
      "Online pandit for UK Indian families. Book NRI pooja, hawan, kundli consultation, hast rekha, gemstone guidance and muhurat support on WhatsApp.",
    h1: "Online pandit in UK for NRI pooja, kundli and remedies",
    eyebrow: "UK NRI pooja and astrology desk",
    intro:
      "For Indian families in London, Birmingham, Manchester, Leicester and across the UK, Bandevi Astro supports online pooja, hawan, kundli consultation, hast rekha, gemstone guidance and muhurat planning from India.",
    lead:
      "This page is designed for searches such as online pandit UK, Hindu priest online UK, astrology consultation UK, gemstone recommendation UK and NRI pooja for families abroad.",
    whatsappText:
      "Namaste, I am in the UK and need online pandit or astrology guidance. Please share the process.",
    serviceTypes: [
      "Online pandit in UK",
      "NRI pooja for UK families",
      "Kundli consultation UK",
      "Hindu priest online UK",
      "Gemstone recommendation UK",
      "Remote hawan and jaap"
    ],
    keywords: [
      "online pandit UK",
      "Hindu priest online UK",
      "astrology consultation UK",
      "kundli consultation UK",
      "NRI pooja UK",
      "gemstone recommendation UK"
    ],
    trust: [
      "Clear coordination for UK clients across different time zones.",
      "Online booking, WhatsApp confirmation and service tracking.",
      "Hindi and English communication for families and younger clients.",
      "Ritual proof or update can be discussed before payment."
    ],
    services: [
      {
        title: "Online pooja for UK families",
        text: "Satyanarayan pooja, grah shanti, navgrah hawan, Durga pooja, Lakshmi pooja and other rituals can be coordinated remotely with sankalp and proof clarity."
      },
      {
        title: "Kundli and family guidance",
        text: "Marriage delay, mangalik dosh, career, business, family harmony and muhurat concerns can be discussed through online consultation."
      },
      {
        title: "Gemstone and palm guidance",
        text: "Gemstone recommendations, palm reading and remedy discussions can be handled online after suitability and concern review."
      }
    ],
    process: [
      "Send your UK city, family concern and preferred consultation window.",
      "Share birth details if kundli or muhurat guidance is required.",
      "Confirm service, quote, proof option and Booking ID before payment.",
      "Receive the consultation, live join option or completion update."
    ],
    faq: [
      {
        q: "Can UK clients book pooja without visiting India?",
        a: "Yes. UK clients can book online pooja or hawan from abroad with sankalp details, timing and proof option discussed before payment."
      },
      {
        q: "Can my family join from different UK cities?",
        a: "Yes. Share the family names, gotra where available, and preferred timing so the online flow can be planned clearly."
      },
      {
        q: "Can I get kundli and gemstone consultation in one booking?",
        a: "Yes. Kundli review and gemstone suitability can be discussed together when birth details and the exact concern are shared."
      }
    ]
  },
  {
    file: "online-pandit-usa.html",
    region: "United States",
    hreflang: "en-US",
    ogLocale: "en_US",
    title: "Online Pandit in USA | Pooja, Kundli & Gemstone",
    description:
      "Online pandit for USA Indian families. Book NRI pooja, hawan, kundli consultation, astrology, hast rekha, gemstone and muhurat guidance.",
    h1: "Online pandit in USA for pooja, kundli and gemstone guidance",
    eyebrow: "USA NRI pooja and astrology desk",
    intro:
      "For Indian families in New York, New Jersey, California, Texas, Florida and across the USA, Bandevi Astro offers online pooja, hawan, kundli, hast rekha, gemstone and muhurat guidance with clear WhatsApp confirmation.",
    lead:
      "This page is created for searches like online pandit USA, Hindu priest online USA, astrology consultation USA, online kundli USA, NRI pooja and gemstone recommendation for Indian families in America.",
    whatsappText:
      "Namaste, I am in the USA and need online pandit or astrology guidance. Please share the process.",
    serviceTypes: [
      "Online pandit in USA",
      "NRI pooja for USA families",
      "Kundli consultation USA",
      "Hindu priest online USA",
      "Gemstone recommendation USA",
      "Remote hawan and remedies"
    ],
    keywords: [
      "online pandit USA",
      "Hindu priest online USA",
      "astrology consultation USA",
      "online kundli USA",
      "NRI pooja USA",
      "gemstone recommendation USA"
    ],
    trust: [
      "Remote coordination for USA time zones and family availability.",
      "Booking ID, quote and proof option before payment.",
      "Hindi and English consultation for Indian families abroad.",
      "Suitable for pooja, hawan, kundli, gemstone, vastu and muhurat guidance."
    ],
    services: [
      {
        title: "NRI pooja and hawan for USA",
        text: "Pooja, jaap and hawan requests can be planned from India with sankalp details and proof/update options discussed before confirmation."
      },
      {
        title: "USA astrology and kundli guidance",
        text: "Clients can request kundli review for marriage, career, business, dosh, family matters, muhurat and remedies through online consultation."
      },
      {
        title: "Gemstone recommendation for USA clients",
        text: "Gemstone suitability, certificate preference, ring or pendant format and delivery details can be reviewed before a quote is finalized."
      }
    ],
    process: [
      "Send your US state/city, concern, preferred time window and birth details if needed.",
      "Receive recommended service, quote, timing and proof option on WhatsApp.",
      "Confirm Booking ID before payment.",
      "Attend online where applicable or receive completion proof/update."
    ],
    faq: [
      {
        q: "Can USA clients book online pooja from India?",
        a: "Yes. USA clients can book online pooja, jaap or hawan with sankalp details, proof option and timing confirmed before payment."
      },
      {
        q: "Can timing be coordinated for US time zones?",
        a: "Yes. Share your state and preferred time window so the consultation or update schedule can be planned with India time."
      },
      {
        q: "Can I ask for gemstone guidance for someone in the USA?",
        a: "Yes. Share the person's birth details and concern. Gemstone guidance should be given only after suitability review."
      }
    ]
  }
];

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function write(file, content) {
  fs.writeFileSync(path.join(root, file), content);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function absoluteUrl(file) {
  return file === "index.html" ? `${baseUrl}/` : `${baseUrl}/${file}`;
}

function hreflangLinks(currentFile) {
  const alternates = pages
    .map(
      (page) =>
        `    <link rel="alternate" hreflang="${page.hreflang}" href="${absoluteUrl(page.file)}" />`
    )
    .join("\n");
  return `${alternates}\n    <link rel="alternate" hreflang="x-default" href="${baseUrl}/" />`;
}

function graphFor(page) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: "Bandevi Astro",
        url: `${baseUrl}/`,
        email: "bandeviglobalgroup@gmail.com",
        telephone: ["+918676846484", "+916204641845"],
        founder: {
          "@type": "Person",
          name: "Pdt. Jyotishacharya Kumodanand Jha (Shastri)"
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+918676846484",
            contactType: "customer support",
            areaServed: [page.region, "India", "NRI families"],
            availableLanguage: ["Hindi", "English"]
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": `${absoluteUrl(page.file)}#webpage`,
        url: absoluteUrl(page.file),
        name: page.title,
        description: page.description,
        isPartOf: {
          "@id": `${baseUrl}/#website`
        },
        about: {
          "@id": `${absoluteUrl(page.file)}#service`
        },
        inLanguage: page.hreflang
      },
      {
        "@type": "Service",
        "@id": `${absoluteUrl(page.file)}#service`,
        name: page.title,
        serviceType: page.serviceTypes,
        description: page.description,
        provider: {
          "@id": `${baseUrl}/#organization`
        },
        areaServed: {
          "@type": "Place",
          name: page.region
        },
        audience: {
          "@type": "Audience",
          audienceType: "Indian families, NRI families and spiritual consultation clients"
        },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: absoluteUrl(page.file),
          servicePhone: "+918676846484"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${absoluteUrl(page.file)}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${baseUrl}/`
          },
          {
            "@type": "ListItem",
            position: 2,
            name: page.region,
            item: absoluteUrl(page.file)
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${absoluteUrl(page.file)}#faq`,
        mainEntity: page.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a
          }
        }))
      }
    ]
  };
}

function buildRegionalPage(page, header, footer) {
  const whatsapp = `https://wa.me/918676846484?text=${encodeURIComponent(page.whatsappText)}`;
  return `<!DOCTYPE html>
<html lang="${page.hreflang}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(page.title)}</title>
    <meta name="description" content="${escapeHtml(page.description)}" />
    <!-- Regional SEO Upgrade Start -->
    <link rel="canonical" href="${absoluteUrl(page.file)}" />
${hreflangLinks(page.file)}
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Bandevi Astro" />
    <meta property="og:locale" content="${page.ogLocale}" />
    <meta property="og:title" content="${escapeHtml(page.title)}" />
    <meta property="og:description" content="${escapeHtml(page.description)}" />
    <meta property="og:url" content="${absoluteUrl(page.file)}" />
    <meta property="og:image" content="${heroImage}" />
    <meta property="og:image:alt" content="${escapeHtml(page.h1)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(page.title)}" />
    <meta name="twitter:description" content="${escapeHtml(page.description)}" />
    <meta name="twitter:image" content="${heroImage}" />
    <script type="application/ld+json">
      ${JSON.stringify(graphFor(page), null, 8)}
    </script>
    <!-- Regional SEO Upgrade End -->
    <link rel="preload" href="assets/spiritual-consultation-hero.png" as="image" />
    <link rel="icon" type="image/png" href="assets/spiritual-consultation-hero.png" />
    <link rel="apple-touch-icon" href="assets/spiritual-consultation-hero.png" />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
${header}

    <main id="top" class="regional-page-main">
      <section class="hero regional-hero" aria-label="${escapeHtml(page.region)} service introduction">
        <img class="hero-slide-image" src="assets/spiritual-consultation-hero.png" alt="${escapeHtml(page.h1)}" />
        <div class="hero-shade" aria-hidden="true"></div>
        <div class="hero-content">
          <p class="eyebrow">${escapeHtml(page.eyebrow)}</p>
          <h1>${escapeHtml(page.h1)}</h1>
          <p class="hero-copy">${escapeHtml(page.intro)}</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="${whatsapp}">Ask on WhatsApp</a>
            <a class="btn btn-secondary" href="book-online.html">Create Booking ID</a>
          </div>
          <div class="hero-proof-row" aria-label="Trust highlights">
            <span>Since 1981</span>
            <span>Quote before payment</span>
            <span>Hindi and English</span>
          </div>
        </div>
      </section>

      <section class="section regional-intent-section" aria-labelledby="regional-intent-title">
        <div class="section-heading">
          <p class="eyebrow">Search intent matched</p>
          <h2 id="regional-intent-title">${escapeHtml(page.region)} clients usually need clarity before booking.</h2>
          <p>${escapeHtml(page.lead)}</p>
        </div>
        <div class="regional-keyword-grid" aria-label="${escapeHtml(page.region)} search topics">
${page.keywords.map((keyword) => `          <span>${escapeHtml(keyword)}</span>`).join("\n")}
        </div>
      </section>

      <section class="section regional-services-section" aria-labelledby="regional-services-title">
        <div class="section-heading">
          <p class="eyebrow">Main services</p>
          <h2 id="regional-services-title">What you can book from ${escapeHtml(page.region)}</h2>
        </div>
        <div class="regional-card-grid">
${page.services
  .map(
    (service) => `          <article class="regional-card">
            <h3>${escapeHtml(service.title)}</h3>
            <p>${escapeHtml(service.text)}</p>
          </article>`
  )
  .join("\n")}
        </div>
      </section>

      <section class="section regional-process-section" aria-labelledby="regional-process-title">
        <div class="section-heading">
          <p class="eyebrow">Booking process</p>
          <h2 id="regional-process-title">Simple WhatsApp-first flow</h2>
        </div>
        <ol class="regional-process-list">
${page.process.map((step) => `          <li>${escapeHtml(step)}</li>`).join("\n")}
        </ol>
      </section>

      <section class="section regional-trust-section" aria-labelledby="regional-trust-title">
        <div class="section-heading">
          <p class="eyebrow">Why clients trust the desk</p>
          <h2 id="regional-trust-title">Built for serious spiritual enquiries, not quick promises.</h2>
        </div>
        <div class="regional-trust-list">
${page.trust.map((item) => `          <article><span>Trust point</span><p>${escapeHtml(item)}</p></article>`).join("\n")}
        </div>
      </section>

      <section class="section regional-links-section" aria-labelledby="regional-links-title">
        <div class="section-heading">
          <p class="eyebrow">Useful next pages</p>
          <h2 id="regional-links-title">Continue with the exact service you need</h2>
        </div>
        <div class="regional-link-grid">
          <a href="online-pooja.html"><strong>Online Pooja</strong><span>Temple, live video or proof options</span></a>
          <a href="hawan.html"><strong>Hawan Services</strong><span>Grah shanti, navgrah and family rituals</span></a>
          <a href="kundli.html"><strong>Kundli Consultation</strong><span>Dosh, marriage, career and remedies</span></a>
          <a href="gemstone-shop.html"><strong>Gemstone Guidance</strong><span>Ring, pendant and loose stone quote</span></a>
        </div>
      </section>

      <section class="section faq-section regional-faq-section" aria-labelledby="regional-faq-title">
        <div class="section-heading">
          <p class="eyebrow">Questions before booking</p>
          <h2 id="regional-faq-title">${escapeHtml(page.region)} FAQ</h2>
        </div>
        <div class="faq-list">
${page.faq
  .map(
    (item) => `          <details>
            <summary>${escapeHtml(item.q)}</summary>
            <p>${escapeHtml(item.a)}</p>
          </details>`
  )
  .join("\n")}
        </div>
      </section>
    </main>

    <a class="floating-whatsapp" href="${whatsapp}" aria-label="Open WhatsApp chat">WA</a>

${footer}

    <script src="site-config.js"></script>
    <script src="script.js"></script>
  </body>
</html>
`;
}

function homepageSection() {
  return `      <!-- Regional SEO Section Start -->
      <section class="section regional-hub-section" aria-labelledby="regional-hub-title">
        <div class="section-heading">
          <p class="eyebrow">Regional online pandit desk</p>
          <h2 id="regional-hub-title">Dedicated pages for India, Dubai/UAE, UK and USA searches</h2>
          <p>Choose your country page for online pooja, hawan, kundli, hast rekha, gemstone guidance, muhurat and NRI spiritual support with WhatsApp confirmation before payment.</p>
        </div>
        <div class="regional-link-grid">
          <a href="online-pooja-india.html"><strong>Online Pooja India</strong><span>Pandit, kundli, hawan and gemstone guidance</span></a>
          <a href="online-pandit-dubai-uae.html"><strong>Online Pandit Dubai UAE</strong><span>NRI pooja, astrology and gemstone guidance</span></a>
          <a href="online-pandit-uk.html"><strong>Online Pandit UK</strong><span>Hindu priest online, kundli and remedies</span></a>
          <a href="online-pandit-usa.html"><strong>Online Pandit USA</strong><span>NRI pooja, hawan, kundli and gemstone support</span></a>
        </div>
      </section>
      <!-- Regional SEO Section End -->
`;
}

function ensureHomepageSection(html) {
  if (html.includes("<!-- Regional SEO Section Start -->")) {
    return html;
  }
  return html.replace(/\s+<\/main>/, `\n${homepageSection()}    </main>`);
}

function ensureFooterRegionLinks(html) {
  if (html.includes('aria-label="Regional SEO links"')) {
    return html;
  }
  const regionalFooter = `    <nav class="footer-column" aria-label="Regional SEO links">
      <h2>Regions</h2>
      <a href="online-pooja-india.html">Online Pooja India</a>
      <a href="online-pandit-dubai-uae.html">Online Pandit Dubai UAE</a>
      <a href="online-pandit-uk.html">Online Pandit UK</a>
      <a href="online-pandit-usa.html">Online Pandit USA</a>
    </nav>
`;
  return html.replace(/(    <nav class="footer-column" aria-label="Gemstone links">)/, `${regionalFooter}$1`);
}

function updateSitemap() {
  let sitemap = read("sitemap.xml");
  const newBlocks = pages
    .filter((page) => !sitemap.includes(`<loc>${absoluteUrl(page.file)}</loc>`))
    .map(
      (page) => `  <url>
    <loc>${absoluteUrl(page.file)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>`
    );

  if (newBlocks.length) {
    sitemap = sitemap.replace("</urlset>", `${newBlocks.join("\n")}\n</urlset>`);
    write("sitemap.xml", sitemap);
  }
}

function main() {
  let index = read("index.html");
  index = ensureHomepageSection(index);
  index = ensureFooterRegionLinks(index);
  write("index.html", index);

  const header = read("index.html").match(/<header[\s\S]*?<\/header>/)[0];
  const footer = read("index.html").match(/<footer[\s\S]*?<\/footer>/)[0];

  pages.forEach((page) => {
    write(page.file, buildRegionalPage(page, header, footer));
  });
  updateSitemap();

  console.log(`Generated ${pages.length} regional SEO pages and updated sitemap.`);
}

main();
