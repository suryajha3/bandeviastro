const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const baseUrl = "https://bandeviastro.com";
const today = "2026-07-05";
const pageFile = "company-profile.html";
const pageUrl = `${baseUrl}/${pageFile}`;
const image = `${baseUrl}/assets/spiritual-consultation-hero.png`;

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
        foundingDate: "1981",
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+918676846484",
            contactType: "customer support",
            areaServed: ["IN", "US", "GB", "AE", "NRI families"],
            availableLanguage: ["Hindi", "English"]
          }
        ],
        knowsAbout: [
          "Online pooja",
          "Hawan",
          "Kundli consultation",
          "Hast rekha",
          "Gemstone guidance",
          "Vastu",
          "Muhurat"
        ]
      },
      {
        "@type": "AboutPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Bandevi Astro Company Profile, Offices, Staff Size and Net Worth",
        description:
          "Public company profile for Bandevi Astro with confirmed service facts, contact details, public office disclosure, staff-size note and net-worth disclosure status.",
        isPartOf: {
          "@id": `${baseUrl}/#website`
        },
        about: {
          "@id": `${baseUrl}/#organization`
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: image
        },
        dateModified: today
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
            name: "Company Profile",
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
            name: "What is Bandevi Astro net worth?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Bandevi Astro has not published an audited public net-worth figure. This page avoids unverified financial claims and lists confirmed public business facts instead."
            }
          },
          {
            "@type": "Question",
            name: "What is Bandevi Astro staff size?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Bandevi Astro has not published a verified public headcount. The site uses a booking and staff workflow for enquiry, quote, payment status, schedule and proof updates."
            }
          },
          {
            "@type": "Question",
            name: "Where are Bandevi Astro offices located?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Bandevi Astro does not publish public walk-in office addresses on the website. Clients can contact the desk by WhatsApp, phone or email for verified service and documentation details."
            }
          }
        ]
      }
    ]
  };
}

function profilePage(header, footer) {
  const title = "Bandevi Astro Company Profile, Offices, Staff Size & Net Worth";
  const description =
    "Public Bandevi Astro company profile: confirmed services, contact desk, staff-size note, office disclosure and net-worth disclosure status for client trust.";

  return `<!DOCTYPE html>
<html lang="en-IN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <!-- Company Profile SEO Start -->
    <link rel="canonical" href="${pageUrl}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Bandevi Astro" />
    <meta property="og:locale" content="en_IN" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:url" content="${pageUrl}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:alt" content="Bandevi Astro public company profile" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${image}" />
    <script type="application/ld+json">
      ${JSON.stringify(graph(), null, 8)}
    </script>
    <!-- Company Profile SEO End -->
    <link rel="preload" href="assets/spiritual-consultation-hero.png" as="image" />
    <link rel="icon" type="image/png" href="assets/spiritual-consultation-hero.png" />
    <link rel="apple-touch-icon" href="assets/spiritual-consultation-hero.png" />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
${header}

    <main id="top" class="company-profile-main">
      <section class="hero company-profile-hero" aria-label="Bandevi Astro company profile">
        <img class="hero-slide-image" src="assets/spiritual-consultation-hero.png" alt="Bandevi Astro company profile and trust information" />
        <div class="hero-shade" aria-hidden="true"></div>
        <div class="hero-content">
          <p class="eyebrow">Public company profile</p>
          <h1>Bandevi Astro company profile: offices, staff size and net worth</h1>
          <p class="hero-copy">This page gives Google and clients one clear, truthful place for Bandevi Astro profile facts. It lists confirmed public details and clearly marks private or not-yet-disclosed business numbers.</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="https://wa.me/918676846484?text=Namaste%2C%20I%20want%20verified%20Bandevi%20Astro%20company%20profile%20details.">Ask for verification</a>
            <a class="btn btn-secondary" href="about.html">About and Trust</a>
          </div>
          <div class="hero-proof-row" aria-label="Profile trust facts">
            <span>Since 1981</span>
            <span>Public facts only</span>
            <span>No fake net-worth claim</span>
          </div>
        </div>
      </section>

      <section class="section company-facts-section" aria-labelledby="company-facts-title">
        <div class="section-heading">
          <p class="eyebrow">Priority facts</p>
          <h2 id="company-facts-title">Confirmed public business information</h2>
          <p>These facts are safe for clients, Google, payment verification and future business profile work because they do not invent financial or office details.</p>
        </div>
        <div class="company-fact-grid">
          <article>
            <span>Brand</span>
            <strong>Bandevi Astro</strong>
            <p>Astro services and religious products brand under the Bandevi public brand system.</p>
          </article>
          <article>
            <span>Lead</span>
            <strong>Pdt. Jyotishacharya Kumodanand Jha (Shastri)</strong>
            <p>Presented with Jyotishacharya, Vedacharya and Shastri credentials.</p>
          </article>
          <article>
            <span>Experience</span>
            <strong>Since 1981</strong>
            <p>Traditional Jyotish, pooja, hawan, kundli, hast rekha and gemstone guidance experience.</p>
          </article>
          <article>
            <span>Public contact</span>
            <strong>WhatsApp, phone and email</strong>
            <p>+91 86768 46484, +91 62046 41845 and bandeviglobalgroup@gmail.com.</p>
          </article>
        </div>
      </section>

      <section class="section company-disclosure-section" aria-labelledby="company-disclosure-title">
        <div class="section-heading">
          <p class="eyebrow">Net worth, team and offices</p>
          <h2 id="company-disclosure-title">Public disclosure status</h2>
          <p>These are the priority branded-search topics. They are handled honestly so the site can rank without publishing false numbers.</p>
        </div>
        <div class="company-disclosure-grid">
          <article>
            <h3>Bandevi Astro net worth</h3>
            <strong>Not publicly disclosed</strong>
            <p>No audited public net-worth figure has been provided for the website. The page should not claim a turnover, valuation, assets figure or net worth until you give verified numbers.</p>
          </article>
          <article>
            <h3>Bandevi Astro staff size</h3>
            <strong>Not publicly disclosed</strong>
            <p>The site confirms a booking and staff workflow for enquiry, quote, payment status, schedule and proof updates. Exact headcount should be added only after verification.</p>
          </article>
          <article>
            <h3>Bandevi Astro offices</h3>
            <strong>Public walk-in offices not listed online</strong>
            <p>Office addresses are not displayed publicly on the website. Clients can request verified address or documentation details through WhatsApp, phone or email.</p>
          </article>
        </div>
      </section>

      <section class="section company-coverage-section" aria-labelledby="company-coverage-title">
        <div class="section-heading">
          <p class="eyebrow">Service coverage</p>
          <h2 id="company-coverage-title">Where Bandevi Astro serves clients</h2>
          <p>The public service model is online-first, with India and NRI support across the regions already targeted by the SEO pages.</p>
        </div>
        <div class="regional-link-grid">
          <a href="online-pooja-india.html"><strong>India</strong><span>Online pooja, kundli, hawan and gemstone guidance</span></a>
          <a href="online-pandit-dubai-uae.html"><strong>Dubai/UAE</strong><span>NRI pooja, astrology and remote hawan support</span></a>
          <a href="online-pandit-uk.html"><strong>United Kingdom</strong><span>Online pandit and Hindu priest support for UK families</span></a>
          <a href="online-pandit-usa.html"><strong>United States</strong><span>NRI pooja, kundli and gemstone guidance for USA clients</span></a>
        </div>
      </section>

      <section class="section company-update-section" aria-labelledby="company-update-title">
        <div class="section-heading">
          <p class="eyebrow">Ready for exact data</p>
          <h2 id="company-update-title">What to update when official details are ready</h2>
          <p>Once you confirm the numbers, this page can be upgraded again with exact staff count, offices and business-profile data.</p>
        </div>
        <ol class="regional-process-list">
          <li>Add verified registered office address or public office city.</li>
          <li>Add official staff size or team-size range.</li>
          <li>Add audited/verified financial disclosure only if you want it public.</li>
          <li>Add official registration, GST or payment-verification details if appropriate.</li>
        </ol>
      </section>

      <section class="section faq-section company-profile-faq" aria-labelledby="company-profile-faq-title">
        <div class="section-heading">
          <p class="eyebrow">Branded search FAQ</p>
          <h2 id="company-profile-faq-title">Company profile FAQ</h2>
        </div>
        <div class="faq-list">
          <details open>
            <summary>What is Bandevi Astro net worth?</summary>
            <p>Bandevi Astro has not published an audited public net-worth figure. This page avoids unverified financial claims and lists confirmed public business facts instead.</p>
          </details>
          <details>
            <summary>What is Bandevi Astro staff size?</summary>
            <p>Bandevi Astro has not published a verified public headcount. The website confirms a staff workflow for enquiry, quote, payment status, schedule and proof updates.</p>
          </details>
          <details>
            <summary>Where are Bandevi Astro offices?</summary>
            <p>Bandevi Astro does not publish public walk-in office addresses on the website. Clients can contact the desk by WhatsApp, phone or email for verified service and documentation details.</p>
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
  if (html.includes("<!-- Company Profile SEO Section Start -->")) {
    return html;
  }
  const section = `      <!-- Company Profile SEO Section Start -->
      <section class="section company-profile-hub-section" aria-labelledby="company-profile-hub-title">
        <div class="section-heading">
          <p class="eyebrow">Company profile priority</p>
          <h2 id="company-profile-hub-title">Bandevi Astro public profile, offices, staff size and net worth</h2>
          <p>A dedicated public profile page now explains confirmed facts, service coverage, contact desk, office disclosure, staff-size note and net-worth disclosure status without fake claims.</p>
        </div>
        <div class="company-profile-hub-actions">
          <a class="btn btn-primary" href="company-profile.html">Open Company Profile</a>
          <a class="btn btn-secondary" href="about.html">About and Trust</a>
        </div>
      </section>
      <!-- Company Profile SEO Section End -->
`;
  return html.replace("      <!-- Regional SEO Section Start -->", `${section}      <!-- Regional SEO Section Start -->`);
}

function ensureFooterLink(html) {
  if (html.includes('href="company-profile.html"')) {
    return html;
  }
  return html.replace(
    '<a href="about.html">About and Trust</a>',
    '<a href="about.html">About and Trust</a>\n      <a href="company-profile.html">Company Profile</a>'
  );
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

  const header = read("index.html").match(/<header[\s\S]*?<\/header>/)[0];
  const footer = read("index.html").match(/<footer[\s\S]*?<\/footer>/)[0];
  write(pageFile, profilePage(header, footer));
  ensureSitemap();
  console.log("Generated company profile page and updated sitemap.");
}

main();
