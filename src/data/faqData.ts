import type { FAQItem } from '../types';

export const faqData: FAQItem[] = [
  {
    id: 'difference',
    category: 'delivery',
    question: 'What makes Stravix Tech different from typical digital agencies?',
    answer:
      'We are an independent, engineer-led studio. When you partner with Stravix Tech, you work directly with the senior software developers and product designers actually architecting your code—not account managers or junior interns. We avoid bloated frameworks, write clean, maintainable TypeScript, and prioritize speed, security, and transparent communication.',
  },
  {
    id: 'timeline',
    category: 'delivery',
    question: 'How long does a typical project take from discovery to launch?',
    answer:
      'A bespoke marketing or business website typically launches in 1 to 2 weeks. Custom React web applications, SaaS MVPs, and e-commerce / QR ordering platforms usually require 3 to 5 weeks. Complex bespoke engineering and AI agent systems vary between 4 and 8 weeks depending on scope. We provide a binding milestone schedule before kickoff.',
  },
  {
    id: 'ownership',
    category: 'ownership',
    question: 'Do we own 100% of the code and design assets after project delivery?',
    answer:
      'Yes, absolutely. Upon final milestone sign-off and balance completion, complete ownership of the Git repository, production deployment accounts, databases, custom design tokens, and assets is transferred to your organization. You are never locked into proprietary studio platforms.',
  },
  {
    id: 'payment',
    category: 'pricing',
    question: 'What is your payment structure and contract terms?',
    answer:
      'For standard projects, we use a transparent milestone model: 40% initial deposit at contract signing to secure your sprint slot, 30% upon approval of the interactive staging prototype, and 30% upon final acceptance, production deployment, and code handover. All terms are clearly specified in a standard professional services agreement.',
  },
  {
    id: 'post-launch',
    category: 'delivery',
    question: 'What happens after our site or application is deployed?',
    answer:
      'Every project includes a complimentary 30-day post-launch warranty period during which we promptly fix any bug, visual misalignment, or performance regression at zero additional cost. Following the warranty, we offer flexible, low-overhead monthly maintenance retainers for continuous feature iterations and security patches.',
  },
  {
    id: 'emailjs-integrations',
    category: 'tech',
    question: 'Can you integrate our existing tools, payment gateways, or EmailJS?',
    answer:
      'Yes. We regularly integrate Stripe, Razorpay, PayPal, EmailJS, Twilio WhatsApp API, Supabase, Firebase, AWS, headless CMS platforms (Sanity, Strapi), and custom REST/GraphQL endpoints. We follow strict security standards: sensitive credentials remain on protected backends, and client-safe tokens are loaded through environment variables.',
  },
  {
    id: 'tech-stack',
    category: 'tech',
    question: 'Which technologies do you build with?',
    answer:
      'Our primary stack is built around modern React, Vite, TypeScript, and semantic CSS. For full-stack applications, we utilize Node.js, Express, PostgreSQL, Supabase, Redis, and Python (for specialized AI and data pipelines). We choose modern, industry-standard tools that ensure fast performance and easy long-term hiring for your in-house team.',
  },
];
