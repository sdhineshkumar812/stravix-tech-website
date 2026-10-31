import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import type { ProjectCategory, ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, Code, Info, Sparkles } from 'lucide-react';

interface WorkProps {
  onStartProjectForConcept: (conceptTitle: string) => void;
}

export const Work: React.FC<WorkProps> = ({ onStartProjectForConcept }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Architectures' },
    { id: 'webapp', label: 'React Web Apps' },
    { id: 'commerce', label: 'E-Commerce & QR' },
    { id: 'ai', label: 'AI & Automation' },
    { id: 'website', label: 'Brand Sites' },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="section" style={{ backgroundColor: 'var(--bg-canvas)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-tag">
            <span className="section-tag-dot"></span>
            <span>Studio Portfolio &amp; Showcases</span>
          </div>
          <h2 className="section-title">Reference architectures &amp; concept implementations.</h2>
          <p className="section-description">
            Explore our engineering prototypes and reference systems. Each project is constructed to demonstrate
            real-world performance benchmarks, resilient component models, and production-ready code.
          </p>

          {/* Genuine Transparency Notice */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              backgroundColor: 'rgba(163, 230, 53, 0.08)',
              border: '1px solid rgba(163, 230, 53, 0.25)',
              color: '#F8FAFC',
              padding: '0.55rem 1.1rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.8rem',
              marginTop: '1.25rem',
              textAlign: 'left',
            }}
          >
            <Info size={16} color="var(--accent-lime)" style={{ flexShrink: 0 }} />
            <span>
              <strong style={{ color: 'var(--accent-lime)' }}>Authenticity Guarantee:</strong> These are internal demonstration architectures built by Stravix Tech to showcase technical standards without fabricating fictitious client logos or results.
            </span>
          </div>
        </div>

        {/* Filter Category Pills */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '2.5rem',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`btn ${selectedCategory === cat.id ? 'btn-primary' : 'btn-secondary'} btn-sm`}
              style={{
                borderRadius: 'var(--radius-full)',
                fontWeight: 600,
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid — Stacks vertically on mobile and tablet */}
        <div
          className="projects-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 520px), 1fr))',
            gap: '2rem',
            alignItems: 'stretch',
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card-surface"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: 'clamp(1.5rem, 3.5vw, 2.25rem)',
              }}
            >
              <div>
                {/* Meta Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '1rem',
                  }}
                >
                  <span className="badge badge-lime">
                    <Sparkles size={11} />
                    <span>{project.conceptLabel}</span>
                  </span>

                  <span className="badge">{project.categoryLabel}</span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: '1.45rem',
                    marginBottom: '0.75rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.925rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem',
                  }}
                >
                  {project.summary}
                </p>

                {/* Key Architectural Capabilities (Accurate, Grounded) */}
                <div
                  style={{
                    backgroundColor: 'rgba(5, 8, 12, 0.55)',
                    padding: '0.9rem 1.1rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-hairline)',
                    marginBottom: '1.5rem',
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--accent-lime)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      marginBottom: '0.55rem',
                      fontWeight: 600,
                    }}
                  >
                    // Architectural Capabilities
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', margin: 0, padding: 0 }}>
                    {project.architectureHighlights.slice(0, 2).map((highlight, hIdx) => (
                      <li
                        key={hIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.5rem',
                          fontSize: '0.84rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.45,
                        }}
                      >
                        <span style={{ color: 'var(--accent-lime)', flexShrink: 0, fontWeight: 700 }}>✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom: Stack & Action Buttons */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.4rem',
                    marginBottom: '1.25rem',
                  }}
                >
                  {project.techStack.map((tech) => (
                    <span key={tech} className="badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <div
                  style={{
                    display: 'flex',
                    gap: '0.75rem',
                    flexWrap: 'wrap',
                    width: '100%',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="btn btn-secondary"
                    style={{
                      flex: '1 1 170px',
                      justifyContent: 'center',
                      minWidth: '140px',
                    }}
                  >
                    <Code size={15} color="var(--accent-lime)" />
                    <span>Inspect Architecture</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onStartProjectForConcept(project.title)}
                    className="btn btn-primary"
                    style={{
                      flex: '1 1 140px',
                      justifyContent: 'center',
                      minWidth: '130px',
                    }}
                    title="Inquire about a similar project"
                  >
                    <span>Build Similar</span>
                    <ArrowUpRight size={16} color="#0B0F14" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Architecture Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onDiscussSimilar={(title) => {
          setActiveModalProject(null);
          onStartProjectForConcept(title);
        }}
      />
    </section>
  );
};
