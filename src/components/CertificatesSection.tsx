import React, { useState } from 'react';
import { Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import { CERTIFICATES, CertificateItem } from '../data/certificates';

const CATEGORIES: Array<'All' | CertificateItem['category']> = [
  'All',
  'Data & SQL',
  'Communication',
];

export const CertificatesSection: React.FC = () => {
  const [filter, setFilter] = useState<'All' | CertificateItem['category']>('All');

  const visible =
    filter === 'All'
      ? CERTIFICATES
      : CERTIFICATES.filter((c) => c.category === filter);

  return (
    <section id="certificates" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-teal-700 dark:text-teal-400">
              06 / Certificates &amp; Learning
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
              Verified Courses &amp; Continuous Upskilling
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Documented course completions strengthening SQL analytics, database querying, and
              professional communication.
            </p>
          </div>

          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter certificates">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                  filter === cat
                    ? 'bg-slate-900 text-white dark:bg-teal-500 dark:text-slate-950'
                    : 'border border-slate-200 bg-white text-slate-600 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((cert) => (
            <article
              key={cert.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-2.5 py-0.5 text-[11px] font-semibold text-teal-800 dark:bg-teal-950 dark:text-teal-300">
                    <Award className="h-3 w-3" />
                    {cert.issuer}
                  </span>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                    {cert.date}
                  </span>
                </div>

                <h3 className="mt-3 text-base font-bold leading-snug text-slate-900 dark:text-white">
                  {cert.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  {cert.description}
                </p>
              </div>

              <div className="mt-4 border-t border-slate-100 pt-3 dark:border-slate-800">
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center gap-1 rounded bg-slate-100 px-2 py-0.5 font-mono text-[10px] text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      <CheckCircle2 className="h-2.5 w-2.5 text-teal-600 dark:text-teal-400" />
                      {s}
                    </span>
                  ))}
                </div>
                {cert.credentialId && (
                  <p className="mt-2.5 flex items-center gap-1 truncate font-mono text-[10px] text-slate-400" title={cert.credentialId}>
                    <ShieldCheck className="h-3 w-3 shrink-0 text-teal-600 dark:text-teal-400" />
                    <span className="truncate">ID: {cert.credentialId}</span>
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
