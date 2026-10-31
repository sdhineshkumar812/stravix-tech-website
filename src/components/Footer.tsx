import React from 'react';
import { BrandLogo } from './BrandLogo';
import { siteConfig } from '../config/siteConfig';
import { ArrowUp, MessageCircle, Mail, Phone } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#070A0E',
        color: 'var(--text-primary)',
        borderTop: '1px solid var(--border-hairline)',
        paddingTop: 'clamp(3.5rem, 6vw, 5rem)',
        paddingBottom: '2.5rem',
      }}
    >
      <div className="container">
        {/* Top Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
            marginBottom: '3.5rem',
          }}
        >
          {/* Brand Info & Mission */}
          <div style={{ maxWidth: '340px' }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <BrandLogo theme="dark" size="md" showTagline={true} />
            </div>

            <p
              style={{
                fontSize: '0.875rem',
                color: 'var(--text-inverted-muted)',
                lineHeight: 1.6,
                marginBottom: '1.5rem',
              }}
            >
              Independent engineering studio delivering high-velocity web platforms, custom React applications,
              e-commerce QR systems, and AI integrations with zero agency bloat.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              {siteConfig.socials.github && (
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Stravix Tech GitHub"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-inverted)',
                    transition: 'all var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)')}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              )}

              {siteConfig.socials.linkedin && (
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Stravix Tech LinkedIn"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-inverted)',
                    transition: 'all var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)')}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              )}

              {siteConfig.socials.twitter && (
                <a
                  href={siteConfig.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Stravix Tech X / Twitter"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-inverted)',
                    transition: 'all var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)')}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--text-inverted)',
                fontWeight: 600,
                marginBottom: '1.25rem',
              }}
            >
              Engineering Solutions
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#services');
                  }}
                  style={{ fontSize: '0.875rem', color: 'var(--text-inverted-muted)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-inverted-muted)')}
                >
                  Business Websites &amp; SEO
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#services');
                  }}
                  style={{ fontSize: '0.875rem', color: 'var(--text-inverted-muted)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-inverted-muted)')}
                >
                  Custom React Web Applications
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#services');
                  }}
                  style={{ fontSize: '0.875rem', color: 'var(--text-inverted-muted)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-inverted-muted)')}
                >
                  Restaurant QR Menus &amp; Ordering
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#services');
                  }}
                  style={{ fontSize: '0.875rem', color: 'var(--text-inverted-muted)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-inverted-muted)')}
                >
                  Custom Software &amp; APIs
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#services');
                  }}
                  style={{ fontSize: '0.875rem', color: 'var(--text-inverted-muted)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-inverted-muted)')}
                >
                  AI Integrations &amp; Automation
                </a>
              </li>
            </ul>
          </div>

          {/* Studio Navigation */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--text-inverted)',
                fontWeight: 600,
                marginBottom: '1.25rem',
              }}
            >
              Studio Navigation
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li>
                <a
                  href="#work"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#work');
                  }}
                  style={{ fontSize: '0.875rem', color: 'var(--text-inverted-muted)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-inverted-muted)')}
                >
                  Selected Work &amp; Architecture
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#process');
                  }}
                  style={{ fontSize: '0.875rem', color: 'var(--text-inverted-muted)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-inverted-muted)')}
                >
                  4-Step Delivery Process
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#about');
                  }}
                  style={{ fontSize: '0.875rem', color: 'var(--text-inverted-muted)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-inverted-muted)')}
                >
                  About the Studio
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#pricing');
                  }}
                  style={{ fontSize: '0.875rem', color: 'var(--text-inverted-muted)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-inverted-muted)')}
                >
                  Starting Price Packages
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#faq');
                  }}
                  style={{ fontSize: '0.875rem', color: 'var(--text-inverted-muted)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-inverted-muted)')}
                >
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct Details */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--text-inverted)',
                fontWeight: 600,
                marginBottom: '1.25rem',
              }}
            >
              Direct Studio Contact
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {/* Official WhatsApp CTA */}
              <a
                href={siteConfig.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.875rem',
                  color: '#4ADE80',
                }}
              >
                <MessageCircle size={16} />
                <span>WhatsApp: {siteConfig.contact.phoneDisplay}</span>
              </a>

              {/* Clickable Phone Number */}
              <a
                href={siteConfig.getTelUrl()}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.875rem',
                  color: 'var(--accent-lime)',
                }}
              >
                <Phone size={16} />
                <span>Phone: {siteConfig.contact.phoneDisplay}</span>
              </a>

              {/* Clickable Official Email */}
              <a
                href={siteConfig.getMailtoUrl()}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.875rem',
                  color: '#F8FAFC',
                }}
              >
                <Mail size={16} />
                <span>{siteConfig.contact.email}</span>
              </a>

              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                {siteConfig.contact.workingHours}
              </div>

              <div style={{ fontSize: '0.75rem', color: 'var(--accent-lime)' }}>
                {siteConfig.contact.responseCommitment}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid var(--border-dark)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
            © {CURRENT_YEAR} Stravix Tech. All rights reserved. Built with React &amp; Vite.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.8rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-secondary)',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              padding: '0.45rem 0.85rem',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-hairline)',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--accent-lime)';
              e.currentTarget.style.borderColor = 'var(--accent-lime-border)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.borderColor = 'var(--border-hairline)';
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
