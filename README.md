# STRAVIX TECH — Official Brand Website

Production-ready web platform for **Stravix Tech**, a modern web development and software solutions company. Built with React 19, TypeScript, and Vite.

---

## 🌟 Brand Identity & Aesthetic Principles

- **Brand Tone:** Premium, minimal, professional, global technology brand.
- **Palette:** Crisp off-white canvas (`#F9FAFB`), deep obsidian/charcoal typography (`#090D14`), and restrained high-impact electric-lime accents (`#CCFF00`).
- **Brand Mark:** Original bespoke geometric "ST" monogram in pure SVG with responsive wordmark.
- **Typography:** `Space Grotesk` (architectural headings), `Plus Jakarta Sans` (interface body), and `JetBrains Mono` (technical badges & metrics).
- **Core Standard:** Zero bloat, no generic template aesthetics, generous whitespace, fluid typography using `clamp()`, and accessible micro-interactions.

---

## 🚀 Quickstart & Commands

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
The application will launch at `http://localhost:5173/`.

### 3. Build for Production
```bash
npm run build
```
Type checks via `tsc -b` and produces optimized production assets in `dist/`.

### 4. Code Quality & Linting
```bash
npm run lint
```
Runs high-performance `oxlint` rules across all React and TypeScript files.

### 5. Preview Production Build
```bash
npm run preview
```

---

## ⚙️ Environment Variables & EmailJS Setup

The contact system uses `@emailjs/browser` for client-side form dispatch without exposing server secrets or email passwords.

### Configuration (`.env`)

Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

Set the following variables:
```env
# EmailJS Public Client Credentials
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key

# Contact Direct Links
VITE_WHATSAPP_NUMBER=919876543210
VITE_CONTACT_EMAIL=hello@stravixtech.com
```

### EmailJS Template Variables

In your [EmailJS Dashboard](https://dashboard.emailjs.com/), create an email template using these matching parameter names:

| Variable Name | Description |
| :--- | :--- |
| `{{from_name}}` | Full name or organization name of the client |
| `{{reply_to}}` | Client email address (set as Reply-To in template settings) |
| `{{service_type}}` | Selected service category |
| `{{budget_range}}` | Selected starting budget |
| `{{message}}` | Detailed project description |

> **Graceful Fallback Mode:**  
> If EmailJS environment variables are not yet configured, the contact form validates input and automatically activates **Direct Routing Mode**. It presents pre-formatted, one-click options to dispatch the enquiry via WhatsApp (`wa.me`) or the user's default email client (`mailto:`), ensuring zero leads are ever lost.

---

## 📱 Responsive Breakpoints & Accessibility

The design is built mobile-first and tested across all major viewport sizes:

- **320px – 374px:** Small phones (iPhone SE, Galaxy Fold outer). Zero horizontal overflow, comfortable 48px touch targets, non-zooming form inputs (16px font-size).
- **375px – 767px:** Standard smartphones (iPhone 13/14/15, Pixel). Accessible hamburger menu drawer with smooth toggle, backdrop lock, and auto-close upon navigation.
- **768px – 1023px:** Tablets & small laptops (iPad, surface). Balanced two-column grids.
- **1024px – 1439px:** Laptops & desktop displays. Full navigation bar and side-by-side terminal console.
- **1440px+:** Large screens. Centered 1220px max-width container with generous whitespace.

### Accessibility Standards
- Accessible ARIA labels (`aria-expanded`, `aria-controls`, `aria-label`, `aria-modal`)
- High-visibility focus indicators (`:focus-visible` with 2px lime ring)
- `prefers-reduced-motion` support for users who have motion sensitivity
- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)

---

## 📁 Directory Structure

```
Stravix Tech/
├── public/
│   ├── favicon.svg             # Custom geometric ST brand favicon
│   └── ...
├── src/
│   ├── components/
│   │   ├── BrandLogo.tsx       # Original geometric ST mark & wordmark
│   │   ├── Navbar.tsx          # Sticky header & accessible mobile drawer
│   │   ├── Hero.tsx            # Hero, CTAs, and interactive system console
│   │   ├── Services.tsx        # 5 core offerings with deliverables & tech tags
│   │   ├── Work.tsx            # Filterable portfolio & demo showcases
│   │   ├── ProjectModal.tsx    # Technical architecture inspection modal
│   │   ├── Process.tsx         # 4-step delivery framework
│   │   ├── About.tsx           # Authentic independent studio narrative
│   │   ├── Pricing.tsx         # Starting-price packages & scope disclaimers
│   │   ├── FAQ.tsx             # Interactive accessible accordion
│   │   ├── Contact.tsx         # Validated form, EmailJS & WhatsApp CTA
│   │   └── Footer.tsx          # Navigation columns, contact info & back to top
│   ├── config/
│   │   └── siteConfig.ts       # Centralized contact, WhatsApp, and EmailJS config
│   ├── data/
│   │   ├── servicesData.ts     # Service descriptions and deliverables
│   │   ├── projectsData.ts     # Demonstration concept architectures
│   │   ├── processData.ts      # 4-step methodology milestones
│   │   ├── pricingData.ts      # Starting packages and scope disclaimers
│   │   └── faqData.ts          # Studio FAQs
│   ├── types.ts                # TypeScript interfaces and types
│   ├── index.css               # Design tokens, CSS variables, and fluid scales
│   ├── App.tsx                 # Root application composition
│   └── main.tsx                # React 19 entry point
├── .env.example                # Documented environment variables template
├── index.html                  # SEO metadata, title, and Google Fonts
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🔒 Security & Client Safety

- **No client-side private secrets:** Only safe public identifiers (`VITE_EMAILJS_PUBLIC_KEY`) are exposed in frontend bundles. No email account passwords or backend secrets exist in client code.
- **No fake claims:** Zero fabricated customer testimonials, fake statistics, or unverified enterprise logos. All portfolio items are transparently labelled as studio demonstration architectures.
