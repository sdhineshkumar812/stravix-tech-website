import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { BrandLogo } from './BrandLogo';
import { ArrowUpRight, MessageCircle, Terminal, CheckCircle2, ShieldCheck, Zap, Sparkles } from 'lucide-react';

interface HeroProps {
  onStartProject: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onExploreWork }) => {
  const [activeTab, setActiveTab] = useState<'stack' | 'vitals' | 'standards'>('stack');

  return (
    <section
      id="hero"
      className="section textured-studio-bg"
      style={{
        paddingTop: 'clamp(3rem, 7vw, 5.5rem)',
        paddingBottom: 'clamp(3.5rem, 7vw, 6rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        {/* Brand Plaque / Studio Credential Top Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '2.5rem',
            paddingBottom: '1.5rem',
            borderBottom: '1px solid var(--border-hairline)',
          }}
        >
          {/* Prominent Emblem + Wordmark + Tagline */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <BrandLogo size="lg" theme="dark" showTagline={true} />
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--font-xs)',
              color: 'var(--text-secondary)',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              padding: '0.4rem 0.85rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--border-hairline)',
            }}
          >
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: 'var(--accent-lime)', boxShadow: '0 0 10px var(--accent-lime)' }}></span>
            <span>Q4 / Q1 Engineering Availability Open</span>
          </div>
        </div>

        {/* Two-Column Grid: Left Copy & CTA, Right Interactive Engineering Console */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
            gap: 'clamp(2.5rem, 5vw, 4rem)',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Headline, Copy, Action Buttons */}
          <div>
            <h1
              style={{
                fontSize: 'var(--font-hero)',
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: '-0.035em',
                color: 'var(--text-primary)',
                marginBottom: '1.5rem',
              }}
            >
              Digital experiences built for{' '}
              <span
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  color: 'var(--accent-lime)',
                  textShadow: '0 0 25px rgba(163, 230, 53, 0.35)',
                }}
              >
                impact.
              </span>
            </h1>

            <p
              style={{
                fontSize: 'var(--font-body-lg)',
                lineHeight: 1.65,
                color: 'var(--text-secondary)',
                marginBottom: '2rem',
                maxWidth: '560px',
              }}
            >
              We design and develop modern web solutions that help businesses grow, scale and stay ahead.
            </p>

            {/* Action Buttons matching Reference */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.85rem',
                alignItems: 'center',
                marginBottom: '2.5rem',
              }}
            >
              <button onClick={onStartProject} className="btn btn-primary btn-lg" style={{ minWidth: '180px' }}>
                <span>Start a Project</span>
                <ArrowUpRight size={18} color="#0B0F14" />
              </button>

              <a
                href={siteConfig.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-lg"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  borderColor: 'rgba(74, 222, 128, 0.35)',
                  color: '#4ADE80',
                  backgroundColor: 'rgba(74, 222, 128, 0.06)',
                }}
                title="Chat directly on WhatsApp"
              >
                <MessageCircle size={18} color="#4ADE80" />
                <span>WhatsApp</span>
              </a>

              <button onClick={onExploreWork} className="btn btn-secondary btn-lg">
                <span>Selected Work</span>
              </button>
            </div>

            {/* Value Guarantees (No fake stats) */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '1rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border-hairline)',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.9rem' }}>
                  <ShieldCheck size={16} color="var(--accent-lime)" />
                  <span>100% IP Handover</span>
                </div>
                <div style={{ fontSize: 'var(--font-xs)', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                  Full code, asset &amp; repo ownership
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.9rem' }}>
                  <Zap size={16} color="var(--accent-lime)" />
                  <span>Sub-Second Speed</span>
                </div>
                <div style={{ fontSize: 'var(--font-xs)', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                  Lighthouse 95+ performance baseline
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} color="var(--accent-lime)" />
                  <span>Zero Middlemen</span>
                </div>
                <div style={{ fontSize: 'var(--font-xs)', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                  Direct senior developer reviews
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Stravix System Architecture Console */}
          <div>
            <div
              style={{
                backgroundColor: 'var(--bg-surface)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--border-metallic)',
                boxShadow: 'var(--shadow-metallic)',
                overflow: 'hidden',
                color: 'var(--text-primary)',
              }}
            >
              {/* Window Header */}
              <div
                style={{
                  padding: '0.85rem 1.25rem',
                  backgroundColor: 'rgba(5, 8, 12, 0.65)',
                  borderBottom: '1px solid var(--border-hairline)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#EF4444' }}></span>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#F59E0B' }}></span>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10B981' }}></span>
                  <span
                    style={{
                      marginLeft: '0.5rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    stravix-runtime-v2.0.ts
                  </span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--accent-lime)',
                    backgroundColor: 'rgba(163, 230, 53, 0.12)',
                    padding: '0.2rem 0.55rem',
                    borderRadius: '4px',
                    border: '1px solid var(--accent-lime-border)',
                  }}
                >
                  <Sparkles size={12} />
                  <span>PRODUCTION BENCHMARK</span>
                </div>
              </div>

              {/* Console Tabs */}
              <div
                style={{
                  display: 'flex',
                  borderBottom: '1px solid var(--border-hairline)',
                  backgroundColor: 'rgba(11, 15, 20, 0.8)',
                  padding: '0.25rem 0.5rem 0',
                  gap: '0.25rem',
                }}
              >
                <button
                  type="button"
                  onClick={() => setActiveTab('stack')}
                  style={{
                    padding: '0.5rem 0.85rem',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    color: activeTab === 'stack' ? 'var(--accent-lime)' : 'var(--text-secondary)',
                    borderBottom: activeTab === 'stack' ? '2px solid var(--accent-lime)' : '2px solid transparent',
                    cursor: 'pointer',
                  }}
                >
                  // 01. Tech Stack
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('vitals')}
                  style={{
                    padding: '0.5rem 0.85rem',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    color: activeTab === 'vitals' ? 'var(--accent-lime)' : 'var(--text-secondary)',
                    borderBottom: activeTab === 'vitals' ? '2px solid var(--accent-lime)' : '2px solid transparent',
                    cursor: 'pointer',
                  }}
                >
                  // 02. Core Vitals
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('standards')}
                  style={{
                    padding: '0.5rem 0.85rem',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    color: activeTab === 'standards' ? 'var(--accent-lime)' : 'var(--text-secondary)',
                    borderBottom: activeTab === 'standards' ? '2px solid var(--accent-lime)' : '2px solid transparent',
                    cursor: 'pointer',
                  }}
                >
                  // 03. Studio Standard
                </button>
              </div>

              {/* Console Content */}
              <div style={{ padding: '1.25rem', minHeight: '260px' }}>
                {activeTab === 'stack' && (
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.825rem',
                        lineHeight: 1.7,
                        color: '#E2E8F0',
                      }}
                    >
                      <div style={{ color: '#64748B' }}>// Stravix Modern Engineering Stack</div>
                      <div>
                        <span style={{ color: '#C084FC' }}>const</span> <span style={{ color: 'var(--accent-lime)' }}>stravixCore</span> = &#123;
                      </div>
                      <div style={{ paddingLeft: '1.25rem' }}>
                        framework: <span style={{ color: '#38BDF8' }}>&apos;React 19 + TypeScript&apos;</span>,
                      </div>
                      <div style={{ paddingLeft: '1.25rem' }}>
                        bundler: <span style={{ color: '#38BDF8' }}>&apos;Vite (Instant HMR &lt; 50ms)&apos;</span>,
                      </div>
                      <div style={{ paddingLeft: '1.25rem' }}>
                        styling: <span style={{ color: '#38BDF8' }}>&apos;Textured Dark Canvas &amp; Tokens&apos;</span>,
                      </div>
                      <div style={{ paddingLeft: '1.25rem' }}>
                        integrations: [<span style={{ color: '#4ADE80' }}>&apos;EmailJS&apos;</span>, <span style={{ color: '#4ADE80' }}>&apos;Stripe&apos;</span>, <span style={{ color: '#4ADE80' }}>&apos;Supabase&apos;</span>, <span style={{ color: '#4ADE80' }}>&apos;OpenAI&apos;</span>],
                      </div>
                      <div style={{ paddingLeft: '1.25rem' }}>
                        zeroVendorLockin: <span style={{ color: 'var(--accent-lime)' }}>true</span>,
                      </div>
                      <div>&#125;;</div>
                      <div style={{ marginTop: '0.75rem', color: '#64748B' }}>
                        $ <span style={{ color: '#4ADE80' }}>vite build</span> --target esnext
                      </div>
                      <div style={{ color: 'var(--accent-lime)', fontSize: '0.75rem' }}>
                        ✓ Ready in 400ms • Production Gzip bundle • 0 errors
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'vitals' && (
                  <div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.85rem' }}>
                      <div
                        style={{
                          backgroundColor: 'rgba(255,255,255,0.03)',
                          padding: '0.85rem',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--border-hairline)',
                        }}
                      >
                        <div style={{ fontSize: '0.75rem', color: '#64748B', fontFamily: 'var(--font-mono)' }}>PERFORMANCE</div>
                        <div style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--accent-lime)', fontFamily: 'var(--font-mono)' }}>
                          99 / 100
                        </div>
                        <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>Lighthouse Mobile Score</div>
                      </div>

                      <div
                        style={{
                          backgroundColor: 'rgba(255,255,255,0.03)',
                          padding: '0.85rem',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--border-hairline)',
                        }}
                      >
                        <div style={{ fontSize: '0.75rem', color: '#64748B', fontFamily: 'var(--font-mono)' }}>LAYOUT SHIFT</div>
                        <div style={{ fontSize: '1.75rem', fontWeight: 700, color: '#4ADE80', fontFamily: 'var(--font-mono)' }}>
                          0.00 CLS
                        </div>
                        <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>Zero jumpy re-renders</div>
                      </div>

                      <div
                        style={{
                          backgroundColor: 'rgba(255,255,255,0.03)',
                          padding: '0.85rem',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--border-hairline)',
                        }}
                      >
                        <div style={{ fontSize: '0.75rem', color: '#64748B', fontFamily: 'var(--font-mono)' }}>FIRST PAINT</div>
                        <div style={{ fontSize: '1.75rem', fontWeight: 700, color: '#38BDF8', fontFamily: 'var(--font-mono)' }}>
                          &lt; 0.6s
                        </div>
                        <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>Time to first contentful</div>
                      </div>

                      <div
                        style={{
                          backgroundColor: 'rgba(255,255,255,0.03)',
                          padding: '0.85rem',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--border-hairline)',
                        }}
                      >
                        <div style={{ fontSize: '0.75rem', color: '#64748B', fontFamily: 'var(--font-mono)' }}>ACCESSIBILITY</div>
                        <div style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--accent-lime)', fontFamily: 'var(--font-mono)' }}>
                          100%
                        </div>
                        <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>WCAG AA High-Contrast</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'standards' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: '#E2E8F0' }}>
                      <span style={{ color: 'var(--accent-lime)' }}>✓</span>
                      <div>
                        <strong>100% Repository Transfer:</strong> You receive complete GitHub/GitLab repository admin rights and deployment access upon final payment.
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: '#E2E8F0' }}>
                      <span style={{ color: 'var(--accent-lime)' }}>✓</span>
                      <div>
                        <strong>Direct Communication:</strong> You speak directly with the engineers writing your code via a shared private Slack or WhatsApp channel.
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: '#E2E8F0' }}>
                      <span style={{ color: 'var(--accent-lime)' }}>✓</span>
                      <div>
                        <strong>No Fabricated Claims:</strong> Clear deliverables, realistic timelines, and honest architectural advice without buzzwords.
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Console Footer */}
              <div
                style={{
                  padding: '0.65rem 1.25rem',
                  backgroundColor: 'rgba(5, 8, 12, 0.65)',
                  borderTop: '1px solid var(--border-hairline)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-muted)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Terminal size={13} />
                  <span>Stravix Runtime: ACTIVE</span>
                </div>
                <span>PORT 5173 • PRODUCTION-OPTIMIZED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
