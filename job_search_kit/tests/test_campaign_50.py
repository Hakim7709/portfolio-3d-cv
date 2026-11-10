#!/usr/bin/env python3
import unittest
import os
import sys

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from data.companies_50_ireland import COMPANIES_50
from generate_50_applications import build_cover_letter

class Test50CompaniesCampaign(unittest.TestCase):
    def test_company_list_length_and_schema(self):
        self.assertEqual(len(COMPANIES_50), 50, "Should contain exactly 50 target companies")
        for comp in COMPANIES_50:
            self.assertIn("id", comp)
            self.assertIn("name", comp)
            self.assertIn("hr_email", comp)
            self.assertIn("portal_url", comp)
            self.assertIn("locations", comp)
            self.assertIn("sponsorship", comp)
            self.assertTrue("@" in comp["hr_email"], f"Invalid email in {comp['name']}")
            self.assertTrue(comp["portal_url"].startswith("http"), f"Invalid portal URL in {comp['name']}")

    def test_generated_cover_letter_content(self):
        letter = build_cover_letter(COMPANIES_50[0])
        self.assertIn("Md Hakim Mia", letter)
        self.assertIn("+966570457976", letter)
        self.assertIn("Albaik Food Systems", letter)
        self.assertIn("HACCP", letter)
        self.assertIn("General Employment Permit", letter)
        self.assertNotIn("github", letter.lower())

    def test_draft_eml_files_exist(self):
        drafts_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'campaign_50_drafts'))
        self.assertTrue(os.path.exists(drafts_dir), "Drafts directory must exist")
        eml_files = [f for f in os.listdir(drafts_dir) if f.endswith('.eml')]
        self.assertEqual(len(eml_files), 50, "Should contain exactly 50 .eml files")

    def test_html_portal_exists(self):
        portal_file = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '50_IRISH_COMPANIES_APPLICATION_PORTAL.html'))
        self.assertTrue(os.path.exists(portal_file), "50_IRISH_COMPANIES_APPLICATION_PORTAL.html must exist")
        with open(portal_file, "r", encoding="utf-8") as f:
            content = f.read()
            self.assertIn("Supermac's Ireland", content)
            self.assertIn("Camile Thai Kitchen", content)
            self.assertIn("Dalata Hotel Group", content)
            self.assertIn("Musgrave Group", content)
            self.assertIn("Md Hakim Mia", content)

if __name__ == "__main__":
    unittest.main()
