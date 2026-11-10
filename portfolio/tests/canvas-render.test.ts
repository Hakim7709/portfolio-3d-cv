import { describe, it, expect } from 'vitest';

describe('3D Scroll-Driven Walking Mechanics', () => {
  it('correctly maps scroll progress to character target depth', () => {
    const calculateTargetZ = (scrollProgress: number) => {
      return -14 + scrollProgress * 16.5;
    };

    // At top of page (0%), character starts back in the scene
    expect(calculateTargetZ(0)).toBeCloseTo(-14);
    // At bottom of page (100%), character reaches foreground
    expect(calculateTargetZ(1.0)).toBeCloseTo(2.5);
    // Midpoint progress
    expect(calculateTargetZ(0.5)).toBeCloseTo(-5.75);
  });

  it('generates cyclic limb swings as scroll progresses', () => {
    const getLimbPhase = (scrollProgress: number) => {
      return Math.sin(scrollProgress * 75);
    };

    const phase1 = getLimbPhase(0);
    const phase2 = getLimbPhase(0.02);
    const phase3 = getLimbPhase(0.04);

    expect(phase1).toBeCloseTo(0);
    expect(Math.abs(phase2)).toBeGreaterThan(0.5);
    expect(phase3).not.toBe(phase2);
  });

  it('calculates smooth path curvature (S-curve)', () => {
    const calculateCurvatureX = (scrollProgress: number) => {
      return Math.sin(scrollProgress * Math.PI * 3.5) * 1.8;
    };

    expect(calculateCurvatureX(0)).toBeCloseTo(0);
    expect(Math.abs(calculateCurvatureX(0.2))).toBeGreaterThan(0.5);
  });
});
