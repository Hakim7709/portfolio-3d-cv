'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { HeroStage } from '@/components/sections/HeroStage';
import { AlbaikStage } from '@/components/sections/AlbaikStage';
import { TechLabStage } from '@/components/sections/TechLabStage';
import { ProjectsStage } from '@/components/sections/ProjectsStage';
import { GlobalTerminalStage } from '@/components/sections/GlobalTerminalStage';
import { FloatingDock } from '@/components/dock/FloatingDock';
import { CANDIDATE_DATA } from '@/data/candidate';
import { Footprints, FileText } from 'lucide-react';
import Link from 'next/link';

// Dynamically import Three.js Canvas to guarantee zero SSR hydration issues
const PortfolioCanvas = dynamic(
  () => import('@/components/canvas/PortfolioCanvas').then((mod) => mod.PortfolioCanvas),
  { ssr: false }
);

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(Math.max(scrollY / docHeight, 0), 1) : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="relative min-h-screen bg-[#070a12] text-white selection:bg-cyan-500 selection:text-black">
      {/* 1. Interactive 3D Canvas Layer */}
      <PortfolioCanvas scrollProgress={scrollProgress} />

      {/* 2. Top Navigation Bar */}
      <header className="fixed top-0 inset-x-0 z-40 bg-slate-950/70 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-amber-400 flex items-center justify-center font-black text-slate-950 text-sm shadow-md shadow-cyan-500/20">
            H
          </div>
          <div>
            <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition">
              {CANDIDATE_DATA.name}
            </div>
            <div className="text-[10px] text-slate-400 font-mono -mt-0.5">
              Albaik Coach • Full-Stack Dev
            </div>
          </div>
        </Link>

        {/* Desktop Stage Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-300">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-cyan-300 transition cursor-pointer">
            Start
          </button>
          <button onClick={() => scrollToSection('albaik')} className="hover:text-amber-300 transition cursor-pointer">
            Albaik 6 Yrs
          </button>
          <button onClick={() => scrollToSection('tech-lab')} className="hover:text-cyan-300 transition cursor-pointer">
            IT & Automation
          </button>
          <button onClick={() => scrollToSection('projects')} className="hover:text-emerald-300 transition cursor-pointer">
            Projects
          </button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-indigo-300 transition cursor-pointer">
            Global Hire
          </button>
        </nav>

        {/* Direct ATS CV Link */}
        <Link
          href="/cv"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-semibold transition"
        >
          <FileText className="w-3.5 h-3.5" />
          ATS CV (PDF)
        </Link>
      </header>

      {/* 3. Top Scroll Progress Indicator */}
      <div className="fixed top-0 inset-x-0 h-1 z-50 bg-slate-900">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 via-amber-400 to-emerald-500 transition-all duration-75"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* 4. Live 3D Walk Status Tracker (Float Pill) */}
      <div className="fixed top-18 right-4 z-30 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-md text-[11px] text-slate-300 font-mono">
        <Footprints className="w-3.5 h-3.5 text-cyan-400 animate-bounce" />
        <span>3D Walk: {Math.round(scrollProgress * 100)}% Journey</span>
      </div>

      {/* 5. Scrollable 5-Waypoint Content Layers */}
      <div className="relative z-10">
        <HeroStage onScrollToNext={() => scrollToSection('albaik')} />
        <AlbaikStage />
        <TechLabStage />
        <ProjectsStage />
        <GlobalTerminalStage />
      </div>

      {/* 6. Always-On Floating Action Dock */}
      <FloatingDock />
    </main>
  );
}
