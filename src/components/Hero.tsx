import React, { useState } from 'react';
import {
  ArrowRight,
  BarChart3,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { PROFILE } from '../data/profile';

export const Hero: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="top"
      className="bg-analytical-grid relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50/90 px-3.5 py-1.5 text-xs font-semibold text-teal-800 dark:border-teal-800/70 dark:bg-teal-950/60 dark:text-teal-300">
              <span className="h-2 w-2 rounded-full bg-teal-600 dark:bg-teal-400" />
              <span>Open to Data Analyst Internships &amp; Graduate Opportunities</span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl sm:leading-[1.12] dark:text-white">
              {PROFILE.name}
            </h1>

            <p className="mt-3 text-lg font-semibold text-teal-700 sm:text-xl dark:text-teal-400">
              {PROFILE.title}
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                {PROFILE.location}
              </span>
              <span className="text-slate-300 dark:text-slate-700">|</span>
              <span className="font-mono text-xs">BSc (Hons) Data Science (In Progress)</span>
            </div>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
              {PROFILE.heroIntro}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-teal-700 dark:bg-teal-500 dark:text-slate-950 dark:hover:bg-teal-400"
              >
                View My Projects
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={PROFILE.cvPdfPath}
                download="Sachintha-Danuka-Karunathilaka-CV.pdf"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-teal-500 hover:text-teal-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-teal-400 dark:hover:text-teal-300"
              >
                <Download className="h-4 w-4" />
                Download My CV
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-transparent px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/70 dark:hover:text-white"
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-slate-200/80 pt-6 dark:border-slate-800/80">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Profiles
              </span>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-white"
              >
                <Github className="h-3.5 w-3.5" />
                GitHub ({PROFILE.githubHandle})
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-blue-400 hover:text-blue-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:text-blue-400"
              >
                <Linkedin className="h-3.5 w-3.5" />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="min-w-0 lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/90">
              <div className="flex items-center gap-4 border-b border-slate-100 pb-5 dark:border-slate-800">
                {!imgError ? (
                  <img
                    src={PROFILE.profileImage}
                    alt={`${PROFILE.name} graduation portrait`}
                    onError={() => setImgError(true)}
                    className="h-24 w-24 shrink-0 rounded-2xl border border-teal-200 object-cover object-[50%_20%] shadow-sm dark:border-teal-700/60"
                  />
                ) : (
                  <div
                    className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border border-teal-200 bg-slate-900 text-2xl font-extrabold tracking-tight text-white dark:border-teal-700/60 dark:bg-teal-500/15 dark:text-teal-300"
                    aria-label="Initials monogram SD"
                  >
                    {PROFILE.initials}
                  </div>
                )}
                <div className="min-w-0">
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    {PROFILE.shortName}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Data Science · Software Engineering
                  </p>
                  <div className="mt-1.5 inline-flex items-center gap-1 rounded bg-slate-100 px-2 py-0.5 font-mono text-[11px] text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                    <span>Python</span>
                    <span>·</span>
                    <span>SQL</span>
                    <span>·</span>
                    <span>ML &amp; XAI</span>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400">
                    <Sparkles className="h-3.5 w-3.5" />
                    Featured Final-Year Project
                  </span>
                  <span className="font-mono text-[11px] text-slate-400">CS6P05ES</span>
                </div>
                <p className="mt-1.5 text-base font-bold text-slate-900 dark:text-white">
                  Auto Valuate — Sri Lankan Used Car Valuation
                </p>
                <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                  Real-world web scraping, IQR outlier filtering, multi-model regression benchmarking,
                  SHAP explainability &amp; full-stack integration.
                </p>

                <div className="mt-4 grid grid-cols-3 gap-2.5">
                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-950/60">
                    <p className="font-mono text-[10px] uppercase text-slate-400">Best Model</p>
                    <p className="mt-0.5 text-sm font-bold text-slate-900 dark:text-white">
                      CatBoost
                    </p>
                    <p className="font-mono text-[11px] text-teal-700 dark:text-teal-400">
                      R² 0.948
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-950/60">
                    <p className="font-mono text-[10px] uppercase text-slate-400">Test MAPE</p>
                    <p className="mt-0.5 text-sm font-bold text-slate-900 dark:text-white">8.17%</p>
                    <p className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
                      5 Models
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-950/60">
                    <p className="font-mono text-[10px] uppercase text-slate-400">Dataset</p>
                    <p className="mt-0.5 text-sm font-bold text-slate-900 dark:text-white">655</p>
                    <p className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
                      Clean Ads
                    </p>
                  </div>
                </div>

                <a
                  href="#projects"
                  className="mt-4 flex items-center justify-between rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs font-semibold text-slate-700 transition-colors hover:border-teal-500 hover:text-teal-700 dark:border-slate-800 dark:text-slate-300 dark:hover:border-teal-400 dark:hover:text-teal-300"
                >
                  <span className="inline-flex items-center gap-2">
                    <BarChart3 className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400" />
                    Explore Auto Valuate Case Study &amp; 4 More Projects
                  </span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
