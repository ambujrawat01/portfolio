import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#090E17',
        borderTop: '1px solid rgba(220, 225, 235, 0.1)',
        padding: 'clamp(2.5rem, 5vw, 3.5rem) 0 2rem',
        position: 'relative',
        zIndex: 10,
        width: '100%',
        overflowX: 'hidden'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}
        >
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.4rem' }}>
              <div
                style={{
                  width: '32px',
                  height: '34px',
                  borderRadius: '8px',
                  backgroundColor: '#121D2C',
                  border: '1.5px solid rgba(232, 201, 168, 0.4)',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <img
                  src="/images/ambuj-portrait.jpg"
                  alt="Ambuj Rawat"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%' }}
                />
              </div>
              <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#F5F3EF' }}>
                Ambuj Rawat
              </span>
            </div>
            <p style={{ fontSize: '0.8125rem', color: '#B9C0CB', maxWidth: '380px' }}>
              Java Full-Stack Developer • Building practical, scalable software systems with Spring Boot, React, and modern databases.
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a
              href="https://github.com/ambujrawat"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Ambuj Rawat GitHub"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                backgroundColor: '#121D2C',
                border: '1px solid rgba(220, 225, 235, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#B9C0CB',
                transition: 'all 150ms'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#F5F3EF';
                e.currentTarget.style.borderColor = '#E8C9A8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#B9C0CB';
                e.currentTarget.style.borderColor = 'rgba(220, 225, 235, 0.12)';
              }}
            >
              <Github size={17} />
            </a>

            <a
              href="https://www.linkedin.com/in/ambuj-rawat-5372bb2a3/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Ambuj Rawat LinkedIn"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                backgroundColor: '#121D2C',
                border: '1px solid rgba(220, 225, 235, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#B9C0CB',
                transition: 'all 150ms'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#F5F3EF';
                e.currentTarget.style.borderColor = '#E8C9A8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#B9C0CB';
                e.currentTarget.style.borderColor = 'rgba(220, 225, 235, 0.12)';
              }}
            >
              <Linkedin size={17} />
            </a>

            <a
              href="mailto:ambujr001@gmail.com"
              aria-label="Email Ambuj Rawat"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                backgroundColor: '#121D2C',
                border: '1px solid rgba(220, 225, 235, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#B9C0CB',
                transition: 'all 150ms'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#F5F3EF';
                e.currentTarget.style.borderColor = '#E8C9A8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#B9C0CB';
                e.currentTarget.style.borderColor = 'rgba(220, 225, 235, 0.12)';
              }}
            >
              <Mail size={17} />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top of page"
              title="Scroll to top"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                backgroundColor: 'rgba(232, 201, 168, 0.1)',
                border: '1px solid rgba(232, 201, 168, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#E8C9A8',
                cursor: 'pointer',
                transition: 'all 150ms'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#E8C9A8';
                e.currentTarget.style.color = '#0D1522';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(232, 201, 168, 0.1)';
                e.currentTarget.style.color = '#E8C9A8';
              }}
            >
              <ArrowUp size={17} />
            </button>
          </div>
        </div>

        {/* Bottom Strip */}
        <div
          style={{
            paddingTop: '1.25rem',
            borderTop: '1px solid rgba(220, 225, 235, 0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem',
            fontSize: '0.78125rem',
            color: '#7E8899'
          }}
        >
          <div>
            © {new Date().getFullYear()} Ambuj Rawat. All rights reserved.
          </div>
          <div>
            Midnight Navy & Champagne Beige architecture.
          </div>
        </div>
      </div>
    </footer>
  );
}
