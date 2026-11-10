'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CANDIDATE_DATA } from '@/data/candidate';
import { MessageCircle, Phone, Mail, FileText, Globe, Sparkles } from 'lucide-react';
import { FacebookIcon } from '@/components/icons/BrandIcons';

export function FloatingDock() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const dockItems = [
    {
      id: 'whatsapp',
      label: 'Chat on WhatsApp (+966)',
      icon: MessageCircle,
      href: CANDIDATE_DATA.whatsappUrl,
      external: true,
      color: 'hover:text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500/40',
      badge: 'Online'
    },
    {
      id: 'call',
      label: 'Direct Phone Call',
      icon: Phone,
      href: CANDIDATE_DATA.callUrl,
      external: false,
      color: 'hover:text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/40'
    },
    {
      id: 'email',
      label: 'Send Email',
      icon: Mail,
      href: `mailto:${CANDIDATE_DATA.email}`,
      external: false,
      color: 'hover:text-amber-400 hover:bg-amber-500/10 hover:border-amber-500/40'
    },
    {
      id: 'cv',
      label: 'Ireland ATS CV (PDF)',
      icon: FileText,
      href: '/cv',
      external: false,
      color: 'text-amber-300 hover:text-amber-200 bg-amber-500/10 border-amber-500/30'
    },
    {
      id: 'facebook',
      label: 'Facebook Profile',
      icon: FacebookIcon,
      href: CANDIDATE_DATA.facebookUrl,
      external: true,
      color: 'hover:text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/40'
    }
  ];

  return (
    <aside aria-label="Quick contact links" className="fixed bottom-4 sm:bottom-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-2xl bg-slate-950/85 border border-white/15 backdrop-blur-2xl shadow-2xl shadow-black/80">
        {dockItems.map((item) => {
          const Icon = item.icon;
          const isCurrentActive = activeTooltip === item.id;

          return (
            <div
              key={item.id}
              className="relative flex items-center"
              onMouseEnter={() => setActiveTooltip(item.id)}
              onMouseLeave={() => setActiveTooltip(null)}
            >
              {/* Floating Tooltip */}
              {isCurrentActive && (
                <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-slate-900 border border-white/20 text-white text-xs font-medium whitespace-nowrap shadow-xl pointer-events-none animate-in fade-in zoom-in-95 duration-150 z-50">
                  {item.label}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900" />
                </div>
              )}

              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className={`relative p-2.5 sm:p-3 rounded-xl border border-transparent text-slate-300 transition duration-200 flex items-center justify-center ${item.color}`}
                >
                  <Icon className="w-5 h-5 sm:w-5 sm:h-5" />
                  {item.badge && (
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  )}
                </a>
              ) : (
                <Link
                  href={item.href}
                  aria-label={item.label}
                  className={`relative p-2.5 sm:p-3 rounded-xl border border-transparent text-slate-300 transition duration-200 flex items-center justify-center ${item.color}`}
                >
                  <Icon className="w-5 h-5 sm:w-5 sm:h-5" />
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}
