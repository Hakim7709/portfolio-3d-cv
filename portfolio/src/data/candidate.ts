export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  badge?: string;
  achievements: string[];
}

export interface ProjectItem {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  metrics: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface CandidateData {
  name: string;
  title: string;
  headline: string;
  location: string;
  origin: string;
  dob: string;
  phone: string;
  email: string;
  whatsappUrl: string;
  callUrl: string;
  githubUrl: string;
  facebookUrl: string;
  summary: string;
  experience: ExperienceItem[];
  skills: {
    operations: string[];
    technical: string[];
    certifications: string[];
  };
  projects: ProjectItem[];
  careerTarget: {
    targetCountry: string;
    targetRoles: string[];
    visaStatus: string;
    availability: string;
  };
}

export const CANDIDATE_DATA: CandidateData = {
  name: "Md Hakim Mia",
  title: "Restaurant Operations Coach & Full-Stack Developer",
  headline: "Bridging 6+ Years of High-Volume QSR Leadership at Albaik with Full-Stack Web & Python Process Automation",
  location: "Riyadh, Saudi Arabia",
  origin: "Bajitpur, Kishoreganj, Bangladesh",
  dob: "10 June 1999",
  phone: "+966570457976",
  email: "mdhakimmia.me@gmail.com",
  whatsappUrl: "https://wa.me/966570457976",
  callUrl: "tel:+966570457976",
  githubUrl: "https://github.com/Hakim7709",
  facebookUrl: "https://facebook.com",
  summary: "Dynamic, results-driven professional with 6+ years of front-line operations management, crew coaching, and strict HACCP compliance at Albaik (Saudi Arabia)—the gold standard in fast-casual volume and food quality. Combined with proven expertise in building production full-stack web applications, Python automation bots, WhatsApp Business API pipelines, and hardware/systems maintenance. Actively seeking sponsored employment in Ireland or Europe.",
  experience: [
    {
      role: "Restaurant Assistant Coach (Shift Supervisor & Operations Leader)",
      company: "Albaik Food Systems Co.",
      period: "2020 – Present (6 Years)",
      location: "Saudi Arabia (Branch: Hudaithi Mall EFC KJ04 / Flagship Locations)",
      badge: "6 Years Leadership",
      achievements: [
        "Coach, train, and direct 25+ kitchen, fry-station, and front-counter crew members across peak-volume shifts serving thousands of customers daily.",
        "Execute and enforce strict HACCP, NSF, and ISO food safety protocols, precision frying oil filtration, and cooking temperature curves (NSF Fryers, PFC Fryers, Corn Cookers).",
        "Maintain zero-incident food safety audit records through systematic morning checklist verification and hygiene standards enforcement.",
        "Engineered internal digital automation scripts for routine daily compliance reporting, reducing administrative overhead by 45 minutes every morning.",
        "Manage real-time inventory levels, reduce ingredient waste by 12%, and ensure 100% adherence to corporate brand operating standards."
      ]
    }
  ],
  skills: {
    operations: [
      "High-Volume QSR Operations",
      "Shift Supervision & Team Coaching",
      "HACCP & NSF Food Safety Compliance",
      "Commercial Fryer Calibration & Oil Management",
      "Inventory & Cost Control",
      "Guest Conflict Resolution & Velocity"
    ],
    technical: [
      "TypeScript & JavaScript (ES6+)",
      "Next.js 15 & React 19",
      "Tailwind CSS & Framer Motion",
      "Python (Playwright, Web Scraping, Automation Bots)",
      "Node.js & Express REST APIs",
      "WhatsApp Business API Integration",
      "SQL (PostgreSQL, MySQL, SQLite)",
      "Linux / Windows System Administration & Networking"
    ],
    certifications: [
      "Advanced HACCP Food Safety & Hygiene Certification",
      "Commercial Kitchen Equipment & Fryer Safety Protocols",
      "Full-Stack Web Engineering & Modern JavaScript Standards",
      "Python Process Automation Specialist"
    ]
  },
  projects: [
    {
      title: "Albaik Paperless Operations & HACCP Morning Pipeline",
      subtitle: "Automated Daily Restaurant Compliance Bot",
      description: "Custom Python automation engine utilizing Playwright and REST micro-tasks to verify restaurant parameters (fryer oil, CCP logs, temperatures, facility hygiene) and submit daily compliance records directly to management portals.",
      tags: ["Python", "Playwright", "Automation", "HACCP"],
      metrics: "Saves 45 mins/day; 100% error-free compliance",
      githubUrl: "https://github.com/Hakim7709"
    },
    {
      title: "Cloud WhatsApp Automated Billing & Notification Engine",
      subtitle: "High-Throughput Webhook Messaging Service",
      description: "Distributed Node.js backend integrating official WhatsApp Business API to deliver instant transactional invoices, real-time status alerts, and multi-tenant customer notifications with zero downtime.",
      tags: ["Node.js", "WhatsApp API", "REST API", "PostgreSQL"],
      metrics: "Sub-second delivery; handles thousands of monthly alerts",
      githubUrl: "https://github.com/Hakim7709"
    },
    {
      title: "Smart Khatiyan & Citizen Land Records Extraction Suite",
      subtitle: "AI Vision & Document Verification Platform",
      description: "High-accuracy multimodal extraction tool that parses intricate governmental land records (Khatiyan, Porcha, Dalil) and delivers instant legal audit reports matching standard Form 5463.",
      tags: ["Next.js", "Python", "AI Vision", "Tailwind CSS"],
      metrics: "99.4% OCR precision on historical records",
      githubUrl: "https://github.com/Hakim7709"
    },
    {
      title: "Enterprise Multi-Router Centralized Dashboard",
      subtitle: "Remote Network Infrastructure Manager",
      description: "Centralized monitoring system connecting multiple remote branch routers through encrypted Cloudflare tunnels with live client bandwidth telemetry, remote reboot, and uptime tracking.",
      tags: ["Python", "WebSocket", "Cloudflare Tunnels", "Linux"],
      metrics: "Live monitoring across branch networks",
      githubUrl: "https://github.com/Hakim7709"
    }
  ],
  careerTarget: {
    targetCountry: "Ireland / Europe / Global",
    targetRoles: [
      "Restaurant Assistant Manager",
      "Shift Operations Supervisor",
      "Operations / Systems Coordinator",
      "IT Support & Web Developer"
    ],
    visaStatus: "Eligible for General Employment Permit & Critical Skills Schemes",
    availability: "Immediate Notice Period / Ready for International Deployment"
  }
};

