'use client';

import React from 'react';
import { CANDIDATE_DATA } from '@/data/candidate';
import { PlaneTakeoff, MessageCircle, Phone, Mail, FileText, Globe, CheckCircle2, ArrowRight } from 'lucide-react';
import { FacebookIcon } from '@/components/icons/BrandIcons';

export function GlobalTerminalStage() {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center px-4 py-24 relative z-10 text-white">
      <div className="max-w-4xl mx-auto w-full text-center">
        {/* Stage Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
          <PlaneTakeoff className="w-3.5 h-3.5" />
          Waypoint 5 • International Relocation Terminal
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
          Ready for Global Deployment
        </h2>

        <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8">
          Currently based in Saudi Arabia with 6 years of proven fast-casual leadership at Albaik. Prepared for immediate relocation to Ireland, the UK, or Europe under employment permit & sponsorship schemes.
        </p>

        {/* Target Profile Card */}
        <div className="rounded-3xl p-6 sm:p-8 bg-slate-900/90 border border-indigo-500/30 backdrop-blur-2xl shadow-2xl mb-10 text-left max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-b border-white/10 pb-6 mb-6">
            <div>
              <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Primary Target Country</span>
              <div className="text-lg font-bold text-white mt-1">Ireland (Dublin, Cork, Galway & Nationwide)</div>
              <p className="text-xs text-slate-400 mt-1">Also open to UK & European Union</p>
            </div>
            <div>
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Permit & Visa Scheme</span>
              <div className="text-lg font-bold text-white mt-1">General Employment & Critical Skills</div>
              <p className="text-xs text-slate-400 mt-1">Fast-track processing from Saudi Arabia</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {CANDIDATE_DATA.careerTarget.targetRoles.map((role, rIdx) => (
              <span key={rIdx} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                {role}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Availability: <strong className="text-white">Immediate / Fast Notice</strong></span>
            <span>Passport Validity: <strong className="text-emerald-400">Valid until 2035</strong></span>
          </div>
        </div>

        {/* Contact Matrix Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href={CANDIDATE_DATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-sm shadow-xl shadow-emerald-600/30 transition transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp (+966 57 045 7976)
          </a>

          <a
            href={CANDIDATE_DATA.callUrl}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold text-sm shadow-xl shadow-cyan-600/30 transition transform hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4" />
            Direct Call (+966)
          </a>

          <a
            href={`mailto:${CANDIDATE_DATA.email}`}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white font-semibold text-sm backdrop-blur-md transition transform hover:-translate-y-0.5"
          >
            <Mail className="w-4 h-4 text-amber-400" />
            {CANDIDATE_DATA.email}
          </a>

          <a
            href="/cv"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-white font-semibold text-sm shadow-xl shadow-amber-600/25 transition transform hover:-translate-y-0.5"
          >
            <FileText className="w-4 h-4" />
            Download Ireland ATS CV
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 text-sm text-slate-400">
          <a href={CANDIDATE_DATA.facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition flex items-center gap-1.5">
            <FacebookIcon className="w-4 h-4 text-blue-400" /> Facebook
          </a>
        </div>
      </div>
    </section>
  );
}
