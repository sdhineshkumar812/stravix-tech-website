import React from 'react';
import { processData } from '../data/processData';
import { Check, Clock } from 'lucide-react';

export const Process: React.FC = () => {
  return (
    <section id="process" className="section section-charcoal-alt">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-tag">
            <span className="section-tag-dot"></span>
            <span>Predictable Delivery Framework</span>
          </div>
          <h2 className="section-title">From blueprint to production in four structured sprints.</h2>
          <p className="section-description">
            No endless feedback loops, no unaccounted surprises. We work through a transparent milestone methodology
            designed to deliver high-integrity software on predictable schedules.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: '1.5rem',
            position: 'relative',
          }}
        >
          {processData.map((step) => (
            <div
              key={step.step}
              className="card-surface"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                padding: 'clamp(1.25rem, 3vw, 1.85rem)',
              }}
            >
              <div>
                {/* Step Number & Timeline Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.75rem',
                      fontWeight: 800,
                      background: 'linear-gradient(180deg, #FFFFFF 0%, #E2E8F0 50%, #94A3B8 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      letterSpacing: '-0.03em',
                    }}
                  >
                    {step.step}
                  </span>

                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--text-secondary)',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      padding: '0.2rem 0.55rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-hairline)',
                    }}
                  >
                    <Clock size={12} color="var(--accent-lime)" />
                    <span>{step.timeline}</span>
                  </div>
                </div>

                <div
                  style={{
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--accent-lime)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    fontWeight: 600,
                    marginBottom: '0.4rem',
                  }}
                >
                  {step.phase}
                </div>

                <h3
                  style={{
                    fontSize: '1.2rem',
                    marginBottom: '0.85rem',
                    color: 'var(--text-primary)',
                    lineHeight: 1.3,
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem',
                  }}
                >
                  {step.description}
                </p>
              </div>

              {/* Concrete Deliverables */}
              <div
                style={{
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-hairline)',
                }}
              >
                <div
                  style={{
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-mono)',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: '0.6rem',
                    fontWeight: 600,
                  }}
                >
                  Phase Deliverables
                </div>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  {step.deliverables.map((item, dIdx) => (
                    <li
                      key={dIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.45rem',
                        fontSize: '0.8rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.4,
                      }}
                    >
                      <Check
                        size={13}
                        color="var(--accent-lime)"
                        style={{ flexShrink: 0, marginTop: '2px' }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
