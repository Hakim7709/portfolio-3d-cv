import { describe, it, expect } from 'vitest';
import { CANDIDATE_DATA } from '../src/data/candidate';

describe('Floating Dock Action Integrity', () => {
  it('has verified Saudi WhatsApp URL with country code', () => {
    expect(CANDIDATE_DATA.whatsappUrl).toBe('https://wa.me/966570457976');
  });

  it('has direct tel protocol call link', () => {
    expect(CANDIDATE_DATA.callUrl).toBe('tel:+966570457976');
  });

  it('has verified email address', () => {
    expect(CANDIDATE_DATA.email).toBe('mdhakimmia.me@gmail.com');
  });

  it('has verified Facebook profile link and no GitHub link', () => {
    expect(CANDIDATE_DATA.facebookUrl).toBe('https://facebook.com');
    expect(CANDIDATE_DATA.githubUrl).toBeUndefined();
  });
});

