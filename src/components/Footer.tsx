import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { PROFILE } from '../data/profile';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-white py-10 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="text-center sm:text-left">
          <p className="text-sm font-bold text-slate-900 dark:text-white">{PROFILE.name}</p>
          <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
            {PROFILE.title} · {PROFILE.location}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={`mailto:${PROFILE.email}`}
            aria-label="Email"
            className="text-slate-500 transition-colors hover:text-teal-700 dark:text-slate-400 dark:hover:text-teal-400"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-500 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>

        <p className="font-mono text-xs text-slate-400">
          © {new Date().getFullYear()} sachinthadanuka.com
        </p>
      </div>
    </footer>
  );
};
