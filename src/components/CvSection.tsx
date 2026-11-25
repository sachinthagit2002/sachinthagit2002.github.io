import React from 'react';
import { Download, ExternalLink, FileText } from 'lucide-react';
import { PROFILE } from '../data/profile';
import { EDUCATION } from '../data/education';

export const CvSection: React.FC = () => {
  return (
    <section
      id="cv"
      className="border-t border-slate-200/80 bg-white/60 py-16 sm:py-20 dark:border-slate-800/80 dark:bg-slate-900/30"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-teal-700 dark:text-teal-400">
              07 / Curriculum Vitae
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
              Updated Professional CV
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              My CV is tailored for Data Analyst internships and graduate opportunities—highlighting
              my BSc (Hons) Data Science top-up studies, Higher Diploma in Computing and Software
              Engineering, Auto Valuate research project, and verified SQL &amp; Python experience.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={PROFILE.cvPdfPath}
                download="Sachintha-Danuka-Karunathilaka-CV.pdf"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-teal-700 dark:bg-teal-500 dark:text-slate-950 dark:hover:bg-teal-400"
              >
                <Download className="h-4 w-4" />
                Download CV (PDF)
              </a>

              <a
                href={PROFILE.cvDocxPath}
                download="Sachintha-Danuka-Karunathilaka-CV.docx"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-teal-500 hover:text-teal-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-teal-400"
              >
                <FileText className="h-4 w-4" />
                Download DOCX
              </a>

              <a
                href={PROFILE.cvPdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl px-3 py-3 text-sm font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              >
                Open PDF
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className="min-w-0 lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex flex-wrap items-start justify-between gap-2 border-b border-slate-200 pb-4 dark:border-slate-800">
                <div className="min-w-0">
                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                    {PROFILE.name}
                  </h3>
                  <p className="text-xs font-semibold text-teal-700 dark:text-teal-400">
                    {PROFILE.title}
                  </p>
                </div>
                <div className="text-left font-mono text-[11px] text-slate-500 sm:text-right dark:text-slate-400">
                  <p>{PROFILE.location}</p>
                  <p>{PROFILE.email}</p>
                  <p>{PROFILE.mobile}</p>
                </div>
              </div>

              <div className="mt-4 space-y-4 text-xs">
                <div>
                  <p className="font-bold uppercase tracking-wider text-slate-400">
                    Professional Summary
                  </p>
                  <p className="mt-1 leading-relaxed text-slate-600 dark:text-slate-300">
                    Data Science undergraduate (BSc Hons Top-Up) with a Higher Diploma in Computing
                    and Software Engineering (2023–2025) and completed internship experience as a
                    Software Engineering Intern &amp; Full-Stack Developer at iTexphere. Experienced
                    in SQL querying, Python data cleaning, ML evaluation, and SHAP explainability.
                  </p>
                </div>

                <div>
                  <p className="font-bold uppercase tracking-wider text-slate-400">Experience</p>
                  <div className="mt-1.5 flex items-baseline justify-between gap-2">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      Software Engineering Intern &amp; Full-Stack Developer —{' '}
                      <a
                        href="https://www.itexphere.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-700 hover:underline dark:text-teal-400"
                      >
                        iTexphere
                      </a>
                    </span>
                    <span className="shrink-0 font-mono text-[11px] text-slate-500">
                      Mar – Oct 2026
                    </span>
                  </div>
                </div>

                <div>
                  <p className="font-bold uppercase tracking-wider text-slate-400">Education</p>
                  <div className="mt-1.5 space-y-1.5">
                    {EDUCATION.map((edu) => (
                      <div key={edu.id} className="flex items-baseline justify-between gap-2">
                        <span className="font-semibold text-slate-800 dark:text-slate-200">
                          {edu.degree} — {edu.institution}
                        </span>
                        <span className="shrink-0 font-mono text-[11px] text-slate-500">
                          {edu.period}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-3 border-t border-slate-100 pt-3 sm:grid-cols-2 dark:border-slate-800">
                  <div>
                    <p className="font-bold uppercase tracking-wider text-slate-400">
                      Core Analytics &amp; ML
                    </p>
                    <p className="mt-1 text-slate-600 dark:text-slate-300">
                      SQL, MySQL, SQL Server, Python (Pandas, NumPy, Scikit-learn), CatBoost,
                      XGBoost, SHAP, Web Scraping
                    </p>
                  </div>
                  <div>
                    <p className="font-bold uppercase tracking-wider text-slate-400">Languages</p>
                    <p className="mt-1 text-slate-600 dark:text-slate-300">
                      Sinhala (Native) · English (The Language Key, 2024)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
