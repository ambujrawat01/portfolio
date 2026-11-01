import React from 'react';

export default function TechIcon({ name, className = 'w-6 h-6' }) {
  const norm = (name || '').toLowerCase().replace(/[^a-z0-9]/g, '');

  switch (norm) {
    case 'java':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 17c2 .5 5 .5 8 0s3-2 3-3-2-2-4-2c-4 0-6 2-6 3" stroke="#FF5722" />
          <path d="M8 20c3 .5 6 .5 9 0s2-1.5 2-2.5-2-1.5-4-1.5" stroke="#FF5722" />
          <path d="M10 5c-1 2 0 4 2 5s2-3 1-5" stroke="#007396" />
          <path d="M14 3c-1 2.5 0 4.5 2 5.5" stroke="#007396" />
          <path d="M5 22c5 1 10 1 14 0" stroke="#FF5722" />
        </svg>
      );

    case 'c':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <polygon points="12,2 22,7.5 22,16.5 12,22 2,16.5 2,7.5" stroke="#659AD2" strokeWidth="1.75" fill="#659AD2" fillOpacity="0.15" />
          <path d="M15 9.5a4 4 0 1 0 0 5" stroke="#A8B9CC" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'python':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M11.9 2c-3.1 0-5 1.4-5 3.3v2.2h5v.7H4.3c-2 0-3.3 1.3-3.3 3.3 0 2.2 1.3 3.5 3.3 3.5h1.6v-2.1c0-1.8 1.5-3.3 3.3-3.3h5.1c1.5 0 2.7-1.2 2.7-2.7V5.3C17 3.4 15 2 11.9 2zm-1.8 2.2a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8z" fill="#3776AB" />
          <path d="M12.1 22c3.1 0 5-1.4 5-3.3v-2.2h-5v-.7h7.6c2 0 3.3-1.3 3.3-3.3 0-2.2-1.3-3.5-3.3-3.5h-1.6v2.1c0 1.8-1.5 3.3-3.3 3.3H9.7c-1.5 0-2.7 1.2-2.7 2.7v3.6c0 1.9 2 3.3 5.1 3.3zm1.8-2.2a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8z" fill="#FFD43B" />
        </svg>
      );

    case 'javascript':
    case 'js':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path d="M7 13.5v4.5c0 1.5-.7 2-2 2-1 0-1.7-.5-1.9-1.3l1.7-.8c.1.4.3.7.6.7.4 0 .6-.3.6-.9v-5.2h1zM11.5 13.5h2c1.7 0 2.7.9 2.7 2.3 0 .9-.5 1.6-1.3 1.9.9.3 1.6 1 1.6 2.1 0 1.6-1.2 2.2-3.1 2.2h-2.9v-8.5zm1.8 3.5c.7 0 1.1-.3 1.1-.8 0-.6-.4-.8-1.1-.8h-.8v1.6h.8zm.2 3.6c.8 0 1.2-.3 1.2-.9 0-.6-.4-.9-1.2-.9h-1v1.8h1z" fill="#000000" />
        </svg>
      );

    case 'react':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="2" fill="#61DAFB" />
        </svg>
      );

    case 'html5':
    case 'html':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M3 2l1.6 18.2L12 22l7.4-1.8L21 2H3z" fill="#E34F26" />
          <path d="M12 3.8v16.3l5.8-1.4 1.4-14.9H12z" fill="#EF652A" />
          <path d="M7 6.5h10l-.2 2.2H9.2l.2 2.2h7.4l-.5 5.5-4.3 1.2-4.3-1.2-.3-3.2h2.2l.2 1.6 2.2.6 2.2-.6.3-2.7H7L7 6.5z" fill="#FFFFFF" />
        </svg>
      );

    case 'css3':
    case 'css':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M3 2l1.6 18.2L12 22l7.4-1.8L21 2H3z" fill="#1572B6" />
          <path d="M12 3.8v16.3l5.8-1.4 1.4-14.9H12z" fill="#33A9DC" />
          <path d="M16.8 6.5H7.2l.2 2.2h4.6H16.6l-.3 3.3-4.3 1.2-4.3-1.2-.2-1.9H5.8l.4 3.7 5.8 1.6 5.8-1.6.8-9.3z" fill="#FFFFFF" />
        </svg>
      );

    case 'bootstrap':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="5" fill="#7952B3" />
          <path d="M8 6h4.5c1.8 0 2.8.8 2.8 2 0 .9-.5 1.5-1.3 1.8 1.1.3 1.8 1.1 1.8 2.2 0 1.5-1.2 2.5-3.3 2.5H8V6zm2.4 3.6h1.8c.6 0 1-.3 1-.8 0-.5-.4-.8-1-.8h-1.8v1.6zm0 3.3h2c.8 0 1.2-.3 1.2-.9 0-.6-.4-.9-1.2-.9h-2v1.8z" fill="#FFFFFF" />
        </svg>
      );

    case 'vite':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M22 4.5L12.5 21.5 2 4.5l10.3 1.8L22 4.5z" fill="#646CFF" />
          <path d="M17.5 3.5L12 14.5l-2-4.5 4-6.5h3.5z" fill="#BD34FE" />
          <path d="M13.5 3.5l-6 10.5 4.5.8 1.5-11.3z" fill="#FFD62E" />
        </svg>
      );

    case 'springboot':
    case 'spring':
    case 'springweb':
    case 'springdatajpa':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <circle cx="12" cy="12" r="10" fill="#6DB33F" fillOpacity="0.2" stroke="#6DB33F" strokeWidth="1.5" />
          <path d="M15.5 7.5c-4.5.5-6.5 3.5-7 6.5 2.5-1 5.5-.5 7-2 1.5-1.5 1-4 0-4.5z" fill="#6DB33F" />
          <path d="M9 13.5c1 3.5 4 4.5 6.5 4.5" stroke="#6DB33F" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case 'hibernate':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <polygon points="12,2 21,7.2 21,17.8 12,23 3,17.8 3,7.2" stroke="#BCAE79" strokeWidth="1.75" fill="#BCAE79" fillOpacity="0.15" />
          <path d="M8 8v8M16 8v8M8 12h8" stroke="#59666C" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'postgresql':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M12 2C7 2 3.5 5.5 3.5 10c0 3.2 1.7 5.7 4.5 7v4.5l3.5-2.5h1c5 0 8-3.5 8-8s-3.5-9-8.5-9z" stroke="#336791" strokeWidth="1.5" fill="#336791" fillOpacity="0.2" />
          <circle cx="9.5" cy="9.5" r="1.5" fill="#336791" />
          <path d="M15 13c-1.5 1.5-4 1.5-5.5 0" stroke="#336791" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case 'mysql':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M4 14c2-5 6-9 11-9 3.5 0 6 2 6 5.5 0 4-3.5 7.5-8 7.5-3 0-5.5-1.5-6.5-4" stroke="#00758F" strokeWidth="1.75" strokeLinecap="round" />
          <path d="M17 10c.5.5 1 1.5 1 2.5" stroke="#F29111" strokeWidth="2" strokeLinecap="round" />
          <circle cx="15" cy="8" r="1" fill="#00758F" />
        </svg>
      );

    case 'mongodb':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M12 2s-6 5.5-6 11c0 4 3 6.5 6 8.5 3-2 6-4.5 6-8.5 0-5.5-6-11-6-11z" stroke="#47A248" strokeWidth="1.5" fill="#47A248" fillOpacity="0.2" />
          <path d="M12 3v17" stroke="#47A248" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case 'git':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect x="2" y="2" width="20" height="20" rx="4" transform="rotate(45 12 12)" fill="#F05032" fillOpacity="0.15" stroke="#F05032" strokeWidth="1.5" />
          <circle cx="8" cy="8" r="2" fill="#F05032" />
          <circle cx="16" cy="16" r="2" fill="#F05032" />
          <circle cx="8" cy="16" r="2" fill="#F05032" />
          <path d="M8 10v4M10 14l4 2" stroke="#F05032" strokeWidth="1.75" />
        </svg>
      );

    case 'github':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
        </svg>
      );

    case 'postman':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <circle cx="12" cy="12" r="10" fill="#FF6C37" />
          <path d="M7 14l5-4 5 4-2-6-3-1-3 1z" fill="#FFFFFF" />
          <circle cx="12" cy="7" r="1.5" fill="#FFFFFF" />
        </svg>
      );

    case 'maven':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M4 19L19 4c1 1.5 1 4 0 6l-9 9-6 0z" fill="#C71A36" fillOpacity="0.25" stroke="#C71A36" strokeWidth="1.5" />
          <path d="M8 15l8-8" stroke="#C71A36" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 19l4-1" stroke="#E32636" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'vscode':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M17.5 2L5.5 13.5l4 3.5L17.5 2z" fill="#0065A9" />
          <path d="M17.5 22L5.5 10.5l4-3.5L17.5 22z" fill="#007ACC" />
          <path d="M17.5 2l4.5 2v16l-4.5 2-8-6.5 8-6.5V2z" fill="#1F9CF0" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" stroke="currentColor" />
          <path d="M10 9l4 3-4 3" stroke="currentColor" />
        </svg>
      );
  }
}
