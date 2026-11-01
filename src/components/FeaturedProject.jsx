import React, { useState } from 'react';
import { featuredProject } from '../data/projects';
import CaseStudyModal from './CaseStudyModal';
import { ExternalLink, Github, BookOpen, Check, HeartPulse } from 'lucide-react';

export default function FeaturedProject() {
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);

  const keyFeatures = [
    'Donor Registration & Profile',
    'Blood Request Management',
    'Blood Group Matching',
    'Nearby Donor Search (5 KM)',
    'Donation History & Admin Panel'
  ];

  return (
    <section id="projects" className="section-wrapper" style={{ position: 'relative', width: '100%', overflowX: 'hidden' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">Featured Engineering Work</div>
          <h2 className="section-title">
            Featured <span className="accent">Project</span>
          </h2>
          <p className="section-subtitle">
            An end-to-end full-stack emergency response system built with Spring Boot, PostgreSQL, and React.
          </p>
        </div>

        {/* Horizontal Project Showcase Card */}
        <div
          className="dark-card"
          style={{
            padding: 'clamp(1.5rem, 3.5vw, 2.75rem)',
            borderRadius: '24px',
            backgroundColor: '#1A2636',
            border: '1px solid rgba(220, 225, 235, 0.12)',
            boxShadow: '0 20px 45px -10px rgba(0, 0, 0, 0.65)'
          }}
        >
          <div
            className="raktdonor-layout"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.05fr 1.35fr 0.95fr',
              gap: 'clamp(1.5rem, 3vw, 2.5rem)',
              alignItems: 'center'
            }}
          >
            {/* LEFT COLUMN: Metadata, Titles, Description, Buttons */}
            <div>
              {/* Badge */}
              <div style={{ marginBottom: '0.85rem' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(232, 201, 168, 0.1)',
                    border: '1px solid rgba(232, 201, 168, 0.28)',
                    color: '#E8C9A8',
                    fontSize: '0.78125rem',
                    fontWeight: 600,
                    letterSpacing: '0.04em'
                  }}
                >
                  <HeartPulse size={13} style={{ color: '#E8C9A8' }} />
                  Featured Project
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 3.8vw, 2.6rem)',
                  fontWeight: 700,
                  color: '#F5F3EF',
                  letterSpacing: '-0.03em',
                  marginBottom: '0.35rem'
                }}
              >
                RaktDonor
              </h3>

              {/* Subheading */}
              <div
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#E8C9A8',
                  marginBottom: '1rem',
                  letterSpacing: '-0.01em'
                }}
              >
                Emergency Blood Response Platform
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.875rem',
                  lineHeight: 1.65,
                  color: '#B9C0CB',
                  marginBottom: '1.5rem'
                }}
              >
                A full-stack blood donation management platform to connect patients, donors, hospitals, and blood banks through blood-group matching and location-based donor discovery.
              </p>

              {/* Stack tags */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.4rem',
                  marginBottom: '1.75rem'
                }}
              >
                <span style={{ padding: '3px 9px', borderRadius: '6px', backgroundColor: '#121D2C', border: '1px solid rgba(220, 225, 235, 0.12)', color: '#F5F3EF', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                  Spring Boot
                </span>
                <span style={{ padding: '3px 9px', borderRadius: '6px', backgroundColor: '#121D2C', border: '1px solid rgba(220, 225, 235, 0.12)', color: '#F5F3EF', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                  PostgreSQL
                </span>
                <span style={{ padding: '3px 9px', borderRadius: '6px', backgroundColor: '#121D2C', border: '1px solid rgba(220, 225, 235, 0.12)', color: '#F5F3EF', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                  React
                </span>
                <span style={{ padding: '3px 9px', borderRadius: '6px', backgroundColor: '#121D2C', border: '1px solid rgba(220, 225, 235, 0.12)', color: '#F5F3EF', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                  Spatial Queries
                </span>
              </div>

              {/* Action Buttons: Live Demo | GitHub | Case Study */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  flexWrap: 'wrap'
                }}
              >
                <a
                  href={featuredProject.links.live}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn btn-primary btn-sm"
                  id="raktdonor-live-demo-btn"
                >
                  <ExternalLink size={14} />
                  <span>Live Demo</span>
                </a>

                <a
                  href={featuredProject.links.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn btn-secondary btn-sm"
                  id="raktdonor-github-btn"
                >
                  <Github size={14} />
                  <span>GitHub</span>
                </a>

                <button
                  onClick={() => setIsCaseStudyOpen(true)}
                  className="btn btn-outline btn-sm"
                  id="raktdonor-case-study-btn"
                >
                  <BookOpen size={14} />
                  <span>Case Study</span>
                </button>
              </div>
            </div>

            {/* CENTER COLUMN: Large Actual RaktDonor Project Screenshot */}
            <div className="raktdonor-center">
              <div
                className="project-screenshot-container"
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid rgba(220, 225, 235, 0.14)',
                  backgroundColor: '#121D2C',
                  boxShadow: '0 14px 35px -5px rgba(0, 0, 0, 0.65)'
                }}
              >
                <img
                  src="/images/raktdonor-showcase.jpg"
                  alt="RaktDonor — Emergency Blood Response Platform User Interface"
                  className="project-img-zoom"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                  loading="lazy"
                />
              </div>
            </div>

            {/* RIGHT COLUMN: Key Features */}
            <div
              className="raktdonor-features-box"
              style={{
                backgroundColor: '#121D2C',
                padding: 'clamp(1.25rem, 2.5vw, 1.65rem)',
                borderRadius: '16px',
                border: '1px solid rgba(220, 225, 235, 0.12)'
              }}
            >
              <div
                style={{
                  fontSize: '0.78125rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#E8C9A8',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '0.4rem'
                }}
              >
                Platform Scope
              </div>

              <h4
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: '#F5F3EF',
                  marginBottom: '1.15rem'
                }}
              >
                Key Features
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {keyFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.65rem',
                      fontSize: '0.84rem',
                      color: '#F5F3EF'
                    }}
                  >
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(232, 201, 168, 0.12)',
                        border: '1px solid rgba(232, 201, 168, 0.35)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#E8C9A8',
                        flexShrink: 0
                      }}
                    >
                      <Check size={11} strokeWidth={2.75} />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={featuredProject}
        isOpen={isCaseStudyOpen}
        onClose={() => setIsCaseStudyOpen(false)}
      />

      <style>{`
        @media (max-width: 1080px) {
          .raktdonor-layout {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .raktdonor-center {
            order: 2;
          }
          .raktdonor-features-box {
            order: 3;
          }
        }
      `}</style>
    </section>
  );
}
