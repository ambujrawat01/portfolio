import React, { useState } from 'react';
import { skillCategories, skillsData } from '../data/skills';
import TechIcon from './TechIcon';
import { Sparkles, Layers } from 'lucide-react';

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="section-wrapper" style={{ width: '100%', overflowX: 'hidden' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">Technical Competencies</div>
          <h2 className="section-title">
            Technologies & <span className="accent">Tools</span>
          </h2>
          <p className="section-subtitle">
            A verified engineering toolkit focused on enterprise Java backend systems, responsive frontend web architecture, relational databases, and collaborative workflows.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div
          role="tablist"
          aria-label="Filter technologies by category"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.45rem',
            marginBottom: '2rem',
            paddingBottom: '0.75rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.07)'
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
                  padding: '0.45rem 1rem',
                  borderRadius: '9999px',
                  fontSize: '0.8125rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? '#0D1522' : '#B9C0CB',
                  backgroundColor: isActive ? '#E8C9A8' : '#1A2636',
                  border: isActive ? '1px solid #E8C9A8' : '1px solid rgba(220, 225, 235, 0.12)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  transition: 'all 200ms ease',
                  minHeight: '38px'
                }}
              >
                <span>{cat.label}</span>
                <span
                  style={{
                    fontSize: '0.6875rem',
                    padding: '1px 6px',
                    borderRadius: '9999px',
                    backgroundColor: isActive ? 'rgba(0, 0, 0, 0.25)' : 'rgba(255, 255, 255, 0.07)',
                    color: isActive ? '#FFFFFF' : '#646C7C'
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
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 210px), 1fr))',
            gap: '1rem'
          }}
        >
          {filteredSkills.map((tech) => (
            <div
              key={tech.name}
              className="dark-card"
              style={{
                padding: 'clamp(1rem, 2.5vw, 1.35rem)',
                borderRadius: '14px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: tech.highlight ? '1px solid rgba(255, 48, 79, 0.3)' : '1px solid rgba(255, 255, 255, 0.07)',
                backgroundColor: tech.highlight ? 'rgba(20, 24, 32, 0.95)' : 'var(--bg-card)',
                height: '100%'
              }}
            >
              <div className="card-highlight-bar" aria-hidden="true" />

              <div>
                {/* Icon & Category Tag Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem', gap: '0.5rem' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
                      flexShrink: 0
                    }}
                  >
                    <TechIcon name={tech.iconType} className="w-5 h-5" />
                  </div>

                  <span className="badge badge-tag" style={{ fontSize: '0.6875rem' }}>
                    {tech.tag}
                  </span>
                </div>

                {/* Tech Name */}
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#F5F7FA', marginBottom: '0.3rem' }}>
                  {tech.name}
                </h3>

                {/* Scope Description */}
                <p style={{ fontSize: '0.8125rem', color: '#A0A7B4', lineHeight: 1.55 }}>
                  {tech.description}
                </p>
              </div>

              {tech.highlight && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.7rem',
                    color: '#E8C9A8',
                    marginTop: '0.85rem',
                    paddingTop: '0.5rem',
                    borderTop: '1px solid rgba(232, 201, 168, 0.15)',
                    fontWeight: 600
                  }}
                >
                  <Sparkles size={11} style={{ flexShrink: 0 }} />
                  <span>Core Production Focus</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
