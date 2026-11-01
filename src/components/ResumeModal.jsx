import React, { useEffect } from 'react';
import { X, Download, FileText } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
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

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="resume-title">
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '850px' }}>
        
        {/* Modal Top Bar */}
        <div
          style={{
            padding: 'clamp(0.85rem, 2vw, 1.25rem) clamp(1rem, 3vw, 2rem)',
            borderBottom: '1px solid rgba(220, 225, 235, 0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'sticky',
            top: 0,
            backgroundColor: '#121D2C',
            zIndex: 10,
            flexWrap: 'wrap',
            gap: '0.5rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FileText size={18} color="#E8C9A8" />
            <h2 id="resume-title" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', fontWeight: 700, color: '#F5F3EF' }}>
              Curriculum Vitae — Ambuj Rawat
            </h2>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <a
              href="/resume.pdf"
              download="Ambuj_Rawat_Resume.pdf"
              className="btn btn-primary btn-sm"
              id="modal-pdf-download-btn"
              style={{ minHeight: '36px' }}
            >
              <Download size={14} />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              aria-label="Close resume preview"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(220, 225, 235, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#B9C0CB',
                cursor: 'pointer'
              }}
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Formatted Document Preview */}
        <div style={{ padding: 'clamp(1.25rem, 3.5vw, 2.5rem)', backgroundColor: '#0D1522', color: '#F5F3EF', fontSize: '0.875rem' }}>
          
          {/* Header */}
          <div style={{ borderBottom: '2px solid rgba(232, 201, 168, 0.4)', paddingBottom: '1.25rem', marginBottom: '1.25rem' }}>
            <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 800, color: '#F5F3EF', marginBottom: '0.2rem' }}>
              Ambuj Rawat
            </h1>
            <div style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.05rem)', color: '#E8C9A8', fontWeight: 600, marginBottom: '0.65rem' }}>
              Java Full-Stack Developer
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem 1.25rem', fontSize: '0.8125rem', color: '#B9C0CB' }}>
              <span>📧 ambujr001@gmail.com</span>
              <span>🔗 github.com/ambujrawat</span>
              <span>💼 linkedin.com/in/ambuj-rawat-5372bb2a3</span>
              <span>📍 Greater Noida, India</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div style={{ marginBottom: '1.25rem' }}>
            <h3 style={{ fontSize: '0.875rem', fontWeight: 700, color: '#E8C9A8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>
              Professional Summary
            </h3>
            <p style={{ lineHeight: 1.6, color: '#B9C0CB', fontSize: '0.84rem' }}>
              Computer Science & Engineering student with demonstrated expertise in enterprise Java backend engineering (Spring Boot, REST APIs, JPA/Hibernate) and modern reactive frontend development with React.js. Experienced in designing relational schemas (PostgreSQL, MySQL), building geospatial search mechanisms, and implementing clean software architectures.
            </p>
          </div>

          {/* Education */}
          <div style={{ marginBottom: '1.25rem' }}>
            <h3 style={{ fontSize: '0.875rem', fontWeight: 700, color: '#E8C9A8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.65rem' }}>
              Education
            </h3>
            
            <div style={{ marginBottom: '0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: '#F5F3EF', flexWrap: 'wrap', gap: '0.25rem' }}>
                <span>B.Tech in Computer Science & Engineering</span>
                <span style={{ color: '#E8C9A8', fontSize: '0.8125rem' }}>2026 – Present</span>
              </div>
              <div style={{ color: '#B9C0CB', fontSize: '0.8125rem' }}>
                G.L. Bajaj Institute of Technology & Management
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: '#F5F3EF', flexWrap: 'wrap', gap: '0.25rem' }}>
                <span>Diploma in Engineering</span>
                <span style={{ color: '#7E8899', fontSize: '0.8125rem' }}>2024 (Completed)</span>
              </div>
              <div style={{ color: '#B9C0CB', fontSize: '0.8125rem' }}>
                Technical Board of Education
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div style={{ marginBottom: '1.25rem' }}>
            <h3 style={{ fontSize: '0.875rem', fontWeight: 700, color: '#E8C9A8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.65rem' }}>
              Technical Skills
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', color: '#B9C0CB', fontSize: '0.8125rem' }}>
              <div><strong style={{ color: '#F5F3EF' }}>Languages:</strong> Java, C, Python, JavaScript (ES6+), HTML5, CSS3</div>
              <div><strong style={{ color: '#F5F7FA' }}>Backend Frameworks:</strong> Spring Boot, Spring Web, Spring Data JPA, Hibernate ORM</div>
              <div><strong style={{ color: '#F5F7FA' }}>Frontend:</strong> React.js, Vite, Bootstrap, Modular CSS, DOM Events</div>
              <div><strong style={{ color: '#F5F7FA' }}>Databases:</strong> PostgreSQL, MySQL, MongoDB, Spatial Distance Queries</div>
              <div><strong style={{ color: '#F5F7FA' }}>Tools & Workflows:</strong> Git, GitHub, Postman, Maven, VS Code</div>
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h3 style={{ fontSize: '0.875rem', fontWeight: 700, color: '#E8C9A8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.65rem' }}>
              Featured Projects
            </h3>

            <div style={{ marginBottom: '0.85rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: '#F5F3EF', flexWrap: 'wrap', gap: '0.25rem' }}>
                <span>RaktDonor — Emergency Blood Response Platform</span>
                <span style={{ color: '#E8C9A8', fontSize: '0.75rem' }}>React, Spring Boot, PostgreSQL, Leaflet</span>
              </div>
              <p style={{ color: '#B9C0CB', fontSize: '0.8125rem', marginTop: '0.25rem', lineHeight: 1.5 }}>
                Engineered full-stack location-aware blood response platform. Automated blood-group matching matrices, implemented geospatial radius queries in PostgreSQL, and developed interactive Leaflet donor maps.
              </p>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: '#F5F3EF', flexWrap: 'wrap', gap: '0.25rem' }}>
                <span>AI Resume Analyzer & Agronomic Decision Support System</span>
                <span style={{ color: '#7E8899', fontSize: '0.75rem' }}>Python, Machine Learning, React</span>
              </div>
              <p style={{ color: '#B9C0CB', fontSize: '0.8125rem', marginTop: '0.25rem', lineHeight: 1.5 }}>
                Built intelligent document parsing and skill matching tools alongside predictive environmental crop advisory engines.
              </p>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div
          style={{
            padding: '1rem clamp(1rem, 3vw, 2rem)',
            borderTop: '1px solid rgba(220, 225, 235, 0.12)',
            backgroundColor: '#121D2C',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem'
          }}
        >
          <span style={{ fontSize: '0.75rem', color: '#7E8899', fontFamily: 'var(--font-mono)' }}>
            Verified Portfolio Asset
          </span>
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            <button onClick={onClose} className="btn btn-secondary btn-sm" style={{ minHeight: '36px' }}>
              Close Preview
            </button>
            <a
              href="/resume.pdf"
              download="Ambuj_Rawat_Resume.pdf"
              className="btn btn-primary btn-sm"
              style={{ minHeight: '36px' }}
            >
              <Download size={14} />
              <span>Save PDF</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
