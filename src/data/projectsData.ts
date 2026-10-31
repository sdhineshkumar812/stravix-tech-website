import type { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: 'demo-apex-telemetry',
    title: 'ApexHQ — SaaS Analytics & Operations Console',
    category: 'webapp',
    categoryLabel: 'React Web Application',
    isDemoConcept: true,
    conceptLabel: 'Demonstration / Concept Architecture',
    summary:
      'A dense, high-frequency telemetry dashboard built for real-time fleet operations, data streaming, and role-based incident triage.',
    fullDescription:
      'ApexHQ represents Stravix Tech’s reference architecture for complex, stateful web applications. It demonstrates high-frequency updates, optimistic state reconciliation, and responsive tabular layouts that remain fluid even under heavy dataset loads.',
    challenge:
      'Traditional analytics dashboards often lag when rendering live data streams, causing unnecessary re-renders across the entire component tree.',
    solution:
      'Engineered atomic Zustand stores paired with virtualization algorithms. Isolated table cell re-renders ensure smooth scrolling across large datasets with instant sorting and filtering.',
    architectureHighlights: [
      'Virtualized data grids handling high row counts without memory leaks',
      'Optimistic state updates for instant user interactions',
      'Modular compound component architecture for enterprise extensibility',
      'Strict TypeScript types with zero `any` usage',
    ],
    techStack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Zustand', 'Lucide Icons'],
  },
  {
    id: 'demo-lumina-dine',
    title: 'Lumina — Headless Dining & QR Ordering Engine',
    category: 'commerce',
    categoryLabel: 'E-Commerce & QR Ordering',
    isDemoConcept: true,
    conceptLabel: 'Demonstration / Concept Architecture',
    summary:
      'A zero-download mobile ordering web application engineered for boutique hospitality venues, complete with live cart sync and kitchen dispatch.',
    fullDescription:
      'Designed to replace clunky PDF menus with an ultra-responsive, mobile-first ordering engine. Guests scan a physical QR code and immediately access real-time dish availability, dietary allergen badges, and instant checkout.',
    challenge:
      'Restaurant guests frequently experience patchy cellular connectivity inside dining rooms, leading to abandoned orders or slow menu loads.',
    solution:
      'Built with offline-first service workers and IndexedDB persistence. Menu assets and pricing remain instantly accessible regardless of network drops, auto-syncing orders when connectivity resumes.',
    architectureHighlights: [
      'Zero-install mobile web experience requiring no app store downloads',
      'Interactive item modifiers with instant subtotal calculation',
      'Direct WhatsApp order confirmation dispatch and print webhook',
      'Touch-first responsive gestures optimized for single-thumb mobile use',
    ],
    techStack: ['React', 'TypeScript', 'PWA / Service Worker', 'IndexedDB', 'CSS Grid', 'Stripe'],
  },
  {
    id: 'demo-nexus-doc-ai',
    title: 'Nexus AI — Intelligent Contract Extraction Engine',
    category: 'ai',
    categoryLabel: 'AI Integration & Automation',
    isDemoConcept: true,
    conceptLabel: 'Demonstration / Concept Architecture',
    summary:
      'A semantic document analysis tool that parses complex legal and procurement agreements into structured, queryable JSON schemas.',
    fullDescription:
      'Nexus AI demonstrates our enterprise AI integration capability. It combines optical character parsing with vector embeddings and strict JSON schema output enforcement to turn unstructured legal documents into verified operational data.',
    challenge:
      'Large language models frequently hallucinate metadata or produce malformed JSON when parsing multi-page technical contracts.',
    solution:
      'Implemented chunk-level semantic vector verification and two-pass validation against strict JSON schemas. Any discrepancies trigger human-in-the-loop review alerts.',
    architectureHighlights: [
      'Dual-pass LLM pipeline with strict Zod schema validation',
      'Context-aware citation highlighting that links back to original PDF pages',
      'Client-side token estimation and streaming response visualization',
      'Zero training data retention architecture for complete privacy',
    ],
    techStack: ['React', 'TypeScript', 'LangChain', 'pgvector', 'FastAPI', 'Tailwind'],
  },
  {
    id: 'demo-aura-architects',
    title: 'Aura Living — Architectural Studio Showcase',
    category: 'website',
    categoryLabel: 'Business & Brand Website',
    isDemoConcept: true,
    conceptLabel: 'Demonstration / Concept Architecture',
    summary:
      'A minimal, editorial brand website for a high-end design practice with fluid typography, responsive galleries, and sub-second navigation.',
    fullDescription:
      'A showcase of Stravix Tech’s brand website engineering. Built with a strict restraint on unnecessary animations, this site uses fluid typographic scales and responsive image optimization to convey quiet luxury and architectural confidence.',
    challenge:
      'High-resolution architectural photography frequently inflates page weight, resulting in poor Core Web Vitals and slow mobile experiences.',
    solution:
      'Implemented progressive WebP/AVIF picture elements with responsive `srcset` resolutions and CSS aspect-ratio containment. Images load progressively with zero cumulative layout shift (CLS).',
    architectureHighlights: [
      'Zero cumulative layout shift (CLS) across all breakpoints',
      'Accessible keyboard navigation with high-visibility focus indicators',
      'Fluid typographic scale calculated using CSS clamp()',
      'Semantic HTML5 structure optimized for global search engine crawlers',
    ],
    techStack: ['React', 'TypeScript', 'Vite', 'Vanilla CSS Modules', 'WebP/AVIF', 'SEO Schema'],
  },
];

