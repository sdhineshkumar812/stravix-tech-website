import React, { useState, forwardRef, useImperativeHandle, useRef, useCallback } from 'react';
import emailjs from '@emailjs/browser';
import { siteConfig } from '../config/siteConfig';
import type { ContactFormData, ContactFormErrors } from '../types';
import {
  MessageCircle,
  Mail,
  Phone,
  Send,
  CheckCircle2,
  AlertTriangle,
  Clock,
  MapPin,
  Loader2,
  Code2,
  RefreshCw,
} from 'lucide-react';

export interface ContactHandle {
  setService: (serviceName: string) => void;
  setBudget: (budgetRange: string) => void;
  focusForm: () => void;
}

export const Contact = forwardRef<ContactHandle>((_, ref) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    service: 'Custom React Web Applications',
    budget: '$3,400 (Growth Web App)',
    message: '',
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submissionStatus, setSubmissionStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error' | 'fallback_active'
  >('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [confirmedEnquiry, setConfirmedEnquiry] = useState<{
    name: string;
    email: string;
    service: string;
    budget: string;
  } | null>(null);

  const nameInputRef = useRef<HTMLInputElement>(null);
  const formCardRef = useRef<HTMLDivElement>(null);

  const focusForm = useCallback(() => {
    if (formCardRef.current) {
      formCardRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    setTimeout(() => {
      nameInputRef.current?.focus();
    }, 400);
  }, []);

  // Expose imperative methods to allow header, services, and pricing cards to pre-fill & focus
  useImperativeHandle(ref, () => ({
    setService: (serviceName: string) => {
      setFormData((prev) => ({ ...prev, service: serviceName }));
      focusForm();
    },
    setBudget: (budgetRange: string) => {
      setFormData((prev) => ({ ...prev, budget: budgetRange }));
      focusForm();
    },
    focusForm,
  }), [focusForm]);

  const validateForm = (): boolean => {
    const newErrors: ContactFormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full or company name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email format (e.g. name@domain.com).';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a primary service.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please share a brief summary of your project goals.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Project details should be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Check if EmailJS credentials are configured in the environment
    const isEmailJSConfigured = siteConfig.emailjs.isConfigured();

    if (!isEmailJSConfigured) {
      // Do NOT claim email was sent. Activate explicit, transparent fallback.
      setSubmissionStatus('fallback_active');
      return;
    }

    setSubmissionStatus('submitting');
    setErrorMessage('');

    try {
      // Map EmailJS template variables exactly: name, email, title, message
      // Also provide standard aliases (from_name, reply_to, service_type, budget_range)
      const templateParams = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        title: `${formData.service}${formData.budget ? ` (${formData.budget})` : ''}`,
        message: formData.message.trim(),
        from_name: formData.name.trim(),
        reply_to: formData.email.trim(),
        service_type: formData.service,
        budget_range: formData.budget || 'Not specified',
      };

      await emailjs.send(
        siteConfig.emailjs.serviceId,
        siteConfig.emailjs.templateId,
        templateParams,
        siteConfig.emailjs.publicKey
      );

      // Preserve submitted enquiry details for receipt display
      setConfirmedEnquiry({
        name: formData.name.trim(),
        email: formData.email.trim(),
        service: formData.service,
        budget: formData.budget,
      });

      // Reset the form fields only after successful delivery
      setFormData({
        name: '',
        email: '',
        service: 'Custom React Web Applications',
        budget: '$3,400 (Growth Web App)',
        message: '',
      });
      setErrors({});
      setSubmissionStatus('success');
    } catch (err: unknown) {
      setSubmissionStatus('error');
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Could not transmit enquiry through EmailJS gateway. Please use WhatsApp or email directly.'
      );
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      service: 'Custom React Web Applications',
      budget: '$3,400 (Growth Web App)',
      message: '',
    });
    setConfirmedEnquiry(null);
    setErrors({});
    setSubmissionStatus('idle');
  };

  // Format validated project enquiry details for WhatsApp direct routing
  const formattedWhatsAppMsg = [
    `Hello Stravix Tech!`,
    ``,
    `*Project Enquiry Submission*`,
    `• *Name:* ${formData.name.trim()}`,
    `• *Email:* ${formData.email.trim()}`,
    `• *Service:* ${formData.service}`,
    `• *Budget:* ${formData.budget || 'Not specified'}`,
    ``,
    `*Project Details:*`,
    formData.message.trim(),
  ].join('\n');

  const whatsAppFallbackUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(formattedWhatsAppMsg)}`;

  // Format validated project enquiry details for Email fallback
  const formattedEmailSubject = `Project Enquiry: ${formData.service} — ${formData.name.trim()}`;
  const formattedEmailBody = [
    `Dear Stravix Tech Team,`,
    ``,
    `Project Enquiry Details:`,
    `• Client/Company: ${formData.name.trim()}`,
    `• Contact Email: ${formData.email.trim()}`,
    `• Service Requested: ${formData.service}`,
    `• Budget: ${formData.budget || 'Not specified'}`,
    ``,
    `Project Requirements:`,
    formData.message.trim(),
    ``,
    `---`,
    `Submitted via Stravix Tech Portal`,
  ].join('\n');

  const emailFallbackUrl = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(formattedEmailSubject)}&body=${encodeURIComponent(formattedEmailBody)}`;

  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--bg-canvas)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-tag">
            <span className="section-tag-dot"></span>
            <span>Project Inquiries</span>
          </div>
          <h2 className="section-title">Let’s engineer something exceptional together.</h2>
          <p className="section-description">
            Tell us about your project, timeline, and architectural requirements. We will analyze your specifications and
            reply with an actionable assessment within 24 business hours.
          </p>
        </div>

        {/* Two-Column Contact Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
            gap: 'clamp(2rem, 5vw, 3.5rem)',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Direct Studio Channels & Guarantees */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Quick Consultation Card */}
            <div
              className="card-surface"
              style={{
                backgroundColor: 'var(--bg-surface)',
                padding: 'clamp(1.5rem, 4vw, 2.25rem)',
              }}
            >
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                Prefer an immediate conversation?
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Skip the form and chat directly with an engineer on WhatsApp, or email your RFP documents directly to our inbox.
              </p>

              {/* Direct Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {/* Working WhatsApp CTA */}
                <a
                  href={siteConfig.getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{
                    width: '100%',
                    maxWidth: '100%',
                    boxSizing: 'border-box',
                    justifyContent: 'center',
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                    textAlign: 'center',
                  }}
                >
                  <MessageCircle size={18} style={{ flexShrink: 0 }} />
                  <span>WhatsApp: {siteConfig.contact.phoneDisplay}</span>
                </a>

                {/* Clickable Phone Number CTA */}
                <a
                  href={siteConfig.getTelUrl()}
                  className="btn btn-secondary"
                  style={{
                    width: '100%',
                    maxWidth: '100%',
                    boxSizing: 'border-box',
                    justifyContent: 'center',
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                    textAlign: 'center',
                  }}
                >
                  <Phone size={18} color="var(--accent-lime)" style={{ flexShrink: 0 }} />
                  <span>Call: {siteConfig.contact.phoneDisplay}</span>
                </a>

                {/* Clickable Mailto Link */}
                <a
                  href={siteConfig.getMailtoUrl()}
                  className="btn btn-secondary"
                  style={{
                    width: '100%',
                    maxWidth: '100%',
                    boxSizing: 'border-box',
                    justifyContent: 'center',
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                    textAlign: 'center',
                  }}
                >
                  <Mail size={18} color="var(--accent-lime)" style={{ flexShrink: 0 }} />
                  <span>Email: {siteConfig.contact.email}</span>
                </a>
              </div>
            </div>

            {/* Studio Availability & Guarantees */}
            <div
              className="card-surface"
              style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              {/* Direct Phone & Email info */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <Phone size={18} color="var(--accent-lime)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    Direct Telephone
                  </div>
                  <a
                    href={siteConfig.getTelUrl()}
                    style={{ fontSize: '0.85rem', color: 'var(--accent-lime)', textDecoration: 'underline' }}
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <Mail size={18} color="var(--accent-lime)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    Official Email
                  </div>
                  <a
                    href={siteConfig.getMailtoUrl()}
                    style={{ fontSize: '0.85rem', color: '#E2E8F0', textDecoration: 'underline' }}
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <Clock size={18} color="var(--accent-lime)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    Working Hours &amp; Response
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    {siteConfig.contact.workingHours}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--accent-lime)', fontWeight: 600, marginTop: '0.2rem' }}>
                    {siteConfig.contact.responseCommitment}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <MapPin size={18} color="var(--accent-lime)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    Location &amp; Delivery
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    {siteConfig.contact.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Client-Side Safety Guarantee */}
            <div
              style={{
                backgroundColor: 'rgba(5, 8, 12, 0.5)',
                border: '1px solid var(--border-hairline)',
                borderRadius: 'var(--radius-md)',
                padding: '1rem',
                fontSize: '0.78rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.5,
              }}
            >
              <strong style={{ color: '#E2E8F0' }}>Privacy &amp; Security:</strong> We sign standard Non-Disclosure Agreements (NDAs) prior to detailed code audits or architecture reviews upon request. We never share your project concepts or contact details.
            </div>
          </div>

          {/* Right Column: Validated Enquiry Form */}
          <div
            ref={formCardRef}
            className="card-surface"
            style={{
              padding: 'clamp(1.5rem, 4vw, 2.5rem)',
              backgroundColor: 'var(--bg-surface)',
            }}
          >
            {/* SUCCESS STATE */}
            {submissionStatus === 'success' && (
              <div
                style={{
                  textAlign: 'center',
                  padding: '2.5rem 1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(163, 230, 53, 0.15)',
                    border: '1px solid var(--accent-lime-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CheckCircle2 size={34} color="var(--accent-lime)" />
                </div>

                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>
                  Enquiry Successfully Received
                </h3>

                <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', maxWidth: '440px', lineHeight: 1.6 }}>
                  Thank you, <strong>{confirmedEnquiry?.name || formData.name || 'there'}</strong>. Your project inquiry has been securely delivered to our senior
                  engineering team. We will review your requirements and respond within 24 business hours.
                </p>

                <div
                  style={{
                    backgroundColor: 'rgba(5, 8, 12, 0.7)',
                    border: '1px solid var(--border-hairline)',
                    padding: '0.85rem 1.25rem',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.825rem',
                    color: 'var(--text-secondary)',
                    fontFamily: 'var(--font-mono)',
                    width: '100%',
                    maxWidth: '400px',
                    textAlign: 'left',
                  }}
                >
                  <div>Service: {confirmedEnquiry?.service || formData.service}</div>
                  <div>Budget: {confirmedEnquiry?.budget || formData.budget}</div>
                  <div>Status: Verified Delivery via EmailJS</div>
                </div>

                <button type="button" onClick={resetForm} className="btn btn-secondary btn-sm" style={{ marginTop: '1rem' }}>
                  <RefreshCw size={14} />
                  <span>Submit Another Project Inquiry</span>
                </button>
              </div>
            )}

            {/* FALLBACK STATE (EmailJS not yet configured in .env) */}
            {submissionStatus === 'fallback_active' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div
                  style={{
                    backgroundColor: 'rgba(245, 158, 11, 0.1)',
                    border: '1px solid rgba(245, 158, 11, 0.35)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.25rem',
                    color: '#FCD34D',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, marginBottom: '0.4rem', color: '#FBBF24' }}>
                    <AlertTriangle size={18} />
                    <span>Direct Routing Mode (EmailJS Credentials Missing)</span>
                  </div>
                  <p style={{ fontSize: '0.85rem', lineHeight: 1.55, color: '#FDE68A' }}>
                    Your project details have been validated and saved! Because live EmailJS API keys are not yet configured in{' '}
                    <code>.env</code>, choose one of the instant direct routing options below to dispatch your message immediately:
                  </p>
                </div>

                {/* Pre-formatted Direct Dispatch Buttons */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', width: '100%', maxWidth: '100%', boxSizing: 'border-box' }}>
                  <a
                    href={whatsAppFallbackUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                    style={{
                      width: '100%',
                      maxWidth: '100%',
                      boxSizing: 'border-box',
                      padding: '0.9rem 1.25rem',
                      minHeight: '48px',
                      fontSize: 'clamp(0.92rem, 2.5vw, 1rem)',
                      fontWeight: 700,
                      justifyContent: 'center',
                      textAlign: 'center',
                      whiteSpace: 'normal',
                      wordBreak: 'break-word',
                      lineHeight: 1.35,
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: '#25D366',
                      color: '#FFFFFF',
                      border: '1px solid #25D366',
                      boxShadow: '0 4px 16px rgba(37, 211, 102, 0.25)',
                    }}
                  >
                    <MessageCircle size={19} style={{ flexShrink: 0 }} />
                    <span>Continue via WhatsApp</span>
                  </a>

                  <a
                    href={emailFallbackUrl}
                    className="btn btn-primary"
                    style={{
                      width: '100%',
                      maxWidth: '100%',
                      boxSizing: 'border-box',
                      padding: '0.9rem 1.25rem',
                      minHeight: '48px',
                      fontSize: 'clamp(0.92rem, 2.5vw, 1rem)',
                      fontWeight: 700,
                      justifyContent: 'center',
                      textAlign: 'center',
                      whiteSpace: 'normal',
                      wordBreak: 'break-word',
                      lineHeight: 1.35,
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--accent-lime)',
                      color: '#0B0F14',
                      border: '1px solid var(--accent-lime)',
                      boxShadow: '0 4px 16px rgba(163, 230, 53, 0.25)',
                    }}
                  >
                    <Mail size={19} color="#0B0F14" style={{ flexShrink: 0 }} />
                    <span>Continue via Email</span>
                  </a>

                  {/* Honest Email Fallback Delivery Explanation */}
                  <div
                    style={{
                      fontSize: '0.78rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.5,
                      padding: '0.75rem 0.95rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-hairline)',
                    }}
                  >
                    <strong style={{ color: 'var(--accent-lime)' }}>Email Client Note:</strong> Clicking &quot;Continue via Email&quot; opens your device&apos;s email application (e.g. Gmail, Outlook, Mail) with your validated enquiry details pre-filled to <code>{siteConfig.contact.email}</code>. Please note that this opens your local email app and does not itself guarantee transmission until you click send in your email client.
                  </div>
                </div>

                {/* Developer Instructions Notice */}
                <div
                  style={{
                    backgroundColor: 'rgba(5, 8, 12, 0.65)',
                    border: '1px solid var(--border-hairline)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.85rem',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600, marginBottom: '0.3rem', color: 'var(--accent-lime)' }}>
                    <Code2 size={14} />
                    <span>Setup Instructions For Automated EmailJS:</span>
                  </div>
                  <div>Configure in your local project-root <code>.env</code> file:</div>
                  <div style={{ color: '#F8FAFC', marginTop: '0.2rem' }}>
                    VITE_EMAILJS_SERVICE_ID=service_a8nerrm<br />
                    VITE_EMAILJS_TEMPLATE_ID=template_uhs63xi<br />
                    VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSubmissionStatus('idle')}
                  className="btn btn-secondary btn-sm"
                  style={{ alignSelf: 'flex-start' }}
                >
                  ← Edit Form Details
                </button>
              </div>
            )}

            {/* FORM VIEW (Idle, Submitting, Error) */}
            {(submissionStatus === 'idle' ||
              submissionStatus === 'submitting' ||
              submissionStatus === 'error') && (
              <form onSubmit={handleSubmit} noValidate>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                  Start a Project Inquiry
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                  Fill in the specifications below. All fields marked with * are required.
                </p>

                {/* Error Banner */}
                {submissionStatus === 'error' && (
                  <div
                    style={{
                      backgroundColor: 'rgba(239, 68, 68, 0.1)',
                      border: '1px solid rgba(239, 68, 68, 0.35)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.85rem',
                      marginBottom: '1.25rem',
                      color: '#FCA5A5',
                      fontSize: '0.85rem',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                    }}
                  >
                    <AlertTriangle size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong>Transmission Error:</strong> {errorMessage}
                      <div style={{ marginTop: '0.4rem' }}>
                        You can also reach us directly at{' '}
                        <a href={siteConfig.getWhatsAppUrl()} style={{ textDecoration: 'underline', fontWeight: 600, color: 'var(--accent-lime)' }}>
                          WhatsApp
                        </a>{' '}
                        or{' '}
                        <a href={siteConfig.getMailtoUrl()} style={{ textDecoration: 'underline', fontWeight: 600, color: 'var(--accent-lime)' }}>
                          {siteConfig.contact.email}
                        </a>.
                      </div>
                    </div>
                  </div>
                )}

                {/* Name Field */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <label
                    htmlFor="contact-name"
                    style={{
                      display: 'block',
                      fontSize: '0.825rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    Your Name or Organization *
                  </label>
                  <input
                    ref={nameInputRef}
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan or Apex Labs"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: errors.name ? '1px solid #EF4444' : '1px solid var(--border-hairline)',
                      backgroundColor: 'var(--bg-subtle)',
                      color: 'var(--text-primary)',
                      outline: 'none',
                    }}
                  />
                  {errors.name && (
                    <span style={{ color: '#F87171', fontSize: '0.75rem', marginTop: '0.25rem', display: 'block' }}>
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email Field */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <label
                    htmlFor="contact-email"
                    style={{
                      display: 'block',
                      fontSize: '0.825rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    Work Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: errors.email ? '1px solid #EF4444' : '1px solid var(--border-hairline)',
                      backgroundColor: 'var(--bg-subtle)',
                      color: 'var(--text-primary)',
                      outline: 'none',
                    }}
                  />
                  {errors.email && (
                    <span style={{ color: '#F87171', fontSize: '0.75rem', marginTop: '0.25rem', display: 'block' }}>
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Service Selection */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <label
                    htmlFor="contact-service"
                    style={{
                      display: 'block',
                      fontSize: '0.825rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    Primary Service Category *
                  </label>
                  <select
                    id="contact-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-hairline)',
                      backgroundColor: 'var(--bg-subtle)',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <option value="Business & Marketing Websites">Business &amp; Marketing Websites</option>
                    <option value="Custom React Web Applications">Custom React Web Applications</option>
                    <option value="E-Commerce & Restaurant QR Menus">E-Commerce &amp; Restaurant QR Menus</option>
                    <option value="Custom Software & API Engineering">Custom Software &amp; API Engineering</option>
                    <option value="AI Integrations & Workflow Automation">AI Integrations &amp; Workflow Automation</option>
                    <option value="Code Audit / Monthly Engineering Retainer">Code Audit / Monthly Engineering Retainer</option>
                    <option value="Other Custom Inquiry">Other Custom Inquiry</option>
                  </select>
                </div>

                {/* Optional Budget Range */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <label
                    htmlFor="contact-budget"
                    style={{
                      display: 'block',
                      fontSize: '0.825rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    Estimated Project Budget (Optional)
                  </label>
                  <select
                    id="contact-budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-hairline)',
                      backgroundColor: 'var(--bg-subtle)',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <option value="$1,200 (Launchpad Package)">$1,200 (Launchpad Package • approx. ₹95k)</option>
                    <option value="$3,400 (Growth Web App)">$3,400 (Growth Web App • approx. ₹2.75L)</option>
                    <option value="$5,000 – $10,000 (Custom Enterprise)">$5,000 – $10,000 (Custom Enterprise)</option>
                    <option value="$10,000+ (Full Platform / AI)">$10,000+ (Full Platform / AI Suite)</option>
                    <option value="Undecided / Flexible Scope">Undecided / Needs Architecture Discovery</option>
                  </select>
                </div>

                {/* Project Details */}
                <div style={{ marginBottom: '1.75rem' }}>
                  <label
                    htmlFor="contact-message"
                    style={{
                      display: 'block',
                      fontSize: '0.825rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    Project Details &amp; Objectives *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe what you are building, target timeline, key feature requirements, or existing tech stack..."
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: errors.message ? '1px solid #EF4444' : '1px solid var(--border-hairline)',
                      backgroundColor: 'var(--bg-subtle)',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      resize: 'vertical',
                      lineHeight: 1.5,
                    }}
                  />
                  {errors.message && (
                    <span style={{ color: '#F87171', fontSize: '0.75rem', marginTop: '0.25rem', display: 'block' }}>
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submissionStatus === 'submitting'}
                  className="btn btn-primary btn-lg"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    opacity: submissionStatus === 'submitting' ? 0.7 : 1,
                    cursor: submissionStatus === 'submitting' ? 'not-allowed' : 'pointer',
                  }}
                >
                  {submissionStatus === 'submitting' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Transmitting Project Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Project Enquiry</span>
                      <Send size={18} color="#0B0F14" />
                    </>
                  )}
                </button>

                <div
                  style={{
                    marginTop: '0.85rem',
                    fontSize: '0.72rem',
                    color: 'var(--text-muted)',
                    textAlign: 'center',
                  }}
                >
                  Direct senior review • No automated marketing spam • Response in 24 hours
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
});
