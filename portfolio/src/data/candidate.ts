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
  githubUrl?: string;
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
  title: "Restaurant Operations Coach, Supply Specialist & Full-Stack AI Automation Developer",
  headline: "Bridging 6+ Years of High-Volume QSR Leadership, Supply Ordering & HACCP at Albaik with Master-Level AI Tooling & Full-Stack Automation",
  location: "Riyadh, Saudi Arabia",
  origin: "Bajitpur, Kishoreganj, Bangladesh",
  dob: "10 June 1999",
  phone: "+966570457976",
  email: "mdhakimmia.me@gmail.com",
  whatsappUrl: "https://wa.me/966570457976",
  callUrl: "tel:+966570457976",
  facebookUrl: "https://facebook.com",
  summary: "Dynamic, results-driven operations leader with 6+ years of front-line management, crew coaching, supplier ordering, and strict HACCP compliance at Albaik (Saudi Arabia)—the gold standard in fast-casual volume and food quality. Expert in daily vendor purchase orders, cold-chain receipt verification, inventory par-levels, and waste reduction. Master user of modern Generative AI tooling, prompt engineering, and autonomous agents, combined with proven production expertise in building full-stack web applications, Python automation bots, and WhatsApp Business API pipelines. Actively seeking sponsored employment in Ireland or Europe.",
  experience: [
    {
      role: "Restaurant Assistant Coach (Shift Supervisor & Operations Leader)",
      company: "Albaik Food Systems Co.",
      period: "2020 – Present (6 Years)",
      location: "Saudi Arabia (Branch: Hudaithi Mall EFC KJ04 / Flagship Locations)",
      badge: "6 Years Leadership",
      achievements: [
        "Coach, train, and direct 25+ kitchen, fry-station, and front-counter crew members across peak-volume shifts serving thousands of customers daily.",
        "Manage daily supplier ordering, vendor coordination, and par-level replenishment for raw proteins, frying oils, and packaging—ensuring zero stock-out incidents during peak surges.",
        "Execute rigorous cold-chain delivery inspection, dock temperature auditing, FIFO stock rotation, and raw ingredient loss prevention, reducing waste by 14%.",
        "Enforce strict HACCP, NSF, and ISO food safety protocols, precision frying oil filtration, and cooking temperature curves (NSF Fryers, PFC Fryers, Corn Cookers) with unbroken 100% audit records.",
        "Pioneered internal digital automation scripts and leveraged Generative AI workflows to streamline daily compliance checklists, reducing administrative shift-handover overhead by 45 minutes every morning.",
        "Maintain zero-incident food safety audit records through systematic morning checklist verification and hygiene standards enforcement."
      ]
    }
  ],
  skills: {
    operations: [
      "High-Volume QSR Operations & Shift Supervision",
      "Supply Chain & Daily Supplier Ordering",
      "Vendor Coordination & Purchase Order Management",
      "Inventory Par-Level Control & Stock Replenishment",
      "Cold-Chain Quality Assurance & Intake Auditing",
      "HACCP & NSF Food Safety Compliance",
      "Commercial Fryer Calibration & Oil Quality Management",
      "Food Waste Minimization & Cost Control",
      "Crew Coaching, Onboarding & Shift Velocity"
    ],
    technical: [
      "Master User of AI (Generative AI Workflows, LLM Prompt Engineering, AI Agents)",
      "AI-Assisted Operations & Multimodal Vision Extraction",
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
      "Supply Chain, Food Inventory & Par-Level Ordering Practices",
      "Master User of AI & Generative Automation Specialist",
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
      metrics: "Saves 45 mins/day; 100% error-free compliance"
    },
    {
      title: "Cloud WhatsApp Automated Billing & Notification Engine",
      subtitle: "High-Throughput Webhook Messaging Service",
      description: "Distributed Node.js backend integrating official WhatsApp Business API to deliver instant transactional invoices, real-time status alerts, and multi-tenant customer notifications with zero downtime.",
      tags: ["Node.js", "WhatsApp API", "REST API", "PostgreSQL"],
      metrics: "Sub-second delivery; handles thousands of monthly alerts"
    },
    {
      title: "Smart Khatiyan & Citizen Land Records Extraction Suite",
      subtitle: "AI Vision & Document Verification Platform",
      description: "High-accuracy multimodal extraction tool that parses intricate governmental land records (Khatiyan, Porcha, Dalil) and delivers instant legal audit reports matching standard Form 5463.",
      tags: ["Next.js", "Python", "AI Vision", "Tailwind CSS"],
      metrics: "99.4% OCR precision on historical records"
    },
    {
      title: "Enterprise Multi-Router Centralized Dashboard",
      subtitle: "Remote Network Infrastructure Manager",
      description: "Centralized monitoring system connecting multiple remote branch routers through encrypted Cloudflare tunnels with live client bandwidth telemetry, remote reboot, and uptime tracking.",
      tags: ["Python", "WebSocket", "Cloudflare Tunnels", "Linux"],
      metrics: "Live monitoring across branch networks"
    }
  ],
  careerTarget: {
    targetCountry: "Ireland / Europe / Global",
    targetRoles: [
      "Restaurant Assistant Manager",
      "Shift Operations & Supply Supervisor",
      "Food Supply Chain & Inventory Coordinator",
      "Hospitality Operations & AI Systems Specialist",
      "IT Support & Web Automation Developer"
    ],
    visaStatus: "Eligible for General Employment Permit & Critical Skills Schemes",
    availability: "Immediate Notice Period / Ready for International Deployment"
  }
};

