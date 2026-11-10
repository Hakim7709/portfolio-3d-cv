#!/usr/bin/env python3
"""
50-Company Application Campaign Generator & Portal Builder
Author: Md Hakim Mia Job Suite
"""

import os
import sys
import json
import urllib.parse
from datetime import datetime

# Import candidate data and company list
sys.path.insert(0, os.path.dirname(__file__))
from data.companies_50_ireland import COMPANIES_50

CANDIDATE_NAME = "Md Hakim Mia"
CANDIDATE_PHONE = "+966570457976"
CANDIDATE_EMAIL = "mdhakimmia.me@gmail.com"
PORTFOLIO_LOCAL = "http://localhost:3000"
ATS_CV_URL = "http://localhost:3000/cv"

def build_cover_letter(company: dict) -> str:
    return f"""Dear Hiring Team at {company['name']},

I am writing to express my strong enthusiasm for Restaurant Assistant Manager, Shift Operations Supervisor, or Foodservice Leadership roles at {company['name']}.

With over 6 years of continuous, fast-paced operations leadership at Albaik Food Systems Co. (Saudi Arabia)—the gold standard in high-volume fast-casual dining—I have led shifts supervising 25+ kitchen, fryer, and customer service crew members, serving thousands of guests daily.

Key operational strengths I bring to {company['name']}:
- High-Volume Operations & Shift Velocity: Unflinching composure directing kitchen lines and cashier speed under peak surges while protecting product presentation.
- Daily Supplier Ordering & Par-Level Inventory: Directing raw protein, oil, and packaging replenishment orders, cold-chain dock inspection, and FIFO rotation to cut food loss by 14% with zero stock-out incidents.
- HACCP & Food Safety Mastery: Flawless adherence to commercial fryer temperature curves (NSF/PFC), oil filtration benchmarks, and audit hygiene checklists.
- Crew Coaching & Retention: Trained and onboarded 60+ team members across 6 years, driving team pride, safety culture, and operational excellence.
- AI & Automation Innovation: Master user of Generative AI tools and custom Python bots that automate compliance logs, saving 45 minutes of daily administrative overhead.

Having built a solid, disciplined career in Saudi Arabia, I am now seeking sponsored employment in Ireland under the General Employment Permit or Critical Skills schemes. My passport is clean and valid until 2035, and I am available for immediate relocation.

Please find my verified ATS CV attached, or explore my live operations portfolio at: {PORTFOLIO_LOCAL}

I would welcome the opportunity to speak with your hiring team regarding upcoming leadership opportunities across your {company['locations']} locations.

Warm regards,

{CANDIDATE_NAME}
Restaurant Assistant Coach | Supply Specialist | AI Automation Developer
WhatsApp / Mobile: {CANDIDATE_PHONE}
Email: {CANDIDATE_EMAIL}
"""

def generate_portal_html(output_file: str):
    date_str = datetime.now().strftime("%d %B %Y")
    
    # Generate JSON for client-side JavaScript filtering and local storage tracking
    companies_json = json.dumps(COMPANIES_50)
    
    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ireland 50-Company Application Campaign - {CANDIDATE_NAME}</title>
  <style>
    :root {{
      --bg: #070a12;
      --card-bg: rgba(15, 23, 42, 0.85);
      --border: rgba(255, 255, 255, 0.1);
      --accent: #38bdf8;
      --emerald: #10b981;
      --amber: #f59e0b;
      --purple: #a855f7;
    }}
    * {{ box-sizing: border-box; margin: 0; padding: 0; }}
    body {{
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background: var(--bg);
      color: #f1f5f9;
      line-height: 1.5;
      padding: 24px 16px 60px;
    }}
    .container {{ max-width: 1200px; margin: 0 auto; }}
    
    /* Header Area */
    .hero-card {{
      background: linear-gradient(135deg, rgba(30, 41, 59, 0.7), rgba(15, 23, 42, 0.9));
      border: 1px solid rgba(56, 189, 248, 0.25);
      border-radius: 20px;
      padding: 30px;
      margin-bottom: 24px;
      position: relative;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0,0,0,0.4);
    }}
    .hero-card::after {{
      content: '';
      position: absolute;
      top: -50px;
      right: -50px;
      width: 250px;
      height: 250px;
      background: radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%);
      pointer-events: none;
    }}
    .hero-top {{ display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 16px; }}
    .badge {{
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 5px 12px;
      border-radius: 999px;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }}
    .badge-cyan {{ background: rgba(6, 182, 212, 0.15); color: #38bdf8; border: 1px solid rgba(6, 182, 212, 0.3); }}
    .badge-emerald {{ background: rgba(16, 185, 129, 0.15); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.3); }}
    .badge-purple {{ background: rgba(168, 85, 247, 0.15); color: #c084fc; border: 1px solid rgba(168, 85, 247, 0.3); }}
    
    h1 {{ font-size: 28px; font-weight: 800; color: #ffffff; margin: 10px 0 6px; letter-spacing: -0.5px; }}
    .candidate-info {{ font-size: 14px; color: #94a3b8; }}
    .candidate-info strong {{ color: #e2e8f0; }}
    
    /* Progress Tracker Bar */
    .progress-box {{
      margin-top: 20px;
      background: rgba(0, 0, 0, 0.3);
      padding: 16px 20px;
      border-radius: 14px;
      border: 1px solid rgba(255,255,255,0.06);
    }}
    .progress-header {{ display: flex; justify-content: space-between; font-size: 13px; font-weight: 600; margin-bottom: 8px; }}
    .progress-bar-bg {{ height: 10px; background: rgba(255,255,255,0.08); border-radius: 999px; overflow: hidden; }}
    .progress-bar-fill {{ height: 100%; width: 0%; background: linear-gradient(90deg, #0284c7, #10b981); transition: width 0.3s ease; }}
    
    /* Control Toolbar */
    .controls {{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      margin-bottom: 20px;
    }}
    .search-input {{
      flex: 1;
      min-width: 260px;
      padding: 12px 18px;
      border-radius: 12px;
      background: rgba(15, 23, 42, 0.8);
      border: 1px solid rgba(255,255,255,0.12);
      color: #ffffff;
      font-size: 14px;
      outline: none;
      transition: border 0.2s;
    }}
    .search-input:focus {{ border-color: #38bdf8; box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.2); }}
    
    .filter-pills {{ display: flex; gap: 8px; flex-wrap: wrap; }}
    .pill-btn {{
      padding: 8px 14px;
      border-radius: 10px;
      font-size: 12px;
      font-weight: 600;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      color: #94a3b8;
      cursor: pointer;
      transition: all 0.2s;
    }}
    .pill-btn:hover, .pill-btn.active {{
      background: #0284c7;
      color: #ffffff;
      border-color: #38bdf8;
    }}
    
    /* Cards Grid */
    .grid {{
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
      gap: 16px;
    }}
    .company-card {{
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: transform 0.2s, border-color 0.2s;
      position: relative;
    }}
    .company-card:hover {{
      transform: translateY(-2px);
      border-color: rgba(56, 189, 248, 0.4);
    }}
    .company-card.applied {{
      border-color: rgba(16, 185, 129, 0.4);
      background: rgba(6, 78, 59, 0.15);
    }}
    
    .card-top {{ display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px; }}
    .company-number {{ font-size: 11px; font-weight: 700; color: #64748b; font-mono; }}
    .company-name {{ font-size: 17px; font-weight: 800; color: #ffffff; }}
    .company-category {{ font-size: 12px; color: #38bdf8; font-weight: 600; margin-top: 2px; }}
    
    .company-meta {{
      font-size: 12.5px;
      color: #94a3b8;
      margin: 12px 0 16px;
      line-height: 1.5;
    }}
    .company-meta strong {{ color: #cbd5e1; }}
    .company-notes {{
      background: rgba(255,255,255,0.03);
      padding: 8px 12px;
      border-radius: 8px;
      font-size: 11.5px;
      color: #cbd5e1;
      margin-bottom: 16px;
      border-left: 3px solid #38bdf8;
    }}
    
    /* Buttons */
    .btn-row {{ display: flex; gap: 8px; margin-bottom: 10px; }}
    .btn {{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      padding: 9px 12px;
      border-radius: 10px;
      font-size: 12px;
      font-weight: 700;
      text-decoration: none;
      cursor: pointer;
      transition: all 0.2s;
      border: none;
    }}
    .btn-primary {{ background: #0284c7; color: white; flex: 1; }}
    .btn-primary:hover {{ background: #0369a1; }}
    .btn-email {{ background: #059669; color: white; flex: 1; }}
    .btn-email:hover {{ background: #047857; }}
    .btn-copy {{ background: rgba(255,255,255,0.06); color: #cbd5e1; border: 1px solid rgba(255,255,255,0.1); width: 100%; }}
    .btn-copy:hover {{ background: rgba(255,255,255,0.12); color: white; }}
    
    /* Status Bar */
    .status-bar {{
      margin-top: 10px;
      padding-top: 10px;
      border-top: 1px solid rgba(255,255,255,0.08);
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 11.5px;
    }}
    .status-select {{
      background: rgba(15, 23, 42, 0.9);
      color: #f1f5f9;
      border: 1px solid rgba(255,255,255,0.15);
      border-radius: 6px;
      padding: 4px 8px;
      font-size: 11px;
      outline: none;
      cursor: pointer;
    }}
  </style>
</head>
<body>
  <div class="container">
    <!-- Hero Card -->
    <div class="hero-card">
      <div class="hero-top">
        <div>
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <span class="badge badge-cyan">Ireland Fast-Track 2026</span>
            <span class="badge badge-emerald">50 Verified Employers</span>
            <span class="badge badge-purple">General Employment Permit Eligible</span>
          </div>
          <h1>Target 50 Ireland Application Campaign</h1>
          <div class="candidate-info">
            Candidate: <strong>{CANDIDATE_NAME}</strong> • 6 Yrs Albaik Leadership, HACCP &amp; Full-Stack AI Automation • WhatsApp: <strong>{CANDIDATE_PHONE}</strong>
          </div>
        </div>
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <a href="{PORTFOLIO_LOCAL}" target="_blank" class="btn btn-primary" style="padding: 10px 16px;">🌐 View 3D Portfolio</a>
          <a href="{ATS_CV_URL}" target="_blank" class="btn btn-email" style="padding: 10px 16px;">📄 Print / View ATS CV</a>
        </div>
      </div>

      <div class="progress-box">
        <div class="progress-header">
          <span id="progress-text">Applications Progress: 0 of 50 Companies Contacted</span>
          <span id="progress-percent" style="color: #34d399;">0% Complete</span>
        </div>
        <div class="progress-bar-bg">
          <div id="progress-fill" class="progress-bar-fill"></div>
        </div>
      </div>
    </div>

    <!-- Toolbar -->
    <div class="controls">
      <input type="text" id="search-box" class="search-input" placeholder="🔍 Search by company name, location (e.g. Dublin, Galway), or category...">
      <div class="filter-pills">
        <button class="pill-btn active" onclick="filterCategory('All')">All (50)</button>
        <button class="pill-btn" onclick="filterCategory('Fast-Casual & QSR')">QSR &amp; Fast-Casual</button>
        <button class="pill-btn" onclick="filterCategory('Hotel')">Hotels &amp; Resorts</button>
        <button class="pill-btn" onclick="filterCategory('Catering')">Contract Catering</button>
        <button class="pill-btn" onclick="filterCategory('Retail')">Food Retail &amp; Forecourt</button>
      </div>
    </div>

    <!-- Cards Grid -->
    <div id="companies-grid" class="grid">
      <!-- Injected by JavaScript -->
    </div>
  </div>

  <script>
    const companies = {companies_json};
    let currentFilter = 'All';
    let searchQuery = '';

    // Load persisted status from localStorage
    function getStatus(id) {{
      return localStorage.getItem('applied_company_' + id) || 'Not Started';
    }}

    function setStatus(id, status) {{
      localStorage.setItem('applied_company_' + id, status);
      updateProgress();
      renderCompanies();
    }}

    function updateProgress() {{
      let count = 0;
      companies.forEach(c => {{
        const st = getStatus(c.id);
        if (st === 'Applied' || st === 'Interview' || st === 'Offer') {{
          count++;
        }}
      }});
      const pct = Math.round((count / companies.length) * 100);
      document.getElementById('progress-text').innerText = `Applications Progress: ${{count}} of ${{companies.length}} Companies Contacted`;
      document.getElementById('progress-percent').innerText = `${{pct}}% Complete`;
      document.getElementById('progress-fill').style.width = pct + '%';
    }}

    function filterCategory(cat) {{
      currentFilter = cat;
      document.querySelectorAll('.pill-btn').forEach(btn => {{
        btn.classList.toggle('active', btn.innerText.includes(cat) || (cat === 'All' && btn.innerText.includes('All')));
      }});
      renderCompanies();
    }}

    document.getElementById('search-box').addEventListener('input', (e) => {{
      searchQuery = e.target.value.toLowerCase();
      renderCompanies();
    }});

    function copyCoverLetter(name, locations) {{
      const text = `Dear Hiring Team at ${{name}},\\n\\nI am writing to express my strong enthusiasm for Restaurant Assistant Manager, Shift Operations Supervisor, or Foodservice Leadership roles at ${{name}} across your ${{locations}} operations.\\n\\nWith over 6 years of continuous, fast-paced operations leadership at Albaik Food Systems Co. (Saudi Arabia)—the gold standard in high-volume fast-casual dining—I direct shifts supervising 25+ crew members, maintaining 100% HACCP food safety audit records, precision supplier ordering, and cold-chain inventory par levels.\\n\\nConcurrently, I am an advanced Master User of AI, building automated process reporting bots that eliminate administrative shift-handover bottlenecks.\\n\\nI am actively seeking sponsored employment in Ireland under the General Employment Permit scheme. My passport is clean and valid until 2035, and I am prepared for immediate relocation.\\n\\nPlease review my verified ATS CV and contact me at ${{CANDIDATE_PHONE}} or ${{CANDIDATE_EMAIL}}.\\n\\nSincerely,\\n${{CANDIDATE_NAME}}`;
      navigator.clipboard.writeText(text).then(() => {{
        alert(`Tailored application letter for ${{name}} copied to clipboard! You can paste it directly into their careers portal.`);
      }});
    }}

    function renderCompanies() {{
      const container = document.getElementById('companies-grid');
      container.innerHTML = '';

      const filtered = companies.filter(c => {{
        const matchesCategory = (currentFilter === 'All') ||
          (currentFilter === 'Hotel' && (c.category.includes('Hotel') || c.category.includes('Resort'))) ||
          (currentFilter === 'Catering' && (c.category.includes('Catering') || c.category.includes('Dining'))) ||
          (currentFilter === 'Retail' && (c.category.includes('Retail') || c.category.includes('Forecourt') || c.category.includes('Supermarket'))) ||
          c.category.includes(currentFilter);

        const matchesSearch = !searchQuery ||
          c.name.toLowerCase().includes(searchQuery) ||
          c.locations.toLowerCase().includes(searchQuery) ||
          c.category.toLowerCase().includes(searchQuery);

        return matchesCategory && matchesSearch;
      }});

      filtered.forEach(c => {{
        const status = getStatus(c.id);
        const isApplied = (status === 'Applied' || status === 'Interview' || status === 'Offer');

        const mailSubject = encodeURIComponent(`Application: Restaurant Assistant Manager / Operations Leader – {CANDIDATE_NAME} (6 Yrs Albaik Leadership)`);
        const mailBody = encodeURIComponent(`Dear Hiring Team at ${{c.name}},\\n\\nI am applying for Restaurant Assistant Manager or Shift Leadership positions across your ${{c.locations}} operations.\\n\\nWith over 6 years of fast-paced shift leadership, 25+ crew coaching, 100% HACCP compliance, and daily supplier ordering at Albaik Food Systems, paired with master-level Generative AI and automation expertise, I am ready for immediate relocation to Ireland under employment permit sponsorship.\\n\\nPlease review my ATS CV and live portfolio: {PORTFOLIO_LOCAL}\\n\\nSincerely,\\n{CANDIDATE_NAME}\\n{CANDIDATE_PHONE}\\n{CANDIDATE_EMAIL}`);
        const mailtoLink = `mailto:${{c.hr_email}}?subject=${{mailSubject}}&body=${{mailBody}}`;

        const card = document.createElement('div');
        card.className = `company-card ${{isApplied ? 'applied' : ''}}`;
        card.innerHTML = `
          <div>
            <div class="card-top">
              <span class="company-number">#${{c.id}}</span>
              <span class="badge badge-cyan">${{c.sponsorship}}</span>
            </div>
            <div class="company-name">${{c.name}}</div>
            <div class="company-category">${{c.category}}</div>

            <div class="company-meta">
              📍 <strong>Locations:</strong> ${{c.locations}}<br>
              ✉️ <strong>HR Email:</strong> <a href="mailto:${{c.hr_email}}" style="color: #38bdf8; text-decoration: none;">${{c.hr_email}}</a>
            </div>

            <div class="company-notes">
              💡 ${{c.notes}}
            </div>
          </div>

          <div>
            <div class="btn-row">
              <a href="${{c.portal_url}}" target="_blank" class="btn btn-primary" onclick="setStatus(${{c.id}}, 'Applied')">🚀 Career Portal</a>
              <a href="${{mailtoLink}}" class="btn btn-email" onclick="setStatus(${{c.id}}, 'Applied')">✉️ Send Email</a>
            </div>
            <button class="btn btn-copy" onclick="copyCoverLetter('${{c.name}}', '${{c.locations}}')">📋 Copy Tailored Cover Letter</button>

            <div class="status-bar">
              <span>Status:</span>
              <select class="status-select" onchange="setStatus(${{c.id}}, this.value)">
                <option value="Not Started" ${{status === 'Not Started' ? 'selected' : ''}}>⏳ Not Started</option>
                <option value="Applied" ${{status === 'Applied' ? 'selected' : ''}}>✅ Applied</option>
                <option value="Interview" ${{status === 'Interview' ? 'selected' : ''}}>🎯 Interview</option>
                <option value="Offer" ${{status === 'Offer' ? 'selected' : ''}}>🏆 Offer</option>
                <option value="Rejected" ${{status === 'Rejected' ? 'selected' : ''}}>❌ Closed</option>
              </select>
            </div>
          </div>
        `;
        container.appendChild(card);
      }});
    }}

    // Initial render
    updateProgress();
    renderCompanies();
  </script>
</body>
</html>
"""
    with open(output_file, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"[OK] 50-Company Application Portal generated: {output_file}")

def generate_all_eml_drafts(output_dir: str):
    os.makedirs(output_dir, exist_ok=True)
    count = 0
    for c in COMPANIES_50:
        clean_name = c['name'].lower().replace(' ', '_').replace("'", '').replace('/', '_').replace('&', 'and')
        filename = f"{c['id']:02d}_{clean_name}.eml"
        filepath = os.path.join(output_dir, filename)
        
        body = build_cover_letter(c)
        eml_content = f"""From: {CANDIDATE_NAME} <{CANDIDATE_EMAIL}>
To: {c['hr_email']}
Subject: Application: Restaurant Assistant Manager / Operations Leader – {CANDIDATE_NAME} (6 Yrs Albaik Leadership)
MIME-Version: 1.0
Content-Type: text/plain; charset=utf-8

{body}
"""
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(eml_content)
        count += 1
    print(f"[OK] Generated {count} customized .eml application drafts in: {output_dir}")

if __name__ == "__main__":
    base_dir = os.path.dirname(__file__)
    portal_path = os.path.join(base_dir, "50_IRISH_COMPANIES_APPLICATION_PORTAL.html")
    drafts_dir = os.path.join(base_dir, "campaign_50_drafts")
    
    generate_portal_html(portal_path)
    generate_all_eml_drafts(drafts_dir)
