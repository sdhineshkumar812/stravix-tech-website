import React from 'react';
import { ShieldCheck, Code2, Users2, Zap, HeartHandshake, CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  const principles = [
    {
      icon: <Code2 size={20} color="var(--accent-lime)" />,
      title: 'Craft Over Bloat',
      description:
        'We refuse heavy, bloated templates that slow down load times. Every line of TypeScript and CSS is written with intention, keeping dependencies lean and performance high.',
    },
    {
      icon: <Users2 size={20} color="var(--accent-lime)" />,
      title: 'Direct Engineer Access',
      description:
        'You never talk through junior account managers or sales intermediaries. You collaborate directly with the senior developers and product designers building your product.',
    },
    {
      icon: <ShieldCheck size={20} color="var(--accent-lime)" />,
      title: 'Total Code & Asset Ownership',
      description:
        'No vendor lock-in or recurring proprietary license fees. You own 100% of your source code, design systems, and hosting deployment environments from day one.',
    },
    {
      icon: <Zap size={20} color="var(--accent-lime)" />,
      title: 'Lighthouse 95+ Baseline',
      description:
        'Speed is a fundamental UX feature. We enforce rigorous Core Web Vitals audits, zero cumulative layout shifts (CLS), and mobile-first responsiveness across every build.',
    },
  ];

  const technologies = [
    'React 19',
    'TypeScript',
    'Vite',
    'Node.js',
    'PostgreSQL',
    'Supabase',
    'Tailwind CSS',
    'Cloudflare Workers',
    'EmailJS',
    'Stripe Checkout',
    'LangChain / OpenAI',
    'Docker',
  ];

  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--bg-canvas)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-tag">
            <span className="section-tag-dot"></span>
            <span>Studio Philosophy &amp; Identity</span>
          </div>
          <h2 className="section-title">An independent studio built by engineers.</h2>
          <p className="section-description">
            Stravix Tech was established to eliminate the bureaucratic overhead of legacy agencies. We combine boutique
            craftsmanship with production-tested engineering to build web systems that last.
          </p>
        </div>

        {/* Narrative & Principles Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
            alignItems: 'center',
            marginBottom: '3.5rem',
          }}
        >
          {/* Story Statement */}
          <div
            style={{
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-hairline)',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(1.5rem, 4vw, 2.75rem)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: 'var(--accent-lime)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <HeartHandshake size={15} color="var(--accent-lime)" />
              <span>Our Founding Commitment</span>
            </div>

            <h3
              style={{
                fontSize: '1.45rem',
                lineHeight: 1.3,
                marginBottom: '1.25rem',
                color: 'var(--text-primary)',
              }}
            >
              We believe great software is built through direct technical collaboration, not agency layers.
            </h3>

            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
              Most digital agencies pad proposals with endless account reps, third-party off-shoring, and generic website builders.
              When bugs arise or performance tanks, accountability dissolves.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
              At Stravix Tech, we operate differently. We are a compact, dedicated studio of senior software developers and
              product architects. When you partner with us, you get direct code reviews, weekly progress drops, and genuine
              advice on the most cost-effective and scalable architecture for your goals.
            </p>

            {/* Commitments checklist */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                <CheckCircle size={16} color="var(--accent-lime)" />
                <span>Zero fabricated client logos or unverified metrics</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                <CheckCircle size={16} color="var(--accent-lime)" />
                <span>Transparent milestone pricing with no hidden retainer traps</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                <CheckCircle size={16} color="var(--accent-lime)" />
                <span>Comprehensive 30-day post-launch warranty included</span>
              </div>
            </div>
          </div>

          {/* Core Principles Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '1.25rem' }}>
            {principles.map((principle, idx) => (
              <div
                key={idx}
                className="card-surface"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'rgba(163, 230, 53, 0.08)',
                    border: '1px solid var(--accent-lime-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {principle.icon}
                </div>

                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                  {principle.title}
                </h4>

                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Tech Stack Strip */}
        <div
          style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-hairline)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.5rem 2rem',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '1rem',
            }}
          >
            Core Studio Technologies &amp; Standards
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '0.65rem',
            }}
          >
            {technologies.map((tech) => (
              <span
                key={tech}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  padding: '0.4rem 0.85rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-hairline)',
                  color: 'var(--text-primary)',
                  fontWeight: 500,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
