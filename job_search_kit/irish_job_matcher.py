#!/usr/bin/env python3
"""
Irish Job Matcher & Visa Sponsorship Scanner
Author: Md Hakim Mia Job Suite
"""

import re
import json
from typing import List, Dict, Any

KEYWORDS_SPONSORSHIP = [
    "visa sponsorship",
    "work permit",
    "sponsorship available",
    "critical skills employment permit",
    "general employment permit",
    "relocation support",
    "relocation package"
]

KEYWORDS_HOSPITALITY = [
    "assistant manager",
    "shift manager",
    "restaurant supervisor",
    "duty manager",
    "haccp",
    "fast food",
    "qsr",
    "catering",
    "kitchen supervisor",
    "operations coach",
    "ordering",
    "supplier",
    "inventory",
    "supply chain",
    "stock control"
]

KEYWORDS_TECH = [
    "junior developer",
    "web developer",
    "python",
    "react",
    "it support",
    "systems coordinator",
    "technical support",
    "automation",
    "ai",
    "generative ai",
    "prompt engineering"
]

def analyze_job_posting(title: str, company: str, location: str, description: str) -> Dict[str, Any]:
    """
    Evaluates whether a job posting matches Md Hakim Mia's profile
    and whether it offers or permits work visa sponsorship.
    """
    desc_lower = description.lower()
    title_lower = title.lower()

    sponsorship_found = any(k in desc_lower for k in KEYWORDS_SPONSORSHIP)
    hospitality_matches = [k for k in KEYWORDS_HOSPITALITY if k in desc_lower or k in title_lower]
    tech_matches = [k for k in KEYWORDS_TECH if k in desc_lower or k in title_lower]

    track = "Unclassified"
    if len(hospitality_matches) >= len(tech_matches) and len(hospitality_matches) > 0:
        track = "Hospitality / Operations Leadership"
    elif len(tech_matches) > 0:
        track = "IT & Web Development"

    score = 0
    if sponsorship_found:
        score += 50
    score += min(len(hospitality_matches) * 10, 30)
    score += min(len(tech_matches) * 10, 30)

    recommended = score >= 40 or (sponsorship_found and score >= 30)

    return {
        "title": title,
        "company": company,
        "location": location,
        "track": track,
        "sponsorship_detected": sponsorship_found,
        "match_score": min(score, 100),
        "recommended_for_application": recommended,
        "hospitality_keywords": hospitality_matches,
        "tech_keywords": tech_matches,
        "suggested_cover_letter": (
            "ireland_hospitality_manager.md"
            if track == "Hospitality / Operations Leadership"
            else "ireland_tech_operations.md"
        )
    }

if __name__ == "__main__":
    sample_job = {
        "title": "Assistant Restaurant Manager - Dublin Fast Casual",
        "company": "Premier Hospitality Group Ireland",
        "location": "Dublin 2, Ireland",
        "description": "Looking for an energetic Assistant Restaurant Manager with HACCP experience and shift leadership in high-volume dining. General employment permit / work permit support considered for qualified candidates."
    }
    result = analyze_job_posting(**sample_job)
    print(json.dumps(result, indent=2))

