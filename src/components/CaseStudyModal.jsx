import React, { useEffect } from 'react';
import { X, CheckCircle2, AlertTriangle, Layers, Server, Database, ShieldCheck, Cpu } from 'lucide-react';

export default function CaseStudyModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const { caseStudy } = project;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="case-study-title">
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '820px',
          backgroundColor: '#121D2C',
          border: '1px solid rgba(220, 225, 235, 0.14)'
        }}
      >
        
        {/* Modal Header */}
        <div
          style={{
            padding: 'clamp(0.85rem, 2vw, 1.25rem) clamp(1rem, 3vw, 2rem)',
            borderBottom: '1px solid rgba(220, 225, 235, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'sticky',
            top: 0,
            backgroundColor: '#162436',
            zIndex: 10,
            flexWrap: 'wrap',
            gap: '0.5rem'
          }}
        >
          <div>
            <span
              style={{
                display: 'inline-block',
                padding: '2px 8px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(232, 201, 168, 0.12)',
                border: '1px solid rgba(232, 201, 168, 0.28)',
                color: '#E8C9A8',
                fontSize: '0.72rem',
                fontWeight: 600,
                marginBottom: '0.35rem'
              }}
            >
              Technical Case Study
            </span>
            <h2 id="case-study-title" style={{ fontSize: 'clamp(1.15rem, 2.5vw, 1.45rem)', fontWeight: 700, color: '#F5F3EF' }}>
              {project.name} — <span style={{ color: '#E8C9A8' }}>Engineering Breakdown</span>
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close case study modal"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              backgroundColor: '#1A2636',
              border: '1px solid rgba(220, 225, 235, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#B9C0CB',
              transition: 'all 150ms'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: 'clamp(1.25rem, 3vw, 2rem)', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          
          {/* Project Screenshot Preview Banner */}
          {project.image && (
            <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(220, 225, 235, 0.12)', backgroundColor: '#0D1522' }}>
              <img
                src={project.image}
                alt={`${project.name} system showcase`}
                style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '340px', objectFit: 'cover' }}
              />
            </div>
          )}
          
          {/* Problem & Solution Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1rem' }}>
            <div
              style={{
                backgroundColor: 'rgba(232, 201, 168, 0.05)',
                border: '1px solid rgba(232, 201, 168, 0.2)',
                borderRadius: '12px',
                padding: '1.15rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.45rem', color: '#E8C9A8', fontWeight: 600, fontSize: '0.9rem' }}>
                <AlertTriangle size={16} />
                <span>The Challenge / Problem</span>
              </div>
              <p style={{ fontSize: '0.84rem', lineHeight: 1.6, color: '#B9C0CB' }}>
                {caseStudy.problem}
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'rgba(56, 199, 147, 0.05)',
                border: '1px solid rgba(56, 199, 147, 0.2)',
                borderRadius: '12px',
                padding: '1.15rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.45rem', color: '#38C793', fontWeight: 600, fontSize: '0.9rem' }}>
                <CheckCircle2 size={16} />
                <span>Engineered Solution</span>
              </div>
              <p style={{ fontSize: '0.84rem', lineHeight: 1.6, color: '#B9C0CB' }}>
                {caseStudy.solution}
              </p>
            </div>
          </div>

          {/* System Architecture Grid */}
          <div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#F5F3EF', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Layers size={17} color="#E8C9A8" />
              <span>Full-Stack System Architecture</span>
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '0.85rem' }}>
              <div className="dark-card" style={{ padding: '1.15rem', backgroundColor: '#1A2636' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#79B8FF', fontWeight: 600, fontSize: '0.84rem', marginBottom: '0.35rem' }}>
                  <Cpu size={15} />
                  <span>Frontend Client Layer</span>
                </div>
                <p style={{ fontSize: '0.78125rem', color: '#B9C0CB', lineHeight: 1.5 }}>{caseStudy.architecture.client}</p>
              </div>

              <div className="dark-card" style={{ padding: '1.15rem', backgroundColor: '#1A2636' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#E8C9A8', fontWeight: 600, fontSize: '0.84rem', marginBottom: '0.35rem' }}>
                  <Server size={15} />
                  <span>Backend REST Engine</span>
                </div>
                <p style={{ fontSize: '0.78125rem', color: '#B9C0CB', lineHeight: 1.5 }}>{caseStudy.architecture.server}</p>
              </div>

              <div className="dark-card" style={{ padding: '1.15rem', backgroundColor: '#1A2636' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#C5A17E', fontWeight: 600, fontSize: '0.84rem', marginBottom: '0.35rem' }}>
                  <Database size={15} />
                  <span>Persistence & Spatial DB</span>
                </div>
                <p style={{ fontSize: '0.78125rem', color: '#B9C0CB', lineHeight: 1.5 }}>{caseStudy.architecture.persistence}</p>
              </div>

              <div className="dark-card" style={{ padding: '1.15rem', backgroundColor: '#1A2636' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#E5B869', fontWeight: 600, fontSize: '0.84rem', marginBottom: '0.35rem' }}>
                  <ShieldCheck size={15} />
                  <span>Security & Auth</span>
                </div>
                <p style={{ fontSize: '0.78125rem', color: '#B9C0CB', lineHeight: 1.5 }}>{caseStudy.architecture.security}</p>
              </div>
            </div>
          </div>

          {/* Technical Challenges & Solutions */}
          <div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#F5F3EF', marginBottom: '0.85rem' }}>
              Key Technical Bottlenecks & Solutions
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {caseStudy.technicalChallenges.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#162436',
                    border: '1px solid rgba(220, 225, 235, 0.08)',
                    borderRadius: '10px',
                    padding: '1rem'
                  }}
                >
                  <div style={{ fontWeight: 600, color: '#F5F3EF', fontSize: '0.875rem', marginBottom: '0.3rem' }}>
                    {idx + 1}. {item.challenge}
                  </div>
                  <p style={{ fontSize: '0.8125rem', color: '#B9C0CB', lineHeight: 1.55 }}>
                    <strong style={{ color: '#E8C9A8' }}>Implementation:</strong> {item.solution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Results */}
          <div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#F5F3EF', marginBottom: '0.65rem' }}>
              Verified Performance & Results
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              {caseStudy.verifiedResults.map((result, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontSize: '0.8125rem', color: '#B9C0CB' }}>
                  <CheckCircle2 size={15} color="#38C793" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span>{result}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div
          style={{
            padding: '1rem clamp(1rem, 3vw, 2rem)',
            borderTop: '1px solid rgba(220, 225, 235, 0.1)',
            backgroundColor: '#162436',
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '0.75rem'
          }}
        >
          <button onClick={onClose} className="btn btn-secondary btn-sm" style={{ minHeight: '36px' }}>
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
}
