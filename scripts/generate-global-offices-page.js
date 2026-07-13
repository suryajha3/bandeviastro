const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const baseUrl = "https://bandeviastro.com";
const pageFile = "global-offices.html";
const pageUrl = `${baseUrl}/${pageFile}`;
const today = "2026-07-05";
const sourceUrl = "https://theholidaysgroup.com/about-us";
const heroImage = `${baseUrl}/assets/spiritual-consultation-hero.jpg`;

const offices = [
  {
    name: "Delhi Office",
    city: "Delhi",
    country: "India",
    address:
      "Third Floor, Gulshan Park, H-30, Plot No 6&7, Vijay Chowk Area, Laxmi Nagar, Delhi, 110092",
    phone: "+918287669022"
  },
  {
    name: "Pune Office",
    city: "Pune",
    country: "India",
    address:
      "Spacelane 15/a, 4th Floor, A Building, City Vista, Fountain Road, Ashoka Nagar, Kharadi, Pune, Maharashtra - 411014"
  },
  {
    name: "Gurgaon Hub",
    city: "Gurgaon",
    country: "India",
    address:
      "7th Floor, 704 Palm Court, Mehrauli Gurugram Road, Sector 16, Gurgaon, Haryana - 122001"
  },
  {
    name: "Mumbai Office",
    city: "Mumbai",
    country: "India",
    address:
      "1st Floor, Sai Dham Housing Society, B-2, Marol Naka, Andheri East, Mumbai, 400059"
  },
  {
    name: "Bangalore Office",
    city: "Bengaluru",
    country: "India",
    address: "561, 32nd Cross Rd, 4th Block, Jayanagar, Bengaluru, 560011"
  },
  {
    name: "Kolkata Office",
    city: "Kolkata",
    country: "India",
    address: "2D, Bose Pukur Rd, Prantik Palli, Kasba, Kolkata, 700042"
  },
  {
    name: "Lucknow Office",
    city: "Lucknow",
    country: "India",
    address: "Radiant Complex, Cantonment Road, Lalbagh, Lucknow, 226001"
  },
  {
    name: "Dubai Office - Sheikh Zayed Road",
    city: "Dubai",
    country: "United Arab Emirates",
    address: "Office 203, Al Tayer Building, Sheikh Zayed Road, Dubai, UAE"
  },
  {
    name: "Dubai Office - Deira",
    city: "Dubai",
    country: "United Arab Emirates",
    address: "Hor Al Anz East, Deira, Dubai, UAE"
  },
  {
    name: "London Office",
    city: "London",
    country: "United Kingdom",
    address: "71-75 Shelton Street, Covent Garden / Holborn, London, WC2H 9JQ"
  },
  {
    name: "United States Office",
    city: "Monterey Park, California",
    country: "United States",
    address: "216 W Garvey Avenue, Suite C, Monterey Park, California, 91754"
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

function graph() {
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
            contactType: "Bandevi Astro spiritual service desk",
            areaServed: ["India", "United Arab Emirates", "United Kingdom", "United States"],
            availableLanguage: ["Hindi", "English"]
          }
        ]
      },
      {
        "@type": "AboutPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Bandevi Astro Global Offices and Service Network",
        description:
          "Bandevi Astro global offices and service network reference using public The Holidays Group office details for India, Dubai, London and the United States.",
        isPartOf: {
          "@id": `${baseUrl}/#website`
        },
        about: {
          "@id": `${baseUrl}/#organization`
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: heroImage
        },
        dateModified: today,
        citation: sourceUrl
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#office-list`,
        name: "Public office and service network locations",
        itemListElement: offices.map((office, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Place",
            name: office.name,
            address: office.address,
            containedInPlace: {
              "@type": "Country",
              name: office.country
            }
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
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
            name: "Global Offices",
            item: pageUrl
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "Where did these office details come from?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "The office and network details are taken from the public The Holidays Group about page and are presented as a group office/service network reference."
            }
          },
          {
            "@type": "Question",
            name: "Can Bandevi Astro clients use these offices for spiritual bookings?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Bandevi Astro spiritual enquiries should first be handled through the Bandevi Astro WhatsApp, phone or booking desk. Office visits or document verification should be confirmed privately before travel."
            }
          },
          {
            "@type": "Question",
            name: "Which countries are covered by the office network?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "The public network lists India, United Arab Emirates, United Kingdom and United States locations, including Delhi, Pune, Gurgaon, Mumbai, Bengaluru, Kolkata, Lucknow, Dubai, London and California."
            }
          }
        ]
      }
    ]
  };
}

function page(header, footer) {
  const title = "Global Offices & Service Network | Bandevi Astro";
  const description =
    "Bandevi Astro global offices and service network page with public The Holidays Group office details for India, Dubai, London and the United States.";

  return `<!DOCTYPE html>
<html lang="en-IN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <!-- Global Offices SEO Start -->
    <link rel="canonical" href="${pageUrl}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Bandevi Astro" />
    <meta property="og:locale" content="en_IN" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:url" content="${pageUrl}" />
    <meta property="og:image" content="${heroImage}" />
    <meta property="og:image:alt" content="Bandevi Astro global offices and service network" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${heroImage}" />
    <script type="application/ld+json">
      ${JSON.stringify(graph(), null, 8)}
    </script>
    <!-- Global Offices SEO End -->
    <link rel="preload" href="assets/spiritual-consultation-hero.jpg" as="image" />
    <link rel="icon" type="image/png" href="assets/bandevi-favicon.png" />
    <link rel="apple-touch-icon" href="assets/bandevi-favicon.png" />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
${header}

    <main id="top" class="global-offices-main">
      <section class="hero global-offices-hero" aria-label="Global offices and service network">
        <img class="hero-slide-image" src="assets/spiritual-consultation-hero.jpg" alt="Bandevi Astro global offices and service network" />
        <div class="hero-shade" aria-hidden="true"></div>
        <div class="hero-content">
          <p class="eyebrow">Global office network</p>
          <h1>Bandevi Astro global offices and service network</h1>
          <p class="hero-copy">This page organizes the public The Holidays Group office and service network details for India, Dubai, London and the United States, with clear routing back to the Bandevi Astro spiritual service desk.</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="https://wa.me/918676846484?text=Namaste%2C%20I%20want%20to%20confirm%20Bandevi%20Astro%20office%20or%20service%20network%20details.">Confirm on WhatsApp</a>
            <a class="btn btn-secondary" href="company-profile.html">Company Profile</a>
          </div>
          <div class="hero-proof-row" aria-label="Office network highlights">
            <span>India</span>
            <span>Dubai</span>
            <span>London</span>
            <span>United States</span>
          </div>
        </div>
      </section>

      <section class="section office-source-section" aria-labelledby="office-source-title">
        <div class="section-heading">
          <p class="eyebrow">Source and usage</p>
          <h2 id="office-source-title">Office details sourced from The Holidays Group public profile</h2>
          <p>The Holidays Group public about page lists a travel and hospitality network with 26+ office presence worldwide, 1000+ professional employees and INR 8,000 crore+ estimated group business strength. Bandevi Astro uses this page as a linked group/network reference while spiritual bookings remain confirmed through the Bandevi Astro desk.</p>
        </div>
        <div class="company-profile-hub-actions">
          <a class="btn btn-primary" href="${sourceUrl}">View source profile</a>
          <a class="btn btn-secondary" href="company-profile.html">Bandevi Astro Company Profile</a>
        </div>
      </section>

      <section class="section office-network-section" aria-labelledby="office-network-title">
        <div class="section-heading">
          <p class="eyebrow">Public office list</p>
          <h2 id="office-network-title">India, Dubai, London and United States office/service locations</h2>
          <p>For any visit, documentation or official verification, confirm the correct contact and appointment first by WhatsApp or phone.</p>
        </div>
        <div class="office-network-grid">
${offices
  .map(
    (office) => `          <article class="office-card">
            <span>${escapeHtml(office.country)}</span>
            <h3>${escapeHtml(office.name)}</h3>
            <p>${escapeHtml(office.address)}</p>
            ${office.phone ? `<a href="tel:${office.phone}">Mobile: ${office.phone.replace("+91", "")}</a>` : ""}
          </article>`
  )
  .join("\n")}
        </div>
      </section>

      <section class="section office-network-section" aria-labelledby="network-strength-title">
        <div class="section-heading">
          <p class="eyebrow">Network strength</p>
          <h2 id="network-strength-title">Public The Holidays Group details found</h2>
        </div>
        <div class="company-fact-grid">
          <article><span>Presence</span><strong>Since 2007</strong><p>Public THG profile states trusted travel presence since 2007.</p></article>
          <article><span>Office network</span><strong>26+ offices and service locations</strong><p>Public THG profile states 26+ office presence worldwide.</p></article>
          <article><span>Team</span><strong>1000+ professional employees</strong><p>Public THG profile lists 1000+ employees across travel operations and support functions.</p></article>
          <article><span>Group strength</span><strong>INR 8,000 crore+</strong><p>Public THG profile states estimated group business strength/net worth as INR 8,000 crore+.</p></article>
        </div>
      </section>

      <section class="section office-faq-section faq-section" aria-labelledby="office-faq-title">
        <div class="section-heading">
          <p class="eyebrow">Office FAQ</p>
          <h2 id="office-faq-title">Before using office details</h2>
        </div>
        <div class="faq-list">
          <details open>
            <summary>Are these Bandevi Astro walk-in offices?</summary>
            <p>These are public The Holidays Group office and service network details. Bandevi Astro spiritual enquiries should be confirmed through Bandevi Astro WhatsApp, phone or booking flow before any office visit.</p>
          </details>
          <details>
            <summary>Can I use these addresses for verification?</summary>
            <p>Use them only after confirming the correct verification purpose and appointment through the official contact desk. Public website addresses may change.</p>
          </details>
          <details>
            <summary>Which office should international clients use?</summary>
            <p>International clients should start with WhatsApp or phone. The public network includes Dubai, London and United States locations, but the correct routing depends on the service request.</p>
          </details>
        </div>
      </section>
    </main>

    <a class="floating-whatsapp" href="https://wa.me/918676846484" aria-label="Open WhatsApp chat">WA</a>

${footer}

    <script src="site-config.js"></script>
    <script src="script.js"></script>
  </body>
</html>
`;
}

function ensureHomepageSection(html) {
  const section = `      <!-- Global Offices SEO Section Start -->
      <section class="section global-offices-hub-section" aria-labelledby="global-offices-hub-title">
        <div class="section-heading">
          <p class="eyebrow">Office network priority</p>
          <h2 id="global-offices-hub-title">Global office and service network details</h2>
          <p>Public The Holidays Group office details now support Bandevi Astro credibility for India, Dubai, London and United States searches, with clear routing to the Bandevi Astro booking desk.</p>
        </div>
        <div class="company-profile-hub-actions">
          <a class="btn btn-primary" href="global-offices.html">View Global Offices</a>
          <a class="btn btn-secondary" href="company-profile.html">Company Profile</a>
        </div>
      </section>
      <!-- Global Offices SEO Section End -->
`;
  if (html.includes("<!-- Global Offices SEO Section Start -->")) {
    return html.replace(
      /      <!-- Global Offices SEO Section Start -->[\s\S]*?      <!-- Global Offices SEO Section End -->\r?\n/,
      section
    );
  }
  return html.replace("      <!-- Regional SEO Section Start -->", `${section}      <!-- Regional SEO Section Start -->`);
}

function ensureFooterLink(html) {
  if (html.includes('href="global-offices.html"')) {
    return html;
  }
  return html.replace(
    '<a href="company-profile.html">Company Profile</a>',
    '<a href="company-profile.html">Company Profile</a>\n      <a href="global-offices.html">Global Offices</a>'
  );
}

function ensureCompanyProfileLink(html) {
  const section = `      <!-- Global Offices Profile Link Start -->
      <section class="section company-profile-hub-section" aria-labelledby="profile-offices-title">
        <div class="section-heading">
          <p class="eyebrow">Office network</p>
          <h2 id="profile-offices-title">Public office/service network from The Holidays Group</h2>
          <p>The global offices page lists public The Holidays Group office and service network details for India, Dubai, London and the United States, while Bandevi Astro spiritual service enquiries remain routed through the Bandevi Astro desk.</p>
        </div>
        <div class="company-profile-hub-actions">
          <a class="btn btn-primary" href="global-offices.html">View Global Offices</a>
          <a class="btn btn-secondary" href="${sourceUrl}">View THG Source</a>
        </div>
      </section>
      <!-- Global Offices Profile Link End -->
`;
  if (html.includes("<!-- Global Offices Profile Link Start -->")) {
    return html.replace(
      /      <!-- Global Offices Profile Link Start -->[\s\S]*?      <!-- Global Offices Profile Link End -->\r?\n/,
      section
    );
  }
  return html.replace("      <section class=\"section company-update-section\"", `${section}      <section class="section company-update-section"`);
}

function ensureSitemap() {
  let sitemap = read("sitemap.xml");
  if (sitemap.includes(`<loc>${pageUrl}</loc>`)) {
    return;
  }
  const block = `  <url>
    <loc>${pageUrl}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
`;
  sitemap = sitemap.replace("</urlset>", `${block}</urlset>`);
  write("sitemap.xml", sitemap);
}

function main() {
  let index = read("index.html");
  index = ensureHomepageSection(index);
  index = ensureFooterLink(index);
  write("index.html", index);

  let companyProfile = read("company-profile.html");
  companyProfile = ensureCompanyProfileLink(companyProfile);
  write("company-profile.html", companyProfile);

  const header = read("index.html").match(/<header[\s\S]*?<\/header>/)[0];
  const footer = read("index.html").match(/<footer[\s\S]*?<\/footer>/)[0];
  write(pageFile, page(header, footer));
  ensureSitemap();
  console.log("Generated global offices page and updated internal links.");
}

main();
