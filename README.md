# Md Hakim Mia - Global Career & 3D Interactive Portfolio Suite

**Candidate:** Md Hakim Mia  
**Current Role:** Restaurant Assistant Coach (6 Years at Albaik, Saudi Arabia)  
**Technical Skills:** Full-Stack Web Development, Python Automation, WhatsApp Cloud API  
**Contact:** +966 57 045 7976 (WhatsApp & Call) | mdhakimmia.me@gmail.com | [GitHub: Hakim7709](https://github.com/Hakim7709)  
**Target Market:** Ireland & Europe (Work Visa Sponsorship / General & Critical Skills Permits)  

---

## 🌟 What This System Delivers

### 1. 🚶‍♂️ 3D Interactive Scroll-Walking Portfolio (`portfolio/`)
- **Technology:** Next.js 15, React 19, TypeScript, Three.js, React Three Fiber, Tailwind CSS.
- **Scroll-Driven 3D Avatar:** A stylized 3D rigged character walks through 5 futuristic waypoint stages as the user scrolls:
  1. **Intro & Hero:** Candidate arrival, avatar greeting, and official portrait badge.
  2. **Albaik 6-Year Leadership Arena:** Shift management, 25+ crew coaching, 100% HACCP food safety compliance, fryer calibration.
  3. **IT & Full-Stack Automation Lab:** React/Next.js, Python Playwright scripts, WhatsApp API, database architectures.
  4. **Featured Production Systems:** Albaik Paperless automation bot, WhatsApp billing engine, Khatiyan extraction suite, Multi-router dashboard.
  5. **International Relocation Terminal:** Ireland & European sponsorship readiness and contact matrix.
- **Always-On Floating Action Dock:** Fixed bottom dock with instant links for **WhatsApp** (`+966570457976`), **Direct Call**, **Email**, **Facebook**, **GitHub**, and **1-Click ATS CV Download**.

### 2. 📄 Ireland & European Standard ATS CV (`portfolio/src/app/cv`)
- **Web ATS CV:** Accessible at `http://localhost:3000/cv`.
- **Standalone HTML CV:** `portfolio/public/cv/md_hakim_mia_cv.html` (zero-dependency, opens directly in any browser and prints to PDF cleanly).
- **100% ATS-Compliant:** High-density keyword matching for European QSR/Hospitality Management and IT Operations roles.

### 3. 🎯 Ireland Job Application & Outreach Toolkit (`job_search_kit/`)
- `irish_job_matcher.py`: Evaluates job postings from Irish portals (IrishJobs, Jobs.ie, Indeed, LinkedIn) for visa sponsorship eligibility and candidate profile fit.
- `cover_letters/`: High-converting cover letter templates tailored for Irish hiring managers (Hospitality Operations Manager & IT Developer tracks).
- `send_application_email.py`: Safe, spam-filter-free email dispatch script with attached PDF resume.

---

## 🚀 Quick Start Guide

### 1. Run Portfolio Website Locally:
```bash
cd portfolio
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.  
- Scroll down with your mouse or finger to watch your 3D avatar walk along the cyber runway through all 5 stages!
- Click any button in the floating bottom dock to test WhatsApp, Phone call, or CV download.

### 2. View & Print Your ATS CV:
- Open **[http://localhost:3000/cv](http://localhost:3000/cv)** in your browser and click **"Print / Save as ATS PDF"**.
- Or simply double-click `portfolio/public/cv/md_hakim_mia_cv.html` to open it in Chrome/Edge and press `Ctrl + P`.

### 3. Run the Irish Job Matcher:
```bash
python job_search_kit/irish_job_matcher.py
```

### 4. Run Automated Test Suite:
```bash
npx --prefix portfolio vitest run
python -m unittest discover -s job_search_kit/tests -p "*.py"
```

---

## 🌐 Deploy to Vercel (Free 1-Click Worldwide Hosting)

1. Push this repository to your GitHub account (`Hakim7709`).
2. Log into **[vercel.com](https://vercel.com)** using your GitHub account.
3. Import the `portfolio` directory and click **Deploy**.
4. Your live 3D portfolio will be online worldwide with HTTPS in under 60 seconds!

