import React, { useState, useMemo } from 'react';
import { assistantKnowledgeBase, quickSuggestedQueries } from '../data/portfolioAssistant';
import { Bot, Search, Sparkles, Copy, Check, ArrowRight } from 'lucide-react';

export default function AskPortfolio() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState(assistantKnowledgeBase[0]);
  const [copied, setCopied] = useState(false);

  // Filter items matching user search query
  const filteredResults = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return assistantKnowledgeBase;

    return assistantKnowledgeBase.filter((item) => {
      const matchQuestion = item.question.toLowerCase().includes(q);
      const matchCategory = item.category.toLowerCase().includes(q);
      const matchKeywords = item.keywords.some((k) => k.toLowerCase().includes(q));
      const matchTags = item.tags.some((t) => t.toLowerCase().includes(q));
      const matchAnswer = item.answer.toLowerCase().includes(q);

      return matchQuestion || matchCategory || matchKeywords || matchTags || matchAnswer;
    });
  }, [searchTerm]);

  const handleSelectQuery = (queryText) => {
    setSearchTerm('');
    const matched = assistantKnowledgeBase.find((item) => item.question === queryText);
    if (matched) {
      setSelectedItem(matched);
    }
  };

  const handleCopyAnswer = () => {
    if (!selectedItem) return;
    navigator.clipboard.writeText(`${selectedItem.question}\n\n${selectedItem.answer}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="ask-portfolio" className="section-wrapper" style={{ backgroundColor: 'rgba(18, 29, 44, 0.25)', width: '100%', overflowX: 'hidden' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">Interactive Verified Knowledge Base</div>
          <h2 className="section-title">
            Ask My <span className="accent">Portfolio</span>
          </h2>
          <p className="section-subtitle">
            Instant technical answers about my backend engineering skills, RaktDonor full-stack architecture, prototypes, education timeline, and resume facts.
          </p>
        </div>

        {/* Assistant Terminal Container */}
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

          {/* Engine Notice Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '0.75rem',
              marginBottom: '1.5rem',
              paddingBottom: '1.25rem',
              borderBottom: '1px solid rgba(220, 225, 235, 0.1)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(232, 201, 168, 0.1)',
                  border: '1px solid rgba(232, 201, 168, 0.28)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#E8C9A8'
                }}
              >
                <Bot size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#F5F3EF' }}>
                  Portfolio Knowledge Query Engine
                </h3>
                <div style={{ fontSize: '0.75rem', color: '#7E8999', fontFamily: 'var(--font-mono)' }}>
                  Verified Client-Side Architecture & Skill Index
                </div>
              </div>
            </div>

            {/* Clear Status Notice */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.3rem 0.75rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(56, 199, 147, 0.08)',
                border: '1px solid rgba(56, 199, 147, 0.25)',
                color: '#38C793',
                fontSize: '0.72rem',
                fontFamily: 'var(--font-mono)'
              }}
            >
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#38C793' }} />
              <span>Verified Local Knowledge Engine</span>
            </div>
          </div>

          {/* Search Query Input Bar */}
          <div style={{ position: 'relative', marginBottom: '1.25rem' }}>
            <div style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#E8C9A8' }}>
              <Search size={18} />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Ask anything (e.g. 'RaktDonor architecture', 'geospatial queries', 'Spring Boot', 'education')..."
              aria-label="Search portfolio knowledge base"
              style={{
                width: '100%',
                padding: '0.9rem 1rem 0.9rem 2.85rem',
                borderRadius: '12px',
                backgroundColor: '#121D2C',
                border: '1px solid rgba(220, 225, 235, 0.12)',
                color: '#F5F3EF',
                fontSize: '16px',
                outline: 'none',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)'
              }}
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                style={{
                  position: 'absolute',
                  right: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#B9C0CB',
                  fontSize: '0.75rem',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(220, 225, 235, 0.08)'
                }}
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Suggested Queries Chips */}
          <div style={{ marginBottom: '1.75rem' }}>
            <div style={{ fontSize: '0.72rem', color: '#7E8999', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '0.45rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Sparkles size={11} color="#E8C9A8" />
              <span>Popular Questions:</span>
            </div>
            <div className="touch-scroll" style={{ display: 'flex', gap: '0.4rem', paddingBottom: '0.25rem' }}>
              {quickSuggestedQueries.map((query) => (
                <button
                  key={query}
                  type="button"
                  onClick={() => handleSelectQuery(query)}
                  style={{
                    padding: '0.35rem 0.75rem',
                    borderRadius: '8px',
                    backgroundColor: selectedItem && selectedItem.question === query ? '#E8C9A8' : '#162436',
                    border: selectedItem && selectedItem.question === query ? '1px solid #E8C9A8' : '1px solid rgba(220, 225, 235, 0.1)',
                    color: selectedItem && selectedItem.question === query ? '#0D1522' : '#B9C0CB',
                    fontSize: '0.75rem',
                    fontWeight: selectedItem && selectedItem.question === query ? 600 : 500,
                    whiteSpace: 'nowrap',
                    transition: 'all 150ms ease',
                    flexShrink: 0
                  }}
                >
                  {query}
                </button>
              ))}
            </div>
          </div>

          {/* Query Results & Inspector Workspace */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '1.25rem',
              alignItems: 'start'
            }}
          >
            {/* Left Column: List of Questions */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                maxHeight: '380px',
                overflowY: 'auto',
                paddingRight: '0.35rem'
              }}
            >
              <div style={{ fontSize: '0.72rem', color: '#7E8999', fontFamily: 'var(--font-mono)' }}>
                TOPICS MATCHED ({filteredResults.length})
              </div>

              {filteredResults.length === 0 ? (
                <div style={{ padding: '1.5rem', textAlign: 'center', color: '#B9C0CB', fontSize: '0.84rem' }}>
                  No exact match found for "{searchTerm}". Try clicking one of the popular questions above!
                </div>
              ) : (
                filteredResults.map((item) => {
                  const isSelected = selectedItem && selectedItem.id === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSelectedItem(item)}
                      style={{
                        padding: '0.85rem 1rem',
                        borderRadius: '12px',
                        backgroundColor: isSelected ? 'rgba(232, 201, 168, 0.12)' : '#162436',
                        border: isSelected ? '1.5px solid #E8C9A8' : '1px solid rgba(220, 225, 235, 0.08)',
                        textAlign: 'left',
                        cursor: 'pointer',
                        transition: 'all 150ms ease',
                        width: '100%'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                        <span style={{ fontSize: '0.6875rem', color: '#E8C9A8', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                          {item.category}
                        </span>
                        {isSelected && <ArrowRight size={13} color="#E8C9A8" />}
                      </div>
                      <div style={{ fontSize: '0.84rem', fontWeight: 600, color: isSelected ? '#F5F3EF' : '#D6DCE5', lineHeight: 1.4 }}>
                        {item.question}
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Right Column: Active Answer Display */}
            {selectedItem && (
              <div
                style={{
                  backgroundColor: '#121D2C',
                  border: '1px solid rgba(220, 225, 235, 0.12)',
                  borderRadius: '16px',
                  padding: 'clamp(1rem, 3vw, 1.75rem)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.45)'
                }}
              >
                {/* Header & Copy Button */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span
                    style={{
                      padding: '2px 8px',
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(232, 201, 168, 0.12)',
                      border: '1px solid rgba(232, 201, 168, 0.28)',
                      color: '#E8C9A8',
                      fontSize: '0.7rem',
                      fontWeight: 600
                    }}
                  >
                    {selectedItem.category}
                  </span>

                  <button
                    onClick={handleCopyAnswer}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      padding: '0.3rem 0.7rem',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(220, 225, 235, 0.05)',
                      border: '1px solid rgba(220, 225, 235, 0.1)',
                      color: copied ? '#38C793' : '#B9C0CB',
                      fontSize: '0.72rem'
                    }}
                    title="Copy answer to clipboard"
                  >
                    {copied ? <Check size={12} /> : <Copy size={12} />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#F5F3EF', marginBottom: '1rem', lineHeight: 1.4 }}>
                  {selectedItem.question}
                </h4>

                <div style={{ whiteSpace: 'pre-line', fontSize: '0.875rem', lineHeight: 1.7, color: '#B9C0CB', marginBottom: '1.25rem' }}>
                  {selectedItem.answer}
                </div>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', paddingTop: '0.85rem', borderTop: '1px solid rgba(220, 225, 235, 0.08)' }}>
                  {selectedItem.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: '2px 8px',
                        borderRadius: '6px',
                        backgroundColor: '#162436',
                        border: '1px solid rgba(220, 225, 235, 0.08)',
                        color: '#D6DCE5',
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-mono)'
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
