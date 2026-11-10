# System Design Specification: 3D Interactive Portfolio & Ireland/European ATS CV Suite

**Author:** Antigravity AI  
**Candidate:** Md Hakim Mia  
**Target Market:** Ireland, Europe & Global Overseas Employment (Visa Sponsorship)  
**Date:** 2026-11-10  
**Status:** Validated & Ready for Implementation  

---

## 1. Executive Summary & Objectives

The goal of this project is to create an elite, interactive **3D Portfolio Website** and an **Ireland/European Standard ATS-Optimized CV & Application Automation Toolkit** for **Md Hakim Mia**.

### Candidate Positioning
Md Hakim Mia represents a high-value hybrid profile:
- **Operations & Hospitality Leader:** ~6 Years at Albaik (Saudi Arabia) as Restaurant Assistant Coach / Shift Supervisor, managing high-volume operations, strict food safety (HACCP/NSF/PFC), equipment maintenance, and team coaching.
- **Full-Stack Developer & Automation Engineer:** Proven builder of web applications, Python automation suites (e.g. Albaik paperless submission bots, Playwright automation), WhatsApp Business API systems, and database workflows.
- **Career Objective:** Secure a sponsored international job offer in Ireland / Europe in Restaurant / Operations Management, Systems Coordination, or IT / Web Development.

---

## 2. System Architecture Overview

```
                                  +------------------------------------+
                                  |         User / HR Recruiter        |
                                  +------------------------------------+
                                                    |
                                           (Scrolls & Interacts)
                                                    v
+-------------------------------------------------------------------------------------------------------+
|                                     Next.js 15 App Architecture                                       |
|                                                                                                       |
|  +---------------------------+  +-----------------------------------+  +----------------------------+ |
|  |     3D Viewport Layer     |  |          UI & Content Layer       |  |    Floating Action Dock    | |
|  |  (React Three Fiber /     |  |   - Glassmorphic Cards            |  |  - WhatsApp: +966570457976 | |
|  |   Three.js Canvas)        |  |   - Framer Motion Scroll Reveals  |  |  - Call:     +966570457976 | |
|  |  - 3D Walking Character   |  |   - 5 Interactive Waypoint Stages |  |  - Email:    mdhakimmia.me | |
|  |  - Scroll-Driven Rigging  |  |   - Albaik Experience Showcase    |  |  - GitHub:   Hakim7709     | |
|  |  - Dynamic Camera & Track |  |   - IT & Automation Live Projects |  |  - Facebook: Hakim Mia     | |
|  |  - WebGL Mobile Fallback  |  |   - Live ATS CV Viewer & PDF DL   |  |  - Download CV (Instant)   | |
|  +---------------------------+  +-----------------------------------+  +----------------------------+ |
+-------------------------------------------------------------------------------------------------------+
                                                    |
                   +--------------------------------+--------------------------------+
                   |                                                                 |
                   v                                                                 v
+--------------------------------------+                          +-------------------------------------+
|        European / Irish ATS CV       |                          |    Automated Job Application Kit    |
| - Standard 2-Page Europass / ATS     |                          | - Irish Job Scraper (Jobs.ie/Irish) |
| - High-Density Keyword Optimization  |                          | - Tailored Cover Letter Generator   |
| - High-Resolution Print / PDF Engine |                          | - Cold Email Outreach Automation    |
+--------------------------------------+                          +-------------------------------------+
```

---

## 3. 3D Interactive Portfolio Website Design

### 3.1 Technology Stack
- **Framework:** Next.js 15 (App Router, TypeScript)
- **Styling:** Tailwind CSS, Lucide React Icons
- **3D Graphics:** Three.js, React Three Fiber (`@react-three/fiber`), `@react-three/drei`
- **Animations:** Framer Motion, GSAP / ScrollTrigger integration
- **Deployment:** Vercel / GitHub Pages (Edge CDN, sub-2 second load time worldwide)

### 3.2 Visual Theme & Styling Guidelines
- **Palette:** 
  - Deep Obsidian / Charcoal Background: `#070a12`, `#0b0f19`
  - Neon Cyan / Electric Blue Accents: `#06b6d4`, `#38bdf8`
  - Emerald Green Accents (Operations/Success): `#10b981`
  - Warm Amber / Albaik Gold Touches: `#f59e0b`
- **Glassmorphism:** Frosted dark acrylic containers (`backdrop-blur-md bg-white/[0.03] border border-white/10`)
- **Typography:** Inter / Outfit for ultra-crisp modern sans-serif readability.

### 3.3 Scroll-Driven 3D Walk Journey (5 Waypoint Stages)
As the visitor scrolls vertically down the page, scroll progress (0.0 to 1.0) drives the 3D character's forward movement and leg-walk gait across an evolving path:

1. **Waypoint 1 (0% – 15%): The Arrival (Hero Section)**
   - Character stands, idle animation, friendly greeting wave.
   - Headline: *"Md Hakim Mia — Operations Leader & Tech Innovator"*.
   - Subtitle: *"Bridging 6+ Years of High-Volume QSR Leadership at Albaik with Full-Stack Engineering & Process Automation"*.
   - CTAs: "Explore Journey" and "Quick Contact".

2. **Waypoint 2 (16% – 40%): Albaik 6-Year Leadership Arena**
   - Environment transitions to an illuminated operational hub.
   - Role: **Restaurant Assistant Coach (2020 – Present)**.
   - Highlights:
     - Shift Supervisor & Crew Coaching across front-counter, packaging, and high-heat kitchens.
     - HACCP, NSF, and strict food safety compliance (oil filtration, frying curves, sanitation).
     - Daily high-volume peak-hour management in Saudi Arabia's premier fast-food franchise.

3. **Waypoint 3 (41% – 65%): IT, Web Development & Automation Lab**
   - Environment transforms with cybernetic grids and glowing code holographic terminals.
   - Skill clusters:
     - **Frontend:** React, Next.js, TypeScript, Tailwind CSS.
     - **Backend & Scripting:** Python (Playwright, Selenium, automated bot workflows), Node.js, Express.
     - **Data & Systems:** MySQL, PostgreSQL, REST APIs.
     - **IT Support & Infrastructure:** POS hardware, network routers, automated paperless report pipelines.

4. **Waypoint 4 (66% – 85%): Featured Production Projects**
   - Showcase cards with live demos/code links:
     - *Albaik Paperless Form Automation Bot:* Automated morning pipeline filling complex HACCP/maintenance logs.
     - *WhatsApp Automated Messaging & Billing Gateway:* Node.js/Python cloud messaging API.
     - *Khatiyan Land Records Verification & Data Extraction Suite:* High-accuracy automated parsing tool.
     - *Modern E-Commerce Web Platforms:* Responsive full-stack web applications.

5. **Waypoint 5 (86% – 100%): Global Career Terminal & Direct Hire**
   - Character arrives at an international departure gate / modern boardroom setting.
   - Direct Call-To-Action for Irish and European employers:
     - Relocation status: Ready for international relocation / work visa sponsorship from Saudi Arabia.
     - Clear contact matrix: One-tap WhatsApp, Direct Call, Email, Facebook, and GitHub.

### 3.4 Persistent Floating Action Bar (Dock)
A fixed glassmorphic dock at the bottom of the screen (visible on both mobile and desktop):
- 🟢 **WhatsApp:** `https://wa.me/966570457976`
- 📞 **Direct Call:** `tel:+966570457976`
- ✉️ **Email:** `mailto:mdhakimmia.me@gmail.com`
- 🌐 **Facebook:** Direct profile link
- 🐙 **GitHub:** `https://github.com/Hakim7709`
- 📄 **Download ATS CV:** Instant PDF download button.

---

## 4. Ireland & European Standard ATS CV Specification

### 4.1 Design & Parsing Requirements
- **Format:** Clean 1-2 page standard Europass / European corporate format.
- **ATS Compatibility:** 100% parseable by Workday, Taleo, Greenhouse, and Lever (no floating text boxes or complex nested SVG tables).
- **Dual Strengths Balance:**
  - Operations / Management Track: Restaurant Assistant Manager, Shift Operations Leader, Food & Beverage Supervisor.
  - Technology / Systems Track: IT Operations Specialist, Web Developer, Automation Coordinator.

### 4.2 Core CV Content Structure
1. **Contact Header:**
   - Name: Md Hakim Mia
   - Title: Restaurant Operations Assistant Coach | Full-Stack Developer
   - Location: Riyadh / Saudi Arabia (Open to Relocation: Ireland & Europe)
   - Contact: +966 57 045 7976 | mdhakimmia.me@gmail.com | github.com/Hakim7709
2. **Professional Profile:** High-impact 4-line summary tailored for visa-sponsoring employers.
3. **Core Competencies:** Operations Leadership, HACCP & Food Safety, Shift Scheduling, Staff Coaching, Full-Stack Web Development, Python Automation, Systems Troubleshooting.
4. **Professional Experience:**
   - *Albaik (Saudi Arabia) — Restaurant Assistant Coach (2020 – Present)*
     - Concrete metrics: Crew training (25+ staff), 100% hygiene audit scores, automated digital reporting saving 45 minutes daily.
5. **Technical Projects:**
   - Albaik Paperless Morning Automation
   - Automated Cloud WhatsApp Gateway
   - Land & Document Extraction Web Engine
6. **Education & Certifications:**
   - Higher Secondary Certificate (HSC) / Secondary School Certificate (SSC), Bangladesh.
   - Professional Food Safety, HACCP, and Web Development certifications.

---

## 5. Job Search & Application Toolkit

### 5.1 Irish Job Market Target Strategy
- **Target Roles in Ireland:**
  - Assistant General Manager / Restaurant Shift Manager / Catering Supervisor (General Employment Permit Eligible).
  - IT Support Specialist / Junior Web Developer / Systems Coordinator (Critical Skills & General Permit Eligible).
- **Target Platforms:**
  - `IrishJobs.ie`, `Jobs.ie`, `Indeed.ie`, `LinkedIn Ireland`.

### 5.2 Automation Scripts & Templates
1. **Targeted Job Matcher Script:** Python script to scrape and monitor Irish job listings with keywords like `Sponsorship`, `Restaurant Assistant Manager`, `Junior Developer`, `IT Operations`.
2. **Personalized Cover Letter Generator:** Standardized, high-converting cover letter customized for Irish hiring managers explaining readiness to relocate immediately.
3. **Email Outreach Engine:** Secure Python script using Gmail API / SMTP to draft or dispatch tailored applications directly without getting flagged by spam filters.

---

## 6. Implementation Stages & Verification Plan

| Stage | Deliverable | Verification Criteria |
| :--- | :--- | :--- |
| **Stage 1** | Project scaffolding & profile assets | Next.js 15, Tailwind, cropped passport portrait loaded, zero build errors. |
| **Stage 2** | 3D Scroll-Driven Walking Engine | Canvas renders smooth 60fps walking character linked directly to vertical scroll offset. |
| **Stage 3** | UI Waypoints & Interactive Content | All 5 stages styled with glassmorphism, responsive across mobile and desktop. |
| **Stage 4** | Floating Action Bar & Contact Integration | Direct WhatsApp, Call, Email, and GitHub links tested and working. |
| **Stage 5** | European ATS CV & PDF Generator | High-density ATS CV built, printable PDF generated, ATS keywords verified. |
| **Stage 6** | Automated Job Application Kit | Python job search script & cover letter templates created and tested in workspace. |

---

## 7. Approval & Sign-Off

This document serves as the validated blueprint for Md Hakim Mia's 3D Portfolio, CV, and International Job Application Suite. Upon approval, implementation begins immediately via the `writing-plans` workflow.
