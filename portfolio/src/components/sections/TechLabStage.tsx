'use client';

import React from 'react';
import { CANDIDATE_DATA } from '@/data/candidate';
import { Terminal, Code, Cpu, Database, Wrench, Sparkles, Check, Bot, Zap } from 'lucide-react';

export function TechLabStage() {
  return (
    <section id="tech-lab" className="min-h-screen flex flex-col justify-center px-4 py-24 relative z-10 text-white">
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-12 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Terminal className="w-3.5 h-3.5" />
            Waypoint 3 • AI Mastery & Software Automation Suite
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-3">
            AI Engineering & IT Automation Lab
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
            Where enterprise operations meets clean code and Generative AI: engineering autonomous scrapers, web dashboards, and AI-accelerated workflows.
          </p>
        </div>

        {/* Highlight Feature: Master User of AI Hero Card */}
        <div className="mb-8 rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-purple-950/60 via-slate-900/90 to-cyan-950/60 border border-purple-500/30 backdrop-blur-xl relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/30">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-purple-400">
                  <Sparkles className="w-3 h-3 text-amber-400" /> Core Superpower
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  Master User of AI & Generative Engineering
                </h3>
              </div>
            </div>
            <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300">
              Next-Gen AI Operator
            </span>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-5 max-w-3xl">
            Proficient at harnessing state-of-the-art Large Language Models, advanced prompt engineering, and multimodal AI vision to supercharge daily operational productivity, automate document synthesis, generate production code, and design autonomous agentic workflows.
          </p>

          <div className="flex flex-wrap gap-2">
            {[
              'LLM Prompt Engineering',
              'Generative AI Workflows',
              'Autonomous Coding Agents',
              'Multimodal Vision & OCR',
              'AI Shift Report Synthesis',
              'Automated Decision Rules'
            ].map((tag, i) => (
              <span key={i} className="text-xs px-3 py-1.5 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-200 font-medium">
                {tag}
              </span>
            ))}
          </div>
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

