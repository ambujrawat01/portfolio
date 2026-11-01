import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle2, AlertCircle, Copy, Check, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const contactEmail = 'ambujr001@gmail.com';

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format (e.g. name@domain.com).';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmittedStatus(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${contactEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject.trim() || `Portfolio Contact from ${formData.name}`,
          message: formData.message,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && (data.success === 'true' || data.success === true || !data.error)) {
        setSubmittedStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        try {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.7 },
            colors: ['#E8C9A8', '#C5A17E', '#F5F3EF', '#38C793']
          });
        } catch (err) {
          // safe fallback
        }
      } else {
        throw new Error(data.message || 'Dispatch failed');
      }
    } catch (err) {
      console.warn('Direct message dispatch failed, enabling client mailto fallback:', err);
      setSubmittedStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMailtoFallback = () => {
    const subjectParam = encodeURIComponent(formData.subject.trim() || `Inquiry from ${formData.name}`);
    const bodyParam = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${contactEmail}?subject=${subjectParam}&body=${bodyParam}`;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="section-wrapper" style={{ backgroundColor: 'transparent', width: '100%', overflowX: 'hidden' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">Professional Collaboration</div>
          <h2 className="section-title">
            Have an Interesting <span className="accent">Project in Mind?</span>
          </h2>
          <p className="section-subtitle">
            I'm actively open to full-stack software engineering opportunities, enterprise backend development roles, internships, and high-impact digital collaborations.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 310px), 1fr))',
            gap: 'clamp(1.5rem, 3.5vw, 2.5rem)',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Direct Contact Info & Links */}
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#F5F3EF', marginBottom: '1.25rem' }}>
              Direct Channels
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem' }}>
              
              {/* Email Card with Copy Action */}
              <div
                className="dark-card"
                style={{
                  padding: '1.15rem 1.35rem',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.5rem',
                  flexWrap: 'wrap'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', minWidth: 0 }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(232, 201, 168, 0.1)',
                      border: '1px solid rgba(232, 201, 168, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#E8C9A8',
                      flexShrink: 0
                    }}
                  >
                    <Mail size={18} />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: '0.72rem', color: '#7E8899', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                      Email Address
                    </div>
                    <a
                      href={`mailto:${contactEmail}`}
                      style={{ fontSize: '0.9rem', fontWeight: 600, color: '#F5F3EF', wordBreak: 'break-all', textDecoration: 'none' }}
                    >
                      {contactEmail}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="btn btn-secondary btn-sm"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                  style={{ padding: '0.4rem 0.7rem', minHeight: '36px', marginLeft: 'auto' }}
                >
                  {copiedEmail ? <Check size={14} color="#38C793" /> : <Copy size={14} />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* LinkedIn Card */}
              <a
                href="https://www.linkedin.com/in/ambuj-rawat-5372bb2a3/"
                target="_blank"
                rel="noreferrer noopener"
                className="dark-card"
                aria-label="Ambuj Rawat LinkedIn profile"
                style={{
                  padding: '1.15rem 1.35rem',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  textDecoration: 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(0, 119, 181, 0.12)',
                      border: '1px solid rgba(0, 119, 181, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#0077B5',
                      flexShrink: 0
                    }}
                  >
                    <Linkedin size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: '#7E8899', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                      Professional Network
                    </div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#F5F3EF' }}>
                      linkedin.com/in/ambuj-rawat-5372bb2a3
                    </div>
                  </div>
                </div>
                <ArrowUpRight size={16} color="#B9C0CB" style={{ flexShrink: 0 }} />
              </a>

              {/* GitHub Card */}
              <a
                href="https://github.com/ambujrawat"
                target="_blank"
                rel="noreferrer noopener"
                className="dark-card"
                aria-label="Ambuj Rawat GitHub profile"
                style={{
                  padding: '1.15rem 1.35rem',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  textDecoration: 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(232, 201, 168, 0.08)',
                      border: '1px solid rgba(220, 225, 235, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#F5F3EF',
                      flexShrink: 0
                    }}
                  >
                    <Github size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: '#7E8899', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                      Source Code
                    </div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#F5F3EF' }}>
                      github.com/ambujrawat
                    </div>
                  </div>
                </div>
                <ArrowUpRight size={16} color="#B9C0CB" style={{ flexShrink: 0 }} />
              </a>

            </div>

            {/* Location Notice */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#B9C0CB',
                fontSize: '0.8125rem',
                padding: '0.85rem 1rem',
                borderRadius: '10px',
                backgroundColor: 'rgba(26, 38, 54, 0.5)',
                border: '1px solid rgba(220, 225, 235, 0.12)'
              }}
            >
              <MapPin size={15} color="#E8C9A8" style={{ flexShrink: 0 }} />
              <span>Greater Noida / Delhi NCR, India • Open to Remote & On-Site</span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div
            className="dark-card"
            style={{
              padding: 'clamp(1.25rem, 3.5vw, 2.25rem)',
              borderRadius: '18px',
              border: '1px solid rgba(220, 225, 235, 0.14)',
              backgroundColor: '#1A2636'
            }}
          >
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#F5F3EF', marginBottom: '0.25rem' }}>
              Send a Message
            </h3>
            <p style={{ fontSize: '0.8125rem', color: '#B9C0CB', marginBottom: '1.5rem', lineHeight: 1.5 }}>
              Fill in the details below to dispatch a message directly to my inbox (<span style={{ color: '#E8C9A8', fontWeight: 600 }}>{contactEmail}</span>). I typically respond within 24 hours.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              
              {/* Name */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label
                  htmlFor="contact-name"
                  style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#F5F3EF', marginBottom: '0.45rem' }}
                >
                  Your Name <span style={{ color: '#E8C9A8' }}>*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'contact-name-error' : undefined}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    backgroundColor: '#121D2C',
                    border: errors.name ? '1px solid #E57373' : '1px solid rgba(220, 225, 235, 0.15)',
                    color: '#F5F3EF',
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'border-color 150ms'
                  }}
                />
                {errors.name && (
                  <div id="contact-name-error" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#E57373', fontSize: '0.75rem', marginTop: '0.35rem' }}>
                    <AlertCircle size={12} />
                    <span>{errors.name}</span>
                  </div>
                )}
              </div>

              {/* Email */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label
                  htmlFor="contact-email"
                  style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#F5F3EF', marginBottom: '0.45rem' }}
                >
                  Your Email Address <span style={{ color: '#E8C9A8' }}>*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. john@example.com"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'contact-email-error' : undefined}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    backgroundColor: '#121D2C',
                    border: errors.email ? '1px solid #E57373' : '1px solid rgba(220, 225, 235, 0.15)',
                    color: '#F5F3EF',
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'border-color 150ms'
                  }}
                />
                {errors.email && (
                  <div id="contact-email-error" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#E57373', fontSize: '0.75rem', marginTop: '0.35rem' }}>
                    <AlertCircle size={12} />
                    <span>{errors.email}</span>
                  </div>
                )}
              </div>

              {/* Subject */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label
                  htmlFor="contact-subject"
                  style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#F5F3EF', marginBottom: '0.45rem' }}
                >
                  Subject / Topic
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Engineering Opportunity / Project Discussion"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    backgroundColor: '#121D2C',
                    border: '1px solid rgba(220, 225, 235, 0.15)',
                    color: '#F5F3EF',
                    fontSize: '16px',
                    outline: 'none'
                  }}
                />
              </div>

              {/* Message */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label
                  htmlFor="contact-message"
                  style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#F5F3EF', marginBottom: '0.45rem' }}
                >
                  Message <span style={{ color: '#E8C9A8' }}>*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    backgroundColor: '#121D2C',
                    border: errors.message ? '1px solid #E57373' : '1px solid rgba(220, 225, 235, 0.15)',
                    color: '#F5F3EF',
                    fontSize: '16px',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit'
                  }}
                />
                {errors.message && (
                  <div id="contact-message-error" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#E57373', fontSize: '0.75rem', marginTop: '0.35rem' }}>
                    <AlertCircle size={12} />
                    <span>{errors.message}</span>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
                id="contact-submit-btn"
                style={{ width: '100%', justifyContent: 'center', minHeight: '46px', opacity: isSubmitting ? 0.75 : 1 }}
              >
                {isSubmitting ? (
                  <>
                    <span
                      style={{
                        width: '16px',
                        height: '16px',
                        border: '2px solid rgba(13, 21, 34, 0.3)',
                        borderTopColor: '#0D1522',
                        borderRadius: '50%',
                        animation: 'spin 0.8s linear infinite',
                        display: 'inline-block'
                      }}
                    />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message Directly</span>
                  </>
                )}
              </button>

              {/* Success Notification */}
              {submittedStatus === 'success' && (
                <div
                  style={{
                    marginTop: '1.25rem',
                    padding: '1rem 1.15rem',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(56, 199, 147, 0.1)',
                    border: '1px solid rgba(56, 199, 147, 0.35)',
                    color: '#38C793',
                    fontSize: '0.8125rem',
                    lineHeight: 1.55
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                    <CheckCircle2 size={18} style={{ flexShrink: 0 }} />
                    <span>Message Delivered Successfully!</span>
                  </div>
                  <p style={{ margin: 0, color: '#B9C0CB' }}>
                    Thank you! Your message has been sent directly to <strong style={{ color: '#F5F3EF' }}>{contactEmail}</strong>. I will get back to you soon.
                  </p>
                </div>
              )}

              {/* Error / Fallback Notification */}
              {submittedStatus === 'error' && (
                <div
                  style={{
                    marginTop: '1.25rem',
                    padding: '1rem 1.15rem',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(232, 201, 168, 0.08)',
                    border: '1px solid rgba(232, 201, 168, 0.25)',
                    color: '#E8C9A8',
                    fontSize: '0.8125rem',
                    lineHeight: 1.55
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                    <AlertCircle size={18} style={{ flexShrink: 0 }} />
                    <span>Direct Dispatch Encountered an Issue</span>
                  </div>
                  <p style={{ margin: '0 0 0.75rem', color: '#B9C0CB' }}>
                    An ad-blocker or network filter may be blocking the dispatch API. You can still send your message directly via your email client to <strong style={{ color: '#F5F3EF' }}>{contactEmail}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={handleMailtoFallback}
                    className="btn btn-secondary btn-sm"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <Mail size={15} />
                    <span>Send via Email Client Instead</span>
                  </button>
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
