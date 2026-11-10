'use client';

import React from 'react';
import Image from 'next/image';
import { CANDIDATE_DATA } from '@/data/candidate';
import { ArrowDown, MessageCircle, Phone, FileText, CheckCircle2, MapPin, Sparkles, Award } from 'lucide-react';

interface HeroStageProps {
  onScrollToNext: () => void;
}

export function HeroStage({ onScrollToNext }: HeroStageProps) {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 pt-20 pb-20 relative z-10 text-white">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Text & Call to Action (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Candidate Real Profile Avatar Photo */}
          <div className="relative mb-5 flex items-center gap-4">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-cyan-400/60 shadow-xl shadow-cyan-500/20 bg-slate-900">
              <Image
                src="/images/profile.jpg"
                alt={CANDIDATE_DATA.name}
                fill
                className="object-cover object-top scale-105"
                priority
              />
            </div>
            <div className="text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Verified Candidate Profile
              </div>
              <div className="text-xs text-slate-400 mt-1 font-mono">
                Albaik Food Systems • 6 Yrs
              </div>
            </div>
          </div>

          {/* Relocation & Status Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-cyan-500/30 backdrop-blur-md text-cyan-300 text-xs sm:text-sm font-medium mb-6 shadow-lg shadow-cyan-500/10">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Currently in Saudi Arabia (Albaik)</span>
            <span className="text-white/40">•</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Targeting Ireland & Europe
            </span>
          </div>

          {/* Main Title & Subtitle */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-3 bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            {CANDIDATE_DATA.name}
          </h1>

          <p className="text-lg sm:text-2xl font-bold text-cyan-400 mb-4">
            {CANDIDATE_DATA.title}
          </p>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed mb-6">
            {CANDIDATE_DATA.headline}
          </p>

          {/* Meta Tags */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs text-slate-300 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              {CANDIDATE_DATA.location}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 font-semibold">
              <Award className="w-3.5 h-3.5" /> 6 Years Albaik Coach
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-semibold">
              💻 Full-Stack & Python Automation
            </span>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-10 w-full sm:w-auto">
            {/* WhatsApp Direct */}
            <a
              href={CANDIDATE_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-sm shadow-lg shadow-emerald-600/30 transition duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>

            {/* Direct Phone Call */}
            <a
              href={CANDIDATE_DATA.callUrl}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-600/30 transition duration-200"
            >
              <Phone className="w-4 h-4" />
              Call (+966)
            </a>

            {/* View ATS CV */}
            <a
              href="/cv"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white font-semibold text-sm backdrop-blur-md transition duration-200"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              View ATS CV
            </a>
          </div>

          {/* 3D Walk Indicator / Scroll Prompt */}
          <button
            onClick={onScrollToNext}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-slate-400 hover:text-cyan-400 transition cursor-pointer group"
          >
            <span className="group-hover:translate-x-0.5 transition">Scroll down to walk through journey</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-cyan-400" />
          </button>
        </div>

        {/* Right Column: 3D Holographic Avatar Stage Card (5 cols) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[340px] sm:max-w-[380px] rounded-3xl p-3 bg-gradient-to-b from-cyan-500/20 via-slate-900/80 to-slate-950/90 border border-cyan-500/30 backdrop-blur-2xl shadow-2xl shadow-cyan-500/10 group">
            
            {/* Ambient Back Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-sky-600 to-amber-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-700 pointer-events-none" />

            {/* 3D Character Main Display */}
            <div className="relative w-full h-[430px] rounded-2xl overflow-hidden bg-slate-950/80 border border-white/10">
              <Image
                src="/images/avatar_3d.jpg"
                alt="3D Avatar Md Hakim Mia"
                fill
                className="object-cover object-top scale-100 group-hover:scale-105 transition duration-700 ease-out"
                priority
              />

              {/* Floating Top Tag */}
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 border border-white/20 backdrop-blur-md text-[11px] font-semibold text-cyan-300 flex items-center gap-1.5 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                3D Interactive Avatar
              </div>

              {/* Bottom Card Identity & Passport Badge */}
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-1.5">
                    {CANDIDATE_DATA.name}
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-xs text-amber-300 font-mono">
                    Albaik Coach • 6 Yrs
                  </div>
                </div>

                {/* Cropped Passport Portrait Thumbnail */}
                <div className="relative w-11 h-13 rounded-lg overflow-hidden border border-white/30 shadow-md" title="Official Passport Photo Verified">
                  <Image
                    src="/images/profile.jpg"
                    alt="Official Passport Photo"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
