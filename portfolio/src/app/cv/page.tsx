import type { Metadata } from 'next';
import { AtsCvTemplate } from '@/components/cv/AtsCvTemplate';
import { CANDIDATE_DATA } from '@/data/candidate';

export const metadata: Metadata = {
  title: `${CANDIDATE_DATA.name} | Official European ATS CV (Print Ready)`,
  description: `Official Curriculum Vitae of ${CANDIDATE_DATA.name}. 6+ Years Albaik Operations Coach & Full-Stack Automation Developer. Formatted for Ireland & European recruitment standards.`
};

export default function CvPage() {
  return <AtsCvTemplate />;
}

