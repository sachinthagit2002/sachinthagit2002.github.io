import React from 'react';
import { BookOpen, Code2, Cpu, Database } from 'lucide-react';
import { LEARNING_INTERESTS, SKILL_CATEGORIES } from '../data/skills';

const ICONS: Record<string, React.ReactNode> = {
  'data-analytics': <Database className="h-5 w-5 text-teal-600 dark:text-teal-400" />,
  'machine-learning': <Cpu className="h-5 w-5 text-teal-600 dark:text-teal-400" />,
  'software-dev': <Code2 className="h-5 w-5 text-teal-600 dark:text-teal-400" />,
};

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-teal-700 dark:text-teal-400">
            03 / Technical Skills
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
            Verified Tools &amp; Technical Capabilities
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Skills listed below are backed directly by coursework, completed certificates, and
            implemented GitHub repositories.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 dark:bg-teal-950/60">
                  {ICONS[category.id]}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
              </div>
              <p className="mt-2.5 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                {category.description}
              </p>

              <ul className="mt-5 space-y-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="rounded-xl border border-slate-100 bg-slate-50/70 px-3.5 py-2.5 dark:border-slate-800 dark:bg-slate-950/60"
                  >
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                      {skill.name}
                    </p>
                    <p className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">
                      Applied in: {skill.evidence}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Learning Interests — kept explicitly separate from verified skills */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-teal-600 dark:text-teal-400" />
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                Active Learning Interests &amp; Next Tools
              </h3>
            </div>
            <span className="font-mono text-[11px] text-slate-400">
              Exploring alongside Data Science studies
            </span>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {LEARNING_INTERESTS.map((item) => (
              <div
                key={item.name}
                className="rounded-xl border border-dashed border-slate-300 bg-slate-50/60 px-3.5 py-2.5 dark:border-slate-700 dark:bg-slate-950/40"
              >
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200">{item.name}</p>
                <p className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
