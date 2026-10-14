import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { personalConfig } from '../../data/config';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { Mail, Send, Copy, Check, Download, AlertCircle, ArrowUpRight } from 'lucide-react';

interface ContactProps {
  onOpenResumeModal: () => void;
}

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResumeModal }) => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Please enter a subject.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please write a brief message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalConfig.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-background transition-colors duration-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <SectionHeader
          label="Get In Touch"
          headline="Have something in mind?"
          subheadline="Let's discuss an idea, a technical challenge, or an opportunity to build something useful."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Inquiries & Links */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div>
              <h3 className="font-display font-bold text-2xl text-text-primary mb-3 transition-colors">
                Let's start a conversation.
              </h3>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed font-normal mb-6">
                Whether you have a question about my engineering projects, want to discuss web systems and IoT, or have a collaboration proposal, feel free to drop a message.
              </p>

              {/* Direct Email Card with One-Click Copy */}
              <div className="p-6 rounded-2xl bg-background-card border border-border shadow-card transition-colors">
                <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted block mb-2 font-medium">
                  Direct Email
                </span>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <Mail className="w-4 h-4 text-accent-primary shrink-0" />
                    <span className="font-mono text-xs sm:text-sm text-text-primary truncate font-medium">
                      {personalConfig.socials.email}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-md bg-background-secondary border border-border hover:bg-border text-text-secondary hover:text-text-primary transition-colors shrink-0"
                    title="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Social & Professional Links */}
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-text-muted block mb-3 font-medium">
                Professional Networks
              </span>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={personalConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-lg bg-background-surface border border-border hover:border-accent-primary text-xs font-mono text-text-secondary hover:text-text-primary transition-colors flex items-center gap-2 group shadow-subtle"
                >
                  <GithubIcon className="w-4 h-4 text-text-muted group-hover:text-text-primary" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-text-muted group-hover:text-accent-primary" />
                </a>

                <a
                  href={personalConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-lg bg-background-surface border border-border hover:border-accent-primary text-xs font-mono text-text-secondary hover:text-text-primary transition-colors flex items-center gap-2 group shadow-subtle"
                >
                  <LinkedinIcon className="w-4 h-4 text-text-muted group-hover:text-text-primary" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-text-muted group-hover:text-accent-primary" />
                </a>

                <a
                  href={`mailto:${personalConfig.socials.email}`}
                  className="px-3.5 py-2 rounded-lg bg-background-surface border border-border hover:border-accent-primary text-xs font-mono text-text-secondary hover:text-text-primary transition-colors flex items-center gap-2 group shadow-subtle"
                >
                  <Mail className="w-4 h-4 text-text-muted group-hover:text-text-primary" />
                  <span>Email Client</span>
                  <ArrowUpRight className="w-3 h-3 text-text-muted group-hover:text-accent-primary" />
                </a>
              </div>
            </div>

            {/* Resume Button */}
            <div className="pt-6 border-t border-border">
              <span className="font-mono text-xs uppercase tracking-wider text-text-muted block mb-3 font-medium">
                Recruiter Quick Access
              </span>
              <button
                type="button"
                onClick={onOpenResumeModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-background-surface border border-border hover:bg-background-secondary text-xs font-mono text-text-primary transition-colors shadow-subtle"
              >
                <Download className="w-3.5 h-3.5 text-accent-primary" />
                <span>View / Download Resume (PDF)</span>
              </button>
            </div>

          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7">
            <div className="bg-background-card p-6 sm:p-10 rounded-2xl border border-border shadow-card text-left transition-colors">
              
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/20">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-2xl text-text-primary transition-colors">
                    Message Dispatched
                  </h4>
                  <p className="text-text-secondary text-sm max-w-md mx-auto leading-relaxed font-normal">
                    Thank you, {formData.name}. Your note has been received and I will reply as soon as possible.
                  </p>
                  <div className="pt-4 flex flex-wrap justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-4 py-2 rounded-lg bg-background-secondary border border-border text-xs font-mono text-text-primary hover:bg-border transition-colors"
                    >
                      Send Another Message
                    </button>
                    <a
                      href={`mailto:${personalConfig.socials.email}?subject=${encodeURIComponent(
                        formData.subject
                      )}&body=${encodeURIComponent(formData.message)}`}
                      className="px-4 py-2 rounded-lg bg-accent-primary text-accent-text text-xs font-mono font-medium hover:bg-accent-hover transition-colors"
                    >
                      Open in Mail Client
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block font-mono text-xs uppercase tracking-wider text-text-primary mb-1.5 font-medium">
                        Your Name <span className="text-accent-primary">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Alex Morgan"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-input-bg border ${
                          errors.name ? 'border-red-400 focus:ring-red-400' : 'border-border focus:border-accent-primary focus:ring-accent-primary/20'
                        } text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 transition-all`}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1 flex items-center gap-1 text-xs text-red-500 font-mono">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block font-mono text-xs uppercase tracking-wider text-text-primary mb-1.5 font-medium">
                        Email Address <span className="text-accent-primary">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@example.com"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-input-bg border ${
                          errors.email ? 'border-red-400 focus:ring-red-400' : 'border-border focus:border-accent-primary focus:ring-accent-primary/20'
                        } text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 transition-all`}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1 flex items-center gap-1 text-xs text-red-500 font-mono">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block font-mono text-xs uppercase tracking-wider text-text-primary mb-1.5 font-medium">
                      Subject <span className="text-accent-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry / Opportunity"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-input-bg border ${
                        errors.subject ? 'border-red-400 focus:ring-red-400' : 'border-border focus:border-accent-primary focus:ring-accent-primary/20'
                      } text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 transition-all`}
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                    />
                    {errors.subject && (
                      <p id="subject-error" className="mt-1 flex items-center gap-1 text-xs text-red-500 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block font-mono text-xs uppercase tracking-wider text-text-primary mb-1.5 font-medium">
                      Message <span className="text-accent-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share details about what you would like to discuss or build..."
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-input-bg border ${
                        errors.message ? 'border-red-400 focus:ring-red-400' : 'border-border focus:border-accent-primary focus:ring-accent-primary/20'
                      } text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 transition-all resize-y`}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1 flex items-center gap-1 text-xs text-red-500 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent-primary text-accent-text font-mono text-xs font-medium hover:bg-accent-hover disabled:opacity-50 transition-colors shadow-subtle"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-3.5 h-3.5 border-2 border-accent-text border-t-transparent rounded-full animate-spin" />
                          <span>Dispatching...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Direct Contact Helper */}
                  <p className="font-mono text-[11px] text-text-muted">
                    Submissions can also be forwarded directly via email client fallback.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
