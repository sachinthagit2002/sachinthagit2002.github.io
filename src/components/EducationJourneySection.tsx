import React from 'react';
import { Calendar, ExternalLink, GraduationCap, Milestone } from 'lucide-react';
import { EDUCATION } from '../data/education';
import { JOURNEY_TIMELINE } from '../data/journey';

export const EducationJourneySection: React.FC = () => {
  return (
    <section
      id="education"
      className="border-t border-slate-200/80 bg-white/60 py-16 sm:py-20 dark:border-slate-800/80 dark:bg-slate-900/30"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* EDUCATION */}
          <div className="lg:col-span-6">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-teal-700 dark:text-teal-400">
              04 / Education
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
              Academic Qualifications
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Presented in reverse chronological order.
            </p>

            <div className="mt-8 space-y-5">
              {EDUCATION.map((edu) => (
                <article
                  key={edu.id}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold ${
                        edu.status === 'In Progress'
                          ? 'bg-teal-50 text-teal-800 dark:bg-teal-950 dark:text-teal-300'
                          : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                      }`}
                    >
                      <GraduationCap className="h-3.5 w-3.5" />
                      {edu.status}
                    </span>
                    <span className="inline-flex items-center gap-1 font-mono text-xs text-slate-500 dark:text-slate-400">
                      <Calendar className="h-3.5 w-3.5" />
                      {edu.period}
                    </span>
                  </div>

                  <h3 className="mt-3 text-lg font-bold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <p className="mt-0.5 text-sm font-semibold text-teal-700 dark:text-teal-400">
                    {edu.institution}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {edu.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600 dark:bg-teal-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          {/* JOURNEY TIMELINE */}
          <div className="min-w-0 lg:col-span-6">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-teal-700 dark:text-teal-400">
              05 / Experience &amp; Journey
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
              Experience &amp; Learning Timeline
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Industry internship experience alongside academic Data Science and software
              engineering milestones.
            </p>

            <div className="relative mt-8 space-y-6 border-l-2 border-slate-200 pl-6 dark:border-slate-800">
              {JOURNEY_TIMELINE.map((step) => (
                <div key={step.title} className="relative">
                  <span
                    className={`absolute -left-[33px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                      step.highlight
                        ? 'border-teal-600 bg-teal-600 dark:border-teal-400 dark:bg-teal-400'
                        : 'border-slate-300 bg-white dark:border-slate-700 dark:bg-slate-900'
                    }`}
                  >
                    <Milestone className="h-2.5 w-2.5 text-white opacity-0" />
                  </span>

                  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <span className="font-mono text-[11px] font-semibold text-teal-700 dark:text-teal-400">
                      {step.period}
                    </span>
                    <h3 className="mt-1 text-base font-bold text-slate-900 dark:text-white">
                      {step.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        {step.context}
                      </p>
                      {step.url && (
                        <a
                          href={step.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-mono text-[11px] font-semibold text-teal-700 hover:underline dark:text-teal-400"
                        >
                          itexphere.com
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                      {step.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {step.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded bg-slate-100 px-2 py-0.5 font-mono text-[10px] text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
