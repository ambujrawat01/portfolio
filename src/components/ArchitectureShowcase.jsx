import React, { useState } from 'react';
import { architectureLayers } from '../data/projects';
import { Layers, ArrowDown, CheckCircle, Code, Copy, Check, Sparkles, Cpu, Server, Database, Send } from 'lucide-react';

export default function ArchitectureShowcase() {
  const [selectedLayerIndex, setSelectedLayerIndex] = useState(0);
  const [copiedCode, setCopiedCode] = useState(false);

  const activeLayer = architectureLayers[selectedLayerIndex];

  const getLayerIcon = (id) => {
    switch (id) {
      case 'frontend':
        return <Cpu size={20} color="#79B8FF" />;
      case 'rest-api':
        return <Send size={20} color="#E8C9A8" />;
      case 'spring-backend':
        return <Server size={20} color="#38C793" />;
      case 'orm-jpa':
        return <Database size={20} color="#E5B869" />;
      case 'database':
        return <Layers size={20} color="#C5A17E" />;
      default:
        return <Layers size={20} color="#E8C9A8" />;
    }
  };

  const handleCopyCode = () => {
    if (!activeLayer.sampleCode) return;
    navigator.clipboard.writeText(activeLayer.sampleCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="architecture" className="section-wrapper" style={{ backgroundColor: 'rgba(18, 29, 44, 0.35)', width: '100%', overflowX: 'hidden' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">Technical Architecture Showcase</div>
          <h2 className="section-title">
            RaktDonor System <span className="accent">Architecture</span>
          </h2>
          <p className="section-subtitle">
            An interactive breakdown of the 5-layer decoupled engineering stack powering real-time emergency blood requests and geospatial donor discovery.
          </p>
        </div>

        {/* Interactive Architecture Workspace */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: 'clamp(1.5rem, 3.5vw, 2.5rem)',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Visual Architecture Flow Diagram */}
          <div
            className="dark-card"
            style={{
              padding: 'clamp(1.25rem, 3vw, 2rem)',
              borderRadius: '20px',
              backgroundColor: '#1A2636',
              border: '1px solid rgba(220, 225, 235, 0.12)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.78125rem', fontFamily: 'var(--font-mono)', color: '#E8C9A8', fontWeight: 600 }}>
                <Sparkles size={14} />
                <span>DATA FLOW PIPELINE</span>
              </div>
              <span style={{ fontSize: '0.72rem', color: '#7E8999', fontFamily: 'var(--font-mono)' }}>
                Click to inspect
              </span>
            </div>

            {/* Vertical Tier Nodes */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', position: 'relative' }}>
              {architectureLayers.map((layer, index) => {
                const isSelected = selectedLayerIndex === index;
                const isLast = index === architectureLayers.length - 1;

                return (
                  <React.Fragment key={layer.id}>
                    <button
                      type="button"
                      onClick={() => setSelectedLayerIndex(index)}
                      aria-pressed={isSelected}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.9rem 1.15rem',
                        borderRadius: '12px',
                        backgroundColor: isSelected ? 'rgba(232, 201, 168, 0.12)' : '#121D2C',
                        border: isSelected ? '1.5px solid #E8C9A8' : '1px solid rgba(220, 225, 235, 0.08)',
                        boxShadow: isSelected ? '0 0 16px rgba(232, 201, 168, 0.15)' : 'none',
                        transition: 'all 180ms ease',
                        cursor: 'pointer',
                        textAlign: 'left',
                        position: 'relative',
                        width: '100%'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                        <div
                          style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '10px',
                            backgroundColor: '#162436',
                            border: `1px solid ${isSelected ? '#E8C9A8' : 'rgba(220, 225, 235, 0.08)'}`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                          }}
                        >
                          {getLayerIcon(layer.id)}
                        </div>

                        <div>
                          <div style={{ fontSize: '0.92rem', fontWeight: 600, color: isSelected ? '#F5F3EF' : '#D6DCE5', letterSpacing: '-0.01em' }}>
                            {layer.title}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: isSelected ? '#E8C9A8' : '#7E8999', marginTop: '1px' }}>
                            {layer.subtitle}
                          </div>
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
                        <span
                          style={{
                            fontSize: '0.6875rem',
                            fontFamily: 'var(--font-mono)',
                            padding: '2px 8px',
                            borderRadius: '4px',
                            backgroundColor: isSelected ? '#E8C9A8' : '#1A2636',
                            color: isSelected ? '#0D1522' : '#B9C0CB',
                            fontWeight: 600
                          }}
                        >
                          0{index + 1}
                        </span>
                      </div>
                    </button>

                    {/* Directional Arrow Connector */}
                    {!isLast && (
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '0.15rem 0',
                          color: isSelected ? '#E8C9A8' : '#7E8999'
                        }}
                        aria-hidden="true"
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                          <div style={{ width: '1px', height: '10px', backgroundColor: isSelected ? '#E8C9A8' : 'rgba(220, 225, 235, 0.15)' }} />
                          <ArrowDown size={14} color={isSelected ? '#E8C9A8' : '#7E8999'} />
                          <div style={{ width: '1px', height: '10px', backgroundColor: isSelected ? '#E8C9A8' : 'rgba(220, 225, 235, 0.15)' }} />
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            <div
              style={{
                marginTop: '1.25rem',
                paddingTop: '0.85rem',
                borderTop: '1px solid rgba(220, 225, 235, 0.08)',
                fontSize: '0.75rem',
                color: '#7E8999',
                fontFamily: 'var(--font-mono)',
                textAlign: 'center'
              }}
            >
              Enterprise Tier Isolation • Spring Boot 3 + PostgreSQL 15
            </div>
          </div>

          {/* Right Column: Layer Responsibility Inspector & Code Specs */}
          <div
            className="dark-card"
            style={{
              padding: 'clamp(1.25rem, 3.5vw, 2.25rem)',
              borderRadius: '20px',
              backgroundColor: '#1A2636',
              border: '1px solid rgba(220, 225, 235, 0.14)'
            }}
          >
            <div className="card-highlight-bar" aria-hidden="true" style={{ opacity: 1 }} />

            {/* Layer Header Badge & Title */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.65rem', flexWrap: 'wrap', gap: '0.45rem' }}>
              <span
                style={{
                  display: 'inline-block',
                  padding: '2px 8px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(232, 201, 168, 0.12)',
                  border: '1px solid rgba(232, 201, 168, 0.28)',
                  color: '#E8C9A8',
                  fontSize: '0.72rem',
                  fontWeight: 600
                }}
              >
                Tier 0{selectedLayerIndex + 1} • {activeLayer.badge}
              </span>
              <span style={{ fontSize: '0.75rem', color: '#7E8999', fontFamily: 'var(--font-mono)' }}>
                Active Component Inspector
              </span>
            </div>

            <h3 style={{ fontSize: 'clamp(1.35rem, 3vw, 1.75rem)', fontWeight: 700, color: '#F5F3EF', letterSpacing: '-0.02em', marginBottom: '0.35rem' }}>
              {activeLayer.title}
            </h3>

            <div style={{ fontSize: '0.9rem', color: '#E8C9A8', fontWeight: 600, marginBottom: '1.25rem' }}>
              {activeLayer.subtitle}
            </div>

            {/* Responsibility Summary Box */}
            <div
              style={{
                backgroundColor: '#121D2C',
                border: '1px solid rgba(220, 225, 235, 0.1)',
                borderRadius: '12px',
                padding: '1.15rem',
                marginBottom: '1.5rem'
              }}
            >
              <div style={{ fontSize: '0.72rem', color: '#7E8999', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem', fontWeight: 600 }}>
                Primary Engineering Responsibility
              </div>
              <p style={{ fontSize: '0.875rem', color: '#F5F3EF', lineHeight: 1.65 }}>
                {activeLayer.responsibility}
              </p>
            </div>

            {/* Tech Stack Chips */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.72rem', color: '#7E8999', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '0.5rem' }}>
                Underlying Technology Stack
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {activeLayer.techStack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: '0.3rem 0.65rem',
                      borderRadius: '6px',
                      backgroundColor: '#162436',
                      border: '1px solid rgba(220, 225, 235, 0.1)',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#F5F3EF'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Functions */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.72rem', color: '#7E8999', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '0.65rem' }}>
                Key Functional Capabilities & Guarantees
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {activeLayer.keyFunctions.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: '0.84rem', color: '#B9C0CB', lineHeight: 1.55 }}>
                    <CheckCircle size={15} color="#38C793" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sample Code Contract Snippet */}
            {activeLayer.sampleCode && (
              <div
                style={{
                  borderRadius: '12px',
                  backgroundColor: '#101826',
                  border: '1px solid rgba(220, 225, 235, 0.1)',
                  overflow: 'hidden'
                }}
              >
                <div
                  style={{
                    backgroundColor: '#162436',
                    padding: '0.6rem 1rem',
                    borderBottom: '1px solid rgba(220, 225, 235, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#B9C0CB' }}>
                    <Code size={13} color="#E8C9A8" />
                    <span>Implementation Excerpt</span>
                  </div>
                  <button
                    onClick={handleCopyCode}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      fontSize: '0.7rem',
                      color: copiedCode ? '#38C793' : '#B9C0CB',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      backgroundColor: 'rgba(220, 225, 235, 0.05)'
                    }}
                    title="Copy code excerpt"
                  >
                    {copiedCode ? <Check size={12} /> : <Copy size={12} />}
                    <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <pre
                  style={{
                    padding: '1rem',
                    margin: 0,
                    overflowX: 'auto',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78125rem',
                    lineHeight: 1.6,
                    color: '#F5F3EF'
                  }}
                >
                  <code>{activeLayer.sampleCode}</code>
                </pre>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
