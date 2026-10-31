import React from 'react';
import { servicesData } from '../data/servicesData';
import { Globe, Layers, QrCode, Cpu, Sparkles, ArrowRight, Check } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe size={22} color="#A3E635" />;
      case 'Layers':
        return <Layers size={22} color="#A3E635" />;
      case 'QrCode':
        return <QrCode size={22} color="#A3E635" />;
      case 'Cpu':
        return <Cpu size={22} color="#A3E635" />;
      case 'Sparkles':
        return <Sparkles size={22} color="#A3E635" />;
      default:
        return <Layers size={22} color="#A3E635" />;
    }
  };

  return (
    <section id="services" className="section section-charcoal-alt">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-tag">
            <span className="section-tag-dot"></span>
            <span>Core Capabilities</span>
          </div>
          <h2 className="section-title">Engineered for clarity, built for scale.</h2>
          <p className="section-description">
            From lightning-fast marketing experiences to bespoke full-stack applications and AI pipelines, we deliver
            production-grade software with uncompromising technical precision.
          </p>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
            gap: '1.75rem',
            alignItems: 'stretch',
          }}
        >
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="card-surface"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div>
                {/* Header: Icon & Index Badge */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem',
                  }}
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'rgba(163, 230, 53, 0.08)',
                      border: '1px solid var(--accent-lime-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 0 16px rgba(163, 230, 53, 0.1)',
                    }}
                  >
                    {getIcon(service.icon)}
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: 'var(--text-muted)',
                    }}
                  >
                    0{index + 1}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3
                  style={{
                    fontSize: '1.35rem',
                    marginBottom: '0.5rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    color: '#E2E8F0',
                    marginBottom: '1rem',
                    lineHeight: 1.45,
                  }}
                >
                  {service.tagline}
                </p>

                <p
                  style={{
                    fontSize: '0.925rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '1.5rem',
                    lineHeight: 1.6,
                  }}
                >
                  {service.description}
                </p>

                {/* Key Features */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      color: 'var(--text-muted)',
                      marginBottom: '0.75rem',
                      fontWeight: 600,
                    }}
                  >
                    Key Architectural Pillars
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                    {service.features.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.5rem',
                          fontSize: '0.85rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.45,
                        }}
                      >
                        <Check
                          size={15}
                          color="#A3E635"
                          style={{ flexShrink: 0, marginTop: '3px' }}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom: Tech Stack & Action */}
              <div
                style={{
                  paddingTop: '1.25rem',
                  borderTop: '1px solid var(--border-hairline)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.4rem',
                    marginBottom: '1.25rem',
                  }}
                >
                  {service.techStack.map((tech) => (
                    <span key={tech} className="badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => onSelectService(service.title)}
                  className="btn btn-secondary"
                  style={{
                    width: '100%',
                    justifyContent: 'space-between',
                    fontWeight: 600,
                  }}
                >
                  <span>Enquire for {service.title}</span>
                  <ArrowRight size={16} color="#A3E635" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
