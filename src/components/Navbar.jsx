import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Download } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Journey', href: '#journey' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ onResumeClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Close mobile menu on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      ref={navRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: isScrolled ? 'rgba(13, 21, 34, 0.94)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(220, 225, 235, 0.12)' : '1px solid transparent',
        transition: 'all 250ms ease',
        padding: isScrolled ? '0.75rem 0' : '1.15rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Left: AR Logo + Ambuj Rawat */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          aria-label="Ambuj Rawat Portfolio Homepage"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none'
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              backgroundColor: '#1A2636',
              border: '1.5px solid rgba(232, 201, 168, 0.45)',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 16px rgba(232, 201, 168, 0.12)',
              transition: 'transform 200ms ease, border-color 200ms ease',
              flexShrink: 0
            }}
            className="brand-icon"
          >
            <img
              src="/images/ambuj-portrait.jpg"
              alt="Ambuj Rawat"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '1rem', fontWeight: 700, color: '#F5F3EF', letterSpacing: '-0.015em', lineHeight: 1.2 }}>
              Ambuj Rawat
            </span>
            <span style={{ fontSize: '0.72rem', color: '#E8C9A8', fontFamily: 'var(--font-mono)' }}>
              Java Full-Stack
            </span>
          </div>
        </a>

        {/* Center: Home | About | Projects | Skills | Journey | Contact */}
        <nav
          aria-label="Main Navigation"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '0.25rem',
            backgroundColor: 'rgba(18, 29, 44, 0.92)',
            padding: '0.35rem 0.65rem',
            borderRadius: '9999px',
            border: '1px solid rgba(220, 225, 235, 0.12)',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)'
          }}
          className="desktop-nav"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                aria-current={isActive ? 'page' : undefined}
                className="nav-link-item"
                style={{
                  position: 'relative',
                  padding: '0.45rem 0.95rem',
                  borderRadius: '9999px',
                  fontSize: '0.8125rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? '#F5F3EF' : '#B9C0CB',
                  backgroundColor: isActive ? 'rgba(232, 201, 168, 0.12)' : 'transparent',
                  transition: 'all 180ms ease',
                  textDecoration: 'none'
                }}
              >
                <span>{link.name}</span>
                {/* Champagne active indicator */}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '3px',
                      left: '25%',
                      right: '25%',
                      height: '2px',
                      backgroundColor: '#E8C9A8',
                      borderRadius: '2px',
                      animation: 'fadeIn 200ms ease'
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Download Resume Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <button
            onClick={onResumeClick}
            className="btn btn-outline btn-sm resume-btn"
            id="nav-resume-btn"
            aria-label="Download resume"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.5rem 1.25rem',
              fontSize: '0.8125rem',
              minHeight: '38px',
              backgroundColor: 'rgba(232, 201, 168, 0.08)',
              borderColor: 'rgba(232, 201, 168, 0.32)',
              color: '#E8C9A8'
            }}
          >
            <Download size={14} />
            <span>Download Resume</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-menu"
            style={{
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              borderRadius: '8px',
              backgroundColor: '#1A2636',
              border: '1px solid rgba(220, 225, 235, 0.12)',
              color: '#F5F3EF'
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-menu"
          role="navigation"
          aria-label="Mobile Navigation"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: '#121D2C',
            borderBottom: '1px solid rgba(220, 225, 235, 0.12)',
            padding: '1.25rem 1.5rem',
            boxShadow: '0 25px 50px rgba(0,0,0,0.85)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            animation: 'fadeIn 180ms ease'
          }}
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                aria-current={isActive ? 'page' : undefined}
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  fontSize: '0.9375rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? '#E8C9A8' : '#F5F3EF',
                  backgroundColor: isActive ? 'rgba(232, 201, 168, 0.1)' : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  minHeight: '44px'
                }}
              >
                <span>{link.name}</span>
                {isActive && <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#E8C9A8' }} />}
              </a>
            );
          })}
          
          <div style={{ paddingTop: '0.75rem', borderTop: '1px solid rgba(220, 225, 235, 0.1)' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onResumeClick();
              }}
              className="btn btn-primary btn-sm"
              style={{ width: '100%', justifyContent: 'center', minHeight: '44px' }}
            >
              <Download size={15} />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 992px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        @media (max-width: 991px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
          .resume-btn {
            display: none !important;
          }
        }
        .brand-icon:hover {
          transform: scale(1.04);
          border-color: #E8C9A8 !important;
        }
        .nav-link-item:hover {
          color: #F5F3EF !important;
          background-color: rgba(220, 225, 235, 0.05) !important;
        }
      `}</style>
    </header>
  );
}
