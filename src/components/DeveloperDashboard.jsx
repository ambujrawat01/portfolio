import React, { useState } from 'react';
import { developerWorldData } from '../data/dashboard';
import { Terminal, Github, Code2, Wrench, Layers, ExternalLink, Compass } from 'lucide-react';

export default function DeveloperDashboard() {
  const [activeTab, setActiveTab] = useState('languages');

  const getTabIcon = (id) => {
    switch (id) {
      case 'languages':
        return <Code2 size={15} />;
      case 'frameworks':
        return <Layers size={15} />;
      case 'tools':
        return <Wrench size={15} />;
      case 'learning':
        return <Compass size={15} />;
      default:
        return <Terminal size={15} />;
    }
  };

  const activeCategory = developerWorldData.categories.find((c) => c.id === activeTab) || developerWorldData.categories[0];

  return (
    <section id="developer-world" className="section-wrapper" style={{ width: '100%', overflowX: 'hidden' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">Engineering Environment & Focus</div>
          <h2 className="section-title">
            Inside My <span className="accent">Developer World</span>
          </h2>
          <p className="section-subtitle">
            {developerWorldData.sectionSubtitle}
          </p>
        </div>

        {/* Dashboard Shell */}
        <div
          className="dark-card"
          style={{
            padding: 'clamp(1.25rem, 3.5vw, 2.5rem)',
            borderRadius: '24px',
            backgroundColor: '#1A2636',
            border: '1px solid rgba(220, 225, 235, 0.12)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.65)'
          }}
        >
          <div className="card-highlight-bar" aria-hidden="true" style={{ opacity: 1 }} />

          {/* Top Control Bar with Verified Status & Category Tabs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '1.75rem',
              paddingBottom: '1.25rem',
              borderBottom: '1px solid rgba(220, 225, 235, 0.1)'
            }}
          >
            {/* Category Selector Tabs */}
            <div
              role="tablist"
              aria-label="Developer world category tabs"
              className="touch-scroll"
              style={{ display: 'flex', gap: '0.45rem', paddingBottom: '0.25rem' }}
            >
              {developerWorldData.categories.map((cat) => {
                const isSelected = activeTab === cat.id;
                return (
                  <button
                    key={cat.id}
                    role="tab"
                    aria-selected={isSelected}
                    id={`world-tab-${cat.id}`}
                    aria-controls={`world-panel-${cat.id}`}
                    onClick={() => setActiveTab(cat.id)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      padding: '0.45rem 1rem',
                      borderRadius: '9999px',
                      fontSize: '0.8125rem',
                      fontWeight: isSelected ? 600 : 500,
                      color: isSelected ? '#0D1522' : '#B9C0CB',
                      backgroundColor: isSelected ? '#E8C9A8' : '#162436',
                      border: isSelected ? '1px solid #E8C9A8' : '1px solid rgba(220, 225, 235, 0.1)',
                      transition: 'all 180ms ease',
                      minHeight: '38px',
                      whiteSpace: 'nowrap',
                      flexShrink: 0
                    }}
                  >
                    {getTabIcon(cat.id)}
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Verified Data Badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: '#B9C0CB', fontFamily: 'var(--font-mono)' }}>
              <div style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#38C793' }} />
              <span>Verified Technical Data</span>
            </div>
          </div>

          {/* Active Tab Description */}
          <p style={{ fontSize: '0.875rem', color: '#B9C0CB', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            {activeCategory.description}
          </p>

          {/* Active Content Grid */}
          <div
            id={`world-panel-${activeCategory.id}`}
            role="tabpanel"
            aria-labelledby={`world-tab-${activeCategory.id}`}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
              gap: '1rem',
              marginBottom: '2rem'
            }}
          >
            {/* If Languages Tab */}
            {activeTab === 'languages' &&
              activeCategory.items.map((item) => (
                <div
                  key={item.name}
                  style={{
                    backgroundColor: '#121D2C',
                    border: '1px solid rgba(220, 225, 235, 0.1)',
                    borderRadius: '14px',
                    padding: '1.15rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.45rem' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#F5F3EF' }}>
                      {item.name}
                    </h3>
                    <span
                      style={{
                        padding: '2px 8px',
                        borderRadius: '9999px',
                        backgroundColor: 'rgba(232, 201, 168, 0.1)',
                        border: '1px solid rgba(232, 201, 168, 0.25)',
                        color: '#E8C9A8',
                        fontSize: '0.6875rem',
                        fontWeight: 600
                      }}
                    >
                      {item.level}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.78125rem', color: '#E8C9A8', fontWeight: 600, marginBottom: '0.5rem' }}>
                    {item.role}
                  </div>
                  <p style={{ fontSize: '0.8125rem', color: '#B9C0CB', lineHeight: 1.55 }}>
                    {item.focus}
                  </p>
                </div>
              ))}

            {/* If Frameworks Tab */}
            {activeTab === 'frameworks' &&
              activeCategory.items.map((item) => (
                <div
                  key={item.name}
                  style={{
                    backgroundColor: '#121D2C',
                    border: '1px solid rgba(220, 225, 235, 0.1)',
                    borderRadius: '14px',
                    padding: '1.15rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.45rem' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#F5F3EF' }}>
                      {item.name}
                    </h3>
                    <span className="badge badge-neutral" style={{ fontSize: '0.6875rem' }}>
                      {item.tag}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.78125rem', color: '#E8C9A8', fontWeight: 600, marginBottom: '0.5rem' }}>
                    {item.role}
                  </div>
                  <p style={{ fontSize: '0.8125rem', color: '#B9C0CB', lineHeight: 1.55 }}>
                    {item.focus}
                  </p>
                </div>
              ))}

            {/* If Tools Tab */}
            {activeTab === 'tools' &&
              activeCategory.items.map((item) => (
                <div
                  key={item.name}
                  style={{
                    backgroundColor: '#121D2C',
                    border: '1px solid rgba(220, 225, 235, 0.1)',
                    borderRadius: '14px',
                    padding: '1.15rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.45rem' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#F5F3EF' }}>
                      {item.name}
                    </h3>
                    <span style={{ fontSize: '0.72rem', color: '#7E8999', fontFamily: 'var(--font-mono)' }}>
                      Daily Tool
                    </span>
                  </div>
                  <div style={{ fontSize: '0.78125rem', color: '#E8C9A8', fontWeight: 600, marginBottom: '0.5rem' }}>
                    {item.role}
                  </div>
                  <p style={{ fontSize: '0.8125rem', color: '#B9C0CB', lineHeight: 1.55 }}>
                    {item.detail}
                  </p>
                </div>
              ))}

            {/* If Learning Focus Tab */}
            {activeTab === 'learning' &&
              activeCategory.items.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#121D2C',
                    border: '1px solid rgba(232, 201, 168, 0.22)',
                    borderRadius: '14px',
                    padding: '1.25rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#E8C9A8', fontWeight: 600, fontSize: '0.78125rem', marginBottom: '0.45rem', fontFamily: 'var(--font-mono)' }}>
                    <span>ACTIVE STUDY VECTOR 0{idx + 1}</span>
                  </div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#F5F3EF', marginBottom: '0.5rem' }}>
                    {item.topic}
                  </h3>
                  <p style={{ fontSize: '0.84rem', color: '#B9C0CB', lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                </div>
              ))}
          </div>

          {/* Profile Links Strip: GitHub & LeetCode */}
          <div
            style={{
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(220, 225, 235, 0.1)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '1rem'
            }}
          >
            {/* GitHub Card */}
            <a
              href={developerWorldData.profiles.github.url}
              target="_blank"
              rel="noreferrer noopener"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1rem 1.25rem',
                borderRadius: '12px',
                backgroundColor: '#162436',
                border: '1px solid rgba(220, 225, 235, 0.1)',
                transition: 'all 180ms ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#E8C9A8';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(220, 225, 235, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    backgroundColor: '#1A2636',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#F5F3EF'
                  }}
                >
                  <Github size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#F5F3EF' }}>
                    {developerWorldData.profiles.github.label}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#B9C0CB' }}>
                    {developerWorldData.profiles.github.username} • {developerWorldData.profiles.github.highlights}
                  </div>
                </div>
              </div>
              <ExternalLink size={16} color="#B9C0CB" />
            </a>

            {/* LeetCode Card */}
            <a
              href={developerWorldData.profiles.leetcode.url}
              target="_blank"
              rel="noreferrer noopener"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1rem 1.25rem',
                borderRadius: '12px',
                backgroundColor: '#162436',
                border: '1px solid rgba(220, 225, 235, 0.1)',
                transition: 'all 180ms ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#E8C9A8';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(220, 225, 235, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    backgroundColor: '#1A2636',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#E5B869'
                  }}
                >
                  <Code2 size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#F5F3EF' }}>
                    {developerWorldData.profiles.leetcode.label}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#B9C0CB' }}>
                    {developerWorldData.profiles.leetcode.username} • {developerWorldData.profiles.leetcode.highlights}
                  </div>
                </div>
              </div>
              <ExternalLink size={16} color="#B9C0CB" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
