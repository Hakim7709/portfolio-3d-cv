'use client';

import React from 'react';
import { CANDIDATE_DATA } from '@/data/candidate';
import { ShieldCheck, Award, Users, Flame, Clock, CheckCircle, ChevronRight } from 'lucide-react';

export function AlbaikStage() {
  const albaik = CANDIDATE_DATA.experience[0];

  return (
    <section id="albaik" className="min-h-screen flex flex-col justify-center px-4 py-24 relative z-10 text-white">
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-12 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            Waypoint 2 • Operations Excellence
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-3">
            Albaik 6-Year Leadership Arena
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
            Managing high-octane operations, crew training, and gold-standard food safety at Saudi Arabia’s premier QSR brand.
          </p>
        </div>

        {/* Highlight Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
            <Clock className="w-6 h-6 text-amber-400 mb-2" />
            <div className="text-3xl sm:text-4xl font-extrabold text-white">6+ Yrs</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Continuous Leadership</div>
          </div>
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
            <Users className="w-6 h-6 text-cyan-400 mb-2" />
            <div className="text-3xl sm:text-4xl font-extrabold text-white">25+</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Crew Coached / Shift</div>
          </div>
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
            <ShieldCheck className="w-6 h-6 text-emerald-400 mb-2" />
            <div className="text-3xl sm:text-4xl font-extrabold text-white">100%</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">HACCP & Hygiene Compliance</div>
          </div>
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
            <Flame className="w-6 h-6 text-rose-400 mb-2" />
            <div className="text-3xl sm:text-4xl font-extrabold text-white">45 Min</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Saved via Auto-Checklists</div>
          </div>
        </div>

        {/* Detailed Role Breakdown Card */}
        <div className="rounded-3xl bg-slate-900/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
            <div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                {albaik.company}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mt-2 text-white">
                {albaik.role}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                {albaik.location} • <span className="text-cyan-400 font-medium">{albaik.period}</span>
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 w-fit">
              <CheckCircle className="w-3.5 h-3.5" /> Active Operational Leader
            </div>
          </div>

          {/* Key Achievements Bullet Points */}
          <div className="space-y-3.5 mb-8">
            {albaik.achievements.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                <div className="mt-1 w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0 border border-amber-500/40">
                  <ChevronRight className="w-3 h-3 text-amber-300" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Operational Skills Badges */}
          <div className="border-t border-white/10 pt-6">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-3">
              Mastered Operational Competencies:
            </h4>
            <div className="flex flex-wrap gap-2">
              {CANDIDATE_DATA.skills.operations.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-medium text-slate-300 hover:border-amber-400/50 hover:text-white transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
