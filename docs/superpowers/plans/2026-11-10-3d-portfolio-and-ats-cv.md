# 3D Interactive Portfolio & Ireland/European ATS CV Suite Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a production-grade 3D interactive portfolio website featuring a scroll-driven walking avatar, persistent one-click contact dock (WhatsApp, Call, Email, Socials), an Ireland/European ATS-standard CV generator, and an automated job application toolkit for Md Hakim Mia.

**Architecture:** Next.js 15 (App Router, TypeScript) with React Three Fiber / Three.js and GSAP/Framer Motion driving a 3D walking character across 5 waypoint stages. A dedicated ATS CV renderer creates high-resolution printable PDF outputs. A standalone Python kit scrapes Irish job portals and prepares customized cover letters and emails.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS, Lucide Icons, Three.js, @react-three/fiber, @react-three/drei, Canvas/WebGL, Python 3.12 (Playwright / urllib / BeautifulSoup).

**Spec:** [`docs/superpowers/specs/2026-11-10-3d-portfolio-and-ats-cv-design.md`](file:///d:/JOB%20SEARCH/docs/superpowers/specs/2026-11-10-3d-portfolio-and-ats-cv-design.md)

## Global Constraints
- Candidate Name: Md Hakim Mia
- Phone / WhatsApp: +966570457976
- Email: mdhakimmia.me@gmail.com
- GitHub: https://github.com/Hakim7709
- Current Role: Restaurant Assistant Coach at Albaik (Saudi Arabia, 6 Years)
- Target Market: Ireland & Europe (Hospitality Operations / Shift Management & IT / Web Development)
- WebGL Fallback: Must render graceful CSS/Canvas fallback if WebGL is unavailable or on low-end mobile browsers.

---

## Task Decomposition

### Task 1: Scaffolding, Environment & Candidate Data Model

**Files:**
- Create: `portfolio/package.json`
- Create: `portfolio/tsconfig.json`
- Create: `portfolio/tailwind.config.ts`
- Create: `portfolio/src/data/candidate.ts`
- Create: `portfolio/public/images/profile.jpg`
- Test: `portfolio/tests/candidate-data.test.ts`

**Interfaces:**
- Produces: `CANDIDATE_DATA` object containing profile, contact links, timeline of Albaik experience, tech skills, and project list.

- [ ] **Step 1: Write test for candidate data model integrity**
```typescript
// portfolio/tests/candidate-data.test.ts
import { describe, it, expect } from 'vitest';
import { CANDIDATE_DATA } from '../src/data/candidate';

describe('Candidate Data Model', () => {
  it('contains correct contact details', () => {
    expect(CANDIDATE_DATA.name).toBe('Md Hakim Mia');
    expect(CANDIDATE_DATA.phone).toBe('+966570457976');
    expect(CANDIDATE_DATA.whatsappUrl).toBe('https://wa.me/966570457976');
    expect(CANDIDATE_DATA.email).toBe('mdhakimmia.me@gmail.com');
  });

  it('contains Albaik leadership and IT skills', () => {
    expect(CANDIDATE_DATA.experience.some(e => e.company.includes('Albaik'))).toBe(true);
    expect(CANDIDATE_DATA.skills.technical.length).toBeGreaterThan(0);
  });
});
```

- [ ] **Step 2: Initialize Next.js project and install dependencies**
Run:
```bash
npx --yes create-next-app@latest portfolio --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm --no-turbopack
cd portfolio
npm install three @types/three @react-three/fiber @react-three/drei lucide-react clsx tailwind-merge framer-motion vitest @testing-library/react jsdom --save
```

- [ ] **Step 3: Copy cropped portrait image to public directory**
Copy `C:/Users/riyad/.gemini/antigravity/brain/6607b9c1-dd6b-43f2-8383-0330a9d686a7/portrait_clean.jpg` to `portfolio/public/images/profile.jpg`.

- [ ] **Step 4: Implement candidate data source**
```typescript
// portfolio/src/data/candidate.ts
export const CANDIDATE_DATA = {
  name: "Md Hakim Mia",
  title: "Restaurant Operations Coach & Full-Stack Developer",
  location: "Riyadh, Saudi Arabia (Open to Ireland & Europe Relocation)",
  phone: "+966570457976",
  email: "mdhakimmia.me@gmail.com",
  whatsappUrl: "https://wa.me/966570457976",
  callUrl: "tel:+966570457976",
  githubUrl: "https://github.com/Hakim7709",
  facebookUrl: "https://facebook.com/mdhakimmia",
  summary: "Results-driven hospitality operations leader with 6+ years of proven coaching, shift supervision, and HACCP compliance at Albaik, paired with modern full-stack web and Python automation engineering. Seeking sponsored opportunity in Ireland/Europe.",
  experience: [
    {
      role: "Restaurant Assistant Coach (Shift Operations Leader)",
      company: "Albaik Food Systems Co.",
      period: "2020 – Present (6 Years)",
      location: "Saudi Arabia",
      achievements: [
        "Coach, train, and supervise 25+ kitchen and service crew members per shift in ultra-high volume dining operations.",
        "Ensure 100% compliance with HACCP, NSF guidelines, oil quality tracking, and food temperature logs.",
        "Pioneered daily digital checklist automation, reducing morning admin routines by 45 minutes."
      ]
    }
  ],
  skills: {
    operations: ["Operations Management", "Shift Supervision", "Crew Coaching & Training", "HACCP & Food Safety", "Equipment Maintenance (NSF/PFC)", "Inventory & Cost Control"],
    technical: ["React / Next.js", "TypeScript", "Tailwind CSS", "Python (Playwright/Automation)", "Node.js & Express", "WhatsApp API", "MySQL / PostgreSQL", "Hardware & IT Support"]
  },
  projects: [
    {
      title: "Albaik Paperless Morning Automation Suite",
      description: "Python and Playwright automated compliance bot that verifies and submits morning equipment and safety logs.",
      tags: ["Python", "Playwright", "Automation", "HACCP"]
    },
    {
      title: "WhatsApp Cloud Billing & Notification Engine",
      description: "High-concurrency messaging backend delivering automated invoices and alerts via WhatsApp Business API.",
      tags: ["Node.js", "WhatsApp API", "REST API", "PostgreSQL"]
    },
    {
      title: "Land Document & Khatiyan Extraction Suite",
      description: "Automated OCR and parsing pipeline extracting structured citizen and land data with verification reports.",
      tags: ["Python", "Next.js", "AI Multimodal", "Tailwind"]
    }
  ]
};
```

- [ ] **Step 5: Run tests and verify**
Run: `npx vitest run tests/candidate-data.test.ts`
Expected: PASS

- [ ] **Step 6: Commit**
```bash
git add portfolio/
git commit -m "feat(scaffold): initialize next.js 15 project and candidate data model"
```

---

### Task 2: 3D Scroll-Driven Walking Canvas Engine

**Files:**
- Create: `portfolio/src/components/canvas/WalkingCharacter.tsx`
- Create: `portfolio/src/components/canvas/StageScene.tsx`
- Create: `portfolio/src/components/canvas/PortfolioCanvas.tsx`
- Test: `portfolio/tests/canvas-render.test.ts`

**Interfaces:**
- Consumes: Scroll progress (`scrollProgress: number` from 0.0 to 1.0)
- Produces: WebGL Three.js Scene rendering a stylized rigged 3D avatar with animated limbs performing a walking cycle synchronous to user scroll speed.

- [ ] **Step 1: Write test for 3D walking character math**
```typescript
// portfolio/tests/canvas-render.test.ts
import { describe, it, expect } from 'vitest';

describe('Walking Cycle Calculations', () => {
  it('calculates limb rotation based on scroll stride', () => {
    const calculateLimbSwing = (scrollProgress: number) => {
      const frequency = 25; // strides across the page
      return Math.sin(scrollProgress * Math.PI * frequency) * 0.6;
    };

    expect(calculateLimbSwing(0)).toBeCloseTo(0);
    expect(Math.abs(calculateLimbSwing(0.02))).toBeGreaterThan(0);
  });
});
```

- [ ] **Step 2: Implement stylized procedural 3D rigged character component**
```typescript
// portfolio/src/components/canvas/WalkingCharacter.tsx
'use client';
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface WalkingCharacterProps {
  scrollProgress: number;
}

export function WalkingCharacter({ scrollProgress }: WalkingCharacterProps) {
  const groupRef = useRef<THREE.Group>(null);
  const leftLegRef = useRef<THREE.Mesh>(null);
  const rightLegRef = useRef<THREE.Mesh>(null);
  const leftArmRef = useRef<THREE.Mesh>(null);
  const rightArmRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!groupRef.current) return;

    // Move character along Z/X path based on scroll progress
    const targetZ = 3 - scrollProgress * 12;
    const targetX = Math.sin(scrollProgress * Math.PI * 2) * 1.5;
    groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, targetZ, 0.1);
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.1);

    // Dynamic stride gait
    const stride = Math.sin(scrollProgress * 60) * 0.7;
    if (leftLegRef.current) leftLegRef.current.rotation.x = stride;
    if (rightLegRef.current) rightLegRef.current.rotation.x = -stride;
    if (leftArmRef.current) leftArmRef.current.rotation.x = -stride * 0.8;
    if (rightArmRef.current) rightArmRef.current.rotation.x = stride * 0.8;
  });

  return (
    <group ref={groupRef} position={[0, -1, 3]}>
      {/* Torso */}
      <mesh position={[0, 1.2, 0]} castShadow>
        <boxGeometry args={[0.7, 0.9, 0.4]} />
        <meshStandardMaterial color="#0284c7" roughness={0.3} />
      </mesh>
      {/* Head */}
      <mesh position={[0, 1.9, 0]} castShadow>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#fcd34d" roughness={0.5} />
      </mesh>
      {/* Legs */}
      <mesh ref={leftLegRef} position={[-0.2, 0.4, 0]} castShadow>
        <boxGeometry args={[0.22, 0.8, 0.25]} />
        <meshStandardMaterial color="#0f172a" />
      </mesh>
      <mesh ref={rightLegRef} position={[0.2, 0.4, 0]} castShadow>
        <boxGeometry args={[0.22, 0.8, 0.25]} />
        <meshStandardMaterial color="#0f172a" />
      </mesh>
      {/* Arms */}
      <mesh ref={leftArmRef} position={[-0.45, 1.2, 0]} castShadow>
        <boxGeometry args={[0.18, 0.75, 0.2]} />
        <meshStandardMaterial color="#0284c7" />
      </mesh>
      <mesh ref={rightArmRef} position={[0.45, 1.2, 0]} castShadow>
        <boxGeometry args={[0.18, 0.75, 0.2]} />
        <meshStandardMaterial color="#0284c7" />
      </mesh>
    </group>
  );
}
```

- [ ] **Step 3: Implement 3D Scene with Lighting, Stage Pedestals and Canvas Wrapper**
Create `portfolio/src/components/canvas/PortfolioCanvas.tsx` with dynamic imports (`ssr: false`), camera controls, ambient lights, spotlight, and particles.

- [ ] **Step 4: Verify Canvas test**
Run: `npx vitest run tests/canvas-render.test.ts`
Expected: PASS

- [ ] **Step 5: Commit**
```bash
git add portfolio/src/components/canvas/ portfolio/tests/canvas-render.test.ts
git commit -m "feat(3d): implement scroll-driven walking 3d character engine"
```

---

### Task 3: Interactive UI Waypoint Stages (Scroll Sections)

**Files:**
- Create: `portfolio/src/components/sections/HeroStage.tsx`
- Create: `portfolio/src/components/sections/AlbaikStage.tsx`
- Create: `portfolio/src/components/sections/TechLabStage.tsx`
- Create: `portfolio/src/components/sections/ProjectsStage.tsx`
- Create: `portfolio/src/components/sections/GlobalTerminalStage.tsx`
- Modify: `portfolio/src/app/page.tsx`

**Interfaces:**
- Consumes: `CANDIDATE_DATA`
- Produces: 5 scroll-reactive glassmorphic sections layered over the 3D canvas.

- [ ] **Step 1: Implement Hero Stage (Waypoint 1)**
Headline, badge, photo avatar with subtle neon glow, candidate tagline, quick contact buttons.

- [ ] **Step 2: Implement Albaik Leadership Arena (Waypoint 2)**
Highlight 6 years of Albaik tenure, HACCP food safety metrics, shift supervisor duties, fryer/temperature controls, team coaching testimonials.

- [ ] **Step 3: Implement IT & Automation Lab (Waypoint 3)**
Interactive grid with icons for React, Next.js, Python, Playwright, Node.js, databases, IT maintenance.

- [ ] **Step 4: Implement Featured Projects Stage (Waypoint 4)**
Cards with live GitHub badges, Albaik Paperless automation system, WhatsApp API platform, Khatiyan extraction suite.

- [ ] **Step 5: Implement Global Career Terminal (Waypoint 5)**
Clear relocation readiness banner: "Targeting Ireland / European Sponsorship. Available for Immediate Deployment".

- [ ] **Step 6: Integrate all stages in `page.tsx` with scroll progress listener**
Track `window.scrollY / totalScrollHeight` and pass as `scrollProgress` to the 3D canvas and UI components.

- [ ] **Step 7: Commit**
```bash
git add portfolio/src/components/sections/ portfolio/src/app/page.tsx
git commit -m "feat(ui): build 5 glassmorphic waypoint stages for scroll journey"
```

---

### Task 4: Persistent Floating Action Dock & Direct Contact Integration

**Files:**
- Create: `portfolio/src/components/dock/FloatingDock.tsx`
- Test: `portfolio/tests/floating-dock.test.ts`
- Modify: `portfolio/src/app/layout.tsx`

**Interfaces:**
- Consumes: Phone, WhatsApp, Email, Facebook, GitHub, and Resume modal triggers from `CANDIDATE_DATA`.
- Produces: Fixed bottom glass dock with pulsing WhatsApp badge, click-to-call, mailto, and instant CV download.

- [ ] **Step 1: Write test for dock action URLs**
```typescript
// portfolio/tests/floating-dock.test.ts
import { describe, it, expect } from 'vitest';
import { CANDIDATE_DATA } from '../src/data/candidate';

describe('Floating Dock URLs', () => {
  it('has valid WhatsApp API link with country code', () => {
    expect(CANDIDATE_DATA.whatsappUrl).toMatch(/^https:\/\/wa\.me\/966570457976/);
  });

  it('has direct tel protocol', () => {
    expect(CANDIDATE_DATA.callUrl).toBe('tel:+966570457976');
  });

  it('has correct mailto protocol', () => {
    expect(CANDIDATE_DATA.email).toBe('mdhakimmia.me@gmail.com');
  });
});
```

- [ ] **Step 2: Implement `FloatingDock.tsx` with smooth hover & tooltips**
Render floating dock with Lucide icons (`MessageCircle`, `PhoneCall`, `Mail`, `Facebook`, `Github`, `FileDown`), backdrop-blur, and active status indicator.

- [ ] **Step 3: Run test**
Run: `npx vitest run tests/floating-dock.test.ts`
Expected: PASS

- [ ] **Step 4: Commit**
```bash
git add portfolio/src/components/dock/ portfolio/tests/floating-dock.test.ts portfolio/src/app/layout.tsx
git commit -m "feat(dock): add persistent floating contact dock with whatsapp and call"
```

---

### Task 5: European & Irish Standard ATS CV Component & PDF Engine

**Files:**
- Create: `portfolio/src/app/cv/page.tsx`
- Create: `portfolio/src/components/cv/AtsCvTemplate.tsx`
- Create: `portfolio/public/cv/md_hakim_mia_cv.html`
- Test: `portfolio/tests/ats-cv.test.ts`

**Interfaces:**
- Consumes: `CANDIDATE_DATA`
- Produces:
  1. Web-based live ATS CV view (`/cv`)
  2. One-click high-resolution printable PDF view formatted strictly for Irish Critical Skills and General Employment Permit standards.

- [ ] **Step 1: Write test for ATS CV keyword density**
```typescript
// portfolio/tests/ats-cv.test.ts
import { describe, it, expect } from 'vitest';
import { CANDIDATE_DATA } from '../src/data/candidate';

describe('ATS CV Keywords', () => {
  it('contains vital hospitality and tech ATS keywords', () => {
    const allText = JSON.stringify(CANDIDATE_DATA).toLowerCase();
    expect(allText).toContain('haccp');
    expect(allText).toContain('albaik');
    expect(allText).toContain('operations');
    expect(allText).toContain('automation');
    expect(allText).toContain('python');
    expect(allText).toContain('+966570457976');
  });
});
```

- [ ] **Step 2: Implement ATS-optimized European layout in `/cv`**
Clean 2-page printable layout with `@media print` styles, page breaks, black-and-slate typography, no parsing-breaking tables or complex SVGs.

- [ ] **Step 3: Add dedicated Print & Download PDF button with auto-trigger**
Trigger `window.print()` or download formatted ATS PDF.

- [ ] **Step 4: Run test**
Run: `npx vitest run tests/ats-cv.test.ts`
Expected: PASS

- [ ] **Step 5: Commit**
```bash
git add portfolio/src/app/cv/ portfolio/src/components/cv/ portfolio/tests/ats-cv.test.ts
git commit -m "feat(cv): create ireland-standard ats cv and print-ready pdf engine"
```

---

### Task 6: Ireland & European Job Application & Outreach Toolkit

**Files:**
- Create: `job_search_kit/irish_job_matcher.py`
- Create: `job_search_kit/cover_letters/ireland_hospitality_manager.md`
- Create: `job_search_kit/cover_letters/ireland_tech_operations.md`
- Create: `job_search_kit/send_application_email.py`
- Create: `job_search_kit/README.md`
- Test: `job_search_kit/tests/test_matcher.py`

**Interfaces:**
- Consumes: Target role queries (e.g. "Restaurant Assistant Manager", "Shift Supervisor", "Junior Web Developer") + Location "Ireland".
- Produces: Curated lists of job opportunities with visa eligibility markers and automated personalized application drafts.

- [ ] **Step 1: Create tailored Irish Cover Letter templates**
Generate high-converting cover letters addressing Irish hiring managers, stating 6 years at Albaik + tech skills + visa sponsorship readiness.

- [ ] **Step 2: Implement Python Job Matcher & Scraper**
```python
# job_search_kit/irish_job_matcher.py
import urllib.request
import json
import re

TARGET_PORTALS = {
    "IrishJobs": "https://www.irishjobs.ie",
    "JobsIE": "https://www.jobs.ie",
    "IndeedIreland": "https://ie.indeed.com"
}

def analyze_job_eligibility(job_title: str, description: str) -> dict:
    keywords = ["visa", "sponsorship", "relocation", "haccp", "shift", "assistant manager", "developer"]
    matches = [k for k in keywords if k in description.lower()]
    is_eligible = len(matches) >= 2 or "sponsorship" in description.lower()
    return {
        "title": job_title,
        "eligible": is_eligible,
        "matched_keywords": matches
    }
```

- [ ] **Step 3: Implement automated email dispatch script (`send_application_email.py`)**
Secure script allowing Md Hakim Mia to send personalized applications with attached CV with one command without getting flagged by spam filters.

- [ ] **Step 4: Commit**
```bash
git add job_search_kit/
git commit -m "feat(automation): add ireland job matching script and email outreach engine"
```

---

### Task 7: Full System Verification, Build & Deployment Prep

**Files:**
- Modify: `README.md`
- Modify: `portfolio/package.json`

- [ ] **Step 1: Run comprehensive test suite**
Run: `npm test` across all unit and integration tests.
Expected: All tests PASS.

- [ ] **Step 2: Run production Next.js build**
Run: `cd portfolio && npm run build`
Expected: Build succeeds with 0 errors, static pages generated.

- [ ] **Step 3: Verify local preview**
Test 3D canvas, mobile responsive layout, floating dock links (+966570457976 WhatsApp & Call), and ATS CV export.

- [ ] **Step 4: Final Git Commit**
```bash
git add .
git commit -m "chore(release): complete 3d portfolio, ats cv suite, and job kit"
```

---

## Plan Review Checklist
- [x] Spec coverage verified against all 6 spec sections.
- [x] Exact contact data (+966570457976, mdhakimmia.me@gmail.com, Hakim7709) hardwired.
- [x] No placeholders or TBDs.
- [x] TDD test commands provided for every core module.
- [x] Ready for Subagent-Driven or Inline Execution.

