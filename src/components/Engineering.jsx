import React, { useState } from 'react';
import { engineeringWorkflow, technicalCards } from '../data/projects';
import { Server, Database, Layout, CheckCircle, ChevronRight, ChevronLeft } from 'lucide-react';

export default function Engineering() {
  const [activeStep, setActiveStep] = useState(0);

  const getCardIcon = (iconName) => {
    switch (iconName) {
      case 'server':
        return <Server size={22} color="#E8C9A8" />;
      case 'database':
        return <Database size={22} color="#C5A17E" />;
      case 'layout':
        return <Layout size={22} color="#79B8FF" />;
      default:
        return <Server size={22} color="#E8C9A8" />;
    }
  };

  return (
    <section id="engineering" className="section-wrapper" style={{ backgroundColor: 'rgba(18, 29, 44, 0.25)', width: '100%', overflowX: 'hidden' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">Methodology & Architecture</div>
          <h2 className="section-title">
            How I <span className="accent">Build</span>
          </h2>
          <p className="section-subtitle">
            A disciplined engineering lifecycle from domain modeling and schema design to reactive components and relational query optimization.
          </p>
        </div>

        {/* Horizontal Workflow Pipeline */}
        <div style={{ marginBottom: '2.5rem' }}>
          
          {/* Workflow Step Nodes */}
          <div
            role="tablist"
            aria-label="Engineering lifecycle phases"
            className="touch-scroll"
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '0.5rem 0.25rem',
              gap: '0.65rem'
            }}
          >
            {engineeringWorkflow.map((item, index) => {
              const isSelected = activeStep === index;
              return (
                <button
                  key={item.step}
                  role="tab"
                  aria-selected={isSelected}
                  id={`workflow-tab-${index}`}
                  aria-controls="workflow-panel"
                  onClick={() => setActiveStep(index)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    minWidth: '125px',
                    padding: '0.75rem 0.9rem',
                    borderRadius: '12px',
                    backgroundColor: isSelected ? 'rgba(232, 201, 168, 0.12)' : '#1A2636',
                    border: isSelected ? '1.5px solid #E8C9A8' : '1px solid rgba(220, 225, 235, 0.1)',
                    boxShadow: isSelected ? '0 0 16px rgba(232, 201, 168, 0.15)' : 'none',
                    transition: 'all 180ms ease',
                    textAlign: 'left',
                    minHeight: '44px',
                    flexShrink: 0
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '0.2rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        color: isSelected ? '#E8C9A8' : '#7E8999'
                      }}
                    >
                      {item.step}
                    </span>
                    {isSelected && <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#E8C9A8' }} />}
                  </div>
                  <div
                    style={{
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      color: isSelected ? '#F5F3EF' : '#B9C0CB'
                    }}
                  >
                    {item.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Highlight Banner */}
          <div
            id="workflow-panel"
            role="tabpanel"
            aria-labelledby={`workflow-tab-${activeStep}`}
            style={{
              marginTop: '1rem',
              padding: 'clamp(1rem, 2.5vw, 1.5rem) clamp(1rem, 3vw, 2rem)',
              borderRadius: '16px',
              backgroundColor: '#1A2636',
              border: '1px solid rgba(220, 225, 235, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)'
            }}
          >
            <div style={{ maxWidth: '100%' }}>
              <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#E8C9A8', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                Phase {engineeringWorkflow[activeStep].step} — {engineeringWorkflow[activeStep].subtitle}
              </div>
              <h3 style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)', fontWeight: 700, color: '#F5F3EF', marginBottom: '0.35rem' }}>
                {engineeringWorkflow[activeStep].title}
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#B9C0CB', maxWidth: '750px', lineHeight: 1.6 }}>
                {engineeringWorkflow[activeStep].description}
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', width: '100%', maxWidth: '200px', justifyContent: 'flex-start' }} className="workflow-nav-btns">
              <button
                onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : engineeringWorkflow.length - 1))}
                className="btn btn-secondary btn-sm"
                aria-label="Previous engineering phase"
                style={{ flex: 1, minHeight: '38px' }}
              >
                <ChevronLeft size={16} />
                <span>Prev</span>
              </button>
              <button
                onClick={() => setActiveStep((prev) => (prev < engineeringWorkflow.length - 1 ? prev + 1 : 0))}
                className="btn btn-primary btn-sm"
                aria-label="Next engineering phase"
                style={{ flex: 1, minHeight: '38px' }}
              >
                <span>Next</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

        </div>

        {/* Three Technical Architecture Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '1.5rem'
          }}
        >
          {technicalCards.map((card) => (
            <div
              key={card.title}
              className="dark-card"
              style={{
                padding: 'clamp(1.25rem, 3vw, 2rem)',
                borderRadius: '18px',
                backgroundColor: '#1A2636',
                border: '1px solid rgba(220, 225, 235, 0.12)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%'
              }}
            >
              <div className="card-highlight-bar" aria-hidden="true" />

              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: '#121D2C',
                      border: '1px solid rgba(220, 225, 235, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    {getCardIcon(card.icon)}
                  </div>
                  <span className="badge badge-tag" style={{ fontSize: '0.72rem' }}>
                    {card.category}
                  </span>
                </div>

                <h3 style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)', fontWeight: 700, color: '#F5F3EF', marginBottom: '1.25rem' }}>
                  {card.title}
                </h3>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {card.items.map((item, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.6rem',
                        fontSize: '0.875rem',
                        color: '#B9C0CB',
                        lineHeight: 1.5
                      }}
                    >
                      <CheckCircle size={15} color="#38C793" style={{ marginTop: '3px', flexShrink: 0 }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                style={{
                  marginTop: '1.5rem',
                  paddingTop: '0.85rem',
                  borderTop: '1px solid rgba(220, 225, 235, 0.08)',
                  fontSize: '0.75rem',
                  color: '#7E8999',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                Production Verified Approach
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
