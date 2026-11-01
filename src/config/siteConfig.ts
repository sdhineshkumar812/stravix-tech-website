// Centralized site configuration for Stravix Tech
export const siteConfig = {
  name: 'STRAVIX TECH',
  tagline: 'Digital experiences built for what’s next.',
  metaDescription: 'Stravix Tech builds modern, responsive business websites, custom React applications and e-commerce solutions for growing businesses.',
  
  // Official Contact Configuration
  contact: {
    // WhatsApp number format: only digits, no spaces, no '+' (e.g. 919345841117)
    whatsappNumber: (import.meta.env.VITE_WHATSAPP_NUMBER || '919345841117').replace(/[^0-9]/g, ''),
    phone: '+91 93458 41117',
    phoneDisplay: '+91 93458 41117',
    phoneTel: 'tel:+919345841117',
    email: import.meta.env.VITE_CONTACT_EMAIL || 'stravixtech29@gmail.com',
    workingHours: 'Mon – Sat: 09:00 – 19:00 IST (UTC+5:30)',
    location: 'Bangalore & Chennai, India • Engineering for clients globally',
    responseCommitment: 'Guaranteed initial response within 24 business hours',
  },

  // EmailJS Configuration
  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_a8nerrm',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_uhs63xi',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
    // Helper to verify if credentials are configured
    isConfigured(): boolean {
      return (
        Boolean(this.serviceId) &&
        Boolean(this.templateId) &&
        Boolean(this.publicKey) &&
        this.publicKey !== 'your_public_key_here' &&
        this.publicKey.trim().length > 0
      );
    },
  },

  // Social & Platform Links (Clean placeholders / configurable)
  socials: {
    github: 'https://github.com/stravix-tech',
    linkedin: 'https://linkedin.com/company/stravix-tech',
    twitter: 'https://x.com/stravixtech',
  },

  // Helper generators
  getWhatsAppUrl(customMessage?: string): string {
    const text = customMessage || 'Hello Stravix Tech, I would like to enquire about your services.';
    return `https://wa.me/${this.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
  },

  getMailtoUrl(subject?: string, body?: string): string {
    const sub = subject || 'Project Enquiry — Stravix Tech';
    const b = body ? `&body=${encodeURIComponent(body)}` : '';
    return `mailto:${this.contact.email}?subject=${encodeURIComponent(sub)}${b}`;
  },

  getTelUrl(): string {
    return this.contact.phoneTel;
  },
};
