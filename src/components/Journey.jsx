import React from 'react';
import { journeyTimeline } from '../data/projects';
import { Calendar, Building2, CheckCircle2, GraduationCap, Code2, Sparkles } from 'lucide-react';

export default function Journey() {
  const getItemIcon = (index) => {
    switch (index) {
      case 0:
        return <GraduationCap size={16} color="#E8C9A8" />;
      case 1:
        return <Building2 size={16} color="#38C793" />;
      case 2:
        return <Code2 size={16} color="#79B8FF" />;
      default:
        return <Sparkles size={16} color="#E8C9A8" />;
    }
  };

  return (
    <section id="journey" className="section-wrapper" style={{ width: '100%', overflowX: 'hidden' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">Academic & Engineering Progression</div>
          <h2 className="section-title">
            Education & <span className="accent">Journey</span>
          </h2>
          <p className="section-subtitle">
            A chronological timeline of verified academic milestones and hands-on full-stack software development.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div style={{ maxWidth: '840px', margin: '0 auto', position: 'relative', paddingLeft: 'clamp(1.5rem, 5vw, 2.5rem)' }}>
          
          {/* Timeline Track Line */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '20px',
              left: '8px',
              width: '2px',
              background: 'linear-gradient(to bottom, #E8C9A8 0%, rgba(232, 201, 168, 0.35) 60%, rgba(220, 225, 235, 0.1) 100%)'
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {journeyTimeline.map((item, index) => {
              const isCurrent = index === 0;

              return (
                <div key={item.period} style={{ position: 'relative' }}>
                  
                  {/* Node Dot on Timeline */}
                  <div
                    style={{
                      position: 'absolute',
                      left: 'calc(-1 * clamp(1.5rem, 5vw, 2.5rem) + 0px)',
                      top: '12px',
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      backgroundColor: isCurrent ? '#E8C9A8' : '#1A2636',
                      border: '3px solid #E8C9A8',
                      zIndex: 2
                    }}
                  />

                  {/* Timeline Card */}
                  <div
                    className="dark-card"
                    style={{
                      padding: 'clamp(1.25rem, 3.5vw, 2.25rem)',
                      borderRadius: '18px',
                      backgroundColor: '#1A2636',
                      border: isCurrent ? '1.5px solid rgba(232, 201, 168, 0.35)' : '1px solid rgba(220, 225, 235, 0.12)',
                      boxShadow: '0 12px 30px rgba(0, 0, 0, 0.55)',
                      transition: 'all 180ms ease'
                    }}
                  >
                    <div className="card-highlight-bar" aria-hidden="true" style={{ opacity: isCurrent ? 1 : undefined }} />

                    {/* Period & Status Header */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.65rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#E8C9A8', fontFamily: 'var(--font-mono)', fontSize: '0.84rem', fontWeight: 600 }}>
                        <Calendar size={15} style={{ flexShrink: 0 }} />
                        <span>{item.period}</span>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                        <span className="badge badge-tag" style={{ fontSize: '0.6875rem' }}>
                          {item.badge}
                        </span>
                        <span
                          style={{
                            padding: '2px 8px',
                            borderRadius: '9999px',
                            backgroundColor: isCurrent ? 'rgba(232, 201, 168, 0.12)' : 'rgba(220, 225, 235, 0.06)',
                            border: `1px solid ${isCurrent ? 'rgba(232, 201, 168, 0.28)' : 'rgba(220, 225, 235, 0.1)'}`,
                            color: isCurrent ? '#E8C9A8' : '#B9C0CB',
                            fontSize: '0.7rem',
                            fontWeight: 600
                          }}
                        >
                          {item.status}
                        </span>
                      </div>
                    </div>

                    {/* Title & Degree */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.35rem' }}>
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          backgroundColor: '#121D2C',
                          border: '1px solid rgba(220, 225, 235, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        {getItemIcon(index)}
                      </div>
                      <h3 style={{ fontSize: 'clamp(1.15rem, 2.5vw, 1.35rem)', fontWeight: 700, color: '#F5F3EF', lineHeight: 1.3 }}>
                        {item.title}
                      </h3>
                    </div>

                    {/* Institution */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#B9C0CB', fontSize: '0.84rem', fontWeight: 500, marginBottom: '0.85rem' }}>
                      <Building2 size={15} color="#E8C9A8" style={{ flexShrink: 0 }} />
                      <span>{item.institution}</span>
                    </div>

                    {/* Description */}
                    <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: '#B9C0CB' }}>
                      {item.description}
                    </p>

                    {/* Verified Record Footer */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: '1.25rem',
                        paddingTop: '0.85rem',
                        borderTop: '1px solid rgba(220, 225, 235, 0.08)',
                        fontSize: '0.75rem',
                        color: '#7E8999',
                        flexWrap: 'wrap',
                        gap: '0.5rem'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <CheckCircle2 size={13} color="#38C793" />
                        <span>Verified Educational / Engineering Record</span>
                      </div>
                      <span style={{ fontFamily: 'var(--font-mono)' }}>
                        CS & Engineering
                      </span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
