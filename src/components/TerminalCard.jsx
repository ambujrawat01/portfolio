import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Copy, Check, CornerDownLeft } from 'lucide-react';

const INITIAL_OUTPUT = [
  { type: 'line', key: 'Name', val: 'Ambuj Rawat' },
  { type: 'line', key: 'Role', val: 'Java Full-Stack Developer' },
  { type: 'line', key: 'Focus', val: 'Web Development, DSA' },
  { type: 'line', key: 'Status', val: 'Building & Learning' },
  { type: 'info', text: '💡 Tip: Type or click "skills", "projects", "contact", or "clear".' }
];

const COMMAND_MAP = {
  whoami: [
    { type: 'line', key: 'Name', val: 'Ambuj Rawat' },
    { type: 'line', key: 'Role', val: 'Java Full-Stack Developer' },
    { type: 'line', key: 'Focus', val: 'Web Development, DSA' },
    { type: 'line', key: 'Status', val: 'Building & Learning' }
  ],
  skills: [
    { type: 'line', key: 'Backend', val: 'Java 17/21, Spring Boot, Hibernate, REST APIs' },
    { type: 'line', key: 'Frontend', val: 'React.js, JavaScript, HTML5, CSS3, Vite' },
    { type: 'line', key: 'Databases', val: 'PostgreSQL, MySQL, MongoDB' },
    { type: 'line', key: 'Tools', val: 'Git, GitHub, Postman, VS Code' }
  ],
  projects: [
    { type: 'line', key: '1. RaktDonor', val: 'Emergency Blood Response Platform (React, Spring Boot, PostgreSQL)' },
    { type: 'line', key: '2. ResumeAI', val: 'Skill Extraction & Job Match Analyzer (Python, React)' },
    { type: 'line', key: '3. CropAdvisor', val: 'Agronomic Guidance & Predictive System (ML, React)' },
    { type: 'line', key: '4. FinAI', val: 'Personal Finance Intelligence Prototype (Spring Boot, Chart.js)' }
  ],
  contact: [
    { type: 'line', key: 'Email', val: 'ambujr001@gmail.com' },
    { type: 'line', key: 'GitHub', val: 'https://github.com/ambujrawat' },
    { type: 'line', key: 'LinkedIn', val: 'https://www.linkedin.com/in/ambuj-rawat-5372bb2a3/' }
  ],
  help: [
    { type: 'info', text: 'Available interactive commands:' },
    { type: 'line', key: 'whoami', val: 'Developer identity & status' },
    { type: 'line', key: 'skills', val: 'Core technical stack' },
    { type: 'line', key: 'projects', val: 'Featured engineering projects' },
    { type: 'line', key: 'contact', val: 'Direct communication channels' },
    { type: 'line', key: 'clear', val: 'Clear terminal window' }
  ]
};

export default function TerminalCard() {
  const [history, setHistory] = useState([]);
  const [inputVal, setInputVal] = useState('');
  const [typedPrompt, setTypedPrompt] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [copied, setCopied] = useState(false);
  const terminalEndRef = useRef(null);

  // Automated typing on mount
  useEffect(() => {
    const fullCommand = 'ambuj@portfolio:~$ whoami';
    let charIndex = 0;
    setTypedPrompt('');
    setIsTyping(true);

    const typeTimer = setInterval(() => {
      charIndex++;
      setTypedPrompt(fullCommand.slice(0, charIndex));
      if (charIndex >= fullCommand.length) {
        clearInterval(typeTimer);
        setIsTyping(false);
        setTimeout(() => {
          setHistory([
            { type: 'command', text: fullCommand },
            ...INITIAL_OUTPUT
          ]);
        }, 250);
      }
    }, 40);

    return () => clearInterval(typeTimer);
  }, []);

  const executeCommand = (cmdText) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    const commandEntry = { type: 'command', text: `ambuj@portfolio:~$ ${trimmed}` };
    const results = COMMAND_MAP[trimmed] || [
      { type: 'error', text: `command not found: "${trimmed}". Type "help" for options.` }
    ];

    setHistory((prev) => [...prev, commandEntry, ...results]);
    setInputVal('');
  };

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  const handleCopy = () => {
    const textToCopy = history
      .map((item) => {
        if (item.type === 'command') return item.text;
        if (item.type === 'line') return `${item.key}: ${item.val}`;
        return item.text;
      })
      .join('\n');

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="terminal-window"
      style={{
        width: '100%',
        maxWidth: '100%',
        backgroundColor: '#121D2C',
        border: '1px solid rgba(220, 225, 235, 0.12)',
        borderRadius: '16px',
        boxShadow: '0 16px 36px -10px rgba(0, 0, 0, 0.65)'
      }}
      role="region"
      aria-label="Interactive Developer Terminal"
    >
      {/* Terminal Window Header Bar */}
      <div
        className="terminal-header"
        style={{
          backgroundColor: '#162436',
          padding: '0.75rem 1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(220, 225, 235, 0.1)'
        }}
      >
        <div className="terminal-dots" aria-hidden="true" style={{ display: 'flex', gap: '6px' }}>
          <span className="dot dot-red" style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ff5f56' }} />
          <span className="dot dot-yellow" style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
          <span className="dot dot-green" style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#27c93f' }} />
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#B9C0CB', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
          <Terminal size={13} color="#E8C9A8" />
          <span>ambuj@portfolio: ~$</span>
        </div>

        <button
          onClick={handleCopy}
          aria-label="Copy terminal text"
          title="Copy terminal session"
          style={{
            color: copied ? '#38C793' : '#B9C0CB',
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            fontSize: '0.7rem',
            padding: '3px 8px',
            borderRadius: '4px',
            backgroundColor: 'rgba(220, 225, 235, 0.05)',
            border: '1px solid rgba(220, 225, 235, 0.1)',
            transition: 'all 150ms'
          }}
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>

      {/* Terminal Content Body */}
      <div
        className="terminal-body"
        style={{
          minHeight: '210px',
          maxHeight: '280px',
          overflowY: 'auto',
          backgroundColor: '#0F1826',
          padding: '1.15rem 1.25rem'
        }}
      >
        {isTyping && (
          <div style={{ color: '#E8C9A8', fontWeight: 600, margin: '0.35rem 0' }}>
            <span>{typedPrompt}</span>
            <span
              style={{
                display: 'inline-block',
                width: '7px',
                height: '14px',
                backgroundColor: '#E8C9A8',
                verticalAlign: 'middle',
                marginLeft: '4px',
                animation: 'blink 1s step-start infinite'
              }}
            />
          </div>
        )}

        {history.map((item, idx) => {
          if (item.type === 'command') {
            return (
              <div key={idx} style={{ color: '#E8C9A8', fontWeight: 600, margin: '0.35rem 0 0.2rem', wordBreak: 'break-all' }}>
                {item.text}
              </div>
            );
          }
          if (item.type === 'line') {
            return (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  fontSize: '0.8125rem',
                  margin: '0.25rem 0',
                  lineHeight: 1.5
                }}
              >
                <span style={{ color: '#E8C9A8', fontWeight: 600, minWidth: '78px', flexShrink: 0 }}>
                  {item.key}:
                </span>
                <span style={{ color: '#F5F3EF' }}>
                  {item.val}
                </span>
              </div>
            );
          }
          if (item.type === 'info') {
            return (
              <div key={idx} style={{ color: '#7E8999', fontSize: '0.75rem', margin: '0.5rem 0 0.25rem', fontStyle: 'italic' }}>
                {item.text}
              </div>
            );
          }
          if (item.type === 'error') {
            return (
              <div key={idx} style={{ color: '#F87171', fontSize: '0.78125rem', margin: '0.25rem 0' }}>
                {item.text}
              </div>
            );
          }
          return null;
        })}

        <div ref={terminalEndRef} />
      </div>

      {/* Interactive Command Input Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '0.65rem 1rem',
          backgroundColor: '#121D2C',
          borderTop: '1px solid rgba(220, 225, 235, 0.08)'
        }}
      >
        <span style={{ color: '#E8C9A8', fontWeight: 600, fontSize: '0.8125rem', marginRight: '0.5rem' }}>
          $
        </span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Type 'skills', 'projects', 'help'..."
          aria-label="Terminal command input"
          style={{
            flex: 1,
            background: 'transparent',
            border: 'none',
            outline: 'none',
            color: '#F5F3EF',
            fontSize: '0.8125rem',
            fontFamily: 'var(--font-mono)'
          }}
        />
        <button
          type="submit"
          aria-label="Run command"
          style={{
            color: inputVal ? '#E8C9A8' : '#7E8999',
            display: 'flex',
            alignItems: 'center',
            padding: '4px',
            cursor: inputVal ? 'pointer' : 'default'
          }}
        >
          <CornerDownLeft size={14} />
        </button>
      </form>

      {/* Quick Suggestion Pills */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.35rem',
          padding: '0.5rem 1rem 0.65rem',
          backgroundColor: '#121D2C',
          flexWrap: 'wrap',
          borderTop: '1px solid rgba(220, 225, 235, 0.06)'
        }}
      >
        <span style={{ fontSize: '0.6875rem', color: '#7E8999', marginRight: '0.25rem' }}>
          Quick:
        </span>
        {['whoami', 'skills', 'projects', 'contact', 'clear'].map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={() => executeCommand(cmd)}
            style={{
              padding: '2px 8px',
              borderRadius: '4px',
              backgroundColor: '#1A2636',
              border: '1px solid rgba(220, 225, 235, 0.1)',
              color: '#B9C0CB',
              fontSize: '0.6875rem',
              fontFamily: 'var(--font-mono)',
              cursor: 'pointer',
              transition: 'all 150ms'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#E8C9A8';
              e.currentTarget.style.color = '#E8C9A8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(220, 225, 235, 0.1)';
              e.currentTarget.style.color = '#B9C0CB';
            }}
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
}
