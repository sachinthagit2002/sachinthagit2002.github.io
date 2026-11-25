import React, { useState } from 'react';
import { Check, Copy, Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { PROFILE } from '../data/profile';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('Data Analyst Internship / Opportunity');
  const [message, setMessage] = useState('');

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable fallback
    }
  };

  const mailtoHref = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(message)}`;

  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-teal-700 dark:text-teal-400">
            08 / Contact
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
            Get in Touch
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            I welcome inquiries regarding Data Analyst internships, graduate roles, and academic or
            technical collaborations.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <div className="min-w-0 space-y-4 lg:col-span-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 dark:border-slate-800 dark:bg-slate-900">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-950/60">
                  <div className="flex min-w-0 flex-1 items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-300">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        Email
                      </p>
                      <a
                        href={`mailto:${PROFILE.email}`}
                        className="block break-all text-sm font-semibold text-slate-900 hover:text-teal-700 dark:text-white dark:hover:text-teal-400"
                      >
                        {PROFILE.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-teal-600" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        Copy
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-950/60">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-300">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      Location
                    </p>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      {PROFILE.location}
                    </p>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <a
                    href={PROFILE.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-slate-900 dark:border-slate-800 dark:bg-slate-950/60 dark:hover:border-teal-400"
                  >
                    <Github className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-400">GitHub</p>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">
                        {PROFILE.githubHandle}
                      </p>
                    </div>
                  </a>

                  <a
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-blue-600 dark:border-slate-800 dark:bg-slate-950/60 dark:hover:border-blue-400"
                  >
                    <Linkedin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-400">LinkedIn</p>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">
                        Sachintha Karunathilaka
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="min-w-0 lg:col-span-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Compose an Email
              </h3>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Opens your default email application pre-addressed to{' '}
                <span className="font-mono">{PROFILE.email}</span>.
              </p>

              <div className="mt-4 space-y-4">
                <div>
                  <label
                    htmlFor="email-subject"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Subject
                  </label>
                  <input
                    id="email-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-teal-600 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email-message"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="email-message"
                    rows={4}
                    placeholder="Hello Sachintha, I would like to connect regarding..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-teal-600 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  />
                </div>

                <a
                  href={mailtoHref}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-700 dark:bg-teal-500 dark:text-slate-950 dark:hover:bg-teal-400"
                >
                  <Send className="h-4 w-4" />
                  Open in Email Client
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
