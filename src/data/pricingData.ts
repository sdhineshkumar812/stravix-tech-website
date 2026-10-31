import type { PricingPackage } from '../types';

export const pricingData: PricingPackage[] = [
  {
    id: 'launchpad',
    name: 'Launchpad',
    tag: 'Marketing & Brand Websites',
    startingPrice: '$1,200',
    currencyNote: 'Starting price • Approx. ₹95,000 INR',
    timeline: '1 – 2 Weeks',
    idealFor: 'Startups, studios, and professional service firms seeking a fast, high-credibility web presence.',
    description:
      'A tailored, conversion-focused responsive website engineered to establish brand authority and capture qualified customer enquiries.',
    includedScope: [
      'Up to 5 bespoke responsive pages (Home, About, Services, Work, Contact)',
      'Custom SVG branding elements & bespoke UI design system',
      'Contact enquiry form with validated EmailJS / WhatsApp integration',
      'Technical SEO foundation, Open Graph tags & Google Analytics setup',
      'Lighthouse 95+ performance optimization & Core Web Vitals audit',
      '30-day post-launch warranty & documentation handover',
    ],
    scopeDisclaimer:
      'Starting price applies to standard 1–5 page static/JAMstack architectures without complex user authentication or custom database schemas. Additional pages, complex interactive 3D elements, or third-party paid subscriptions are quoted separately.',
    isPopular: false,
  },
  {
    id: 'growth-app',
    name: 'Growth Web App',
    tag: 'Custom React Application / SaaS MVP',
    startingPrice: '$3,400',
    currencyNote: 'Starting price • Approx. ₹2,75,000 INR',
    timeline: '3 – 5 Weeks',
    idealFor: 'Founders building a SaaS MVP, dynamic client portal, or custom e-commerce / QR ordering platform.',
    description:
      'A full-featured React web application built with stateful architecture, role-based authentication, and custom database backends.',
    includedScope: [
      'Complete React & TypeScript frontend application',
      'User authentication (Email, Magic Link, OAuth Google/GitHub)',
      'Relational database architecture (Supabase / PostgreSQL) & CRUD operations',
      'Payment gateway checkout integration (Stripe, Razorpay, or PayPal)',
      'Interactive dashboard, filtering, search & exportable reports',
      'Interactive QR menu or ordering workflows (if hospitality/retail)',
      'Comprehensive error handling, automated alerts & 45-day warranty',
    ],
    scopeDisclaimer:
      'Starting price covers standard single-role or dual-role SaaS MVPs and custom ordering platforms with up to 10 distinct views. High-concurrency enterprise streaming, multi-tenant white-labeling, or legacy system migrations require a scoped custom proposal.',
    isPopular: true,
  },
  {
    id: 'bespoke-enterprise',
    name: 'Bespoke Engineering & AI',
    tag: 'Custom Software & Intelligence Systems',
    startingPrice: 'Custom Quote',
    currencyNote: 'Bespoke scope • Milestone-based',
    timeline: '4 – 8+ Weeks',
    idealFor: 'Growing enterprises requiring custom software infrastructure, API bridges, or LLM agent pipelines.',
    description:
      'Dedicated engineering for mission-critical software, custom API architectures, vector search implementations, and automated workflows.',
    includedScope: [
      'Full-stack custom software architecture & technical governance',
      'Practical AI integration (Vector embeddings, semantic search, LLM agents)',
      'High-throughput microservices or monolithic API services with Docker',
      'Automated background queues, batch processing & third-party connectors',
      'Comprehensive integration tests & CI/CD pipeline automation',
      'Dedicated Slack channel, daily syncs, and 60-day post-launch warranty',
      'Continuous monthly engineering retainer options available',
    ],
    scopeDisclaimer:
      'Bespoke engagements are estimated following an in-depth technical discovery session. Pricing is structured around transparent milestone deliverables. Cloud infrastructure hosting (AWS, GCP, Supabase) and LLM API usage tokens are billed directly to your corporate accounts.',
    isPopular: false,
  },
];
