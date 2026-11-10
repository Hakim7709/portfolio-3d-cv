'use client';

import React from 'react';
import { CANDIDATE_DATA } from '@/data/candidate';
import { Layers, ExternalLink, Zap, CheckCircle2 } from 'lucide-react';

export function ProjectsStage() {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center px-4 py-24 relative z-10 text-white">
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-12 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            Waypoint 4 • Real-World Engineering
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-3">
            Featured Production Systems
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
            Live systems delivering measurable automation in enterprise fast-casual operations, messaging, and data processing.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CANDIDATE_DATA.projects.map((project, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-6 sm:p-7 bg-slate-900/85 border border-white/10 backdrop-blur-xl relative flex flex-col justify-between hover:border-cyan-500/40 transition duration-300 group shadow-xl"
            >
              <div>
                {/* Metric / Impact Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-medium mb-4">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  {project.metrics}
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition">
                  {project.title}
                </h3>

                <p className="text-xs text-amber-400/90 font-mono mb-3">
                  {project.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-xs text-slate-300 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="flex items-center justify-between border-t border-white/10 pt-4 text-xs font-semibold">
                  <span className="inline-flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified Architecture
                  </span>

                  <a
                    href={CANDIDATE_DATA.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition"
                  >
                    Request Live Demo <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
