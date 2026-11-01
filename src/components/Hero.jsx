import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import TerminalCard from './TerminalCard';
import TechIcon from './TechIcon';

export default function Hero({ onResumeClick }) {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const target = document.getElementById('projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const coreBadges = [
    { name: 'Java', icon: 'java' },
    { name: 'Spring Boot', icon: 'springboot' },
    { name: 'React', icon: 'react' },
    { name: 'PostgreSQL', icon: 'postgresql' }
  ];

  return (
    <section
      id="home"
      style={{
        paddingTop: 'clamp(5.5rem, 8.5vw, 7.5rem)',
        paddingBottom: 'clamp(3rem, 5vw, 4.5rem)',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
        width: '100%',
        overflowX: 'hidden'
      }}
    >
      {/* Subtle Warm Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '8%',
          width: 'min(450px, 70vw)',
          height: 'min(450px, 70vw)',
          background: 'radial-gradient(circle, rgba(232, 201, 168, 0.08) 0%, rgba(13, 21, 34, 0) 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
        aria-hidden="true"
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 310px), 1fr))',
            gap: 'clamp(2rem, 4vw, 3rem)',
            alignItems: 'center'
          }}
        >
          {/* Column 1 (Left): Hero Details */}
          <div className="hero-left-column">
            
            {/* Small Badge: Software Developer */}
            <div style={{ marginBottom: '1rem' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(232, 201, 168, 0.08)',
                  border: '1px solid rgba(232, 201, 168, 0.28)',
                  color: '#E8C9A8',
                  fontSize: '0.78125rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em'
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: '#E8C9A8'
                  }}
                />
                Software Developer
              </span>
            </div>

            {/* Main Heading: Hi, I'm Ambuj Rawat */}
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.2rem, 5.2vw, 3.75rem)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                marginBottom: '0.5rem',
                color: '#F5F3EF'
              }}
            >
              Hi, I'm <span style={{ color: '#E8C9A8' }}>Ambuj Rawat</span>
            </h1>

            {/* Professional Title: Java Full-Stack Developer */}
            <div
              style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
                fontWeight: 600,
                color: '#E8C9A8',
                marginBottom: '1rem',
                letterSpacing: '-0.01em'
              }}
            >
              Java Full-Stack Developer
            </div>

            {/* Description */}
            <p
              style={{
                fontSize: 'clamp(0.925rem, 2vw, 1.025rem)',
                lineHeight: 1.68,
                color: '#B9C0CB',
                marginBottom: '1.5rem',
                maxWidth: '520px'
              }}
            >
              I build scalable web applications, design reliable backend systems, and solve real-world problems with technology.
            </p>

            {/* Technology Badges: Java | Spring Boot | React | PostgreSQL */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.45rem',
                marginBottom: '1.85rem'
              }}
            >
              {coreBadges.map((badge) => (
                <span
                  key={badge.name}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '8px',
                    backgroundColor: '#162436',
                    border: '1px solid rgba(220, 225, 235, 0.12)',
                    color: '#F5F3EF',
                    fontSize: '0.78125rem',
                    fontWeight: 500
                  }}
                >
                  <TechIcon name={badge.icon} className="w-3.5 h-3.5" />
                  <span>{badge.name}</span>
                </span>
              ))}
            </div>

            {/* Buttons: Explore My Work & Download Resume */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                flexWrap: 'wrap',
                marginBottom: '1.75rem'
              }}
              className="hero-ctas"
            >
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="btn btn-primary"
                id="hero-explore-work-btn"
                style={{
                  minHeight: '46px',
                  padding: '0.75rem 1.6rem',
                  fontWeight: 600
                }}
              >
                <span>Explore My Work</span>
                <ArrowDown size={16} />
              </a>

              <button
                onClick={onResumeClick}
                className="btn btn-secondary"
                id="hero-download-resume-btn"
                style={{
                  minHeight: '46px',
                  padding: '0.75rem 1.6rem'
                }}
              >
                <Download size={16} />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Links: GitHub | LinkedIn | Email */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ fontSize: '0.78125rem', color: '#7E8999', fontFamily: 'var(--font-mono)' }}>
                Connect:
              </span>

              <a
                href="https://github.com/ambujrawat"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Ambuj Rawat GitHub profile"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  backgroundColor: '#162436',
                  border: '1px solid rgba(220, 225, 235, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#B9C0CB',
                  transition: 'all 180ms ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#F5F3EF';
                  e.currentTarget.style.borderColor = '#E8C9A8';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#B9C0CB';
                  e.currentTarget.style.borderColor = 'rgba(220, 225, 235, 0.12)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Github size={17} />
              </a>

              <a
                href="https://www.linkedin.com/in/ambuj-rawat-5372bb2a3/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Ambuj Rawat LinkedIn profile"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  backgroundColor: '#162436',
                  border: '1px solid rgba(220, 225, 235, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#B9C0CB',
                  transition: 'all 180ms ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#F5F3EF';
                  e.currentTarget.style.borderColor = '#E8C9A8';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#B9C0CB';
                  e.currentTarget.style.borderColor = 'rgba(220, 225, 235, 0.12)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Linkedin size={17} />
              </a>

              <a
                href="mailto:ambujr001@gmail.com"
                aria-label="Send email to ambujr001@gmail.com"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  backgroundColor: '#162436',
                  border: '1px solid rgba(220, 225, 235, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#B9C0CB',
                  transition: 'all 180ms ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#F5F3EF';
                  e.currentTarget.style.borderColor = '#E8C9A8';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#B9C0CB';
                  e.currentTarget.style.borderColor = 'rgba(220, 225, 235, 0.12)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Mail size={17} />
              </a>
            </div>
          </div>

          {/* Column 2 (Center): Actual Portrait Asset with subtle warm circular background element */}
          <div
            className="hero-center-column"
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '1rem 0'
            }}
          >
            {/* Subtle warm circular background element */}
            <div
              style={{
                position: 'absolute',
                width: 'clamp(240px, 32vw, 320px)',
                height: 'clamp(240px, 32vw, 320px)',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(232, 201, 168, 0.14) 0%, rgba(232, 201, 168, 0.03) 55%, transparent 72%)',
                border: '1px solid rgba(232, 201, 168, 0.15)',
                pointerEvents: 'none',
                zIndex: 0
              }}
              aria-hidden="true"
            />

            {/* Profile Card Container with natural image cropping */}
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                width: 'clamp(220px, 27vw, 275px)',
                height: 'clamp(255px, 31vw, 325px)',
                borderRadius: '24px',
                overflow: 'hidden',
                backgroundColor: '#121D2C',
                border: '1.5px solid rgba(232, 201, 168, 0.35)',
                boxShadow: '0 18px 40px -10px rgba(0, 0, 0, 0.75), 0 0 25px -5px rgba(232, 201, 168, 0.12)'
              }}
            >
              <img
                src="/images/ambuj-portrait.jpg"
                alt="Ambuj Rawat — Java Full-Stack Developer portrait"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 10%',
                  display: 'block'
                }}
                loading="eager"
              />

              {/* Status pill overlay */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '8px',
                  left: '8px',
                  right: '8px',
                  padding: '0.35rem 0.65rem',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(18, 29, 44, 0.88)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  border: '1px solid rgba(220, 225, 235, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#38C793' }} />
                  <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#F5F3EF' }}>
                    Ambuj Rawat
                  </span>
                </div>
                <span style={{ fontSize: '0.65rem', color: '#E8C9A8', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                  Active
                </span>
              </div>
            </div>
          </div>

          {/* Column 3 (Right): Compact Developer Terminal Card */}
          <div className="hero-right-column" style={{ width: '100%', maxWidth: '440px', margin: '0 auto' }}>
            <TerminalCard />
          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 1080px) {
          .hero-grid {
            grid-template-columns: 1.25fr 0.9fr 1.15fr !important;
          }
        }
        @media (max-width: 1079px) and (min-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .hero-right-column {
            grid-column: span 2;
            max-width: 600px !important;
          }
        }
        @media (max-width: 767px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-left-column {
            text-align: left;
          }
          .hero-ctas {
            flex-direction: column;
            width: 100%;
          }
          .hero-ctas .btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
