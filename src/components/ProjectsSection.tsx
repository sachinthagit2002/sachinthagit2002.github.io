import React, { useState } from 'react';
import {
  AlertCircle,
  ArrowUpRight,
  Award,
  BarChart3,
  CheckCircle2,
  Cpu,
  Database,
  ExternalLink,
  Layers,
  X,
} from 'lucide-react';
import { Project, PROJECTS } from '../data/projects';
import { ProjectVisual } from './ProjectVisual';

export const ProjectsSection: React.FC = () => {
  const featured = PROJECTS.find((p) => p.featured) ?? PROJECTS[0];
  const others = PROJECTS.filter((p) => p.id !== featured.id);

  const [activeTab, setActiveTab] = useState<'overview' | 'benchmarks' | 'stack'>('overview');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [zoomImage, setZoomImage] = useState<{ src: string; caption: string } | null>(null);

  return (
    <section id="projects" className="border-t border-slate-200/80 bg-white/60 py-16 sm:py-20 dark:border-slate-800/80 dark:bg-slate-900/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-teal-700 dark:text-teal-400">
              02 / Featured Projects
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
              Data Science, Machine Learning &amp; Software Systems
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Every project summary, technology tag, and metric below is verified directly against
              my source code repositories.
            </p>
          </div>
        </div>

        {/* FEATURED PROJECT: AUTO VALUATE */}
        <article className="mt-10 overflow-hidden rounded-2xl border border-teal-200/90 bg-white shadow-sm dark:border-teal-800/70 dark:bg-slate-900">
          <div className="border-b border-slate-200/80 bg-gradient-to-r from-teal-50/80 via-white to-slate-50 px-6 py-6 sm:px-8 dark:border-slate-800 dark:from-teal-950/35 dark:via-slate-900 dark:to-slate-900">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-teal-700 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white dark:bg-teal-500 dark:text-slate-950">
                    <Award className="h-3 w-3" />
                    Flagship Project · {featured.number}
                  </span>
                  <span className="rounded-full border border-slate-200 bg-white px-3 py-1 font-mono text-[11px] font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                    {featured.category}
                  </span>
                </div>
                <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
                  {featured.name}
                </h3>
                <p className="mt-1 text-base font-medium text-teal-800 dark:text-teal-300">
                  {featured.subtitle}
                </p>
              </div>

              <a
                href={featured.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-700 dark:bg-teal-500 dark:text-slate-950 dark:hover:bg-teal-400"
              >
                View GitHub Repository
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
              {featured.summary}
            </p>

            {/* Tabs */}
            <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Auto Valuate details">
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'overview'}
                onClick={() => setActiveTab('overview')}
                className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-semibold transition-colors ${
                  activeTab === 'overview'
                    ? 'bg-slate-900 text-white dark:bg-teal-500 dark:text-slate-950'
                    : 'border border-slate-200 bg-white text-slate-600 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300'
                }`}
              >
                <Layers className="h-3.5 w-3.5" />
                Problem, Pipeline &amp; Contribution
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'benchmarks'}
                onClick={() => setActiveTab('benchmarks')}
                className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-semibold transition-colors ${
                  activeTab === 'benchmarks'
                    ? 'bg-slate-900 text-white dark:bg-teal-500 dark:text-slate-950'
                    : 'border border-slate-200 bg-white text-slate-600 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300'
                }`}
              >
                <BarChart3 className="h-3.5 w-3.5" />
                Verified Model Benchmarks &amp; Charts
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'stack'}
                onClick={() => setActiveTab('stack')}
                className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-semibold transition-colors ${
                  activeTab === 'stack'
                    ? 'bg-slate-900 text-white dark:bg-teal-500 dark:text-slate-950'
                    : 'border border-slate-200 bg-white text-slate-600 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300'
                }`}
              >
                <Cpu className="h-3.5 w-3.5" />
                Architecture &amp; Tech Stack
              </button>
            </div>
          </div>

          <div className="min-w-0 p-6 sm:p-8">
            {activeTab === 'overview' && (
              <div className="grid gap-8 lg:grid-cols-12">
                <div className="space-y-6 lg:col-span-7">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Problem Statement
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {featured.problem}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Dataset &amp; Feature Engineering
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {featured.datasetInfo}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Development Process
                    </h4>
                    <ol className="mt-2 space-y-2.5">
                      {featured.processSteps?.map((step, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300"
                        >
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-50 font-mono text-[11px] font-bold text-teal-700 dark:bg-teal-950 dark:text-teal-300">
                            {index + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                <div className="space-y-6 lg:col-span-5">
                  {featured.uiScreenshot && (
                    <figure className="overflow-hidden rounded-xl border border-slate-200 bg-slate-950 shadow-sm dark:border-slate-800">
                      <button
                        type="button"
                        onClick={() => setZoomImage(featured.uiScreenshot!)}
                        className="group relative block w-full cursor-zoom-in overflow-hidden"
                        title="Click to enlarge AutoValuate UI screenshot"
                      >
                        <img
                          src={featured.uiScreenshot.src}
                          alt={featured.uiScreenshot.caption}
                          className="aspect-[16/9] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                        <span className="absolute bottom-2 right-2 rounded-md bg-slate-950/75 px-2 py-0.5 font-mono text-[10px] text-white backdrop-blur-sm">
                          Click to enlarge
                        </span>
                      </button>
                      <figcaption className="border-t border-slate-800 bg-white px-4 py-2.5 text-xs text-slate-600 dark:bg-slate-900 dark:text-slate-300">
                        {featured.uiScreenshot.caption}
                      </figcaption>
                    </figure>
                  )}

                  <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 dark:border-slate-800 dark:bg-slate-950/60">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Verified Features Implemented
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {featured.features.map((feat) => (
                        <li
                          key={feat}
                          className="flex items-start gap-2 text-xs leading-relaxed text-slate-700 dark:text-slate-300"
                        >
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-600 dark:text-teal-400" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      My Contribution
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                      {featured.contribution}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'benchmarks' && (
              <div className="min-w-0 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      Evaluated Regression Models (Test Set Results)
                    </h4>
                    <p className="mt-0.5 font-mono text-xs text-slate-500 dark:text-slate-400">
                      {featured.benchmarkDatasetNote}
                    </p>
                  </div>
                </div>

                <div className="max-w-full overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
                  <table className="min-w-full divide-y divide-slate-200 text-left text-sm dark:divide-slate-800">
                    <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:bg-slate-950 dark:text-slate-400">
                      <tr>
                        <th className="px-4 py-3">Estimator</th>
                        <th className="px-4 py-3">R² Score</th>
                        <th className="px-4 py-3">MAPE (Lower Better)</th>
                        <th className="px-4 py-3">MAE</th>
                        <th className="px-4 py-3">RMSE</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 bg-white dark:divide-slate-800 dark:bg-slate-900">
                      {featured.benchmarks?.map((row) => (
                        <tr
                          key={row.model}
                          className={
                            row.isBest ? 'bg-teal-50/50 dark:bg-teal-950/25' : undefined
                          }
                        >
                          <td className="px-4 py-3 font-semibold text-slate-900 dark:text-white">
                            <span>{row.model}</span>
                            {row.isBest && (
                              <span className="ml-2 rounded bg-teal-700 px-1.5 py-0.5 font-mono text-[10px] font-bold text-white dark:bg-teal-500 dark:text-slate-950">
                                SELECTED
                              </span>
                            )}
                          </td>
                          <td className="px-4 py-3 font-mono text-xs text-slate-700 dark:text-slate-300">
                            {row.r2}
                          </td>
                          <td className="px-4 py-3 font-mono text-xs font-semibold text-teal-700 dark:text-teal-400">
                            {row.mape}
                          </td>
                          <td className="px-4 py-3 font-mono text-xs text-slate-600 dark:text-slate-300">
                            {row.mae}
                          </td>
                          <td className="px-4 py-3 font-mono text-xs text-slate-600 dark:text-slate-300">
                            {row.rmse}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {featured.screenshots && (
                  <div className="grid gap-6 md:grid-cols-2">
                    {featured.screenshots.map((shot) => (
                      <figure
                        key={shot.src}
                        className="overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950"
                      >
                        <button
                          type="button"
                          onClick={() => setZoomImage(shot)}
                          className="block w-full cursor-zoom-in bg-white p-3 transition-opacity hover:opacity-95"
                          title="Click to enlarge chart"
                        >
                          <img
                            src={shot.src}
                            alt={shot.caption}
                            className="h-56 w-full object-contain"
                            loading="lazy"
                          />
                        </button>
                        <figcaption className="border-t border-slate-100 px-4 py-2.5 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
                          {shot.caption}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'stack' && (
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Multi-Service Architecture
                  </h4>
                  <div className="space-y-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                    <div className="rounded-xl border border-slate-200 p-4 dark:border-slate-800">
                      <p className="font-bold text-slate-900 dark:text-white">
                        1. Python Flask ML Microservice (Port 5001)
                      </p>
                      <p className="mt-1">
                        Data preprocessing, grouped IQR outlier purge, model training/comparison
                        (CatBoost, XGBoost, LightGBM, Random Forest, Extra Trees, Gradient Boosting),
                        SHAP explanations, Mahalanobis OOD check, and Hybrid RAG + NLI Guardrail.
                      </p>
                    </div>
                    <div className="rounded-xl border border-slate-200 p-4 dark:border-slate-800">
                      <p className="font-bold text-slate-900 dark:text-white">
                        2. Node.js + Express REST Backend (Port 5000) &amp; MongoDB
                      </p>
                      <p className="mt-1">
                        JWT authentication with bcryptjs, role-based admin controls, rate limiting,
                        prediction history persistence, audit logging, and scraper orchestration.
                      </p>
                    </div>
                    <div className="rounded-xl border border-slate-200 p-4 dark:border-slate-800">
                      <p className="font-bold text-slate-900 dark:text-white">
                        3. React 18 + Redux Toolkit + Recharts Frontend
                      </p>
                      <p className="mt-1">
                        Interactive vehicle valuation form, SHAP waterfall chart visualization,
                        market explorer, analytics dashboard, and Docker Compose orchestration.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Verified Technologies Used
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {featured.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 font-mono text-xs font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-5 dark:border-slate-800">
              {featured.technologies.slice(0, 8).map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-slate-100 px-2.5 py-1 font-mono text-[11px] font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
              {featured.technologies.length > 8 && (
                <button
                  type="button"
                  onClick={() => setActiveTab('stack')}
                  className="rounded-md border border-slate-200 px-2.5 py-1 font-mono text-[11px] text-teal-700 hover:bg-teal-50 dark:border-slate-700 dark:text-teal-400"
                >
                  +{featured.technologies.length - 8} more
                </button>
              )}
            </div>
          </div>
        </article>

        {/* OTHER 4 PROJECTS */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {others.map((project) => (
            <article
              key={project.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs font-semibold text-teal-700 dark:text-teal-400">
                    PROJECT {project.number} · {project.year}
                  </span>
                  <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    {project.category}
                  </span>
                </div>

                <h3 className="mt-3 text-xl font-bold text-slate-900 dark:text-white">
                  {project.name}
                </h3>
                <p className="mt-0.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                  {project.subtitle}
                </p>

                <div className="mt-4">
                  <ProjectVisual type={project.visualType} />
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.summary}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {project.features.slice(0, 3).map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400"
                    >
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-600 dark:text-teal-400" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {project.repoScopeNote && (
                  <div className="mt-4 flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50/70 p-3 text-[11px] leading-relaxed text-amber-900 dark:border-amber-900/60 dark:bg-amber-950/30 dark:text-amber-200">
                    <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                    <span>{project.repoScopeNote}</span>
                  </div>
                )}
              </div>

              <div className="mt-6 border-t border-slate-100 pt-4 dark:border-slate-800">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-slate-100 px-2 py-0.5 font-mono text-[11px] text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-teal-700 hover:text-teal-900 dark:text-teal-400 dark:hover:text-teal-300"
                  >
                    Objectives &amp; Details
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>

                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-800 transition-colors hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-teal-400 dark:hover:bg-teal-500 dark:hover:text-slate-950"
                  >
                    View GitHub
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* PROJECT DETAILS MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4 dark:border-slate-800">
              <div>
                <p className="font-mono text-xs text-teal-700 dark:text-teal-400">
                  {selectedProject.category} · {selectedProject.year}
                </p>
                <h3
                  id="modal-project-title"
                  className="mt-1 text-xl font-bold text-slate-900 dark:text-white"
                >
                  {selectedProject.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {selectedProject.subtitle}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label="Close project details"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-5 space-y-5 text-sm">
              <div>
                <h4 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
                  <Database className="h-3.5 w-3.5" />
                  Problem &amp; Objectives
                </h4>
                <p className="mt-1.5 text-slate-600 dark:text-slate-300">
                  {selectedProject.problem}
                </p>
                <ul className="mt-2 space-y-1.5">
                  {selectedProject.objectives.map((obj) => (
                    <li
                      key={obj}
                      className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300"
                    >
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-600 dark:text-teal-400" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Verified Features
                </h4>
                <ul className="mt-2 space-y-1.5">
                  {selectedProject.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300"
                    >
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-600 dark:text-teal-400" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  My Contribution
                </h4>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  {selectedProject.contribution}
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3 border-t border-slate-100 pt-4 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                Close
              </button>
              <a
                href={selectedProject.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-teal-700 dark:bg-teal-500 dark:text-slate-950"
              >
                Open Repository
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* IMAGE LIGHTBOX */}
      {zoomImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setZoomImage(null)}
        >
          <div
            className="max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 dark:border-slate-800">
              <p className="text-xs font-medium text-slate-700 dark:text-slate-300">
                {zoomImage.caption}
              </p>
              <button
                type="button"
                onClick={() => setZoomImage(null)}
                className="rounded p-1 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label="Close chart preview"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="bg-white p-4">
              <img src={zoomImage.src} alt={zoomImage.caption} className="max-h-[75vh] w-auto mx-auto" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
