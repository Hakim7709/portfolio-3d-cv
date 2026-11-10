'use client';

import React from 'react';
import Image from 'next/image';
import { CANDIDATE_DATA } from '@/data/candidate';
import { Phone, Mail, MapPin, Globe, Printer, ArrowLeft, Download, ShieldCheck, CheckCircle } from 'lucide-react';
import { GithubIcon } from '@/components/icons/BrandIcons';
import Link from 'next/link';

export function AtsCvTemplate() {
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 py-6 sm:py-12 px-3 sm:px-6 text-slate-900 font-sans print:p-0 print:bg-white">
      {/* Top Action Toolbar (Hidden in Print) */}
      <div className="max-w-4xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-3 print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-white/10 transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to 3D Portfolio
        </Link>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-lg shadow-emerald-600/30 transition cursor-pointer"
          >
            <Printer className="w-4 h-4" /> Print / Save as ATS PDF
          </button>
        </div>
      </div>

      {/* Main ATS Paper Sheet (Standard A4 / European Format) */}
      <article className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-2xl print:shadow-none print:p-6 print:rounded-none border border-slate-200">
        {/* Header Block */}
        <header className="border-b-2 border-slate-900 pb-6 mb-6 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
          <div className="text-center sm:text-left flex-1">
            <h1 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-slate-950">
              {CANDIDATE_DATA.name}
            </h1>
            <p className="text-base sm:text-lg font-bold text-sky-700 mt-1">
              {CANDIDATE_DATA.title}
            </p>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Targeting: <strong>Ireland & Europe (Visa Sponsorship / Employment Permit Eligible)</strong>
            </p>

            {/* Contact Matrix */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-y-1.5 gap-x-4 text-xs text-slate-700 mt-3 font-medium">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                Riyadh, Saudi Arabia
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-slate-500" />
                <a href={CANDIDATE_DATA.callUrl} className="hover:text-sky-700">{CANDIDATE_DATA.phone}</a> (WhatsApp & Call)
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <a href={`mailto:${CANDIDATE_DATA.email}`} className="hover:text-sky-700">{CANDIDATE_DATA.email}</a>
              </span>
              <span className="flex items-center gap-1">
                <GithubIcon className="w-3.5 h-3.5 text-slate-500" />
                <a href={CANDIDATE_DATA.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-sky-700">github.com/Hakim7709</a>
              </span>
            </div>
          </div>

          {/* Portrait Photo */}
          <div className="relative w-24 h-28 rounded-lg overflow-hidden border border-slate-300 shrink-0 shadow-sm">
            <Image
              src="/images/hakim_executive_cv.jpg"
              alt={CANDIDATE_DATA.name}
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </header>

        {/* 1. Executive Summary */}
        <section className="mb-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-sky-800 border-b border-slate-200 pb-1 mb-2">
            Professional Summary
          </h2>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed text-justify">
            Accomplished Operations Leader and Systems Specialist with over <strong>6 years of continuous leadership experience</strong> at <strong>Albaik Food Systems Co.</strong> (Saudi Arabia), directing high-volume fast-casual kitchen and front-of-house teams. Expert in <strong>HACCP compliance</strong>, crew training, commercial kitchen maintenance, and food safety quality assurance. Concurrently an active full-stack software and Python automation developer, creating internal bots that automate paperless compliance audits and customer messaging pipelines. Ready for immediate relocation to Ireland or Europe under General Employment or Critical Skills schemes.
          </p>
        </section>

        {/* 2. Core Competencies */}
        <section className="mb-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-sky-800 border-b border-slate-200 pb-1 mb-2.5">
            Core Competencies & Key Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Hospitality & Operations Leadership:</h3>
              <ul className="list-disc list-inside space-y-0.5 text-slate-700">
                <li>High-Volume Restaurant & Shift Supervision (Albaik)</li>
                <li>HACCP & NSF Food Safety Certification</li>
                <li>Commercial Fryer Calibration (NSF/PFC) & Oil Quality</li>
                <li>Crew Coaching & Talent Mentoring (25+ staff)</li>
                <li>Inventory Control, Loss Prevention & Waste Reduction</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Software & Technical Engineering:</h3>
              <ul className="list-disc list-inside space-y-0.5 text-slate-700">
                <li>Full-Stack Web (Next.js 15, React 19, TypeScript, Tailwind)</li>
                <li>Python Automation (Playwright, Selenium, Web Scrapers)</li>
                <li>WhatsApp Cloud Business API Integration</li>
                <li>Relational Databases (PostgreSQL, MySQL, SQLite)</li>
                <li>POS Systems, Network Routers & Hardware Troubleshooting</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. Professional Experience */}
        <section className="mb-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-sky-800 border-b border-slate-200 pb-1 mb-3">
            Professional Experience
          </h2>

          <div className="mb-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
              <h3 className="text-sm font-bold text-slate-950">
                Restaurant Assistant Coach (Shift Operations Leader)
              </h3>
              <span className="text-xs font-semibold text-slate-600">
                2020 – Present (6 Years)
              </span>
            </div>
            <div className="flex items-center justify-between text-xs text-sky-800 font-semibold mb-2">
              <span>Albaik Food Systems Co.</span>
              <span>Riyadh & Saudi Arabia Flagship Branches</span>
            </div>

            <ul className="list-disc list-inside space-y-1 text-xs text-slate-700 leading-relaxed">
              <li>Direct and coach 25+ kitchen, fry-station, and counter crew members per shift in one of the world's highest-transaction dining environments.</li>
              <li>Enforce strict HACCP, ISO food safety, and NSF temperature guidelines across commercial fryers (NSF, PFC, and corn cookers), maintaining an unbroken 100% compliance audit record.</li>
              <li>Engineered custom Python automated morning compliance scripts that verify fryer parameters, CCP logs, and hygiene records, saving 45 minutes of daily administrative overhead.</li>
              <li>Manage peak rush hour velocity, ensuring ticket times meet strict franchise SLAs while maintaining optimal food taste, presentation, and packaging integrity.</li>
              <li>Trained and on-boarded over 60 new crew members across six years, fostering high retention, team morale, and operational safety culture.</li>
            </ul>
          </div>
        </section>

        {/* 4. Production Technical Projects */}
        <section className="mb-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-sky-800 border-b border-slate-200 pb-1 mb-3">
            Technical & Automation Projects
          </h2>

          <div className="space-y-3 text-xs">
            <div>
              <div className="flex justify-between font-bold text-slate-900">
                <span>Albaik Paperless Morning Automation Engine</span>
                <span className="text-slate-500 font-mono text-[11px]">Python, Playwright, Batch Scripts</span>
              </div>
              <p className="text-slate-700 mt-0.5">
                Automated robotic browser bot that logs into operational portals, validates fryer cooking temperature curves, hygiene forms, and submits morning checklist logs with automated validation reports.
              </p>
            </div>

            <div>
              <div className="flex justify-between font-bold text-slate-900">
                <span>Cloud WhatsApp Automated Billing & Alert Engine</span>
                <span className="text-slate-500 font-mono text-[11px]">Node.js, WhatsApp Cloud API, PostgreSQL</span>
              </div>
              <p className="text-slate-700 mt-0.5">
                Production webhook-based messaging service delivering automated transactional invoices, notifications, and real-time alerts to customers via official Meta WhatsApp Business API.
              </p>
            </div>

            <div>
              <div className="flex justify-between font-bold text-slate-900">
                <span>Enterprise Multi-Router Centralized Dashboard</span>
                <span className="text-slate-500 font-mono text-[11px]">Python, Cloudflare Tunnels, WebSockets</span>
              </div>
              <p className="text-slate-700 mt-0.5">
                Network infrastructure management platform allowing remote bandwidth monitoring, client device tagging, and zero-trust remote troubleshooting across geographically distributed branch routers.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Education & Personal Details */}
        <section className="border-t border-slate-200 pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-sky-800 mb-1.5">
                Education & Credentials
              </h2>
              <p className="font-semibold text-slate-900">Secondary & Higher Secondary Education</p>
              <p className="text-slate-600">Dhaka Education Board, Bangladesh</p>
              <p className="text-slate-700 mt-1">
                • Advanced Food Safety & HACCP Hygiene Protocols (Saudi Arabia)
                <br />• Full-Stack Web Development & Modern JavaScript (Online)
              </p>
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-sky-800 mb-1.5">
                Immigration & Relocation Status
              </h2>
              <p className="text-slate-700">
                • <strong>Nationality:</strong> Bangladeshi
                <br />• <strong>Current Location:</strong> Saudi Arabia (Albaik)
                <br />• <strong>Passport:</strong> Valid until 2035 (Clean Record)
                <br />• <strong>Target Destination:</strong> Ireland / United Kingdom / Europe
                <br />• <strong>Availability:</strong> Immediate / Standard Notice
              </p>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <footer className="mt-6 pt-4 border-t border-slate-100 text-[10px] text-slate-400 text-center flex items-center justify-between">
          <span>Md Hakim Mia • Official ATS CV</span>
          <span>Verified Reference & Portfolio: https://hakim7709.github.io</span>
        </footer>
      </article>
    </div>
  );
}
