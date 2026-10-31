import type { ProcessStep } from '../types';

export const processData: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery & Architecture Blueprint',
    phase: 'Phase 1 • Alignment',
    timeline: '3 – 5 Days',
    description:
      'We dive deep into your business model, functional requirements, and target users. Rather than jumping into generic wireframes, we formulate a technical specification document, database entities, component hierarchy, and fixed milestone schedule.',
    deliverables: [
      'Technical architecture specification & stack selection',
      'User journey mapping & interactive wireframe flows',
      'Milestone breakdown with fixed timelines & deliverables',
      'Shared project Slack / Discord channel & Git repo kickoff',
    ],
  },
  {
    step: '02',
    title: 'Design Architecture & Interactive Prototypes',
    phase: 'Phase 2 • Interface System',
    timeline: '1 – 2 Weeks',
    description:
      'We establish a coherent design system: typography tokens, responsive spacing scales, accessible color contrasts, and interactive states. You review live interactive prototypes before a single line of backend logic is committed.',
    deliverables: [
      'Comprehensive responsive UI design (Mobile 320px to Desktop 1440px+)',
      'Design token tokens (colors, typography, elevation, spacing)',
      'Accessible focus states, button hierarchies, and form elements',
      'Prototype walkthrough video and collaborative feedback round',
    ],
  },
  {
    step: '03',
    title: 'Sprint Engineering & Continuous Staging',
    phase: 'Phase 3 • Build & QA',
    timeline: '2 – 4 Weeks',
    description:
      'Development unfolds in focused weekly sprints. We write clean, typed React and backend code with zero bloat. You receive access to a private live staging URL to test progress continuously on your own devices as milestones are completed.',
    deliverables: [
      'Type-safe, component-driven React & Vite codebase',
      'Live staging deployment updated with every milestone',
      'Cross-device testing (iOS, Android, macOS, Windows, Chrome, Safari, Firefox)',
      'Core Web Vitals and performance benchmarking (Lighthouse 95+)',
    ],
  },
  {
    step: '04',
    title: 'Production Launch, Handover & Warranty',
    phase: 'Phase 4 • Launch & Beyond',
    timeline: '2 – 3 Days',
    description:
      'We orchestrate zero-downtime deployment to your hosting infrastructure, configure DNS records, verify SSL, and hand over 100% of the repository and design assets. Every project includes a 30-day post-launch warranty period for total peace of mind.',
    deliverables: [
      'Zero-downtime production launch and domain DNS setup',
      '100% full transfer of Git repository, environment variables, and docs',
      'Recorded administration walkthrough training video',
      '30 days of complimentary post-launch bug fix warranty',
    ],
  },
];
