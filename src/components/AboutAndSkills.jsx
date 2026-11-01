import React, { useState } from 'react';
import { GraduationCap, Code2, BrainCircuit, Target, CheckCircle2 } from 'lucide-react';
import { skillCategories, skillsData } from '../data/skills';
import TechIcon from './TechIcon';

export default function AboutAndSkills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter((skill) => skill.category === activeCategory);

  const aboutBlocks = [
    {
      title: 'Education',
      subtitle: 'B.Tech CSE',
      institution: 'G.L. Bajaj Institute of Technology & Management',
      icon: GraduationCap,
      description: 'Foundations in computer science, software engineering principles, and systems architecture.'
    },
    {
      title: 'Focus',
      subtitle: 'Java & Full-Stack Development',
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
      subtitle: 'Software Engineer & Product Builder',
      institution: 'Impactful Digital Products',
      icon: Target,
      description: 'Building high-performance software systems that solve tangible problems for users and organizations.'
    }
  ];

  return (
    <section id="about" className="section-wrapper" style={{ width: '100%', overflowX: 'hidden', backgroundColor: 'rgba(18, 29, 44, 0.35)' }}>
      <div className="container">
        
        {/* Balanced Two-Column Section: Left (About Me) & Right (Tech Stack) */}
        <div
          className="about-skills-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
            gap: 'clamp(2rem, 5vw, 3.5rem)',
            alignItems: 'start'
          }}
        >
          {/* LEFT COLUMN — About Me */}
          <div>
            <div className="section-eyebrow">Overview</div>
            <h2 className="section-title">
              About <span className="accent">Me</span>
            </h2>
            <p
              style={{
                fontSize: 'clamp(0.925rem, 2vw, 1.025rem)',
                lineHeight: 1.68,
                color: '#B9C0CB',
                marginBottom: '2rem',
                maxWidth: '560px'
              }}
            >
              I'm a Computer Science and Engineering student passionate about building practical software solutions. I enjoy backend development, frontend engineering, Java problem-solving, and turning ideas into useful applications.
            </p>

            {/* Four Compact Information Blocks */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
                gap: '1rem'
              }}
            >
              {aboutBlocks.map((block) => {
                const IconComponent = block.icon;
                return (
                  <div
                    key={block.title}
                    className="dark-card"
                    style={{
                      padding: '1.25rem',
                      borderRadius: '14px',
                      backgroundColor: '#1A2636',
                      border: '1px solid rgba(220, 225, 235, 0.12)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      minHeight: '180px'
                    }}
                  >
                    <div>
                      <div
                        style={{
                          width: '38px',
                          height: '38px',
                          borderRadius: '10px',
                          backgroundColor: 'rgba(232, 201, 168, 0.1)',
                          border: '1px solid rgba(232, 201, 168, 0.25)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#E8C9A8',
                          marginBottom: '0.85rem'
                        }}
                      >
                        <IconComponent size={20} />
                      </div>

                      <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#E8C9A8', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.2rem' }}>
                        {block.title}
                      </div>

                      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#F5F3EF', marginBottom: '0.25rem' }}>
                        {block.subtitle}
                      </h3>

                      <div style={{ fontSize: '0.78125rem', color: '#B9C0CB', marginBottom: '0.45rem' }}>
                        {block.institution}
                      </div>

                      <p style={{ fontSize: '0.8125rem', lineHeight: 1.5, color: '#7E8999', margin: 0 }}>
                        {block.description}
                      </p>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontSize: '0.7rem',
                        color: '#38C793',
                        marginTop: '0.85rem',
                        paddingTop: '0.5rem',
                        borderTop: '1px solid rgba(220, 225, 235, 0.08)'
                      }}
                    >
                      <CheckCircle2 size={12} color="#38C793" />
                      <span>Verified Focus</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN — Tech Stack */}
          <div id="skills" style={{ scrollMarginTop: '90px' }}>
            <div className="section-eyebrow">Technical Competencies</div>
            <h2 className="section-title">
              Tech <span className="accent">Stack</span>
            </h2>
            <p
              style={{
                fontSize: 'clamp(0.925rem, 2vw, 1.025rem)',
                lineHeight: 1.68,
                color: '#B9C0CB',
                marginBottom: '1.25rem',
                maxWidth: '560px'
              }}
            >
              Enterprise backend systems, responsive frontend interfaces, relational databases, and modern developer tooling.
            </p>

            {/* Interactive Category Filter Tabs */}
            <div
              role="tablist"
              aria-label="Filter technologies by category"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.35rem',
                marginBottom: '1.25rem',
                paddingBottom: '0.65rem',
                borderBottom: '1px solid rgba(220, 225, 235, 0.1)'
              }}
            >
              {skillCategories.map((cat) => {
                const isActive = activeCategory === cat.id;
                const count = cat.id === 'all' ? skillsData.length : skillsData.filter((s) => s.category === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    role="tab"
                    aria-selected={isActive}
                    id={`tab-${cat.id}`}
                    aria-controls={`panel-${cat.id}`}
                    onClick={() => setActiveCategory(cat.id)}
                    style={{
                      padding: '0.35rem 0.85rem',
                      borderRadius: '9999px',
                      fontSize: '0.78125rem',
                      fontWeight: isActive ? 600 : 500,
                      color: isActive ? '#0D1522' : '#B9C0CB',
                      backgroundColor: isActive ? '#E8C9A8' : '#162436',
                      border: isActive ? '1px solid #E8C9A8' : '1px solid rgba(220, 225, 235, 0.1)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      transition: 'all 150ms ease',
                      minHeight: '34px'
                    }}
                  >
                    <span>{cat.label}</span>
                    <span
                      style={{
                        fontSize: '0.6875rem',
                        padding: '1px 5px',
                        borderRadius: '9999px',
                        backgroundColor: isActive ? 'rgba(13, 21, 34, 0.2)' : 'rgba(220, 225, 235, 0.08)',
                        color: isActive ? '#0D1522' : '#7E8999'
                      }}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Technologies Grid */}
            <div
              role="tabpanel"
              id={`panel-${activeCategory}`}
              aria-labelledby={`tab-${activeCategory}`}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 140px), 1fr))',
                gap: '0.75rem'
              }}
            >
              {filteredSkills.map((tech) => (
                <div
                  key={tech.name}
                  className="dark-card"
                  style={{
                    padding: '0.85rem 0.95rem',
                    borderRadius: '12px',
                    backgroundColor: '#1A2636',
                    border: '1px solid rgba(220, 225, 235, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    transition: 'all 160ms ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#E8C9A8';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(220, 225, 235, 0.12)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ flexShrink: 0 }}>
                    <TechIcon name={tech.iconType} className="w-5 h-5" />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: '0.84rem', fontWeight: 600, color: '#F5F3EF', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {tech.name}
                    </div>
                    <div style={{ fontSize: '0.6875rem', color: '#7E8999', textTransform: 'capitalize' }}>
                      {tech.category}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 960px) {
          .about-skills-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
