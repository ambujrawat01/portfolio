import React, { useState } from 'react';
import { Download, FileText, CheckCircle2, Eye } from 'lucide-react';

export default function Resume({ onOpenModal }) {
  const [downloadInitiated, setDownloadInitiated] = useState(false);

  const handleDownload = () => {
    setDownloadInitiated(true);
    setTimeout(() => setDownloadInitiated(false), 3000);
  };

  return (
    <section className="section-wrapper" style={{ paddingBottom: '2.5rem', width: '100%', overflowX: 'hidden' }}>
      <div className="container">
        {/* CTA Card */}
        <div
          className="dark-card"
          style={{
            padding: 'clamp(2rem, 5vw, 3.5rem) clamp(1.25rem, 4vw, 2.5rem)',
            borderRadius: '24px',
            border: '1px solid rgba(220, 225, 235, 0.14)',
            backgroundColor: '#1A2636',
            boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.65)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Subtle Ambient Champagne Glow in Card Corner */}
          <div
            style={{
              position: 'absolute',
              top: '-30%',
              right: '-10%',
              width: 'min(350px, 80vw)',
              height: 'min(350px, 80vw)',
              background: 'radial-gradient(circle, rgba(232, 201, 168, 0.08) 0%, rgba(26, 38, 54, 0) 70%)',
              filter: 'blur(50px)',
              pointerEvents: 'none'
            }}
            aria-hidden="true"
          />

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '640px', margin: '0 auto', position: 'relative', zIndex: 1, width: '100%' }}>
            
            {/* Icon Badge */}
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                backgroundColor: 'rgba(232, 201, 168, 0.1)',
                border: '1px solid rgba(232, 201, 168, 0.28)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#E8C9A8',
                marginBottom: '1.25rem'
              }}
            >
              <FileText size={26} />
            </div>

            {/* Heading */}
            <h2 style={{ fontSize: 'clamp(1.85rem, 4.5vw, 2.75rem)', fontWeight: 700, color: '#F5F3EF', letterSpacing: '-0.025em', marginBottom: '0.6rem', lineHeight: 1.2 }}>
              Want to <span style={{ color: '#E8C9A8' }}>Know More?</span>
            </h2>

            {/* Description */}
            <p style={{ fontSize: 'clamp(0.9375rem, 2vw, 1.05rem)', color: '#B9C0CB', lineHeight: 1.65, marginBottom: '2rem' }}>
              Explore my technical skills, engineering projects, and full development journey.
            </p>

            {/* Actions */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                flexWrap: 'wrap',
                justifyContent: 'center',
                width: '100%'
              }}
              className="resume-actions"
            >
              <a
                href="/resume.pdf"
                download="Ambuj_Rawat_Resume.pdf"
                onClick={handleDownload}
                className="btn btn-primary btn-lg"
                id="cta-download-resume-btn"
                style={{ minHeight: '46px' }}
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>

              <button
                onClick={onOpenModal}
                className="btn btn-secondary btn-lg"
                id="cta-preview-resume-btn"
                style={{ minHeight: '46px' }}
              >
                <Eye size={18} />
                <span>Preview On-Screen</span>
              </button>
            </div>

            {downloadInitiated && (
              <div
                style={{
                  marginTop: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  color: '#38C793',
                  fontSize: '0.8125rem',
                  fontWeight: 600
                }}
              >
                <CheckCircle2 size={16} />
                <span>Resume download initiated successfully!</span>
              </div>
            )}

            <div style={{ marginTop: '1.25rem', fontSize: '0.75rem', color: '#7E8999', fontFamily: 'var(--font-mono)' }}>
              PDF Format • Verified Information • ATS Compatible
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .resume-actions {
            flex-direction: column;
            width: 100%;
          }
          .resume-actions .btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
