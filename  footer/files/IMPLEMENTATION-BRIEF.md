# My Corner — Legal Pages & Footer: Implementation Brief

Brief for the developer / coding agent implementing the legal pages and footer of the My Corner landing site.

---

## 1. Context

**Project:** My Corner (fallback name: My Corner Club) — a media project (journal + chat + lectures) with a subscription model.

**Current site stage:** Informational landing page. Single transactional element: a "Subscribe" button that links to an external Russian payment service for a Telegram channel subscription. Later, that button will be replaced with App Store / Google Play download links.

**Languages:** Russian and English. The site is bilingual. No Italian UI is required.

**Owner / Data controller:** an individual operating under an Italian Partita IVA (lavoro autonomo), based in Milan. Personal details to be filled in via placeholders — see section 6.

**Applicable law:** Italian law + GDPR. The site does not target the Italian-speaking audience, but the owner is established in Italy and is therefore subject to Italian law and the supervision of the Italian Data Protection Authority (Garante per la Protezione dei Dati Personali).

**What the site does NOT do (important — keep it this way until further notice):**
- no contact forms
- no email signup forms
- no user registration
- no on-site payment processing
- no embedded social media content
- no embedded video
- no analytics (Google Analytics, Meta Pixel, etc.)
- no third-party cookies

If any of the above is added later, the legal documents must be updated accordingly (especially the Cookie Policy and Privacy Policy).

---

## 2. Files included in this package

| File | Purpose | Route |
|---|---|---|
| `privacy-policy-ru.md` | Privacy Policy (Russian) | `/ru/privacy-policy` |
| `privacy-policy-en.md` | Privacy Policy (English) | `/en/privacy-policy` |
| `cookie-policy-ru.md` | Cookie Policy (Russian) | `/ru/cookie-policy` |
| `cookie-policy-en.md` | Cookie Policy (English) | `/en/cookie-policy` |
| `terms-of-use-ru.md` | Terms of Use (Russian) | `/ru/terms` |
| `terms-of-use-en.md` | Terms of Use (English) | `/en/terms` |
| `legal-notice.md` | Legal Notice (bilingual on one page) | `/legal-notice` |

Adapt the routes to the project's chosen routing convention (e.g. `/privacy-policy` with language switcher state, or `/ru/privacy-policy` as separate routes). The important thing: routes must be **stable URLs** — they will later be referenced from the iOS application as the official Privacy Policy and Terms URLs, and Apple does not accept URLs that change.

---

## 3. Footer structure (the actual deliverable)

The footer must appear on **every page** of the site. Structure:

```
┌─────────────────────────────────────────────────────────────┐
│ © 2026 My Corner                                            │
│ [FULL_NAME] · P.IVA [VAT_NUMBER] · Milan, Italy · [EMAIL]   │
│                                                             │
│ Privacy Policy · Cookie Policy · Terms of Use · Legal Notice │
│ Manage cookies                                              │
│                                                             │
│ ODR: https://ec.europa.eu/consumers/odr                     │
└─────────────────────────────────────────────────────────────┘
```

### Rules

- **Copyright line** updates the year automatically (`new Date().getFullYear()`).
- **Identity line** is one line on desktop, may wrap on mobile. Mandatory under D.Lgs. 70/2003 — it must contain name, P.IVA, registered location, and contact email.
- **Document links** are visible on every page, link to the four legal pages. They must be plain text links, not hidden in modals or accordions.
- **"Manage cookies"** link — see section 5. Must be present and must reopen the cookie consent UI.
- **ODR link** — link to the EU online dispute resolution platform. Mandatory for any site potentially reachable by EU consumers, even if no e-commerce is performed on the site. One line, can be small text.
- **Language of footer items** matches the current site language (Russian or English).

### Bilingual labels

| Element | RU | EN |
|---|---|---|
| Privacy Policy | Политика конфиденциальности | Privacy Policy |
| Cookie Policy | Политика использования cookie | Cookie Policy |
| Terms of Use | Условия использования | Terms of Use |
| Legal Notice | Юридическая информация | Legal Notice |
| Manage cookies | Управление cookies | Manage cookies |

---

## 4. Language switching

The site is bilingual RU + EN. Each legal page must exist in both languages. Implementation requirements:

- A language switcher in the header (RU / EN) must be available on every legal page too.
- When the user switches language, the equivalent legal page in the other language opens (e.g. `/ru/privacy-policy` ↔ `/en/privacy-policy`).
- The `<html lang="...">` attribute must reflect the current language for accessibility and SEO.
- The default language can be auto-detected from the browser `Accept-Language` header for the first visit, then remembered (in `localStorage` or a cookie — see section 5).

---

## 5. Cookie consent — the technical contract

This is the part most often done wrong. Read carefully.

### What the site currently uses

Only **technical cookies** necessary for the site to function. Per the Italian Privacy Code (Art. 122 D.Lgs. 196/2003) and the Garante's order of 10 June 2021, technical cookies **do not require user consent** and do not trigger the obligation to show a consent banner.

### Consequence for implementation

**If the site uses only technical cookies (current state):** no consent banner is required. A "Manage cookies" link is still useful and should be in the footer, but it can open a static informational dialog explaining that only technical cookies are used and listing them.

**If at any point analytics or third-party cookies are added (Google Analytics, Meta Pixel, embedded YouTube/Vimeo, embedded Instagram, etc.):** a full consent banner becomes mandatory. The banner must comply with the Garante's order of 10 June 2021:

1. Shown on first visit, before any non-technical cookie is set.
2. Three options of **equal visual weight**: "Accept all" / "Reject all" / "Customise". The "Reject" button cannot be smaller, greyer, or harder to find than "Accept".
3. No pre-ticked checkboxes for non-technical categories.
4. Closing the banner (X button or clicking outside) is **not equivalent to consent** — it must default to "reject all non-technical".
5. The chosen preference is stored for up to 6 months. After 6 months the banner is shown again unless the user has interacted with it.
6. The consent can be withdrawn at any time via the "Manage cookies" link, which must reopen the same dialog and allow the user to change their preferences. Withdrawal must be **as easy as giving consent** (Art. 7.3 GDPR).
7. Any third-party scripts (analytics, pixels, embeds) must be loaded **only after** consent is given.

### Recommended implementation approach

For the current cookie-less state, the simplest approach is:

- A small static "Manage cookies" page or modal that explains: "This site uses only technical cookies necessary for its operation. No analytics, advertising, or third-party tracking cookies are used."
- No JavaScript-driven banner.

Before introducing any analytics or third-party content, switch to a proper consent management platform. Recommended options:
- **Iubenda** (Italian, GDPR-native, designed for Italian compliance)
- **Cookiebot** (EU)
- **Klaro!** (open-source, self-hosted)

Do **not** roll your own consent banner unless it has been reviewed against the 10 June 2021 Garante order in detail.

---

## 6. Placeholders to replace

The following placeholders appear across the documents and must be replaced with real values before the site goes live:

| Placeholder | Value | Where it appears |
|---|---|---|
| `[ДАТА]` / `[DATE]` | Publication date (e.g. `15 May 2026`) | All documents — top of each |
| `[ДОМЕН]` / `[DOMAIN]` | Site domain (e.g. `mycorner.app`) | All documents |
| `[ИМЯ_ФАМИЛИЯ]` / `[FULL_NAME]` | Owner's full name, Latin script, as on P.IVA | All documents + footer |
| `[НОМЕР_P_IVA]` / `[VAT_NUMBER]` | Italian VAT number | All documents + footer |
| `[CODICE_FISCALE]` | Italian tax code | Privacy Policy, Terms, Legal Notice |
| `[АДРЕС]` / `[ADDRESS]` | Full registered address in Milan with CAP | Privacy Policy, Terms, Legal Notice |
| `[EMAIL]` | Contact email (to be created — e.g. `hello@mycorner.app` or `legal@mycorner.app`) | All documents + footer |
| `[PEC_ЕСЛИ_ЕСТЬ]` / `[PEC_IF_APPLICABLE]` | Italian certified email (PEC), if owner has one. If not — remove the line entirely. | Legal Notice |
| `[НАЗВАНИЕ]` / `[NAME]` in Cookie Policy tables | Actual technical cookie names set by the hosting / framework | Cookie Policy |

A simple find-and-replace pass across all `.md` files will handle most of these. The cookie names in the table need to be filled in after the site is built — check the browser DevTools (Application → Cookies) and list whatever actually appears.

---

## 7. Rendering the Markdown

The legal documents are in Markdown. Rendering options:

- **Static site generator** (Astro, Next.js with MDX, Nuxt, Eleventy, etc.) — recommended. Each `.md` file maps to a route.
- **CMS** (Sanity, Strapi, Contentful) — fine if the site already uses one.
- **Plain HTML conversion** — acceptable for a quick launch; just convert each `.md` to a static HTML page with consistent typography.

### Typography requirements for legal pages

- Readable line length (60–80 characters).
- Sufficient contrast (WCAG AA minimum).
- Headings using `<h1>` for page title, `<h2>` for top-level sections, `<h3>` for sub-sections.
- Tables rendered properly (in cookie and privacy policies).
- Links to other legal pages within the documents must work — they are written as relative paths like `/privacy-policy` and `/cookie-policy` in the Markdown source. Adapt these to the actual route convention.
- The `<title>` of each page should be `[Document Name] — My Corner`.
- `<meta name="description">` should be a short summary of the document.

---

## 8. SEO and indexing

- All four legal pages should be **indexable** by search engines (no `noindex`) — they need to be publicly discoverable, especially for App Store / Google Play submission later.
- They should appear in `sitemap.xml`.
- They should not be linked from internal navigation as primary pages, only from the footer.

---

## 9. Accessibility

- Footer must be reachable by keyboard navigation.
- Document pages must use proper heading hierarchy (no skipped levels).
- Sufficient colour contrast.
- Links must be visually distinguishable (not relying on colour alone).

---

## 10. Acceptance criteria

The implementation is complete when:

- [ ] All seven Markdown files are rendered as live pages at stable URLs.
- [ ] Footer appears on every page with all required elements (copyright, identity line, four document links, "Manage cookies", ODR link).
- [ ] Footer adapts to current language (RU/EN).
- [ ] Language switcher works on all legal pages and preserves the user's location on the page.
- [ ] All placeholders have been replaced with real values.
- [ ] Cookie names in Cookie Policy tables reflect the actual cookies set by the site.
- [ ] "Manage cookies" link works (opens a dialog or page, even if the dialog just says "only technical cookies are used" for now).
- [ ] All pages are responsive and readable on mobile.
- [ ] All internal document links (`/privacy-policy`, `/cookie-policy`, etc.) resolve correctly.
- [ ] `<html lang>` attribute matches page language.
- [ ] Sitemap includes legal pages.
- [ ] No `noindex` directives on legal pages.
- [ ] ODR link in the footer is correct: `https://ec.europa.eu/consumers/odr`.

---

## 11. Future changes that will require document updates

Trigger an update of these documents whenever any of the following happens:

- **Analytics or tracking added** (Google Analytics, Meta Pixel, Yandex.Metrica, Hotjar, etc.) → update Cookie Policy and Privacy Policy, add consent banner.
- **Contact or email signup form added** → add data category and processing purpose to Privacy Policy.
- **Embedded third-party content added** (YouTube, Vimeo, Instagram, Twitter/X embeds) → update Cookie Policy with third-party cookies section, add consent banner.
- **On-site payment added** → add Terms of Sale, Right of Withdrawal section, link to ODR becomes mandatory in a more prominent way.
- **User accounts / registration added** → major revision of Privacy Policy and Terms.
- **Mobile application launched** → separate set of documents for the app (Privacy Policy for iOS, EULA, Subscription Terms, Account Deletion page) — referenced from the same site under additional routes.
- **Change of owner's address, P.IVA status, or transition to a company (S.r.l., etc.)** → update Legal Notice and the "Data Controller" sections of all documents.

---

## 12. Disclaimer for the implementer

These documents are drafted to be GDPR- and Italian-law compliant for the **current configuration** of the site (informational landing, no forms, no analytics, external links only). They are working production-grade texts but have **not been reviewed by a lawyer**. Before the mobile application launches with paid subscriptions, the texts and the app-specific documents should be reviewed by an Italian commercialista or avvocato specialising in digital products.
