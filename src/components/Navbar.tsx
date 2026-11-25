import React, { useState, useEffect } from 'react';
import { Download, Menu, Moon, Sun, X } from 'lucide-react';
import { PROFILE } from '../data/profile';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'CV', href: '#cv' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return false;
  });
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/85">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="group flex items-center gap-2.5 focus:outline-none"
          aria-label="Sachintha Danuka home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold tracking-tight text-white transition-colors group-hover:bg-teal-700 dark:bg-teal-500 dark:text-slate-950 dark:group-hover:bg-teal-400">
            {PROFILE.initials}
          </span>
          <div className="hidden sm:block">
            <p className="text-sm font-bold leading-tight text-slate-900 dark:text-white">
              {PROFILE.shortName}
            </p>
            <p className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
              sachinthadanuka.com
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/70 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setDark((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <a
            href={PROFILE.cvPdfPath}
            download="Sachintha-Danuka-Karunathilaka-CV.pdf"
            className="hidden items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-teal-700 dark:bg-teal-500 dark:text-slate-950 dark:hover:bg-teal-400 sm:inline-flex"
          >
            <Download className="h-3.5 w-3.5" />
            Download CV
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 md:hidden dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden dark:border-slate-800 dark:bg-slate-950">
          <nav className="flex flex-col space-y-1" aria-label="Mobile navigation">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900"
              >
                {item.label}
              </a>
            ))}
            <a
              href={PROFILE.cvPdfPath}
              download="Sachintha-Danuka-Karunathilaka-CV.pdf"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white dark:bg-teal-500 dark:text-slate-950"
            >
              <Download className="h-4 w-4" />
              Download CV (PDF)
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
