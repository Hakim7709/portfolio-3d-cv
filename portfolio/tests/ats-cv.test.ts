import { describe, it, expect } from 'vitest';
import { CANDIDATE_DATA } from '../src/data/candidate';

describe('ATS CV Keyword and Content Requirements', () => {
  it('contains vital ATS target keywords for European sponsorship', () => {
    const dataStr = JSON.stringify(CANDIDATE_DATA).toLowerCase();

    // Critical European/Irish ATS Keywords
    expect(dataStr).toContain('haccp');
    expect(dataStr).toContain('food safety');
    expect(dataStr).toContain('albaik');
    expect(dataStr).toContain('assistant coach');
    expect(dataStr).toContain('operations');
    expect(dataStr).toContain('ireland');
    expect(dataStr).toContain('automation');
    expect(dataStr).toContain('python');
    expect(dataStr).toContain('next.js');
    expect(dataStr).toContain('+966570457976');
  });

  it('verifies candidate contact numbers and links', () => {
    expect(CANDIDATE_DATA.phone).toBe('+966570457976');
    expect(CANDIDATE_DATA.email).toBe('mdhakimmia.me@gmail.com');
  });
});
