import React, { useState } from 'react';
import { faqData } from '../data/faqData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['difference', 'ownership']);

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setOpenIds(faqData.map((f) => f.id));
  };

  const collapseAll = () => {
    setOpenIds([]);
  };

  return (
    <section id="faq" className="section" style={{ backgroundColor: 'var(--bg-canvas)' }}>
      <div className="container-narrow">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-tag">
            <span className="section-tag-dot"></span>
            <span>Direct Answers</span>
          </div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-description">
            Everything you need to know about working with Stravix Tech, our development methodologies, code ownership, and warranties.
          </p>

          <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '0.75rem' }}>
            <button
              type="button"
              onClick={expandAll}
              style={{
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--accent-lime)',
                textDecoration: 'underline',
                cursor: 'pointer',
              }}
            >
              Expand All
            </button>
            <span style={{ color: 'var(--border-strong)' }}>•</span>
            <button
              type="button"
              onClick={collapseAll}
              style={{
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-secondary)',
                textDecoration: 'underline',
                cursor: 'pointer',
              }}
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {faqData.map((faq) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <div
                key={faq.id}
                className="card-surface"
                style={{
                  padding: 0,
                  overflow: 'hidden',
                  borderColor: isOpen ? 'var(--accent-lime-border)' : 'var(--border-hairline)',
                  boxShadow: isOpen ? '0 0 20px rgba(163, 230, 53, 0.08)' : 'var(--shadow-subtle)',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  style={{
                    width: '100%',
                    padding: 'clamp(1rem, 2.5vw, 1.35rem) clamp(1.25rem, 3vw, 1.75rem)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    textAlign: 'left',
                    color: 'var(--text-primary)',
                    backgroundColor: isOpen ? 'rgba(163, 230, 53, 0.04)' : 'var(--bg-surface)',
                    transition: 'background-color var(--transition-fast)',
                    cursor: 'pointer',
                    minHeight: '48px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      lineHeight: 1.35,
                      color: isOpen ? '#FFFFFF' : 'var(--text-primary)',
                    }}
                  >
                    {faq.question}
                  </span>

                  <span
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform var(--transition-normal)',
                      color: isOpen ? 'var(--accent-lime)' : 'var(--text-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <ChevronDown size={18} />
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    style={{
                      padding: '1.25rem clamp(1.25rem, 3vw, 1.75rem) 1.5rem',
                      borderTop: '1px solid var(--border-hairline)',
                      fontSize: '0.925rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                      backgroundColor: 'rgba(5, 8, 12, 0.4)',
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div
          style={{
            marginTop: '2.5rem',
            padding: '1.25rem',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-hairline)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <HelpCircle size={18} color="var(--accent-lime)" />
            <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 500 }}>
              Have a custom technical inquiry not answered here?
            </span>
          </div>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn btn-secondary btn-sm"
          >
            <span>Ask Us Directly</span>
          </a>
        </div>
      </div>
    </section>
  );
};
