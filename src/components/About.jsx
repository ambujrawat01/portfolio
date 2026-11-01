import React from 'react';
import { GraduationCap, Code2, BrainCircuit, Target, CheckCircle2 } from 'lucide-react';

export default function About() {
  const cards = [
    {
      title: 'Education',
      subtitle: 'B.Tech — CSE',
      institution: 'G.L. Bajaj Institute of Technology & Management',
      icon: GraduationCap,
      description: 'Foundations in computer science, software engineering principles, and systems architecture.'
    },
    {
      title: 'Focus',
      subtitle: 'Java & Full-Stack',
      institution: 'Spring Boot + React Ecosystem',
      icon: Code2,
      description: 'Engineering robust backend APIs, scalable business logic, and responsive reactive interfaces.'
    },
    {
      title: 'Strength',
      subtitle: 'Problem Solving & DSA',
      institution: 'Algorithms & Clean Code',
      icon: BrainCircuit,
      description: 'Strong analytical reasoning, structured debugging, data structures, and algorithmic optimization.'
    },
    {
      title: 'Goal',
      subtitle: 'Software Engineer',
      institution: 'Impactful Digital Products',
      icon: Target,
      description: 'Building high-performance software systems that solve tangible problems for users and organizations.'
    }
  ];

  return (
    <section id="about" className="section-wrapper" style={{ backgroundColor: 'rgba(13, 17, 23, 0.45)', width: '100%', overflowX: 'hidden' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">Overview</div>
          <h2 className="section-title">
            Who <span className="accent">I Am</span>
          </h2>
          <p className="section-subtitle">
            I'm a Computer Science and Engineering student passionate about building practical software solutions. I enjoy backend development, frontend engineering, Java problem-solving, and turning ideas into useful applications.
          </p>
        </div>

        {/* 4 Compact Information Cards with Equal Heights */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
            gap: '1.25rem',
            marginTop: '1.5rem'
          }}
        >
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="dark-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: 'clamp(1.25rem, 3vw, 1.75rem)',
                  borderRadius: '16px',
                  height: '100%'
                }}
              >
                <div className="card-highlight-bar" aria-hidden="true" />
                
                <div>
                  {/* Card Icon Header */}
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(232, 201, 168, 0.1)',
                      border: '1px solid rgba(232, 201, 168, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#E8C9A8',
                      marginBottom: '1rem',
                      boxShadow: '0 4px 12px rgba(232, 201, 168, 0.1)'
                    }}
                  >
                    <Icon size={22} />
                  </div>

                  {/* Title & Subtitle */}
                  <div style={{ fontSize: '0.78125rem', fontFamily: 'var(--font-mono)', color: '#B9C0CB', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.2rem' }}>
                    {card.title}
                  </div>
                  <h3 style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.2rem)', fontWeight: 700, color: '#F5F3EF', marginBottom: '0.25rem' }}>
                    {card.subtitle}
                  </h3>
                  <div style={{ fontSize: '0.8125rem', color: '#E8C9A8', fontWeight: 500, marginBottom: '0.65rem' }}>
                    {card.institution}
                  </div>

                  <p style={{ fontSize: '0.84rem', lineHeight: 1.6, color: '#B9C0CB' }}>
                    {card.description}
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.72rem',
                    color: '#7E8899',
                    marginTop: '1.25rem',
                    paddingTop: '0.65rem',
                    borderTop: '1px solid rgba(220, 225, 235, 0.08)'
                  }}
                >
                  <CheckCircle2 size={13} color="#E8C9A8" />
                  <span>Verified Competency</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
