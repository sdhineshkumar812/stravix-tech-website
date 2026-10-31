import React, { useEffect } from 'react';
import type { ProjectItem } from '../types';
import { X, CheckCircle2, Layers, Cpu, ExternalLink, Code2 } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onDiscussSimilar: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onDiscussSimilar }) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 200,
        backgroundColor: 'rgba(5, 8, 12, 0.85)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(1rem, 3vw, 2.5rem)',
        overflowY: 'auto',
      }}
      onClick={onClose}
    >
      <div
        className="card-surface"
        style={{
          width: '100%',
          maxWidth: '780px',
          maxHeight: '90vh',
          overflowY: 'auto',
          backgroundColor: 'var(--bg-surface-elevated)',
          borderColor: 'var(--border-metallic)',
          boxShadow: 'var(--shadow-metallic)',
          padding: 'clamp(1.5rem, 4vw, 2.5rem)',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project modal"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            width: '40px',
            height: '40px',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-hairline)',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-primary)',
          }}
        >
          <X size={20} />
        </button>

        {/* Concept Notice */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem', alignItems: 'center' }}>
          <span className="badge badge-lime">
            {project.conceptLabel}
          </span>
          <span className="badge">{project.categoryLabel}</span>
        </div>

        {/* Title */}
        <h2 id="modal-project-title" style={{ fontSize: 'var(--font-h2)', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
          {project.title}
        </h2>

        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
          {project.fullDescription}
        </p>

        {/* Metrics Bar (Only if verified metrics exist) */}
        {project.metrics && project.metrics.length > 0 && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '0.85rem',
              backgroundColor: 'rgba(5, 8, 12, 0.65)',
              padding: '1rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-hairline)',
              marginBottom: '1.75rem',
            }}
          >
            {project.metrics.map((m, idx) => (
              <div key={idx}>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  {m.label}
                </div>
                <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-lime)', fontFamily: 'var(--font-mono)' }}>
                  {m.value}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Challenge & Solution Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '1.25rem',
            marginBottom: '1.75rem',
          }}
        >
          <div
            style={{
              padding: '1.25rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-hairline)',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700, marginBottom: '0.5rem', fontSize: '0.95rem', color: '#F8FAFC' }}>
              <Cpu size={16} color="var(--accent-lime)" />
              <span>Engineering Challenge</span>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
              {project.challenge}
            </p>
          </div>

          <div
            style={{
              padding: '1.25rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-hairline)',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700, marginBottom: '0.5rem', fontSize: '0.95rem', color: '#F8FAFC' }}>
              <Layers size={16} color="var(--accent-lime)" />
              <span>Architectural Solution</span>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
              {project.solution}
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div style={{ marginBottom: '1.75rem' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', marginBottom: '0.75rem', color: '#E2E8F0' }}>
            Reference Architectural Specs
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {project.architectureHighlights.map((highlight, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={16} color="var(--accent-lime)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            Technology Stack
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {project.techStack.map((tech) => (
              <span key={tech} className="badge">
                <Code2 size={12} color="var(--accent-lime)" />
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-hairline)' }}>
          <button
            type="button"
            onClick={() => {
              onClose();
              onDiscussSimilar(project.title);
            }}
            className="btn btn-primary"
            style={{ flex: 1, minWidth: '220px' }}
          >
            <span>Discuss a Project Like This</span>
            <ExternalLink size={16} color="#0B0F14" />
          </button>

          <button type="button" onClick={onClose} className="btn btn-secondary">
            <span>Close Overview</span>
          </button>
        </div>
      </div>
    </div>
  );
};
