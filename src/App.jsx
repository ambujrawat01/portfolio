import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutAndSkills from './components/AboutAndSkills';
import FeaturedProject from './components/FeaturedProject';
import ArchitectureShowcase from './components/ArchitectureShowcase';
import OtherProjects from './components/OtherProjects';
import DeveloperDashboard from './components/DeveloperDashboard';
import Engineering from './components/Engineering';
import Journey from './components/Journey';
import AskPortfolio from './components/AskPortfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleOpenResume = () => {
    setIsResumeModalOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeModalOpen(false);
  };

  // Scroll reveal observer for elements with .reveal class
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="portfolio-app" style={{ minHeight: '100vh', position: 'relative', backgroundColor: '#0D1522' }}>
      
      {/* Standard Clean Cursor */}
      <CustomCursor />

      {/* Skip to Main Content Link for Keyboard Accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Subtle Background Ambient Mesh & Grid */}
      <div className="ambient-mesh" aria-hidden="true" />
      <div className="grid-texture" aria-hidden="true" />

      {/* Navigation Bar */}
      <Navbar onResumeClick={handleOpenResume} />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero onResumeClick={handleOpenResume} />
        
        <div className="reveal">
          <AboutAndSkills />
        </div>

        <div className="reveal">
          <FeaturedProject />
        </div>

        <div className="reveal">
          <ArchitectureShowcase />
        </div>

        <div className="reveal">
          <OtherProjects />
        </div>

        <div className="reveal">
          <Engineering />
        </div>

        <div className="reveal">
          <DeveloperDashboard />
        </div>

        <div className="reveal">
          <Journey />
        </div>

        <div className="reveal">
          <AskPortfolio />
        </div>

        <div className="reveal">
          <Resume onOpenModal={handleOpenResume} />
        </div>

        <div className="reveal">
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Document Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={handleCloseResume}
      />
    </div>
  );
}
