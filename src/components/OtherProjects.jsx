import React, { useState } from 'react';
import { otherProjects } from '../data/projects';
import TechIcon from './TechIcon';
import { Github, Sparkles, FileText, Sprout, PieChart, Info, X, Check } from 'lucide-react';

export default function OtherProjects() {
  const [activeInfoModal, setActiveInfoModal] = useState(null);

  const getIconForProject = (id) => {
    switch (id) {
      case 'ai-resume-analyzer':
        return <FileText size={20} color="#E8C9A8" />;
      case 'ai-crop-advisory':
        return <Sprout size={20} color="#38C793" />;
      case 'finai-analyzer':
        return <PieChart size={20} color="#79B8FF" />;
      default:
        return <Sparkles size={20} color="#E8C9A8" />;
    }
  };

  return (
    <section className="section-wrapper" style={{ paddingTop: '2rem', width: '100%', overflowX: 'hidden' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">Other Engineering Works</div>
          <h2 className="section-title">
            Prototypes & <span className="accent">Systems</span>
          </h2>
          <p className="section-subtitle">
            Additional engineering builds, full-stack architectures, and machine learning integrations addressing real-world problem domains.
          </p>
        </div>

        {/* 3 Project Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '1.75rem'
          }}
        >
          {otherProjects.map((project) => (
            <div
              key={project.id}
              className="dark-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '0',
                borderRadius: '20px',
                overflow: 'hidden',
                backgroundColor: '#1A2636',
                border: '1px solid rgba(220, 225, 235, 0.12)',
                height: '100%'
              }}
            >
              <div className="card-highlight-bar" aria-hidden="true" />

              <div>
                {/* Visual Preview Image with Hover Zoom */}
                <div
                  style={{
                    position: 'relative',
                    height: '190px',
                    overflow: 'hidden',
                    borderBottom: '1px solid rgba(220, 225, 235, 0.1)',
                    backgroundColor: '#121D2C'
                  }}
                  className="project-screenshot-container"
                >
                  <img
                    src={project.image}
                    alt={`${project.name} preview interface`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.4s ease'
                    }}
                    className="project-img-zoom"
                    loading="lazy"
                  />
                  
                  {/* Category Tag Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(18, 29, 44, 0.9)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(220, 225, 235, 0.12)',
                      fontSize: '0.7rem',
                      color: '#F5F3EF',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    {project.type}
                  </div>
                </div>

                {/* Card Body */}
                <div style={{ padding: 'clamp(1.25rem, 3vw, 1.75rem)' }}>
                  
                  {/* Title & Tagline */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.45rem' }}>
                    <div
                      style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '8px',
                        backgroundColor: '#162436',
                        border: '1px solid rgba(220, 225, 235, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      {getIconForProject(project.id)}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#F5F3EF', lineHeight: 1.25 }}>
                        {project.name}
                      </h3>
                      <div style={{ fontSize: '0.78125rem', color: '#E8C9A8', fontWeight: 600 }}>
                        {project.tagline}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{ fontSize: '0.84rem', lineHeight: 1.65, color: '#B9C0CB', marginBottom: '1.25rem' }}>
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', marginBottom: '1.25rem' }}>
                    {project.highlights.map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.78125rem', color: '#B9C0CB' }}>
                        <span style={{ color: '#E8C9A8', fontWeight: 700, flexShrink: 0 }}>›</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>

              {/* Card Footer: Tech Badges & Actions */}
              <div style={{ padding: '0 clamp(1.25rem, 3vw, 1.75rem) clamp(1.25rem, 3vw, 1.75rem)' }}>
                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem', paddingTop: '0.85rem', borderTop: '1px solid rgba(220, 225, 235, 0.08)' }}>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        padding: '0.25rem 0.55rem',
                        borderRadius: '6px',
                        backgroundColor: '#162436',
                        border: '1px solid rgba(220, 225, 235, 0.08)',
                        fontSize: '0.72rem',
                        color: '#D6DCE5',
                        fontFamily: 'var(--font-mono)'
                      }}
                    >
                      <TechIcon name={tech} className="w-3 h-3" />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn btn-secondary btn-sm"
                    style={{ flex: 1, justifyContent: 'center', minHeight: '38px' }}
                  >
                    <Github size={14} />
                    <span>GitHub Code</span>
                  </a>

                  <button
                    onClick={() => setActiveInfoModal(project)}
                    className="btn btn-outline btn-sm"
                    title="View Technical Specifications"
                    aria-label={`View specifications for ${project.name}`}
                    style={{ minHeight: '38px' }}
                  >
                    <Info size={14} />
                    <span>Details</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Project Details Modal */}
        {activeInfoModal && (
          <div className="modal-overlay" onClick={() => setActiveInfoModal(null)} role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: '580px', padding: 'clamp(1.25rem, 3.5vw, 2rem)', backgroundColor: '#141F2E', border: '1px solid rgba(220, 225, 235, 0.14)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span
                  style={{
                    padding: '2px 8px',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(232, 201, 168, 0.12)',
                    border: '1px solid rgba(232, 201, 168, 0.28)',
                    color: '#E8C9A8',
                    fontSize: '0.72rem',
                    fontWeight: 600
                  }}
                >
                  {activeInfoModal.type}
                </span>
                <button
                  onClick={() => setActiveInfoModal(null)}
                  aria-label="Close specifications modal"
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '8px',
                    backgroundColor: '#1A2636',
                    border: '1px solid rgba(220, 225, 235, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#B9C0CB'
                  }}
                >
                  <X size={16} />
                </button>
              </div>

              <h3 id="project-modal-title" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.45rem)', fontWeight: 700, color: '#F5F3EF', marginBottom: '0.25rem' }}>
                {activeInfoModal.name}
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#E8C9A8', fontWeight: 600, marginBottom: '1.25rem' }}>
                {activeInfoModal.tagline}
              </p>

              {/* Preview image inside modal */}
              <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '1.25rem', border: '1px solid rgba(220, 225, 235, 0.1)' }}>
                <img src={activeInfoModal.image} alt={activeInfoModal.name} style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>

              <div style={{ backgroundColor: '#121D2C', padding: '1.15rem', borderRadius: '12px', marginBottom: '1.25rem', border: '1px solid rgba(220, 225, 235, 0.08)' }}>
                <div style={{ fontSize: '0.72rem', color: '#7E8999', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '0.35rem' }}>
                  Architecture & Functional Scope
                </div>
                <p style={{ fontSize: '0.84rem', color: '#B9C0CB', lineHeight: 1.65 }}>
                  {activeInfoModal.description}
                </p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.72rem', color: '#7E8999', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '0.5rem' }}>
                  Engineered Capabilities
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  {activeInfoModal.highlights.map((h, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.8125rem', color: '#F5F3EF' }}>
                      <Check size={13} color="#38C793" style={{ flexShrink: 0 }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href={activeInfoModal.links.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn btn-primary btn-sm"
                  style={{ minHeight: '38px' }}
                >
                  <Github size={14} />
                  <span>View Repository</span>
                </a>
                <button onClick={() => setActiveInfoModal(null)} className="btn btn-secondary btn-sm" style={{ minHeight: '38px' }}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
