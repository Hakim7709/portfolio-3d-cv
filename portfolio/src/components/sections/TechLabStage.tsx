'use client';

import React from 'react';
import { CANDIDATE_DATA } from '@/data/candidate';
import { Terminal, Code, Cpu, Database, Wrench, Sparkles, Check } from 'lucide-react';

export function TechLabStage() {
  return (
    <section id="tech-lab" className="min-h-screen flex flex-col justify-center px-4 py-24 relative z-10 text-white">
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-12 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Terminal className="w-3.5 h-3.5" />
            Waypoint 3 • Software & Automation Suite
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-3">
            IT & Full-Stack Automation Lab
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
            Where enterprise operations meets clean code: building automated scrapers, web dashboards, and real-time messaging services.
          </p>
        </div>

        {/* 4 Tech Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Pillar 1: Full-Stack Web */}
          <div className="rounded-2xl p-6 bg-slate-900/80 border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-cyan-500/40 transition">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 border border-cyan-500/30">
              <Code className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Modern Web Engineering</h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
              Production interfaces crafted with Next.js 15, React 19, TypeScript, and responsive Tailwind CSS with sub-second loading speeds.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map((tag, i) => (
                <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-cyan-300 font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Pillar 2: Python & Automation */}
          <div className="rounded-2xl p-6 bg-slate-900/80 border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-amber-500/40 transition">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 mb-4 border border-amber-500/30">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Python Automation & Bots</h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
              End-to-end browser automation using Playwright and Python scripts to eliminate manual administrative data entry and scrape real-time market data.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['Python 3.12', 'Playwright', 'Selenium', 'Web Scraping', 'Task Scheduler'].map((tag, i) => (
                <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-amber-300 font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Pillar 3: Backend & Messaging APIs */}
          <div className="rounded-2xl p-6 bg-slate-900/80 border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-emerald-500/40 transition">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 border border-emerald-500/30">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Backend & WhatsApp Cloud API</h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
              Resilient Node.js and Express REST microservices connected to official WhatsApp Business API endpoints for transactional alerts.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['Node.js', 'Express', 'WhatsApp API', 'PostgreSQL', 'MySQL'].map((tag, i) => (
                <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-emerald-300 font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Pillar 4: Systems & Hardware Maintenance */}
          <div className="rounded-2xl p-6 bg-slate-900/80 border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-indigo-500/40 transition">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4 border border-indigo-500/30">
              <Wrench className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">IT Hardware & Network Support</h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
              Proven ability to configure multi-router networks via Cloudflare tunnels, calibrate POS touch terminals, and troubleshoot operational hardware.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['POS Systems', 'Network Routers', 'Cloudflare Tunnels', 'Linux/Windows', 'Hardware Diagnostics'].map((tag, i) => (
                <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-indigo-300 font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Banner */}
        <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span className="text-sm font-semibold text-slate-200">Verified Professional Training:</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {CANDIDATE_DATA.skills.certifications.map((cert, idx) => (
              <span key={idx} className="inline-flex items-center gap-1.5 text-xs text-slate-300">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

