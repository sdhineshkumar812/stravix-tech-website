import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { siteConfig } from '../config/siteConfig';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';

interface NavbarProps {
  onOpenContact?: (serviceId?: string, budgetTier?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Packages', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: isScrolled ? 'rgba(11, 15, 20, 0.94)' : 'rgba(11, 15, 20, 0.85)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          borderBottom: '1px solid var(--border-hairline)',
          transition: 'all var(--transition-normal)',
          height: '74px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo with Approved Angular S Emblem */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            aria-label="Stravix Tech Home"
            style={{ display: 'inline-flex', alignItems: 'center' }}
          >
            <div className="desktop-brand-logo">
              <BrandLogo size="md" theme="dark" showTagline={false} />
            </div>
            <div className="mobile-brand-logo">
              <BrandLogo size="sm" isMobileCompact={true} theme="dark" showTagline={false} />
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav
            aria-label="Main Navigation"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: 'clamp(0.65rem, 1.2vw, 1.35rem)',
            }}
            className="desktop-nav-links"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                  letterSpacing: '-0.01em',
                  transition: 'color var(--transition-fast)',
                  padding: '0.4rem 0.2rem',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div
            className="desktop-cta-group"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.85rem',
            }}
          >
            <a
              href={siteConfig.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                color: '#4ADE80',
                borderColor: 'rgba(74, 222, 128, 0.25)',
              }}
              title={`Chat directly with engineering on WhatsApp (${siteConfig.contact.phone})`}
            >
              <MessageCircle size={15} color="#4ADE80" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => {
                if (onOpenContact) onOpenContact();
                else handleNavClick('#contact');
              }}
              className="btn btn-primary btn-sm"
            >
              <span>Start a Project</span>
              <ArrowUpRight size={15} color="#0B0F14" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            className="mobile-hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '44px',
              height: '44px',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-hairline)',
              backgroundColor: 'var(--bg-surface)',
              color: 'var(--text-primary)',
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Accessible Mobile Drawer Menu */}
      <div
        id="mobile-nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        style={{
          position: 'fixed',
          top: '74px',
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(5, 8, 12, 0.75)',
          backdropFilter: 'blur(8px)',
          zIndex: 99,
          visibility: mobileMenuOpen ? 'visible' : 'hidden',
          opacity: mobileMenuOpen ? 1 : 0,
          transition: 'all 0.25s ease-in-out',
        }}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          style={{
            backgroundColor: 'var(--bg-canvas)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '1.5rem',
            maxHeight: 'calc(100vh - 74px)',
            overflowY: 'auto',
            transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-10px)',
            transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            boxShadow: 'var(--shadow-card)',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.85rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  backgroundColor: 'transparent',
                  minHeight: '44px',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-surface)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <span>{link.label}</span>
                <span style={{ color: 'var(--accent-lime)', fontSize: '0.9rem' }}>→</span>
              </a>
            ))}
          </nav>

          <div
            style={{
              marginTop: '1.5rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid var(--border-hairline)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}
          >
            <a
              href={siteConfig.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <MessageCircle size={18} />
              <span>Direct WhatsApp ({siteConfig.contact.phone})</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenContact) onOpenContact();
                else handleNavClick('#contact');
              }}
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span>Start a Project</span>
              <ArrowUpRight size={18} color="#0B0F14" />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .desktop-brand-logo {
          display: none;
        }
        .mobile-brand-logo {
          display: flex;
        }
        @media (min-width: 1024px) {
          .desktop-brand-logo {
            display: flex !important;
          }
          .mobile-brand-logo {
            display: none !important;
          }
          .desktop-nav-links {
            display: flex !important;
          }
          .desktop-cta-group {
            display: flex !important;
          }
          .mobile-hamburger-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
