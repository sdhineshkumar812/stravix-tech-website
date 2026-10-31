import type { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'business-websites',
    title: 'Business & Marketing Websites',
    tagline: 'High-speed, SEO-primed digital storefronts that convert visitors into qualified leads.',
    description:
      'We craft bespoke marketing websites engineered for ultra-fast load times, flawless typography, and semantic structure. Every page is tailored to present your brand authority with precision and clarity.',
    features: [
      'Tailored UI/UX architecture designed specifically for your brand',
      'Lighthouse 95+ score optimization across mobile & desktop',
      'Technical SEO, schema markup, and dynamic meta management',
      'Content management integration (Sanity, Strapi, or headless CMS)',
      'Subtle, non-distracting micro-interactions and fast animations',
    ],
    deliverables: [
      'Production-ready Vite or Next.js build',
      'Mobile-first responsive layout suite (320px to 4K)',
      'Accessible contact forms and CRM webhook leads dispatch',
      'Google Analytics 4 & Meta Pixel integration',
      'Complete DNS, domain, and SSL configuration',
    ],
    techStack: ['React', 'TypeScript', 'Vite', 'Semantic CSS', 'Headless CMS', 'Vercel / Cloudflare'],
    icon: 'Globe',
  },
  {
    id: 'react-web-apps',
    title: 'Custom React Web Applications',
    tagline: 'Stateful, production-grade SPAs, SaaS MVPs, and internal management portals.',
    description:
      'From complex client portals to venture-backed SaaS MVPs, we build resilient React web applications with clean component trees, robust state management, and type-safe architecture.',
    features: [
      'Modular TypeScript architecture built for maintainable team handoffs',
      'Role-based access control (RBAC) and secure authentication flows',
      'Real-time data visualization, tables, and telemetry dashboards',
      'State synchronization with TanStack Query and state machines',
      'Strict client-side form validation with accessible error messaging',
    ],
    deliverables: [
      'Complete SPA or hybrid web application codebase',
      'Interactive component design system with Figma alignment',
      'RESTful & GraphQL API client integration layer',
      'Comprehensive error boundaries and automated fallback screens',
      'Detailed README and developer onboarding documentation',
    ],
    techStack: ['React 19', 'TypeScript', 'Vite', 'Tailwind/Vanilla CSS', 'TanStack Query', 'Supabase/Node'],
    icon: 'Layers',
  },
  {
    id: 'ecommerce-qr-menu',
    title: 'E-Commerce & Restaurant QR Menus',
    tagline: 'Frictionless digital ordering, contactless dining QR systems, and online stores.',
    description:
      'Empower your hospitality venue or retail brand with lightning-quick ordering engines. Guests browse dynamic menus directly on their phones via QR code with zero app installation required.',
    features: [
      'Instant QR-code scanning with sub-second mobile page loads',
      'Dynamic category filtering, dietary tags, and dietary allergen alerts',
      'Real-time kitchen order dispatch and table number assignment',
      'Secure payment gateway checkout (Stripe, Razorpay, UPI, cards)',
      'Offline-tolerant cart persistence via local state caching',
    ],
    deliverables: [
      'Branded digital menu & mobile ordering progressive interface',
      'Merchant management panel for live price and stock updates',
      'Custom print-ready high-resolution QR table asset pack',
      'Order webhook notifications (WhatsApp, Telegram, or email dispatch)',
      'Sales analytics and popular item telemetry',
    ],
    techStack: ['React', 'Mobile-first PWA', 'Stripe / Razorpay', 'Cloudflare Workers', 'PostgreSQL / Supabase'],
    icon: 'QrCode',
  },
  {
    id: 'custom-software-apis',
    title: 'Custom Software & API Engineering',
    tagline: 'Scalable backend services, third-party integrations, and automated pipelines.',
    description:
      'We architect the critical infrastructure behind your digital tools. Reliable backends, clean database schemas, and robust API endpoints engineered for high concurrency and zero downtime.',
    features: [
      'Type-safe RESTful endpoints and high-efficiency GraphQL schemas',
      'PostgreSQL, MySQL, and Redis caching layers for high throughput',
      'Third-party software bridges (Stripe, Twilio, SendGrid, Salesforce)',
      'Asynchronous worker queues for PDF generation, batch processing, and syncs',
      'Automated Dockerized container configurations and CI/CD pipelines',
    ],
    deliverables: [
      'Documented API endpoints with Swagger/OpenAPI specs',
      'Relational schema migrations and database indexing audit',
      'Webhook listener pipelines with replay and retry safety',
      'Automated smoke tests and health check endpoints',
      'Cloud deployment on AWS, Google Cloud, or Railway/Render',
    ],
    techStack: ['Node.js', 'Express/Fastify', 'PostgreSQL', 'Redis', 'Docker', 'OpenAPI'],
    icon: 'Cpu',
  },
  {
    id: 'ai-integrations',
    title: 'AI Integrations & Workflow Automation',
    tagline: 'Pragmatic LLM features, custom knowledge bots, and automated business operations.',
    description:
      'We bring practical artificial intelligence to your everyday workflow. We implement custom document parsers, semantic vector search, smart client intake assistants, and automated multi-step pipelines.',
    features: [
      'Private knowledge base search using vector databases (pgvector / Pinecone)',
      'Custom LLM intake assistants trained on your brand guidelines and docs',
      'Automated unstructured document extraction (invoices, contracts, receipts)',
      'Prompt engineering with schema enforcement (Pydantic / Zod JSON outputs)',
      'Strict cost-control rate limiters and latency caching',
    ],
    deliverables: [
      'Embedded chat or automation interface within your existing web app',
      'Vector indexing pipeline for your proprietary PDFs/docs',
      'Fallback rules preventing hallucinations and safeguarding data',
      'Usage monitoring and token expenditure dashboard',
      'Developer guide for updating underlying prompts and knowledge files',
    ],
    techStack: ['OpenAI / Anthropic APIs', 'LangChain', 'pgvector', 'TypeScript', 'Node.js', 'Vercel AI SDK'],
    icon: 'Sparkles',
  },
];
