'use client';

import React from 'react';
import Image from 'next/image';
import { CANDIDATE_DATA } from '@/data/candidate';
import { ArrowDown, MessageCircle, Phone, FileText, CheckCircle2, MapPin, Sparkles } from 'lucide-react';

interface HeroStageProps {
  onScrollToNext: () => void;
}

export function HeroStage({ onScrollToNext }: HeroStageProps) {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 pt-16 pb-24 relative z-10 text-white">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Relocation & Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-cyan-500/30 backdrop-blur-md text-cyan-300 text-xs sm:text-sm font-medium mb-6 shadow-lg shadow-cyan-500/10 animate-pulse">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Currently in Saudi Arabia (Albaik)</span>
          <span className="text-white/40">•</span>
          <span className="text-emerald-400 font-semibold flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> Targeting Ireland & Europe (Visa Ready)
          </span>
        </div>

        {/* Candidate Portrait Card */}
        <div className="relative mb-6 group">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-amber-500 to-indigo-500 rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-500" />
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-white/20 bg-slate-900 shadow-2xl">
            <Image
              src="/images/profile.jpg"
              alt={CANDIDATE_DATA.name}
              fill
              className="object-cover object-top scale-105"
              priority
            />
          </div>
          {/* Active Status Badge */}
          <div className="absolute bottom-1 right-1 w-5 h-5 bg-emerald-500 border-2 border-slate-950 rounded-full" title="Active & Ready" />
        </div>

        {/* Main Title & Subtitle */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4 bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
          {CANDIDATE_DATA.name}
        </h1>

        <p className="text-lg sm:text-2xl font-medium text-cyan-400 mb-4 max-w-2xl">
          {CANDIDATE_DATA.title}
        </p>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed mb-8">
          {CANDIDATE_DATA.headline}
        </p>

        {/* Location & Contact Meta */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-400 mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.03] border border-white/10">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            {CANDIDATE_DATA.location}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.03] border border-white/10">
            🏆 6 Years Albaik Coach
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.03] border border-white/10">
            💻 Full-Stack & Python Automation
          </span>
        </div>

        {/* Hero Quick Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
          {/* WhatsApp Direct */}
          <a
            href={CANDIDATE_DATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-sm shadow-lg shadow-emerald-600/25 transition duration-200"
          >
            <MessageCircle className="w-4 h-4" />
            Chat on WhatsApp
          </a>

          {/* Direct Phone Call */}
          <a
            href={CANDIDATE_DATA.callUrl}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-600/25 transition duration-200"
          >
            <Phone className="w-4 h-4" />
            Direct Call (+966)
          </a>

          {/* View ATS CV */}
          <a
            href="/cv"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white font-semibold text-sm backdrop-blur-md transition duration-200"
          >
            <FileText className="w-4 h-4 text-amber-400" />
            View ATS CV
          </a>
        </div>

        {/* 3D Walk Indicator / Scroll Prompt */}
        <button
          onClick={onScrollToNext}
          className="inline-flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-slate-400 hover:text-cyan-400 transition cursor-pointer group"
        >
          <span className="group-hover:translate-y-0.5 transition">Scroll down to walk with 3D avatar</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-cyan-400" />
        </button>
      </div>
    </section>
  );
}
