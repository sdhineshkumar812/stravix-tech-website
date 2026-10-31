import React from 'react';
import { pricingData } from '../data/pricingData';
import { Check, AlertCircle, ArrowUpRight, Clock, Star } from 'lucide-react';

interface PricingProps {
  onSelectPackage: (packageName: string, startingBudget: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPackage }) => {
  return (
    <section id="pricing" className="section section-charcoal-alt">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-tag">
            <span className="section-tag-dot"></span>
            <span>Transparent Investment</span>
          </div>
          <h2 className="section-title">Clear baseline scopes. No hidden surprises.</h2>
          <p className="section-description">
            We operate with honest, milestone-driven pricing based on real architectural complexity. Every package includes
            direct engineer communication, clean source code handover, and post-launch warranty.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '1.75rem',
            alignItems: 'stretch',
            marginBottom: '3rem',
          }}
        >
          {pricingData.map((pkg) => (
            <div
              key={pkg.id}
              className="card-surface"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                border: pkg.isPopular ? '2px solid var(--accent-lime)' : '1px solid var(--border-hairline)',
                boxShadow: pkg.isPopular
                  ? '0 12px 36px rgba(0, 0, 0, 0.6), 0 0 25px rgba(163, 230, 53, 0.15)'
                  : 'var(--shadow-card)',
                padding: 'clamp(1.5rem, 3.5vw, 2.25rem)',
              }}
            >
              {/* Popular Badge */}
              {pkg.isPopular && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#0B0F14',
                    color: 'var(--accent-lime)',
                    padding: '0.25rem 0.85rem',
                    borderRadius: 'var(--radius-full)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    border: '1px solid var(--accent-lime-border)',
                    boxShadow: '0 0 15px rgba(163, 230, 53, 0.25)',
                  }}
                >
                  <Star size={11} fill="var(--accent-lime)" color="var(--accent-lime)" />
                  <span>Most Selected Architecture</span>
                </div>
              )}

              <div>
                {/* Package Tag & Name */}
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.06em',
                    fontWeight: 600,
                    marginBottom: '0.35rem',
                  }}
                >
                  {pkg.tag}
                </div>

                <h3 style={{ fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                  {pkg.name}
                </h3>

                {/* Price */}
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                    <span
                      style={{
                        fontSize: 'clamp(2rem, 3.5vw, 2.5rem)',
                        fontWeight: 800,
                        fontFamily: 'var(--font-heading)',
                        color: '#FFFFFF',
                        letterSpacing: '-0.03em',
                      }}
                    >
                      {pkg.startingPrice}
                    </span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      starting
                    </span>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                    {pkg.currencyNote}
                  </div>
                </div>

                {/* Timeline & Ideal For */}
                <div
                  style={{
                    backgroundColor: 'rgba(5, 8, 12, 0.65)',
                    padding: '0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    marginBottom: '1.25rem',
                    border: '1px solid var(--border-hairline)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', fontWeight: 600, color: '#F8FAFC', marginBottom: '0.25rem' }}>
                    <Clock size={13} color="var(--accent-lime)" />
                    <span>Estimated Sprint: {pkg.timeline}</span>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                    {pkg.idealFor}
                  </div>
                </div>

                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '1.5rem' }}>
                  {pkg.description}
                </p>

                {/* Scope Feature List */}
                <div style={{ marginBottom: '1.75rem' }}>
                  <div
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.05em',
                      fontWeight: 600,
                      marginBottom: '0.75rem',
                    }}
                  >
                    Included Deliverables
                  </div>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {pkg.includedScope.map((scope, sIdx) => (
                      <li
                        key={sIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.5rem',
                          fontSize: '0.85rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.45,
                        }}
                      >
                        <Check size={14} color="var(--accent-lime)" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span>{scope}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom: Disclaimer & CTA */}
              <div>
                {/* Clear Scope Disclaimer */}
                <div
                  style={{
                    backgroundColor: 'rgba(5, 8, 12, 0.5)',
                    border: '1px solid var(--border-hairline)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.75rem',
                    marginBottom: '1.25rem',
                    fontSize: '0.72rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.45,
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.4rem',
                  }}
                >
                  <AlertCircle size={13} color="var(--accent-lime)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: '#E2E8F0' }}>Scope Disclaimer:</strong> {pkg.scopeDisclaimer}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectPackage(pkg.name, pkg.startingPrice)}
                  className={`btn ${pkg.isPopular ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <span>Select {pkg.name}</span>
                  <ArrowUpRight size={16} color={pkg.isPopular ? '#0B0F14' : 'currentColor'} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Engagements Banner */}
        <div
          style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-hairline)',
            borderRadius: 'var(--radius-lg)',
            padding: 'clamp(1.25rem, 3vw, 2rem)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            maxWidth: '820px',
            margin: '0 auto',
            boxShadow: 'var(--shadow-subtle)',
          }}
        >
          <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
            Need a flexible monthly engineering retainer or code audit?
          </h4>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', maxWidth: '640px' }}>
            We offer dedicated monthly developer retainers for scaling tech startups and fixed-fee performance / security audits
            for legacy React and Node.js applications.
          </p>
          <button
            type="button"
            onClick={() => onSelectPackage('Monthly Retainer / Code Audit', 'Custom')}
            className="btn btn-secondary btn-sm"
          >
            <span>Request Retainer Scope</span>
            <ArrowUpRight size={15} color="var(--accent-lime)" />
          </button>
        </div>
      </div>
    </section>
  );
};
