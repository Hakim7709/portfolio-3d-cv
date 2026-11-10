import { describe, it, expect } from 'vitest';
import { CANDIDATE_DATA } from '../src/data/candidate';

describe('Candidate Data Model Integrity', () => {
  it('contains the verified candidate contact details', () => {
    expect(CANDIDATE_DATA.name).toBe('Md Hakim Mia');
    expect(CANDIDATE_DATA.phone).toBe('+966570457976');
    expect(CANDIDATE_DATA.whatsappUrl).toBe('https://wa.me/966570457976');
    expect(CANDIDATE_DATA.callUrl).toBe('tel:+966570457976');
    expect(CANDIDATE_DATA.email).toBe('mdhakimmia.me@gmail.com');
  });

  it('contains 6 years Albaik experience', () => {
    const albaik = CANDIDATE_DATA.experience.find(e => e.company.includes('Albaik'));
    expect(albaik).toBeDefined();
    expect(albaik?.role).toContain('Restaurant Assistant Coach');
    expect(albaik?.period).toContain('6 Years');
  });

  it('contains both operations and technical skill suites', () => {
    expect(CANDIDATE_DATA.skills.operations.some(s => s.includes('HACCP'))).toBe(true);
    expect(CANDIDATE_DATA.skills.technical.some(s => s.includes('Next.js'))).toBe(true);
    expect(CANDIDATE_DATA.skills.technical.some(s => s.includes('Python'))).toBe(true);
  });

  it('lists production projects with metrics', () => {
    expect(CANDIDATE_DATA.projects.length).toBeGreaterThanOrEqual(3);
    CANDIDATE_DATA.projects.forEach(p => {
      expect(p.title.length).toBeGreaterThan(5);
      expect(p.metrics.length).toBeGreaterThan(0);
    });
  });
});
