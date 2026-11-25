import React from 'react';
import { CheckCircle2, Compass, Database, Layers } from 'lucide-react';
import { PROFILE } from '../data/profile';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-teal-700 dark:text-teal-400">
            01 / About Me
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
            Bridging Software Engineering &amp; Data Analytics
          </h2>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-7">
            {PROFILE.aboutParagraphs.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-base leading-relaxed text-slate-600 dark:text-slate-300"
              >
                {paragraph}
              </p>
            ))}

            <div className="grid gap-4 pt-4 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
                  <Layers className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                  Engineering Foundation
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                  Higher Diploma in Computing &amp; Software Engineering (2023–2025), building
                  relational schemas, REST APIs, MVC apps, and mobile systems.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
                  <Database className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                  Data Science Focus
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                  BSc (Hons) Data Science top-up undergraduate focusing on data preprocessing, SQL
                  analytics, predictive modeling, and explainable AI.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                <Compass className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                Core Analytical Interests &amp; Career Focus
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                Areas I actively study and apply across my academic projects as I prepare for a
                Data Analyst career:
              </p>
              <ul className="mt-4 space-y-2.5">
                {PROFILE.careerInterests.map((interest) => (
                  <li
                    key={interest}
                    className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400" />
                    <span>{interest}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
